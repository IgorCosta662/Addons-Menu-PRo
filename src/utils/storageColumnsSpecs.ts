export interface ShulkerContentItem {
  id: string;
  count: number;
  name?: string;
  ench?: [string, number][];
}

export interface ColumnDoubleChestSpec {
  chestIndex: 1 | 2; // 1 = Esquerdo, 2 = Direito
  shulkerCode?: string;
  signTitle: string;
  subcategory: string;
  shulkerBoxColor: string;
  shulkerBoxName: string;
  shulkerItems: ShulkerContentItem[];
  rawItems64x: string[];
}

export interface ColumnLevelSpec {
  level: number; // 1 a 10
  name: string;
  categoryTheme?: string;
  shortName: string;
  chestLeft: ColumnDoubleChestSpec;
  chestRight: ColumnDoubleChestSpec;
}

export interface StorageColumnSpec {
  index: number; // 1 a 16
  colNumber?: number;
  id: string;
  name: string;
  title?: string;
  shortSign: string;
  shortName?: string;
  category: string;
  description: string;
  icon: string;
  shulkerColor: string;
  levels: ColumnLevelSpec[];
}

const RAW_MEGA_STORAGE_COLUMNS_16: StorageColumnSpec[] = [
  // ==========================================================================
  // COLUNA 1: PEDRAS, ROCHAS, ARDÓSIA (DEEPSLATE) & TUFO 1.21
  // ==========================================================================
  {
    index: 1,
    id: 'coluna_01_pedras_ardosia_tufo',
    name: '1. Pedras, Rochas, Ardósia Profunda & Tufo 1.21',
    shortSign: 'COL 01 PEDRAS',
    category: 'Blocos de Construção e Pedras',
    description: '10 Níveis: Pedras Lisas, Pedregulhos, Tijolos, Granito/Diorito/Andesito, Ardósia Profunda, Tufo 1.21, Calcita e Arenito.',
    icon: 'textures/blocks/stone',
    shulkerColor: 'minecraft:gray_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Pedra Lisa, Pedregulho e Muros',
        shortName: 'PEDRA & PEDREG',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PEDRA LISA',
          subcategory: 'Pedra Lisa & Lajes',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Pedra Lisa & Variações',
          shulkerItems: [
            { id: 'minecraft:stone', count: 64 },
            { id: 'minecraft:smooth_stone', count: 64 },
            { id: 'minecraft:stone_slab', count: 64 },
            { id: 'minecraft:smooth_stone_slab', count: 64 },
            { id: 'minecraft:normal_stone_stairs', count: 64 },
            { id: 'minecraft:stone_button', count: 64 },
            { id: 'minecraft:stone_pressure_plate', count: 64 },
          ],
          rawItems64x: ['minecraft:stone', 'minecraft:smooth_stone', 'minecraft:stone_slab', 'minecraft:smooth_stone_slab'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PEDREGULHO',
          subcategory: 'Pedregulho & Muros',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Pedregulho & Muros',
          shulkerItems: [
            { id: 'minecraft:cobblestone', count: 64 },
            { id: 'minecraft:stone_stairs', count: 64 },
            { id: 'minecraft:cobblestone_slab', count: 64 },
            { id: 'minecraft:cobblestone_wall', count: 64 },
            { id: 'minecraft:mossy_cobblestone', count: 64 },
            { id: 'minecraft:mossy_cobblestone_stairs', count: 64 },
            { id: 'minecraft:mossy_cobblestone_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:cobblestone', 'minecraft:stone_stairs', 'minecraft:cobblestone_slab', 'minecraft:cobblestone_wall'],
        },
      },
      {
        level: 2,
        name: 'Tijolos de Pedra Normais & Musgosos',
        shortName: 'TIJOLOS PEDRA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TIJOLO PEDRA',
          subcategory: 'Tijolos de Pedra Polidos',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos de Pedra',
          shulkerItems: [
            { id: 'minecraft:stone_bricks', count: 64 },
            { id: 'minecraft:stone_brick_stairs', count: 64 },
            { id: 'minecraft:stone_brick_slab', count: 64 },
            { id: 'minecraft:stone_brick_wall', count: 64 },
            { id: 'minecraft:chiseled_stone_bricks', count: 64 },
            { id: 'minecraft:cracked_stone_bricks', count: 64 },
          ],
          rawItems64x: ['minecraft:stone_bricks', 'minecraft:stone_brick_stairs', 'minecraft:stone_brick_slab', 'minecraft:stone_brick_wall'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLO MUSGOSO',
          subcategory: 'Tijolos de Pedra Musgosos',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos Musgosos',
          shulkerItems: [
            { id: 'minecraft:mossy_stone_bricks', count: 64 },
            { id: 'minecraft:mossy_stone_brick_stairs', count: 64 },
            { id: 'minecraft:mossy_stone_brick_slab', count: 64 },
            { id: 'minecraft:mossy_stone_brick_wall', count: 64 },
            { id: 'minecraft:moss_block', count: 64 },
            { id: 'minecraft:moss_carpet', count: 64 },
          ],
          rawItems64x: ['minecraft:mossy_stone_bricks', 'minecraft:mossy_stone_brick_stairs', 'minecraft:moss_block', 'minecraft:mossy_stone_brick_wall'],
        },
      },
      {
        level: 3,
        name: 'Granito, Diorito & Andesito (Bruto e Polido)',
        shortName: 'GRANITO/DIORITO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'GRANITO & POLIDO',
          subcategory: 'Granito & Variações Polidas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Granito & Polido',
          shulkerItems: [
            { id: 'minecraft:granite', count: 64 },
            { id: 'minecraft:polished_granite', count: 64 },
            { id: 'minecraft:granite_stairs', count: 64 },
            { id: 'minecraft:polished_granite_stairs', count: 64 },
            { id: 'minecraft:granite_slab', count: 64 },
            { id: 'minecraft:polished_granite_slab', count: 64 },
            { id: 'minecraft:granite_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:granite', 'minecraft:polished_granite', 'minecraft:granite_stairs', 'minecraft:polished_granite_stairs'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'DIORITO/ANDESIT',
          subcategory: 'Diorito & Andesito Polidos',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Diorito & Andesito',
          shulkerItems: [
            { id: 'minecraft:diorite', count: 64 },
            { id: 'minecraft:polished_diorite', count: 64 },
            { id: 'minecraft:diorite_stairs', count: 64 },
            { id: 'minecraft:polished_diorite_stairs', count: 64 },
            { id: 'minecraft:andesite', count: 64 },
            { id: 'minecraft:polished_andesite', count: 64 },
            { id: 'minecraft:andesite_stairs', count: 64 },
            { id: 'minecraft:polished_andesite_stairs', count: 64 },
          ],
          rawItems64x: ['minecraft:diorite', 'minecraft:polished_diorite', 'minecraft:andesite', 'minecraft:polished_andesite'],
        },
      },
      {
        level: 4,
        name: 'Ardósia Profunda (Deepslate) Cobbled & Polida',
        shortName: 'ARDOSIA POLIDA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARDOSIA BRUTA',
          subcategory: 'Deepslate Cobbled & Muros',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Ardósia Cobbled',
          shulkerItems: [
            { id: 'minecraft:deepslate', count: 64 },
            { id: 'minecraft:cobbled_deepslate', count: 64 },
            { id: 'minecraft:cobbled_deepslate_stairs', count: 64 },
            { id: 'minecraft:cobbled_deepslate_slab', count: 64 },
            { id: 'minecraft:cobbled_deepslate_wall', count: 64 },
            { id: 'minecraft:reinforced_deepslate', count: 64 },
          ],
          rawItems64x: ['minecraft:deepslate', 'minecraft:cobbled_deepslate', 'minecraft:cobbled_deepslate_stairs', 'minecraft:cobbled_deepslate_wall'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ARDOSIA POLIDA',
          subcategory: 'Deepslate Polido & Escadas',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Ardósia Polida',
          shulkerItems: [
            { id: 'minecraft:polished_deepslate', count: 64 },
            { id: 'minecraft:polished_deepslate_stairs', count: 64 },
            { id: 'minecraft:polished_deepslate_slab', count: 64 },
            { id: 'minecraft:polished_deepslate_wall', count: 64 },
            { id: 'minecraft:chiseled_deepslate', count: 64 },
          ],
          rawItems64x: ['minecraft:polished_deepslate', 'minecraft:polished_deepslate_stairs', 'minecraft:polished_deepslate_slab', 'minecraft:chiseled_deepslate'],
        },
      },
      {
        level: 5,
        name: 'Tijolos e Ladrilhos de Ardósia Profunda',
        shortName: 'TIJOLO ARDOSIA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TIJOLO ARDOSIA',
          subcategory: 'Deepslate Bricks & Variações',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos de Ardósia',
          shulkerItems: [
            { id: 'minecraft:deepslate_bricks', count: 64 },
            { id: 'minecraft:deepslate_brick_stairs', count: 64 },
            { id: 'minecraft:deepslate_brick_slab', count: 64 },
            { id: 'minecraft:deepslate_brick_wall', count: 64 },
            { id: 'minecraft:cracked_deepslate_bricks', count: 64 },
          ],
          rawItems64x: ['minecraft:deepslate_bricks', 'minecraft:deepslate_brick_stairs', 'minecraft:deepslate_brick_slab', 'minecraft:deepslate_brick_wall'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LADRILHO ARDOS',
          subcategory: 'Deepslate Tiles & Variações',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Ladrilhos de Ardósia',
          shulkerItems: [
            { id: 'minecraft:deepslate_tiles', count: 64 },
            { id: 'minecraft:deepslate_tile_stairs', count: 64 },
            { id: 'minecraft:deepslate_tile_slab', count: 64 },
            { id: 'minecraft:deepslate_tile_wall', count: 64 },
            { id: 'minecraft:cracked_deepslate_tiles', count: 64 },
          ],
          rawItems64x: ['minecraft:deepslate_tiles', 'minecraft:deepslate_tile_stairs', 'minecraft:deepslate_tile_slab', 'minecraft:deepslate_tile_wall'],
        },
      },
      {
        level: 6,
        name: 'Tufo 1.21 Completo (Bruto, Polido, Tijolos e Talhado)',
        shortName: 'TUFO 1.21',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TUFO & POLIDO',
          subcategory: 'Tufo Bruto & Tufo Polido 1.21',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Tufo 1.21 & Polido',
          shulkerItems: [
            { id: 'minecraft:tuff', count: 64 },
            { id: 'minecraft:polished_tuff', count: 64 },
            { id: 'minecraft:tuff_stairs', count: 64 },
            { id: 'minecraft:polished_tuff_stairs', count: 64 },
            { id: 'minecraft:tuff_slab', count: 64 },
            { id: 'minecraft:polished_tuff_slab', count: 64 },
            { id: 'minecraft:tuff_wall', count: 64 },
            { id: 'minecraft:polished_tuff_wall', count: 64 },
            { id: 'minecraft:chiseled_tuff', count: 64 },
          ],
          rawItems64x: ['minecraft:tuff', 'minecraft:polished_tuff', 'minecraft:tuff_stairs', 'minecraft:polished_tuff_stairs'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLOS DE TUFO',
          subcategory: 'Tijolos de Tufo & Talhado 1.21',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos de Tufo',
          shulkerItems: [
            { id: 'minecraft:tuff_bricks', count: 64 },
            { id: 'minecraft:tuff_brick_stairs', count: 64 },
            { id: 'minecraft:tuff_brick_slab', count: 64 },
            { id: 'minecraft:tuff_brick_wall', count: 64 },
            { id: 'minecraft:chiseled_tuff_bricks', count: 64 },
          ],
          rawItems64x: ['minecraft:tuff_bricks', 'minecraft:tuff_brick_stairs', 'minecraft:tuff_brick_slab', 'minecraft:chiseled_tuff_bricks'],
        },
      },
      {
        level: 7,
        name: 'Arenito, Arenito Vermelho & Calcita',
        shortName: 'ARENITO/CALCITA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARENITO AMARELO',
          subcategory: 'Arenito Amarelo, Liso e Talhado',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Arenito Amarelo',
          shulkerItems: [
            { id: 'minecraft:sandstone', count: 64 },
            { id: 'minecraft:smooth_sandstone', count: 64 },
            { id: 'minecraft:cut_sandstone', count: 64 },
            { id: 'minecraft:chiseled_sandstone', count: 64 },
            { id: 'minecraft:sandstone_stairs', count: 64 },
            { id: 'minecraft:sandstone_slab', count: 64 },
            { id: 'minecraft:sandstone_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:sandstone', 'minecraft:smooth_sandstone', 'minecraft:cut_sandstone', 'minecraft:sandstone_stairs'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ARENITO VERM/CAL',
          subcategory: 'Arenito Vermelho, Calcita & Dripstone',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Arenito Vermelho & Calcita',
          shulkerItems: [
            { id: 'minecraft:red_sandstone', count: 64 },
            { id: 'minecraft:smooth_red_sandstone', count: 64 },
            { id: 'minecraft:cut_red_sandstone', count: 64 },
            { id: 'minecraft:chiseled_red_sandstone', count: 64 },
            { id: 'minecraft:calcite', count: 64 },
            { id: 'minecraft:dripstone_block', count: 64 },
            { id: 'minecraft:pointed_dripstone', count: 64 },
          ],
          rawItems64x: ['minecraft:red_sandstone', 'minecraft:smooth_red_sandstone', 'minecraft:calcite', 'minecraft:dripstone_block'],
        },
      },
      {
        level: 8,
        name: 'Tijolos de Argila e Tijolos de Barro (Mud Bricks)',
        shortName: 'TIJOLOS & BARRO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TIJOLO ARGILA',
          subcategory: 'Tijolos Vermelhos de Argila',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos de Argila',
          shulkerItems: [
            { id: 'minecraft:brick_block', count: 64 },
            { id: 'minecraft:brick_stairs', count: 64 },
            { id: 'minecraft:brick_slab', count: 64 },
            { id: 'minecraft:brick_wall', count: 64 },
            { id: 'minecraft:brick', count: 64 },
            { id: 'minecraft:clay', count: 64 },
            { id: 'minecraft:clay_ball', count: 64 },
          ],
          rawItems64x: ['minecraft:brick_block', 'minecraft:brick_stairs', 'minecraft:brick_slab', 'minecraft:clay'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLO BARRO',
          subcategory: 'Tijolos de Barro (Mud Bricks)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos de Barro',
          shulkerItems: [
            { id: 'minecraft:mud_bricks', count: 64 },
            { id: 'minecraft:mud_brick_stairs', count: 64 },
            { id: 'minecraft:mud_brick_slab', count: 64 },
            { id: 'minecraft:mud_brick_wall', count: 64 },
            { id: 'minecraft:packed_mud', count: 64 },
            { id: 'minecraft:mud', count: 64 },
          ],
          rawItems64x: ['minecraft:mud_bricks', 'minecraft:mud_brick_stairs', 'minecraft:mud_brick_slab', 'minecraft:packed_mud'],
        },
      },
      {
        level: 9,
        name: 'Quartzo & Prismarinho Completo',
        shortName: 'QUARTZO/PRISMAR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BLOCO QUARTZO',
          subcategory: 'Quartzo Liso, Pilares & Talhado',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Quartzo Completo',
          shulkerItems: [
            { id: 'minecraft:quartz_block', count: 64 },
            { id: 'minecraft:smooth_quartz', count: 64 },
            { id: 'minecraft:quartz_pillar', count: 64 },
            { id: 'minecraft:quartz_bricks', count: 64 },
            { id: 'minecraft:chiseled_quartz_block', count: 64 },
            { id: 'minecraft:quartz_stairs', count: 64 },
            { id: 'minecraft:smooth_quartz_stairs', count: 64 },
            { id: 'minecraft:quartz_slab', count: 64 },
          ],
          rawItems64x: ['minecraft:quartz_block', 'minecraft:smooth_quartz', 'minecraft:quartz_pillar', 'minecraft:quartz_stairs'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PRISMARINHO',
          subcategory: 'Prismarinho & Lanternas do Mar',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Prismarinho & Luz',
          shulkerItems: [
            { id: 'minecraft:prismarine', count: 64 },
            { id: 'minecraft:prismarine_bricks', count: 64 },
            { id: 'minecraft:dark_prismarine', count: 64 },
            { id: 'minecraft:sea_lantern', count: 64 },
            { id: 'minecraft:prismarine_stairs', count: 64 },
            { id: 'minecraft:prismarine_brick_stairs', count: 64 },
            { id: 'minecraft:dark_prismarine_stairs', count: 64 },
            { id: 'minecraft:prismarine_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:prismarine', 'minecraft:prismarine_bricks', 'minecraft:dark_prismarine', 'minecraft:sea_lantern'],
        },
      },
      {
        level: 10,
        name: 'Pedras Místicas: Pedra Negra, Basalto e End Stone',
        shortName: 'PEDRAS MISTICAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PEDRA NEGRA/BAS',
          subcategory: 'Blackstone & Basalto Polido',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Pedra Negra & Basalto',
          shulkerItems: [
            { id: 'minecraft:blackstone', count: 64 },
            { id: 'minecraft:polished_blackstone', count: 64 },
            { id: 'minecraft:polished_blackstone_bricks', count: 64 },
            { id: 'minecraft:gilded_blackstone', count: 64 },
            { id: 'minecraft:basalt', count: 64 },
            { id: 'minecraft:polished_basalt', count: 64 },
            { id: 'minecraft:smooth_basalt', count: 64 },
          ],
          rawItems64x: ['minecraft:blackstone', 'minecraft:polished_blackstone', 'minecraft:polished_blackstone_bricks', 'minecraft:basalt'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'END STONE/PURP',
          subcategory: 'Pedra do End & Purpur',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: End Stone & Purpur',
          shulkerItems: [
            { id: 'minecraft:end_stone', count: 64 },
            { id: 'minecraft:end_stone_bricks', count: 64 },
            { id: 'minecraft:end_brick_stairs', count: 64 },
            { id: 'minecraft:end_stone_brick_slab', count: 64 },
            { id: 'minecraft:end_stone_brick_wall', count: 64 },
            { id: 'minecraft:purpur_block', count: 64 },
            { id: 'minecraft:purpur_pillar', count: 64 },
            { id: 'minecraft:purpur_stairs', count: 64 },
          ],
          rawItems64x: ['minecraft:end_stone', 'minecraft:end_stone_bricks', 'minecraft:purpur_block', 'minecraft:purpur_stairs'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 2: MADEIRAS, TRONCOS & DERIVADOS (12 TIPOS DE ÁRVORES)
  // ==========================================================================
  {
    index: 2,
    id: 'coluna_02_madeiras_derivados',
    name: '2. Madeiras do Overworld, Bambu & Nether (12 Árvores)',
    shortSign: 'COL 02 MADEIRAS',
    category: 'Madeiras e Derivados',
    description: '10 Níveis: Carvalho, Abeto, Bétula, Selva, Acácia, Carvalho Escuro, Manguezal, Cerejeira, Bambu e Madeiras do Nether.',
    icon: 'textures/blocks/log_oak',
    shulkerColor: 'minecraft:brown_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Carvalho (Oak) Completo',
        shortName: 'CARVALHO (OAK)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS CARVALHO',
          subcategory: 'Troncos & Madeiras de Carvalho',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Troncos de Carvalho',
          shulkerItems: [
            { id: 'minecraft:oak_log', count: 64 },
            { id: 'minecraft:stripped_oak_log', count: 64 },
            { id: 'minecraft:oak_wood', count: 64 },
            { id: 'minecraft:stripped_oak_wood', count: 64 },
            { id: 'minecraft:oak_leaves', count: 64 },
            { id: 'minecraft:oak_sapling', count: 64 },
            { id: 'minecraft:apple', count: 64 },
          ],
          rawItems64x: ['minecraft:oak_log', 'minecraft:stripped_oak_log', 'minecraft:oak_wood', 'minecraft:oak_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS CARVALHO',
          subcategory: 'Tábuas, Escadas, Portas e Barcos',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Tábuas & Derivados Carvalho',
          shulkerItems: [
            { id: 'minecraft:oak_planks', count: 64 },
            { id: 'minecraft:oak_stairs', count: 64 },
            { id: 'minecraft:oak_slab', count: 64 },
            { id: 'minecraft:oak_fence', count: 64 },
            { id: 'minecraft:fence_gate', count: 64 },
            { id: 'minecraft:wooden_door', count: 64 },
            { id: 'minecraft:trapdoor', count: 64 },
            { id: 'minecraft:oak_sign', count: 64 },
            { id: 'minecraft:oak_boat', count: 64 },
            { id: 'minecraft:oak_chest_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:oak_planks', 'minecraft:oak_stairs', 'minecraft:oak_fence', 'minecraft:wooden_door'],
        },
      },
      {
        level: 2,
        name: 'Abeto (Spruce) Completo',
        shortName: 'ABETO (SPRUCE)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS ABETO',
          subcategory: 'Troncos & Folhas de Abeto',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Troncos de Abeto',
          shulkerItems: [
            { id: 'minecraft:spruce_log', count: 64 },
            { id: 'minecraft:stripped_spruce_log', count: 64 },
            { id: 'minecraft:spruce_wood', count: 64 },
            { id: 'minecraft:stripped_spruce_wood', count: 64 },
            { id: 'minecraft:spruce_leaves', count: 64 },
            { id: 'minecraft:spruce_sapling', count: 64 },
          ],
          rawItems64x: ['minecraft:spruce_log', 'minecraft:stripped_spruce_log', 'minecraft:spruce_wood', 'minecraft:spruce_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS ABETO',
          subcategory: 'Tábuas, Cercas, Portas e Barcos Abeto',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Derivados de Abeto',
          shulkerItems: [
            { id: 'minecraft:spruce_planks', count: 64 },
            { id: 'minecraft:spruce_stairs', count: 64 },
            { id: 'minecraft:spruce_slab', count: 64 },
            { id: 'minecraft:spruce_fence', count: 64 },
            { id: 'minecraft:spruce_fence_gate', count: 64 },
            { id: 'minecraft:spruce_door', count: 64 },
            { id: 'minecraft:spruce_trapdoor', count: 64 },
            { id: 'minecraft:spruce_sign', count: 64 },
            { id: 'minecraft:spruce_boat', count: 64 },
            { id: 'minecraft:spruce_chest_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:spruce_planks', 'minecraft:spruce_stairs', 'minecraft:spruce_fence', 'minecraft:spruce_door'],
        },
      },
      {
        level: 3,
        name: 'Bétula (Birch) Completa',
        shortName: 'BETULA (BIRCH)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS BETULA',
          subcategory: 'Troncos & Folhas de Bétula',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Troncos de Bétula',
          shulkerItems: [
            { id: 'minecraft:birch_log', count: 64 },
            { id: 'minecraft:stripped_birch_log', count: 64 },
            { id: 'minecraft:birch_wood', count: 64 },
            { id: 'minecraft:stripped_birch_wood', count: 64 },
            { id: 'minecraft:birch_leaves', count: 64 },
            { id: 'minecraft:birch_sapling', count: 64 },
          ],
          rawItems64x: ['minecraft:birch_log', 'minecraft:stripped_birch_log', 'minecraft:birch_wood', 'minecraft:birch_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS BETULA',
          subcategory: 'Tábuas, Portas e Barcos Bétula',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Derivados de Bétula',
          shulkerItems: [
            { id: 'minecraft:birch_planks', count: 64 },
            { id: 'minecraft:birch_stairs', count: 64 },
            { id: 'minecraft:birch_slab', count: 64 },
            { id: 'minecraft:birch_fence', count: 64 },
            { id: 'minecraft:birch_fence_gate', count: 64 },
            { id: 'minecraft:birch_door', count: 64 },
            { id: 'minecraft:birch_trapdoor', count: 64 },
            { id: 'minecraft:birch_sign', count: 64 },
            { id: 'minecraft:birch_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:birch_planks', 'minecraft:birch_stairs', 'minecraft:birch_fence', 'minecraft:birch_door'],
        },
      },
      {
        level: 4,
        name: 'Selva (Jungle) Completa',
        shortName: 'SELVA (JUNGLE)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS SELVA',
          subcategory: 'Troncos, Folhas & Cacau de Selva',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Troncos de Selva',
          shulkerItems: [
            { id: 'minecraft:jungle_log', count: 64 },
            { id: 'minecraft:stripped_jungle_log', count: 64 },
            { id: 'minecraft:jungle_wood', count: 64 },
            { id: 'minecraft:jungle_leaves', count: 64 },
            { id: 'minecraft:jungle_sapling', count: 64 },
            { id: 'minecraft:cocoa_beans', count: 64 },
          ],
          rawItems64x: ['minecraft:jungle_log', 'minecraft:stripped_jungle_log', 'minecraft:jungle_wood', 'minecraft:cocoa_beans'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS SELVA',
          subcategory: 'Tábuas, Portas e Barcos de Selva',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Derivados de Selva',
          shulkerItems: [
            { id: 'minecraft:jungle_planks', count: 64 },
            { id: 'minecraft:jungle_stairs', count: 64 },
            { id: 'minecraft:jungle_slab', count: 64 },
            { id: 'minecraft:jungle_fence', count: 64 },
            { id: 'minecraft:jungle_fence_gate', count: 64 },
            { id: 'minecraft:jungle_door', count: 64 },
            { id: 'minecraft:jungle_trapdoor', count: 64 },
            { id: 'minecraft:jungle_sign', count: 64 },
            { id: 'minecraft:jungle_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:jungle_planks', 'minecraft:jungle_stairs', 'minecraft:jungle_fence', 'minecraft:jungle_door'],
        },
      },
      {
        level: 5,
        name: 'Acácia Completa',
        shortName: 'ACACIA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS ACACIA',
          subcategory: 'Troncos & Folhas de Acácia',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Troncos de Acácia',
          shulkerItems: [
            { id: 'minecraft:acacia_log', count: 64 },
            { id: 'minecraft:stripped_acacia_log', count: 64 },
            { id: 'minecraft:acacia_wood', count: 64 },
            { id: 'minecraft:stripped_acacia_wood', count: 64 },
            { id: 'minecraft:acacia_leaves', count: 64 },
            { id: 'minecraft:acacia_sapling', count: 64 },
          ],
          rawItems64x: ['minecraft:acacia_log', 'minecraft:stripped_acacia_log', 'minecraft:acacia_wood', 'minecraft:acacia_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS ACACIA',
          subcategory: 'Tábuas, Cercas, Portas e Barcos Acácia',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Derivados de Acácia',
          shulkerItems: [
            { id: 'minecraft:acacia_planks', count: 64 },
            { id: 'minecraft:acacia_stairs', count: 64 },
            { id: 'minecraft:acacia_slab', count: 64 },
            { id: 'minecraft:acacia_fence', count: 64 },
            { id: 'minecraft:acacia_fence_gate', count: 64 },
            { id: 'minecraft:acacia_door', count: 64 },
            { id: 'minecraft:acacia_trapdoor', count: 64 },
            { id: 'minecraft:acacia_sign', count: 64 },
            { id: 'minecraft:acacia_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:acacia_planks', 'minecraft:acacia_stairs', 'minecraft:acacia_fence', 'minecraft:acacia_door'],
        },
      },
      {
        level: 6,
        name: 'Carvalho Escuro (Dark Oak) Completo',
        shortName: 'CARVALHO ESCURO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS ESCURO',
          subcategory: 'Troncos & Mudas Carvalho Escuro',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Troncos Dark Oak',
          shulkerItems: [
            { id: 'minecraft:dark_oak_log', count: 64 },
            { id: 'minecraft:stripped_dark_oak_log', count: 64 },
            { id: 'minecraft:dark_oak_wood', count: 64 },
            { id: 'minecraft:stripped_dark_oak_wood', count: 64 },
            { id: 'minecraft:dark_oak_leaves', count: 64 },
            { id: 'minecraft:dark_oak_sapling', count: 64 },
          ],
          rawItems64x: ['minecraft:dark_oak_log', 'minecraft:stripped_dark_oak_log', 'minecraft:dark_oak_wood', 'minecraft:dark_oak_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS ESCURO',
          subcategory: 'Tábuas, Portas e Barcos Dark Oak',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Derivados Dark Oak',
          shulkerItems: [
            { id: 'minecraft:dark_oak_planks', count: 64 },
            { id: 'minecraft:dark_oak_stairs', count: 64 },
            { id: 'minecraft:dark_oak_slab', count: 64 },
            { id: 'minecraft:dark_oak_fence', count: 64 },
            { id: 'minecraft:dark_oak_fence_gate', count: 64 },
            { id: 'minecraft:dark_oak_door', count: 64 },
            { id: 'minecraft:dark_oak_trapdoor', count: 64 },
            { id: 'minecraft:dark_oak_sign', count: 64 },
            { id: 'minecraft:dark_oak_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:dark_oak_planks', 'minecraft:dark_oak_stairs', 'minecraft:dark_oak_fence', 'minecraft:dark_oak_door'],
        },
      },
      {
        level: 7,
        name: 'Manguezal (Mangrove) Completo',
        shortName: 'MANGUEZAL',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS MANGUE',
          subcategory: 'Troncos & Raízes de Manguezal',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Troncos Manguezal',
          shulkerItems: [
            { id: 'minecraft:mangrove_log', count: 64 },
            { id: 'minecraft:stripped_mangrove_log', count: 64 },
            { id: 'minecraft:mangrove_wood', count: 64 },
            { id: 'minecraft:mangrove_roots', count: 64 },
            { id: 'minecraft:muddy_mangrove_roots', count: 64 },
            { id: 'minecraft:mangrove_leaves', count: 64 },
            { id: 'minecraft:mangrove_propagule', count: 64 },
          ],
          rawItems64x: ['minecraft:mangrove_log', 'minecraft:stripped_mangrove_log', 'minecraft:mangrove_roots', 'minecraft:mangrove_leaves'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS MANGUE',
          subcategory: 'Tábuas, Portas e Barcos Manguezal',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Derivados Manguezal',
          shulkerItems: [
            { id: 'minecraft:mangrove_planks', count: 64 },
            { id: 'minecraft:mangrove_stairs', count: 64 },
            { id: 'minecraft:mangrove_slab', count: 64 },
            { id: 'minecraft:mangrove_fence', count: 64 },
            { id: 'minecraft:mangrove_fence_gate', count: 64 },
            { id: 'minecraft:mangrove_door', count: 64 },
            { id: 'minecraft:mangrove_trapdoor', count: 64 },
            { id: 'minecraft:mangrove_sign', count: 64 },
            { id: 'minecraft:mangrove_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:mangrove_planks', 'minecraft:mangrove_stairs', 'minecraft:mangrove_fence', 'minecraft:mangrove_door'],
        },
      },
      {
        level: 8,
        name: 'Cerejeira (Cherry Blossom) Completa',
        shortName: 'CEREJEIRA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRONCOS CEREJA',
          subcategory: 'Troncos & Folhas de Cerejeira',
          shulkerBoxColor: 'minecraft:pink_shulker_box',
          shulkerBoxName: 'Shulker: Troncos Cerejeira',
          shulkerItems: [
            { id: 'minecraft:cherry_log', count: 64 },
            { id: 'minecraft:stripped_cherry_log', count: 64 },
            { id: 'minecraft:cherry_wood', count: 64 },
            { id: 'minecraft:stripped_cherry_wood', count: 64 },
            { id: 'minecraft:cherry_leaves', count: 64 },
            { id: 'minecraft:cherry_sapling', count: 64 },
            { id: 'minecraft:pink_petals', count: 64 },
          ],
          rawItems64x: ['minecraft:cherry_log', 'minecraft:stripped_cherry_log', 'minecraft:cherry_leaves', 'minecraft:pink_petals'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TABUAS CEREJA',
          subcategory: 'Tábuas, Portas e Barcos Cerejeira',
          shulkerBoxColor: 'minecraft:pink_shulker_box',
          shulkerBoxName: 'Shulker: Derivados Cerejeira',
          shulkerItems: [
            { id: 'minecraft:cherry_planks', count: 64 },
            { id: 'minecraft:cherry_stairs', count: 64 },
            { id: 'minecraft:cherry_slab', count: 64 },
            { id: 'minecraft:cherry_fence', count: 64 },
            { id: 'minecraft:cherry_fence_gate', count: 64 },
            { id: 'minecraft:cherry_door', count: 64 },
            { id: 'minecraft:cherry_trapdoor', count: 64 },
            { id: 'minecraft:cherry_sign', count: 64 },
            { id: 'minecraft:cherry_boat', count: 64 },
          ],
          rawItems64x: ['minecraft:cherry_planks', 'minecraft:cherry_stairs', 'minecraft:cherry_fence', 'minecraft:cherry_door'],
        },
      },
      {
        level: 9,
        name: 'Bambu & Mosaico de Bambu Completo',
        shortName: 'BAMBU & MOSAICO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BAMBU BRUTO',
          subcategory: 'Blocos & Tábuas de Bambu',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Bambu & Blocos',
          shulkerItems: [
            { id: 'minecraft:bamboo', count: 64 },
            { id: 'minecraft:bamboo_block', count: 64 },
            { id: 'minecraft:stripped_bamboo_block', count: 64 },
            { id: 'minecraft:bamboo_planks', count: 64 },
            { id: 'minecraft:bamboo_stairs', count: 64 },
            { id: 'minecraft:bamboo_slab', count: 64 },
          ],
          rawItems64x: ['minecraft:bamboo', 'minecraft:bamboo_block', 'minecraft:bamboo_planks', 'minecraft:bamboo_stairs'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOSAICO BAMBU',
          subcategory: 'Mosaico, Jangadas e Cercas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Mosaico de Bambu',
          shulkerItems: [
            { id: 'minecraft:bamboo_mosaic', count: 64 },
            { id: 'minecraft:bamboo_mosaic_stairs', count: 64 },
            { id: 'minecraft:bamboo_mosaic_slab', count: 64 },
            { id: 'minecraft:bamboo_fence', count: 64 },
            { id: 'minecraft:bamboo_fence_gate', count: 64 },
            { id: 'minecraft:bamboo_door', count: 64 },
            { id: 'minecraft:bamboo_trapdoor', count: 64 },
            { id: 'minecraft:bamboo_raft', count: 64 },
            { id: 'minecraft:bamboo_chest_raft', count: 64 },
          ],
          rawItems64x: ['minecraft:bamboo_mosaic', 'minecraft:bamboo_mosaic_stairs', 'minecraft:bamboo_fence', 'minecraft:bamboo_door'],
        },
      },
      {
        level: 10,
        name: 'Madeiras do Nether (Carmesim & Distorcida)',
        shortName: 'MADEIRAS NETHER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CARMESIM (ROXO)',
          subcategory: 'Caules & Tábuas Carmesim',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Madeira Carmesim',
          shulkerItems: [
            { id: 'minecraft:crimson_stem', count: 64 },
            { id: 'minecraft:stripped_crimson_stem', count: 64 },
            { id: 'minecraft:crimson_planks', count: 64 },
            { id: 'minecraft:crimson_stairs', count: 64 },
            { id: 'minecraft:crimson_slab', count: 64 },
            { id: 'minecraft:crimson_fence', count: 64 },
            { id: 'minecraft:crimson_door', count: 64 },
            { id: 'minecraft:crimson_trapdoor', count: 64 },
            { id: 'minecraft:crimson_fungus', count: 64 },
          ],
          rawItems64x: ['minecraft:crimson_stem', 'minecraft:crimson_planks', 'minecraft:crimson_stairs', 'minecraft:crimson_fence'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'DISTORCIDA (AZ)',
          subcategory: 'Caules & Tábuas Distorcidas',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Madeira Distorcida',
          shulkerItems: [
            { id: 'minecraft:warped_stem', count: 64 },
            { id: 'minecraft:stripped_warped_stem', count: 64 },
            { id: 'minecraft:warped_planks', count: 64 },
            { id: 'minecraft:warped_stairs', count: 64 },
            { id: 'minecraft:warped_slab', count: 64 },
            { id: 'minecraft:warped_fence', count: 64 },
            { id: 'minecraft:warped_door', count: 64 },
            { id: 'minecraft:warped_trapdoor', count: 64 },
            { id: 'minecraft:warped_fungus', count: 64 },
          ],
          rawItems64x: ['minecraft:warped_stem', 'minecraft:warped_planks', 'minecraft:warped_stairs', 'minecraft:warped_fence'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 3: MINÉRIOS, METAIS, JOIAS & COBRE 1.21
  // ==========================================================================
  {
    index: 3,
    id: 'coluna_03_minerios_metais',
    name: '3. Minérios, Metais, Joias & Cobre 1.21',
    shortSign: 'COL 03 MINERIOS',
    category: 'Minérios, Metais e Recursos',
    description: '10 Níveis: Diamante, Netherita, Ouro, Ferro, Carvão, Redstone, Lápis, Esmeralda, Ametista e Família do Cobre 1.21.',
    icon: 'textures/items/diamond',
    shulkerColor: 'minecraft:cyan_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Diamantes & Detritos Ancestrais (Netherite)',
        shortName: 'DIAMANTE/NETHER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'DIAMANTES',
          subcategory: 'Diamantes, Minérios e Blocos',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Diamantes & Blocos',
          shulkerItems: [
            { id: 'minecraft:diamond', count: 64 },
            { id: 'minecraft:diamond_block', count: 64 },
            { id: 'minecraft:diamond_ore', count: 64 },
            { id: 'minecraft:deepslate_diamond_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:diamond', 'minecraft:diamond_block', 'minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'NETHERITA',
          subcategory: 'Detritos, Barras e Blocos Netherita',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Netherita Completa',
          shulkerItems: [
            { id: 'minecraft:ancient_debris', count: 64 },
            { id: 'minecraft:netherite_scrap', count: 64 },
            { id: 'minecraft:netherite_ingot', count: 64 },
            { id: 'minecraft:netherite_block', count: 64 },
          ],
          rawItems64x: ['minecraft:ancient_debris', 'minecraft:netherite_scrap', 'minecraft:netherite_ingot', 'minecraft:netherite_block'],
        },
      },
      {
        level: 2,
        name: 'Ferro & Ouro (Minérios, Barras e Blocos)',
        shortName: 'FERRO & OURO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FERRO PURO',
          subcategory: 'Ferro Bruto, Barras e Blocos',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Ferro Completo',
          shulkerItems: [
            { id: 'minecraft:raw_iron', count: 64 },
            { id: 'minecraft:raw_iron_block', count: 64 },
            { id: 'minecraft:iron_ingot', count: 64 },
            { id: 'minecraft:iron_block', count: 64 },
            { id: 'minecraft:iron_nugget', count: 64 },
            { id: 'minecraft:iron_ore', count: 64 },
            { id: 'minecraft:deepslate_iron_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:raw_iron', 'minecraft:iron_ingot', 'minecraft:iron_block', 'minecraft:raw_iron_block'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'OURO PURO',
          subcategory: 'Ouro Bruto, Barras e Pepitas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Ouro Completo',
          shulkerItems: [
            { id: 'minecraft:raw_gold', count: 64 },
            { id: 'minecraft:raw_gold_block', count: 64 },
            { id: 'minecraft:gold_ingot', count: 64 },
            { id: 'minecraft:gold_block', count: 64 },
            { id: 'minecraft:gold_nugget', count: 64 },
            { id: 'minecraft:nether_gold_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:raw_gold', 'minecraft:gold_ingot', 'minecraft:gold_block', 'minecraft:gold_nugget'],
        },
      },
      {
        level: 3,
        name: 'Carvão Mineral e Carvão Vegetal',
        shortName: 'CARVAO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CARVAO MINERAL',
          subcategory: 'Carvão, Minérios e Blocos',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Carvão Mineral',
          shulkerItems: [
            { id: 'minecraft:coal', count: 64 },
            { id: 'minecraft:coal_block', count: 64 },
            { id: 'minecraft:coal_ore', count: 64 },
            { id: 'minecraft:deepslate_coal_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:coal', 'minecraft:coal_block', 'minecraft:coal_ore', 'minecraft:deepslate_coal_ore'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARVAO VEGETAL',
          subcategory: 'Carvão Vegetal & Combustíveis',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Carvão Vegetal',
          shulkerItems: [
            { id: 'minecraft:charcoal', count: 64 },
            { id: 'minecraft:blaze_rod', count: 64 },
            { id: 'minecraft:lava_bucket', count: 1 },
          ],
          rawItems64x: ['minecraft:charcoal', 'minecraft:blaze_rod', 'minecraft:coal_block', 'minecraft:coal'],
        },
      },
      {
        level: 4,
        name: 'Redstone & Lápis-Lazúli',
        shortName: 'REDSTONE/LAPIS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'REDSTONE',
          subcategory: 'Pó de Redstone & Blocos',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Redstone Completa',
          shulkerItems: [
            { id: 'minecraft:redstone', count: 64 },
            { id: 'minecraft:redstone_block', count: 64 },
            { id: 'minecraft:redstone_ore', count: 64 },
            { id: 'minecraft:deepslate_redstone_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:redstone', 'minecraft:redstone_block', 'minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LAPIS-LAZULI',
          subcategory: 'Lápis-Lazúli & Blocos',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Lápis-Lazúli',
          shulkerItems: [
            { id: 'minecraft:lapis_lazuli', count: 64 },
            { id: 'minecraft:lapis_block', count: 64 },
            { id: 'minecraft:lapis_ore', count: 64 },
            { id: 'minecraft:deepslate_lapis_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:lapis_lazuli', 'minecraft:lapis_block', 'minecraft:lapis_ore', 'minecraft:deepslate_lapis_ore'],
        },
      },
      {
        level: 5,
        name: 'Esmeralda & Quartzo Mineral',
        shortName: 'ESMERALDA/QTZ',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESMERALDAS',
          subcategory: 'Esmeraldas & Minérios da Montanha',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Esmeraldas',
          shulkerItems: [
            { id: 'minecraft:emerald', count: 64 },
            { id: 'minecraft:emerald_block', count: 64 },
            { id: 'minecraft:emerald_ore', count: 64 },
            { id: 'minecraft:deepslate_emerald_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:emerald', 'minecraft:emerald_block', 'minecraft:emerald_ore', 'minecraft:deepslate_emerald_ore'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'QUARTZO NETHER',
          subcategory: 'Quartzo Bruto & Minérios do Nether',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Quartzo Bruto',
          shulkerItems: [
            { id: 'minecraft:quartz', count: 64 },
            { id: 'minecraft:quartz_block', count: 64 },
            { id: 'minecraft:nether_quartz_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:quartz', 'minecraft:quartz_block', 'minecraft:nether_quartz_ore', 'minecraft:smooth_quartz'],
        },
      },
      {
        level: 6,
        name: 'Geodo de Ametista (Fragmentos, Aglomerados e Blocos)',
        shortName: 'AMETISTA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FRAG. AMETISTA',
          subcategory: 'Fragmentos & Aglomerados de Ametista',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Fragmentos de Ametista',
          shulkerItems: [
            { id: 'minecraft:amethyst_shard', count: 64 },
            { id: 'minecraft:amethyst_cluster', count: 64 },
            { id: 'minecraft:large_amethyst_bud', count: 64 },
            { id: 'minecraft:medium_amethyst_bud', count: 64 },
            { id: 'minecraft:small_amethyst_bud', count: 64 },
          ],
          rawItems64x: ['minecraft:amethyst_shard', 'minecraft:amethyst_cluster', 'minecraft:large_amethyst_bud', 'minecraft:medium_amethyst_bud'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BLOCO AMETISTA',
          subcategory: 'Blocos & Ametista Germinante',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Blocos de Ametista',
          shulkerItems: [
            { id: 'minecraft:amethyst_block', count: 64 },
            { id: 'minecraft:budding_amethyst', count: 64 },
          ],
          rawItems64x: ['minecraft:amethyst_block', 'minecraft:budding_amethyst', 'minecraft:amethyst_shard', 'minecraft:amethyst_cluster'],
        },
      },
      {
        level: 7,
        name: 'Cobre Puro & Cobre Cortado (Fase 1)',
        shortName: 'COBRE PURO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'COBRE BRUTO',
          subcategory: 'Cobre Bruto, Barras e Blocos',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Bruto & Barras',
          shulkerItems: [
            { id: 'minecraft:raw_copper', count: 64 },
            { id: 'minecraft:raw_copper_block', count: 64 },
            { id: 'minecraft:copper_ingot', count: 64 },
            { id: 'minecraft:copper_block', count: 64 },
            { id: 'minecraft:copper_ore', count: 64 },
            { id: 'minecraft:deepslate_copper_ore', count: 64 },
          ],
          rawItems64x: ['minecraft:raw_copper', 'minecraft:copper_ingot', 'minecraft:copper_block', 'minecraft:raw_copper_block'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'COBRE CORTADO',
          subcategory: 'Cobre Cortado, Escadas e Lajes',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Cortado',
          shulkerItems: [
            { id: 'minecraft:cut_copper', count: 64 },
            { id: 'minecraft:cut_copper_stairs', count: 64 },
            { id: 'minecraft:cut_copper_slab', count: 64 },
            { id: 'minecraft:chiseled_copper', count: 64 },
          ],
          rawItems64x: ['minecraft:cut_copper', 'minecraft:cut_copper_stairs', 'minecraft:cut_copper_slab', 'minecraft:chiseled_copper'],
        },
      },
      {
        level: 8,
        name: 'Cobre Exposto e Cobre Desgastado (Fases 2 e 3)',
        shortName: 'COBRE OXIDANDO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'COBRE EXPOSTO',
          subcategory: 'Cobre Exposto (Fase 2)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Exposto',
          shulkerItems: [
            { id: 'minecraft:exposed_copper', count: 64 },
            { id: 'minecraft:exposed_cut_copper', count: 64 },
            { id: 'minecraft:exposed_cut_copper_stairs', count: 64 },
            { id: 'minecraft:exposed_cut_copper_slab', count: 64 },
            { id: 'minecraft:exposed_chiseled_copper', count: 64 },
          ],
          rawItems64x: ['minecraft:exposed_copper', 'minecraft:exposed_cut_copper', 'minecraft:exposed_cut_copper_stairs', 'minecraft:exposed_cut_copper_slab'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'COBRE DESGAST.',
          subcategory: 'Cobre Desgastado (Weathered - Fase 3)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Desgastado',
          shulkerItems: [
            { id: 'minecraft:weathered_copper', count: 64 },
            { id: 'minecraft:weathered_cut_copper', count: 64 },
            { id: 'minecraft:weathered_cut_copper_stairs', count: 64 },
            { id: 'minecraft:weathered_cut_copper_slab', count: 64 },
            { id: 'minecraft:weathered_chiseled_copper', count: 64 },
          ],
          rawItems64x: ['minecraft:weathered_copper', 'minecraft:weathered_cut_copper', 'minecraft:weathered_cut_copper_stairs', 'minecraft:weathered_cut_copper_slab'],
        },
      },
      {
        level: 9,
        name: 'Cobre Oxidado 100% Verde (Fase 4)',
        shortName: 'COBRE OXIDADO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'COBRE OXIDADO',
          subcategory: 'Cobre Oxidado Verde Total',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Oxidado Verde',
          shulkerItems: [
            { id: 'minecraft:oxidized_copper', count: 64 },
            { id: 'minecraft:oxidized_cut_copper', count: 64 },
            { id: 'minecraft:oxidized_cut_copper_stairs', count: 64 },
            { id: 'minecraft:oxidized_cut_copper_slab', count: 64 },
            { id: 'minecraft:oxidized_chiseled_copper', count: 64 },
          ],
          rawItems64x: ['minecraft:oxidized_copper', 'minecraft:oxidized_cut_copper', 'minecraft:oxidized_cut_copper_stairs', 'minecraft:oxidized_cut_copper_slab'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'COBRE ENCERADO',
          subcategory: 'Cobre Encerado (Waxed - Protegido)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Cobre Encerado (Waxed)',
          shulkerItems: [
            { id: 'minecraft:waxed_copper_block', count: 64 },
            { id: 'minecraft:waxed_cut_copper', count: 64 },
            { id: 'minecraft:waxed_cut_copper_stairs', count: 64 },
            { id: 'minecraft:waxed_cut_copper_slab', count: 64 },
            { id: 'minecraft:honeycomb', count: 64 },
          ],
          rawItems64x: ['minecraft:waxed_copper_block', 'minecraft:waxed_cut_copper', 'minecraft:waxed_cut_copper_stairs', 'minecraft:honeycomb'],
        },
      },
      {
        level: 10,
        name: 'Grelhas, Portas, Alçapões e Lâmpadas de Cobre 1.21',
        shortName: 'MECANISMOS COBRE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'GRELHAS DE COBRE',
          subcategory: 'Grelhas de Cobre 1.21 (Grates)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Grelhas de Cobre 1.21',
          shulkerItems: [
            { id: 'minecraft:copper_grate', count: 64 },
            { id: 'minecraft:exposed_copper_grate', count: 64 },
            { id: 'minecraft:weathered_copper_grate', count: 64 },
            { id: 'minecraft:oxidized_copper_grate', count: 64 },
          ],
          rawItems64x: ['minecraft:copper_grate', 'minecraft:exposed_copper_grate', 'minecraft:weathered_copper_grate', 'minecraft:oxidized_copper_grate'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LAMPADAS COBRE',
          subcategory: 'Lâmpadas, Portas e Alçapões de Cobre',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Lâmpadas & Portas de Cobre',
          shulkerItems: [
            { id: 'minecraft:copper_bulb', count: 64 },
            { id: 'minecraft:exposed_copper_bulb', count: 64 },
            { id: 'minecraft:weathered_copper_bulb', count: 64 },
            { id: 'minecraft:oxidized_copper_bulb', count: 64 },
            { id: 'minecraft:copper_door', count: 64 },
            { id: 'minecraft:copper_trapdoor', count: 64 },
          ],
          rawItems64x: ['minecraft:copper_bulb', 'minecraft:exposed_copper_bulb', 'minecraft:copper_door', 'minecraft:copper_trapdoor'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 4: NETHER, THE END & DIMENSÕES MÍSTICAS
  // ==========================================================================
  {
    index: 4,
    id: 'coluna_04_nether_end',
    name: '4. Nether, The End & Dimensões Místicas',
    shortSign: 'COL 04 NETHER/END',
    category: 'Nether e End',
    description: '10 Níveis: Obsidiana, Âncora, Netherrack, Areia das Almas, Shroomlight, Tijolos do Nether, End Stone, Purpur, Fruta do Coro e Pérolas.',
    icon: 'textures/blocks/obsidian',
    shulkerColor: 'minecraft:purple_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Obsidiana, Obsidiana Chorosa & Âncora de Renascimento',
        shortName: 'OBSIDIANA/ANCORA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'OBSIDIANA PURA',
          subcategory: 'Obsidiana & Portais do Nether',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Obsidiana Clássica',
          shulkerItems: [
            { id: 'minecraft:obsidian', count: 64 },
            { id: 'minecraft:flint_and_steel', count: 16 },
          ],
          rawItems64x: ['minecraft:obsidian', 'minecraft:flint_and_steel'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CHOROSA & ANCORA',
          subcategory: 'Obsidiana Chorosa & Âncora',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Obsidiana Chorosa',
          shulkerItems: [
            { id: 'minecraft:crying_obsidian', count: 64 },
            { id: 'minecraft:respawn_anchor', count: 64 },
            { id: 'minecraft:glowstone', count: 64 },
          ],
          rawItems64x: ['minecraft:crying_obsidian', 'minecraft:respawn_anchor', 'minecraft:glowstone'],
        },
      },
      {
        level: 2,
        name: 'Netherrack, Areia das Almas, Terra das Almas e Magma',
        shortName: 'NETHERRACK/ALMAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'NETHERRACK',
          subcategory: 'Netherrack & Blocos de Magma',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Netherrack & Magma',
          shulkerItems: [
            { id: 'minecraft:netherrack', count: 64 },
            { id: 'minecraft:magma', count: 64 },
          ],
          rawItems64x: ['minecraft:netherrack', 'minecraft:magma'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'AREIA DAS ALMAS',
          subcategory: 'Areia das Almas & Terra das Almas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Almas do Nether',
          shulkerItems: [
            { id: 'minecraft:soul_sand', count: 64 },
            { id: 'minecraft:soul_soil', count: 64 },
            { id: 'minecraft:soul_torch', count: 64 },
            { id: 'minecraft:soul_lantern', count: 64 },
          ],
          rawItems64x: ['minecraft:soul_sand', 'minecraft:soul_soil', 'minecraft:soul_torch', 'minecraft:soul_lantern'],
        },
      },
      {
        level: 3,
        name: 'Glowstone, Shroomlight & Fungos do Nether',
        shortName: 'LUZES DO NETHER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PEDRA LUMINOSA',
          subcategory: 'Glowstone & Shroomlight',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Iluminação do Nether',
          shulkerItems: [
            { id: 'minecraft:glowstone', count: 64 },
            { id: 'minecraft:glowstone_dust', count: 64 },
            { id: 'minecraft:shroomlight', count: 64 },
          ],
          rawItems64x: ['minecraft:glowstone', 'minecraft:glowstone_dust', 'minecraft:shroomlight'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FUNGOS & VINHAS',
          subcategory: 'Nylium, Fungos e Vinhas',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Vegetação do Nether',
          shulkerItems: [
            { id: 'minecraft:crimson_nylium', count: 64 },
            { id: 'minecraft:warped_nylium', count: 64 },
            { id: 'minecraft:weeping_vines', count: 64 },
            { id: 'minecraft:twisting_vines', count: 64 },
            { id: 'minecraft:nether_wart_block', count: 64 },
            { id: 'minecraft:warped_wart_block', count: 64 },
          ],
          rawItems64x: ['minecraft:crimson_nylium', 'minecraft:warped_nylium', 'minecraft:weeping_vines', 'minecraft:twisting_vines'],
        },
      },
      {
        level: 4,
        name: 'Tijolos do Nether Clássicos e Vermelhos',
        shortName: 'TIJOLOS NETHER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TIJOLOS NETHER',
          subcategory: 'Tijolos Escuros do Nether',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos Nether',
          shulkerItems: [
            { id: 'minecraft:nether_brick', count: 64 },
            { id: 'minecraft:nether_brick_stairs', count: 64 },
            { id: 'minecraft:nether_brick_slab', count: 64 },
            { id: 'minecraft:nether_brick_wall', count: 64 },
            { id: 'minecraft:nether_brick_fence', count: 64 },
            { id: 'minecraft:chiseled_nether_bricks', count: 64 },
            { id: 'minecraft:cracked_nether_bricks', count: 64 },
          ],
          rawItems64x: ['minecraft:nether_brick', 'minecraft:nether_brick_stairs', 'minecraft:nether_brick_slab', 'minecraft:nether_brick_fence'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLOS VERMELHO',
          subcategory: 'Tijolos Vermelhos do Nether',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos Vermelhos Nether',
          shulkerItems: [
            { id: 'minecraft:red_nether_brick', count: 64 },
            { id: 'minecraft:red_nether_brick_stairs', count: 64 },
            { id: 'minecraft:red_nether_brick_slab', count: 64 },
            { id: 'minecraft:red_nether_brick_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:red_nether_brick', 'minecraft:red_nether_brick_stairs', 'minecraft:red_nether_brick_slab', 'minecraft:red_nether_brick_wall'],
        },
      },
      {
        level: 5,
        name: 'Pedra Negra (Blackstone) Polida e Dourada',
        shortName: 'BLACKSTONE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BLACKSTONE',
          subcategory: 'Pedra Negra Bruta & Polida',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Blackstone',
          shulkerItems: [
            { id: 'minecraft:blackstone', count: 64 },
            { id: 'minecraft:blackstone_stairs', count: 64 },
            { id: 'minecraft:blackstone_slab', count: 64 },
            { id: 'minecraft:blackstone_wall', count: 64 },
            { id: 'minecraft:gilded_blackstone', count: 64 },
          ],
          rawItems64x: ['minecraft:blackstone', 'minecraft:blackstone_stairs', 'minecraft:blackstone_slab', 'minecraft:gilded_blackstone'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLO BLACKST',
          subcategory: 'Tijolos de Pedra Negra Polida',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos Blackstone',
          shulkerItems: [
            { id: 'minecraft:polished_blackstone_bricks', count: 64 },
            { id: 'minecraft:polished_blackstone_brick_stairs', count: 64 },
            { id: 'minecraft:polished_blackstone_brick_slab', count: 64 },
            { id: 'minecraft:polished_blackstone_brick_wall', count: 64 },
            { id: 'minecraft:chiseled_polished_blackstone', count: 64 },
          ],
          rawItems64x: ['minecraft:polished_blackstone_bricks', 'minecraft:polished_blackstone_brick_stairs', 'minecraft:polished_blackstone_brick_slab', 'minecraft:chiseled_polished_blackstone'],
        },
      },
      {
        level: 6,
        name: 'Pedra do End (End Stone) & Tijolos do End',
        shortName: 'END STONE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'END STONE',
          subcategory: 'Pedra do End Bruta',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: End Stone',
          shulkerItems: [
            { id: 'minecraft:end_stone', count: 64 },
          ],
          rawItems64x: ['minecraft:end_stone'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TIJOLOS DO END',
          subcategory: 'Tijolos da Pedra do End',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Tijolos do End',
          shulkerItems: [
            { id: 'minecraft:end_stone_bricks', count: 64 },
            { id: 'minecraft:end_brick_stairs', count: 64 },
            { id: 'minecraft:end_stone_brick_slab', count: 64 },
            { id: 'minecraft:end_stone_brick_wall', count: 64 },
          ],
          rawItems64x: ['minecraft:end_stone_bricks', 'minecraft:end_brick_stairs', 'minecraft:end_stone_brick_slab', 'minecraft:end_stone_brick_wall'],
        },
      },
      {
        level: 7,
        name: 'Purpur (Bloco, Pilar, Escadas e Lajes)',
        shortName: 'PURPUR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BLOCOS PURPUR',
          subcategory: 'Blocos e Pilares de Purpur',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Blocos de Purpur',
          shulkerItems: [
            { id: 'minecraft:purpur_block', count: 64 },
            { id: 'minecraft:purpur_pillar', count: 64 },
          ],
          rawItems64x: ['minecraft:purpur_block', 'minecraft:purpur_pillar'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESCADA PURPUR',
          subcategory: 'Escadas & Lajes de Purpur',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Escadas Purpur',
          shulkerItems: [
            { id: 'minecraft:purpur_stairs', count: 64 },
            { id: 'minecraft:purpur_slab', count: 64 },
          ],
          rawItems64x: ['minecraft:purpur_stairs', 'minecraft:purpur_slab', 'minecraft:purpur_block', 'minecraft:purpur_pillar'],
        },
      },
      {
        level: 8,
        name: 'Hastes do End (End Rods) & Cristais do End',
        shortName: 'HASTES/CRISTAIS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'HASTES DO END',
          subcategory: 'Hastes de Iluminação End Rod',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Hastes do End',
          shulkerItems: [
            { id: 'minecraft:end_rod', count: 64 },
          ],
          rawItems64x: ['minecraft:end_rod'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CRISTAIS DO END',
          subcategory: 'Cristais do End (Reviver Dragão)',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Cristais do End',
          shulkerItems: [
            { id: 'minecraft:end_crystal', count: 64 },
            { id: 'minecraft:ghast_tear', count: 64 },
            { id: 'minecraft:eye_of_ender', count: 64 },
          ],
          rawItems64x: ['minecraft:end_crystal', 'minecraft:ghast_tear', 'minecraft:eye_of_ender'],
        },
      },
      {
        level: 9,
        name: 'Fruta do Coro (Chorus Fruit) & Flores',
        shortName: 'FRUTA DO CORO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FRUTA CORO CRUA',
          subcategory: 'Frutas do Coro & Flores',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Frutas do Coro',
          shulkerItems: [
            { id: 'minecraft:chorus_fruit', count: 64 },
            { id: 'minecraft:chorus_flower', count: 64 },
            { id: 'minecraft:chorus_plant', count: 64 },
          ],
          rawItems64x: ['minecraft:chorus_fruit', 'minecraft:chorus_flower'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CORO ESTOURADA',
          subcategory: 'Fruta do Coro Estourada (Popped)',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Coro Estourada',
          shulkerItems: [
            { id: 'minecraft:popped_chorus_fruit', count: 64 },
          ],
          rawItems64x: ['minecraft:popped_chorus_fruit'],
        },
      },
      {
        level: 10,
        name: 'Pérolas do Ender & Olhos do Fim',
        shortName: 'PEROLAS DO END',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PEROLAS ENDER',
          subcategory: 'Pérolas do Ender (Teletransporte)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Pérolas do Ender',
          shulkerItems: [
            { id: 'minecraft:ender_pearl', count: 16 },
          ],
          rawItems64x: ['minecraft:ender_pearl'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'OLHOS DO FIM',
          subcategory: 'Olhos do Fim (Portal do End)',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Olhos do Fim',
          shulkerItems: [
            { id: 'minecraft:ender_eye', count: 64 },
          ],
          rawItems64x: ['minecraft:ender_eye'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 5: REDSTONE, MECANISMOS, AUTOMAÇÃO & TRILHOS
  // ==========================================================================
  {
    index: 5,
    id: 'coluna_05_redstone_automacao',
    name: '5. Redstone, Mecanismos, Automação & Trilhos',
    shortSign: 'COL 05 REDSTONE',
    category: 'Redstone e Mecanismos',
    description: '10 Níveis: Pistões, Funis, Crafters 1.21, Ejetores, Repetidores, Sensores Sculk, Trilhos, Carrinhos, TNT e Slime/Mel.',
    icon: 'textures/items/redstone_dust',
    shulkerColor: 'minecraft:red_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Pistões Normais, Pistões Grudentos e Observadores',
        shortName: 'PISTOES/OBSERV',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PISTOES',
          subcategory: 'Pistões Normais e Grudentos',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Pistões',
          shulkerItems: [
            { id: 'minecraft:piston', count: 64 },
            { id: 'minecraft:sticky_piston', count: 64 },
          ],
          rawItems64x: ['minecraft:piston', 'minecraft:sticky_piston'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'OBSERVADORES',
          subcategory: 'Observadores (Detecção de Blocos)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Observadores',
          shulkerItems: [
            { id: 'minecraft:observer', count: 64 },
          ],
          rawItems64x: ['minecraft:observer'],
        },
      },
      {
        level: 2,
        name: 'Funis (Hoppers) e Bancada Automática Crafter 1.21',
        shortName: 'FUNIS & CRAFTER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FUNIS (HOPPERS)',
          subcategory: 'Funis de Transferência de Itens',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Funis (Hoppers)',
          shulkerItems: [
            { id: 'minecraft:hopper', count: 64 },
          ],
          rawItems64x: ['minecraft:hopper'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CRAFTER 1.21',
          subcategory: 'Bancada de Criação Automática 1.21',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Crafters 1.21',
          shulkerItems: [
            { id: 'minecraft:crafter', count: 64 },
          ],
          rawItems64x: ['minecraft:crafter'],
        },
      },
      {
        level: 3,
        name: 'Ejetores (Dispensers) e Liberadores (Droppers)',
        shortName: 'EJETOR/LIBERAD',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'EJETORES',
          subcategory: 'Ejetores (Dispensers)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Ejetores',
          shulkerItems: [
            { id: 'minecraft:dispenser', count: 64 },
          ],
          rawItems64x: ['minecraft:dispenser'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LIBERADORES',
          subcategory: 'Liberadores (Droppers)',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Liberadores',
          shulkerItems: [
            { id: 'minecraft:dropper', count: 64 },
          ],
          rawItems64x: ['minecraft:dropper'],
        },
      },
      {
        level: 4,
        name: 'Repetidores e Comparadores de Redstone',
        shortName: 'REPET/COMPARAD',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'REPETIDORES',
          subcategory: 'Repetidores de Sinal Redstone',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Repetidores',
          shulkerItems: [
            { id: 'minecraft:repeater', count: 64 },
          ],
          rawItems64x: ['minecraft:repeater'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'COMPARADORES',
          subcategory: 'Comparadores de Sinal Redstone',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Comparadores',
          shulkerItems: [
            { id: 'minecraft:comparator', count: 64 },
          ],
          rawItems64x: ['minecraft:comparator'],
        },
      },
      {
        level: 5,
        name: 'Tochas, Lâmpadas, Alavancas e Botões de Redstone',
        shortName: 'TOCHAS/LAMPADAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TOCHAS/LAMPADAS',
          subcategory: 'Tochas & Lâmpadas de Redstone',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Tochas e Lâmpadas',
          shulkerItems: [
            { id: 'minecraft:redstone_torch', count: 64 },
            { id: 'minecraft:redstone_lamp', count: 64 },
          ],
          rawItems64x: ['minecraft:redstone_torch', 'minecraft:redstone_lamp'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ALAVANCA/BOTAO',
          subcategory: 'Alavancas, Botões e Ganchos',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Ativadores Manuais',
          shulkerItems: [
            { id: 'minecraft:lever', count: 64 },
            { id: 'minecraft:tripwire_hook', count: 64 },
            { id: 'minecraft:stone_button', count: 64 },
            { id: 'minecraft:wooden_button', count: 64 },
          ],
          rawItems64x: ['minecraft:lever', 'minecraft:tripwire_hook', 'minecraft:stone_button', 'minecraft:wooden_button'],
        },
      },
      {
        level: 6,
        name: 'Sensores de Luz Solar, Alvos e Placas de Pressão',
        shortName: 'SENSORES/ALVOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SENSOR SOLAR',
          subcategory: 'Sensores de Luz Solar Dia/Noite',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Sensores Solares',
          shulkerItems: [
            { id: 'minecraft:daylight_detector', count: 64 },
            { id: 'minecraft:target', count: 64 },
          ],
          rawItems64x: ['minecraft:daylight_detector', 'minecraft:target'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PLACAS PRESSAO',
          subcategory: 'Placas de Pressão Leve e Pesada',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Placas de Pressão',
          shulkerItems: [
            { id: 'minecraft:heavy_weighted_pressure_plate', count: 64 },
            { id: 'minecraft:light_weighted_pressure_plate', count: 64 },
            { id: 'minecraft:stone_pressure_plate', count: 64 },
            { id: 'minecraft:wooden_pressure_plate', count: 64 },
          ],
          rawItems64x: ['minecraft:heavy_weighted_pressure_plate', 'minecraft:light_weighted_pressure_plate', 'minecraft:stone_pressure_plate', 'minecraft:wooden_pressure_plate'],
        },
      },
      {
        level: 7,
        name: 'Sensores de Sculk Naturais e Calibrados',
        shortName: 'SCULK SENSORES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SCULK SENSOR',
          subcategory: 'Sensores de Vibração Sculk',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Sensores de Sculk',
          shulkerItems: [
            { id: 'minecraft:sculk_sensor', count: 64 },
            { id: 'minecraft:sculk', count: 64 },
          ],
          rawItems64x: ['minecraft:sculk_sensor', 'minecraft:sculk'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SCULK CALIBRADO',
          subcategory: 'Sensores Sculk Calibrados com Ametista',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Sculk Calibrados',
          shulkerItems: [
            { id: 'minecraft:calibrated_sculk_sensor', count: 64 },
            { id: 'minecraft:amethyst_shard', count: 64 },
          ],
          rawItems64x: ['minecraft:calibrated_sculk_sensor', 'minecraft:amethyst_shard'],
        },
      },
      {
        level: 8,
        name: 'Trilhos Completos (Normal, Elétrico, Detector, Ativador)',
        shortName: 'TRILHOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRILHO ELETRICO',
          subcategory: 'Trilhos Elétricos & Trilhos Comuns',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Trilhos Elétricos',
          shulkerItems: [
            { id: 'minecraft:golden_rail', count: 64 },
            { id: 'minecraft:rail', count: 64 },
          ],
          rawItems64x: ['minecraft:golden_rail', 'minecraft:rail'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TRILHO DETECTOR',
          subcategory: 'Trilhos Detectores e Ativadores',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Trilhos Detectores',
          shulkerItems: [
            { id: 'minecraft:detector_rail', count: 64 },
            { id: 'minecraft:activator_rail', count: 64 },
          ],
          rawItems64x: ['minecraft:detector_rail', 'minecraft:activator_rail'],
        },
      },
      {
        level: 9,
        name: 'Carrinhos de Mina (Com Baú, Com Funil e Com TNT)',
        shortName: 'CARRINHOS MINA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CARRINHO MINA',
          subcategory: 'Carrinhos Comuns & Com Baú',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Carrinhos & Baú',
          shulkerItems: [
            { id: 'minecraft:minecart', count: 64 },
            { id: 'minecraft:chest_minecart', count: 64 },
          ],
          rawItems64x: ['minecraft:minecart', 'minecraft:chest_minecart'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARRINHO FUNIL',
          subcategory: 'Carrinhos com Funil e com TNT',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Carrinhos Funil & TNT',
          shulkerItems: [
            { id: 'minecraft:hopper_minecart', count: 64 },
            { id: 'minecraft:tnt_minecart', count: 64 },
          ],
          rawItems64x: ['minecraft:hopper_minecart', 'minecraft:tnt_minecart'],
        },
      },
      {
        level: 10,
        name: 'Dinamite (TNT), Blocos de Slime, Mel e Favos',
        shortName: 'TNT & SLIME/MEL',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'DINAMITE (TNT)',
          subcategory: 'TNT & Pólvora para Canhões',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: TNT & Pólvora',
          shulkerItems: [
            { id: 'minecraft:tnt', count: 64 },
            { id: 'minecraft:gunpowder', count: 64 },
            { id: 'minecraft:sand', count: 64 },
          ],
          rawItems64x: ['minecraft:tnt', 'minecraft:gunpowder', 'minecraft:sand'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SLIME & MEL',
          subcategory: 'Blocos de Slime e Blocos de Mel',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Blocos Grudentos Slime/Mel',
          shulkerItems: [
            { id: 'minecraft:slime', count: 64 },
            { id: 'minecraft:honey_block', count: 64 },
            { id: 'minecraft:honeycomb_block', count: 64 },
          ],
          rawItems64x: ['minecraft:slime', 'minecraft:honey_block', 'minecraft:honeycomb_block'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 6: FERRAMENTAS & EQUIPAMENTOS SURVIVAL
  // ==========================================================================
  {
    index: 6,
    id: 'coluna_06_ferramentas_equipamentos',
    name: '6. Ferramentas & Equipamentos Survival',
    shortSign: 'COL 06 FERRAMENT',
    category: 'Ferramentas e Equipamentos',
    description: '10 Níveis: Picaretas, Machados, Pás, Enxadas, Pesca, Isqueiros/Pinceis, Lunetas/Bússolas, Baldes, Baldes Criaturas e Selas.',
    icon: 'textures/items/netherite_pickaxe',
    shulkerColor: 'minecraft:blue_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Picaretas de Netherita, Diamante e Ferro (Fortuna & Toque Suave)',
        shortName: 'PICARETAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PICARETAS NETHER',
          subcategory: 'Picaretas Netherita Full Max',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Picaretas Netherita Max',
          shulkerItems: [
            { id: 'minecraft:netherite_pickaxe', count: 1, ench: [['efficiency', 5], ['fortune', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_pickaxe', count: 1, ench: [['efficiency', 5], ['silk_touch', 1], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_pickaxe'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PICARETA DIAM.',
          subcategory: 'Picaretas de Diamante e Ferro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Picaretas Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_pickaxe', count: 1, ench: [['efficiency', 5], ['fortune', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:diamond_pickaxe', count: 1, ench: [['efficiency', 5], ['silk_touch', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:iron_pickaxe', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_pickaxe', 'minecraft:iron_pickaxe'],
        },
      },
      {
        level: 2,
        name: 'Machados de Netherita, Diamante e Ferro',
        shortName: 'MACHADOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MACHADOS NETHER',
          subcategory: 'Machados Netherita Full Max',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Machados Netherita',
          shulkerItems: [
            { id: 'minecraft:netherite_axe', count: 1, ench: [['efficiency', 5], ['sharpness', 5], ['silk_touch', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_axe', count: 1, ench: [['efficiency', 5], ['sharpness', 5], ['fortune', 3], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_axe'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MACHADO DIAM.',
          subcategory: 'Machados de Diamante e Ferro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Machados Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_axe', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:iron_axe', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_axe', 'minecraft:iron_axe'],
        },
      },
      {
        level: 3,
        name: 'Pás de Netherita, Diamante e Ferro',
        shortName: 'PAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PAS NETHERITA',
          subcategory: 'Pás Netherita Full Max',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Pás Netherita',
          shulkerItems: [
            { id: 'minecraft:netherite_shovel', count: 1, ench: [['efficiency', 5], ['silk_touch', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_shovel', count: 1, ench: [['efficiency', 5], ['fortune', 3], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_shovel'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PAS DIAMANTE',
          subcategory: 'Pás de Diamante e Ferro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Pás Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_shovel', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:iron_shovel', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_shovel', 'minecraft:iron_shovel'],
        },
      },
      {
        level: 4,
        name: 'Enxadas de Netherita, Diamante e Ferro',
        shortName: 'ENXADAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ENXADAS NETHER',
          subcategory: 'Enxadas Netherita Full Max',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Enxadas Netherita',
          shulkerItems: [
            { id: 'minecraft:netherite_hoe', count: 1, ench: [['efficiency', 5], ['fortune', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_hoe', count: 1, ench: [['efficiency', 5], ['silk_touch', 1], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_hoe'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ENXADAS DIAM.',
          subcategory: 'Enxadas de Diamante e Ferro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Enxadas Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_hoe', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:iron_hoe', count: 1, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_hoe', 'minecraft:iron_hoe'],
        },
      },
      {
        level: 5,
        name: 'Varas de Pesca Encantadas & Condução de Criaturas',
        shortName: 'PESCA & LACO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VARA DE PESCA',
          subcategory: 'Varas de Pesca Full Max',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Varas de Pesca Max',
          shulkerItems: [
            { id: 'minecraft:fishing_rod', count: 1, ench: [['luck_of_the_sea', 3], ['lure', 3], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:fishing_rod'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PALITO & LACOS',
          subcategory: 'Cenoura no Palito, Fungo e Laços',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Laços & Montaria',
          shulkerItems: [
            { id: 'minecraft:lead', count: 64 },
            { id: 'minecraft:carrot_on_a_stick', count: 16 },
            { id: 'minecraft:warped_fungus_on_a_stick', count: 16 },
          ],
          rawItems64x: ['minecraft:lead', 'minecraft:carrot_on_a_stick', 'minecraft:warped_fungus_on_a_stick'],
        },
      },
      {
        level: 6,
        name: 'Isqueiros, Tesouras & Pincéis Arqueológicos',
        shortName: 'ISQUEIRO/PINCEL',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ISQUEIRO/TESOUR',
          subcategory: 'Isqueiros e Tesouras Full Max',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Isqueiros & Tesouras',
          shulkerItems: [
            { id: 'minecraft:flint_and_steel', count: 16, ench: [['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:shears', count: 16, ench: [['efficiency', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:flint_and_steel', 'minecraft:shears'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PINCEIS ARQUEOL',
          subcategory: 'Pincéis Arqueológicos 1.20+',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Pincéis Arqueologia',
          shulkerItems: [
            { id: 'minecraft:brush', count: 16, ench: [['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:brush'],
        },
      },
      {
        level: 7,
        name: 'Lunetas, Bússolas e Relógios',
        shortName: 'LUNETA/BUSSOLA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'LUNETAS & MAPAS',
          subcategory: 'Lunetas de Longo Alcance',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Lunetas de Precisão',
          shulkerItems: [
            { id: 'minecraft:spyglass', count: 16 },
            { id: 'minecraft:map', count: 64 },
          ],
          rawItems64x: ['minecraft:spyglass', 'minecraft:map'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BUSSOLA/RELOGIO',
          subcategory: 'Bússolas, Bússola Recuperação & Relógio',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Bússolas & Relógios',
          shulkerItems: [
            { id: 'minecraft:compass', count: 64 },
            { id: 'minecraft:recovery_compass', count: 64 },
            { id: 'minecraft:clock', count: 64 },
          ],
          rawItems64x: ['minecraft:compass', 'minecraft:recovery_compass', 'minecraft:clock'],
        },
      },
      {
        level: 8,
        name: 'Baldes de Água, Lava, Neve em Pó e Leite',
        shortName: 'BALDES ESSENCIA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'AGUA & LAVA',
          subcategory: 'Baldes com Água e Lava',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Baldes Água & Lava',
          shulkerItems: [
            { id: 'minecraft:water_bucket', count: 1 },
            { id: 'minecraft:lava_bucket', count: 1 },
            { id: 'minecraft:bucket', count: 16 },
          ],
          rawItems64x: ['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:bucket'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'NEVE & LEITE',
          subcategory: 'Baldes com Neve em Pó e Leite',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Baldes Neve & Leite',
          shulkerItems: [
            { id: 'minecraft:powder_snow_bucket', count: 1 },
            { id: 'minecraft:milk_bucket', count: 1 },
          ],
          rawItems64x: ['minecraft:powder_snow_bucket', 'minecraft:milk_bucket'],
        },
      },
      {
        level: 9,
        name: 'Baldes de Criaturas Aquáticas (Axolote, Peixes, Girino)',
        shortName: 'BALDES CRIATURA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BALDE AXOLOTE',
          subcategory: 'Baldes com Axolote e Girino',
          shulkerBoxColor: 'minecraft:pink_shulker_box',
          shulkerBoxName: 'Shulker: Axolotes & Girinos',
          shulkerItems: [
            { id: 'minecraft:axolotl_bucket', count: 1 },
            { id: 'minecraft:tadpole_bucket', count: 1 },
          ],
          rawItems64x: ['minecraft:axolotl_bucket', 'minecraft:tadpole_bucket'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BALDES PEIXES',
          subcategory: 'Baldes com Bacalhau, Salmão e Baiacu',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Peixes Vivos',
          shulkerItems: [
            { id: 'minecraft:tropical_fish_bucket', count: 1 },
            { id: 'minecraft:pufferfish_bucket', count: 1 },
            { id: 'minecraft:salmon_bucket', count: 1 },
            { id: 'minecraft:cod_bucket', count: 1 },
          ],
          rawItems64x: ['minecraft:tropical_fish_bucket', 'minecraft:pufferfish_bucket', 'minecraft:salmon_bucket', 'minecraft:cod_bucket'],
        },
      },
      {
        level: 10,
        name: 'Chifres de Cabra (Goat Horns) e Selas',
        shortName: 'CHIFRES & SELAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CHIFRES CABRA',
          subcategory: 'Todos os Sons de Chifres de Cabra',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Chifres de Cabra',
          shulkerItems: [
            { id: 'minecraft:goat_horn', count: 16 },
          ],
          rawItems64x: ['minecraft:goat_horn'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SELAS & ETIQUET',
          subcategory: 'Selas e Etiquetas de Montaria',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Selas & Nome',
          shulkerItems: [
            { id: 'minecraft:saddle', count: 16 },
            { id: 'minecraft:name_tag', count: 64 },
          ],
          rawItems64x: ['minecraft:saddle', 'minecraft:name_tag'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 7: ARMADURAS, ARMAS & COMBATE
  // ==========================================================================
  {
    index: 7,
    id: 'coluna_07_armaduras_armas',
    name: '7. Armaduras, Armas & Equipamentos de Combate',
    shortSign: 'COL 07 ARMADURAS',
    category: 'Armaduras e Armas',
    description: '10 Níveis: Sets Netherita, Diamante, Ferro, Ouro, Malha/Couro, Élitros, Espadas, Clavas 1.21, Arcos/Bestas e Tridentes.',
    icon: 'textures/items/netherite_chestplate',
    shulkerColor: 'minecraft:black_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Set de Netherita Completo Full Max (Proteção IV + Todos Extras)',
        shortName: 'SET NETHERITA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARMADURA NETHER',
          subcategory: 'Capacete, Peitoral, Calça e Botas Netherita',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Set Netherita Full Max',
          shulkerItems: [
            { id: 'minecraft:netherite_helmet', count: 1, ench: [['protection', 4], ['respiration', 3], ['aqua_affinity', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_chestplate', count: 1, ench: [['protection', 4], ['thorns', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_leggings', count: 1, ench: [['protection', 4], ['swift_sneak', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_boots', count: 1, ench: [['protection', 4], ['feather_falling', 4], ['depth_strider', 3], ['soul_speed', 3], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'EXTRA NETHERITA',
          subcategory: 'Set Netherita Proteção contra Fogo IV & Explosões',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Set Netherita Especial',
          shulkerItems: [
            { id: 'minecraft:netherite_helmet', count: 1, ench: [['fire_protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_chestplate', count: 1, ench: [['blast_protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_leggings', count: 1, ench: [['projectile_protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_boots', count: 1, ench: [['feather_falling', 4], ['frost_walker', 2], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots'],
        },
      },
      {
        level: 2,
        name: 'Set de Diamante Completo Full Max',
        shortName: 'SET DIAMANTE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARMADURA DIAM.',
          subcategory: 'Set de Diamante Proteção IV',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Set Diamante Full Max',
          shulkerItems: [
            { id: 'minecraft:diamond_helmet', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:diamond_chestplate', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:diamond_leggings', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:diamond_boots', count: 1, ench: [['protection', 4], ['feather_falling', 4], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'EXTRA DIAMANTE',
          subcategory: 'Armaduras de Reserva Diamante',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Sets Reserva Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_helmet', count: 1 },
            { id: 'minecraft:diamond_chestplate', count: 1 },
            { id: 'minecraft:diamond_leggings', count: 1 },
            { id: 'minecraft:diamond_boots', count: 1 },
          ],
          rawItems64x: ['minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots'],
        },
      },
      {
        level: 3,
        name: 'Sets de Ferro e Ouro Completos',
        shortName: 'FERRO & OURO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARMADURA FERRO',
          subcategory: 'Set de Ferro Completo Encantado',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Set de Ferro',
          shulkerItems: [
            { id: 'minecraft:iron_helmet', count: 1, ench: [['protection', 4], ['unbreaking', 3]] },
            { id: 'minecraft:iron_chestplate', count: 1, ench: [['protection', 4], ['unbreaking', 3]] },
            { id: 'minecraft:iron_leggings', count: 1, ench: [['protection', 4], ['unbreaking', 3]] },
            { id: 'minecraft:iron_boots', count: 1, ench: [['protection', 4], ['unbreaking', 3]] },
          ],
          rawItems64x: ['minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ARMADURA OURO',
          subcategory: 'Set de Ouro (Nether Piglin-Safe)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Set de Ouro',
          shulkerItems: [
            { id: 'minecraft:golden_helmet', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:golden_chestplate', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:golden_leggings', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:golden_boots', count: 1, ench: [['protection', 4], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots'],
        },
      },
      {
        level: 4,
        name: 'Armaduras de Malha, Couro & Casco de Tartaruga',
        shortName: 'MALHA & TARTARUG',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MALHA & COURO',
          subcategory: 'Armaduras de Malha Rara e Couro',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Malha & Couro',
          shulkerItems: [
            { id: 'minecraft:chainmail_helmet', count: 1 },
            { id: 'minecraft:chainmail_chestplate', count: 1 },
            { id: 'minecraft:chainmail_leggings', count: 1 },
            { id: 'minecraft:chainmail_boots', count: 1 },
            { id: 'minecraft:leather_helmet', count: 1 },
            { id: 'minecraft:leather_chestplate', count: 1 },
            { id: 'minecraft:leather_leggings', count: 1 },
            { id: 'minecraft:leather_boots', count: 1 },
          ],
          rawItems64x: ['minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:leather_chestplate', 'minecraft:leather_boots'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CASCO TARTARUGA',
          subcategory: 'Cascos de Tartaruga (Respiração Aquática)',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Casco de Tartaruga Max',
          shulkerItems: [
            { id: 'minecraft:turtle_helmet', count: 1, ench: [['protection', 4], ['respiration', 3], ['aqua_affinity', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:turtle_scute', count: 64 },
          ],
          rawItems64x: ['minecraft:turtle_helmet', 'minecraft:turtle_scute'],
        },
      },
      {
        level: 5,
        name: 'Élitros (Elytras) & Armaduras de Lobo e Cavalo',
        shortName: 'ELITROS & MONTAR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ELITROS MAX',
          subcategory: 'Élitros Encantados Inquebrável + Remendo',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Élitros Supremas',
          shulkerItems: [
            { id: 'minecraft:elytra', count: 1, ench: [['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:firework_rocket', count: 64 },
          ],
          rawItems64x: ['minecraft:elytra', 'minecraft:firework_rocket'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ARMADURA LOBO',
          subcategory: 'Armaduras de Lobo e de Cavalo',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Armaduras de Pets',
          shulkerItems: [
            { id: 'minecraft:wolf_armor', count: 16 },
            { id: 'minecraft:diamond_horse_armor', count: 16 },
            { id: 'minecraft:golden_horse_armor', count: 16 },
            { id: 'minecraft:iron_horse_armor', count: 16 },
          ],
          rawItems64x: ['minecraft:wolf_armor', 'minecraft:diamond_horse_armor', 'minecraft:golden_horse_armor', 'minecraft:iron_horse_armor'],
        },
      },
      {
        level: 6,
        name: 'Espadas de Netherita, Diamante e Ferro (Afiação V & Pilhagem III)',
        shortName: 'ESPADAS SUPREMAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESPADAS NETHER',
          subcategory: 'Espadas Netherita Full Max',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Espadas Netherita Max',
          shulkerItems: [
            { id: 'minecraft:netherite_sword', count: 1, ench: [['sharpness', 5], ['looting', 3], ['fire_aspect', 2], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:netherite_sword', count: 1, ench: [['smite', 5], ['looting', 3], ['knockback', 2], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:netherite_sword'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESPADAS DIAM.',
          subcategory: 'Espadas de Diamante e Ferro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Espadas Diamante',
          shulkerItems: [
            { id: 'minecraft:diamond_sword', count: 1, ench: [['sharpness', 5], ['looting', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:iron_sword', count: 1, ench: [['sharpness', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:diamond_sword', 'minecraft:iron_sword'],
        },
      },
      {
        level: 7,
        name: 'Clavas Pesadas 1.21 (Heavy Core Mace) Full Max',
        shortName: 'CLAVA 1.21',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CLAVA DENSIDADE',
          subcategory: 'Clava 1.21 com Densidade V & Rajada Vento III',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Clava Densidade V',
          shulkerItems: [
            { id: 'minecraft:mace', count: 1, ench: [['density', 5], ['wind_burst', 3], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:mace'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CLAVA BRECHA',
          subcategory: 'Clava 1.21 com Brecha IV (Ignora Armadura)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Clava Brecha IV',
          shulkerItems: [
            { id: 'minecraft:mace', count: 1, ench: [['breach', 4], ['wind_burst', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:heavy_core', count: 16 },
            { id: 'minecraft:breeze_rod', count: 64 },
          ],
          rawItems64x: ['minecraft:mace', 'minecraft:heavy_core', 'minecraft:breeze_rod'],
        },
      },
      {
        level: 8,
        name: 'Arcos & Bestas Full Max',
        shortName: 'ARCOS & BESTAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ARCOS FULL MAX',
          subcategory: 'Arcos com Força V, Chama e Infinidade',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Arcos Divinos',
          shulkerItems: [
            { id: 'minecraft:bow', count: 1, ench: [['power', 5], ['flame', 1], ['punch', 2], ['infinity', 1], ['unbreaking', 3]] },
            { id: 'minecraft:bow', count: 1, ench: [['power', 5], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:bow'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BESTAS FULL MAX',
          subcategory: 'Bestas Carga Rápida III & Tiro Múltiplo',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Bestas de Combate',
          shulkerItems: [
            { id: 'minecraft:crossbow', count: 1, ench: [['quick_charge', 3], ['multishot', 1], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:crossbow', count: 1, ench: [['quick_charge', 3], ['piercing', 4], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:crossbow'],
        },
      },
      {
        level: 9,
        name: 'Tridentes (Empalamento, Lealdade, Correnteza) & Escudos',
        shortName: 'TRIDENTES/ESCUDO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRIDENTE LEAL',
          subcategory: 'Tridentes com Lealdade III e Condutividade',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Tridente Lealdade',
          shulkerItems: [
            { id: 'minecraft:trident', count: 1, ench: [['impaling', 5], ['loyalty', 3], ['channeling', 1], ['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:trident'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TRIDENTE CORREN',
          subcategory: 'Tridente Correnteza III & Escudos Encantados',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Tridente Correnteza',
          shulkerItems: [
            { id: 'minecraft:trident', count: 1, ench: [['impaling', 5], ['riptide', 3], ['unbreaking', 3], ['mending', 1]] },
            { id: 'minecraft:shield', count: 1, ench: [['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:trident', 'minecraft:shield'],
        },
      },
      {
        level: 10,
        name: 'Flechas Normais e Flechas Especiais com Efeitos',
        shortName: 'FLECHAS ESPECIAIS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FLECHAS COMUNS',
          subcategory: 'Flechas Comuns & Espectrais',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Flechas Comuns',
          shulkerItems: [
            { id: 'minecraft:arrow', count: 64 },
          ],
          rawItems64x: ['minecraft:arrow'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FLECHAS EFEITO',
          subcategory: 'Flechas com Dano, Lentidão e Fraqueza',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Flechas de Efeito',
          shulkerItems: [
            { id: 'minecraft:arrow', count: 64 },
            { id: 'minecraft:potion', count: 1 },
          ],
          rawItems64x: ['minecraft:arrow'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 8: ENCANTAMENTOS, LIVROS MESTRE & BIBLIOTECA
  // ==========================================================================
  {
    index: 8,
    id: 'coluna_08_encantamentos_biblioteca',
    name: '8. Encantamentos, Livros Mestre & Biblioteca',
    shortSign: 'COL 08 ENCANTOS',
    category: 'Encantamentos',
    description: '10 Níveis: Remendo/Inquebrável, Proteções, Afiações, Eficiência/Fortuna, Pilhagem, Força/Infinidade, Tridentes, Clava 1.21, Armaduras e Suprimentos.',
    icon: 'textures/items/book_enchanted',
    shulkerColor: 'minecraft:magenta_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Livros de Remendo I (Mending) & Inquebrável III',
        shortName: 'REMENDO/INQUEBR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'REMENDO I',
          subcategory: 'Remendo I (Mending)',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Remendo I',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['mending', 1]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'INQUEBRAVEL III',
          subcategory: 'Inquebrável III (Unbreaking)',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Inquebrável III',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['unbreaking', 3]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 2,
        name: 'Livros de Proteção Geral IV e Proteção contra Fogo IV',
        shortName: 'PROTECOES IV',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PROTECAO IV',
          subcategory: 'Proteção IV Geral',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Proteção IV',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['protection', 4]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PROT. FOGO/EXPL',
          subcategory: 'Proteção contra Fogo IV & Explosões IV',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Proteções Específicas',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['fire_protection', 4]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['blast_protection', 4]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 3,
        name: 'Livros de Afiação V, Julgamento V e Ruína dos Artrópodes V',
        shortName: 'AFIACAO/JULGAM',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'AFIACAO V',
          subcategory: 'Afiação V (Sharpness)',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Afiação V',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['sharpness', 5]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'JULGAM/RUINA',
          subcategory: 'Julgamento V & Ruína dos Artrópodes V',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Julgamento & Ruína',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['smite', 5]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['bane_of_arthropods', 5]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 4,
        name: 'Livros de Eficiência V, Fortuna III e Toque Suave I',
        shortName: 'EFIC/FORT/TOQUE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'EFICIENCIA V',
          subcategory: 'Eficiência V (Ferramentas)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Eficiência V',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['efficiency', 5]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FORTUNA/TOQUE',
          subcategory: 'Fortuna III & Toque Suave I',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Fortuna & Toque Suave',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['fortune', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['silk_touch', 1]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 5,
        name: 'Livros de Pilhagem III, Espinhos III e Aspecto Flamejante II',
        shortName: 'PILHAGEM/ESPINH',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PILHAGEM III',
          subcategory: 'Pilhagem III (Looting - Espadas)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Pilhagem III',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['looting', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['fire_aspect', 2]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESPINHOS III',
          subcategory: 'Espinhos III & Repulsão II',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Espinhos & Repulsão',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['thorns', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['knockback', 2]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 6,
        name: 'Livros de Força V, Chama I, Impacto II e Infinidade I',
        shortName: 'FORCA/CHAMA/INF',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FORCA V',
          subcategory: 'Força V (Power) & Chama I (Flame)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Força V & Chama',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['power', 5]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['flame', 1]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'INFINIDADE I',
          subcategory: 'Infinidade I & Impacto II',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Infinidade & Impacto',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['infinity', 1]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['punch', 2]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 7,
        name: 'Livros de Empalamento V, Lealdade III, Correnteza III e Condutividade',
        shortName: 'TRIDENTE LIVROS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'EMPALAMENTO V',
          subcategory: 'Empalamento V & Lealdade III',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Empalamento & Lealdade',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['impaling', 5]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['loyalty', 3]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CORRENTEZA III',
          subcategory: 'Correnteza III & Condutividade I',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Correnteza & Raio',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['riptide', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['channeling', 1]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 8,
        name: 'Livros da Clava 1.21 (Densidade V, Brecha IV e Rajada de Vento III)',
        shortName: 'CLAVA 1.21 LIVR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'DENSIDADE V',
          subcategory: 'Densidade V (Dano Aumentado por Queda)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Densidade V Clava',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['density', 5]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BRECHA/RAJADA',
          subcategory: 'Brecha IV & Rajada de Vento III',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Brecha & Rajada',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['breach', 4]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['wind_burst', 3]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 9,
        name: 'Livros de Botas e Calças (Peso Pena IV, Passos Rápidos III, Respiração III)',
        shortName: 'BOTAS/CALCAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PESO PENA IV',
          subcategory: 'Peso Pena IV & Passos Profundos III',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Botas Especiais',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['feather_falling', 4]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['depth_strider', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['soul_speed', 3]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PASSOS RAPIDOS',
          subcategory: 'Passos Rápidos III, Respiração III & Afinidade',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Calça & Elmo',
          shulkerItems: [
            { id: 'minecraft:enchanted_book', count: 1, ench: [['swift_sneak', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['respiration', 3]] },
            { id: 'minecraft:enchanted_book', count: 1, ench: [['aqua_affinity', 1]] },
          ],
          rawItems64x: ['minecraft:enchanted_book'],
        },
      },
      {
        level: 10,
        name: 'Mesa de Encantamento, Bigornas, Rebolo, Lápis-Lazúli e XP',
        shortName: 'ALTAR ENCANTOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MESA ENCANTOS',
          subcategory: 'Mesas, Bigornas, Rebolos e Estantes',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Estações de Encantar',
          shulkerItems: [
            { id: 'minecraft:enchanting_table', count: 64 },
            { id: 'minecraft:anvil', count: 64 },
            { id: 'minecraft:grindstone', count: 64 },
            { id: 'minecraft:bookshelf', count: 64 },
            { id: 'minecraft:chiseled_bookshelf', count: 64 },
          ],
          rawItems64x: ['minecraft:enchanting_table', 'minecraft:anvil', 'minecraft:grindstone', 'minecraft:bookshelf'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LAPIS & XP',
          subcategory: 'Lápis-Lazúli e Frascos de Experiência',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Combustíveis de Encantar',
          shulkerItems: [
            { id: 'minecraft:lapis_lazuli', count: 64 },
            { id: 'minecraft:experience_bottle', count: 64 },
            { id: 'minecraft:book', count: 64 },
          ],
          rawItems64x: ['minecraft:lapis_lazuli', 'minecraft:experience_bottle', 'minecraft:book'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 9: POÇÕES, ELIXIRES & ALQUIMIA
  // ==========================================================================
  {
    index: 9,
    id: 'coluna_09_pocoes_alquimia',
    name: '9. Poções, Elixires & Alquimia Completa',
    shortSign: 'COL 09 POCOES',
    category: 'Poções e Alquimia',
    description: '10 Níveis: Cura/Regeneração, Força/Velocidade, Fogo/Respiração, Visão/Queda Lenta, Invisibilidade, Dano/Veneno, Fraqueza, Splash, Lingering e Suportes.',
    icon: 'textures/items/potion_bottle_heal',
    shulkerColor: 'minecraft:pink_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Poções de Cura Instantânea II & Regeneração II',
        shortName: 'CURA & REGEN',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'POCAO CURA II',
          subcategory: 'Cura Instantânea II',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Poções de Cura II',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Cura II' },
            { id: 'minecraft:glistering_melon_slice', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:glistering_melon_slice'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'REGENERACAO II',
          subcategory: 'Regeneração II & Lágrima de Ghast',
          shulkerBoxColor: 'minecraft:pink_shulker_box',
          shulkerBoxName: 'Shulker: Poções de Regeneração',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Regeneração II' },
            { id: 'minecraft:ghast_tear', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:ghast_tear'],
        },
      },
      {
        level: 2,
        name: 'Poções de Força II & Velocidade II',
        shortName: 'FORCA & VELOCID',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'POCAO FORCA II',
          subcategory: 'Força II & Pó de Blaze',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Poções de Força II',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Força II' },
            { id: 'minecraft:blaze_powder', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:blaze_powder'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'VELOCIDADE II',
          subcategory: 'Velocidade II & Açúcar',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Poções de Velocidade',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Velocidade II' },
            { id: 'minecraft:sugar', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:sugar'],
        },
      },
      {
        level: 3,
        name: 'Poções de Resistência ao Fogo & Respiração Aquática',
        shortName: 'FOGO & RESPIRAC',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'RESIST. FOGO',
          subcategory: 'Resistência ao Fogo (8:00) & Creme de Magma',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Resistência ao Fogo',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Resistência ao Fogo' },
            { id: 'minecraft:magma_cream', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:magma_cream'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'RESP. AQUATICA',
          subcategory: 'Respiração Aquática & Baiacu',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Respiração Aquática',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Respiração Aquática' },
            { id: 'minecraft:pufferfish', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:pufferfish'],
        },
      },
      {
        level: 4,
        name: 'Poções de Visão Noturna & Queda Lenta',
        shortName: 'VISAO & QUEDA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VISAO NOTURNA',
          subcategory: 'Visão Noturna & Cenoura Dourada',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Visão Noturna',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Visão Noturna' },
            { id: 'minecraft:golden_carrot', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:golden_carrot'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'QUEDA LENTA',
          subcategory: 'Queda Lenta & Membrana de Fantasma',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Queda Lenta',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Queda Lenta' },
            { id: 'minecraft:phantom_membrane', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:phantom_membrane'],
        },
      },
      {
        level: 5,
        name: 'Poções de Invisibilidade & Agilidade (Super Salto)',
        shortName: 'INVISIB/SALTO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'INVISIBILIDADE',
          subcategory: 'Invisibilidade & Olho Fermentado',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Invisibilidade',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Invisibilidade' },
            { id: 'minecraft:fermented_spider_eye', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:fermented_spider_eye'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SUPER SALTO',
          subcategory: 'Super Salto II & Pé de Coelho',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Super Salto',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Salto II' },
            { id: 'minecraft:rabbit_foot', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:rabbit_foot'],
        },
      },
      {
        level: 6,
        name: 'Poções de Dano Instantâneo II & Veneno II',
        shortName: 'DANO & VENENO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'DANO INSTANT.',
          subcategory: 'Dano Instantâneo II',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Dano Instantâneo',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Dano II' },
          ],
          rawItems64x: ['minecraft:potion'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'VENENO II',
          subcategory: 'Veneno II & Olho de Aranha',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Veneno II',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Veneno II' },
            { id: 'minecraft:spider_eye', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:spider_eye'],
        },
      },
      {
        level: 7,
        name: 'Poções de Fraqueza & Lentidão IV',
        shortName: 'FRAQUEZA/LENTID',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FRAQUEZA',
          subcategory: 'Fraqueza (Cura de Aldeão Zumbi)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Poção Fraqueza',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção de Fraqueza' },
            { id: 'minecraft:golden_apple', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:golden_apple'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'LENTIDAO IV',
          subcategory: 'Lentidão IV & Mestre Tartaruga',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Lentidão & Tartaruga',
          shulkerItems: [
            { id: 'minecraft:potion', count: 1, name: 'Poção do Mestre Tartaruga' },
            { id: 'minecraft:turtle_scute', count: 64 },
          ],
          rawItems64x: ['minecraft:potion', 'minecraft:turtle_scute'],
        },
      },
      {
        level: 8,
        name: 'Poções Arremessáveis (Splash) de Todos os Tipos',
        shortName: 'POCOES SPLASH',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SPLASH CURA',
          subcategory: 'Splash de Cura II & Regeneração',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Splash Cura',
          shulkerItems: [
            { id: 'minecraft:splash_potion', count: 1 },
            { id: 'minecraft:gunpowder', count: 64 },
          ],
          rawItems64x: ['minecraft:splash_potion', 'minecraft:gunpowder'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SPLASH DANO',
          subcategory: 'Splash de Dano II e Fraqueza',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Splash Dano',
          shulkerItems: [
            { id: 'minecraft:splash_potion', count: 1 },
          ],
          rawItems64x: ['minecraft:splash_potion'],
        },
      },
      {
        level: 9,
        name: 'Poções Prolongadas (Lingering) de Nuvem & Bafo do Dragão',
        shortName: 'LINGERING/BAFO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'POCAO NUVEM',
          subcategory: 'Poções Prolongadas de Efeito em Área',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Poções Nuvem',
          shulkerItems: [
            { id: 'minecraft:lingering_potion', count: 1 },
          ],
          rawItems64x: ['minecraft:lingering_potion'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BAFO DO DRAGAO',
          subcategory: 'Bafo do Dragão para Alquimia',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Bafo do Dragão',
          shulkerItems: [
            { id: 'minecraft:dragon_breath', count: 64 },
          ],
          rawItems64x: ['minecraft:dragon_breath'],
        },
      },
      {
        level: 10,
        name: 'Suportes de Poções, Caldeirões, Frascos de Vidro e Fungo do Nether',
        shortName: 'SUPORTES/CALDEI',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SUPORTE POCOES',
          subcategory: 'Suportes de Alquimia & Caldeirões',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Suportes de Alquimia',
          shulkerItems: [
            { id: 'minecraft:brewing_stand', count: 64 },
            { id: 'minecraft:cauldron', count: 64 },
          ],
          rawItems64x: ['minecraft:brewing_stand', 'minecraft:cauldron'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FRASCOS & FUNGO',
          subcategory: 'Frascos de Vidro e Fungo do Nether',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Insumos de Base',
          shulkerItems: [
            { id: 'minecraft:glass_bottle', count: 64 },
            { id: 'minecraft:nether_wart', count: 64 },
            { id: 'minecraft:milk_bucket', count: 1 },
          ],
          rawItems64x: ['minecraft:glass_bottle', 'minecraft:nether_wart', 'minecraft:milk_bucket'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 10: AGRICULTURA, SEMENTES & ALIMENTOS DE LUXO
  // ==========================================================================
  {
    index: 10,
    id: 'coluna_10_agricultura_alimentos',
    name: '10. Agricultura, Sementes & Alimentos de Luxo',
    shortSign: 'COL 10 ALIMENTOS',
    category: 'Agricultura e Alimentos',
    description: '10 Níveis: Maçãs Notch/Ouro, Cenouras Douradas, Carnes Assadas, Pescados, Pães/Tortas, Mel, Trigo/Batata/Cenoura, Melancia/Abóbora, Sementes e Cana/Cacto.',
    icon: 'textures/items/apple_golden',
    shulkerColor: 'minecraft:yellow_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Maçãs Douradas Encantadas (Notch) & Maçãs Douradas',
        shortName: 'MACAS NOTCH/OURO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MACA NOTCH',
          subcategory: 'Maçã Dourada Encantada (Notch)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Maçãs Notch Divinas',
          shulkerItems: [
            { id: 'minecraft:enchanted_golden_apple', count: 64 },
          ],
          rawItems64x: ['minecraft:enchanted_golden_apple'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MACA DOURADA',
          subcategory: 'Maçãs Douradas Clássicas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Maçãs Douradas',
          shulkerItems: [
            { id: 'minecraft:golden_apple', count: 64 },
          ],
          rawItems64x: ['minecraft:golden_apple'],
        },
      },
      {
        level: 2,
        name: 'Cenouras Douradas & Melancia Reluzente',
        shortName: 'CENOURA DOURADA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CENOURA DOUR.',
          subcategory: 'Cenouras Douradas (Saturação Máxima)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Cenouras Douradas',
          shulkerItems: [
            { id: 'minecraft:golden_carrot', count: 64 },
          ],
          rawItems64x: ['minecraft:golden_carrot'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MELANCIA OURO',
          subcategory: 'Melancia Reluzente Alquímica',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Melancia Reluzente',
          shulkerItems: [
            { id: 'minecraft:glistering_melon_slice', count: 64 },
          ],
          rawItems64x: ['minecraft:glistering_melon_slice'],
        },
      },
      {
        level: 3,
        name: 'Carnes Assadas (Bife, Porco, Frango e Carneiro)',
        shortName: 'CARNES ASSADAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BIFE & PORCO',
          subcategory: 'Bifes Assados & Costeleta de Porco',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Bife & Porco Assado',
          shulkerItems: [
            { id: 'minecraft:cooked_beef', count: 64 },
            { id: 'minecraft:cooked_porkchop', count: 64 },
          ],
          rawItems64x: ['minecraft:cooked_beef', 'minecraft:cooked_porkchop'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FRANGO/CARNEIR',
          subcategory: 'Frango Assado & Carneiro Assado',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Frango & Carneiro',
          shulkerItems: [
            { id: 'minecraft:cooked_chicken', count: 64 },
            { id: 'minecraft:cooked_mutton', count: 64 },
          ],
          rawItems64x: ['minecraft:cooked_chicken', 'minecraft:cooked_mutton'],
        },
      },
      {
        level: 4,
        name: 'Pescados Assados (Salmão, Bacalhau) e Guisados',
        shortName: 'PEIXES & SOPAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SALMAO/BACALHAU',
          subcategory: 'Salmão Assado & Bacalhau Assado',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Pescados Assados',
          shulkerItems: [
            { id: 'minecraft:cooked_salmon', count: 64 },
            { id: 'minecraft:cooked_cod', count: 64 },
          ],
          rawItems64x: ['minecraft:cooked_salmon', 'minecraft:cooked_cod'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'GUISADOS/SOPAS',
          subcategory: 'Guisado de Cogumelos e Sopas Suspeitas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Guisados & Tigelas',
          shulkerItems: [
            { id: 'minecraft:mushroom_stew', count: 16 },
            { id: 'minecraft:rabbit_stew', count: 16 },
            { id: 'minecraft:suspicious_stew', count: 16 },
          ],
          rawItems64x: ['minecraft:mushroom_stew', 'minecraft:rabbit_stew'],
        },
      },
      {
        level: 5,
        name: 'Pães, Biscoitos, Bolos e Tortas de Abóbora',
        shortName: 'PADARIA & DOCES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PAES & BISCOITO',
          subcategory: 'Pães Frescos e Biscoitos',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Pães & Biscoitos',
          shulkerItems: [
            { id: 'minecraft:bread', count: 64 },
            { id: 'minecraft:cookie', count: 64 },
          ],
          rawItems64x: ['minecraft:bread', 'minecraft:cookie'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BOLOS & TORTAS',
          subcategory: 'Bolos de Festa & Tortas de Abóbora',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Bolos & Tortas',
          shulkerItems: [
            { id: 'minecraft:cake', count: 64 },
            { id: 'minecraft:pumpkin_pie', count: 64 },
          ],
          rawItems64x: ['minecraft:cake', 'minecraft:pumpkin_pie'],
        },
      },
      {
        level: 6,
        name: 'Garrafas de Mel, Favos de Mel & Bagas Doces',
        shortName: 'MEL & BAGAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'GARRAFA DE MEL',
          subcategory: 'Garrafas de Mel & Favos de Mel',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Mel & Favos',
          shulkerItems: [
            { id: 'minecraft:honey_bottle', count: 16 },
            { id: 'minecraft:honeycomb', count: 64 },
          ],
          rawItems64x: ['minecraft:honey_bottle', 'minecraft:honeycomb'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BAGAS DOCES',
          subcategory: 'Bagas Doces & Bagas Brilhantes',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Frutas Silvestres',
          shulkerItems: [
            { id: 'minecraft:sweet_berries', count: 64 },
            { id: 'minecraft:glow_berries', count: 64 },
          ],
          rawItems64x: ['minecraft:sweet_berries', 'minecraft:glow_berries'],
        },
      },
      {
        level: 7,
        name: 'Trigo, Cenouras, Batatas e Beterrabas',
        shortName: 'HORTALICAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRIGO & CENOURA',
          subcategory: 'Trigo da Fazenda e Cenouras',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Trigo & Cenoura',
          shulkerItems: [
            { id: 'minecraft:wheat', count: 64 },
            { id: 'minecraft:hay_block', count: 64 },
            { id: 'minecraft:carrot', count: 64 },
          ],
          rawItems64x: ['minecraft:wheat', 'minecraft:hay_block', 'minecraft:carrot'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BATATA/BETERRAB',
          subcategory: 'Batatas Assadas e Beterrabas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Batata & Beterraba',
          shulkerItems: [
            { id: 'minecraft:potato', count: 64 },
            { id: 'minecraft:baked_potato', count: 64 },
            { id: 'minecraft:beetroot', count: 64 },
          ],
          rawItems64x: ['minecraft:potato', 'minecraft:baked_potato', 'minecraft:beetroot'],
        },
      },
      {
        level: 8,
        name: 'Melancias, Abóboras e Grãos de Cacau',
        shortName: 'MELANCIA/ABOBOR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MELANCIAS',
          subcategory: 'Fatias de Melancia e Blocos',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Melancias',
          shulkerItems: [
            { id: 'minecraft:melon_slice', count: 64 },
            { id: 'minecraft:melon_block', count: 64 },
          ],
          rawItems64x: ['minecraft:melon_slice', 'minecraft:melon_block'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ABOBORAS/CACAU',
          subcategory: 'Abóboras Talhadas, Lanternas e Cacau',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Abóboras & Cacau',
          shulkerItems: [
            { id: 'minecraft:pumpkin', count: 64 },
            { id: 'minecraft:carved_pumpkin', count: 64 },
            { id: 'minecraft:lit_pumpkin', count: 64 },
            { id: 'minecraft:cocoa_beans', count: 64 },
          ],
          rawItems64x: ['minecraft:pumpkin', 'minecraft:carved_pumpkin', 'minecraft:cocoa_beans'],
        },
      },
      {
        level: 9,
        name: 'Todas as Sementes (Trigo, Melancia, Abóbora, Sniffer)',
        shortName: 'SEMENTES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SEMENTES COMUNS',
          subcategory: 'Sementes de Trigo, Beterraba, Melancia e Abóbora',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Sementes Comuns',
          shulkerItems: [
            { id: 'minecraft:wheat_seeds', count: 64 },
            { id: 'minecraft:beetroot_seeds', count: 64 },
            { id: 'minecraft:melon_seeds', count: 64 },
            { id: 'minecraft:pumpkin_seeds', count: 64 },
          ],
          rawItems64x: ['minecraft:wheat_seeds', 'minecraft:beetroot_seeds', 'minecraft:melon_seeds', 'minecraft:pumpkin_seeds'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SEMENTE SNIFFER',
          subcategory: 'Sementes Arqueológicas de Sniffer 1.20',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Sementes Pré-Históricas',
          shulkerItems: [
            { id: 'minecraft:torchflower_seeds', count: 64 },
            { id: 'minecraft:pitcher_pod', count: 64 },
          ],
          rawItems64x: ['minecraft:torchflower_seeds', 'minecraft:pitcher_pod'],
        },
      },
      {
        level: 10,
        name: 'Cana-de-Açúcar, Cactos e Bambu de Colheita',
        shortName: 'CANA & CACTO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CANA DE ACUCAR',
          subcategory: 'Cana-de-Açúcar & Açúcar',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Cana-de-Açúcar',
          shulkerItems: [
            { id: 'minecraft:reeds', count: 64 },
            { id: 'minecraft:sugar', count: 64 },
            { id: 'minecraft:paper', count: 64 },
          ],
          rawItems64x: ['minecraft:reeds', 'minecraft:sugar', 'minecraft:paper'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CACTO & BAMBU',
          subcategory: 'Cactos do Deserto e Brotos de Bambu',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Cactos & Brotos',
          shulkerItems: [
            { id: 'minecraft:cactus', count: 64 },
            { id: 'minecraft:bamboo', count: 64 },
          ],
          rawItems64x: ['minecraft:cactus', 'minecraft:bamboo'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 11: DROPS DE CRIATURAS, MOBS & MONSTROS
  // ==========================================================================
  {
    index: 11,
    id: 'coluna_11_drops_mobs',
    name: '11. Drops de Criaturas, Mobs & Monstros',
    shortSign: 'COL 11 DROPS MOBS',
    category: 'Drops de Criaturas',
    description: '10 Níveis: Pólvora/Teias, Ossos/Carne Podre, Couro/Penas, Slime/Phantom, Varas Blaze, Lágrimas Ghast, Tintas, Varas Breeze, Escamas e Shulkers.',
    icon: 'textures/items/bone',
    shulkerColor: 'minecraft:gray_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Pólvora, Teias de Aranha e Linhas',
        shortName: 'POLVORA & LINHAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'POLVORA',
          subcategory: 'Pólvora de Creeper',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Pólvora',
          shulkerItems: [
            { id: 'minecraft:gunpowder', count: 64 },
          ],
          rawItems64x: ['minecraft:gunpowder'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TEIA & LINHA',
          subcategory: 'Teias de Aranha & Linhas (String)',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Teias & Linhas',
          shulkerItems: [
            { id: 'minecraft:string', count: 64 },
            { id: 'minecraft:web', count: 64 },
          ],
          rawItems64x: ['minecraft:string', 'minecraft:web'],
        },
      },
      {
        level: 2,
        name: 'Ossos, Farinha de Osso e Carne Podre',
        shortName: 'OSSOS & CARNE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'OSSOS ESQUELETO',
          subcategory: 'Ossos, Farinha de Osso e Blocos',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Ossos de Esqueleto',
          shulkerItems: [
            { id: 'minecraft:bone', count: 64 },
            { id: 'minecraft:bone_meal', count: 64 },
            { id: 'minecraft:bone_block', count: 64 },
          ],
          rawItems64x: ['minecraft:bone', 'minecraft:bone_meal', 'minecraft:bone_block'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARNE PODRE',
          subcategory: 'Carne Podre de Zumbi',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Carne Podre',
          shulkerItems: [
            { id: 'minecraft:rotten_flesh', count: 64 },
          ],
          rawItems64x: ['minecraft:rotten_flesh'],
        },
      },
      {
        level: 3,
        name: 'Couro Bovino, Couro de Coelho e Penas',
        shortName: 'COURO & PENAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'COURO BOVINO',
          subcategory: 'Couro Bovino & Couro de Coelho',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Couros',
          shulkerItems: [
            { id: 'minecraft:leather', count: 64 },
            { id: 'minecraft:rabbit_hide', count: 64 },
          ],
          rawItems64x: ['minecraft:leather', 'minecraft:rabbit_hide'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PENAS DE AVES',
          subcategory: 'Penas de Galinha para Flechas',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Penas',
          shulkerItems: [
            { id: 'minecraft:feather', count: 64 },
          ],
          rawItems64x: ['minecraft:feather'],
        },
      },
      {
        level: 4,
        name: 'Bolas de Slime & Membranas de Fantasma',
        shortName: 'SLIME & PHANTOM',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BOLAS DE SLIME',
          subcategory: 'Bolas de Slime & Blocos de Slime',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Slime',
          shulkerItems: [
            { id: 'minecraft:slime_ball', count: 64 },
            { id: 'minecraft:slime', count: 64 },
          ],
          rawItems64x: ['minecraft:slime_ball', 'minecraft:slime'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MEMB. FANTASMA',
          subcategory: 'Membrana de Fantasma (Reparar Élitros)',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Membranas Phantom',
          shulkerItems: [
            { id: 'minecraft:phantom_membrane', count: 64 },
          ],
          rawItems64x: ['minecraft:phantom_membrane'],
        },
      },
      {
        level: 5,
        name: 'Varas de Blaze & Pó de Blaze',
        shortName: 'VARAS DE BLAZE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VARAS DE BLAZE',
          subcategory: 'Varas de Blaze (Fortaleza do Nether)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Varas de Blaze',
          shulkerItems: [
            { id: 'minecraft:blaze_rod', count: 64 },
          ],
          rawItems64x: ['minecraft:blaze_rod'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PO DE BLAZE',
          subcategory: 'Pó de Blaze (Combustível e Força)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Pó de Blaze',
          shulkerItems: [
            { id: 'minecraft:blaze_powder', count: 64 },
          ],
          rawItems64x: ['minecraft:blaze_powder'],
        },
      },
      {
        level: 6,
        name: 'Lágrimas de Ghast & Cremes de Magma',
        shortName: 'LAGRIMAS/MAGMA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'LAGRIMA GHAST',
          subcategory: 'Lágrimas de Ghast (Regeneração)',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Lágrimas de Ghast',
          shulkerItems: [
            { id: 'minecraft:ghast_tear', count: 64 },
          ],
          rawItems64x: ['minecraft:ghast_tear'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CREME DE MAGMA',
          subcategory: 'Cremes de Magma Cube',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Creme de Magma',
          shulkerItems: [
            { id: 'minecraft:magma_cream', count: 64 },
          ],
          rawItems64x: ['minecraft:magma_cream'],
        },
      },
      {
        level: 7,
        name: 'Bolsas de Tinta Preta & Bolsas de Tinta Brilhante',
        shortName: 'BOLSAS DE TINTA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TINTA PRETA',
          subcategory: 'Bolsas de Tinta de Lula',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Tinta Preta',
          shulkerItems: [
            { id: 'minecraft:ink_sac', count: 64 },
          ],
          rawItems64x: ['minecraft:ink_sac'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TINTA BRILHANTE',
          subcategory: 'Bolsas de Tinta Brilhante (Glow Ink)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Tinta Brilhante',
          shulkerItems: [
            { id: 'minecraft:glow_ink_sac', count: 64 },
          ],
          rawItems64x: ['minecraft:glow_ink_sac'],
        },
      },
      {
        level: 8,
        name: 'Varas de Breeze 1.21 & Cargas de Vento',
        shortName: 'BREEZE 1.21',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VARA DE BREEZE',
          subcategory: 'Varas de Breeze (Câmaras dos Desafios 1.21)',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Varas de Breeze',
          shulkerItems: [
            { id: 'minecraft:breeze_rod', count: 64 },
          ],
          rawItems64x: ['minecraft:breeze_rod'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARGA DE VENTO',
          subcategory: 'Cargas de Vento de Arremesso (Wind Charge)',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Cargas de Vento',
          shulkerItems: [
            { id: 'minecraft:wind_charge', count: 64 },
          ],
          rawItems64x: ['minecraft:wind_charge'],
        },
      },
      {
        level: 9,
        name: 'Escamas de Tartaruga & Escamas de Tatu (Armadillo)',
        shortName: 'ESCAMAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESCAMA TARTAR.',
          subcategory: 'Escamas de Tartaruga Marinha',
          shulkerBoxColor: 'minecraft:lime_shulker_box',
          shulkerBoxName: 'Shulker: Escamas Tartaruga',
          shulkerItems: [
            { id: 'minecraft:turtle_scute', count: 64 },
          ],
          rawItems64x: ['minecraft:turtle_scute'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESCAMA DE TATU',
          subcategory: 'Escamas de Tatu (Armadura de Lobo)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Escamas de Tatu',
          shulkerItems: [
            { id: 'minecraft:armadillo_scute', count: 64 },
          ],
          rawItems64x: ['minecraft:armadillo_scute'],
        },
      },
      {
        level: 10,
        name: 'Conchas de Shulker & Olhos de Aranha',
        shortName: 'CONCHAS SHULKER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CONCHA SHULKER',
          subcategory: 'Conchas de Shulker para Criar Caixas',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Conchas de Shulker',
          shulkerItems: [
            { id: 'minecraft:shulker_shell', count: 64 },
          ],
          rawItems64x: ['minecraft:shulker_shell'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'OLHOS DE ARANHA',
          subcategory: 'Olhos de Aranha Normais e Fermentados',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Olhos de Aranha',
          shulkerItems: [
            { id: 'minecraft:spider_eye', count: 64 },
            { id: 'minecraft:fermented_spider_eye', count: 64 },
          ],
          rawItems64x: ['minecraft:spider_eye', 'minecraft:fermented_spider_eye'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 12: DECORAÇÃO, CONCRETOS, LÃS & TERRACOTAS (16 CORES)
  // ==========================================================================
  {
    index: 12,
    id: 'coluna_12_decoracao_cores',
    name: '12. Decoração, Concretos, Lãs & Terracotas (16 Cores)',
    shortSign: 'COL 12 CORES/DEC',
    category: 'Decoração',
    description: '10 Níveis: Concretos (16 Cores), Concretos em Pó, Terracotas, Azulejos Esmaltados, Lãs, Vidros Coloridos, Camas, Velas, Flores e Corais.',
    icon: 'textures/blocks/concrete_white',
    shulkerColor: 'minecraft:magenta_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Concretos Sólidos (Todas as 16 Cores)',
        shortName: 'CONCRETOS (16)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CONCRETO PARTE1',
          subcategory: 'Branco, Cinza, Preto, Vermelho, Azul, Verde, Amarelo',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Concretos Cores Principais',
          shulkerItems: [
            { id: 'minecraft:white_concrete', count: 64 },
            { id: 'minecraft:gray_concrete', count: 64 },
            { id: 'minecraft:black_concrete', count: 64 },
            { id: 'minecraft:red_concrete', count: 64 },
            { id: 'minecraft:blue_concrete', count: 64 },
            { id: 'minecraft:lime_concrete', count: 64 },
            { id: 'minecraft:yellow_concrete', count: 64 },
          ],
          rawItems64x: ['minecraft:white_concrete', 'minecraft:gray_concrete', 'minecraft:black_concrete', 'minecraft:red_concrete'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CONCRETO PARTE2',
          subcategory: 'Laranja, Ciano, Roxo, Magenta, Rosa, Marrom, Verde',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Concretos Cores Secundárias',
          shulkerItems: [
            { id: 'minecraft:orange_concrete', count: 64 },
            { id: 'minecraft:cyan_concrete', count: 64 },
            { id: 'minecraft:purple_concrete', count: 64 },
            { id: 'minecraft:magenta_concrete', count: 64 },
            { id: 'minecraft:pink_concrete', count: 64 },
            { id: 'minecraft:brown_concrete', count: 64 },
            { id: 'minecraft:green_concrete', count: 64 },
          ],
          rawItems64x: ['minecraft:orange_concrete', 'minecraft:cyan_concrete', 'minecraft:purple_concrete', 'minecraft:pink_concrete'],
        },
      },
      {
        level: 2,
        name: 'Concretos em Pó (16 Cores)',
        shortName: 'CIMENTO EM PO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CIMENTO PARTE 1',
          subcategory: 'Cimento em Pó (Branco, Cinza, Vermelho, Azul)',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Cimento em Pó Parte 1',
          shulkerItems: [
            { id: 'minecraft:white_concrete_powder', count: 64 },
            { id: 'minecraft:gray_concrete_powder', count: 64 },
            { id: 'minecraft:red_concrete_powder', count: 64 },
            { id: 'minecraft:blue_concrete_powder', count: 64 },
          ],
          rawItems64x: ['minecraft:white_concrete_powder', 'minecraft:gray_concrete_powder', 'minecraft:red_concrete_powder', 'minecraft:blue_concrete_powder'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CIMENTO PARTE 2',
          subcategory: 'Cimento em Pó (Amarelo, Verde, Roxo, Laranja)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Cimento em Pó Parte 2',
          shulkerItems: [
            { id: 'minecraft:yellow_concrete_powder', count: 64 },
            { id: 'minecraft:lime_concrete_powder', count: 64 },
            { id: 'minecraft:purple_concrete_powder', count: 64 },
            { id: 'minecraft:orange_concrete_powder', count: 64 },
          ],
          rawItems64x: ['minecraft:yellow_concrete_powder', 'minecraft:lime_concrete_powder', 'minecraft:purple_concrete_powder', 'minecraft:orange_concrete_powder'],
        },
      },
      {
        level: 3,
        name: 'Terracotas Naturais e Tingidas (16 Cores)',
        shortName: 'TERRACOTAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TERRACOTA CLARA',
          subcategory: 'Terracotas Tons Claros e Neutros',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Terracotas Claras',
          shulkerItems: [
            { id: 'minecraft:terracotta', count: 64 },
            { id: 'minecraft:white_terracotta', count: 64 },
            { id: 'minecraft:yellow_terracotta', count: 64 },
            { id: 'minecraft:orange_terracotta', count: 64 },
          ],
          rawItems64x: ['minecraft:terracotta', 'minecraft:white_terracotta', 'minecraft:yellow_terracotta', 'minecraft:orange_terracotta'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TERRACOTA ESCUR',
          subcategory: 'Terracotas Tons Escuros e Vivos',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Terracotas Escuras',
          shulkerItems: [
            { id: 'minecraft:red_terracotta', count: 64 },
            { id: 'minecraft:blue_terracotta', count: 64 },
            { id: 'minecraft:black_terracotta', count: 64 },
            { id: 'minecraft:brown_terracotta', count: 64 },
          ],
          rawItems64x: ['minecraft:red_terracotta', 'minecraft:blue_terracotta', 'minecraft:black_terracotta', 'minecraft:brown_terracotta'],
        },
      },
      {
        level: 4,
        name: 'Azulejos Esmaltados (Glazed Terracotta 16 Padrões)',
        shortName: 'AZULEJOS ESMALT',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'AZULEJO PARTE 1',
          subcategory: 'Azulejos Branco, Amarelo, Laranja e Vermelho',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Azulejos Parte 1',
          shulkerItems: [
            { id: 'minecraft:white_glazed_terracotta', count: 64 },
            { id: 'minecraft:yellow_glazed_terracotta', count: 64 },
            { id: 'minecraft:orange_glazed_terracotta', count: 64 },
            { id: 'minecraft:red_glazed_terracotta', count: 64 },
          ],
          rawItems64x: ['minecraft:white_glazed_terracotta', 'minecraft:yellow_glazed_terracotta', 'minecraft:orange_glazed_terracotta', 'minecraft:red_glazed_terracotta'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'AZULEJO PARTE 2',
          subcategory: 'Azulejos Azul, Ciano, Roxo e Preto',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Azulejos Parte 2',
          shulkerItems: [
            { id: 'minecraft:blue_glazed_terracotta', count: 64 },
            { id: 'minecraft:cyan_glazed_terracotta', count: 64 },
            { id: 'minecraft:purple_glazed_terracotta', count: 64 },
            { id: 'minecraft:black_glazed_terracotta', count: 64 },
          ],
          rawItems64x: ['minecraft:blue_glazed_terracotta', 'minecraft:cyan_glazed_terracotta', 'minecraft:purple_glazed_terracotta', 'minecraft:black_glazed_terracotta'],
        },
      },
      {
        level: 5,
        name: 'Lãs e Carpetes de Todas as 16 Cores',
        shortName: 'LAS & CARPETES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'LAS 16 CORES',
          subcategory: 'Blocos de Lã de Ovelha 16 Cores',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Lãs Coloridas',
          shulkerItems: [
            { id: 'minecraft:white_wool', count: 64 },
            { id: 'minecraft:red_wool', count: 64 },
            { id: 'minecraft:blue_wool', count: 64 },
            { id: 'minecraft:yellow_wool', count: 64 },
            { id: 'minecraft:lime_wool', count: 64 },
            { id: 'minecraft:black_wool', count: 64 },
          ],
          rawItems64x: ['minecraft:white_wool', 'minecraft:red_wool', 'minecraft:blue_wool', 'minecraft:black_wool'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARPETES',
          subcategory: 'Carpetes Finos 16 Cores',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Carpetes Coloridos',
          shulkerItems: [
            { id: 'minecraft:white_carpet', count: 64 },
            { id: 'minecraft:red_carpet', count: 64 },
            { id: 'minecraft:blue_carpet', count: 64 },
            { id: 'minecraft:black_carpet', count: 64 },
          ],
          rawItems64x: ['minecraft:white_carpet', 'minecraft:red_carpet', 'minecraft:blue_carpet', 'minecraft:black_carpet'],
        },
      },
      {
        level: 6,
        name: 'Vidros e Painéis Tingidos (16 Cores)',
        shortName: 'VIDROS & PAINEIS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VIDROS BLOCOS',
          subcategory: 'Blocos de Vidro Tingido',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Vidros Tingidos',
          shulkerItems: [
            { id: 'minecraft:glass', count: 64 },
            { id: 'minecraft:tinted_glass', count: 64 },
            { id: 'minecraft:white_stained_glass', count: 64 },
            { id: 'minecraft:black_stained_glass', count: 64 },
          ],
          rawItems64x: ['minecraft:glass', 'minecraft:tinted_glass', 'minecraft:white_stained_glass', 'minecraft:black_stained_glass'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PAINEIS VIDRO',
          subcategory: 'Painéis de Vidro Tingido (Panes)',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Painéis de Vidro',
          shulkerItems: [
            { id: 'minecraft:glass_pane', count: 64 },
            { id: 'minecraft:white_stained_glass_pane', count: 64 },
            { id: 'minecraft:black_stained_glass_pane', count: 64 },
          ],
          rawItems64x: ['minecraft:glass_pane', 'minecraft:white_stained_glass_pane', 'minecraft:black_stained_glass_pane'],
        },
      },
      {
        level: 7,
        name: 'Camas de Todas as 16 Cores',
        shortName: 'CAMAS (16 CORES)',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CAMAS CLARAS',
          subcategory: 'Camas Vermelha, Branca, Amarela e Azul',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Camas Cores Clássicas',
          shulkerItems: [
            { id: 'minecraft:red_bed', count: 16 },
            { id: 'minecraft:white_bed', count: 16 },
            { id: 'minecraft:blue_bed', count: 16 },
            { id: 'minecraft:yellow_bed', count: 16 },
          ],
          rawItems64x: ['minecraft:red_bed', 'minecraft:white_bed', 'minecraft:blue_bed', 'minecraft:yellow_bed'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CAMAS ESCURAS',
          subcategory: 'Camas Preta, Verde, Ciano e Roxa',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Camas Cores Escuras',
          shulkerItems: [
            { id: 'minecraft:black_bed', count: 16 },
            { id: 'minecraft:lime_bed', count: 16 },
            { id: 'minecraft:purple_bed', count: 16 },
            { id: 'minecraft:cyan_bed', count: 16 },
          ],
          rawItems64x: ['minecraft:black_bed', 'minecraft:lime_bed', 'minecraft:purple_bed', 'minecraft:cyan_bed'],
        },
      },
      {
        level: 8,
        name: 'Velas e Estandartes (16 Cores)',
        shortName: 'VELAS/ESTANDART',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VELAS (16 CORES)',
          subcategory: 'Velas de Cera Coloridas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Velas Coloridas',
          shulkerItems: [
            { id: 'minecraft:candle', count: 64 },
            { id: 'minecraft:white_candle', count: 64 },
            { id: 'minecraft:red_candle', count: 64 },
            { id: 'minecraft:blue_candle', count: 64 },
          ],
          rawItems64x: ['minecraft:candle', 'minecraft:white_candle', 'minecraft:red_candle', 'minecraft:blue_candle'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESTANDARTES',
          subcategory: 'Estandartes Decorativos',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Estandartes',
          shulkerItems: [
            { id: 'minecraft:white_banner', count: 16 },
            { id: 'minecraft:red_banner', count: 16 },
            { id: 'minecraft:blue_banner', count: 16 },
            { id: 'minecraft:black_banner', count: 16 },
          ],
          rawItems64x: ['minecraft:white_banner', 'minecraft:red_banner', 'minecraft:blue_banner', 'minecraft:black_banner'],
        },
      },
      {
        level: 9,
        name: 'Flores Comuns e Flores Altas de Jardins',
        shortName: 'FLORES JARDINS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FLORES COMUNS',
          subcategory: 'Papoulas, Dente-de-Leão, Tulipas e Orquídeas',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Flores Comuns',
          shulkerItems: [
            { id: 'minecraft:poppy', count: 64 },
            { id: 'minecraft:dandelion', count: 64 },
            { id: 'minecraft:blue_orchid', count: 64 },
            { id: 'minecraft:allium', count: 64 },
            { id: 'minecraft:red_tulip', count: 64 },
          ],
          rawItems64x: ['minecraft:poppy', 'minecraft:dandelion', 'minecraft:blue_orchid', 'minecraft:red_tulip'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FLORES ALTAS',
          subcategory: 'Girassol, Roseira, Lilás e Peônia',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Flores Altas',
          shulkerItems: [
            { id: 'minecraft:sunflower', count: 64 },
            { id: 'minecraft:rose_bush', count: 64 },
            { id: 'minecraft:lilac', count: 64 },
            { id: 'minecraft:peony', count: 64 },
          ],
          rawItems64x: ['minecraft:sunflower', 'minecraft:rose_bush', 'minecraft:lilac', 'minecraft:peony'],
        },
      },
      {
        level: 10,
        name: 'Corais Vivos, Picles do Mar e Vitórias-Régias',
        shortName: 'CORAIS & AQUATIC',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CORAIS VIVOS',
          subcategory: 'Blocos de Coral Coloridos',
          shulkerBoxColor: 'minecraft:magenta_shulker_box',
          shulkerBoxName: 'Shulker: Corais Vivos',
          shulkerItems: [
            { id: 'minecraft:tube_coral_block', count: 64 },
            { id: 'minecraft:brain_coral_block', count: 64 },
            { id: 'minecraft:bubble_coral_block', count: 64 },
            { id: 'minecraft:fire_coral_block', count: 64 },
            { id: 'minecraft:horn_coral_block', count: 64 },
          ],
          rawItems64x: ['minecraft:tube_coral_block', 'minecraft:brain_coral_block', 'minecraft:fire_coral_block'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'PICLES & REGIA',
          subcategory: 'Picles do Mar & Vitórias-Régias',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Plantas Aquáticas',
          shulkerItems: [
            { id: 'minecraft:sea_pickle', count: 64 },
            { id: 'minecraft:waterlily', count: 64 },
            { id: 'minecraft:seagrass', count: 64 },
            { id: 'minecraft:kelp', count: 64 },
          ],
          rawItems64x: ['minecraft:sea_pickle', 'minecraft:waterlily', 'minecraft:kelp'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 13: TRANSPORTE, EXPLORAÇÃO, MAPAS & NAVEGAÇÃO
  // ==========================================================================
  {
    index: 13,
    id: 'coluna_13_transporte_exploracao',
    name: '13. Transporte, Exploração, Mapas & Navegação',
    shortSign: 'COL 13 TRANSPORTE',
    category: 'Transporte e Exploração',
    description: '10 Níveis: Barcos c/ Baú, Jangadas, Carrinhos, Selas, Foguetes, Élitros, Mapas/Bússolas, Trilhos Percurso, Laços/NameTags e Andaimes.',
    icon: 'textures/items/saddle',
    shulkerColor: 'minecraft:cyan_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Barcos com Baú de Todas as Madeiras',
        shortName: 'BARCOS COM BAU',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BARCOS CARV/ABE',
          subcategory: 'Barcos c/ Baú de Carvalho, Abeto e Bétula',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Barcos c/ Baú 1',
          shulkerItems: [
            { id: 'minecraft:oak_chest_boat', count: 16 },
            { id: 'minecraft:spruce_chest_boat', count: 16 },
            { id: 'minecraft:birch_chest_boat', count: 16 },
          ],
          rawItems64x: ['minecraft:oak_chest_boat', 'minecraft:spruce_chest_boat', 'minecraft:birch_chest_boat'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BARCOS SELV/ESC',
          subcategory: 'Barcos c/ Baú de Selva, Dark Oak e Mangue',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Barcos c/ Baú 2',
          shulkerItems: [
            { id: 'minecraft:jungle_chest_boat', count: 16 },
            { id: 'minecraft:dark_oak_chest_boat', count: 16 },
            { id: 'minecraft:mangrove_chest_boat', count: 16 },
            { id: 'minecraft:cherry_chest_boat', count: 16 },
          ],
          rawItems64x: ['minecraft:jungle_chest_boat', 'minecraft:dark_oak_chest_boat', 'minecraft:mangrove_chest_boat'],
        },
      },
      {
        level: 2,
        name: 'Jangadas com Baú de Bambu',
        shortName: 'JANGADAS BAMBU',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'JANGADA COM BAU',
          subcategory: 'Jangadas c/ Baú de Bambu',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Jangadas c/ Baú',
          shulkerItems: [
            { id: 'minecraft:bamboo_chest_raft', count: 16 },
          ],
          rawItems64x: ['minecraft:bamboo_chest_raft'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'JANGADA SIMPLES',
          subcategory: 'Jangadas de Bambu Rápidas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Jangadas de Bambu',
          shulkerItems: [
            { id: 'minecraft:bamboo_raft', count: 16 },
          ],
          rawItems64x: ['minecraft:bamboo_raft'],
        },
      },
      {
        level: 3,
        name: 'Carrinhos com Baú e Carrinhos com Funil',
        shortName: 'CARRINHOS CARGA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CARRINHO BAU',
          subcategory: 'Carrinhos de Mina c/ Baú',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Carrinhos c/ Baú',
          shulkerItems: [
            { id: 'minecraft:chest_minecart', count: 64 },
          ],
          rawItems64x: ['minecraft:chest_minecart'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CARRINHO FUNIL',
          subcategory: 'Carrinhos de Mina c/ Funil',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Carrinhos c/ Funil',
          shulkerItems: [
            { id: 'minecraft:hopper_minecart', count: 64 },
          ],
          rawItems64x: ['minecraft:hopper_minecart'],
        },
      },
      {
        level: 4,
        name: 'Selas & Armaduras de Montaria (Cavalo e Lobo)',
        shortName: 'SELAS & MONTAR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SELAS CAVALO',
          subcategory: 'Selas de Cavalo & Porco',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Selas',
          shulkerItems: [
            { id: 'minecraft:saddle', count: 64 },
          ],
          rawItems64x: ['minecraft:saddle'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ARMADURA CAVALO',
          subcategory: 'Armaduras de Cavalo Diamante e Ouro',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Armaduras de Cavalo',
          shulkerItems: [
            { id: 'minecraft:diamond_horse_armor', count: 16 },
            { id: 'minecraft:golden_horse_armor', count: 16 },
            { id: 'minecraft:wolf_armor', count: 16 },
          ],
          rawItems64x: ['minecraft:diamond_horse_armor', 'minecraft:golden_horse_armor', 'minecraft:wolf_armor'],
        },
      },
      {
        level: 5,
        name: 'Foguetes de Artifício (Duração de Voo 1, 2 e 3)',
        shortName: 'FOGUETES VOO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FOGUETE VOO 1',
          subcategory: 'Foguetes de Voo Duração 1 (Ideal Élitros)',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Foguetes Voo 1',
          shulkerItems: [
            { id: 'minecraft:firework_rocket', count: 64 },
          ],
          rawItems64x: ['minecraft:firework_rocket'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FOGUETE VOO 3',
          subcategory: 'Foguetes de Voo Longo Duração 3',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Foguetes Voo 3',
          shulkerItems: [
            { id: 'minecraft:firework_rocket', count: 64 },
            { id: 'minecraft:firework_star', count: 64 },
          ],
          rawItems64x: ['minecraft:firework_rocket', 'minecraft:firework_star'],
        },
      },
      {
        level: 6,
        name: 'Élitros de Reserva (Elytras)',
        shortName: 'ELITROS RESERVA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ELITROS RESERVA',
          subcategory: 'Asas Élitros Novas',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Élitros de Reserva',
          shulkerItems: [
            { id: 'minecraft:elytra', count: 1, ench: [['unbreaking', 3], ['mending', 1]] },
          ],
          rawItems64x: ['minecraft:elytra'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'REPARO ELITROS',
          subcategory: 'Membranas de Phantom para Reparo',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Membranas Reparo',
          shulkerItems: [
            { id: 'minecraft:phantom_membrane', count: 64 },
            { id: 'minecraft:anvil', count: 16 },
          ],
          rawItems64x: ['minecraft:phantom_membrane', 'minecraft:anvil'],
        },
      },
      {
        level: 7,
        name: 'Mapas em Branco, Cartografia e Bússolas',
        shortName: 'MAPAS & CARTOG',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MAPAS EM BRANCO',
          subcategory: 'Mapas Vazios & Papel',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Mapas em Branco',
          shulkerItems: [
            { id: 'minecraft:map', count: 64 },
            { id: 'minecraft:paper', count: 64 },
          ],
          rawItems64x: ['minecraft:map', 'minecraft:paper'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MESA CARTOGRAF.',
          subcategory: 'Mesa de Cartografia & Bússolas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Cartografia',
          shulkerItems: [
            { id: 'minecraft:cartography_table', count: 64 },
            { id: 'minecraft:compass', count: 64 },
          ],
          rawItems64x: ['minecraft:cartography_table', 'minecraft:compass'],
        },
      },
      {
        level: 8,
        name: 'Trilhos e Alavancas de Percurso Longo',
        shortName: 'TRILHOS LONGO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TRILHO ELETRICO',
          subcategory: 'Packs de Trilhos Elétricos e Tochas Redstone',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Trilhos Elétricos Longos',
          shulkerItems: [
            { id: 'minecraft:golden_rail', count: 64 },
            { id: 'minecraft:redstone_torch', count: 64 },
          ],
          rawItems64x: ['minecraft:golden_rail', 'minecraft:redstone_torch'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TRILHO COMUM',
          subcategory: 'Packs de Trilhos Comuns de Mina',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Trilhos Comuns',
          shulkerItems: [
            { id: 'minecraft:rail', count: 64 },
          ],
          rawItems64x: ['minecraft:rail'],
        },
      },
      {
        level: 9,
        name: 'Laços, Etiquetas (Name Tags) e Guias',
        shortName: 'LACOS & NOMES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'LACOS RESISTENT',
          subcategory: 'Laços para Animais e Barcos',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Laços',
          shulkerItems: [
            { id: 'minecraft:lead', count: 64 },
          ],
          rawItems64x: ['minecraft:lead'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ETIQUETAS NOME',
          subcategory: 'Etiquetas (Name Tags para Mobs)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Etiquetas',
          shulkerItems: [
            { id: 'minecraft:name_tag', count: 64 },
          ],
          rawItems64x: ['minecraft:name_tag'],
        },
      },
      {
        level: 10,
        name: 'Andaimes (Scaffolding) & Escadas de Mão',
        shortName: 'ANDAIMES/ESCADA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ANDAIMES BAMBU',
          subcategory: 'Andaimes de Bambu para Subir Torres',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Andaimes (Scaffolding)',
          shulkerItems: [
            { id: 'minecraft:scaffolding', count: 64 },
          ],
          rawItems64x: ['minecraft:scaffolding'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESCADAS DE MAO',
          subcategory: 'Escadas de Mão de Madeira (Ladders)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Escadas de Mão',
          shulkerItems: [
            { id: 'minecraft:ladder', count: 64 },
          ],
          rawItems64x: ['minecraft:ladder'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 14: BLOCOS FUNCIONAIS, ESTAÇÕES DE TRABALHO & FORNOS
  // ==========================================================================
  {
    index: 14,
    id: 'coluna_14_blocos_funcionais',
    name: '14. Blocos Funcionais, Estações de Trabalho & Fornos',
    shortSign: 'COL 14 FUNCIONAIS',
    category: 'Blocos funcionais',
    description: '10 Níveis: Bancadas, Fornos/Altos-Fornos, Bigornas/Ferraria, Cortador/Rebolo, Cartografia/Tear, Atril/Compostador, Estantes, Molduras, Sinos e Magnetitas.',
    icon: 'textures/blocks/crafting_table_top',
    shulkerColor: 'minecraft:orange_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Bancadas de Trabalho (Crafting Tables) em Massa',
        shortName: 'BANCADAS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BANCADA TRABALH',
          subcategory: 'Bancadas de Trabalho Clássicas',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Bancadas de Trabalho',
          shulkerItems: [
            { id: 'minecraft:crafting_table', count: 64 },
          ],
          rawItems64x: ['minecraft:crafting_table'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'BAUS & BARRIZ',
          subcategory: 'Baús de Madeira e Barris',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Baús & Barris',
          shulkerItems: [
            { id: 'minecraft:chest', count: 64 },
            { id: 'minecraft:barrel', count: 64 },
          ],
          rawItems64x: ['minecraft:chest', 'minecraft:barrel'],
        },
      },
      {
        level: 2,
        name: 'Fornalhas, Altos-Fornos e Defumadores',
        shortName: 'FORNOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FORNALHA COMUM',
          subcategory: 'Fornalhas de Pedra',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Fornalhas',
          shulkerItems: [
            { id: 'minecraft:furnace', count: 64 },
          ],
          rawItems64x: ['minecraft:furnace'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ALTO-FORNO/DEF',
          subcategory: 'Altos-Fornos (Minérios) e Defumadores (Comidas)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Altos-Fornos & Defumadores',
          shulkerItems: [
            { id: 'minecraft:blast_furnace', count: 64 },
            { id: 'minecraft:smoker', count: 64 },
          ],
          rawItems64x: ['minecraft:blast_furnace', 'minecraft:smoker'],
        },
      },
      {
        level: 3,
        name: 'Bigornas Novas e Mesas de Ferraria',
        shortName: 'BIGORNA/FERRARI',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'BIGORNA NOVA',
          subcategory: 'Bigornas Novas de Ferro',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Bigornas',
          shulkerItems: [
            { id: 'minecraft:anvil', count: 64 },
          ],
          rawItems64x: ['minecraft:anvil'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MESA FERRARIA',
          subcategory: 'Mesas de Ferraria (Smithing Tables)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Mesas de Ferraria',
          shulkerItems: [
            { id: 'minecraft:smithing_table', count: 64 },
          ],
          rawItems64x: ['minecraft:smithing_table'],
        },
      },
      {
        level: 4,
        name: 'Cortadores de Pedra (Stonecutters) & Rebolos',
        shortName: 'CORTADOR/REBOLO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CORTADOR PEDRA',
          subcategory: 'Cortadores de Pedra',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Cortadores de Pedra',
          shulkerItems: [
            { id: 'minecraft:stonecutter', count: 64 },
          ],
          rawItems64x: ['minecraft:stonecutter'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'REBOLO DESENC.',
          subcategory: 'Rebolos (Remover Encantamento)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Rebolos',
          shulkerItems: [
            { id: 'minecraft:grindstone', count: 64 },
          ],
          rawItems64x: ['minecraft:grindstone'],
        },
      },
      {
        level: 5,
        name: 'Mesas de Cartografia, Funilaria e Tear (Loom)',
        shortName: 'CARTOGRAF/TEAR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MESA CARTOGRAF',
          subcategory: 'Mesas de Cartografia',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Cartografia',
          shulkerItems: [
            { id: 'minecraft:cartography_table', count: 64 },
          ],
          rawItems64x: ['minecraft:cartography_table'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TEAR & FUNILARI',
          subcategory: 'Tear (Estandartes) e Funilaria (Fletching)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Tear & Fletching',
          shulkerItems: [
            { id: 'minecraft:loom', count: 64 },
            { id: 'minecraft:fletching_table', count: 64 },
          ],
          rawItems64x: ['minecraft:loom', 'minecraft:fletching_table'],
        },
      },
      {
        level: 6,
        name: 'Atril (Lectern) & Compostadores',
        shortName: 'ATRIL/COMPOST',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ATRIL VILLAGER',
          subcategory: 'Atris de Bibliotecário',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Atris',
          shulkerItems: [
            { id: 'minecraft:lectern', count: 64 },
          ],
          rawItems64x: ['minecraft:lectern'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'COMPOSTADOR',
          subcategory: 'Compostadores de Fazenda',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Compostadores',
          shulkerItems: [
            { id: 'minecraft:composter', count: 64 },
          ],
          rawItems64x: ['minecraft:composter'],
        },
      },
      {
        level: 7,
        name: 'Estantes de Livros Comuns e Estantes Esculpidas',
        shortName: 'ESTANTES LIVROS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESTANTE COMUM',
          subcategory: 'Estantes de Livros Clássicas (Altar 30)',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Estantes de Livros',
          shulkerItems: [
            { id: 'minecraft:bookshelf', count: 64 },
          ],
          rawItems64x: ['minecraft:bookshelf'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESTANTE ESCULP',
          subcategory: 'Estantes de Livros Esculpidas 1.20',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Estantes Esculpidas',
          shulkerItems: [
            { id: 'minecraft:chiseled_bookshelf', count: 64 },
          ],
          rawItems64x: ['minecraft:chiseled_bookshelf'],
        },
      },
      {
        level: 8,
        name: 'Suportes de Armadura (Armor Stands) & Molduras',
        shortName: 'STANDS & FRAMES',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SUPORTE ARMAD.',
          subcategory: 'Suportes de Armadura (Armor Stands)',
          shulkerBoxColor: 'minecraft:light_gray_shulker_box',
          shulkerBoxName: 'Shulker: Armor Stands',
          shulkerItems: [
            { id: 'minecraft:armor_stand', count: 64 },
          ],
          rawItems64x: ['minecraft:armor_stand'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDURAS BRILH.',
          subcategory: 'Molduras Normais e Molduras Brilhantes',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Molduras',
          shulkerItems: [
            { id: 'minecraft:frame', count: 64 },
            { id: 'minecraft:glow_frame', count: 64 },
            { id: 'minecraft:painting', count: 64 },
          ],
          rawItems64x: ['minecraft:frame', 'minecraft:glow_frame', 'minecraft:painting'],
        },
      },
      {
        level: 9,
        name: 'Sinos (Bells), Jukeboxes e Blocos Musicais',
        shortName: 'SINOS & MUSICA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'SINO DA VILA',
          subcategory: 'Sinos de Vila',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Sinos da Vila',
          shulkerItems: [
            { id: 'minecraft:bell', count: 64 },
          ],
          rawItems64x: ['minecraft:bell'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'JUKEBOX & NOTE',
          subcategory: 'Toca-Discos (Jukebox) & Noteblocks',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Instrumentos Musicais',
          shulkerItems: [
            { id: 'minecraft:jukebox', count: 64 },
            { id: 'minecraft:noteblock', count: 64 },
          ],
          rawItems64x: ['minecraft:jukebox', 'minecraft:noteblock'],
        },
      },
      {
        level: 10,
        name: 'Magnetitas (Lodestones) & Caldeirões de Alquimia',
        shortName: 'MAGNETITA/CALD',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MAGNETITA',
          subcategory: 'Blocos de Magnetita (Bloco Multiplicador)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Magnetitas',
          shulkerItems: [
            { id: 'minecraft:lodestone', count: 64 },
          ],
          rawItems64x: ['minecraft:lodestone'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CALDEIRAO FERRO',
          subcategory: 'Caldeirões de Ferro para Poções',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Caldeirões',
          shulkerItems: [
            { id: 'minecraft:cauldron', count: 64 },
          ],
          rawItems64x: ['minecraft:cauldron'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 15: TESOUROS RAROS, TROFÉUS, CHEFES & ARQUEOLOGIA
  // ==========================================================================
  {
    index: 15,
    id: 'coluna_15_tesouros_raros',
    name: '15. Tesouros Raros, Troféus, Chefes & Arqueologia',
    shortSign: 'COL 15 RAROS/TROF',
    category: 'Itens raros e especiais',
    description: '10 Níveis: Totens, Estrelas Nether, Coração do Mar/Condutos, Ovo Dragão, Cabeças Mobs, Núcleo Pesado/Chaves 1.21, Discos Música, Óstracos, Fragmentos e Esponjas.',
    icon: 'textures/items/totem',
    shulkerColor: 'minecraft:yellow_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Totens da Imortalidade (54x Totens por Baú!)',
        shortName: 'TOTENS IMORTAL',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'TOTENS IMORTAL',
          subcategory: 'Totens da Imortalidade Salva-Vidas',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Totens da Imortalidade',
          shulkerItems: [
            { id: 'minecraft:totem_of_undying', count: 1 },
          ],
          rawItems64x: ['minecraft:totem_of_undying'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'TOTENS RESERVA',
          subcategory: 'Totens de Reserva',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Totens Reserva',
          shulkerItems: [
            { id: 'minecraft:totem_of_undying', count: 1 },
          ],
          rawItems64x: ['minecraft:totem_of_undying'],
        },
      },
      {
        level: 2,
        name: 'Estrelas do Nether & Sinalizadores (Beacons)',
        shortName: 'BEACONS/ESTRELA',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESTRELA NETHER',
          subcategory: 'Estrelas do Nether do Chefe Wither',
          shulkerBoxColor: 'minecraft:white_shulker_box',
          shulkerBoxName: 'Shulker: Estrelas do Nether',
          shulkerItems: [
            { id: 'minecraft:nether_star', count: 64 },
          ],
          rawItems64x: ['minecraft:nether_star'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'SINALIZADORES',
          subcategory: 'Sinalizadores (Beacons) & Pirâmides',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Beacons',
          shulkerItems: [
            { id: 'minecraft:beacon', count: 64 },
          ],
          rawItems64x: ['minecraft:beacon'],
        },
      },
      {
        level: 3,
        name: 'Corações do Mar, Condutos & Conchas de Náutilo',
        shortName: 'CORACAO DO MAR',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CORACAO DO MAR',
          subcategory: 'Corações do Mar dos Tesouros Enterrados',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Coração do Mar',
          shulkerItems: [
            { id: 'minecraft:heart_of_the_sea', count: 64 },
            { id: 'minecraft:conduit', count: 64 },
          ],
          rawItems64x: ['minecraft:heart_of_the_sea', 'minecraft:conduit'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CONCHA NAUTILO',
          subcategory: 'Conchas de Náutilo para Montar Conduto',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Conchas de Náutilo',
          shulkerItems: [
            { id: 'minecraft:nautilus_shell', count: 64 },
          ],
          rawItems64x: ['minecraft:nautilus_shell'],
        },
      },
      {
        level: 4,
        name: 'Ovo do Dragão & Cabeças de Dragão do End Ship',
        shortName: 'OVO DO DRAGAO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'OVO DO DRAGAO',
          subcategory: 'Ovo Oficial do Ender Dragon',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Ovo do Dragão',
          shulkerItems: [
            { id: 'minecraft:dragon_egg', count: 64 },
          ],
          rawItems64x: ['minecraft:dragon_egg'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CABECA DRAGAO',
          subcategory: 'Cabeças de Dragão com Mandíbula Móvel',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Cabeças de Dragão',
          shulkerItems: [
            { id: 'minecraft:dragon_head', count: 64 },
          ],
          rawItems64x: ['minecraft:dragon_head'],
        },
      },
      {
        level: 5,
        name: 'Cabeças de Mobs (Esqueleto Wither, Creeper, Zumbi, Piglin)',
        shortName: 'CABECAS DE MOBS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'CRANIO WITHER',
          subcategory: 'Crânios de Esqueleto Wither',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Crânios de Wither',
          shulkerItems: [
            { id: 'minecraft:wither_skeleton_skull', count: 64 },
            { id: 'minecraft:skeleton_skull', count: 64 },
          ],
          rawItems64x: ['minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CABECA ZUMBI/CR',
          subcategory: 'Cabeças de Creeper, Zumbi e Piglin',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Cabeças de Criaturas',
          shulkerItems: [
            { id: 'minecraft:creeper_head', count: 64 },
            { id: 'minecraft:zombie_head', count: 64 },
            { id: 'minecraft:piglin_head', count: 64 },
          ],
          rawItems64x: ['minecraft:creeper_head', 'minecraft:zombie_head', 'minecraft:piglin_head'],
        },
      },
      {
        level: 6,
        name: 'Núcleo Pesado (Heavy Core) & Chaves dos Testes Ominosas 1.21',
        shortName: 'HEAVY CORE 1.21',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'NUCLEO PESADO',
          subcategory: 'Núcleo Pesado da Clava 1.21',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Núcleos Pesados',
          shulkerItems: [
            { id: 'minecraft:heavy_core', count: 64 },
          ],
          rawItems64x: ['minecraft:heavy_core'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'CHAVES OMINOSAS',
          subcategory: 'Chaves de Provação e Chaves Ominosas 1.21',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Chaves dos Desafios',
          shulkerItems: [
            { id: 'minecraft:trial_key', count: 64 },
            { id: 'minecraft:ominous_trial_key', count: 64 },
          ],
          rawItems64x: ['minecraft:trial_key', 'minecraft:ominous_trial_key'],
        },
      },
      {
        level: 7,
        name: 'Discos de Música Raros (Pigstep, Creator, Precipice, 5, Relic)',
        shortName: 'DISCOS RAROS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'PIGSTEP/CREATOR',
          subcategory: 'Discos Pigstep, Creator e Precipice',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Discos Exclusivos',
          shulkerItems: [
            { id: 'minecraft:music_disc_pigstep', count: 16 },
            { id: 'minecraft:music_disc_creator', count: 16 },
            { id: 'minecraft:music_disc_precipice', count: 16 },
          ],
          rawItems64x: ['minecraft:music_disc_pigstep', 'minecraft:music_disc_creator'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'DISCOS 5/RELIC',
          subcategory: 'Discos Relic, Otherside e 5',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Discos Relíquias',
          shulkerItems: [
            { id: 'minecraft:music_disc_otherside', count: 16 },
            { id: 'minecraft:music_disc_5', count: 16 },
            { id: 'minecraft:music_disc_relic', count: 16 },
          ],
          rawItems64x: ['minecraft:music_disc_otherside', 'minecraft:music_disc_5'],
        },
      },
      {
        level: 8,
        name: 'Vasos Decorados & Óstracos de Cerâmica (Sherds)',
        shortName: 'VASOS & OSTRACOS',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'VASOS DECORADOS',
          subcategory: 'Vasos Arqueológicos Decorados',
          shulkerBoxColor: 'minecraft:brown_shulker_box',
          shulkerBoxName: 'Shulker: Vasos Decorados',
          shulkerItems: [
            { id: 'minecraft:decorated_pot', count: 64 },
          ],
          rawItems64x: ['minecraft:decorated_pot'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'OSTRACOS CERAM.',
          subcategory: 'Óstracos de Cerâmica Arqueológica (23 Tipos)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Óstracos de Cerâmica',
          shulkerItems: [
            { id: 'minecraft:angler_pottery_sherd', count: 64 },
            { id: 'minecraft:blade_pottery_sherd', count: 64 },
            { id: 'minecraft:heart_pottery_sherd', count: 64 },
            { id: 'minecraft:howl_pottery_sherd', count: 64 },
          ],
          rawItems64x: ['minecraft:angler_pottery_sherd', 'minecraft:blade_pottery_sherd', 'minecraft:heart_pottery_sherd'],
        },
      },
      {
        level: 9,
        name: 'Fragmentos de Eco & Fragmentos de Disco 5',
        shortName: 'FRAGM. DE ECO',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'FRAGMENTO ECO',
          subcategory: 'Fragmentos de Eco (Ancient City)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Fragmentos de Eco',
          shulkerItems: [
            { id: 'minecraft:echo_shard', count: 64 },
          ],
          rawItems64x: ['minecraft:echo_shard'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'FRAG. DISCO 5',
          subcategory: 'Fragmentos de Disco 5',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Fragmentos de Disco',
          shulkerItems: [
            { id: 'minecraft:disc_fragment_5', count: 64 },
          ],
          rawItems64x: ['minecraft:disc_fragment_5'],
        },
      },
      {
        level: 10,
        name: 'Esponjas Secas e Esponjas Molhadas do Monumento',
        shortName: 'ESPONJAS MONUM.',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'ESPONJAS SECAS',
          subcategory: 'Esponjas Secas para Esvaziar Oceanos',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Esponjas Secas',
          shulkerItems: [
            { id: 'minecraft:sponge', count: 64 },
          ],
          rawItems64x: ['minecraft:sponge'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'ESPONJA MOLHADA',
          subcategory: 'Esponjas Molhadas do Monumento',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Esponjas Molhadas',
          shulkerItems: [
            { id: 'minecraft:wet_sponge', count: 64 },
          ],
          rawItems64x: ['minecraft:wet_sponge'],
        },
      },
    ],
  },

  // ==========================================================================
  // COLUNA 16: OS 19 MOLDES DE FERRARIA (ARMOR TRIMS) & MELHORIAS
  // ==========================================================================
  {
    index: 16,
    id: 'coluna_16_moldes_ferraria',
    name: '16. Os 19 Moldes de Ferraria (Armor Trims) & Melhorias',
    shortSign: 'COL 16 MOLDES',
    category: 'Todas as demais categorias necessárias',
    description: '10 Níveis: Molde Netherita, Silence/Sentry, Ward/Eye, Spire/Snout, Flow/Bolt 1.21, Tide/Rib, Wild/Dune, Coast/Wayfinder, Raiser/Shaper e Host/Vex.',
    icon: 'textures/items/netherite_upgrade_smithing_template',
    shulkerColor: 'minecraft:purple_shulker_box',
    levels: [
      {
        level: 1,
        name: 'Molde de Melhoria para Netherita (Netherite Upgrade)',
        shortName: 'UPGRADE NETHER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE NETHERITA',
          subcategory: 'Molde de Ferraria: Melhoria Netherita',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Moldes de Netherita',
          shulkerItems: [
            { id: 'minecraft:netherite_upgrade_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:netherite_upgrade_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'INSUMOS NETHER',
          subcategory: 'Barras de Netherita & Diamantes p/ Clonar',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Insumos de Melhoria',
          shulkerItems: [
            { id: 'minecraft:netherite_ingot', count: 64 },
            { id: 'minecraft:diamond', count: 64 },
            { id: 'minecraft:netherrack', count: 64 },
          ],
          rawItems64x: ['minecraft:netherite_ingot', 'minecraft:diamond', 'minecraft:netherrack'],
        },
      },
      {
        level: 2,
        name: 'Moldes do Silêncio (Silence) & Sentinela (Sentry)',
        shortName: 'SILENCE/SENTRY',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE SILENCIO',
          subcategory: 'Molde do Silêncio (Raridade Máxima Ancient City)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Molde Silence',
          shulkerItems: [
            { id: 'minecraft:silence_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:silence_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE SENTINELA',
          subcategory: 'Molde da Sentinela (Posto Pillager)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Molde Sentry',
          shulkerItems: [
            { id: 'minecraft:sentry_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:sentry_armor_trim_smithing_template'],
        },
      },
      {
        level: 3,
        name: 'Moldes da Proteção (Ward) & Olho (Eye)',
        shortName: 'WARD & EYE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE PROTECAO',
          subcategory: 'Molde Ward (Cidade Ancestral)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Molde Ward',
          shulkerItems: [
            { id: 'minecraft:ward_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:ward_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE DO OLHO',
          subcategory: 'Molde do Olho (Fortaleza Stronghold)',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Molde Eye',
          shulkerItems: [
            { id: 'minecraft:eye_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:eye_armor_trim_smithing_template'],
        },
      },
      {
        level: 4,
        name: 'Moldes do Pináculo (Spire) & Focinho (Snout)',
        shortName: 'SPIRE & SNOUT',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE PINACULO',
          subcategory: 'Molde do Pináculo (End City)',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Molde Spire',
          shulkerItems: [
            { id: 'minecraft:spire_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:spire_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE FOCINHO',
          subcategory: 'Molde do Focinho (Bastião Piglin)',
          shulkerBoxColor: 'minecraft:black_shulker_box',
          shulkerBoxName: 'Shulker: Molde Snout',
          shulkerItems: [
            { id: 'minecraft:snout_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:snout_armor_trim_smithing_template'],
        },
      },
      {
        level: 5,
        name: 'Moldes das Câmaras de Teste 1.21 (Fluxo e Parafuso / Flow & Bolt)',
        shortName: 'FLOW & BOLT 1.21',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE FLUXO',
          subcategory: 'Molde Fluxo (Trial Chambers 1.21)',
          shulkerBoxColor: 'minecraft:light_blue_shulker_box',
          shulkerBoxName: 'Shulker: Molde Flow 1.21',
          shulkerItems: [
            { id: 'minecraft:flow_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:flow_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE PARAFUSO',
          subcategory: 'Molde Parafuso (Trial Chambers 1.21)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Molde Bolt 1.21',
          shulkerItems: [
            { id: 'minecraft:bolt_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:bolt_armor_trim_smithing_template'],
        },
      },
      {
        level: 6,
        name: 'Moldes da Maré (Tide) & Costela (Rib)',
        shortName: 'TIDE & RIB',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE DA MARE',
          subcategory: 'Molde da Maré (Monumento do Oceano)',
          shulkerBoxColor: 'minecraft:cyan_shulker_box',
          shulkerBoxName: 'Shulker: Molde Tide',
          shulkerItems: [
            { id: 'minecraft:tide_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:tide_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE COSTELA',
          subcategory: 'Molde da Costela (Fortaleza do Nether)',
          shulkerBoxColor: 'minecraft:red_shulker_box',
          shulkerBoxName: 'Shulker: Molde Rib',
          shulkerItems: [
            { id: 'minecraft:rib_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:rib_armor_trim_smithing_template'],
        },
      },
      {
        level: 7,
        name: 'Moldes Selvagem (Wild) & Duna (Dune)',
        shortName: 'WILD & DUNE',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE SELVAGEM',
          subcategory: 'Molde Selvagem (Templo da Selva)',
          shulkerBoxColor: 'minecraft:green_shulker_box',
          shulkerBoxName: 'Shulker: Molde Wild',
          shulkerItems: [
            { id: 'minecraft:wild_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:wild_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE DA DUNA',
          subcategory: 'Molde da Duna (Pirâmide do Deserto)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Molde Dune',
          shulkerItems: [
            { id: 'minecraft:dune_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:dune_armor_trim_smithing_template'],
        },
      },
      {
        level: 8,
        name: 'Moldes Costa (Coast) & Guia (Wayfinder)',
        shortName: 'COAST & WAYFIND',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE DA COSTA',
          subcategory: 'Molde da Costa (Navio Naufragado)',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Molde Coast',
          shulkerItems: [
            { id: 'minecraft:coast_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:coast_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE DO GUIA',
          subcategory: 'Molde do Guia (Ruínas da Trilha Arqueológica)',
          shulkerBoxColor: 'minecraft:orange_shulker_box',
          shulkerBoxName: 'Shulker: Molde Wayfinder',
          shulkerItems: [
            { id: 'minecraft:wayfinder_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:wayfinder_armor_trim_smithing_template'],
        },
      },
      {
        level: 9,
        name: 'Moldes Criador (Raiser) & Moldador (Shaper)',
        shortName: 'RAISER & SHAPER',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE CRIADOR',
          subcategory: 'Molde Criador (Arqueologia)',
          shulkerBoxColor: 'minecraft:yellow_shulker_box',
          shulkerBoxName: 'Shulker: Molde Raiser',
          shulkerItems: [
            { id: 'minecraft:raiser_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:raiser_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE MOLDADOR',
          subcategory: 'Molde Moldador (Arqueologia)',
          shulkerBoxColor: 'minecraft:blue_shulker_box',
          shulkerBoxName: 'Shulker: Molde Shaper',
          shulkerItems: [
            { id: 'minecraft:shaper_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:shaper_armor_trim_smithing_template'],
        },
      },
      {
        level: 10,
        name: 'Moldes Anfitrião (Host) & Vex da Mansão da Floresta',
        shortName: 'HOST & VEX',
        chestLeft: {
          chestIndex: 1,
          signTitle: 'MOLDE ANFITRIAO',
          subcategory: 'Molde do Anfitrião (Host - Ruínas da Trilha)',
          shulkerBoxColor: 'minecraft:purple_shulker_box',
          shulkerBoxName: 'Shulker: Molde Host',
          shulkerItems: [
            { id: 'minecraft:host_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:host_armor_trim_smithing_template'],
        },
        chestRight: {
          chestIndex: 2,
          signTitle: 'MOLDE DO VEX',
          subcategory: 'Molde do Vex (Mansão da Floresta Woodland)',
          shulkerBoxColor: 'minecraft:gray_shulker_box',
          shulkerBoxName: 'Shulker: Molde Vex',
          shulkerItems: [
            { id: 'minecraft:vex_armor_trim_smithing_template', count: 64 },
          ],
          rawItems64x: ['minecraft:vex_armor_trim_smithing_template'],
        },
      },
    ],
  },
];

const PT_BR_ITEM_DICTIONARY: Record<string, string> = {
  ancient_debris: 'Detrito Ancestral',
  netherite_scrap: 'Fragmento de Netherita',
  netherite_ingot: 'Barra de Netherita',
  netherite_block: 'Bloco de Netherita',
  diamond: 'Diamante',
  diamond_block: 'Bloco de Diamante',
  diamond_ore: 'Minério de Diamante',
  deepslate_diamond_ore: 'Diamante de Ardósia',
  raw_iron: 'Ferro Bruto',
  raw_iron_block: 'Bloco de Ferro Bruto',
  iron_ingot: 'Barra de Ferro',
  iron_block: 'Bloco de Ferro',
  iron_nugget: 'Pepita de Ferro',
  raw_gold: 'Ouro Bruto',
  raw_gold_block: 'Bloco de Ouro Bruto',
  gold_ingot: 'Barra de Ouro',
  gold_block: 'Bloco de Ouro',
  gold_nugget: 'Pepita de Ouro',
  emerald: 'Esmeralda',
  emerald_block: 'Bloco de Esmeralda',
  lapis_lazuli: 'Lápis-Lazúli',
  lapis_block: 'Bloco de Lápis-Lazúli',
  redstone: 'Pó de Redstone',
  redstone_block: 'Bloco de Redstone',
  coal: 'Carvão Mineral',
  coal_block: 'Bloco de Carvão',
  charcoal: 'Carvão Vegetal',
  quartz: 'Quartzo do Nether',
  quartz_block: 'Bloco de Quartzo',
  amethyst_shard: 'Fragmento de Ametista',
  amethyst_block: 'Bloco de Ametista',
  amethyst_cluster: 'Aglomerado de Ametista',
  budding_amethyst: 'Ametista Germinante',
  raw_copper: 'Cobre Bruto',
  raw_copper_block: 'Bloco de Cobre Bruto',
  copper_ingot: 'Barra de Cobre',
  copper_block: 'Bloco de Cobre',
  cut_copper: 'Cobre Lapidado',
  chiseled_copper: 'Cobre Talhado 1.21',
  copper_grate: 'Grelha de Cobre 1.21',
  copper_bulb: 'Lâmpada de Cobre 1.21',
  copper_door: 'Porta de Cobre 1.21',
  copper_trapdoor: 'Alçapão de Cobre 1.21',
  obsidian: 'Obsidiana',
  crying_obsidian: 'Obsidiana Chorosa',
  respawn_anchor: 'Âncora de Renascimento',
  glowstone: 'Pedra Luminosa',
  glowstone_dust: 'Pó de Pedra Luminosa',
  shroomlight: 'Cogumeluz',
  netherrack: 'Netherrack',
  soul_sand: 'Areia das Almas',
  soul_soil: 'Terra das Almas',
  magma: 'Bloco de Magma',
  end_stone: 'Pedra do End',
  end_stone_bricks: 'Tijolos do End',
  purpur_block: 'Bloco de Purpur',
  purpur_pillar: 'Pilar de Purpur',
  end_rod: 'Haste do End',
  end_crystal: 'Cristal do End',
  ender_pearl: 'Pérola do Ender',
  ender_eye: 'Olho do Fim',
  eye_of_ender: 'Olho do Fim',
  chorus_fruit: 'Fruta do Coro',
  popped_chorus_fruit: 'Fruta do Coro Estourada',
  piston: 'Pistão',
  sticky_piston: 'Pistão Grudento',
  observer: 'Observador',
  hopper: 'Funil (Hopper)',
  crafter: 'Bancada Automática (Crafter 1.21)',
  dispenser: 'Ejetor',
  dropper: 'Liberador',
  repeater: 'Repetidor de Redstone',
  comparator: 'Comparador de Redstone',
  redstone_torch: 'Tocha de Redstone',
  redstone_lamp: 'Lâmpada de Redstone',
  lever: 'Alavanca',
  daylight_detector: 'Sensor de Luz Solar',
  target: 'Bloco de Alvo',
  sculk_sensor: 'Sensor de Sculk',
  calibrated_sculk_sensor: 'Sensor de Sculk Calibrado',
  golden_rail: 'Trilho Elétrico',
  rail: 'Trilho Comum',
  detector_rail: 'Trilho Detector',
  activator_rail: 'Trilho Ativador',
  minecart: 'Carrinho de Mina',
  chest_minecart: 'Carrinho com Baú',
  hopper_minecart: 'Carrinho com Funil',
  tnt_minecart: 'Carrinho com TNT',
  tnt: 'Dinamite (TNT)',
  slime: 'Bloco de Slime',
  honey_block: 'Bloco de Mel',
  honeycomb_block: 'Bloco de Favo de Mel',
  honeycomb: 'Favo de Mel',
  netherite_pickaxe: 'Picareta de Netherita',
  diamond_pickaxe: 'Picareta de Diamante',
  iron_pickaxe: 'Picareta de Ferro',
  netherite_axe: 'Machado de Netherita',
  diamond_axe: 'Machado de Diamante',
  netherite_shovel: 'Pá de Netherita',
  diamond_shovel: 'Pá de Diamante',
  netherite_hoe: 'Enxada de Netherita',
  diamond_hoe: 'Enxada de Diamante',
  netherite_sword: 'Espada de Netherita',
  diamond_sword: 'Espada de Diamante',
  mace: 'Clava 1.21 (Mace)',
  heavy_core: 'Núcleo Pesado 1.21',
  breeze_rod: 'Vara de Breeze 1.21',
  wind_charge: 'Carga de Vento 1.21',
  trident: 'Tridente Real',
  bow: 'Arco de Precisão',
  crossbow: 'Besta (Crossbow)',
  arrow: 'Flechas',
  shield: 'Escudo Protetor',
  totem_of_undying: 'Totem da Imortalidade',
  elytra: 'Élitros (Asas)',
  firework_rocket: 'Foguete de Propulsão',
  netherite_helmet: 'Capacete de Netherita',
  netherite_chestplate: 'Peitoral de Netherita',
  netherite_leggings: 'Calças de Netherita',
  netherite_boots: 'Botas de Netherita',
  diamond_helmet: 'Capacete de Diamante',
  diamond_chestplate: 'Peitoral de Diamante',
  diamond_leggings: 'Calças de Diamante',
  diamond_boots: 'Botas de Diamante',
  turtle_helmet: 'Casco de Tartaruga',
  wolf_armor: 'Armadura de Lobo',
  enchanted_book: 'Livro Encantado Nv. Máx',
  experience_bottle: 'Frasco de Experiência (XP)',
  enchanted_golden_apple: 'Maçã Dourada Encantada (Notch)',
  golden_apple: 'Maçã Dourada',
  golden_carrot: 'Cenoura Dourada',
  cooked_beef: 'Bife Assado',
  cooked_porkchop: 'Costeleta de Porco Assada',
  cooked_mutton: 'Carneiro Assado',
  cooked_chicken: 'Frango Assado',
  cooked_salmon: 'Salmão Assado',
  bread: 'Pão Fresco',
  nether_star: 'Estrela do Nether',
  beacon: 'Sinalizador (Beacon)',
  conduit: 'Conduto Marinho',
  heart_of_the_sea: 'Coração do Mar',
  nautilus_shell: 'Concha de Náutilo',
  dragon_egg: 'Ovo do Dragão',
  dragon_head: 'Cabeça do Dragão',
  dragon_breath: 'Bafo do Dragão',
  shulker_shell: 'Casco de Shulker',
  trial_key: 'Chave de Desafio 1.21',
  ominous_trial_key: 'Chave Sinistra 1.21',
  ominous_bottle: 'Frasco Sinistro 1.21',
  netherite_upgrade_smithing_template: 'Molde de Melhoria Netherita',
};

export function formatStorageItemPtBr(rawId: string, ench?: [string, number][], existingName?: string): string {
  if (existingName && existingName.trim().length > 0) {
    return existingName.trim();
  }
  const clean = String(rawId || '').replace(/^minecraft:/, '').toLowerCase();
  let base = PT_BR_ITEM_DICTIONARY[clean];

  if (!base) {
    if (clean.endsWith('_armor_trim_smithing_template')) {
      const trim = clean.replace('_armor_trim_smithing_template', '').toUpperCase();
      base = `Molde de Armadura (${trim})`;
    } else if (clean.endsWith('_pottery_sherd')) {
      const sherd = clean.replace('_pottery_sherd', '').replace(/_/g, ' ').toUpperCase();
      base = `Óstraco Arqueológico (${sherd})`;
    } else if (clean.startsWith('music_disc_')) {
      const disc = clean.replace('music_disc_', '').toUpperCase();
      base = `Disco Musical (${disc})`;
    } else {
      base = clean
        .replace(/^waxed_/, 'Encerado ')
        .replace(/weathered_/g, 'Desgastado ')
        .replace(/oxidized_/g, 'Oxidado ')
        .replace(/exposed_/g, 'Exposto ')
        .replace(/polished_/g, 'Polido ')
        .replace(/chiseled_/g, 'Talhado ')
        .replace(/cracked_/g, 'Rachado ')
        .replace(/mossy_/g, 'Musgoso ')
        .replace(/stripped_/g, 'Descascado ')
        .replace(/_stairs$/g, ' (Escada)')
        .replace(/_slab$/g, ' (Laje)')
        .replace(/_wall$/g, ' (Muro)')
        .replace(/_fence_gate$/g, ' (Portão)')
        .replace(/_fence$/g, ' (Cerca)')
        .replace(/_door$/g, ' (Porta)')
        .replace(/_trapdoor$/g, ' (Alçapão)')
        .replace(/_planks$/g, ' (Tábuas)')
        .replace(/_log$/g, ' (Tronco)')
        .replace(/_wood$/g, ' (Madeira)')
        .replace(/_leaves$/g, ' (Folhas)')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }
  }

  if (ench && ench.length > 0) {
    const enchSummary = ench
      .slice(0, 2)
      .map(([k, v]) => `${k.replace(/^minecraft:/, '').replace(/_/g, ' ')} ${v}`)
      .join(' + ');
    return `${base} [${enchSummary}]`;
  }
  return base;
}

function getIdealStackSizeForStorage(rawId: string, requestedCount?: number, hasEnch?: boolean): number {
  const clean = String(rawId || '').replace(/^minecraft:/, '').toLowerCase();
  if (hasEnch) return 1;
  if (
    clean.endsWith('_sword') ||
    clean.endsWith('_pickaxe') ||
    clean.endsWith('_axe') ||
    clean.endsWith('_shovel') ||
    clean.endsWith('_hoe') ||
    clean.endsWith('_helmet') ||
    clean.endsWith('_chestplate') ||
    clean.endsWith('_leggings') ||
    clean.endsWith('_boots') ||
    clean === 'elytra' ||
    clean === 'trident' ||
    clean === 'mace' ||
    clean === 'bow' ||
    clean === 'crossbow' ||
    clean === 'shield' ||
    clean === 'totem_of_undying' ||
    clean === 'fishing_rod' ||
    clean === 'shears' ||
    clean === 'flint_and_steel' ||
    clean === 'brush' ||
    clean === 'spyglass' ||
    clean === 'enchanted_book' ||
    clean === 'potion' ||
    clean === 'splash_potion' ||
    clean === 'lingering_potion' ||
    clean === ' saddle' ||
    clean === 'saddle' ||
    clean === 'wolf_armor' ||
    clean.endsWith('_horse_armor') ||
    clean.startsWith('music_disc_') ||
    clean.endsWith('_minecart') ||
    clean === 'minecart' ||
    clean.endsWith('_boat') ||
    clean.endsWith('_raft') ||
    (clean.endsWith('_bucket') && clean !== 'bucket')
  ) {
    return 1;
  }
  if (
    clean === 'ender_pearl' ||
    clean === 'snowball' ||
    clean === 'egg' ||
    clean === 'bucket' ||
    clean === 'honey_bottle' ||
    clean.endsWith('_sign') ||
    clean.endsWith('_hanging_sign') ||
    clean.endsWith('_banner')
  ) {
    return 16;
  }
  if (requestedCount && requestedCount > 0) {
    return Math.min(64, requestedCount);
  }
  return 64;
}

const ALL_16_COLORS = [
  'white',
  'light_gray',
  'gray',
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'cyan',
  'light_blue',
  'blue',
  'purple',
  'magenta',
  'pink',
] as const;

const WOOD_TYPES_SURVIVAL = [
  'oak',
  'spruce',
  'birch',
  'jungle',
  'acacia',
  'dark_oak',
  'mangrove',
  'cherry',
  'pale_oak',
] as const;

const ALL_19_TRIM_TEMPLATES = [
  'minecraft:netherite_upgrade_smithing_template',
  'minecraft:sentry_armor_trim_smithing_template',
  'minecraft:dune_armor_trim_smithing_template',
  'minecraft:coast_armor_trim_smithing_template',
  'minecraft:wild_armor_trim_smithing_template',
  'minecraft:ward_armor_trim_smithing_template',
  'minecraft:eye_armor_trim_smithing_template',
  'minecraft:vex_armor_trim_smithing_template',
  'minecraft:tide_armor_trim_smithing_template',
  'minecraft:snout_armor_trim_smithing_template',
  'minecraft:rib_armor_trim_smithing_template',
  'minecraft:spire_armor_trim_smithing_template',
  'minecraft:wayfinder_armor_trim_smithing_template',
  'minecraft:shaper_armor_trim_smithing_template',
  'minecraft:silence_armor_trim_smithing_template',
  'minecraft:raiser_armor_trim_smithing_template',
  'minecraft:host_armor_trim_smithing_template',
  'minecraft:flow_armor_trim_smithing_template',
  'minecraft:bolt_armor_trim_smithing_template',
];

const ALL_23_POTTERY_SHERDS = [
  'minecraft:angler_pottery_sherd',
  'minecraft:archer_pottery_sherd',
  'minecraft:arms_up_pottery_sherd',
  'minecraft:blade_pottery_sherd',
  'minecraft:brewer_pottery_sherd',
  'minecraft:burn_pottery_sherd',
  'minecraft:danger_pottery_sherd',
  'minecraft:explorer_pottery_sherd',
  'minecraft:flow_pottery_sherd',
  'minecraft:friend_pottery_sherd',
  'minecraft:guster_pottery_sherd',
  'minecraft:heart_pottery_sherd',
  'minecraft:heartbreak_pottery_sherd',
  'minecraft:howl_pottery_sherd',
  'minecraft:miner_pottery_sherd',
  'minecraft:mourner_pottery_sherd',
  'minecraft:plenty_pottery_sherd',
  'minecraft:prize_pottery_sherd',
  'minecraft:scrape_pottery_sherd',
  'minecraft:sheaf_pottery_sherd',
  'minecraft:shelter_pottery_sherd',
  'minecraft:skull_pottery_sherd',
  'minecraft:snort_pottery_sherd',
];

const ALL_19_MUSIC_DISCS = [
  'minecraft:music_disc_13',
  'minecraft:music_disc_cat',
  'minecraft:music_disc_blocks',
  'minecraft:music_disc_chirp',
  'minecraft:music_disc_far',
  'minecraft:music_disc_mall',
  'minecraft:music_disc_mellohi',
  'minecraft:music_disc_stal',
  'minecraft:music_disc_strad',
  'minecraft:music_disc_ward',
  'minecraft:music_disc_11',
  'minecraft:music_disc_wait',
  'minecraft:music_disc_otherside',
  'minecraft:music_disc_5',
  'minecraft:music_disc_pigstep',
  'minecraft:music_disc_relic',
  'minecraft:music_disc_creator',
  'minecraft:music_disc_creator_music_box',
  'minecraft:music_disc_precipice',
];

function deriveSurvivalFamilyVariations(seedIds: string[]): string[] {
  const expanded: string[] = [];
  const addId = (id: string) => {
    const full = id.startsWith('minecraft:') ? id : `minecraft:${id}`;
    if (!expanded.includes(full)) expanded.push(full);
  };

  for (const raw of seedIds) {
    addId(raw);
    const clean = raw.replace(/^minecraft:/, '');

    // 1. Expansão automática das famílias de Madeiras (Troncos, Tábuas, Escadas, Lajes, Cercas, Portões, Portas, Alçapões, Botões, Placas, Barcos)
    for (const w of WOOD_TYPES_SURVIVAL) {
      if (clean.startsWith(`${w}_`) || clean === `stripped_${w}_log` || clean === `stripped_${w}_wood`) {
        if (clean.includes('log') || clean.includes('wood') || clean.includes('leaves') || clean.includes('sapling')) {
          addId(`${w}_log`);
          addId(`stripped_${w}_log`);
          addId(`${w}_wood`);
          addId(`stripped_${w}_wood`);
          addId(`${w}_leaves`);
          if (w === 'mangrove') addId('mangrove_propagule');
          else addId(`${w}_sapling`);
        }
        addId(`${w}_planks`);
        addId(`${w}_stairs`);
        addId(`${w}_slab`);
        addId(`${w}_fence`);
        addId(`${w}_fence_gate`);
        addId(`${w}_door`);
        addId(`${w}_trapdoor`);
        addId(`${w}_pressure_plate`);
        addId(`${w}_button`);
        addId(`${w}_sign`);
        addId(`${w}_hanging_sign`);
        if (w !== 'pale_oak') {
          addId(`${w}_boat`);
          addId(`${w}_chest_boat`);
        }
      }
    }

    // Bambu e Madeiras do Nether (Crimson & Warped)
    for (const nw of ['crimson', 'warped'] as const) {
      if (clean.startsWith(`${nw}_`) || clean === `stripped_${nw}_stem` || clean === `stripped_${nw}_hyphae`) {
        addId(`${nw}_stem`);
        addId(`stripped_${nw}_stem`);
        addId(`${nw}_hyphae`);
        addId(`stripped_${nw}_hyphae`);
        addId(`${nw}_planks`);
        addId(`${nw}_stairs`);
        addId(`${nw}_slab`);
        addId(`${nw}_fence`);
        addId(`${nw}_fence_gate`);
        addId(`${nw}_door`);
        addId(`${nw}_trapdoor`);
        addId(`${nw}_pressure_plate`);
        addId(`${nw}_button`);
        addId(`${nw}_sign`);
        addId(`${nw}_hanging_sign`);
        addId(`${nw}_fungus`);
        addId(`${nw}_roots`);
        addId(`${nw}_nylium`);
      }
    }

    if (clean.startsWith('bamboo_')) {
      [
        'bamboo',
        'bamboo_block',
        'stripped_bamboo_block',
        'bamboo_planks',
        'bamboo_mosaic',
        'bamboo_stairs',
        'bamboo_mosaic_stairs',
        'bamboo_slab',
        'bamboo_mosaic_slab',
        'bamboo_fence',
        'bamboo_fence_gate',
        'bamboo_door',
        'bamboo_trapdoor',
        'bamboo_pressure_plate',
        'bamboo_button',
        'bamboo_sign',
        'bamboo_hanging_sign',
        'bamboo_raft',
        'bamboo_chest_raft',
        'scaffolding',
      ].forEach(addId);
    }

    // 2. Expansão de Pedras, Rochas, Ardósia Profunda (Deepslate), Tufo 1.21, Pedra Negra, Quartzo, Arenito e Prismarinho
    if (clean.includes('tuff')) {
      [
        'tuff',
        'tuff_stairs',
        'tuff_slab',
        'tuff_wall',
        'chiseled_tuff',
        'polished_tuff',
        'polished_tuff_stairs',
        'polished_tuff_slab',
        'polished_tuff_wall',
        'tuff_bricks',
        'tuff_brick_stairs',
        'tuff_brick_slab',
        'tuff_brick_wall',
        'chiseled_tuff_bricks',
      ].forEach(addId);
    }
    if (clean.includes('deepslate') && !clean.endsWith('_ore')) {
      [
        'deepslate',
        'cobbled_deepslate',
        'cobbled_deepslate_stairs',
        'cobbled_deepslate_slab',
        'cobbled_deepslate_wall',
        'polished_deepslate',
        'polished_deepslate_stairs',
        'polished_deepslate_slab',
        'polished_deepslate_wall',
        'deepslate_bricks',
        'deepslate_brick_stairs',
        'deepslate_brick_slab',
        'deepslate_brick_wall',
        'cracked_deepslate_bricks',
        'deepslate_tiles',
        'deepslate_tile_stairs',
        'deepslate_tile_slab',
        'deepslate_tile_wall',
        'cracked_deepslate_tiles',
        'chiseled_deepslate',
        'reinforced_deepslate',
      ].forEach(addId);
    }
    if (clean.includes('blackstone')) {
      [
        'blackstone',
        'blackstone_stairs',
        'blackstone_slab',
        'blackstone_wall',
        'gilded_blackstone',
        'polished_blackstone',
        'polished_blackstone_stairs',
        'polished_blackstone_slab',
        'polished_blackstone_wall',
        'polished_blackstone_button',
        'polished_blackstone_pressure_plate',
        'chiseled_polished_blackstone',
        'polished_blackstone_bricks',
        'polished_blackstone_brick_stairs',
        'polished_blackstone_brick_slab',
        'polished_blackstone_brick_wall',
        'cracked_polished_blackstone_bricks',
      ].forEach(addId);
    }

    // 3. Expansão automática das 16 Cores para Lã, Tapete, Terracota, Concreto, Vidro, Cama, Estandarte, Vela, Corante e Shulker Box
    const colorSuffixes = [
      '_wool',
      '_carpet',
      '_terracotta',
      '_glazed_terracotta',
      '_concrete',
      '_concrete_powder',
      '_stained_glass',
      '_stained_glass_pane',
      '_bed',
      '_banner',
      '_candle',
      '_shulker_box',
      '_dye',
      '_bundle',
    ];
    for (const suf of colorSuffixes) {
      if (clean.endsWith(suf)) {
        for (const c of ALL_16_COLORS) {
          addId(`${c}${suf}`);
        }
      }
    }

    // 4. Expansão completa de Cobre 1.21 (Normal, Exposto, Desgastado, Oxidado + Encerados)
    if (clean.includes('copper')) {
      const prefixes = ['', 'exposed_', 'weathered_', 'oxidized_', 'waxed_', 'waxed_exposed_', 'waxed_weathered_', 'waxed_oxidized_'];
      for (const p of prefixes) {
        addId(p ? `${p}copper` : 'copper_block');
        addId(`${p}cut_copper`);
        addId(`${p}cut_copper_stairs`);
        addId(`${p}cut_copper_slab`);
        addId(`${p}chiseled_copper`);
        addId(`${p}copper_grate`);
        addId(`${p}copper_bulb`);
        addId(`${p}copper_door`);
        addId(`${p}copper_trapdoor`);
      }
      addId('raw_copper');
      addId('raw_copper_block');
      addId('copper_ingot');
      addId('copper_ore');
      addId('deepslate_copper_ore');
      addId('lightning_rod');
      addId('spyglass');
      addId('brush');
    }

    // 5. Moldes de Ferraria (19 Trims), Óstracos (23 Sherds) e Discos Musicais (19 Discos)
    if (clean.endsWith('_smithing_template')) {
      ALL_19_TRIM_TEMPLATES.forEach(addId);
    }
    if (clean.endsWith('_pottery_sherd') || clean === 'decorated_pot') {
      addId('decorated_pot');
      ALL_23_POTTERY_SHERDS.forEach(addId);
    }
    if (clean.startsWith('music_disc_')) {
      ALL_19_MUSIC_DISCS.forEach(addId);
    }

    // 6. Corais Vivos e Mortos (5 Cores × Bloco, Planta, Leque)
    if (clean.includes('coral')) {
      for (const cType of ['tube', 'brain', 'bubble', 'fire', 'horn']) {
        addId(`${cType}_coral_block`);
        addId(`${cType}_coral`);
        addId(`${cType}_coral_fan`);
        addId(`dead_${cType}_coral_block`);
        addId(`dead_${cType}_coral`);
        addId(`dead_${cType}_coral_fan`);
      }
      addId('sea_pickle');
      addId('sponge');
      addId('wet_sponge');
    }
  }

  return expanded;
}

function expandChestToFull27ShulkerSlots(
  colIndex: number,
  levelNum: number,
  chest: ColumnDoubleChestSpec,
  usedPrimaryKeys?: Set<string>
): ColumnDoubleChestSpec {
  const shulkerCode = `SHULKER_C${String(colIndex).padStart(2, '0')}_L${String(levelNum).padStart(2, '0')}_${chest.chestIndex}`;

  // 1. Coleta os candidatos do baú garantindo nomes em PT-BR e pilha máxima (64x, 16x ou 1x)
  const baseTemplates: ShulkerContentItem[] = [];
  for (const item of chest.shulkerItems || []) {
    const hasEnch = Boolean(item.ench && item.ench.length > 0);
    const idealCount = getIdealStackSizeForStorage(item.id, item.count, hasEnch);
    baseTemplates.push({
      id: item.id,
      count: idealCount,
      name: formatStorageItemPtBr(item.id, item.ench, item.name),
      ...(item.ench ? { ench: item.ench } : {}),
    });
  }

  for (const rawId of chest.rawItems64x || []) {
    if (!baseTemplates.some((b) => b.id === rawId)) {
      const idealCount = getIdealStackSizeForStorage(rawId, 64, false);
      baseTemplates.push({
        id: rawId,
        count: idealCount,
        name: formatStorageItemPtBr(rawId),
      });
    }
  }

  if (baseTemplates.length === 0) {
    baseTemplates.push({
      id: 'minecraft:diamond_block',
      count: 64,
      name: 'Bloco de Diamante',
    });
  }

  // 2. Seleciona O ÚNICO ITEM deste Baú Duplo (garantindo que todas as Shulker Boxes deste Baú Duplo tenham 27/27 slots desse MESMO item!)
  let primaryTemplate = baseTemplates[0];
  if (usedPrimaryKeys) {
    for (const candidate of baseTemplates) {
      const key = `${candidate.id}|${candidate.name || ''}|${candidate.ench ? JSON.stringify(candidate.ench) : ''}`;
      if (!usedPrimaryKeys.has(key)) {
        primaryTemplate = candidate;
        usedPrimaryKeys.add(key);
        break;
      }
    }
  }

  // 3. Preenche TODOS os 27 slots da Shulker Box com EXATAMENTE O MESMO ITEM!
  const full27Items: ShulkerContentItem[] = [];
  for (let slot = 0; slot < 27; slot++) {
    full27Items.push({
      id: primaryTemplate.id,
      count: primaryTemplate.count,
      name: primaryTemplate.name,
      ...(primaryTemplate.ench ? { ench: primaryTemplate.ench } : {}),
    });
  }

  const singleItemLabel = primaryTemplate.name || formatStorageItemPtBr(primaryTemplate.id, primaryTemplate.ench);

  return {
    ...chest,
    signTitle: singleItemLabel,
    shulkerCode,
    shulkerBoxName: `Shulker 27/27: ${singleItemLabel}`,
    subcategory: `10 Baús Duplos Iguais · 54 Shulkers 27/27 de ${singleItemLabel} (${primaryTemplate.count}x)`,
    shulkerItems: full27Items,
    rawItems64x: [primaryTemplate.id],
  };
}

export const MEGA_STORAGE_COLUMNS_16: StorageColumnSpec[] = RAW_MEGA_STORAGE_COLUMNS_16.map((col) => {
  const usedInColumn = new Set<string>();
  return {
    ...col,
    colNumber: col.index,
    title: col.name,
    shortName: col.shortSign,
    levels: col.levels.map((lvl) => ({
      ...lvl,
      categoryTheme: lvl.name,
      chestLeft: expandChestToFull27ShulkerSlots(col.index, lvl.level, lvl.chestLeft, usedInColumn),
      chestRight: expandChestToFull27ShulkerSlots(col.index, lvl.level, lvl.chestRight, usedInColumn),
    })),
  };
});


