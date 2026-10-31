import JSZip from 'jszip';

export interface ParsedPaletteEntry {
  name: string;
  states: Record<string, string | number | boolean>;
}

export interface ImportedMcStructure {
  id: string;
  fileName: string;
  displayName: string;
  fileSizeBytes: number;
  rawBytes: Uint8Array;
  size: [number, number, number]; // [sizeX, sizeY, sizeZ]
  origin: [number, number, number];
  totalVolume: number;
  nonAirBlocks: number;
  palette: ParsedPaletteEntry[];
  /**
   * Run-Length Encoded flat array of [paletteIndex, runLength, paletteIndex, runLength, ...]
   * where paletteIndex === -1 means air / structure_void.
   * Iteration order matches Bedrock .mcstructure: x from 0..sizeX-1, y from 0..sizeY-1, z from 0..sizeZ-1
   */
  rleIndices: number[];
  topBlocksPreview: string[];
  parseMethod: 'nbt_le' | 'nbt_be' | 'json' | 'raw_binary';
}

class NbtBinaryReader {
  private view: DataView;
  private bytes: Uint8Array;
  public offset: number = 0;
  private littleEndian: boolean;
  private decoder = new TextDecoder('utf-8');

  constructor(bytes: Uint8Array, littleEndian: boolean = true) {
    this.bytes = bytes;
    this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    this.littleEndian = littleEndian;
  }

  hasMore(count = 1): boolean {
    return this.offset + count <= this.bytes.byteLength;
  }

  readByte(): number {
    if (!this.hasMore(1)) throw new Error('EOF reading byte');
    const val = this.view.getInt8(this.offset);
    this.offset += 1;
    return val;
  }

  readUByte(): number {
    if (!this.hasMore(1)) throw new Error('EOF reading ubyte');
    const val = this.view.getUint8(this.offset);
    this.offset += 1;
    return val;
  }

  readShort(): number {
    if (!this.hasMore(2)) throw new Error('EOF reading short');
    const val = this.view.getInt16(this.offset, this.littleEndian);
    this.offset += 2;
    return val;
  }

  readUShort(): number {
    if (!this.hasMore(2)) throw new Error('EOF reading ushort');
    const val = this.view.getUint16(this.offset, this.littleEndian);
    this.offset += 2;
    return val;
  }

  readInt(): number {
    if (!this.hasMore(4)) throw new Error('EOF reading int');
    const val = this.view.getInt32(this.offset, this.littleEndian);
    this.offset += 4;
    return val;
  }

  readLong(): number {
    if (!this.hasMore(8)) throw new Error('EOF reading long');
    const low = this.view.getInt32(this.offset, this.littleEndian);
    const high = this.view.getInt32(this.offset + 4, this.littleEndian);
    this.offset += 8;
    return this.littleEndian ? low : high;
  }

  readFloat(): number {
    if (!this.hasMore(4)) throw new Error('EOF reading float');
    const val = this.view.getFloat32(this.offset, this.littleEndian);
    this.offset += 4;
    return val;
  }

  readDouble(): number {
    if (!this.hasMore(8)) throw new Error('EOF reading double');
    const val = this.view.getFloat64(this.offset, this.littleEndian);
    this.offset += 8;
    return val;
  }

  readString(): string {
    const len = this.readUShort();
    if (!this.hasMore(len)) throw new Error('EOF reading string');
    const sub = this.bytes.subarray(this.offset, this.offset + len);
    this.offset += len;
    return this.decoder.decode(sub);
  }

  readTagPayload(tagType: number, depth = 0): any {
    if (depth > 64) throw new Error('Max NBT recursion depth exceeded');
    switch (tagType) {
      case 0:
        return null;
      case 1:
        return this.readByte();
      case 2:
        return this.readShort();
      case 3:
        return this.readInt();
      case 4:
        return this.readLong();
      case 5:
        return this.readFloat();
      case 6:
        return this.readDouble();
      case 7: {
        const len = this.readInt();
        if (len < 0 || !this.hasMore(len)) throw new Error('Invalid byte array length');
        const arr = new Int8Array(len);
        for (let i = 0; i < len; i++) arr[i] = this.readByte();
        return Array.from(arr);
      }
      case 8:
        return this.readString();
      case 9: {
        const elemType = this.readUByte();
        const len = this.readInt();
        if (len < 0 || len > 5000000) throw new Error('Invalid list length');
        const list: any[] = [];
        for (let i = 0; i < len; i++) {
          list.push(this.readTagPayload(elemType, depth + 1));
        }
        return list;
      }
      case 10: {
        const obj: Record<string, any> = {};
        while (this.hasMore(1)) {
          const nextType = this.readUByte();
          if (nextType === 0) break;
          const key = this.readString();
          obj[key] = this.readTagPayload(nextType, depth + 1);
        }
        return obj;
      }
      case 11: {
        const len = this.readInt();
        if (len < 0 || !this.hasMore(len * 4)) throw new Error('Invalid int array length');
        const arr: number[] = new Array(len);
        for (let i = 0; i < len; i++) arr[i] = this.readInt();
        return arr;
      }
      case 12: {
        const len = this.readInt();
        if (len < 0 || !this.hasMore(len * 8)) throw new Error('Invalid long array length');
        const arr: number[] = new Array(len);
        for (let i = 0; i < len; i++) arr[i] = this.readLong();
        return arr;
      }
      default:
        throw new Error(`Unsupported NBT tag type: ${tagType}`);
    }
  }

