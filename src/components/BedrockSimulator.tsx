import React, { useState } from 'react';
import { AddonConfig, CheatModule } from '../utils/addonGenerator';
import { RotateCcw, Terminal, Check, ShieldCheck, Keyboard } from 'lucide-react';

interface BedrockSimulatorProps {
  config: AddonConfig;
  modules: CheatModule[];
}

type SimMenuScreen =
  | 'main'
  | 'armor_keypad'
  | 'armor_builder'
  | 'tool_builder'
  | 'weapon_builder'
  | 'hand_enchanter'
  | 'item_renamer'
  | 'duplicator'
  | 'duplicator_modal'
  | 'inventory_picker'
  | 'all_items'
  | 'catalog_search'
  | 'survival'
  | 'movement'
  | 'world_builder'
  | 'custom_item_modal'
  | 'custom_tp_modal';

interface SimLog {
  id: string;
  time: string;
  text: string;
  tone: 'emerald' | 'sky' | 'amber' | 'rose';
}

interface SimInventoryItem {
  id: string;
  name: string;
  count: number;
  enchantments?: string[];
  lore?: string;
}

const BEDROCK_CATALOG_SAMPLE = [
  { id: 'minecraft:mace', name: 'Clava 1.21 (Mace)' },
  { id: 'minecraft:heavy_core', name: 'Núcleo Pesado (Heavy Core)' },
  { id: 'minecraft:wind_charge', name: 'Carga de Vento (Wind Charge)' },
  { id: 'minecraft:netherite_ingot', name: 'Barra de Netherita' },
  { id: 'minecraft:netherite_block', name: 'Bloco de Netherita' },
  { id: 'minecraft:netherite_upgrade_smithing_template', name: 'Molde de Melhoria de Netherita' },
  { id: 'minecraft:diamond_block', name: 'Bloco de Diamante' },
  { id: 'minecraft:diamond', name: 'Diamante' },
  { id: 'minecraft:enchanted_golden_apple', name: 'Maçã Dourada Encantada (Notch)' },
  { id: 'minecraft:totem_of_undying', name: 'Totem da Imortalidade' },
  { id: 'minecraft:elytra', name: 'Élitros (Elytra)' },
  { id: 'minecraft:firework_rocket', name: 'Foguete de Artifício' },
  { id: 'minecraft:shulker_box', name: 'Caixa de Shulker' },
  { id: 'minecraft:beacon', name: 'Sinalizador (Beacon)' },
  { id: 'minecraft:mob_spawner', name: 'Gerador de Monstros (Spawner)' },
  { id: 'minecraft:ominous_trial_key', name: 'Chave de Provação Sinistra (1.21)' },
  { id: 'minecraft:dragon_egg', name: 'Ovo do Dragão' },
  { id: 'minecraft:trident', name: 'Tridente' },
  { id: 'minecraft:emerald_block', name: 'Bloco de Esmeralda' },
  { id: 'minecraft:ancient_debris', name: 'Detritos Ancestrais' },
];