  readRoot(): any {
    const rootType = this.readUByte();
    if (rootType !== 10) {
      throw new Error(`Expected root TAG_Compound (10), got ${rootType}`);
    }
    const _rootName = this.readString();
    return this.readTagPayload(10, 0);
  }
}

async function maybeDecompressGzip(bytes: Uint8Array): Promise<Uint8Array> {
  if (bytes.byteLength >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b) {
    try {
      if (typeof DecompressionStream !== 'undefined') {
        const ds = new DecompressionStream('gzip');
        const writer = ds.writable.getWriter();
        writer.write(bytes as unknown as BufferSource);
        writer.close();
        const response = new Response(ds.readable);
        const ab = await response.arrayBuffer();
        return new Uint8Array(ab);
      }
    } catch {
      // Fallback to original bytes if decompression fails
    }
  }
  return bytes;
}

export function sanitizeStructureId(fileName: string): string {
  const baseName = fileName.split(/[\\/]/).pop() || fileName;
  const base = baseName
    .replace(/\.(mcstructure|mcstruct|nbt|schem|schematic|bdx|json|zip|mcpack|mcaddon)$/i, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  return base || 'estrutura_importada';
}

function encodeRle(indices: number[], maxBlocksLimit = 250000): number[] {
  const rle: number[] = [];
  if (!indices || indices.length === 0) return rle;
  const limit = Math.min(indices.length, maxBlocksLimit);
  let currentVal = indices[0];
  let runLen = 1;

  for (let i = 1; i < limit; i++) {
    const val = indices[i];
    if (val === currentVal && runLen < 32767) {
      runLen++;
    } else {
      rle.push(currentVal, runLen);
      currentVal = val;
      runLen = 1;
    }
  }
  rle.push(currentVal, runLen);
  return rle;
}

function normalizeStateValue(val: any): string | number | boolean {
  if (typeof val === 'boolean' || typeof val === 'string' || typeof val === 'number') {
    return val;
  }
  return String(val);
}

function parseBlockStateString(rawStr: string): {
  name: string;
  states: Record<string, string | number | boolean>;
} {
  const bracketIdx = rawStr.indexOf('[');
  if (bracketIdx === -1) {
    const clean = rawStr.trim();
    return {
      name: clean.includes(':') ? clean : `minecraft:${clean}`,
      states: {},
    };
  }
  const baseName = rawStr.slice(0, bracketIdx).trim();
  const inside = rawStr.slice(bracketIdx + 1, rawStr.lastIndexOf(']')).trim();
  const states: Record<string, string | number | boolean> = {};
  if (inside) {
    for (const pair of inside.split(',')) {
      const [k, v] = pair.split('=');
      if (k && v !== undefined) {
        const trimmedV = v.trim();
        if (trimmedV === 'true') states[k.trim()] = true;
        else if (trimmedV === 'false') states[k.trim()] = false;
        else if (!Number.isNaN(Number(trimmedV)) && trimmedV !== '') states[k.trim()] = Number(trimmedV);
        else states[k.trim()] = trimmedV;
      }
    }
  }
  return {
    name: baseName.includes(':') ? baseName : `minecraft:${baseName}`,
    states,
  };
}

function extractStructureFromNbtRoot(
  root: any,
  id: string,
  fileName: string,
  displayName: string,
  rawBytes: Uint8Array,
  parseMethod: ImportedMcStructure['parseMethod']
): ImportedMcStructure | null {
  if (!root || typeof root !== 'object') return null;

  // Unwrap Sponge Schematic v3 root if nested under .Schematic
  const targetRoot = root.Schematic && typeof root.Schematic === 'object' ? root.Schematic : root;

  // 1. Standard Bedrock .mcstructure format
  if (Array.isArray(targetRoot.size) && targetRoot.size.length === 3 && targetRoot.structure) {
    const sizeX = Math.max(1, Number(targetRoot.size[0]) || 1);
    const sizeY = Math.max(1, Number(targetRoot.size[1]) || 1);
    const sizeZ = Math.max(1, Number(targetRoot.size[2]) || 1);
    const origin: [number, number, number] = Array.isArray(targetRoot.structure_world_origin)
      ? [
          Number(targetRoot.structure_world_origin[0]) || 0,
          Number(targetRoot.structure_world_origin[1]) || 0,
          Number(targetRoot.structure_world_origin[2]) || 0,
        ]
      : [0, 0, 0];

    const rawPalette: any[] =
      targetRoot.structure?.palette?.default?.block_palette ||
      targetRoot.structure?.palette?.block_palette ||
      [];

    const rawLayer0: number[] =
      Array.isArray(targetRoot.structure?.block_indices) &&
      Array.isArray(targetRoot.structure.block_indices[0])
        ? targetRoot.structure.block_indices[0]
        : Array.isArray(targetRoot.structure?.block_indices)
          ? targetRoot.structure.block_indices
          : [];

    const cleanPalette: ParsedPaletteEntry[] = [];
    const oldIdxToNewIdx = new Map<number, number>();
    const blockCounts = new Map<string, number>();

    rawPalette.forEach((entry, idx) => {
      const blockName = String(entry?.name || 'minecraft:air');
      if (
        blockName === 'minecraft:air' ||
        blockName === 'air' ||
        blockName === 'minecraft:structure_void' ||
        blockName === 'structure_void'
      ) {
        oldIdxToNewIdx.set(idx, -1);
        return;
      }

      const rawStates = entry?.states && typeof entry.states === 'object' ? entry.states : {};
      const cleanStates: Record<string, string | number | boolean> = {};
      for (const [k, v] of Object.entries(rawStates)) {
        cleanStates[k] = normalizeStateValue(v);
      }

      const newIdx = cleanPalette.length;
      cleanPalette.push({
        name: blockName.includes(':') ? blockName : `minecraft:${blockName}`,
        states: cleanStates,
      });
      oldIdxToNewIdx.set(idx, newIdx);
    });

    const totalVolume = sizeX * sizeY * sizeZ;
    const mappedIndices: number[] = new Array(totalVolume).fill(-1);
    let nonAirBlocks = 0;

    const len = Math.min(totalVolume, rawLayer0.length);
    for (let i = 0; i < len; i++) {
      const oldIdx = Number(rawLayer0[i]);
      if (oldIdx >= 0 && oldIdxToNewIdx.has(oldIdx)) {
        const mapped = oldIdxToNewIdx.get(oldIdx)!;
        mappedIndices[i] = mapped;
        if (mapped >= 0) {
          nonAirBlocks++;
          const bName = cleanPalette[mapped].name.replace('minecraft:', '');
          blockCounts.set(bName, (blockCounts.get(bName) || 0) + 1);
        }
      }
    }

    const topBlocksPreview = Array.from(blockCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => `${name} (${count}x)`);

    // If input was JSON, synthesize genuine Bedrock Little-Endian .mcstructure binary so structureManager.place() works too
    const finalBytes =
      parseMethod === 'nbt_le'
        ? rawBytes
        : buildSampleMcStructureBinary(id, displayName, [sizeX, sizeY, sizeZ], cleanPalette, mappedIndices)
            .rawBytes;

    return {
      id,
      fileName,
      displayName,
      fileSizeBytes: finalBytes.byteLength,
      rawBytes: finalBytes,
      size: [sizeX, sizeY, sizeZ],
      origin,
      totalVolume,
      nonAirBlocks,
      palette: cleanPalette,
      rleIndices: encodeRle(mappedIndices),
      topBlocksPreview,
      parseMethod,
    };
  }

  // 2. Java Edition .nbt structure fallback (size, palette, blocks: [{pos, state}])
  if (Array.isArray(targetRoot.size) && targetRoot.size.length === 3 && Array.isArray(targetRoot.blocks)) {
    const sizeX = Math.max(1, Number(targetRoot.size[0]) || 1);
    const sizeY = Math.max(1, Number(targetRoot.size[1]) || 1);
    const sizeZ = Math.max(1, Number(targetRoot.size[2]) || 1);
    const rawPalette: any[] = Array.isArray(targetRoot.palette) ? targetRoot.palette : [];

    const cleanPalette: ParsedPaletteEntry[] = [];
    const oldIdxToNewIdx = new Map<number, number>();
    const blockCounts = new Map<string, number>();

    rawPalette.forEach((entry, idx) => {
      const blockName = String(entry?.Name || entry?.name || 'minecraft:air');
      if (
        blockName === 'minecraft:air' ||
        blockName === 'air' ||
        blockName === 'minecraft:structure_void' ||
        blockName === 'minecraft:cave_air'
      ) {
        oldIdxToNewIdx.set(idx, -1);
        return;
      }
      const rawProps = entry?.Properties || entry?.states || {};
      const cleanStates: Record<string, string | number | boolean> = {};
      for (const [k, v] of Object.entries(rawProps)) {
        cleanStates[k] = normalizeStateValue(v);
      }
      const newIdx = cleanPalette.length;
      cleanPalette.push({
        name: blockName.includes(':') ? blockName : `minecraft:${blockName}`,
        states: cleanStates,
      });
      oldIdxToNewIdx.set(idx, newIdx);
    });

    const totalVolume = sizeX * sizeY * sizeZ;
    const mappedIndices: number[] = new Array(totalVolume).fill(-1);
    let nonAirBlocks = 0;

    for (const b of targetRoot.blocks) {
      if (!Array.isArray(b?.pos) || b.pos.length < 3) continue;
      const x = Number(b.pos[0]);
      const y = Number(b.pos[1]);
      const z = Number(b.pos[2]);
      if (x < 0 || x >= sizeX || y < 0 || y >= sizeY || z < 0 || z >= sizeZ) continue;
      const flatIdx = x * (sizeY * sizeZ) + y * sizeZ + z;
      const oldState = Number(b.state);
      const mapped = oldIdxToNewIdx.get(oldState) ?? -1;
      mappedIndices[flatIdx] = mapped;
      if (mapped >= 0) {
        nonAirBlocks++;
        const bName = cleanPalette[mapped].name.replace('minecraft:', '');
        blockCounts.set(bName, (blockCounts.get(bName) || 0) + 1);
      }
    }

    const topBlocksPreview = Array.from(blockCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => `${name} (${count}x)`);

    // Convert Java .nbt into genuine Bedrock Little-Endian .mcstructure binary so native Bedrock structureManager works too
    const bedrockBuilt = buildSampleMcStructureBinary(
      id,
      displayName,
      [sizeX, sizeY, sizeZ],
      cleanPalette,
      mappedIndices
    );

    return {
      ...bedrockBuilt,
      fileName,
      topBlocksPreview,
      parseMethod,
    };
  }

  // 3. WorldEdit / Sponge .schem format (Width, Height, Length, Palette, BlockData or Blocks.Palette/Blocks.Data)
  const schemWidth = Number(targetRoot.Width);
  const schemHeight = Number(targetRoot.Height);
  const schemLength = Number(targetRoot.Length);
  const schemPaletteObj = targetRoot.Palette || targetRoot.Blocks?.Palette;
  const schemBlockData: number[] | undefined = targetRoot.BlockData || targetRoot.Blocks?.Data;

  if (
    schemWidth > 0 &&
    schemHeight > 0 &&
    schemLength > 0 &&
    schemPaletteObj &&
    typeof schemPaletteObj === 'object' &&
    Array.isArray(schemBlockData)
  ) {
    const cleanPalette: ParsedPaletteEntry[] = [];
    const oldIdxToNewIdx = new Map<number, number>();
    const blockCounts = new Map<string, number>();

    for (const [stateStr, rawIdx] of Object.entries(schemPaletteObj)) {
      const idx = Number(rawIdx);
      const parsedState = parseBlockStateString(stateStr);
      if (
        parsedState.name === 'minecraft:air' ||
        parsedState.name === 'minecraft:cave_air' ||
        parsedState.name === 'minecraft:void_air' ||
        parsedState.name === 'minecraft:structure_void'
      ) {
        oldIdxToNewIdx.set(idx, -1);
      } else {
        const newIdx = cleanPalette.length;
        cleanPalette.push(parsedState);
        oldIdxToNewIdx.set(idx, newIdx);
      }
    }

    // Decode varint byte array from BlockData
    const decodedVarints: number[] = [];
    let i = 0;
    while (i < schemBlockData.length) {
      let value = 0;
      let varintLength = 0;
      while (true) {
        const b = schemBlockData[i++] & 0xff;
        value |= (b & 127) << (varintLength++ * 7);
        if (varintLength > 5) break;
        if ((b & 128) !== 128) break;
      }
      decodedVarints.push(value);
    }

    const totalVolume = schemWidth * schemHeight * schemLength;
    const mappedIndices: number[] = new Array(totalVolume).fill(-1);

    // Sponge .schem index order is (y * Length + z) * Width + x -> convert to Bedrock (x * Height * Length + y * Length + z)
    for (let y = 0; y < schemHeight; y++) {
      for (let z = 0; z < schemLength; z++) {
        for (let x = 0; x < schemWidth; x++) {
          const schemIdx = (y * schemLength + z) * schemWidth + x;
          const oldState = decodedVarints[schemIdx] ?? -1;
          const mapped = oldIdxToNewIdx.get(oldState) ?? -1;
          if (mapped >= 0) {
            const bedrockFlatIdx = x * (schemHeight * schemLength) + y * schemLength + z;
            mappedIndices[bedrockFlatIdx] = mapped;
            const bName = cleanPalette[mapped].name.replace('minecraft:', '');
            blockCounts.set(bName, (blockCounts.get(bName) || 0) + 1);
          }
        }
      }
    }

    const bedrockBuilt = buildSampleMcStructureBinary(
      id,
      displayName,
      [schemWidth, schemHeight, schemLength],
      cleanPalette,
      mappedIndices
    );

    return {
      ...bedrockBuilt,
      fileName,
      parseMethod,
    };
  }

  return null;
}

export async function parseMcStructureBytes(
  rawInput: ArrayBuffer | Uint8Array,
  fileName: string
): Promise<ImportedMcStructure> {
  const originalBytes = rawInput instanceof Uint8Array ? rawInput : new Uint8Array(rawInput);
  const decompressedBytes = await maybeDecompressGzip(originalBytes);

  const shortFileName = fileName.split(/[\\/]/).pop() || fileName;
  const id = sanitizeStructureId(shortFileName);
  const cleanTitle = shortFileName
    .replace(/\.(mcstructure|mcstruct|nbt|schem|schematic|bdx|json)$/i, '')
    .replace(/[_-]+/g, ' ')
    .trim();
  const displayName = cleanTitle
    ? cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1)
    : 'Estrutura Importada';

  // Try 1: Little-Endian NBT (Standard Bedrock .mcstructure)
  try {
    const readerLe = new NbtBinaryReader(decompressedBytes, true);
    const rootLe = readerLe.readRoot();
    const parsedLe = extractStructureFromNbtRoot(
      rootLe,
      id,
      shortFileName,
      displayName,
      decompressedBytes,
      'nbt_le'
    );
    if (parsedLe) return parsedLe;
  } catch {
    // Continue to next format attempt
  }

  // Try 2: Big-Endian NBT (Java .nbt / WorldEdit .schem / Universal NBT)
  try {
    const readerBe = new NbtBinaryReader(decompressedBytes, false);
    const rootBe = readerBe.readRoot();
    const parsedBe = extractStructureFromNbtRoot(
      rootBe,
      id,
      shortFileName,
      displayName,
      decompressedBytes,
      'nbt_be'
    );
    if (parsedBe) return parsedBe;
  } catch {
    // Continue to next format attempt
  }

  // Try 3: JSON structure (.mcstruct JSON or custom format)
  try {
    const text = new TextDecoder('utf-8').decode(decompressedBytes).trim();
    if (text.startsWith('{')) {
      const jsonObj = JSON.parse(text);
      const parsedJson = extractStructureFromNbtRoot(
        jsonObj,
        id,
        shortFileName,
        displayName,
        decompressedBytes,
        'json'
      );
      if (parsedJson) return parsedJson;
    }
  } catch {
    // Continue to raw binary fallback
  }

  // Fallback: Raw binary bundled into BP/structures/<id>.mcstructure for native world.structureManager.place()
  return {
    id,
    fileName: shortFileName,
    displayName,
    fileSizeBytes: originalBytes.byteLength,
    rawBytes: decompressedBytes,
    size: [16, 16, 16],
    origin: [0, 0, 0],
    totalVolume: 4096,
    nonAirBlocks: 0,
    palette: [],
    rleIndices: [],
    topBlocksPreview: ['Arquivo Binário Nativo (.mcstructure)'],
    parseMethod: 'raw_binary',
  };
}

export async function parseMcStructureFile(file: File): Promise<ImportedMcStructure> {
  const ab = await file.arrayBuffer();
  return parseMcStructureBytes(ab, file.name);
}

function isZipMagicBytes(bytes: Uint8Array): boolean {
  return (
    bytes.byteLength >= 4 &&
    bytes[0] === 0x50 &&
    bytes[1] === 0x4b &&
    bytes[2] === 0x03 &&
    bytes[3] === 0x04
  );
}

function isStructureCandidateName(entryName: string): boolean {
  const lower = entryName.toLowerCase();
  if (
    lower.endsWith('/') ||
    lower.endsWith('manifest.json') ||
    lower.endsWith('pack_icon.png') ||
    lower.endsWith('.png') ||
    lower.endsWith('.jpg') ||
    lower.endsWith('.jpeg') ||
    lower.endsWith('.tga') ||
    lower.endsWith('.ogg') ||
    lower.endsWith('.fsb') ||
    lower.endsWith('.wav') ||
    lower.endsWith('.lang') ||
    lower.endsWith('.js') ||
    lower.endsWith('.ts') ||
    lower.endsWith('.txt') ||
    lower.endsWith('.md') ||
    lower.includes('__macosx')
  ) {
    return false;
  }
  if (
    lower.endsWith('.mcstructure') ||
    lower.endsWith('.mcstruct') ||
    lower.endsWith('.nbt') ||
    lower.endsWith('.schem') ||
    lower.endsWith('.schematic') ||
    lower.endsWith('.bdx') ||
    lower.includes('structures/')
  ) {
    return true;
  }
  return false;
}