export const BedrockSimulator: React.FC<BedrockSimulatorProps> = ({ config, modules }) => {
  const [screen, setScreen] = useState<SimMenuScreen>('armor_keypad');
  const [selectedSlotIdx, setSelectedSlotIdx] = useState<number>(1);
  const [multiplyQtySlider, setMultiplyQtySlider] = useState<number>(64);
  const [multiplyQtyCustom, setMultiplyQtyCustom] = useState<string>('640');

  // Armor Builder state
  const [armorMaterial, setArmorMaterial] = useState('Netherita');
  const [armorPiece, setArmorPiece] = useState('Set Completo (4 Peças)');
  const [armorProtType, setArmorProtType] = useState('Proteção IV');
  const [armorUnbreaking, setArmorUnbreaking] = useState(true);
  const [armorMending, setArmorMending] = useState(true);
  const [armorThorns, setArmorThorns] = useState(false);
  const [armorBootExtras, setArmorBootExtras] = useState(true);
  const [armorHelmLegExtras, setArmorHelmLegExtras] = useState(true);

  // Tool & Weapon Builder state
  const [toolMaterial, setToolMaterial] = useState('Netherita');
  const [toolKind, setToolKind] = useState('Kit Completo (Picareta + Machado + Pá + Enxada)');
  const [toolEffLvl, setToolEffLvl] = useState(5);
  const [toolFortuneOrSilk, setToolFortuneOrSilk] = useState<'Fortuna III' | 'Toque Suave'>('Fortuna III');
  const [toolUnbMend, setToolUnbMend] = useState(true);

  const [weaponKind, setWeaponKind] = useState('Espada de Netherita');
  const [weaponDmgType, setWeaponDmgType] = useState('Afiação V');
  const [weaponLooting, setWeaponLooting] = useState(true);
  const [weaponFire, setWeaponFire] = useState(true);
  const [weaponSpecial, setWeaponSpecial] = useState(true);

  // Hand Enchanter & Colored Anvil state
  const [handEnchChoice, setHandEnchChoice] = useState('Afiação V (Sharpness 5)');
  const [renameText, setRenameText] = useState('Excalibur Suprema');
  const [renameColor, setRenameColor] = useState('§6§l Dourado Negrito');
  const [renameLore, setRenameLore] = useState('Forjada no Modo Survival');

  const [catalogSearch, setCatalogSearch] = useState<string>('');
  const [catalogQtyCustom, setCatalogQtyCustom] = useState<string>('64');

  const [playerState, setPlayerState] = useState<{
    hp: number;
    hunger: number;
    xpLevel: number;
    dimension: string;
    coords: { x: number; y: number; z: number };
    homeCoords: { x: number; y: number; z: number };
    lastDeathCoords: { x: number; y: number; z: number };
    godMode: boolean;
    oneHitKill: boolean;
    veinMiner: boolean;
    autoMagnet: boolean;
    hasteMode: boolean;
    nightVision: boolean;
    flyMode: boolean;
    oreRadarHud: boolean;
    worldTime: string;
    weather: string;
    equippedArmor: string;
    inventory: SimInventoryItem[];
  }>({
    hp: 20,
    hunger: 20,
    xpLevel: 30,
    dimension: 'Overworld',
    coords: { x: 142, y: 64, z: -318 },
    homeCoords: { x: 142, y: 64, z: -318 },
    lastDeathCoords: { x: -420, y: -54, z: 890 },
    godMode: false,
    oneHitKill: false,
    veinMiner: true,
    autoMagnet: true,
    hasteMode: false,
    nightVision: false,
    flyMode: false,
    oreRadarHud: true,
    worldTime: 'Meio-Dia (6000 ticks)',
    weather: 'Céu Limpo',
    equippedArmor: 'Set Netherita (Proteção IV, Inquebrável III, Remendo)',
    inventory: [
      {
        id: 'survivalmenu:amuleto',
        name: 'Teclado & Menu Survival 26.60.29',
        count: 1,
        enchantments: ['Atalho Shift 2x'],
      },
      {
        id: 'minecraft:netherite_sword',
        name: 'Espada de Netherita',
        count: 1,
        enchantments: ['Afiação V', 'Pilhagem III', 'Remendo'],
      },
      {
        id: 'minecraft:netherite_pickaxe',
        name: 'Picareta de Netherita',
        count: 1,
        enchantments: ['Eficiência V', 'Fortuna III', 'Inquebrável III'],
      },
      { id: 'minecraft:diamond', name: 'Diamante', count: 16 },
    ],
  });

  const [customItemId, setCustomItemId] = useState('minecraft:mace');
  const [customItemQty, setCustomItemQty] = useState('128');

  const [logs, setLogs] = useState<SimLog[]>([
    {
      id: 'init-1',
      time: '12:00:01',
      text: `[${config.addonName} v${config.targetBuildVersion}] Teclado de Armaduras, VeinMiner & Construtor prontos! Conquistas: ATIVAS.`,
      tone: 'emerald',
    },
    {
      id: 'init-2',
      time: '12:00:02',
      text: 'Atalho Rápido: Aperte [Shift 2x] olhando para o chão ou use as Teclas 1 a 6 abaixo.',
      tone: 'sky',
    },
  ]);

  const pushLog = (text: string, tone: SimLog['tone'] = 'emerald') => {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    setLogs((prev) => [{ id: `${Date.now()}-${Math.random()}`, time, text, tone }, ...prev.slice(0, 8)]);
  };

  const resetSimulation = () => {
    setScreen('armor_keypad');
    setSelectedSlotIdx(1);
    setPlayerState({
      hp: 20,
      hunger: 20,
      xpLevel: 30,
      dimension: 'Overworld',
      coords: { x: 142, y: 64, z: -318 },
      homeCoords: { x: 142, y: 64, z: -318 },
      lastDeathCoords: { x: -420, y: -54, z: 890 },
      godMode: false,
      oneHitKill: false,
      veinMiner: true,
      autoMagnet: true,
      hasteMode: false,
      nightVision: false,
      flyMode: false,
      oreRadarHud: true,
      worldTime: 'Meio-Dia (6000 ticks)',
      weather: 'Céu Limpo',
      equippedArmor: 'Set Netherita (Proteção IV, Inquebrável III, Remendo)',
      inventory: [
        {
          id: 'survivalmenu:amuleto',
          name: 'Teclado & Menu Survival 26.60.29',
          count: 1,
          enchantments: ['Atalho Shift 2x'],
        },
        {
          id: 'minecraft:netherite_sword',
          name: 'Espada de Netherita',
          count: 1,
          enchantments: ['Afiação V', 'Pilhagem III', 'Remendo'],
        },
        {
          id: 'minecraft:netherite_pickaxe',
          name: 'Picareta de Netherita',
          count: 1,
          enchantments: ['Eficiência V', 'Fortuna III', 'Inquebrável III'],
        },
        { id: 'minecraft:diamond', name: 'Diamante', count: 16 },
      ],
    });
    pushLog('Estado do simulador restaurado ao padrão.', 'sky');
  };

  const activeCount = modules.filter((m) => m.enabled).length;
  const currentHandItem = playerState.inventory[selectedSlotIdx] || playerState.inventory[0];

  const filteredCatalog = BEDROCK_CATALOG_SAMPLE.filter(
    (item) =>
      !catalogSearch.trim() ||
      item.id.toLowerCase().includes(catalogSearch.trim().toLowerCase()) ||
      item.name.toLowerCase().includes(catalogSearch.trim().toLowerCase())
  );

  return (
    <div className="border border-slate-800 bg-slate-900/90 rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
        <div>
          <div className="text-xs text-slate-400 mb-1">
            <span>Simulador Interativo v{config.targetBuildVersion}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="tabular-nums">{activeCount} módulos ativos no pacote</span>
          </div>
          <h3 className="text-lg font-semibold text-white">
            Teclado Rápido de Armaduras, Bigorna Colorida, VeinMiner & Construtor
          </h3>
        </div>
        <button
          type="button"
          onClick={resetSimulation}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar Simulador
        </button>
      </div>

      {/* Interactive Keypad Bar (Simulates pressing the hotkey in-game) */}
      <div className="mb-6 p-3.5 bg-slate-950 border border-slate-800 rounded-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Keyboard className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Atalhos do Teclado no Jogo:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setScreen('armor_keypad')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'armor_keypad'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Shift 2x] Teclado Forja
          </button>
          <button
            type="button"
            onClick={() => setScreen('armor_builder')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'armor_builder'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Tecla 1] Armaduras
          </button>
          <button
            type="button"
            onClick={() => setScreen('tool_builder')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'tool_builder'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Tecla 2] Ferramentas
          </button>
          <button
            type="button"
            onClick={() => setScreen('duplicator')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'duplicator'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Tecla 4] Multiplicar
          </button>
          <button
            type="button"
            onClick={() => setScreen('world_builder')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'world_builder'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Mega Sala de Baús Duplos]
          </button>
          <button
            type="button"
            onClick={() => setScreen('main')}
            className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              screen === 'main'
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            [Menu Completo]
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left column: Simulated Minecraft Bedrock ActionFormData / ModalFormData Window */}
        <div className="lg:col-span-7 flex flex-col justify-between border border-slate-700 bg-slate-950 rounded-md p-5">
          {/* Top HUD Actionbar Simulation */}
          <div className="mb-4 pb-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-emerald-400 tabular-nums">
              {playerState.dimension} · XYZ: {playerState.coords.x} {playerState.coords.y} {playerState.coords.z}
            </span>
            <span className="text-slate-300 truncate max-w-[230px]">
              Mão: {currentHandItem.name} ({currentHandItem.count}x)
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Conquistas: ATIVAS
            </span>
          </div>

          {/* Minecraft Bedrock Server-UI Dialog Box */}
          <div className="bg-[#313233] border-2 border-[#1e1e1f] rounded p-4 text-slate-100 shadow-inner">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#4a4b4c]">
              <span className="font-mono text-sm font-semibold text-emerald-400 tracking-wide">
                {screen === 'main' && `${config.addonName} v${config.targetBuildVersion}`}
                {screen === 'armor_keypad' && 'Teclado: Armaduras, Ferramentas & Encantamentos'}
                {screen === 'armor_builder' && '[Tecla 1] Forjar Armadura + Escolher Encantamentos'}
                {screen === 'tool_builder' && '[Tecla 2] Forjar Ferramentas + Escolher Encantamentos'}
                {screen === 'weapon_builder' && '[Tecla 3] Forjar Armas + Escolher Encantamentos'}
                {screen === 'hand_enchanter' && '[Tecla 4] Encantar Item da Mão Principal'}
                {screen === 'item_renamer' && '[Tecla 5] Bigorna Colorida (Renomear Item da Mão)'}
                {screen === 'duplicator' && 'Multiplicador de Itens (Mão & Inventário)'}
                {screen === 'duplicator_modal' && `Multiplicar: ${currentHandItem.name.slice(0, 22)}`}
                {screen === 'inventory_picker' && 'Escolher Slot do Inventário para Clonar'}
                {screen === 'all_items' && 'Pegar Qualquer Item do Jogo (1.600+ Itens)'}
                {screen === 'catalog_search' && 'Catálogo Universal ItemTypes.getAll()'}
                {screen === 'survival' && 'Imortalidade, Hit-Kill, VeinMiner & Ímã'}
                {screen === 'movement' && 'Multi-Waypoints, Dimensões & Voo'}
                {screen === 'world_builder' && 'Construtor Rápido, Spawner de Mobs & Clima'}
                {screen === 'custom_item_modal' && 'Pegar Item por ID + Quantidade Livre'}
              </span>
              {screen !== 'main' && (
                <button
                  type="button"
                  onClick={() =>
                    setScreen(
                      screen.includes('builder') && screen !== 'world_builder'
                        ? 'armor_keypad'
                        : screen === 'hand_enchanter' || screen === 'item_renamer'
                        ? 'armor_keypad'
                        : 'main'
                    )
                  }
                  className="px-2.5 py-1 text-xs font-mono bg-[#48494a] hover:bg-[#5a5b5c] text-white rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  « Voltar
                </button>
              )}
            </div>

            {/* SCREEN: ARMOR & TOOL KEYPAD MENU */}
            {screen === 'armor_keypad' && (
              <div>
                <p className="text-xs text-slate-300 mb-3 font-mono">
                  Aperte uma tecla abaixo para escolher a Armadura, Ferramenta, Encantamentos ou gerar as 5 Shulker Boxes com todos os 18 Moldes:
                </p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPlayerState((s) => ({
                        ...s,
                        equippedArmor:
                          'Set Netherita Deus (Proteção IV, Espinhos III, Peso Pena IV, Passos Rápidos III, Remendo)',
                        inventory: [
                          s.inventory[0],
                          {
                            id: 'minecraft:purple_shulker_box',
                            name: 'Shulker 1 (Roxa): 5 Sets Netherita Max + Moldes Silêncio, Guardião, Espiral, Vex, Olho (64x)',
                            count: 1,
                            lore: '27/27 Slots Lotados',
                          },
                          {
                            id: 'minecraft:cyan_shulker_box',
                            name: 'Shulker 2 (Ciano): 5 Sets Netherita Max + Moldes Fluxo 1.21, Parafuso 1.21, Focinho, Costela, Maré (64x)',
                            count: 1,
                            lore: '27/27 Slots Lotados',
                          },
                          {
                            id: 'minecraft:red_shulker_box',
                            name: 'Shulker 3 (Vermelha): 5 Sets Netherita Max + Moldes Selva, Sentinela, Duna, Costa, Descobridor (64x)',
                            count: 1,
                            lore: '27/27 Slots Lotados',
                          },
                          {
                            id: 'minecraft:yellow_shulker_box',
                            name: 'Shulker 4 (Amarela): 3 Sets Netherita Max + Sets Diamante/Ouro Max + Moldes Modelador, Elevador, Anfitrião',
                            count: 1,
                            lore: '27/27 Slots Lotados',
                          },
                          {
                            id: 'minecraft:lime_shulker_box',
                            name: 'Shulker 5 (Verde): Cofre Todos os 18 Moldes (64x) + 10 Minerais de Cor (64x) + Élitros Max + Ferraria',
                            count: 1,
                            lore: '27/27 Slots Lotados',
                          },
                        ],
                      }));
                      pushLog(
                        '[Shulker Trims] 5 Shulker Boxes Coloridas geradas na sua frente! Contêm 18 Sets Completos de Armadura no Nível Máximo + Todos os 18 Moldes (64x) + 10 Minerais de Cor + Bancada de Ferraria!',
                        'emerald'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2.5 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-500/60 rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">
                        [Tecla 1] 5 Shulker Boxes: Armaduras no Máximo + Todos os 18 Moldes
                      </div>
                      <div className="text-xs text-slate-200">
                        Como 18 Sets Full Max + 18 Moldes (64x) + 10 Minerais passam de 1 Shulker, gera 5 Shulker Boxes lotadas!
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 whitespace-nowrap shrink-0">5 Shulkers ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('armor_builder')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-amber-300">
                        [Tecla 2] Armaduras Completas (Escolher Material & Encantamentos)
                      </div>
                      <div className="text-xs text-slate-300">
                        Netherita, Diamante, Ferro, Ouro, Malha, Couro, Tartaruga, Élitros + Escolher Encantamentos
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Escolher ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('tool_builder')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-sky-300">
                        [Tecla 3] Ferramentas (Picareta, Machado, Pá, Enxada)
                      </div>
                      <div className="text-xs text-slate-300">
                        Todos os materiais + Escolher Eficiência (I-V), Fortuna III ou Toque Suave, Remendo
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Escolher ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('weapon_builder')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-rose-300">
                        [Tecla 4] Armas (Espadas, Clava 1.21, Tridente, Arco, Besta)
                      </div>
                      <div className="text-xs text-slate-300">
                        Escolher Afiação V, Julgamento V, Pilhagem III, Aspecto Flamejante, Densidade V...
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Escolher ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('hand_enchanter')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">
                        [Tecla 5] Encantar o Item que Está na Minha Mão
                      </div>
                      <div className="text-xs text-slate-300">
                        Aplica qualquer encantamento personalizado direto em: {currentHandItem.name}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Encantar ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('item_renamer')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-purple-300">
                        [Tecla 6] Bigorna Colorida (Renomear Item + Lore sem XP)
                      </div>
                      <div className="text-xs text-slate-300">
                        Coloque nomes coloridos em negrito (§6§l) e descrição customizada na arma/ferramenta
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Renomear ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPlayerState((s) => ({
                        ...s,
                        equippedArmor:
                          'Set Netherita Deus (Proteção IV, Espinhos III, Peso Pena IV, Passos Rápidos III, Remendo)',
                        inventory: [
                          ...s.inventory.slice(0, 5),
                          {
                            id: 'minecraft:mace',
                            name: 'Clava 1.21 Full (Densidade V + Rajada de Vento III)',
                            count: 1,
                            enchantments: ['Densidade V', 'Brecha IV', 'Rajada de Vento III', 'Remendo'],
                          },
                        ],
                      }));
                      pushLog(
                        '[Teclado Forja] Set Netherita Completo equipado no corpo + Espada, Picareta e Clava Full Encantadas entregues!',
                        'emerald'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-amber-200">
                        [Tecla 7] Kit Deus Instantâneo no Corpo (Set Netherita + Armas Full)
                      </div>
                      <div className="text-xs text-slate-300">
                        Equipa a armadura completa e entrega todas as ferramentas no nível máximo em 1 clique
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 whitespace-nowrap shrink-0">1-Clique ›</span>
                  </button>
                </div>
              </div>
            )}

            {/* SCREEN: ARMOR BUILDER + ENCHANTMENT SELECTOR */}
            {screen === 'armor_builder' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-300 mb-1">1. Material da Armadura:</label>
                    <select
                      value={armorMaterial}
                      onChange={(e) => setArmorMaterial(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    >
                      <option value="Netherita">Netherita (Netherite)</option>
                      <option value="Diamante">Diamante (Diamond)</option>
                      <option value="Ferro">Ferro (Iron)</option>
                      <option value="Ouro">Ouro (Golden)</option>
                      <option value="Malha">Malha (Chainmail)</option>
                      <option value="Couro">Couro (Leather)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">2. Peças para Receber:</label>
                    <select
                      value={armorPiece}
                      onChange={(e) => setArmorPiece(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    >
                      <option value="Set Completo (4 Peças)">Set Completo (4 Peças)</option>
                      <option value="Set Completo + Élitros">Set Completo + Élitros</option>
                      <option value="Apenas Capacete">Apenas Capacete</option>
                      <option value="Apenas Peitoral">Apenas Peitoral</option>
                      <option value="Apenas Calças">Apenas Calças</option>
                      <option value="Apenas Botas">Apenas Botas</option>
                      <option value="Casco de Tartaruga">Casco de Tartaruga</option>
                      <option value="Apenas Élitros">Apenas Élitros (Elytra)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    3. Escolha o Encantamento de Proteção:
                  </label>
                  <select
                    value={armorProtType}
                    onChange={(e) => setArmorProtType(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-emerald-400 font-semibold"
                  >
                    <option value="Proteção IV">Proteção Geral IV (Protection 4)</option>
                    <option value="Proteção contra Fogo IV">Proteção contra Fogo IV (Fire Protection 4)</option>
                    <option value="Proteção contra Explosões IV">Proteção contra Explosões IV (Blast Protection 4)</option>
                    <option value="Proteção contra Projéteis IV">Proteção contra Projéteis IV (Projectile Protection 4)</option>
                    <option value="Sem Proteção">Nenhuma Proteção</option>
                  </select>
                </div>

                <div className="p-2.5 bg-[#242526] rounded space-y-1.5">
                  <div className="text-slate-300 font-semibold mb-1">
                    4. Marque os Encantamentos Extras que Deseja:
                  </div>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Inquebrável III (Unbreaking 3)</span>
                    <input
                      type="checkbox"
                      checked={armorUnbreaking}
                      onChange={(e) => setArmorUnbreaking(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Remendo (Mending - Conserta com XP)</span>
                    <input
                      type="checkbox"
                      checked={armorMending}
                      onChange={(e) => setArmorMending(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Espinhos III (Thorns 3 - Reflete dano)</span>
                    <input
                      type="checkbox"
                      checked={armorThorns}
                      onChange={(e) => setArmorThorns(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Botas: Peso Pena IV + Passos Profundos III + Almas III</span>
                    <input
                      type="checkbox"
                      checked={armorBootExtras}
                      onChange={(e) => setArmorBootExtras(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Capacete/Calça: Respiração III + Afinidade + Passos Rápidos III</span>
                    <input
                      type="checkbox"
                      checked={armorHelmLegExtras}
                      onChange={(e) => setArmorHelmLegExtras(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const enchList = [
                      armorProtType !== 'Sem Proteção' ? armorProtType : null,
                      armorUnbreaking ? 'Inquebrável III' : null,
                      armorMending ? 'Remendo' : null,
                      armorThorns ? 'Espinhos III' : null,
                      armorBootExtras ? 'Peso Pena IV' : null,
                      armorHelmLegExtras ? 'Passos Rápidos III' : null,
                    ].filter(Boolean) as string[];

                    const desc = `${armorPiece} de ${armorMaterial} (${enchList.join(', ') || 'Sem Encantamentos'})`;
                    setPlayerState((s) => ({
                      ...s,
                      equippedArmor: desc,
                      inventory: [
                        ...s.inventory.slice(0, 6),
                        {
                          id: `minecraft:${armorMaterial.toLowerCase()}_armor`,
                          name: `${armorPiece} de ${armorMaterial}`,
                          count: 1,
                          enchantments: enchList,
                        },
                      ],
                    }));
                    pushLog(`[Teclado Forja] Entregue e equipado: ${desc}!`, 'emerald');
                    setScreen('armor_keypad');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Gerar & Equipar Armadura Encantada
                </button>
              </div>
            )}

            {/* SCREEN: TOOL BUILDER + ENCHANTMENT SELECTOR */}
            {screen === 'tool_builder' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-300 mb-1">1. Material da Ferramenta:</label>
                    <select
                      value={toolMaterial}
                      onChange={(e) => setToolMaterial(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    >
                      <option value="Netherita">Netherita (Netherite)</option>
                      <option value="Diamante">Diamante (Diamond)</option>
                      <option value="Ferro">Ferro (Iron)</option>
                      <option value="Ouro">Ouro (Golden)</option>
                      <option value="Pedra">Pedra (Stone)</option>
                      <option value="Madeira">Madeira (Wooden)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">2. Qual Ferramenta:</label>
                    <select
                      value={toolKind}
                      onChange={(e) => setToolKind(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    >
                      <option value="Kit Completo (Picareta + Machado + Pá + Enxada)">
                        Kit Completo (Picareta + Machado + Pá + Enxada)
                      </option>
                      <option value="Picareta">Apenas Picareta (Pickaxe)</option>
                      <option value="Machado">Apenas Machado (Axe)</option>
                      <option value="Pá">Apenas Pá (Shovel)</option>
                      <option value="Enxada">Apenas Enxada (Hoe)</option>
                      <option value="Vara de Pesca">Vara de Pesca (Fishing Rod)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 tabular-nums">
                    3. Nível de Eficiência (Efficiency): Nível {toolEffLvl}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={toolEffLvl}
                    onChange={(e) => setToolEffLvl(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    4. Escolha entre Fortuna III ou Toque Suave:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setToolFortuneOrSilk('Fortuna III')}
                      className={`py-2 rounded border text-xs font-semibold cursor-pointer ${
                        toolFortuneOrSilk === 'Fortuna III'
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                          : 'bg-[#1e1e1f] border-[#4a4b4c] text-slate-400'
                      }`}
                    >
                      Fortuna III (Fortune 3)
                    </button>
                    <button
                      type="button"
                      onClick={() => setToolFortuneOrSilk('Toque Suave')}
                      className={`py-2 rounded border text-xs font-semibold cursor-pointer ${
                        toolFortuneOrSilk === 'Toque Suave'
                          ? 'bg-sky-600/30 border-sky-500 text-sky-300'
                          : 'bg-[#1e1e1f] border-[#4a4b4c] text-slate-400'
                      }`}
                    >
                      Toque Suave (Silk Touch)
                    </button>
                  </div>
                </div>

                <label className="flex items-center justify-between p-2 bg-[#242526] rounded cursor-pointer">
                  <span>Incluir Inquebrável III + Remendo (Mending)</span>
                  <input
                    type="checkbox"
                    checked={toolUnbMend}
                    onChange={(e) => setToolUnbMend(e.target.checked)}
                    className="accent-emerald-500 w-4 h-4"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => {
                    const enchs = [
                      `Eficiência ${toolEffLvl}`,
                      toolFortuneOrSilk,
                      toolUnbMend ? 'Inquebrável III + Remendo' : '',
                    ].filter(Boolean);

                    setPlayerState((s) => ({
                      ...s,
                      inventory: [
                        ...s.inventory.slice(0, 6),
                        {
                          id: 'minecraft:custom_tool',
                          name: `${toolKind} de ${toolMaterial} (${enchs.join(', ')})`,
                          count: 1,
                          enchantments: enchs,
                        },
                      ],
                    }));
                    pushLog(
                      `[Teclado Forja] Entregue ${toolKind} de ${toolMaterial} com ${enchs.join(', ')}!`,
                      'sky'
                    );
                    setScreen('armor_keypad');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Receber Ferramenta(s) Encantada(s)
                </button>
              </div>
            )}

            {/* SCREEN: WEAPON BUILDER + ENCHANTMENT SELECTOR */}
            {screen === 'weapon_builder' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-300 mb-1">1. Escolha a Arma:</label>
                    <select
                      value={weaponKind}
                      onChange={(e) => setWeaponKind(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    >
                      <option value="Espada de Netherita">Espada de Netherita</option>
                      <option value="Espada de Diamante">Espada de Diamante</option>
                      <option value="Espada de Ferro">Espada de Ferro</option>
                      <option value="Clava 1.21 (Mace)">Clava 1.21 (Mace)</option>
                      <option value="Tridente (Trident)">Tridente (Trident)</option>
                      <option value="Arco (Bow)">Arco (Bow)</option>
                      <option value="Besta (Crossbow)">Besta (Crossbow)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">2. Encantamento Principal:</label>
                    <select
                      value={weaponDmgType}
                      onChange={(e) => setWeaponDmgType(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-emerald-400 font-semibold"
                    >
                      <option value="Afiação V">Afiação V (Sharpness 5)</option>
                      <option value="Julgamento V">Julgamento V (Smite 5)</option>
                      <option value="Densidade V (Clava)">Densidade V (Density 5 - Clava)</option>
                      <option value="Empalamento V (Tridente)">Empalamento V (Impaling 5)</option>
                      <option value="Força V (Arco)">Força V (Power 5 - Arco)</option>
                    </select>
                  </div>
                </div>

                <div className="p-2.5 bg-[#242526] rounded space-y-1.5">
                  <div className="text-slate-300 font-semibold mb-1">
                    3. Selecione os Encantamentos Extras da Arma:
                  </div>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Pilhagem III / Saque III (Looting 3 - Multiplica drops)</span>
                    <input
                      type="checkbox"
                      checked={weaponLooting}
                      onChange={(e) => setWeaponLooting(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Aspecto Flamejante II / Chama (Alvo pega fogo)</span>
                    <input
                      type="checkbox"
                      checked={weaponFire}
                      onChange={(e) => setWeaponFire(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Especiais: Rajada de Vento III / Lealdade III / Infinidade + Remendo</span>
                    <input
                      type="checkbox"
                      checked={weaponSpecial}
                      onChange={(e) => setWeaponSpecial(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const enchs = [
                      weaponDmgType,
                      weaponLooting ? 'Pilhagem III' : '',
                      weaponFire ? 'Aspecto Flamejante II' : '',
                      weaponSpecial ? 'Inquebrável III + Remendo' : '',
                    ].filter(Boolean);

                    setPlayerState((s) => ({
                      ...s,
                      inventory: [
                        ...s.inventory.slice(0, 6),
                        {
                          id: 'minecraft:custom_weapon',
                          name: `${weaponKind} (${enchs.join(', ')})`,
                          count: 1,
                          enchantments: enchs,
                        },
                      ],
                    }));
                    pushLog(
                      `[Teclado Forja] Entregue ${weaponKind} com ${enchs.join(', ')}!`,
                      'emerald'
                    );
                    setScreen('armor_keypad');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Receber Arma Encantada no Inventário
                </button>
              </div>
            )}

            {/* SCREEN: HAND ITEM ENCHANTER */}
            {screen === 'hand_enchanter' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 bg-[#1e1e1f] border border-[#4a4b4c] rounded text-slate-200">
                  Item atual na mão principal:{' '}
                  <strong className="text-emerald-400">{currentHandItem.name}</strong>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    Escolha qual Encantamento aplicar no item da mão:
                  </label>
                  <select
                    value={handEnchChoice}
                    onChange={(e) => setHandEnchChoice(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                  >
                    <option value="Afiação V (Sharpness 5)">Afiação V (Sharpness 5)</option>
                    <option value="Eficiência V (Efficiency 5)">Eficiência V (Efficiency 5)</option>
                    <option value="Fortuna III (Fortune 3)">Fortuna III (Fortune 3)</option>
                    <option value="Toque Suave (Silk Touch)">Toque Suave (Silk Touch)</option>
                    <option value="Proteção IV (Protection 4)">Proteção IV (Protection 4)</option>
                    <option value="Inquebrável III + Remendo">Inquebrável III + Remendo (Mending)</option>
                    <option value="Pilhagem III (Looting 3)">Pilhagem III (Looting 3)</option>
                    <option value="Densidade V + Rajada de Vento III">Densidade V + Rajada de Vento III (Clava)</option>
                    <option value="Empalamento V + Lealdade III">Empalamento V + Lealdade III (Tridente)</option>
                    <option value="Força V + Infinidade">Força V + Infinidade (Arco)</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({
                      ...s,
                      inventory: s.inventory.map((it, idx) =>
                        idx === selectedSlotIdx
                          ? {
                              ...it,
                              name: `${it.name.split(' (')[0]} (${handEnchChoice})`,
                              enchantments: [...(it.enchantments || []), handEnchChoice],
                            }
                          : it
                      ),
                    }));
                    pushLog(
                      `[Teclado Forja] Encantamento ${handEnchChoice} aplicado em ${currentHandItem.name}!`,
                      'emerald'
                    );
                    setScreen('armor_keypad');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Aplicar Encantamento na Mão Agora
                </button>
              </div>
            )}

            {/* SCREEN: COLORED ANVIL ITEM RENAMER */}
            {screen === 'item_renamer' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 bg-[#1e1e1f] border border-[#4a4b4c] rounded text-slate-200">
                  Renomeando item da mão sem gastar XP:{' '}
                  <strong className="text-amber-300">{currentHandItem.name}</strong>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-300 mb-1">Novo Nome Customizado:</label>
                    <input
                      type="text"
                      value={renameText}
                      onChange={(e) => setRenameText(e.target.value)}
                      className="w-full px-3 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Cor do Nome (nameTag):</label>
                    <select
                      value={renameColor}
                      onChange={(e) => setRenameColor(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-amber-300 font-semibold"
                    >
                      <option value="§6§l Dourado Negrito">§6§l Dourado Negrito</option>
                      <option value="§b§l Diamante Brilhante">§b§l Diamante Brilhante</option>
                      <option value="§d§l Rosa Mítico">§d§l Rosa Mítico</option>
                      <option value="§c§l Vermelho Sangue">§c§l Vermelho Sangue</option>
                      <option value="§a§l Verde Esmeralda">§a§l Verde Esmeralda</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    Descrição / Lore embaixo do Item (item.setLore):
                  </label>
                  <input
                    type="text"
                    value={renameLore}
                    onChange={(e) => setRenameLore(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-slate-200"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const colorTag = renameColor.split(' ')[0];
                    setPlayerState((s) => ({
                      ...s,
                      inventory: s.inventory.map((it, idx) =>
                        idx === selectedSlotIdx
                          ? {
                              ...it,
                              name: `${colorTag} ${renameText}`,
                              lore: renameLore,
                            }
                          : it
                      ),
                    }));
                    pushLog(
                      `[Bigorna Colorida] Item renomeado para "${colorTag} ${renameText}" com Lore "${renameLore}"!`,
                      'amber'
                    );
                    setScreen('armor_keypad');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Salvar Nome Colorido & Lore no Item
                </button>
              </div>
            )}

            {screen === 'main' && (
              <div>
                <p className="text-xs text-slate-300 mb-3 font-mono">
                  Modo Sobrevivência · Conquistas: ATIVAS — Clique em uma função para testar:
                </p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setScreen('armor_keypad')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-amber-300">
                        Teclado: Armaduras, Ferramentas, Encantar & Bigorna
                      </div>
                      <div className="text-xs text-slate-300">
                        Todos os tipos de armaduras e ferramentas + Escolher encantamentos + Renomear colorido
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('duplicator')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-300">
                        Multiplicar Itens (Mão / Inventário)
                      </div>
                      <div className="text-xs text-slate-300">
                        Clona o item da mão ou inventário para qualquer quantidade (ex: 64, 500, 2304)
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('all_items')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-sky-300">
                        Pegar Qualquer Item do Jogo (1.600+ Itens)
                      </div>
                      <div className="text-xs text-slate-300">
                        Busca em todos os itens (Clava 1.21, Netherite, Ovos, Blocos) + Quantidade Livre
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('survival')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-200">
                        Imortalidade, Hit-Kill, VeinMiner & Ímã de Drops
                      </div>
                      <div className="text-xs text-slate-300">
                        God Mode, Matar Boss em 1 Golpe (Força 255), Quebrar Veio Inteiro e Puxar XP
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('world_builder')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-purple-300">
                        Construtor Rápido, Spawner de Mobs & Mundo
                      </div>
                      <div className="text-xs text-slate-300">
                        Gerar Sala de Encantamento Nv. 30, Bunker, Plataforma Salva-Vidas e Invocar Mobs
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScreen('movement')}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-amber-200">
                        Multi-Waypoints (5 Locais), Dimensões & Voo
                      </div>
                      <div className="text-xs text-slate-300">
                        Salvar até 5 locais, viajar p/ Nether/The End e Voo Survival
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">Abrir ›</span>
                  </button>
                </div>
              </div>
            )}

            {/* SCREEN: DUPLICATOR MENU */}
            {screen === 'duplicator' && (
              <div className="space-y-2">
                <div className="p-2.5 bg-[#242526] rounded text-xs font-mono text-slate-300 mb-2">
                  Item selecionado na mão:{' '}
                  <span className="text-amber-300 font-semibold">
                    {currentHandItem.name} ({currentHandItem.count}x)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setScreen('duplicator_modal')}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-emerald-300">
                      Multiplicar Item da Mão (Escolher Quantidade Livre)
                    </div>
                    <div className="text-xs text-slate-300">
                      Digite qualquer quantidade (ex: 64, 500, 1000, 2304) mantendo encantamentos
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">item.clone() ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => setScreen('inventory_picker')}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-sky-300">
                      Escolher Qualquer Slot do Inventário para Multiplicar
                    </div>
                    <div className="text-xs text-slate-300">
                      Lista todos os itens da mochila para você clonar na quantidade desejada
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">Ver Slots ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({
                      ...s,
                      inventory: s.inventory.map((it, idx) =>
                        idx === selectedSlotIdx ? { ...it, count: 64 } : it
                      ),
                    }));
                    pushLog(
                      `[Multiplicador] Item da mão (${currentHandItem.name}) definido para 64x instantaneamente!`,
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-amber-300">
                    Deixar Item da Mão em 64x Instantâneo
                  </span>
                  <span className="text-xs font-mono text-slate-300">amount = 64</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({
                      ...s,
                      inventory: s.inventory.map((it) =>
                        it.id === 'survivalmenu:amuleto' ? it : { ...it, count: Math.max(it.count, 64) }
                      ),
                    }));
                    pushLog(
                      '[Multiplicador] TODOS os slots do inventário foram multiplicados para 64x!',
                      'sky'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">
                    Multiplicar TODOS os Itens do Inventário para 64x
                  </span>
                  <span className="text-xs font-mono text-slate-300">Todos os Slots</span>
                </button>
              </div>
            )}

            {/* SCREEN: DUPLICATOR QUANTITY MODAL */}
            {screen === 'duplicator_modal' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 bg-[#1e1e1f] border border-[#4a4b4c] rounded text-slate-200">
                  Clonando com encantamentos e propriedades:{' '}
                  <strong className="text-emerald-400">{currentHandItem.name}</strong>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 tabular-nums">
                    Quantidade pelo Slider: {multiplyQtySlider}x
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={640}
                    value={multiplyQtySlider}
                    onChange={(e) => {
                      setMultiplyQtySlider(Number(e.target.value));
                      setMultiplyQtyCustom(e.target.value);
                    }}
                    className="w-full accent-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">
                    Ou digite QUALQUER quantidade exata (ex: 64, 500, 1000, 2304):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={9999}
                    value={multiplyQtyCustom}
                    onChange={(e) => setMultiplyQtyCustom(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const qty = Math.max(1, parseInt(multiplyQtyCustom, 10) || multiplyQtySlider);
                    setPlayerState((s) => ({
                      ...s,
                      inventory: s.inventory.map((it, idx) =>
                        idx === selectedSlotIdx ? { ...it, count: it.count + qty } : it
                      ),
                    }));
                    pushLog(
                      `[Multiplicador] Clonado +${qty}x ${currentHandItem.name} (preservando encantamentos)!`,
                      'emerald'
                    );
                    setScreen('duplicator');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Confirmar Multiplicação (+{multiplyQtyCustom || multiplyQtySlider}x)
                </button>
              </div>
            )}

            {/* SCREEN: INVENTORY SLOT PICKER */}
            {screen === 'inventory_picker' && (
              <div className="space-y-2">
                <p className="text-xs text-slate-300 font-mono mb-2">
                  Clique em qualquer item do seu inventário para escolher a quantidade que deseja multiplicar:
                </p>
                {playerState.inventory.map((item, idx) => (
                  <button
                    key={`${item.id}-${idx}`}
                    type="button"
                    onClick={() => {
                      setSelectedSlotIdx(idx);
                      setScreen('duplicator_modal');
                    }}
                    className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-xs font-mono text-white">
                      Slot {idx + 1}: <strong className="text-amber-300">{item.name}</strong>
                    </span>
                    <span className="text-xs font-mono text-emerald-400 tabular-nums">
                      Atual: {item.count}x · Multiplicar ›
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* SCREEN: ALL ITEMS MENU */}
            {screen === 'all_items' && (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setScreen('catalog_search')}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-emerald-300">
                      Pesquisar no Catálogo Universal do Jogo (ItemTypes.getAll)
                    </div>
                    <div className="text-xs text-slate-300">
                      Pesquise qualquer item da versão {config.targetBuildVersion} e escolha a quantidade exata
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">Pesquisar ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => setScreen('custom_item_modal')}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-amber-300">
                      Pegar Qualquer Item Digitando ID + Quantidade Livre
                    </div>
                    <div className="text-xs text-slate-300">
                      Digite qualquer ID (ex: mace, diamond_block) e receba até milhares de unidades
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">Digitar ID ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => setScreen('armor_keypad')}
                  className="w-full text-left px-3.5 py-2.5 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-sky-300">
                    Ir para Teclado de Armaduras, Ferramentas & Encantador
                  </span>
                  <span className="text-xs font-mono text-slate-300">Abrir Teclado ›</span>
                </button>
              </div>
            )}

            {/* SCREEN: UNIVERSAL CATALOG SEARCH */}
            {screen === 'catalog_search' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 mb-1">
                      Filtrar entre os itens do jogo (ItemTypes.getAll):
                    </label>
                    <input
                      type="text"
                      value={catalogSearch}
                      onChange={(e) => setCatalogSearch(e.target.value)}
                      placeholder="Ex: mace, netherite, totem, shulker..."
                      className="w-full px-3 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Quantidade desejada:</label>
                    <input
                      type="number"
                      min={1}
                      max={9999}
                      value={catalogQtyCustom}
                      onChange={(e) => setCatalogQtyCustom(e.target.value)}
                      className="w-full px-3 py-1.5 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-emerald-400 font-bold"
                    />
                  </div>
                </div>

                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                  {filteredCatalog.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const qty = Math.max(1, parseInt(catalogQtyCustom, 10) || 64);
                        setPlayerState((s) => ({
                          ...s,
                          inventory: [
                            ...s.inventory.slice(0, 6),
                            { id: item.id, name: item.name, count: qty },
                          ],
                        }));
                        pushLog(`[Catálogo] Entregue +${qty}x ${item.name} (${item.id}) no inventário!`, 'emerald');
                      }}
                      className="w-full text-left px-3 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div className="text-white font-semibold">{item.name}</div>
                        <div className="text-[11px] text-slate-300">{item.id}</div>
                      </div>
                      <span className="text-emerald-300 font-semibold tabular-nums shrink-0">
                        +Pegar {catalogQtyCustom || 64}x
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN: CUSTOM ITEM BY ID + FREE QUANTITY */}
            {screen === 'custom_item_modal' && (
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">
                    Digite o ID de qualquer item do Minecraft:
                  </label>
                  <input
                    type="text"
                    value={customItemId}
                    onChange={(e) => setCustomItemId(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 tabular-nums">
                    Digite QUALQUER quantidade (ex: 1, 64, 500, 1000, 2304):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={9999}
                    value={customItemQty}
                    onChange={(e) => setCustomItemQty(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1e1e1f] border border-[#5a5b5c] rounded text-emerald-400 font-bold"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const qty = Math.max(1, parseInt(customItemQty, 10) || 64);
                    setPlayerState((s) => ({
                      ...s,
                      inventory: [
                        ...s.inventory.slice(0, 6),
                        { id: customItemId, name: customItemId, count: qty },
                      ],
                    }));
                    pushLog(`[Menu] Adicionado +${qty}x ${customItemId} no inventário!`, 'emerald');
                    setScreen('all_items');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors cursor-pointer"
                >
                  Entregar +{customItemQty || 64}x no Inventário
                </button>
              </div>
            )}

            {/* SCREEN: SURVIVAL, VEINMINER, HIT-KILL & MAGNET */}
            {screen === 'survival' && (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, godMode: !s.godMode, hp: 20, hunger: 20 }));
                    pushLog(
                      !playerState.godMode
                        ? '[Menu] Imortalidade (Resistance 255 + Regeneration 255 + Saturação) ATIVADA!'
                        : '[Menu] Imortalidade desativada.',
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-emerald-300">
                    {playerState.godMode ? 'Imortalidade: ATIVA (Desativar)' : 'Ativar Imortalidade (God Mode)'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">Resistance 255</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, oneHitKill: !s.oneHitKill }));
                    pushLog(
                      !playerState.oneHitKill
                        ? '[Menu] Hit-Kill (Strength 255) ATIVADO! Qualquer Boss morre em 1 golpe!'
                        : '[Menu] Hit-Kill desativado.',
                      'rose'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-rose-300">
                    {playerState.oneHitKill
                      ? 'Hit-Kill (Força 255): ATIVO (Desativar)'
                      : 'Ativar Hit-Kill (Matar Boss em 1 Golpe)'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">Strength 255</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, veinMiner: !s.veinMiner }));
                    pushLog(
                      !playerState.veinMiner
                        ? '[Menu] VeinMiner & TreeCapitator ATIVADO! Quebre 1 minério/tronco para colher o veio inteiro!'
                        : '[Menu] VeinMiner & TreeCapitator desativado.',
                      'amber'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-amber-300">
                    {playerState.veinMiner
                      ? 'VeinMiner & TreeCapitator: ATIVO (28 blocos)'
                      : 'Ativar VeinMiner & TreeCapitator'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">playerBreakBlock</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, autoMagnet: !s.autoMagnet }));
                    pushLog(
                      !playerState.autoMagnet
                        ? '[Menu] Ímã Automático de Drops e XP (Raio 16m) ATIVADO!'
                        : '[Menu] Ímã Automático desativado.',
                      'sky'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-sky-300">
                    {playerState.autoMagnet
                      ? 'Ímã Automático de Drops & XP: ATIVO (16m)'
                      : 'Ativar Ímã Automático de Drops & XP'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">getEntities 16m</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, xpLevel: s.xpLevel + 100 }));
                    pushLog('[Menu] +100 Níveis de Experiência adicionados via player.addLevels(100)!', 'emerald');
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">Adicionar +100 Níveis de XP</span>
                  <span className="text-xs font-mono text-emerald-400 tabular-nums">Atual: Nv. {playerState.xpLevel}</span>
                </button>
              </div>
            )}

            {/* SCREEN: WORLD BUILDER, POTIONS, SMELTER, FARMS & MOB SPAWNER */}
            {screen === 'world_builder' && (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Mega Armazém Survival] Filtrados 1.184 Blocos e Itens Survival! Gerados 1.184 Baús Duplos Conectados com Molduras Brilhantes (Glow Item Frame) fixadas em cada baú mostrando exatamente o item interno!',
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2.5 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-500/60 rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-emerald-300">
                      [Modo 1] TODOS os Blocos e Itens Survival (com Molduras Brilhantes)
                    </div>
                    <div className="text-xs text-slate-200">
                      ~1.180 Baús Duplos conectados onde CADA baú possui uma Moldura Brilhante (Glow Item Frame) identificadora!
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-300 whitespace-nowrap shrink-0">~1.180 Baús ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Mega Laboratório de Poções] Construído complexo de alquimia industrial! 4 Suportes de Poções automáticos, caldeirões com água, canteiro de fungos do nether e 4 Baús Duplos lotados de ingredientes e poções prontas!',
                      'sky'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2.5 bg-purple-950/70 hover:bg-purple-900/70 border border-purple-500/60 rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-purple-300">
                      Mega Laboratório de Poções Enorme (Alquimia Industrial)
                    </div>
                    <div className="text-xs text-slate-200">
                      Bancada com 4 Suportes, Caldeirões, Canteiro de Fungos e Baús com TODOS os Ingredientes
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-300 whitespace-nowrap shrink-0">Alquimia ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Super Fornalha 16x] Construído Smelter Industrial! 8 Fornalhas Potentes (Blast), 8 Defumadores (Smoker), rede de funis de entrada/saída e baús com 54 packs de carvão e lava!',
                      'amber'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2.5 bg-amber-950/70 hover:bg-amber-900/70 border border-amber-500/60 rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-amber-300">
                      Super Fornalha Industrial 16x (Smelter Automático)
                    </div>
                    <div className="text-xs text-slate-200">
                      16 Fornalhas com Funis, Baús de entrada de minérios e baú de saída automático
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-300 whitespace-nowrap shrink-0">Fornalhas ›</span>
                </button>

                <div className="p-3 bg-[#2a2b2c] border border-[#3e4042] rounded space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 font-mono uppercase tracking-wide">
                      ⚡ Farms Avançadas de XP & Recursos Lendários (100% Survival):
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">15 Farms Prontas</span>
                  </div>
                  
                  {/* High Tier Farms */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Mega Farm de Ouro & XP] Portais de Nether construídos no Overworld com blocos de magma, correntes de água direcionadas, funis e Baú Duplo com 54 slots de Barras e Pepitas de Ouro!',
                          'amber'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-amber-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-amber-300">1. Ouro & XP do Nether</div>
                      <div className="text-[10px] text-slate-300">Portais + Magma + Ouro</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Raids & Totens] Torre de Bad Omen e Raids gerada! Ejetores de água, fosso de queda, funis e Baú Duplo com Totens da Imortalidade e Esmeraldas infinitas!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-emerald-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-emerald-300">2. Raids & Totens</div>
                      <div className="text-[10px] text-slate-300">Totens + Esmeraldas</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Enderman no End] Torre de 43 blocos com isca de Endermite suspensa em carrinho, slot de 1-hit kill com pés protegidos e Baú Duplo lotado de Pérolas do End!',
                          'sky'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-purple-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-purple-300">3. Enderman no End</div>
                      <div className="text-[10px] text-slate-300">Endermite + 1-Hit Kill</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Wither Skeleton] Plataforma de Tijolos do Nether com Rosas do Wither (anti-mobs indesejados), funis e Baú Duplo com Crânios de Wither Skeleton e Carvão!',
                          'rose'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-rose-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-rose-300">4. Wither Skeleton</div>
                      <div className="text-[10px] text-slate-300">Crânios + Nether Fortress</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Creeper & Pólvora] Câmara com alçapões no teto (filtro anti-zumbi/esqueleto), gatos nas paredes, fogueiras na base e Baú Duplo com 54 packs de Pólvora Pura!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-emerald-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-emerald-400">5. Creeper & Pólvora</div>
                      <div className="text-[10px] text-slate-300">Filtro Alçapão + Gatos</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Hall de Barter dos Piglins] 6 Baias de Piglins com ejetores de ouro com relógio de redstone rápido, funis de coleta e Baú Duplo com Obsidiana Chorosa e Livros!',
                          'amber'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-amber-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-yellow-300">6. Barter dos Piglins</div>
                      <div className="text-[10px] text-slate-300">6 Baias + Redstone Ouro</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Guardião do Mar] Coluna de água do Templo do Oceano com fogueiras de almas no fundo, funis e Baú Duplo com Cristais e Fragmentos de Prismarinho!',
                          'sky'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-sky-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-sky-300">7. Guardião do Oceano</div>
                      <div className="text-[10px] text-slate-300">Templo + Prismarinho</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Slime em Slime Chunk] Plataforma subterrânea na Y=30 com blocos de magma, Iron Golem como isca em gaiola de ferro, funis e Baú Duplo de Bolas de Slime!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-emerald-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-lime-300">8. Slime Chunk</div>
                      <div className="text-[10px] text-slate-300">Isca Golem + Magma</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Aldeão / Cenouras & Batatas] Campo 9x9 com composteira, água central, aldeão fazendeiro, carrinho com funil sob o solo e Baú Duplo de Cenouras Douradas!',
                          'amber'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-amber-500/40 rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-amber-200">9. Aldeão Fazendeiro</div>
                      <div className="text-[10px] text-slate-300">Composteira + Colheita</div>
                    </button>
                  </div>

                  <div className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wide pt-1">
                    🌱 Farms Essenciais de Recursos:
                  </div>

                  {/* Core Resource Farms */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Ferro] Gerada Farm de Iron Golem com plataforma de água, lava blade, funis e baú duplo de barras de ferro!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-yellow-300">10. Farm de Ferro</div>
                      <div className="text-[10px] text-slate-400">Golems + Lava + Funis</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Cana & Bambu] Gerada Farm Automática com Observadores, Pistões, Canaleta de Água e Baú Duplo!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-emerald-300">11. Cana & Bambu</div>
                      <div className="text-[10px] text-slate-400">Pistão + Observador</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Abóbora & Melancia] Gerada Farm com observadores cortando e funis coletando no baú!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-amber-300">12. Abóbora & Melancia</div>
                      <div className="text-[10px] text-slate-400">Colheita contínua</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Mob Trap Automática] Gerada Torre de Mob Grinder 22m com câmara escura, queda e funis com baú de pólvora e ossos!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-rose-300">13. Mob Trap & XP</div>
                      <div className="text-[10px] text-slate-400">Torre 22m + Drops</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Algas / Kelp] Gerado tanque vertical com pistões e defumadores para combustível infinito!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-teal-300">14. Farm de Algas</div>
                      <div className="text-[10px] text-slate-400">Combustível Infinito</div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        pushLog(
                          '[Farm de Lã Automática] Geradas 4 baias de ovelhas com observadores e ejetores com tesouras!',
                          'emerald'
                        )
                      }
                      className="p-2 bg-[#1e1e1f] hover:bg-[#343536] border border-[#444] rounded text-left text-xs cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-sky-300">15. Farm de Lã</div>
                      <div className="text-[10px] text-slate-400">Tosquia com Ejetor</div>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Mega Sala Rápida Survival] 60 Baús Duplos gerados! Cada Baú Duplo tem todos os 54 slots lotados com Moldura Brilhante do item!',
                      'sky'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-sky-300">
                      [Modo 2] Mega Sala Rápida: Top 60 Blocos & Itens Survival
                    </div>
                    <div className="text-xs text-slate-300">
                      60 Baús Duplos com Molduras Brilhantes onde cada baú vem 100% cheio do item
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">60 Baús ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      `[Mega Baú Duplo] Criado 1 Baú Duplo na sua frente com Moldura Brilhante e 54 slots lotados de ${currentHandItem.name}!`,
                      'amber'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-amber-300">
                      [Modo 3] Gerar 1 Baú Duplo Lotado (54 Packs) do Item da Minha Mão
                    </div>
                    <div className="text-xs text-slate-300">
                      Cria 1 Baú Duplo com Moldura Brilhante de: {currentHandItem.name}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 whitespace-nowrap shrink-0">54 Slots ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Construtor] Sala de Encantamento Nível 30 (15 Estantes + Mesa) construída ao seu redor via block.setType!',
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-purple-300">
                      Gerar Sala de Encantamento Nv. 30 Completa
                    </div>
                    <div className="text-xs text-slate-300">
                      Coloca 15 Estantes de Livros + Mesa de Encantamento ao seu redor
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">block.setType ›</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pushLog(
                      '[Construtor] Plataforma Salva-Vidas 5x5 de Obsidiana criada embaixo dos seus pés!',
                      'amber'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">
                    Plataforma Salva-Vidas 5x5 de Obsidiana (Evita Lava/Void)
                  </span>
                  <span className="text-xs font-mono text-slate-300">Instantâneo ›</span>
                </button>

                <div className="pt-1 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      pushLog('[Spawner] Golem de Ferro Protetor invocado via dimension.spawnEntity!', 'emerald')
                    }
                    className="px-3 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded text-xs font-mono text-emerald-300 cursor-pointer text-left"
                  >
                    + Invocar Iron Golem
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      pushLog('[Spawner] Aldeão (Villager) para trocas invocado na sua frente!', 'sky')
                    }
                    className="px-3 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded text-xs font-mono text-sky-300 cursor-pointer text-left"
                  >
                    + Invocar Aldeão
                  </button>
                </div>
              </div>
            )}

            {/* SCREEN: MULTI-WAYPOINTS & DIMENSION TRAVEL */}
            {screen === 'movement' && (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, homeCoords: { ...s.coords } }));
                    pushLog(
                      `[Waypoints] Slot 1 (Base Principal) salvo em X:${playerState.coords.x}, Y:${playerState.coords.y}, Z:${playerState.coords.z}!`,
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-emerald-300">
                    Salvar Posição em Multi-Waypoints (5 Slots)
                  </span>
                  <span className="text-xs font-mono text-slate-300 tabular-nums">
                    {playerState.homeCoords.x}, {playerState.homeCoords.y}, {playerState.homeCoords.z}
                  </span>
                </button>

                <div className="grid grid-cols-3 gap-1.5">
                  {(['Overworld', 'Nether', 'The End'] as const).map((dim) => (
                    <button
                      key={dim}
                      type="button"
                      onClick={() => {
                        setPlayerState((s) => ({ ...s, dimension: dim }));
                        pushLog(
                          `[Dimensões] Viajou diretamente para ${dim} com proteção de chegada!`,
                          'amber'
                        );
                      }}
                      className={`py-2 px-2 rounded border text-xs font-mono font-semibold cursor-pointer ${
                        playerState.dimension === dim
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                          : 'bg-[#48494a] border-[#242526] text-slate-200 hover:bg-[#5c5d5e]'
                      }`}
                    >
                      Ir: {dim}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setPlayerState((s) => ({ ...s, flyMode: !s.flyMode }));
                    pushLog(
                      !playerState.flyMode
                        ? '[Menu] Voo Survival (Planar + Impulso Aéreo) ATIVADO!'
                        : '[Menu] Voo Survival desativado.',
                      'emerald'
                    );
                  }}
                  className="w-full text-left px-3.5 py-2 bg-[#48494a] hover:bg-[#5c5d5e] border border-[#242526] rounded flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">
                    {playerState.flyMode ? 'Desativar Voo Survival (Ativo)' : 'Ativar Voo Survival (Planar + Impulso)'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">applyKnockback</span>
                </button>
              </div>
            )}
          </div>

          {/* Chat Feed Log */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Saída do Chat no Jogo (player.sendMessage)</span>
            </div>
            <div className="space-y-1 font-mono text-xs bg-slate-900/90 p-3 rounded border border-slate-800/80 max-h-36 overflow-y-auto">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2">
                  <span className="text-slate-500 tabular-nums shrink-0">{log.time}</span>
                  <span
                    className={
                      log.tone === 'emerald'
                        ? 'text-emerald-400'
                        : log.tone === 'sky'
                        ? 'text-sky-400'
                        : log.tone === 'amber'
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }
                  >
                    {log.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Simulated Player Telemetry & Interactive Inventory */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-slate-800 bg-slate-950/70 rounded-md p-5">
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">
              Equipamento Atual & Inventário Interativo
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Clique em um slot abaixo para segurá-lo na mão e encantar, renomear ou multiplicar:
            </p>

            {/* Equipped Armor Box */}
            <div className="mb-4 p-3 bg-slate-900/90 border border-slate-800 rounded text-xs font-mono">
              <div className="text-slate-400 mb-0.5">Armadura Equipada no Corpo:</div>
              <div className="text-amber-300 font-semibold">{playerState.equippedArmor}</div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Slots do Inventário (Container API)</span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setScreen('item_renamer')}
                    className="text-purple-400 hover:underline font-mono cursor-pointer"
                  >
                    + Bigorna
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreen('hand_enchanter')}
                    className="text-amber-400 hover:underline font-mono cursor-pointer"
                  >
                    + Encantar
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreen('duplicator_modal')}
                    className="text-emerald-400 hover:underline font-mono cursor-pointer"
                  >
                    + Multiplicar
                  </button>
                </div>
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {playerState.inventory.map((item, idx) => {
                  const isHand = idx === selectedSlotIdx;
                  return (
                    <div
                      key={`${item.id}-${idx}`}
                      onClick={() => setSelectedSlotIdx(idx)}
                      className={`flex items-center justify-between px-3 py-2 rounded text-xs font-mono cursor-pointer transition-colors border ${
                        isHand
                          ? 'bg-emerald-950/40 border-emerald-600/60 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/70'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="text-slate-500 mr-1.5">#{idx + 1}</span>
                        <span>{item.name}</span>
                        {item.lore && (
                          <span className="ml-2 text-[11px] text-purple-300">[{item.lore}]</span>
                        )}
                        {isHand && (
                          <span className="ml-2 text-[11px] text-emerald-400">[Na Mão]</span>
                        )}
                      </div>
                      <span className="text-emerald-400 font-semibold tabular-nums shrink-0">
                        {item.count}x
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-slate-800/80 border-t border-b border-slate-800 text-xs">
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-400">Conquistas Bedrock {config.targetBuildVersion}</span>
                <span className="font-mono font-semibold text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> HABILITADAS
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-400">VeinMiner & TreeCapitator</span>
                <span className="font-mono text-amber-300">
                  {playerState.veinMiner ? 'ATIVO (Até 28 blocos)' : 'Desativado'}
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-400">Ímã de Drops & Hit-Kill</span>
                <span className="font-mono text-sky-400">
                  {playerState.autoMagnet ? 'Ímã 16m' : 'Sem Ímã'} · {playerState.oneHitKill ? 'Hit-Kill ON' : 'Normal'}
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-400">Anti-UserBusy Retry</span>
                <span className="font-mono text-emerald-400">Proteção Ativa (5 ticks)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
            No jogo, basta apertar a tecla de <strong>Agachar (Shift) 2x seguidas olhando para o chão</strong> (ou usar o item do Menu) para abrir o <strong>Teclado de Armaduras, Bigorna Colorida, VeinMiner & Construtor</strong>!
          </div>
        </div>
      </div>
    </div>
  );
};