async function extractStructuresFromZipBytes(
  zipBytes: Uint8Array,
  parentName: string,
  depth = 0
): Promise<ImportedMcStructure[]> {
  if (depth > 2) return [];
  const extracted: ImportedMcStructure[] = [];
  const zip = await JSZip.loadAsync(zipBytes);
  const entries = Object.values(zip.files);

  // First pass: look for explicit structure files or nested .mcpack/.zip
  for (const entry of entries) {
    if (entry.dir) continue;
    const lower = entry.name.toLowerCase();
    if (lower.endsWith('.mcpack') || lower.endsWith('.mcaddon') || lower.endsWith('.zip')) {
      try {
        const nestedBytes = await entry.async('uint8array');
        if (isZipMagicBytes(nestedBytes)) {
          const nestedStructures = await extractStructuresFromZipBytes(
            nestedBytes,
            entry.name,
            depth + 1
          );
          extracted.push(...nestedStructures);
        }
      } catch {
        // Ignore broken nested archive
      }
      continue;
    }

    if (isStructureCandidateName(entry.name)) {
      const fileBytes = await entry.async('uint8array');
      const parsed = await parseMcStructureBytes(fileBytes, entry.name);
      extracted.push(parsed);
    }
  }

  // Second pass: if no structure with known extension was found in the ZIP, try any binary file inside the ZIP that isn't a known asset
  if (extracted.length === 0) {
    for (const entry of entries) {
      if (entry.dir) continue;
      const lower = entry.name.toLowerCase();
      if (
        lower.endsWith('.png') ||
        lower.endsWith('.jpg') ||
        lower.endsWith('.ogg') ||
        lower.endsWith('.lang') ||
        lower.endsWith('.js') ||
        lower.endsWith('manifest.json') ||
        lower.endsWith('.txt') ||
        lower.endsWith('.md') ||
        lower.includes('__macosx')
      ) {
        continue;
      }
      const fileBytes = await entry.async('uint8array');
      if (fileBytes.byteLength > 16) {
        const parsed = await parseMcStructureBytes(fileBytes, entry.name || parentName);
        extracted.push(parsed);
      }
    }
  }

  return extracted;
}

/**
 * Accepts ANY file or folder selected from the user's Desktop ("Área de Trabalho"),
 * including .mcstructure, .mcstruct, .nbt, .schem, .schematic, or compressed .zip / .mcpack / .mcaddon archives,
 * and returns all parsed ImportedMcStructure items ready to be placed in-game.
 */
export async function parseUploadedDesktopFiles(
  fileList: FileList | File[]
): Promise<ImportedMcStructure[]> {
  const files = Array.from(fileList);
  const results: ImportedMcStructure[] = [];

  for (const file of files) {
    if (!file || file.size === 0) continue;
    const ab = await file.arrayBuffer();
    const bytes = new Uint8Array(ab);
    const lowerName = file.name.toLowerCase();

    // Check if the file is a ZIP / MCPACK / MCADDON archive
    if (
      isZipMagicBytes(bytes) ||
      lowerName.endsWith('.zip') ||
      lowerName.endsWith('.mcpack') ||
      lowerName.endsWith('.mcaddon')
    ) {
      try {
        const fromZip = await extractStructuresFromZipBytes(bytes, file.name);
        if (fromZip.length > 0) {
          results.push(...fromZip);
          continue;
        }
      } catch {
        // Fall through to direct parsing if it wasn't a valid zip
      }
    }

    const parsed = await parseMcStructureBytes(bytes, file.name);
    results.push(parsed);
  }

  return results;
}

export function downloadSingleMcStructureFile(st: ImportedMcStructure): void {
  const blob = new Blob([st.rawBytes as unknown as BlobPart], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = st.fileName.endsWith('.mcstructure') ? st.fileName : `${st.id}.mcstructure`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


/**
 * Generates a real Bedrock Little-Endian NBT .mcstructure binary from a voxel specification,
 * so the user can also test or export preset structures in 100% genuine .mcstructure format.
 */
class NbtLittleEndianWriter {
  private buffer: number[] = [];
  private encoder = new TextEncoder();

  writeByte(val: number) {
    this.buffer.push(val & 0xff);
  }

  writeUShort(val: number) {
    this.buffer.push(val & 0xff, (val >> 8) & 0xff);
  }

  writeInt(val: number) {
    this.buffer.push(
      val & 0xff,
      (val >> 8) & 0xff,
      (val >> 16) & 0xff,
      (val >> 24) & 0xff
    );
  }

  writeString(str: string) {
    const bytes = this.encoder.encode(str);
    this.writeUShort(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      this.buffer.push(bytes[i]);
    }
  }

  writeTagHeader(tagType: number, name: string) {
    this.writeByte(tagType);
    this.writeString(name);
  }

  toUint8Array(): Uint8Array {
    return new Uint8Array(this.buffer);
  }
}

export function buildSampleMcStructureBinary(
  id: string,
  displayName: string,
  size: [number, number, number],
  palette: ParsedPaletteEntry[],
  voxelGrid: number[]
): ImportedMcStructure {
  const writer = new NbtLittleEndianWriter();
  // Root Compound (Tag 10, name "")
  writer.writeTagHeader(10, '');

  // format_version: Int = 1
  writer.writeTagHeader(3, 'format_version');
  writer.writeInt(1);

  // size: List of 3 Ints
  writer.writeTagHeader(9, 'size');
  writer.writeByte(3); // Int
  writer.writeInt(3);
  writer.writeInt(size[0]);
  writer.writeInt(size[1]);
  writer.writeInt(size[2]);

  // structure_world_origin: List of 3 Ints
  writer.writeTagHeader(9, 'structure_world_origin');
  writer.writeByte(3);
  writer.writeInt(3);
  writer.writeInt(0);
  writer.writeInt(0);
  writer.writeInt(0);

  // structure: Compound
  writer.writeTagHeader(10, 'structure');

  // block_indices: List of 2 Lists of Ints
  // In Bedrock .mcstructure, palette index 0 in our binary will be minecraft:air, and palette+1 are solid blocks
  writer.writeTagHeader(9, 'block_indices');
  writer.writeByte(9); // List of Lists
  writer.writeInt(2); // 2 layers

  const total = size[0] * size[1] * size[2];
  // Layer 0
  writer.writeByte(3); // Int
  writer.writeInt(total);
  for (let i = 0; i < total; i++) {
    const idx = voxelGrid[i] ?? -1;
    writer.writeInt(idx + 1); // 0 = air, 1..N = palette[0..N-1]
  }
  // Layer 1 (all -1)
  writer.writeByte(3);
  writer.writeInt(total);
  for (let i = 0; i < total; i++) {
    writer.writeInt(-1);
  }

  // entities: empty List
  writer.writeTagHeader(9, 'entities');
  writer.writeByte(10);
  writer.writeInt(0);

  // palette: Compound -> default: Compound -> block_palette & block_position_data
  writer.writeTagHeader(10, 'palette');
  writer.writeTagHeader(10, 'default');

  writer.writeTagHeader(9, 'block_palette');
  writer.writeByte(10); // Compound
  writer.writeInt(palette.length + 1);

  // Entry 0: minecraft:air
  writer.writeTagHeader(8, 'name');
  writer.writeString('minecraft:air');
  writer.writeTagHeader(10, 'states');
  writer.writeByte(0); // End states
  writer.writeTagHeader(3, 'version');
  writer.writeInt(18090528);
  writer.writeByte(0); // End Entry 0

  for (const p of palette) {
    writer.writeTagHeader(8, 'name');
    writer.writeString(p.name);
    writer.writeTagHeader(10, 'states');
    for (const [k, v] of Object.entries(p.states)) {
      if (typeof v === 'string') {
        writer.writeTagHeader(8, k);
        writer.writeString(v);
      } else if (typeof v === 'boolean') {
        writer.writeTagHeader(1, k);
        writer.writeByte(v ? 1 : 0);
      } else if (typeof v === 'number') {
        writer.writeTagHeader(3, k);
        writer.writeInt(v);
      }
    }
    writer.writeByte(0); // End states
    writer.writeTagHeader(3, 'version');
    writer.writeInt(18090528);
    writer.writeByte(0); // End palette entry
  }

  writer.writeTagHeader(10, 'block_position_data');
  writer.writeByte(0); // End block_position_data

  writer.writeByte(0); // End default
  writer.writeByte(0); // End palette
  writer.writeByte(0); // End structure
  writer.writeByte(0); // End root

  const rawBytes = writer.toUint8Array();
  const blockCounts = new Map<string, number>();
  let nonAirBlocks = 0;
  for (const idx of voxelGrid) {
    if (idx >= 0 && palette[idx]) {
      nonAirBlocks++;
      const cleanName = palette[idx].name.replace('minecraft:', '');
      blockCounts.set(cleanName, (blockCounts.get(cleanName) || 0) + 1);
    }
  }

  const topBlocksPreview = Array.from(blockCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => `${name} (${count}x)`);

  return {
    id,
    fileName: `${id}.mcstructure`,
    displayName,
    fileSizeBytes: rawBytes.byteLength,
    rawBytes,
    size,
    origin: [0, 0, 0],
    totalVolume: total,
    nonAirBlocks,
    palette,
    rleIndices: encodeRle(voxelGrid),
    topBlocksPreview,
    parseMethod: 'nbt_le',
  };
}

export function createStarterMcStructureSamples(): ImportedMcStructure[] {
  // Sample 1: Mansão Compacta de Quartzo & Carvalho Escuro (9x7x9)
  const sx = 9,
    sy = 7,
    sz = 9;
  const palette1: ParsedPaletteEntry[] = [
    { name: 'minecraft:stone_bricks', states: {} }, // 0
    { name: 'minecraft:dark_oak_log', states: {} }, // 1
    { name: 'minecraft:quartz_block', states: {} }, // 2
    { name: 'minecraft:glass', states: {} }, // 3
    { name: 'minecraft:sea_lantern', states: {} }, // 4
    { name: 'minecraft:dark_oak_planks', states: {} }, // 5
    { name: 'minecraft:crafting_table', states: {} }, // 6
    { name: 'minecraft:enchanting_table', states: {} }, // 7
    { name: 'minecraft:ender_chest', states: {} }, // 8
    { name: 'minecraft:anvil', states: {} }, // 9
  ];
  const grid1 = new Array(sx * sy * sz).fill(-1);
  const set1 = (x: number, y: number, z: number, pIdx: number) => {
    grid1[x * (sy * sz) + y * sz + z] = pIdx;
  };

  for (let x = 0; x < sx; x++) {
    for (let z = 0; z < sz; z++) {
      // Floor
      set1(x, 0, z, (x === 4 || z === 4) ? 4 : 0);
      // Roof
      set1(x, sy - 1, z, (x >= 2 && x <= 6 && z >= 2 && z <= 6) ? 4 : 5);
      // Walls
      const isCorner = (x === 0 || x === sx - 1) && (z === 0 || z === sz - 1);
      const isWall = x === 0 || x === sx - 1 || z === 0 || z === sz - 1;
      for (let y = 1; y < sy - 1; y++) {
        if (isCorner) {
          set1(x, y, z, 1);
        } else if (isWall) {
          // Entrance on x === 0, z === 4, y === 1..2
          if (x === 0 && z === 4 && (y === 1 || y === 2)) {
            continue;
          }
          if ((y === 2 || y === 3) && (x === 4 || z === 4)) {
            set1(x, y, z, 3);
          } else {
            set1(x, y, z, 2);
          }
        }
      }
    }
  }
  set1(7, 1, 2, 6);
  set1(7, 1, 4, 7);
  set1(7, 1, 6, 8);
  set1(6, 1, 2, 9);

  // Sample 2: Torre de Vigia & Portal Nether Decorado (7x9x7)
  const tx = 7,
    ty = 9,
    tz = 7;
  const palette2: ParsedPaletteEntry[] = [
    { name: 'minecraft:deepslate_bricks', states: {} }, // 0
    { name: 'minecraft:polished_blackstone_bricks', states: {} }, // 1
    { name: 'minecraft:obsidian', states: {} }, // 2
    { name: 'minecraft:shroomlight', states: {} }, // 3
    { name: 'minecraft:gold_block', states: {} }, // 4
    { name: 'minecraft:chiseled_deepslate', states: {} }, // 5
  ];
  const grid2 = new Array(tx * ty * tz).fill(-1);
  const set2 = (x: number, y: number, z: number, pIdx: number) => {
    grid2[x * (ty * tz) + y * tz + z] = pIdx;
  };
  for (let x = 0; x < tx; x++) {
    for (let z = 0; z < tz; z++) {
      set2(x, 0, z, (x === 3 && z === 3) ? 3 : 0);
      const isCorner = (x === 0 || x === tx - 1) && (z === 0 || z === tz - 1);
      if (isCorner) {
        for (let y = 1; y < ty - 1; y++) set2(x, y, z, 1);
        set2(x, ty - 1, z, 3);
      }
      if (x === 0 || x === tx - 1 || z === 0 || z === tz - 1) {
        set2(x, ty - 2, z, 5);
      }
    }
  }
  // Obsidian Portal Frame inside at x = 3, z = 1..5, y = 1..5
  for (let z = 1; z <= 5; z++) {
    for (let y = 1; y <= 5; y++) {
      const isFrame = z === 1 || z === 5 || y === 1 || y === 5;
      if (isFrame) {
        const isCorner = (z === 1 || z === 5) && (y === 1 || y === 5);
        set2(3, y, z, isCorner ? 4 : 2);
      }
    }
  }

  return [
    buildSampleMcStructureBinary(
      'mansao_quartzo_survival',
      'Mansão Compacta de Quartzo (9x7x9)',
      [sx, sy, sz],
      palette1,
      grid1
    ),
    buildSampleMcStructureBinary(
      'templo_portal_nether',
      'Templo de Ardósia & Portal Nether (7x9x7)',
      [tx, ty, tz],
      palette2,
      grid2
    ),
  ];
}
