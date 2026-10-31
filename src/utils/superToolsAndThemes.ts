import {
  MEGA_STORAGE_COLUMNS_16,
  type StorageColumnSpec,
  type ColumnLevelSpec,
  type ColumnDoubleChestSpec,
  type ShulkerContentItem
} from './storageColumnsSpecs';

export {
  MEGA_STORAGE_COLUMNS_16,
  type StorageColumnSpec,
  type ColumnLevelSpec,
  type ColumnDoubleChestSpec,
  type ShulkerContentItem
};

export interface ArchitecturalModel {
  id: 'quartzo_moderno' | 'fortaleza_medieval' | 'bunker_subterraneo' | 'santuario_nether' | 'galeria_end';
  name: string;
  shortName: string;
  subtitle: string;
  paletteDesc: string;
  floorBlock: string;
  pillarBlock: string;
  lightBlock: string;
  roofBlock: string;
  accentBlock: string;
  wallSignBlock: string;
  signColorPrefix: string;
  badgeColor: string;
}

export const ARCHITECTURAL_MODELS: ArchitecturalModel[] = [
  {
    id: 'quartzo_moderno',
    name: '1. Quartzo Moderno High-Tech (Modelo Original Mantido)',
    shortName: 'Quartzo Moderno',
    subtitle: 'Original High-Tech',
    paletteDesc: 'Quartzo liso + Lanternas do Mar embutidas + Colunas de Quartzo + Placas de Bétula com escrita dourada e esmeralda.',
    floorBlock: 'minecraft:smooth_quartz',
    pillarBlock: 'minecraft:quartz_pillar',
    lightBlock: 'minecraft:sea_lantern',
    roofBlock: 'minecraft:glass',
    accentBlock: 'minecraft:chiseled_quartz_block',
    wallSignBlock: 'minecraft:birch_wall_sign',
    signColorPrefix: '§6§l',
    badgeColor: 'emerald',
  },
  {
    id: 'fortaleza_medieval',
    name: '2. Fortaleza Medieval & Abeto Rústico (Estilo Castelo Nórdico)',
    shortName: 'Castelo Medieval',
    subtitle: 'Castelo Nórdico',
    paletteDesc: 'Tijolos de Ardósia (Deepslate Tiles) + Troncos de Abeto Descascado + Lâmpadas de Coguluz (Shroomlight) & Glowstone + Placas de Abeto.',
    floorBlock: 'minecraft:deepslate_tiles',
    pillarBlock: 'minecraft:stripped_spruce_log',
    lightBlock: 'minecraft:shroomlight',
    roofBlock: 'minecraft:spruce_planks',
    accentBlock: 'minecraft:glowstone',
    wallSignBlock: 'minecraft:spruce_wall_sign',
    signColorPrefix: '§e§l',
    badgeColor: 'amber',
  },
  {
    id: 'bunker_subterraneo',
    name: '3. Bunker Subterrâneo & Ardósia Escura (Cofre Anão)',
    shortName: 'Bunker Subterrâneo',
    subtitle: 'Cofre Anão',
    paletteDesc: 'Ardósia Profunda Polida + Tijolos Escuros Cinzelados + Iluminação Industrial + Placas de Carvalho Escuro.',
    floorBlock: 'minecraft:polished_deepslate',
    pillarBlock: 'minecraft:chiseled_deepslate',
    lightBlock: 'minecraft:sea_lantern',
    roofBlock: 'minecraft:tinted_glass',
    accentBlock: 'minecraft:deepslate_bricks',
    wallSignBlock: 'minecraft:dark_oak_wall_sign',
    signColorPrefix: '§b§l',
    badgeColor: 'sky',
  },
  {
    id: 'santuario_nether',
    name: '4. Santuário Nether & Pedra Negra Dourada (Fortaleza Piglin)',
    shortName: 'Santuário Nether',
    subtitle: 'Fortaleza Piglin',
    paletteDesc: 'Tijolos de Pedra Negra Polida (Polished Blackstone) + Ouro Dourado + Shroomlight + Obsidiana Chorosa + Placas Carmesim.',
    floorBlock: 'minecraft:polished_blackstone_bricks',
    pillarBlock: 'minecraft:gilded_blackstone',
    lightBlock: 'minecraft:shroomlight',
    roofBlock: 'minecraft:crying_obsidian',
    accentBlock: 'minecraft:gold_block',
    wallSignBlock: 'minecraft:crimson_wall_sign',
    signColorPrefix: '§6§l',
    badgeColor: 'rose',
  },
  {
    id: 'galeria_end',
    name: '5. Galeria Galáctica The End & Purpur (Futurista Místico)',
    shortName: 'Galeria The End',
    subtitle: 'Futurista Místico',
    paletteDesc: 'Tijolos de Pedra do End + Colunas de Purpur + Obsidiana Chorosa Cósmica + Hastes de Iluminação + Placas Distorcidas.',
    floorBlock: 'minecraft:end_stone_bricks',
    pillarBlock: 'minecraft:purpur_pillar',
    lightBlock: 'minecraft:sea_lantern',
    roofBlock: 'minecraft:crying_obsidian',
    accentBlock: 'minecraft:purpur_block',
    wallSignBlock: 'minecraft:warped_wall_sign',
    signColorPrefix: '§d§l',
    badgeColor: 'purple',
  },
];

export interface PotionChestSpec {
  index: number;
  category: string;
  itemId: string;
  signLabel: string;
  ptName: string;
}

export const MEGA_POTION_HALL_30_CHESTS: PotionChestSpec[] = [
  // Frascos, Bases e Combustíveis (6 Baús Duplos)
  { index: 1, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:glass_bottle', signLabel: 'FRASCO VIDRO', ptName: 'Frasco de Vidro' },
  { index: 2, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:potion', signLabel: 'GARRAFA AGUA', ptName: 'Garrafa de Água / Poção Base' },
  { index: 3, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:nether_wart', signLabel: 'FUNGO NETHER', ptName: 'Fungo do Nether' },
  { index: 4, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:blaze_powder', signLabel: 'PO DE BLAZE', ptName: 'Pó de Blaze' },
  { index: 5, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:blaze_rod', signLabel: 'VARA DE BLAZE', ptName: 'Vara de Blaze' },
  { index: 6, category: 'Frascos, Bases e Combustíveis', itemId: 'minecraft:fermented_spider_eye', signLabel: 'OLHO FERMENT.', ptName: 'Olho de Aranha Fermentado' },

  // Modificadores de Potência, Duração e Arremesso (4 Baús Duplos)
  { index: 7, category: 'Modificadores', itemId: 'minecraft:redstone', signLabel: 'REDSTONE +TEMPO', ptName: 'Redstone (+Tempo)' },
  { index: 8, category: 'Modificadores', itemId: 'minecraft:glowstone_dust', signLabel: 'GLOWSTONE NV2', ptName: 'Pó de Pedra Luminosa (Nv. 2)' },
  { index: 9, category: 'Modificadores', itemId: 'minecraft:gunpowder', signLabel: 'POLVORA SPLASH', ptName: 'Pólvora (Splash)' },
  { index: 10, category: 'Modificadores', itemId: 'minecraft:dragon_breath', signLabel: 'BAFO DRAGAO', ptName: 'Bafo do Dragão' },

  // Ingredientes de Efeitos Clássicos (10 Baús Duplos)
  { index: 11, category: 'Ingredientes Clássicos', itemId: 'minecraft:glistering_melon_slice', signLabel: 'MELANCIA OURO', ptName: 'Melancia Reluzente' },
  { index: 12, category: 'Ingredientes Clássicos', itemId: 'minecraft:ghast_tear', signLabel: 'LAGRIMA GHAST', ptName: 'Lágrima de Ghast' },
  { index: 13, category: 'Ingredientes Clássicos', itemId: 'minecraft:sugar', signLabel: 'ACUCAR VELOC.', ptName: 'Açúcar (Velocidade)' },
  { index: 14, category: 'Ingredientes Clássicos', itemId: 'minecraft:magma_cream', signLabel: 'CREME MAGMA', ptName: 'Creme de Magma' },
  { index: 15, category: 'Ingredientes Clássicos', itemId: 'minecraft:golden_carrot', signLabel: 'CENOURA DOUR.', ptName: 'Cenoura Dourada' },
  { index: 16, category: 'Ingredientes Clássicos', itemId: 'minecraft:rabbit_foot', signLabel: 'PE DE COELHO', ptName: 'Pé de Coelho' },
  { index: 17, category: 'Ingredientes Clássicos', itemId: 'minecraft:phantom_membrane', signLabel: 'MEMB. FANTASMA', ptName: 'Membrana de Fantasma' },
  { index: 18, category: 'Ingredientes Clássicos', itemId: 'minecraft:spider_eye', signLabel: 'OLHO ARANHA', ptName: 'Olho de Aranha' },
  { index: 19, category: 'Ingredientes Clássicos', itemId: 'minecraft:pufferfish', signLabel: 'BAIACU RESPIR.', ptName: 'Baiacu (Respiração)' },
  { index: 20, category: 'Ingredientes Clássicos', itemId: 'minecraft:turtle_scute', signLabel: 'ESCAMA TARTAR.', ptName: 'Escama de Tartaruga' },

  // Ingredientes de Poções 1.21 (4 Baús Duplos)
  { index: 21, category: 'Ingredientes 1.21', itemId: 'minecraft:breeze_rod', signLabel: 'VARA BREEZE', ptName: 'Vara de Breeze / Vórtice' },
  { index: 22, category: 'Ingredientes 1.21', itemId: 'minecraft:slime', signLabel: 'BLOCO SLIME', ptName: 'Bloco de Slime' },
  { index: 23, category: 'Ingredientes 1.21', itemId: 'minecraft:web', signLabel: 'TEIA ARANHA', ptName: 'Teia de Aranha' },
  { index: 24, category: 'Ingredientes 1.21', itemId: 'minecraft:stone', signLabel: 'PEDRA INFEST.', ptName: 'Bloco de Pedra (Infestação)' },

  // Poções Prontas, Antídotos e Utensílios (6 Baús Duplos)
  { index: 25, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:splash_potion', signLabel: 'POCAO SPLASH', ptName: 'Poções Splash Arremessáveis' },
  { index: 26, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:lingering_potion', signLabel: 'POCAO NUVEM', ptName: 'Poções Prolongadas (Nuvem)' },
  { index: 27, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:milk_bucket', signLabel: 'BALDE LEITE', ptName: 'Balde de Leite (Antídoto)' },
  { index: 28, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:honey_bottle', signLabel: 'GARRAFA MEL', ptName: 'Garrafa de Mel' },
  { index: 29, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:brewing_stand', signLabel: 'SUPORTE POCAO', ptName: 'Suportes de Poções' },
  { index: 30, category: 'Poções Prontas e Utensílios', itemId: 'minecraft:cauldron', signLabel: 'CALDEIRAO', ptName: 'Caldeirões de Alquimia' },
];

export interface EnchantedBookChestSpec {
  index: number;
  enchId: string;
  maxLevel: number;
  category: string;
  signLabel: string;
  ptName: string;
  villagerTrade: string;
}

export const MEGA_ENCHANT_HALL_42_BOOKS: EnchantedBookChestSpec[] = [
  // Universais & Durabilidade (2)
  { index: 1, enchId: 'mending', maxLevel: 1, category: 'Universal & Reparo', signLabel: 'REMENDO I', ptName: 'Remendo I (Mending)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 2, enchId: 'unbreaking', maxLevel: 3, category: 'Universal & Reparo', signLabel: 'INQUEBRAVEL III', ptName: 'Inquebrável III (Unbreaking)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Armaduras: Proteções & Espinhos (5)
  { index: 3, enchId: 'protection', maxLevel: 4, category: 'Armaduras', signLabel: 'PROTECAO IV', ptName: 'Proteção IV (Protection)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 4, enchId: 'fire_protection', maxLevel: 4, category: 'Armaduras', signLabel: 'PROT. FOGO IV', ptName: 'Proteção contra Fogo IV', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 5, enchId: 'blast_protection', maxLevel: 4, category: 'Armaduras', signLabel: 'PROT. EXPLOS IV', ptName: 'Proteção contra Explosões IV', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 6, enchId: 'projectile_protection', maxLevel: 4, category: 'Armaduras', signLabel: 'PROT. PROJET IV', ptName: 'Proteção contra Projéteis IV', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 7, enchId: 'thorns', maxLevel: 3, category: 'Armaduras', signLabel: 'ESPINHOS III', ptName: 'Espinhos III (Thorns)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Botas, Calças & Capacete (7)
  { index: 8, enchId: 'feather_falling', maxLevel: 4, category: 'Botas & Mobilidade', signLabel: 'PESO PENA IV', ptName: 'Peso Pena IV (Feather Falling)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 9, enchId: 'depth_strider', maxLevel: 3, category: 'Botas & Mobilidade', signLabel: 'PASSOS PROF III', ptName: 'Passos Profundos III (Depth Strider)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 10, enchId: 'frost_walker', maxLevel: 2, category: 'Botas & Mobilidade', signLabel: 'PASSOS GELO II', ptName: 'Passos Gélidos II (Frost Walker)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 11, enchId: 'soul_speed', maxLevel: 3, category: 'Botas & Mobilidade', signLabel: 'VELOC. ALMAS III', ptName: 'Velocidade das Almas III (Soul Speed)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 12, enchId: 'swift_sneak', maxLevel: 3, category: 'Calças & Furtividade', signLabel: 'PASSOS RAPID III', ptName: 'Passos Rápidos III (Swift Sneak)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 13, enchId: 'respiration', maxLevel: 3, category: 'Capacete & Oceano', signLabel: 'RESPIRACAO III', ptName: 'Respiração III (Respiration)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 14, enchId: 'aqua_affinity', maxLevel: 1, category: 'Capacete & Oceano', signLabel: 'AFIN. AQUATICA I', ptName: 'Afinidade Aquática I (Aqua Affinity)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Espadas & Combate Corpo-a-Corpo (6)
  { index: 15, enchId: 'sharpness', maxLevel: 5, category: 'Espadas & Machados', signLabel: 'AFIACAO V', ptName: 'Afiação V (Sharpness)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 16, enchId: 'smite', maxLevel: 5, category: 'Espadas & Machados', signLabel: 'JULGAMENTO V', ptName: 'Julgamento V (Smite)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 17, enchId: 'bane_of_arthropods', maxLevel: 5, category: 'Espadas & Machados', signLabel: 'RUINA ARTROP. V', ptName: 'Ruína dos Artrópodes V', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 18, enchId: 'looting', maxLevel: 3, category: 'Espadas', signLabel: 'PILHAGEM III', ptName: 'Pilhagem / Saque III (Looting)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 19, enchId: 'fire_aspect', maxLevel: 2, category: 'Espadas & Clava', signLabel: 'ASP. FLAMEJ. II', ptName: 'Aspecto Flamejante II (Fire Aspect)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 20, enchId: 'knockback', maxLevel: 2, category: 'Espadas', signLabel: 'REPULSAO II', ptName: 'Repulsão II (Knockback)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Ferramentas: Picareta, Machado, Pá e Enxada (3)
  { index: 21, enchId: 'efficiency', maxLevel: 5, category: 'Ferramentas', signLabel: 'EFICIENCIA V', ptName: 'Eficiência V (Efficiency)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 22, enchId: 'fortune', maxLevel: 3, category: 'Ferramentas', signLabel: 'FORTUNA III', ptName: 'Fortuna III (Fortune)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 23, enchId: 'silk_touch', maxLevel: 1, category: 'Ferramentas', signLabel: 'TOQUE SUAVE I', ptName: 'Toque Suave I (Silk Touch)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Clava 1.21 (Mace) (3)
  { index: 24, enchId: 'density', maxLevel: 5, category: 'Clava 1.21 (Mace)', signLabel: 'DENSIDADE V', ptName: 'Densidade V (Density - Clava 1.21)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 25, enchId: 'breach', maxLevel: 4, category: 'Clava 1.21 (Mace)', signLabel: 'BRECHA IV', ptName: 'Brecha IV (Breach - Clava 1.21)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 26, enchId: 'wind_burst', maxLevel: 3, category: 'Clava 1.21 (Mace)', signLabel: 'RAJADA VENTO III', ptName: 'Rajada de Vento III (Wind Burst 1.21)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Arco (4)
  { index: 27, enchId: 'power', maxLevel: 5, category: 'Arco', signLabel: 'FORCA V (ARCO)', ptName: 'Força V (Power)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 28, enchId: 'punch', maxLevel: 2, category: 'Arco', signLabel: 'IMPACTO II', ptName: 'Impacto II (Punch)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 29, enchId: 'flame', maxLevel: 1, category: 'Arco', signLabel: 'CHAMA I (ARCO)', ptName: 'Chama I (Flame)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 30, enchId: 'infinity', maxLevel: 1, category: 'Arco', signLabel: 'INFINIDADE I', ptName: 'Infinidade I (Infinity)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Tridente (4)
  { index: 31, enchId: 'impaling', maxLevel: 5, category: 'Tridente', signLabel: 'EMPALAMENTO V', ptName: 'Empalamento V (Impaling)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 32, enchId: 'loyalty', maxLevel: 3, category: 'Tridente', signLabel: 'LEALDADE III', ptName: 'Lealdade III (Loyalty)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 33, enchId: 'riptide', maxLevel: 3, category: 'Tridente', signLabel: 'CORRENTEZA III', ptName: 'Correnteza III (Riptide)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 34, enchId: 'channeling', maxLevel: 1, category: 'Tridente', signLabel: 'CONDUTIVIDADE I', ptName: 'Condutividade I (Channeling)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Besta / Crossbow (3)
  { index: 35, enchId: 'multishot', maxLevel: 1, category: 'Besta (Crossbow)', signLabel: 'TIRO MULTIPLO I', ptName: 'Tiro Múltiplo I (Multishot)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 36, enchId: 'quick_charge', maxLevel: 3, category: 'Besta (Crossbow)', signLabel: 'CARGA RAPIDA III', ptName: 'Carga Rápida III (Quick Charge)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 37, enchId: 'piercing', maxLevel: 4, category: 'Besta (Crossbow)', signLabel: 'PERFURACAO IV', ptName: 'Perfuração IV (Piercing)', villagerTrade: '1 Esmeralda + 1 Livro' },

  // Vara de Pesca, Especiais & Livro Supremo (5)
  { index: 38, enchId: 'luck_of_the_sea', maxLevel: 3, category: 'Vara de Pesca', signLabel: 'SORTE DO MAR III', ptName: 'Sorte do Mar III (Luck of the Sea)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 39, enchId: 'lure', maxLevel: 3, category: 'Vara de Pesca', signLabel: 'ISCA III', ptName: 'Isca III (Lure)', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 40, enchId: 'vanishing_curse', maxLevel: 1, category: 'Especiais', signLabel: 'MALD. DESAPAREC', ptName: 'Maldição do Desaparecimento I', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 41, enchId: 'binding_curse', maxLevel: 1, category: 'Especiais', signLabel: 'MALD. LIGACAO I', ptName: 'Maldição da Ligação I', villagerTrade: '1 Esmeralda + 1 Livro' },
  { index: 42, enchId: 'omni_book', maxLevel: 5, category: 'Livro Mestre Combinado', signLabel: 'LIVRO SUPREMO', ptName: 'Livro Supremo Combinado (Mending+Unb3+Max)', villagerTrade: '1 Esmeralda + 1 Livro' },
];

export const MEGA_ENCHANT_HALL_18_SUPPLIES: PotionChestSpec[] = [
  { index: 43, category: 'Materiais de Encantamento & XP', itemId: 'minecraft:lapis_lazuli', signLabel: 'LAPIS-LAZULI', ptName: 'Lápis-Lazúli (Packs 64x)' },
  { index: 44, category: 'Materiais de Encantamento & XP', itemId: 'minecraft:lapis_block', signLabel: 'BLOCO DE LAPIS', ptName: 'Bloco de Lápis-Lazúli' },
  { index: 45, category: 'Materiais de Encantamento & XP', itemId: 'minecraft:experience_bottle', signLabel: 'FRASCO DE XP', ptName: 'Frasco de Experiência (XP)' },
  { index: 46, category: 'Moedas de Troca (Villagers 1x)', itemId: 'minecraft:emerald', signLabel: 'ESMERALDA TROCA', ptName: 'Esmeraldas (Troca 1x Villager)' },
  { index: 47, category: 'Moedas de Troca (Villagers 1x)', itemId: 'minecraft:emerald_block', signLabel: 'BLOCO ESMERALDA', ptName: 'Bloco de Esmeralda' },
  { index: 48, category: 'Livros & Estantes Nv. 30', itemId: 'minecraft:book', signLabel: 'LIVRO COMUM', ptName: 'Livros para Encantar e Trocar' },
  { index: 49, category: 'Livros & Estantes Nv. 30', itemId: 'minecraft:bookshelf', signLabel: 'ESTANTE LIVROS', ptName: 'Estante de Livros (Nível 30)' },
  { index: 50, category: 'Livros & Estantes Nv. 30', itemId: 'minecraft:chiseled_bookshelf', signLabel: 'ESTANTE ESCULP.', ptName: 'Estante de Livros Esculpida' },
  { index: 51, category: 'Bancadas de Encantar & Forja', itemId: 'minecraft:enchanting_table', signLabel: 'MESA ENCANTAM.', ptName: 'Mesa de Encantamentos' },
  { index: 52, category: 'Bancadas de Encantar & Forja', itemId: 'minecraft:anvil', signLabel: 'BIGORNA NOVA', ptName: 'Bigorna Nova (Combinar Livros)' },
  { index: 53, category: 'Bancadas de Encantar & Forja', itemId: 'minecraft:grindstone', signLabel: 'REBOLO DESENC.', ptName: 'Rebolo (Remover Encantamentos)' },
  { index: 54, category: 'Bancadas de Encantar & Forja', itemId: 'minecraft:smithing_table', signLabel: 'MESA FERRARIA', ptName: 'Mesa de Ferraria (Smithing Table)' },
  { index: 55, category: 'Bancadas de Encantar & Forja', itemId: 'minecraft:lectern', signLabel: 'ATRIL VILLAGER', ptName: 'Atril de Bibliotecário (Lectern)' },
  { index: 56, category: 'Upgrade & Reparo de Equipamentos', itemId: 'minecraft:netherite_upgrade_smithing_template', signLabel: 'MOLDE NETHERITA', ptName: 'Molde de Melhoria Netherita' },
  { index: 57, category: 'Upgrade & Reparo de Equipamentos', itemId: 'minecraft:netherite_ingot', signLabel: 'BARRA NETHERITA', ptName: 'Barra de Netherita (Reparo/Upgrade)' },
  { index: 58, category: 'Upgrade & Reparo de Equipamentos', itemId: 'minecraft:diamond', signLabel: 'DIAMANTES', ptName: 'Diamante (Reparo/Duplicar Moldes)' },
  { index: 59, category: 'Upgrade & Reparo de Equipamentos', itemId: 'minecraft:amethyst_shard', signLabel: 'FRAG. AMETISTA', ptName: 'Fragmento de Ametista' },
  { index: 60, category: 'Upgrade & Reparo de Equipamentos', itemId: 'minecraft:name_tag', signLabel: 'ETIQUETA NOME', ptName: 'Etiqueta de Nome (Name Tag)' },
];

export function generateMartelo50x50ItemJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.50',
      'minecraft:item': {
        description: {
          identifier: 'survivalmenu:martelo_50x50',
          menu_category: { category: 'equipment' },
        },
        components: {
          'minecraft:max_stack_size': 1,
          'minecraft:icon': { texture: 'martelo_50x50_icon' },
          'minecraft:display_name': {
            value: '§6§lMartelo Titã 50x50 §r§e(Auto-Baús + Shift=Camadas)',
          },
          'minecraft:glint': true,
          'minecraft:hand_equipped': true,
        },
      },
    },
    null,
    2
  );
}

export function generateDestruidorChunkItemJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.50',
      'minecraft:item': {
        description: {
          identifier: 'survivalmenu:destruidor_chunk',
          menu_category: { category: 'equipment' },
        },
        components: {
          'minecraft:max_stack_size': 64,
          'minecraft:icon': { texture: 'destruidor_chunk_icon' },
          'minecraft:display_name': {
            value: '§c§lDestruidor de Chunk 16x16 §r§7(Até Y:-63 + Auto-Baús)',
          },
          'minecraft:glint': true,
          'minecraft:hand_equipped': true,
        },
      },
    },
    null,
    2
  );
}

export function generateQuebradorBedrockItemJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.50',
      'minecraft:item': {
        description: {
          identifier: 'survivalmenu:quebrador_bedrock',
          menu_category: { category: 'equipment' },
        },
        components: {
          'minecraft:max_stack_size': 1,
          'minecraft:icon': { texture: 'quebrador_bedrock_icon' },
          'minecraft:display_name': {
            value: '§d§lQuebrador de Bedrock §r§5(Clique=Drop | Shift=Teto 3x3)',
          },
          'minecraft:glint': true,
          'minecraft:hand_equipped': true,
        },
      },
    },
    null,
    2
  );
}

export function generateMarteloRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shapeless': {
        description: { identifier: 'survivalmenu:martelo_50x50_recipe' },
        tags: ['crafting_table', 'inventory'],
        ingredients: [
          { item: 'minecraft:cobblestone', count: 1 },
          { item: 'minecraft:iron_ingot', count: 1 },
        ],
        result: { item: 'survivalmenu:martelo_50x50', count: 1 },
      },
    },
    null,
    2
  );
}

export function generateDestruidorChunkRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shapeless': {
        description: { identifier: 'survivalmenu:destruidor_chunk_recipe' },
        tags: ['crafting_table', 'inventory'],
        ingredients: [
          { item: 'minecraft:tnt', count: 1 },
          { item: 'minecraft:iron_pickaxe', count: 1 },
        ],
        result: { item: 'survivalmenu:destruidor_chunk', count: 1 },
      },
    },
    null,
    2
  );
}

export function generateQuebradorBedrockRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shapeless': {
        description: { identifier: 'survivalmenu:quebrador_bedrock_recipe' },
        tags: ['crafting_table', 'inventory'],
        ingredients: [
          { item: 'minecraft:obsidian', count: 1 },
          { item: 'minecraft:iron_pickaxe', count: 1 },
        ],
        result: { item: 'survivalmenu:quebrador_bedrock', count: 1 },
      },
    },
    null,
    2
  );
}

export function generateMultiplierFastRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shapeless': {
        description: { identifier: 'survivalmenu:lodestone_fast_multiplier_recipe' },
        tags: ['crafting_table', 'inventory'],
        ingredients: [
          { item: 'minecraft:cobblestone', count: 1 },
          { item: 'minecraft:stick', count: 1 },
        ],
        result: { item: 'minecraft:lodestone', count: 1 },
      },
    },
    null,
    2
  );
}

export function generateMultiplierBenchRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shaped': {
        description: { identifier: 'survivalmenu:lodestone_bench_multiplier_recipe' },
        tags: ['crafting_table'],
        pattern: ['IRI', 'RCR', 'IRI'],
        key: {
          I: { item: 'minecraft:iron_ingot' },
          R: { item: 'minecraft:redstone' },
          C: { item: 'minecraft:chest' },
        },
        result: { item: 'minecraft:lodestone', count: 2 },
      },
    },
    null,
    2
  );
}

export interface SurvivalKitSlotSpec {
  slot: number;
  id: string;
  count: number;
  labelPt: string;
  shortIcon: string;
  enchantedMax?: boolean;
}

export interface SurvivalKitSpec {
  index: number;
  id: string;
  name: string;
  shortSign: string;
  category: 'Farm Bedrock' | 'Redstone & Villagers' | 'Combate & Bosses' | 'Mineração & Exploração' | 'Construção & Alquimia';
  badge: string;
  iconTexture: string;
  summary: string;
  highlights: string[];
  slots: SurvivalKitSlotSpec[];
}

// Exatamente os 43 slots preenchidos (+ 11 vazios = 54 slots) do Large Chest da imagem anexada pelo usuário:
export const EXACT_PHOTO_KIT_54_SLOTS: SurvivalKitSlotSpec[] = [
  // Linha 1 (Slots 0 a 8): 7x 64 Pedra + 2x 64 Vidro
  { slot: 0, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 1, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 2, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 3, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 4, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 5, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 6, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 7, id: 'minecraft:glass', count: 64, labelPt: 'Bloco de Vidro', shortIcon: '🪟' },
  { slot: 8, id: 'minecraft:glass', count: 64, labelPt: 'Bloco de Vidro', shortIcon: '🪟' },

  // Linha 2 (Slots 9 a 17): 7x 64 Pedra + 2x 1 Balde de Lava
  { slot: 9, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 10, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 11, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 12, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 13, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 14, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 15, id: 'minecraft:stone', count: 64, labelPt: 'Pedra Lisa / Bloco Sólido', shortIcon: '🪨' },
  { slot: 16, id: 'minecraft:lava_bucket', count: 1, labelPt: 'Balde de Lava', shortIcon: '🪣🔥' },
  { slot: 17, id: 'minecraft:lava_bucket', count: 1, labelPt: 'Balde de Lava', shortIcon: '🪣🔥' },

  // Linha 3 (Slots 18 a 26): 4x 64 Obsidiana + 1x 48 Obsidiana + 4x 1 Balde de Neve Fofa
  { slot: 18, id: 'minecraft:obsidian', count: 64, labelPt: 'Obsidiana', shortIcon: '🟪' },
  { slot: 19, id: 'minecraft:obsidian', count: 64, labelPt: 'Obsidiana', shortIcon: '🟪' },
  { slot: 20, id: 'minecraft:obsidian', count: 64, labelPt: 'Obsidiana', shortIcon: '🟪' },
  { slot: 21, id: 'minecraft:obsidian', count: 64, labelPt: 'Obsidiana', shortIcon: '🟪' },
  { slot: 22, id: 'minecraft:obsidian', count: 48, labelPt: 'Obsidiana (48x)', shortIcon: '🟪' },
  { slot: 23, id: 'minecraft:powder_snow_bucket', count: 1, labelPt: 'Balde de Neve Fofa', shortIcon: '🪣❄️' },
  { slot: 24, id: 'minecraft:powder_snow_bucket', count: 1, labelPt: 'Balde de Neve Fofa', shortIcon: '🪣❄️' },
  { slot: 25, id: 'minecraft:powder_snow_bucket', count: 1, labelPt: 'Balde de Neve Fofa', shortIcon: '🪣❄️' },
  { slot: 26, id: 'minecraft:powder_snow_bucket', count: 1, labelPt: 'Balde de Neve Fofa', shortIcon: '🪣❄️' },

  // Linha 4 (Slots 27 a 35): 8 Pistões, 8 Observadores, 8 Bancadas, 4 Baús, 6 Funis, 4 Ejetores, 1 Tridente, 2 Baldes de Água
  { slot: 27, id: 'minecraft:piston', count: 8, labelPt: 'Pistão (8x)', shortIcon: '⚙️' },
  { slot: 28, id: 'minecraft:observer', count: 8, labelPt: 'Observador (8x)', shortIcon: '👀' },
  { slot: 29, id: 'minecraft:crafting_table', count: 8, labelPt: 'Bancada de Trabalho (8x)', shortIcon: '🛠️' },
  { slot: 30, id: 'minecraft:chest', count: 4, labelPt: 'Baú (4x)', shortIcon: '📦' },
  { slot: 31, id: 'minecraft:hopper', count: 6, labelPt: 'Funil (6x)', shortIcon: '⏬' },
  { slot: 32, id: 'minecraft:dispenser', count: 4, labelPt: 'Ejetor / Dispenser (4x)', shortIcon: '🎯' },
  { slot: 33, id: 'minecraft:trident', count: 1, labelPt: 'Tridente (Matadouro / Trident Killer)', shortIcon: '🔱', enchantedMax: true },
  { slot: 34, id: 'minecraft:water_bucket', count: 1, labelPt: 'Balde de Água', shortIcon: '🪣💧' },
  { slot: 35, id: 'minecraft:water_bucket', count: 1, labelPt: 'Balde de Água', shortIcon: '🪣💧' },

  // Linha 5 (Slots 36 a 42): 2x 64 Lajes de Pedra, 1 Comparador, 2 Repetidores, 16 Tochas Redstone, 32 Pós Redstone, 2 Alavancas
  { slot: 36, id: 'minecraft:stone_slab', count: 64, labelPt: 'Laje de Pedra (64x)', shortIcon: '➖' },
  { slot: 37, id: 'minecraft:stone_slab', count: 64, labelPt: 'Laje de Pedra (64x)', shortIcon: '➖' },
  { slot: 38, id: 'minecraft:comparator', count: 1, labelPt: 'Comparador de Redstone (1x)', shortIcon: '🔺' },
  { slot: 39, id: 'minecraft:repeater', count: 2, labelPt: 'Repetidor de Redstone (2x)', shortIcon: '⏩' },
  { slot: 40, id: 'minecraft:redstone_torch', count: 16, labelPt: 'Tocha de Redstone (16x)', shortIcon: '🕯️' },
  { slot: 41, id: 'minecraft:redstone', count: 32, labelPt: 'Pó de Redstone (32x)', shortIcon: '🔴' },
  { slot: 42, id: 'minecraft:lever', count: 2, labelPt: 'Alavanca (2x)', shortIcon: '🕹️' },
];

export const SURVIVAL_KITS_CATALOG: SurvivalKitSpec[] = [
  {
    index: 1,
    id: 'kit_foto_farm_ouro_xp',
    name: 'Kit #1 [EXATO DA FOTO 📸]: Farm de Ouro e XP c/ Portal + Trident Killer',
    shortSign: 'KIT 01 FARM OURO FOTO',
    category: 'Farm Bedrock',
    badge: 'IDÊNTICO À FOTO (43 SLOTS)',
    iconTexture: 'textures/items/trident',
    summary:
      'Reproduz slot por slot exatamente o Baú Duplo (Large Chest) da sua imagem: 14 packs de Pedra (896x), 2 packs de Vidro (128x), 2 Baldes de Lava, 304 Obsidianas (4x64 + 48), 4 Baldes de Neve Fofa, 8 Pistões, 8 Observadores, 8 Bancadas, 4 Baús, 6 Funis, 4 Ejetores, 1 Tridente, 2 Baldes de Água, 2 packs de Lajes, 1 Comparador, 2 Repetidores, 16 Tochas de Redstone, 32 Redstones e 2 Alavancas!',
    highlights: [
      '14x64 Pedra (896) + 2x64 Vidro (128) + 2x64 Laje de Pedra (128)',
      '4x64 + 48 Obsidiana (304) + 2 Baldes Lava + 4 Neve Fofa + 2 Água',
      '8 Pistões + 8 Observadores + 8 Bancadas + 4 Baús + 6 Funis + 4 Ejetores + 1 Tridente',
      '1 Comparador + 2 Repetidores + 16 Tochas Redstone + 32 Redstone + 2 Alavancas',
    ],
    slots: EXACT_PHOTO_KIT_54_SLOTS,
  },
  {
    index: 2,
    id: 'kit_farm_ouro_xp_pro_4_portais',
    name: 'Kit #2: Mega Farm de Ouro & XP PRO (4 Portais Gigantes + Auto-Sorter)',
    shortSign: 'KIT 02 FARM OURO PRO',
    category: 'Farm Bedrock',
    badge: '4 PORTAIS 21x21 + SEPARADOR',
    iconTexture: 'textures/items/gold_ingot',
    summary:
      'Versão expandida da Farm de Ouro e XP com 1.024 Obsidianas para 4 Portais Gigantes, 4 Tridentes Encantados (Empalamento V), 64 Funis, 64 Baús, 32 Fornalhas Potentes para derreter espadas de ouro e Espada Pilhagem III!',
    highlights: [
      '16x64 Obsidiana (1.024) + 16x64 Pedra Lisa + 4x64 Vidro',
      '4 Tridentes Max + Espada Netherita Pilhagem III (Triplica Ouro/XP)',
      '64 Funis + 64 Baús + 32 Comparadores + 32 Repetidores + 32 Tochas + 32 Altos-Fornos',
    ],
    slots: [],
  },
  {
    index: 3,
    id: 'kit_trident_killer_universal',
    name: 'Kit #3: Trident Killer Universal (Matadouro Automático p/ Qualquer Farm)',
    shortSign: 'KIT 03 TRIDENT KILLER',
    category: 'Farm Bedrock',
    badge: '4 TRIDENTES + CIRCUITO COMPLETO',
    iconTexture: 'textures/items/prismarine_shard',
    summary:
      'Tudo para montar até 4 Matadouros Automáticos de Tridente (Trident Killers) para Farms de Mobs, Raid, Ouro, Guardião e Blaze, incluindo 4 Tridentes Empalamento V e Espada Pilhagem III.',
    highlights: [
      '16 Pistões + 16 Observadores + 16 Tochas de Redstone + 8 Alavancas',
      '4 Tridentes (Empalamento V + Lealdade III + Inquebrável III + Remendo)',
      'Espada de Netherita c/ Pilhagem III + 32 Funis + 32 Baús + 2x64 Vidro + 2x64 Lajes',
    ],
    slots: [],
  },
  {
    index: 4,
    id: 'kit_mega_farm_ferro_bedrock',
    name: 'Kit #4: Mega Farm de Ferro Bedrock (20 Aldeões + Camas + Bancadas + Lava)',
    shortSign: 'KIT 04 FARM DE FERRO',
    category: 'Farm Bedrock',
    badge: '20 CAMAS + 20 FLECHEIROS + OVOS',
    iconTexture: 'textures/items/iron_ingot',
    summary:
      'Todos os materiais exatos para construir a Mega Farm de Ferro oficial do Minecraft Bedrock: 20 Camas, 20 Mesas de Arquearia, 20 Ovos de Aldeão, Placas, Baldes de Lava/Água, Funis e Blocos Sólidos.',
    highlights: [
      '20 Camas + 20 Mesas de Arquearia (Fletching Table) + 20 Ovos de Villager',
      '10x64 Tijolos de Pedra + 4x64 Vidro + 4x64 Lajes + 2x64 Folhas (Anti-Spawn)',
      '4 Baldes de Lava + 4 Baldes de Água + 32 Placas + 16 Funis + 16 Baús + 2 Sino',
    ],
    slots: [],
  },
  {
    index: 5,
    id: 'kit_farm_creeper_polvora_mobs',
    name: 'Kit #5: Farm de Creeper (Pólvora Infinita) & Mobs Gerais (Torre Escura)',
    shortSign: 'KIT 05 FARM CREEPER',
    category: 'Farm Bedrock',
    badge: 'ALÇAPÕES + BOTÕES + TAPETES + GATOS',
    iconTexture: 'textures/items/gunpowder',
    summary:
      'Materiais completos para Farm de Pólvora (Creeper) e Mob Trap de múltiplos andares: milhares de blocos sólidos, alçapões, botões, tapetes, andaimes, gelo compactado e Trident Killer.',
    highlights: [
      '16x64 Ardósia Polida + 8x64 Alçapões + 8x64 Botões + 4x64 Tapetes',
      '4x64 Andaimes + 2x64 Gelo Compactado + 4 Baldes de Água + 2 Baldes de Lava',
      'Trident Killer incluso (4 Pistões, 4 Observadores, 1 Tridente, 16 Funis, 16 Baús)',
    ],
    slots: [],
  },
  {
    index: 6,
    id: 'kit_farm_raid_totem_esmeralda',
    name: 'Kit #6: Farm de Raid (Invasão), Totem da Imortalidade & Esmeraldas',
    shortSign: 'KIT 06 FARM DE RAID',
    category: 'Farm Bedrock',
    badge: 'FRASCOS SINISTROS 1.21 + TRIDENTE',
    iconTexture: 'textures/items/totem',
    summary:
      'Kit completo para construir Farm de Raid na 1.21+: inclui Frascos Sinistros (Ominous Bottle), 1 Cama, 1 Sino, Ovos de Aldeão/Saqueador, Folhas anti-spawn, Trident Killer e separador de Totens.',
    highlights: [
      '64 Frascos Sinistros (Ominous Bottle) + 16 Ovos de Aldeão + 4 Sinos + 4 Camas',
      '10x64 Blocos Sólidos + 6x64 Folhas de Carvalho + 4x64 Vidro + 4x64 Andaimes',
      'Trident Killer + 32 Funis + 32 Baús + 4 Baldes de Água + 2 Baldes de Lava',
    ],
    slots: [],
  },
  {
    index: 7,
    id: 'kit_farm_cana_bambu_melancia',
    name: 'Kit #7: Farm Automática de Cana-de-Açúcar, Bambu, Melancia & Abóbora',
    shortSign: 'KIT 07 FARMS AGRICOLAS',
    category: 'Farm Bedrock',
    badge: '64 PISTÕES + 64 OBSERVADORES + TRILHOS',
    iconTexture: 'textures/items/reeds',
    summary:
      'Construa farms automáticas zero-loss de Cana (papel para foguetes), Bambu (combustível infinito), Melancia e Abóbora com Carrinhos com Funil e Trilhos Elétricos.',
    highlights: [
      '64 Pistões + 64 Pistões Grudentos + 64 Observadores + 2x64 Redstone',
      '2x64 Trilhos Elétricos + 2x64 Trilhos Normais + 8 Carrinhos c/ Funil + 32 Tochas Redstone',
      '4x64 Mudas de Cana + 4x64 Bambus + 64 Sementes Melancia/Abóbora + 4x64 Lama/Areia',
    ],
    slots: [],
  },
  {
    index: 8,
    id: 'kit_redstone_auto_sorter',
    name: 'Kit #8: Mestre da Redstone & Separador Automático de Itens (Auto-Sorter)',
    shortSign: 'KIT 08 AUTO SORTER',
    category: 'Redstone & Villagers',
    badge: '256 FUNIS + 128 BAÚS + COMPARADORES',
    iconTexture: 'textures/items/comparator',
    summary:
      'Tudo para construir um Armazém 100% Automático com filtro de itens (ImpulseSV Auto-Sorter) e circuitos avançados de Redstone.',
    highlights: [
      '4x64 Funis (256) + 2x64 Baús (128) + 2x64 Baús com Armadilha (128)',
      '64 Comparadores + 64 Repetidores + 2x64 Tochas de Redstone + 4x64 Pó de Redstone',
      '64 Pistões Grudentos + 64 Pistões + 64 Observadores + 64 Liberadores + 64 Ejetores + 64 Blocos Slime/Mel',
    ],
    slots: [],
  },
  {
    index: 9,
    id: 'kit_trading_hall_cura_villager',
    name: 'Kit #9: Trading Hall & Cura de Villagers (1 Esmeralda no Survival Puro)',
    shortSign: 'KIT 09 TRADING HALL',
    category: 'Redstone & Villagers',
    badge: 'ATRIS + MAÇÃS DOURADAS + FRAQUEZA',
    iconTexture: 'textures/items/emerald',
    summary:
      'Monte sua própria Vila Comercial e sistema de Zumbificação/Cura no Survival: 64 Atris, 64 Bancadas de todas as profissões, 64 Maçãs Douradas, Poções de Fraqueza, Trilhos e Esmeraldas.',
    highlights: [
      '64 Atris (Lectern) + 64 Mesas de Ferraria + 64 Mesas de Arquearia + 64 Altos-Fornos',
      '2x64 Maçãs Douradas + 16 Poções Arremessáveis de Fraqueza + 64 Etiquetas (Name Tags)',
      '10x64 Esmeraldas + 10x64 Livros Normais + 64 Camas + 16 Ovos de Villager + 4 Ovos de Zumbi',
    ],
    slots: [],
  },
  {
    index: 10,
    id: 'kit_deus_combate_pvp_mace',
    name: 'Kit #10: Deus do Combate & PvP Supremo (Full Netherita Max + Clava 1.21)',
    shortSign: 'KIT 10 COMBATE PVP MAX',
    category: 'Combate & Bosses',
    badge: 'SET NETHERITA MAX + CLAVA + TOTENS',
    iconTexture: 'textures/items/netherite_sword',
    summary:
      'Equipamento definitivo de combate: Armadura Completa de Netherita Nv. Máximo, Espada, Machado, Arco, Besta, Tridente, Clava (Mace 1.21), Cargas de Vento, Maçãs Encantadas, Totens e Cristais do End.',
    highlights: [
      'Set Completo Netherita (Proteção IV, Inquebrável III, Remendo, Espinhos III)',
      'Espada Netherita Max + Clava 1.21 (Mace) Max + Arco Força V + Tridente Max',
      '8 Totens da Imortalidade + 2x64 Maçãs Douradas Encantadas + 2x64 Cargas de Vento + 64 Cristais do End',
    ],
    slots: [],
  },
  {
    index: 11,
    id: 'kit_minerador_supremo_netherite',
    name: 'Kit #11: Minerador Supremo & Escavação (Fortuna III + Toque Suave + Minérios)',
    shortSign: 'KIT 11 MINERADOR PRO',
    category: 'Mineração & Exploração',
    badge: '2 PICARETAS MAX + TNT + MINÉRIOS',
    iconTexture: 'textures/items/netherite_pickaxe',
    summary:
      'Kit completo de mineração pesada: Picareta Fortuna III, Picareta Toque Suave, Pá e Machado Eficiência V, Shulker Boxes, Ender Chest, TNT para Netherite e 64 Blocos de cada Minério precioso.',
    highlights: [
      'Picareta Netherita (Eficiência V + Fortuna III) + Picareta Netherita (Toque Suave)',
      'Pá Netherita Max + Machado Netherita Max + 8x64 TNT + 4x64 Tochas + 2x64 Escadas',
      '64 Blocos de Netherita + 64 Blocos de Diamante + 64 Esmeralda + 64 Ouro + 64 Ferro + 16 Moldes Netherita',
    ],
    slots: [],
  },
  {
    index: 12,
    id: 'kit_explorador_aereo_elytra',
    name: 'Kit #12: Explorador Aéreo Supremo (4 Élitros Max + 20 Packs de Foguetes + Shulkers)',
    shortSign: 'KIT 12 ELYTRA & VOO',
    category: 'Mineração & Exploração',
    badge: '4 ÉLITROS MAX + 1.280 FOGUETES',
    iconTexture: 'textures/items/elytra',
    summary:
      'Para viajar milhares de blocos sem preocupações: 4 Élitros encantados com Inquebrável III e Remendo, 20 packs de Foguetes de Artifício, 4 Ender Chests, 10 Caixas de Shulker e Totens.',
    highlights: [
      '4x Élitros Encantados (Inquebrável III + Remendo) + 4x Totens da Imortalidade',
      '20x64 Foguetes de Artifício (1.280x) + 4x64 Frascos de XP ( p/ Reparar Élitros)',
      '4 Baús do Fim (Ender Chest) + 10 Caixas de Shulker + 2x64 Cenouras Douradas + 2x64 Pérolas do Fim',
    ],
    slots: [],
  },
  {
    index: 13,
    id: 'kit_conquista_nether_bastiao',
    name: 'Kit #13: Conquista do Nether, Bastião Piglin & Fortaleza (Ouro + Âncora)',
    shortSign: 'KIT 13 NETHER & BASTIAO',
    category: 'Mineração & Exploração',
    badge: 'TROCAS PIGLIN + RESISTÊNCIA AO FOGO',
    iconTexture: 'textures/items/netherite_scrap',
    summary:
      'Domine o Nether sem morrer para lava ou Piglins Brutos: Capacete de Ouro Max, 640 Barras de Ouro para trocas, Âncoras de Renascimento, Pedra Luminosa, Obsidiana e Poções de Resistência ao Fogo.',
    highlights: [
      'Capacete de Ouro Encantado Max + 10x64 Barras de Ouro + 2x64 Blocos de Ouro',
      '4x64 Obsidiana + 4 Pederneiras + 16 Âncoras de Renascimento + 4x64 Pedra Luminosa',
      '8 Poções de Resistência ao Fogo (8:00) + 64 Camas / TNT p/ Detritos Ancestrais + 64 Moldes Netherita',
    ],
    slots: [],
  },
  {
    index: 14,
    id: 'kit_cacador_ender_dragon_end',
    name: 'Kit #14: Caçador do Ender Dragon & Exploração da End City',
    shortSign: 'KIT 14 ENDER DRAGON',
    category: 'Combate & Bosses',
    badge: 'OLHOS DO FIM + CAMAS + QUEDA LENTA',
    iconTexture: 'textures/items/ender_eye',
    summary:
      'Ative o Portal do Fim, derrote o Dragão em segundos e explore as End Cities: Molduras do Portal do Fim, Olhos do Fim, Arco Infinito, Camas, Poções de Queda Lenta, Frascos de Vidro e Pérolas.',
    highlights: [
      '12 Molduras do Portal do Fim + 64 Olhos do Fim + 4x64 Pérolas do Fim',
      'Arco Força V & Infinidade + 64 Flechas + Espada Netherita Afiação V + 8 Camas',
      '6 Poções de Queda Lenta + 2x64 Frascos Vazio (Bafo do Dragão) + 2 Baldes de Água + 4x64 Blocos',
    ],
    slots: [],
  },
  {
    index: 15,
    id: 'kit_destruidor_wither_beacon',
    name: 'Kit #15: Destruidor de Wither Boss & 4 Sinalizadores Nível 4 (Pirâmide Completa)',
    shortSign: 'KIT 15 WITHER & BEACON',
    category: 'Combate & Bosses',
    badge: '64 CRÂNIOS WITHER + 4 BEACONS MAX',
    iconTexture: 'textures/items/nether_star',
    summary:
      'Invoque e derrote dezenas de Withers com Espada Julgamento V (Smite V) e construa imediatamente a Pirâmide Quádrupla de Sinalizadores (Beacons) Nível Máximo com Blocos de Esmeralda/Diamante/Netherita.',
    highlights: [
      '64 Crânios de Esqueleto Wither + 4x64 Areia das Almas + Espada Netherita Julgamento V',
      '4 Sinalizadores (Beacons) + 16 Estrelas do Nether + 4x64 Blocos de Esmeralda (256)',
      '4x64 Blocos de Diamante (256) + 2x64 Blocos de Netherita + 64 Maçãs Encantadas + 4 Baldes de Leite',
    ],
    slots: [],
  },
  {
    index: 16,
    id: 'kit_warden_trial_chambers_121',
    name: 'Kit #16: Cidade Ancestral (Warden) & Câmaras de Provação 1.21 (Trial Chambers)',
    shortSign: 'KIT 16 WARDEN & 1.21',
    category: 'Combate & Bosses',
    badge: 'CHAVES SINISTRAS + PASSOS FURTIVOS',
    iconTexture: 'textures/items/wind_charge',
    summary:
      'Explore as Cidades Ancestrais sem acordar o Warden e abra todos os Cofres Sinistros das Trial Chambers 1.21: Lãs, Enxada Eficiência V, Chaves de Provação, Núcleo Pesado e Clava.',
    highlights: [
      'Calça Netherita c/ Passos Furtivos III (Swift Sneak 3) + Enxada Netherita Eficiência V',
      '64 Chaves de Provação Sinistras (Ominous Trial Key) + 64 Chaves Normais + 16 Cofres (Vaults)',
      '8x64 Lã Branca + 64 Fragmentos de Eco + 16 Núcleos Pesados + 4x64 Cargas de Vento + 64 Maçãs Encantadas',
    ],
    slots: [],
  },
  {
    index: 17,
    id: 'kit_mestre_construtor_moderno',
    name: 'Kit #17: Mestre Construtor Moderno & Iluminação (Quartzo, Concreto & Ardósia)',
    shortSign: 'KIT 17 CONSTRUTOR PRO',
    category: 'Construção & Alquimia',
    badge: '3.456 BLOCOS NOBRES DE CONSTRUÇÃO',
    iconTexture: 'textures/items/quartz',
    summary:
      'Baú Duplo lotado com os melhores blocos arquitetônicos para mansões e bases técnicas: Quartzo Liso, Concreto Branco/Preto, Tijolos de Ardósia, Troncos de Abeto, Vidro e Lanternas do Mar.',
    highlights: [
      '10x64 Blocos de Quartzo + 6x64 Pilares/Quartzo Talhado + 8x64 Concreto Branco & Preto',
      '8x64 Tijolos de Ardósia Profunda + 6x64 Tora de Abeto Descascada + 4x64 Tijolos de Pedra',
      '4x64 Vidro Transparente + 4x64 Lanternas do Mar + 2x64 Cogubrilho + 2x64 Lanternas',
    ],
    slots: [],
  },
  {
    index: 18,
    id: 'kit_mestre_alquimista_encantador',
    name: 'Kit #18: Mestre Alquimista & Encantador Nível 30 (Bancada + Todos Ingredientes)',
    shortSign: 'KIT 18 ALQUIMIA & XP',
    category: 'Construção & Alquimia',
    badge: 'MESA NV.30 + 32 ESTANTES + POÇÕES',
    iconTexture: 'textures/items/brewing_stand',
    summary:
      'Monte seu laboratório completo de Encantamento Nível 30 e Alquimia: Mesa de Encantamento, 32 Estantes, Bigornas, Lápis-Lazúli, Frascos de XP, Suportes de Poções e todos os reagentes raros.',
    highlights: [
      '2 Mesas de Encantamento + 32 Estantes de Livros + 4 Bigornas + 4 Rebolos + 4 Mesas Ferraria',
      '4x64 Lápis-Lazúli + 8x64 Frascos de XP + 2x64 Livros + 4 Suportes de Poções + 4 Caldeirões',
      '64 Fungos do Nether + 64 Pó de Blaze + 64 Lágrimas Ghast + 64 Melancia Reluzente + 64 Cenoura Dourada + 64 Bafo do Dragão',
    ],
    slots: [],
  },
  {
    index: 19,
    id: 'kit_fazendeiro_pecuaria_abelhas',
    name: 'Kit #19: Fazendeiro, Pecuária & Apicultura Completo (Sementes, Colmeias & Selas)',
    shortSign: 'KIT 19 FAZENDA & PETS',
    category: 'Construção & Alquimia',
    badge: 'TODAS PLANTAÇÕES + COLMEIAS + SELAS',
    iconTexture: 'textures/items/wheat',
    summary:
      'Para criar fazendas completas, domesticar todos os animais e produzir mel/favos: todas as sementes e mudas, 640 Farinhas de Osso, Colmeias, Ovos de Animais, Selas e Laços.',
    highlights: [
      '64 Sementes de Trigo, Cenoura, Batata, Beterraba, Melancia, Abóbora, Bambu, Cana e Cacau',
      '10x64 Blocos de Osso / Farinha de Osso + 16 Colmeias + 16 Ninhos de Abelha + 64 Flores',
      '16 Ovos de Vaca, Ovelha, Porco, Galinha, Cavalo, Lobo, Gato e Abelha + 8 Selas + 64 Laços',
    ],
    slots: [],
  },
  {
    index: 20,
    id: 'kit_oceano_monumento_conduto',
    name: 'Kit #20: Conquista do Oceano, Monumento Guardião & 4 Condutos Marinhos',
    shortSign: 'KIT 20 OCEANO CONDUTO',
    category: 'Mineração & Exploração',
    badge: '4 CONDUTOS + PRISMARINHO + ESPONJAS',
    iconTexture: 'textures/items/heartofthesea',
    summary:
      'Respire e enxergue debaixo d\'água infinitamente, seque Monumentos Oceânicos e construa Farms de Guardião: 4 Condutos, 256 Blocos de Prismarinho, 256 Esponjas Secas, Tridente e Poções Aquáticas.',
    highlights: [
      '4 Condutos (Conduit) + 8 Corações do Mar + 64 Conchas de Náutilo + 6x64 Prismarinho',
      '4x64 Esponjas Secas (256x p/ secar Monumento) + 4x64 Areia + 4x64 Portões de Cerca',
      'Tridente (Impulso Aquático III / Empalamento V) + Capacete Tartaruga Max + 6 Poções Respiração Aquática',
    ],
    slots: [],
  },
];

export function generateSuperToolsAndMultiplierScript(): string {
  return `
// ============================================================================
// SUPER FERRAMENTAS (50X50, CHUNK 16X16, BEDROCK), BAÚS AUTOMÁTICOS,
// BLOCO MULTIPLICADOR (SHULKER 100% LOTADA AO BATER) & 5 MODELOS ARQUITETÔNICOS
// ============================================================================

const BEDROCK_BLOCK_FALLBACKS = {
  "minecraft:smooth_quartz": "minecraft:quartz_block",
  "minecraft:chiseled_quartz_block": "minecraft:quartz_block",
  "minecraft:quartz_pillar": "minecraft:quartz_block",
  "minecraft:tinted_glass": "minecraft:glass",
  "minecraft:slime_block": "minecraft:slime",
  "minecraft:slime": "minecraft:slime_block",
  "minecraft:grass_block": "minecraft:grass",
  "minecraft:grass": "minecraft:grass_block",
  "minecraft:dirt_path": "minecraft:grass_path",
  "minecraft:grass_path": "minecraft:dirt_path",
  "minecraft:crying_obsidian": "minecraft:obsidian",
  "minecraft:gilded_blackstone": "minecraft:blackstone",
  "minecraft:polished_blackstone_bricks": "minecraft:blackstone",
  "minecraft:deepslate_tiles": "minecraft:deepslate_bricks",
  "minecraft:polished_deepslate": "minecraft:deepslate",
  "minecraft:chiseled_deepslate": "minecraft:deepslate",
  "minecraft:deepslate_bricks": "minecraft:cobblestone",
  "minecraft:stone_bricks": "minecraft:stonebrick",
  "minecraft:stonebrick": "minecraft:stone_bricks",
  "minecraft:mossy_stone_bricks": "minecraft:stonebrick",
  "minecraft:cracked_stone_bricks": "minecraft:stonebrick",
  "minecraft:chiseled_stone_bricks": "minecraft:stonebrick",
  "minecraft:smooth_sandstone": "minecraft:sandstone",
  "minecraft:polished_granite": "minecraft:stone",
  "minecraft:polished_diorite": "minecraft:stone",
  "minecraft:polished_andesite": "minecraft:stone",
  "minecraft:prismarine_bricks": "minecraft:prismarine",
  "minecraft:dark_prismarine": "minecraft:prismarine",
  "minecraft:end_stone_bricks": "minecraft:end_stone",
  "minecraft:shroomlight": "minecraft:glowstone",
  "minecraft:shulker_box": "minecraft:undyed_shulker_box",
  "minecraft:undyed_shulker_box": "minecraft:shulker_box",
  "minecraft:oak_door": "minecraft:wooden_door",
  "minecraft:wooden_door": "minecraft:oak_door",
  "minecraft:oak_trapdoor": "minecraft:trapdoor",
  "minecraft:trapdoor": "minecraft:oak_trapdoor",
  "minecraft:oak_fence_gate": "minecraft:fence_gate",
  "minecraft:fence_gate": "minecraft:oak_fence_gate",
  "minecraft:oak_button": "minecraft:wooden_button",
  "minecraft:wooden_button": "minecraft:oak_button",
  "minecraft:oak_pressure_plate": "minecraft:wooden_pressure_plate",
  "minecraft:wooden_pressure_plate": "minecraft:oak_pressure_plate",
  "minecraft:bricks": "minecraft:brick_block",
  "minecraft:brick_block": "minecraft:bricks",
  "minecraft:nether_bricks": "minecraft:nether_brick",
  "minecraft:red_nether_bricks": "minecraft:red_nether_brick",
  "minecraft:nether_brick_fence": "minecraft:nether_brick",
  "minecraft:snow_block": "minecraft:snow",
  "minecraft:melon": "minecraft:melon_block",
  "minecraft:jack_o_lantern": "minecraft:lit_pumpkin",
  "minecraft:lit_pumpkin": "minecraft:jack_o_lantern",
  "minecraft:cobweb": "minecraft:web",
  "minecraft:web": "minecraft:cobweb",
  "minecraft:lily_pad": "minecraft:waterlily",
  "minecraft:waterlily": "minecraft:lily_pad",
  "minecraft:vines": "minecraft:vine",
  "minecraft:vine": "minecraft:vines",
  "minecraft:dead_bush": "minecraft:deadbush",
  "minecraft:deadbush": "minecraft:dead_bush",
  "minecraft:note_block": "minecraft:noteblock",
  "minecraft:noteblock": "minecraft:note_block",
  "minecraft:item_frame": "minecraft:frame",
  "minecraft:frame": "minecraft:item_frame",
  "minecraft:glow_item_frame": "minecraft:glow_frame",
  "minecraft:glow_frame": "minecraft:glow_item_frame",
  "minecraft:powered_rail": "minecraft:golden_rail",
  "minecraft:golden_rail": "minecraft:powered_rail",
  "minecraft:cobblestone_stairs": "minecraft:stone_stairs",
  "minecraft:stone_stairs": "minecraft:cobblestone_stairs",
  "minecraft:magma_block": "minecraft:magma",
  "minecraft:magma": "minecraft:magma_block",
  "minecraft:sugar_cane": "minecraft:reeds",
  "minecraft:reeds": "minecraft:sugar_cane",
  "minecraft:glistering_melon_slice": "minecraft:speckled_melon",
  "minecraft:speckled_melon": "minecraft:glistering_melon_slice",
  "minecraft:terracotta": "minecraft:hardened_clay",
  "minecraft:hardened_clay": "minecraft:terracotta"
};

function safeSetBlock(dim, pos, typeId, fallbackId = "minecraft:quartz_block") {
  if (!dim || !pos) return null;
  const targetType = typeId || fallbackId || "minecraft:quartz_block";
  try {
    const blk = dim.getBlock(pos);
    if (!blk) return null;
    try {
      blk.setType(targetType);
      return blk;
    } catch (e1) {
      const mapped = BEDROCK_BLOCK_FALLBACKS[targetType] || fallbackId || "minecraft:quartz_block";
      try {
        blk.setType(mapped);
        return blk;
      } catch (e2) {
        try {
          blk.setType("minecraft:stone");
          return blk;
        } catch (e3) {
          return blk;
        }
      }
    }
  } catch (outerErr) {
    return null;
  }
}

function createSafeItemStack(rawId, amount = 1) {
  if (!rawId) return null;
  if (typeof rawId !== "string" && rawId.clone) {
    try {
      const cloned = rawId.clone();
      cloned.amount = Math.max(1, Math.min(cloned.maxAmount || 64, amount));
      return cloned;
    } catch (e) {}
  }
  const strId = String(rawId).toLowerCase().trim();
  const fullId = strId.includes(":") ? strId : "minecraft:" + strId;
  const candidates = [
    fullId,
    BEDROCK_BLOCK_FALLBACKS[fullId]
  ].filter(Boolean);

  for (const cid of candidates) {
    try {
      const st = new ItemStack(cid, 1);
      if (st) {
        st.amount = Math.max(1, Math.min(st.maxAmount || 64, amount));
        return st;
      }
    } catch (e) {}
  }
  return null;
}

const ARCHITECTURAL_THEMES = {
  quartzo_moderno: {
    id: "quartzo_moderno",
    name: "1. Quartzo Moderno High-Tech (Original)",
    shortTitle: "Quartzo Moderno",
    floor: "minecraft:quartz_block",
    floorBlock: "minecraft:quartz_block",
    floorCenterBlock: "minecraft:chiseled_quartz_block",
    wall: "minecraft:quartz_block",
    wallBlock: "minecraft:quartz_block",
    pillar: "minecraft:quartz_pillar",
    pillarBlock: "minecraft:quartz_pillar",
    light: "minecraft:sea_lantern",
    lightBlock: "minecraft:sea_lantern",
    roof: "minecraft:glass",
    ceilingBlock: "minecraft:glass",
    accent: "minecraft:chiseled_quartz_block",
    sign: "minecraft:birch_wall_sign",
    wallSignBlock: "minecraft:birch_wall_sign",
    color: "§6§l"
  },
  fortaleza_medieval: {
    id: "fortaleza_medieval",
    name: "2. Fortaleza Medieval & Abeto Rústico",
    shortTitle: "Fortaleza Medieval",
    floor: "minecraft:deepslate_tiles",
    floorBlock: "minecraft:stone_bricks",
    floorCenterBlock: "minecraft:spruce_planks",
    wall: "minecraft:stone_bricks",
    wallBlock: "minecraft:stone_bricks",
    pillar: "minecraft:stripped_spruce_log",
    pillarBlock: "minecraft:stripped_spruce_log",
    light: "minecraft:shroomlight",
    lightBlock: "minecraft:shroomlight",
    roof: "minecraft:spruce_planks",
    ceilingBlock: "minecraft:spruce_planks",
    accent: "minecraft:glowstone",
    sign: "minecraft:spruce_wall_sign",
    wallSignBlock: "minecraft:spruce_wall_sign",
    color: "§e§l"
  },
  bunker_subterraneo: {
    id: "bunker_subterraneo",
    name: "3. Bunker Subterrâneo & Ardósia Escura",
    shortTitle: "Bunker Ardósia",
    floor: "minecraft:polished_deepslate",
    floorBlock: "minecraft:deepslate_tiles",
    floorCenterBlock: "minecraft:polished_deepslate",
    wall: "minecraft:deepslate_bricks",
    wallBlock: "minecraft:deepslate_bricks",
    pillar: "minecraft:chiseled_deepslate",
    pillarBlock: "minecraft:chiseled_deepslate",
    light: "minecraft:sea_lantern",
    lightBlock: "minecraft:sea_lantern",
    roof: "minecraft:glass",
    ceilingBlock: "minecraft:glass",
    accent: "minecraft:deepslate_bricks",
    sign: "minecraft:dark_oak_wall_sign",
    wallSignBlock: "minecraft:dark_oak_wall_sign",
    color: "§b§l"
  },
  santuario_nether: {
    id: "santuario_nether",
    name: "4. Santuário Nether & Pedra Negra Dourada",
    shortTitle: "Santuário Nether",
    floor: "minecraft:polished_blackstone_bricks",
    floorBlock: "minecraft:polished_blackstone_bricks",
    floorCenterBlock: "minecraft:crimson_planks",
    wall: "minecraft:polished_blackstone_bricks",
    wallBlock: "minecraft:polished_blackstone_bricks",
    pillar: "minecraft:gilded_blackstone",
    pillarBlock: "minecraft:gilded_blackstone",
    light: "minecraft:shroomlight",
    lightBlock: "minecraft:shroomlight",
    roof: "minecraft:crying_obsidian",
    ceilingBlock: "minecraft:crying_obsidian",
    accent: "minecraft:gold_block",
    sign: "minecraft:crimson_wall_sign",
    wallSignBlock: "minecraft:crimson_wall_sign",
    color: "§6§l"
  },
  galeria_end: {
    id: "galeria_end",
    name: "5. Galeria Galáctica The End & Purpur",
    shortTitle: "Galeria The End",
    floor: "minecraft:end_stone_bricks",
    floorBlock: "minecraft:end_stone_bricks",
    floorCenterBlock: "minecraft:purpur_block",
    wall: "minecraft:end_stone_bricks",
    wallBlock: "minecraft:end_stone_bricks",
    pillar: "minecraft:purpur_pillar",
    pillarBlock: "minecraft:purpur_pillar",
    light: "minecraft:sea_lantern",
    lightBlock: "minecraft:sea_lantern",
    roof: "minecraft:purpur_block",
    ceilingBlock: "minecraft:purpur_block",
    accent: "minecraft:purpur_block",
    sign: "minecraft:warped_wall_sign",
    wallSignBlock: "minecraft:warped_wall_sign",
    color: "§d§l"
  }
};

// ============================================================================
// MOTOR DIRECIONAL 360° (CONSTRÓI QUALQUER ESTRUTURA NA DIREÇÃO DO OLHAR!)
// ============================================================================
function getLookBasis(player) {
  let vx = 1;
  let vz = 0;
  try {
    const vd = player.getViewDirection();
    if (vd && (Math.abs(vd.x) > 0.01 || Math.abs(vd.z) > 0.01)) {
      vx = vd.x;
      vz = vd.z;
    }
  } catch (e) {}

  const px = Math.floor(player.location.x);
  const py = Math.floor(player.location.y);
  const pz = Math.floor(player.location.z);

  let fx = 1, fz = 0, rx = 0, rz = 1;
  let forwardDir = "east", backDir = "west", leftInwardDir = "south", rightInwardDir = "north";
  let dirLabelPt = "Leste (+X)";

  if (Math.abs(vx) >= Math.abs(vz)) {
    if (vx >= 0) {
      // Olhando Leste (+X)
      fx = 1; fz = 0; rx = 0; rz = 1;
      forwardDir = "east"; backDir = "west";
      leftInwardDir = "south"; rightInwardDir = "north";
      dirLabelPt = "Leste (+X)";
    } else {
      // Olhando Oeste (-X)
      fx = -1; fz = 0; rx = 0; rz = -1;
      forwardDir = "west"; backDir = "east";
      leftInwardDir = "north"; rightInwardDir = "south";
      dirLabelPt = "Oeste (-X)";
    }
  } else {
    if (vz >= 0) {
      // Olhando Sul (+Z)
      fx = 0; fz = 1; rx = -1; rz = 0;
      forwardDir = "south"; backDir = "north";
      leftInwardDir = "west"; rightInwardDir = "east";
      dirLabelPt = "Sul (+Z)";
    } else {
      // Olhando Norte (-Z)
      fx = 0; fz = -1; rx = 1; rz = 0;
      forwardDir = "north"; backDir = "south";
      leftInwardDir = "east"; rightInwardDir = "west";
      dirLabelPt = "Norte (-Z)";
    }
  }

  // Converte coordenadas locais (forward, up, right) a partir da posição do jogador em coordenadas reais {x, y, z}
  const rel = (forwardOffset, upOffset, rightOffset) => ({
    x: px + fx * forwardOffset + rx * rightOffset,
    y: py + upOffset,
    z: pz + fz * forwardOffset + rz * rightOffset
  });

  // Coordenada centralizada no bloco para teleporte ou spawn de entidade
  const relTp = (forwardOffset, upOffset, rightOffset) => ({
    x: px + fx * forwardOffset + rx * rightOffset + 0.5,
    y: py + upOffset,
    z: pz + fz * forwardOffset + rz * rightOffset + 0.5
  });

  return {
    px,
    py,
    pz,
    fx,
    fz,
    rx,
    rz,
    forwardDir,
    backDir,
    leftInwardDir,
    rightInwardDir,
    dirLabelPt,
    rel,
    relTp
  };
}

function getPlayerArchTheme(player) {
  try {
    const key = player.getDynamicProperty("survivalmenu:arch_theme") || "quartzo_moderno";
    return ARCHITECTURAL_THEMES[key] || ARCHITECTURAL_THEMES.quartzo_moderno;
  } catch (e) {
    return ARCHITECTURAL_THEMES.quartzo_moderno;
  }
}

function getPlayerArchModel(player) {
  return getPlayerArchTheme(player);
}

function openArchitecturalThemeSelector(player, returnFn) {
  const keys = Object.keys(ARCHITECTURAL_THEMES);
  const current = getPlayerArchTheme(player);
  const form = new ActionFormData()
    .title("§l§6[Estilos] Modelo da Sala de Baú")
    .body("§7Modelo atual: §a" + current.name + "\\n§fEscolha o estilo arquitetônico para construir suas Salas de Baús Organizadas, Mega Sala de Encantamentos e Mega Sala de Poções:");

  for (const k of keys) {
    const t = ARCHITECTURAL_THEMES[k];
    form.button((t.id === current.id ? "§a[ATIVO] " : "§e") + t.name + "\\n§r§8Piso: " + t.floor.replace("minecraft:", "") + " | Placa: " + t.sign.replace("minecraft:", ""));
  }
  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection < keys.length) {
      const selectedKey = keys[res.selection];
      player.setDynamicProperty("survivalmenu:arch_theme", selectedKey);
      const chosen = ARCHITECTURAL_THEMES[selectedKey];
      player.sendMessage("§8[§aEstilos§8] §aModelo arquitetônico alterado para: §e" + chosen.name + "§a!");
    }
    if (returnFn) {
      returnFn(player);
    } else if (typeof openMegaChestHallMenu === "function") {
      openMegaChestHallMenu(player);
    }
  });
}

function openArchitecturalModelSelector(player) {
  openArchitecturalThemeSelector(player, typeof openMegaChestHallMenu === "function" ? openMegaChestHallMenu : null);
}

// Placa de Identificação Fixada Diretamente na Frente do Baú Duplo ou Coluna (suporta todas as 4 direções cardinais)
function placeExternalWallSignOnPillar(dim, signPos, cardinalFacing, line1OrArray, line2OrSignBlock, line3 = "§a54 Packs 64x", customSignBlock = "minecraft:birch_wall_sign") {
  try {
    if (!dim || !signPos) return;
    const signBlock = dim.getBlock(signPos);
    if (!signBlock) return;
    // Nunca sobrescreve baús ou funis caso a coordenada de placa coincida com outro bloco funcional
    if (
      signBlock.typeId === "minecraft:chest" ||
      signBlock.typeId === "minecraft:trapped_chest" ||
      signBlock.typeId === "minecraft:hopper"
    ) {
      return;
    }

    let lines = [];
    let resolvedSignBlock = customSignBlock || "minecraft:birch_wall_sign";
    if (Array.isArray(line1OrArray)) {
      lines = line1OrArray.map((l) => String(l || ""));
      if (typeof line2OrSignBlock === "string" && line2OrSignBlock.includes(":")) {
        resolvedSignBlock = line2OrSignBlock;
      }
    } else {
      lines = [
        String(line1OrArray || "§l§e[BAÚ DUPLO]"),
        String(line2OrSignBlock || ""),
        String(line3 || "§a54 Packs 64x")
      ];
    }

    const facingMap = { north: 2, south: 3, west: 4, east: 5 };
    const facingInt = facingMap[cardinalFacing] || 2;
    let placed = false;

    const candidates = [
      resolvedSignBlock,
      "minecraft:birch_wall_sign",
      "minecraft:oak_wall_sign",
      "minecraft:spruce_wall_sign",
      "minecraft:wall_sign"
    ];

    for (const blockId of candidates) {
      if (placed || !blockId) continue;
      try {
        const perm = BlockPermutation.resolve(blockId, {
          "facing_direction": facingInt
        });
        signBlock.setPermutation(perm);
        placed = true;
      } catch (e) {
        try {
          const permCard = BlockPermutation.resolve(blockId, {
            "minecraft:cardinal_direction": cardinalFacing || "north"
          });
          signBlock.setPermutation(permCard);
          placed = true;
        } catch (e2) {}
      }
    }

    if (placed) {
      const fullText = lines.slice(0, 4).join("\\n");
      const writeSignText = (blk) => {
        try {
          if (!blk) return;
          const signComp = blk.getComponent("minecraft:sign") || blk.getComponent("sign");
          if (signComp && typeof signComp.setText === "function") {
            try { signComp.setText(fullText); } catch (e) {}
            try {
              signComp.setText(fullText, "Front");
              signComp.setText(fullText, "Back");
            } catch (e) {}
            try {
              if (typeof signComp.setWaxed === "function") {
                signComp.setWaxed(true);
              }
            } catch (e) {}
          }
        } catch (e) {}
      };

      writeSignText(signBlock);
      system.runTimeout(() => {
        try {
          writeSignText(dim.getBlock(signPos));
        } catch (e) {}
      }, 2);
    }
  } catch (e) {}
}

function placeExternalChestWallSign(dim, signPos, cardinalFacing, linesArray, wallSignBlock) {
  placeExternalWallSignOnPillar(dim, signPos, cardinalFacing, linesArray, wallSignBlock);
}

// Entrega os 3 Super Itens + 4x Bloco Multiplicador automaticamente ou via Menu
function giveSuperToolsAndMultiplierStarterKit(player) {
  giveSuperToolsAndMultiplierKit(player, 1);
}

function giveSuperToolsAndMultiplierKit(player, count = 1) {
  const inv = player.getComponent("minecraft:inventory")?.container;
  if (!inv) return;

  try {
    const martelo = new ItemStack("survivalmenu:martelo_50x50", 1);
    martelo.nameTag = "§6§l🔨 Martelo Titã 50x50";
    martelo.setLore([
      "§eClique ou Bata no bloco: §fQuebra área 50x50 (Zero Lag 500/tick)",
      "§bAgachado (Shift) + Usar: §fEscolhe Profundidade (1 a 25 camadas)",
      "§aGera Baús Duplos Automáticos com Todos os Minérios e Blocos!"
    ]);
    inv.addItem(martelo);
  } catch (e) {}

  try {
    const chunker = new ItemStack("survivalmenu:destruidor_chunk", Math.min(64, count));
    chunker.nameTag = "§c§l💣 Destruidor de Chunk 16x16";
    chunker.setLore([
      "§eClique ou Use no chão: §fEscava a Chunk 16x16 inteira até a Bedrock (Y: -63)",
      "§bDescida Segura: §fQueda Lenta + Resistência V + Fundo Iluminado",
      "§aColeta 100% em Baús Duplos Automáticos Organizados!"
    ]);
    inv.addItem(chunker);
  } catch (e) {}

  try {
    const bedrockBreaker = new ItemStack("survivalmenu:quebrador_bedrock", 1);
    bedrockBreaker.nameTag = "§d§l🟣 Quebrador de Bedrock";
    bedrockBreaker.setLore([
      "§eClique ou Bata na Bedrock: §fQuebra na hora e dropa o bloco de Bedrock!",
      "§dAgachado (Shift) + Usar: §fAbre Passagem 3x3 no Teto do Nether + Escadas!"
    ]);
    inv.addItem(bedrockBreaker);
  } catch (e) {}

  try {
    const multBlock = new ItemStack("minecraft:lodestone", Math.max(4, Math.min(64, count)));
    multBlock.nameTag = "§d§l🔮 Bloco Multiplicador Interativo";
    multBlock.setLore([
      "§aClique Direito com Item: §fMultiplica +1 Pack (64x) ou Clona Arma/Armadura",
      "§eShift + Clique Direito: §fMultiplica +5 Packs (320x) + Abastece Baú ao lado",
      "§cBater no Bloco (Botão Esquerdo): §fGera Shulker Box 100% LOTADA (27 slots / 1.728 itens)!"
    ]);
    inv.addItem(multBlock);
  } catch (e) {}
}

// ============================================================================
// SISTEMA DE BAÚS DUPLOS AUTOMÁTICOS APÓS ESCAVAÇÃO (50X50 E CHUNK 16X16)
// Gerado na direção exata em que o jogador está olhando!
// ============================================================================
const PRECIOUS_PRIORITY_ORDER = [
  "minecraft:diamond",
  "minecraft:ancient_debris",
  "minecraft:netherite_ingot",
  "minecraft:emerald",
  "minecraft:raw_gold",
  "minecraft:gold_ingot",
  "minecraft:raw_iron",
  "minecraft:iron_ingot",
  "minecraft:redstone",
  "minecraft:lapis_lazuli",
  "minecraft:quartz",
  "minecraft:coal",
  "minecraft:raw_copper",
  "minecraft:amethyst_shard",
  "minecraft:bedrock"
];

const EXCAVATION_DROP_MAP = {
  "minecraft:diamond_ore": "minecraft:diamond",
  "minecraft:deepslate_diamond_ore": "minecraft:diamond",
  "minecraft:ancient_debris": "minecraft:ancient_debris",
  "minecraft:emerald_ore": "minecraft:emerald",
  "minecraft:deepslate_emerald_ore": "minecraft:emerald",
  "minecraft:gold_ore": "minecraft:raw_gold",
  "minecraft:deepslate_gold_ore": "minecraft:raw_gold",
  "minecraft:nether_gold_ore": "minecraft:gold_ingot",
  "minecraft:iron_ore": "minecraft:raw_iron",
  "minecraft:deepslate_iron_ore": "minecraft:raw_iron",
  "minecraft:coal_ore": "minecraft:coal",
  "minecraft:deepslate_coal_ore": "minecraft:coal",
  "minecraft:redstone_ore": "minecraft:redstone",
  "minecraft:deepslate_redstone_ore": "minecraft:redstone",
  "minecraft:lit_redstone_ore": "minecraft:redstone",
  "minecraft:lit_deepslate_redstone_ore": "minecraft:redstone",
  "minecraft:lapis_ore": "minecraft:lapis_lazuli",
  "minecraft:deepslate_lapis_ore": "minecraft:lapis_lazuli",
  "minecraft:copper_ore": "minecraft:raw_copper",
  "minecraft:deepslate_copper_ore": "minecraft:raw_copper",
  "minecraft:quartz_ore": "minecraft:quartz",
  "minecraft:stone": "minecraft:cobblestone",
  "minecraft:deepslate": "minecraft:cobbled_deepslate",
  "minecraft:grass_block": "minecraft:dirt",
  "minecraft:grass": "minecraft:dirt",
  "minecraft:bedrock": "minecraft:bedrock"
};

function buildExcavationAutoChestPlatform(player, collectedCounts, toolTitle) {
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const preciousStacks = [];
  const buildingStacks = [];

  for (const oreId of PRECIOUS_PRIORITY_ORDER) {
    const qty = collectedCounts.get(oreId) || 0;
    if (qty > 0) {
      giveCustomQuantity(player, oreId, qty);
      let rem = qty;
      while (rem > 0) {
        const batch = Math.min(64, rem);
        preciousStacks.push({ id: oreId, amount: batch });
        rem -= batch;
      }
      collectedCounts.delete(oreId);
    }
  }

  for (const [blockId, qty] of collectedCounts.entries()) {
    if (qty <= 0 || blockId === "minecraft:air" || blockId.includes("water") || blockId.includes("lava")) continue;
    let rem = qty;
    while (rem > 0) {
      const batch = Math.min(64, rem);
      buildingStacks.push({ id: blockId, amount: batch });
      rem -= batch;
    }
  }

  const allOrderedStacks = [...preciousStacks, ...buildingStacks];
  if (allOrderedStacks.length === 0) {
    allOrderedStacks.push({ id: "minecraft:diamond", amount: 64 });
    allOrderedStacks.push({ id: "minecraft:cobblestone", amount: 64 });
  }

  const totalChestsNeeded = Math.max(1, Math.min(12, Math.ceil(allOrderedStacks.length / 52)));
  const maxRight = Math.max(5, totalChestsNeeded * 3);

  // Constrói Estante Iluminada na direção do olhar do jogador
  for (let f = -1; f <= 4; f++) {
    for (let r = -3; r <= maxRight - 2; r++) {
      const isLantern = (r % 3 === 0) && (f === 1 || f === 2);
      safeSetBlock(
        dim,
        basis.rel(f, -1, r),
        isLantern ? "minecraft:sea_lantern" : "minecraft:smooth_quartz"
      );
      for (let dy = 0; dy <= 3; dy++) {
        safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
      }
    }
  }

  let stackCursor = 0;
  for (let c = 0; c < totalChestsNeeded; c++) {
    const rBase = -2 + c * 3;
    const fChest = 3;

    // Coluna iluminada de suporte ao lado do Baú Duplo
    safeSetBlock(dim, basis.rel(fChest, 0, rBase + 2), "minecraft:quartz_pillar");
    safeSetBlock(dim, basis.rel(fChest, 1, rBase + 2), "minecraft:sea_lantern");

    const posA = basis.rel(fChest, 0, rBase);
    const posB = basis.rel(fChest, 0, rBase + 1);
    const pair = placeConnectedDoubleChest(dim, posA, posB, basis.backDir);
    const finalDir = (pair && pair.dir) || basis.backDir || "north";
    const isPreciousChest = c === 0 && preciousStacks.length > 0;
    const chestLabel = isPreciousChest ? "MINERIOS RAROS" : \`BLOCOS #\${c + 1}\`;

    const signPos = basis.rel(fChest - 1, 0, rBase);
    const putExcavationFrontSign = () => {
      placeExternalWallSignOnPillar(
        dim,
        signPos,
        finalDir,
        "§6§lBAU #" + (c + 1),
        "§e" + chestLabel,
        "§a" + toolTitle.slice(0, 14)
      );
    };
    putExcavationFrontSign();

    const chestEntries = [];
    for (let s = 1; s < 54 && stackCursor < allOrderedStacks.length; s++) {
      chestEntries.push(allOrderedStacks[stackCursor++]);
    }

    const populateExcavationChest = (bA, bB) => {
      const contA = bA?.getComponent("minecraft:inventory")?.container;
      const contB = bB?.getComponent("minecraft:inventory")?.container;
      try {
        const idItem = new ItemStack(isPreciousChest ? "minecraft:diamond" : "minecraft:cobblestone", 64);
        idItem.nameTag = \`§e§l[BAÚ] §fBaú Automático #\${c + 1} (\${chestLabel})\`;
        idItem.setLore([
          "§7Gerado automaticamente por: §e" + toolTitle,
          isPreciousChest ? "§bPrioridade #1: Minérios Raros e Preciosos" : "§aPrioridade #2: Madeiras e Blocos (Packs 64x)"
        ]);
        if (contA && !contA.getItem(0)) contA.setItem(0, idItem);
      } catch (e) {}

      for (let idx = 0; idx < chestEntries.length; idx++) {
        const s = idx + 1;
        const entry = chestEntries[idx];
        try {
          const st = createSafeItemStack(entry.id, entry.amount);
          if (!st) continue;
          if (contA && contA.size >= 54) {
            if (!contA.getItem(s)) contA.setItem(s, st);
          } else if (s < 27 && contA) {
            if (!contA.getItem(s)) contA.setItem(s, st);
          } else if (s >= 27 && contB) {
            if (!contB.getItem(s - 27)) contB.setItem(s - 27, st);
          }
        } catch (e) {}
      }
    };

    if (pair) {
      populateExcavationChest(pair.blockA, pair.blockB);
      system.runTimeout(() => {
        try {
          let latestA = dim.getBlock(posA);
          let latestB = dim.getBlock(posB);
          const checkCont = latestA?.getComponent("minecraft:inventory")?.container;
          if (!checkCont || checkCont.size < 54) {
            const repaired = placeConnectedDoubleChest(dim, posA, posB, finalDir);
            if (repaired) {
              latestA = repaired.blockA;
              latestB = repaired.blockB;
            }
          }
          populateExcavationChest(latestA, latestB);
          putExcavationFrontSign();
        } catch (e) {}
      }, 2);
    }
  }

  player.teleport(basis.relTp(1, 0, 0));
  try { player.playSound("random.levelup", { pitch: 1.1, volume: 1.0 }); } catch (e) {}
  player.sendMessage(\`§8[§aBaús Automáticos§8] §aGerados §e\${totalChestsNeeded} Baús Duplos Conectados §ana direção do seu olhar (\${basis.dirLabelPt}) com Placa Externa!\`);
}

// ============================================================================
// 1. 🔨 MARTELO TITÃ 50X50 (survivalmenu:martelo_50x50)
// ============================================================================
function startMartelo50x50Excavation(player, centerPos, depthLayers = null) {
  const layers = depthLayers || Number(player.getDynamicProperty("survivalmenu:martelo_depth")) || 3;
  const dim = player.dimension;
  const cx = Math.floor(centerPos.x);
  const cy = Math.floor(centerPos.y);
  const cz = Math.floor(centerPos.z);

  const half = 25;
  const blocksToBreak = [];
  for (let dy = 0; dy > -layers; dy--) {
    const ty = cy + dy;
    if (ty <= -64) continue;
    for (let dx = -half; dx < half; dx++) {
      for (let dz = -half; dz < half; dz++) {
        blocksToBreak.push({ x: cx + dx, y: ty, z: cz + dz });
      }
    }
  }

  const totalBlocks = blocksToBreak.length;
  let cursor = 0;
  const collectedCounts = new Map();

  player.addEffect("resistance", 400, { amplifier: 255, showParticles: false });
  player.sendMessage(\`§8[§6Martelo Titã 50x50§8] §eIniciando escavação 50x50 (\${layers} camadas = \${totalBlocks} blocos) a 500 blocos/tick (60 FPS)...\`);

  const job = system.runInterval(() => {
    try {
      const batchLimit = Math.min(totalBlocks, cursor + 500);
      for (; cursor < batchLimit; cursor++) {
        const pos = blocksToBreak[cursor];
        const b = dim.getBlock(pos);
        if (!b) continue;
        const tid = b.typeId;
        if (tid === "minecraft:air" || tid === "minecraft:bedrock" || tid === "minecraft:chest" || tid === "minecraft:lodestone") continue;
        const dropId = EXCAVATION_DROP_MAP[tid] || tid;
        collectedCounts.set(dropId, (collectedCounts.get(dropId) || 0) + 1);
        b.setType("minecraft:air");
      }

      const pct = Math.min(100, Math.round((cursor / totalBlocks) * 100));
      player.onScreenDisplay.setActionBar(\`§6§l🔨 Martelo Titã 50x50 §8| §eQuebrando: §a\${pct}%... §7(\${cursor}/\${totalBlocks} blocos | 60 FPS)\`);

      if (cursor >= totalBlocks) {
        system.clearRun(job);
        buildExcavationAutoChestPlatform(player, collectedCounts, \`Martelo 50x50 (\${layers} Camadas)\`);
      }
    } catch (e) {
      system.clearRun(job);
    }
  }, 1);
}

function openMarteloDepthSelectorModal(player) {
  const currentDepth = Number(player.getDynamicProperty("survivalmenu:martelo_depth")) || 3;
  const modal = new ModalFormData()
    .title("🔨 Martelo Titã 50x50 — Profundidade")
    .slider("Quantas camadas de profundidade 50x50 quebrar (1 a 25 camadas):", 1, 25, 1, currentDepth)
    .toggle("Executar escavação 50x50 imediatamente ao confirmar", true);

  showFormSafely(player, modal, (res) => {
    const [layers, runNow] = res.formValues;
    const safeLayers = Math.max(1, Math.min(25, Number(layers) || 1));
    player.setDynamicProperty("survivalmenu:martelo_depth", safeLayers);
    player.sendMessage(\`§8[§6Martelo Titã 50x50§8] §aProfundidade configurada para §e\${safeLayers} camadas de 50x50§a!\`);
    if (runNow) {
      startMartelo50x50Excavation(player, player.location, safeLayers);
    }
  });
}

// ============================================================================
// 2. 💣 DESTRUIDOR DE CHUNK 16X16 (survivalmenu:destruidor_chunk)
// ============================================================================
function startChunkDestroyer16x16(player, refPos) {
  const dim = player.dimension;
  const px = Math.floor(refPos.x);
  const py = Math.floor(refPos.y);
  const pz = Math.floor(refPos.z);

  const chunkMinX = Math.floor(px / 16) * 16;
  const chunkMaxX = chunkMinX + 15;
  const chunkMinZ = Math.floor(pz / 16) * 16;
  const chunkMaxZ = chunkMinZ + 15;
  const bottomY = -63;

  player.addEffect("slow_falling", 2400, { amplifier: 0, showParticles: false });
  player.addEffect("resistance", 2400, { amplifier: 4, showParticles: false });
  player.addEffect("fire_resistance", 2400, { amplifier: 1, showParticles: false });

  const blocksToBreak = [];
  for (let y = py; y >= bottomY; y--) {
    for (let x = chunkMinX; x <= chunkMaxX; x++) {
      for (let z = chunkMinZ; z <= chunkMaxZ; z++) {
        blocksToBreak.push({ x, y, z });
      }
    }
  }

  const totalBlocks = blocksToBreak.length;
  let cursor = 0;
  const collectedCounts = new Map();

  player.sendMessage(
    \`§8[§c💣 Destruidor de Chunk 16x16§8] §eLimites matemáticos da Chunk: §fX[\${chunkMinX} a \${chunkMaxX}] Z[\${chunkMinZ} a \${chunkMaxZ}] §edesde Y:\${py} até a Bedrock (Y:-63)!\`
  );
  player.sendMessage("§bDescida Segura ativada: Queda Lenta + Resistência V + Resistência ao Fogo!");

  const job = system.runInterval(() => {
    try {
      const batchLimit = Math.min(totalBlocks, cursor + 500);
      for (; cursor < batchLimit; cursor++) {
        const pos = blocksToBreak[cursor];
        const b = dim.getBlock(pos);
        if (!b) continue;
        const tid = b.typeId;
        if (tid === "minecraft:air" || tid === "minecraft:bedrock") continue;
        const dropId = EXCAVATION_DROP_MAP[tid] || tid;
        collectedCounts.set(dropId, (collectedCounts.get(dropId) || 0) + 1);
        b.setType("minecraft:air");
      }

      const pct = Math.min(100, Math.round((cursor / totalBlocks) * 100));
      player.onScreenDisplay.setActionBar(
        \`§c§l💣 Destruidor de Chunk 16x16 §8| §eEscavando até Y:-63: §a\${pct}%... §7(\${cursor}/\${totalBlocks})\`
      );

      if (cursor >= totalBlocks) {
        system.clearRun(job);
        try {
          dim.getBlock({ x: chunkMinX, y: bottomY, z: chunkMinZ })?.setType("minecraft:sea_lantern");
          dim.getBlock({ x: chunkMaxX, y: bottomY, z: chunkMinZ })?.setType("minecraft:sea_lantern");
          dim.getBlock({ x: chunkMinX, y: bottomY, z: chunkMaxZ })?.setType("minecraft:sea_lantern");
          dim.getBlock({ x: chunkMaxX, y: bottomY, z: chunkMaxZ })?.setType("minecraft:sea_lantern");
          dim.getBlock({ x: chunkMinX + 7, y: bottomY, z: chunkMinZ + 7 })?.setType("minecraft:sea_lantern");
          dim.getBlock({ x: chunkMinX + 8, y: bottomY, z: chunkMinZ + 8 })?.setType("minecraft:sea_lantern");
        } catch (e) {}

        buildExcavationAutoChestPlatform(player, collectedCounts, "Chunk 16x16 (Y:-63)");
      }
    } catch (e) {
      system.clearRun(job);
    }
  }, 1);
}

// ============================================================================
// 3. 🟣 QUEBRADOR DE BEDROCK (survivalmenu:quebrador_bedrock)
// ============================================================================
function useQuebradorBedrockTool(player, targetBlock, isNetherRoofMode) {
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const px = basis.px;
  const py = basis.py;
  const pz = basis.pz;

  if (isNetherRoofMode) {
    let brokenBedrock = 0;
    const baseY = py;
    for (let dy = 0; dy <= 6; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          const b = dim.getBlock({ x: px + dx, y: baseY + dy, z: pz + dz });
          if (b && b.typeId !== "minecraft:air") {
            if (b.typeId === "minecraft:bedrock") brokenBedrock++;
            b.setType("minecraft:air");
          }
        }
      }
      // Coluna de suporte e escada de mão na direção do olhar do jogador
      safeSetBlock(dim, basis.rel(1, dy, 0), "minecraft:quartz_pillar");
      safeSetBlock(dim, basis.rel(0, dy, 0), "minecraft:ladder");
    }

    const totalGiven = Math.max(9, brokenBedrock);
    giveCustomQuantity(player, "minecraft:bedrock", totalGiven);
    try { player.playSound("random.explode", { pitch: 1.2, volume: 0.9 }); } catch (e) {}
    player.sendMessage(
      \`§8[§d🟣 Quebrador de Bedrock§8] §aPassagem 3x3 aberta atravessando o Teto de Bedrock com coluna de Escadas na direção \${basis.dirLabelPt}! §e+\${totalGiven}x Blocos de Bedrock entregues na mochila!\`
    );
    return;
  }

  if (targetBlock && targetBlock.typeId === "minecraft:bedrock") {
    targetBlock.setType("minecraft:air");
    giveCustomQuantity(player, "minecraft:bedrock", 1);
    try { player.playSound("dig.stone", { pitch: 0.8, volume: 1.0 }); } catch (e) {}
    player.onScreenDisplay.setActionBar("§d§l🟣 Bedrock Quebrada! §a+1 Bloco de Bedrock entregue no seu inventário!");
  } else {
    let broken = 0;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dz = -2; dz <= 2; dz++) {
          const b = dim.getBlock({ x: px + dx, y: py + dy, z: pz + dz });
          if (b && b.typeId === "minecraft:bedrock") {
            b.setType("minecraft:air");
            broken++;
          }
        }
      }
    }
    const reward = Math.max(1, broken);
    giveCustomQuantity(player, "minecraft:bedrock", reward);
    player.sendMessage(\`§8[§d🟣 Quebrador de Bedrock§8] §aQuebrados e coletados +\${reward}x Blocos de Bedrock indestrutíveis no seu inventário!\`);
  }
}

// ============================================================================
// 4. 🔮 BLOCO MULTIPLICADOR INTERATIVO (Magnetita / minecraft:lodestone)
// ============================================================================
function getDynamicShulkerColorBlockId(itemId) {
  const id = String(itemId || "").toLowerCase();
  if (id.includes("diamond") || id.includes("beacon") || id.includes("conduit") || id.includes("trident")) {
    return { blockId: "minecraft:light_blue_shulker_box", colorLabel: "§bAzul Claro" };
  }
  if (id.includes("netherite") || id.includes("ancient_debris") || id.includes("obsidian") || id.includes("bedrock")) {
    return { blockId: "minecraft:black_shulker_box", colorLabel: "§8Preta" };
  }
  if (id.includes("gold") || id.includes("apple") || id.includes("carrot") || id.includes("totem") || id.includes("blaze")) {
    return { blockId: "minecraft:yellow_shulker_box", colorLabel: "§eAmarela" };
  }
  if (id.includes("redstone") || id.includes("tnt") || id.includes("firework")) {
    return { blockId: "minecraft:red_shulker_box", colorLabel: "§cVermelha" };
  }
  if (id.includes("emerald") || id.includes("slime") || id.includes("experience")) {
    return { blockId: "minecraft:lime_shulker_box", colorLabel: "§aVerde-Limão" };
  }
  if (id.includes("potion") || id.includes("brewing") || id.includes("dragon") || id.includes("elytra") || id.includes("mace")) {
    return { blockId: "minecraft:magenta_shulker_box", colorLabel: "§dMagenta" };
  }
  return { blockId: "minecraft:purple_shulker_box", colorLabel: "§5Roxa" };
}

function restoreFullDurability(itemStack) {
  try {
    const dur = itemStack.getComponent("minecraft:durability");
    if (dur && dur.damage > 0) {
      dur.damage = 0;
    }
  } catch (e) {}
  return itemStack;
}

function feedAdjacentChestOrBarrel(dim, blockPos, itemStack, packsCount) {
  const offsets = [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: -1 }
  ];
  let fed = false;
  for (const off of offsets) {
    try {
      const adj = dim.getBlock({ x: blockPos.x + off.x, y: blockPos.y + off.y, z: blockPos.z + off.z });
      if (adj && (adj.typeId === "minecraft:chest" || adj.typeId === "minecraft:barrel" || adj.typeId.includes("shulker_box"))) {
        const cont = adj.getComponent("minecraft:inventory")?.container;
        if (cont) {
          for (let i = 0; i < packsCount; i++) {
            const copy = restoreFullDurability(itemStack.clone());
            copy.amount = copy.maxAmount || 64;
            cont.addItem(copy);
          }
          fed = true;
        }
      }
    } catch (e) {}
  }
  return fed;
}

function handleMultiplierBlockRightClick(player, block) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
  if (!handItem || handItem.typeId === "minecraft:lodestone") {
    player.sendMessage("§8[§d🔮 Bloco Multiplicador§8] §eSegure qualquer item, minério, poção ou armadura na mão e clique no bloco para multiplicar!");
    return;
  }

  const isSneaking = player.isSneaking;
  const packsToMultiply = isSneaking ? 5 : 1;
  const maxStack = handItem.maxAmount || 64;
  const totalUnits = maxStack === 1 ? packsToMultiply : packsToMultiply * 64;

  const cleanClone = restoreFullDurability(handItem.clone());
  giveCustomQuantity(player, cleanClone, totalUnits);

  const fedChest = feedAdjacentChestOrBarrel(block.dimension, block.location, cleanClone, packsToMultiply);
  try { player.playSound("random.orb", { pitch: isSneaking ? 1.5 : 1.2, volume: 0.9 }); } catch (e) {}

  player.onScreenDisplay.setActionBar(
    \`§d§l🔮 Bloco Multiplicador: §a+\${totalUnits}x \${handItem.typeId.replace("minecraft:", "")} §e(\${packsToMultiply} Pack\${packsToMultiply > 1 ? "s" : ""})\${fedChest ? " §b+ Baú Acoplado Abastecido!" : ""}\`
  );
}

function handleMultiplierBlockLeftClickPunch(player, block) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
  if (!handItem) {
    player.sendMessage("§8[§d🥊 Bloco Multiplicador§8] §eSegure um item na mão e BATA no Bloco Multiplicador para gerar uma Shulker Box 100% LOTADA (27 slots / 1.728 unidades)!");
    return;
  }

  const dim = block.dimension;
  const pos = block.location;
  const { blockId, colorLabel } = getDynamicShulkerColorBlockId(handItem.typeId);
  const maxStack = handItem.maxAmount || 64;
  const totalInside = maxStack * 27;

  const targetShulkerPos = dim.getBlock({ x: pos.x, y: pos.y + 1, z: pos.z })?.typeId === "minecraft:air"
    ? { x: pos.x, y: pos.y + 1, z: pos.z }
    : { x: pos.x + 1, y: pos.y, z: pos.z };

  try {
    const shulkerBlock = dim.getBlock(targetShulkerPos);
    if (shulkerBlock) {
      shulkerBlock.setType(blockId);
      const cont = shulkerBlock.getComponent("minecraft:inventory")?.container;
      if (cont) {
        cont.clearAll();
        for (let s = 0; s < 27; s++) {
          const slotCopy = restoreFullDurability(handItem.clone());
          slotCopy.amount = maxStack;
          cont.setItem(s, slotCopy);
        }
      }
    }
  } catch (e) {}

  try {
    const inv = player.getComponent("minecraft:inventory")?.container;
    if (inv) {
      const shulkerItem = new ItemStack(blockId, 1);
      const shortItem = handItem.nameTag || handItem.typeId.replace("minecraft:", "").toUpperCase();
      shulkerItem.nameTag = \`\${colorLabel}§lShulker 100% Lotada: §f\${shortItem}\`;
      shulkerItem.setLore([
        \`§a27/27 Slots Lotados (\${totalInside} unidades)\`,
        "§7Gerada batendo no Bloco Multiplicador",
        "§e100% Encantamentos e Durabilidade Restaurada"
      ]);
      inv.addItem(shulkerItem);
    }
  } catch (e) {}

  try { player.playSound("random.totem", { pitch: 1.2, volume: 0.9 }); } catch (e) {}
  player.sendMessage(
    \`§8[§d🥊 Bloco Multiplicador§8] §aGerada Caixa de Shulker \${colorLabel} §a100% LOTADA (27 slots = \${totalInside}x \${handItem.typeId.replace("minecraft:", "")}) colada ao bloco E no seu inventário!\`
  );
}

// Constrói a Estação do Bloco Multiplicador na DIREÇÃO DO OLHAR do jogador
function spawnMultiplierStationInFront(player) {
  const dim = player.dimension;
  const basis = getLookBasis(player);

  try {
    for (let r = -1; r <= 2; r++) {
      safeSetBlock(dim, basis.rel(2, -1, r), "minecraft:smooth_quartz");
      safeSetBlock(dim, basis.rel(2, 0, r), "minecraft:air");
      safeSetBlock(dim, basis.rel(2, 1, r), "minecraft:air");
    }
    safeSetBlock(dim, basis.rel(2, 0, 0), "minecraft:lodestone");
    placeConnectedDoubleChest(dim, basis.rel(2, 0, 1), basis.rel(2, 0, 2), basis.backDir);
    safeSetBlock(dim, basis.rel(2, 0, -1), "minecraft:sea_lantern");
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(1, 0, -1),
      basis.backDir,
      "§d§lMULTIPLICADOR",
      "§aClique=+1 Pack",
      "§eBater=Shulker!"
    );
    player.sendMessage(\`§8[§d🔮 Estação Multiplicadora§8] §aBloco Multiplicador (Magnetita) + Baú Duplo Acoplado instalados na direção do seu olhar (\${basis.dirLabelPt})!\`);
  } catch (e) {}
}

function buildMultiplierBlockStation(player) {
  spawnMultiplierStationInFront(player);
}

function spawnFull27SlotShulkerFromItem(player, handItem, targetPos) {
  const basis = getLookBasis(player);
  const fakeBlock = {
    dimension: player.dimension,
    location: targetPos || basis.rel(2, 0, 0)
  };
  handleMultiplierBlockLeftClickPunch(player, fakeBlock);
}

function excavateMartelo50x50(player, layers) {
  startMartelo50x50Excavation(player, player.location, layers);
}

function excavateChunk16x16ToBedrock(player) {
  startChunkDestroyer16x16(player, player.location);
}

function openNetherRoof3x3Passage(player) {
  useQuebradorBedrockTool(player, null, true);
}

function breakNearbyBedrockInstant(player) {
  useQuebradorBedrockTool(player, null, false);
}

// ============================================================================
// 5. 🧪 MEGA SALA DE POÇÕES (30 BAÚS DUPLOS + PLACAS + BANCADA COM MULTIPLICADOR)
// Gerada na direção exata em que o jogador está olhando!
// ============================================================================
const MEGA_POTION_30_LIST = [
  { id: "minecraft:glass_bottle", sign: "FRASCO VIDRO", name: "Frasco de Vidro" },
  { id: "minecraft:potion", sign: "GARRAFA AGUA", name: "Garrafa de Água / Poção Base" },
  { id: "minecraft:nether_wart", sign: "FUNGO NETHER", name: "Fungo do Nether" },
  { id: "minecraft:blaze_powder", sign: "PO DE BLAZE", name: "Pó de Blaze" },
  { id: "minecraft:blaze_rod", sign: "VARA DE BLAZE", name: "Vara de Blaze" },
  { id: "minecraft:fermented_spider_eye", sign: "OLHO FERMENT.", name: "Olho de Aranha Fermentado" },
  { id: "minecraft:redstone", sign: "REDSTONE +TEMPO", name: "Redstone (+Tempo)" },
  { id: "minecraft:glowstone_dust", sign: "GLOWSTONE NV2", name: "Pó de Pedra Luminosa (Nv2)" },
  { id: "minecraft:gunpowder", sign: "POLVORA SPLASH", name: "Pólvora (Splash)" },
  { id: "minecraft:dragon_breath", sign: "BAFO DRAGAO", name: "Bafo do Dragão" },
  { id: "minecraft:glistering_melon_slice", sign: "MELANCIA OURO", name: "Melancia Reluzente" },
  { id: "minecraft:ghast_tear", sign: "LAGRIMA GHAST", name: "Lágrima de Ghast" },
  { id: "minecraft:sugar", sign: "ACUCAR VELOC.", name: "Açúcar (Velocidade)" },
  { id: "minecraft:magma_cream", sign: "CREME MAGMA", name: "Creme de Magma" },
  { id: "minecraft:golden_carrot", sign: "CENOURA DOUR.", name: "Cenoura Dourada" },
  { id: "minecraft:rabbit_foot", sign: "PE DE COELHO", name: "Pé de Coelho" },
  { id: "minecraft:phantom_membrane", sign: "MEMB. FANTASMA", name: "Membrana de Fantasma" },
  { id: "minecraft:spider_eye", sign: "OLHO ARANHA", name: "Olho de Aranha" },
  { id: "minecraft:pufferfish", sign: "BAIACU RESPIR.", name: "Baiacu (Respiração)" },
  { id: "minecraft:turtle_scute", sign: "ESCAMA TARTAR.", name: "Escama de Tartaruga" },
  { id: "minecraft:breeze_rod", sign: "VARA BREEZE", name: "Vara de Breeze / Vórtice 1.21" },
  { id: "minecraft:slime", sign: "BLOCO SLIME", name: "Bloco de Slime" },
  { id: "minecraft:web", sign: "TEIA ARANHA", name: "Teia de Aranha" },
  { id: "minecraft:stone", sign: "PEDRA INFEST.", name: "Bloco de Pedra" },
  { id: "minecraft:splash_potion", sign: "POCAO SPLASH", name: "Poções Splash" },
  { id: "minecraft:lingering_potion", sign: "POCAO NUVEM", name: "Poções Prolongadas" },
  { id: "minecraft:milk_bucket", sign: "BALDE LEITE", name: "Balde de Leite" },
  { id: "minecraft:honey_bottle", sign: "GARRAFA MEL", name: "Garrafa de Mel" },
  { id: "minecraft:brewing_stand", sign: "SUPORTE POCAO", name: "Suportes de Poções" },
  { id: "minecraft:cauldron", sign: "CALDEIRAO", name: "Caldeirões" }
];

function buildMega30ChestsPotionHall(player) {
  const theme = getPlayerArchTheme(player);
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const fStart = 2;

  player.sendMessage(
    \`§8[§d🧪 Mega Sala de Poções§8] §eConstruindo na direção §a\${basis.dirLabelPt} §eno estilo §b\${theme.name} §ecom 30 Baús Duplos Individuais + Placa na Frente + Bancada de Alquimia!\`
  );

  // 1. Constrói o Salão de Entrada Fechado com Bancada de Alquimia na direção do olhar
  try {
    for (let df = 0; df < 6; df++) {
      const f = fStart + df;
      for (let r = -4; r <= 4; r++) {
        safeSetBlock(
          dim,
          basis.rel(f, -1, r),
          r === 0 ? theme.lightBlock : theme.floorBlock
        );
        for (let dy = 0; dy <= 3; dy++) {
          if (r === -4 || r === 4) {
            safeSetBlock(
              dim,
              basis.rel(f, dy, r),
              dy === 1 && df % 2 === 1 ? theme.lightBlock : theme.wallBlock
            );
          } else {
            safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
          }
        }
        safeSetBlock(dim, basis.rel(f, 4, r), theme.ceilingBlock);
      }
    }

    // 6 Suportes de Poções + 6 Caldeirões na Entrada
    for (let i = 0; i < 6; i++) {
      const f = fStart + i;
      safeSetBlock(dim, basis.rel(f, 0, -3), theme.accent);
      safeSetBlock(dim, basis.rel(f, 1, -3), "minecraft:brewing_stand");
      safeSetBlock(dim, basis.rel(f, 0, -2), "minecraft:cauldron");

      // Canteiro com Plantação de Fungo do Nether do outro lado da entrada
      safeSetBlock(dim, basis.rel(f, 0, 3), "minecraft:soul_sand");
      safeSetBlock(dim, basis.rel(f, 1, 3), "minecraft:nether_wart");
    }

    // 1 Bloco Multiplicador instalado na bancada central da entrada!
    safeSetBlock(dim, basis.rel(fStart + 2, 0, 2), "minecraft:lodestone");
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(fStart + 2, 0, 1),
      basis.rightInwardDir,
      "§d§lMULTIPLICADOR",
      "§eClique=Clonar",
      "§aBater=Shulker!",
      theme.wallSignBlock
    );
  } catch (e) {}

  let currentBay = 0;
  const totalBays = 5;
  let itemIdx = 0;

  const job = system.runInterval(() => {
    try {
      if (currentBay >= totalBays) {
        system.clearRun(job);
        const endF = fStart + 6 + totalBays * 3;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(dim, basis.rel(endF, -1, r), theme.floorBlock);
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(endF, dy, r),
              dy === 1 && r === 0 ? theme.lightBlock : theme.wallBlock
            );
          }
          safeSetBlock(dim, basis.rel(endF, 4, r), theme.ceilingBlock);
        }
        player.teleport(basis.relTp(fStart + 1, 0, 0));
        try { player.playSound("random.totem", { pitch: 1.1, volume: 1.0 }); } catch (e) {}
        player.sendMessage(\`§8[§a🧪 Mega Sala de Poções Concluída!§8] §a30 Baús Duplos gerados na direção \${basis.dirLabelPt} com 54 slots cheios, Placa na Frente e Bancada com Bloco Multiplicador!\`);
        return;
      }

      const fBase = fStart + 6 + currentBay * 3;
      for (let df = 0; df < 3; df++) {
        const cf = fBase + df;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(
            dim,
            basis.rel(cf, -1, r),
            r === 0 && df === 1 ? theme.lightBlock : r === 0 ? theme.floorCenterBlock : theme.floorBlock
          );
          for (let dy = 0; dy <= 3; dy++) {
            if (r === -4 || r === 4) {
              safeSetBlock(
                dim,
                basis.rel(cf, dy, r),
                dy === 1 && df === 1 ? theme.lightBlock : theme.wallBlock
              );
            } else {
              safeSetBlock(dim, basis.rel(cf, dy, r), "minecraft:air");
            }
          }
          safeSetBlock(dim, basis.rel(cf, 4, r), theme.ceilingBlock);
        }
        if (df === 2) {
          for (let dy = 0; dy <= 2; dy++) {
            safeSetBlock(
              dim,
              basis.rel(cf, dy, -3),
              dy === 1 ? theme.lightBlock : theme.pillarBlock
            );
            safeSetBlock(
              dim,
              basis.rel(cf, dy, 3),
              dy === 1 ? theme.lightBlock : theme.pillarBlock
            );
          }
        }
      }

      for (let lvl = 0; lvl < 3; lvl++) {
        if (itemIdx < MEGA_POTION_30_LIST.length) {
          const spec = MEGA_POTION_30_LIST[itemIdx++];
          fillDoubleChestWithSingleItem(
            dim,
            basis.rel(fBase, lvl, -3),
            basis.rel(fBase + 1, lvl, -3),
            spec.id,
            basis.leftInwardDir,
            spec.sign,
            theme.wallSignBlock
          );
        }

        if (itemIdx < MEGA_POTION_30_LIST.length) {
          const spec = MEGA_POTION_30_LIST[itemIdx++];
          fillDoubleChestWithSingleItem(
            dim,
            basis.rel(fBase, lvl, 3),
            basis.rel(fBase + 1, lvl, 3),
            spec.id,
            basis.rightInwardDir,
            spec.sign,
            theme.wallSignBlock
          );
        }
      }

      currentBay++;
      player.onScreenDisplay.setActionBar(\`§dConstruindo Mega Sala de Poções (\${basis.dirLabelPt}): §a\${itemIdx}/30 Baús Duplos\`);
    } catch (e) {
      currentBay++;
    }
  }, 2);
}

// ============================================================================
// 6. 📚 MEGA SALA DE ENCANTAMENTOS SUPREMA + BAÚS DE TODOS OS 42 ENCANTAMENTOS
//    + 18 BAÚS DE MATERIAIS DE ENCANTAR + TODOS OS 42 VILLAGERS NO MÁXIMO (1 ESMERALDA)!
// ============================================================================
const MEGA_ENCHANT_42_SPECS = [
  { id: "mending", max: 1, sign: "REMENDO I", name: "Remendo I (Mending)", cat: "Universal" },
  { id: "unbreaking", max: 3, sign: "INQUEBRAVEL III", name: "Inquebrável III (Unbreaking)", cat: "Universal" },
  { id: "protection", max: 4, sign: "PROTECAO IV", name: "Proteção IV (Protection)", cat: "Armaduras" },
  { id: "fire_protection", max: 4, sign: "PROT. FOGO IV", name: "Proteção Fogo IV", cat: "Armaduras" },
  { id: "blast_protection", max: 4, sign: "PROT. EXPLOS IV", name: "Proteção Explosões IV", cat: "Armaduras" },
  { id: "projectile_protection", max: 4, sign: "PROT. PROJET IV", name: "Proteção Projéteis IV", cat: "Armaduras" },
  { id: "thorns", max: 3, sign: "ESPINHOS III", name: "Espinhos III (Thorns)", cat: "Armaduras" },
  { id: "feather_falling", max: 4, sign: "PESO PENA IV", name: "Peso Pena IV (Botas)", cat: "Botas" },
  { id: "depth_strider", max: 3, sign: "PASSOS PROF III", name: "Passos Profundos III", cat: "Botas" },
  { id: "frost_walker", max: 2, sign: "PASSOS GELO II", name: "Passos Gélidos II", cat: "Botas" },
  { id: "soul_speed", max: 3, sign: "VELOC. ALMAS III", name: "Velocidade das Almas III", cat: "Botas" },
  { id: "swift_sneak", max: 3, sign: "PASSOS RAPID III", name: "Passos Rápidos III (Calça)", cat: "Calças" },
  { id: "respiration", max: 3, sign: "RESPIRACAO III", name: "Respiração III (Capacete)", cat: "Capacete" },
  { id: "aqua_affinity", max: 1, sign: "AFIN. AQUATICA I", name: "Afinidade Aquática I", cat: "Capacete" },
  { id: "sharpness", max: 5, sign: "AFIACAO V", name: "Afiação V (Sharpness)", cat: "Espadas" },
  { id: "smite", max: 5, sign: "JULGAMENTO V", name: "Julgamento V (Smite)", cat: "Espadas" },
  { id: "bane_of_arthropods", max: 5, sign: "RUINA ARTROP. V", name: "Ruína dos Artrópodes V", cat: "Espadas" },
  { id: "looting", max: 3, sign: "PILHAGEM III", name: "Pilhagem / Saque III", cat: "Espadas" },
  { id: "fire_aspect", max: 2, sign: "ASP. FLAMEJ. II", name: "Aspecto Flamejante II", cat: "Espadas" },
  { id: "knockback", max: 2, sign: "REPULSAO II", name: "Repulsão II (Knockback)", cat: "Espadas" },
  { id: "efficiency", max: 5, sign: "EFICIENCIA V", name: "Eficiência V (Ferramentas)", cat: "Ferramentas" },
  { id: "fortune", max: 3, sign: "FORTUNA III", name: "Fortuna III (Fortune)", cat: "Ferramentas" },
  { id: "silk_touch", max: 1, sign: "TOQUE SUAVE I", name: "Toque Suave I (Silk Touch)", cat: "Ferramentas" },
  { id: "density", max: 5, sign: "DENSIDADE V", name: "Densidade V (Clava 1.21)", cat: "Clava 1.21" },
  { id: "breach", max: 4, sign: "BRECHA IV", name: "Brecha IV (Clava 1.21)", cat: "Clava 1.21" },
  { id: "wind_burst", max: 3, sign: "RAJADA VENTO III", name: "Rajada de Vento III (1.21)", cat: "Clava 1.21" },
  { id: "power", max: 5, sign: "FORCA V (ARCO)", name: "Força V (Power - Arco)", cat: "Arco" },
  { id: "punch", max: 2, sign: "IMPACTO II", name: "Impacto II (Punch - Arco)", cat: "Arco" },
  { id: "flame", max: 1, sign: "CHAMA I (ARCO)", name: "Chama I (Flame - Arco)", cat: "Arco" },
  { id: "infinity", max: 1, sign: "INFINIDADE I", name: "Infinidade I (Infinity)", cat: "Arco" },
  { id: "impaling", max: 5, sign: "EMPALAMENTO V", name: "Empalamento V (Tridente)", cat: "Tridente" },
  { id: "loyalty", max: 3, sign: "LEALDADE III", name: "Lealdade III (Tridente)", cat: "Tridente" },
  { id: "riptide", max: 3, sign: "CORRENTEZA III", name: "Correnteza III (Tridente)", cat: "Tridente" },
  { id: "channeling", max: 1, sign: "CONDUTIVIDADE I", name: "Condutividade I (Tridente)", cat: "Tridente" },
  { id: "multishot", max: 1, sign: "TIRO MULTIPLO I", name: "Tiro Múltiplo I (Besta)", cat: "Besta" },
  { id: "quick_charge", max: 3, sign: "CARGA RAPIDA III", name: "Carga Rápida III (Besta)", cat: "Besta" },
  { id: "piercing", max: 4, sign: "PERFURACAO IV", name: "Perfuração IV (Besta)", cat: "Besta" },
  { id: "luck_of_the_sea", max: 3, sign: "SORTE DO MAR III", name: "Sorte do Mar III (Pesca)", cat: "Pesca" },
  { id: "lure", max: 3, sign: "ISCA III", name: "Isca III (Pesca)", cat: "Pesca" },
  { id: "vanishing_curse", max: 1, sign: "MALD. DESAPAREC", name: "Maldição do Desaparecimento", cat: "Especial" },
  { id: "binding_curse", max: 1, sign: "MALD. LIGACAO I", name: "Maldição da Ligação", cat: "Especial" },
  { id: "omni_book", max: 5, sign: "LIVRO SUPREMO", name: "Livro Supremo Combinado (Max)", cat: "Supremo" }
];

const MEGA_ENCHANT_18_SUPPLIES_SPECS = [
  { id: "minecraft:lapis_lazuli", sign: "LAPIS-LAZULI", name: "Lápis-Lazúli (Packs 64x)" },
  { id: "minecraft:lapis_block", sign: "BLOCO DE LAPIS", name: "Bloco de Lápis-Lazúli" },
  { id: "minecraft:experience_bottle", sign: "FRASCO DE XP", name: "Frasco de Experiência (XP)" },
  { id: "minecraft:emerald", sign: "ESMERALDA TROCA", name: "Esmeralda (Troca 1x Villager)" },
  { id: "minecraft:emerald_block", sign: "BLOCO ESMERALDA", name: "Bloco de Esmeralda" },
  { id: "minecraft:book", sign: "LIVRO COMUM", name: "Livros para Encantar" },
  { id: "minecraft:bookshelf", sign: "ESTANTE LIVROS", name: "Estante de Livros (Nv. 30)" },
  { id: "minecraft:chiseled_bookshelf", sign: "ESTANTE ESCULP.", name: "Estante de Livros Esculpida" },
  { id: "minecraft:enchanting_table", sign: "MESA ENCANTAM.", name: "Mesa de Encantamentos" },
  { id: "minecraft:anvil", sign: "BIGORNA NOVA", name: "Bigorna Nova" },
  { id: "minecraft:grindstone", sign: "REBOLO DESENC.", name: "Rebolo (Remover Encantamento)" },
  { id: "minecraft:smithing_table", sign: "MESA FERRARIA", name: "Mesa de Ferraria" },
  { id: "minecraft:lectern", sign: "ATRIL VILLAGER", name: "Atril de Bibliotecário" },
  { id: "minecraft:netherite_upgrade_smithing_template", sign: "MOLDE NETHERITA", name: "Molde de Melhoria Netherita" },
  { id: "minecraft:netherite_ingot", sign: "BARRA NETHERITA", name: "Barra de Netherita" },
  { id: "minecraft:diamond", sign: "DIAMANTES", name: "Diamantes" },
  { id: "minecraft:amethyst_shard", sign: "FRAG. AMETISTA", name: "Fragmento de Ametista" },
  { id: "minecraft:name_tag", sign: "ETIQUETA NOME", name: "Etiquetas (Name Tag)" }
];

function createMaxEnchantedBookItem(spec) {
  let book = null;
  try {
    book = new ItemStack("minecraft:enchanted_book", 1);
  } catch (e) {
    try {
      book = new ItemStack("minecraft:book", 1);
    } catch (e2) {}
  }
  if (!book) return null;

  if (spec.id === "omni_book") {
    applySafeEnchant(book, "mending", 1);
    applySafeEnchant(book, "unbreaking", 3);
    applySafeEnchant(book, "protection", 4);
    applySafeEnchant(book, "sharpness", 5);
    applySafeEnchant(book, "efficiency", 5);
    applySafeEnchant(book, "fortune", 3);
    applySafeEnchant(book, "looting", 3);
    applySafeEnchant(book, "power", 5);
  } else {
    applySafeEnchant(book, spec.id, spec.max);
  }

  try {
    book.nameTag = \`§d§lLivro Encantado: §e\${spec.name}\`;
    book.setLore([
      \`§bEncantamento no Nível Máximo: §f\${spec.name}\`,
      \`§eCategoria: §f\${spec.cat}\`,
      "§aTroca do Villager Bibliotecário: §e1 Esmeralda + 1 Livro",
      "§7Use na Bigorna para aplicar em qualquer equipamento!"
    ]);
  } catch (e) {}
  return book;
}

function fillDoubleChestWithEnchantedBook(dim, posA, posB, spec, cardinalDir, wallSignBlock) {
  try {
    const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
    if (!pair) return false;
    const { blockA, blockB, dir: resolvedDir } = pair;
    const finalDir = resolvedDir || cardinalDir || "north";

    const bookTemplate = createMaxEnchantedBookItem(spec);
    if (!bookTemplate) return false;

    const fillHalves = (bA, bB) => {
      const contA = bA?.getComponent("minecraft:inventory")?.container;
      const contB = bB?.getComponent("minecraft:inventory")?.container;
      if (contA) {
        for (let s = 0; s < contA.size; s++) {
          try {
            if (!contA.getItem(s)) contA.setItem(s, bookTemplate.clone());
          } catch (e) {}
        }
      }
      if (contB && (!contA || contA.size <= 27)) {
        for (let s = 0; s < contB.size; s++) {
          try {
            if (!contB.getItem(s)) contB.setItem(s, bookTemplate.clone());
          } catch (e) {}
        }
      }
    };

    const frontSignPos = {
      x: finalDir === "east" ? posA.x + 1 : finalDir === "west" ? posA.x - 1 : posA.x,
      y: posA.y,
      z: finalDir === "south" ? posA.z + 1 : finalDir === "north" ? posA.z - 1 : posA.z
    };

    const signLines = [
      "§l§d[LIVRO MAX]",
      "§l§e" + String(spec.sign || spec.name).slice(0, 15),
      "§bNível Máximo: " + spec.max,
      "§a54 Livros Max"
    ];

    const applySign = () => {
      placeExternalWallSignOnPillar(dim, frontSignPos, finalDir, signLines, wallSignBlock || "minecraft:birch_wall_sign");
    };

    fillHalves(blockA, blockB);
    applySign();

    system.runTimeout(() => {
      try {
        let latestA = dim.getBlock(posA);
        let latestB = dim.getBlock(posB);
        const checkCont = latestA?.getComponent("minecraft:inventory")?.container;
        if (!checkCont || checkCont.size < 54) {
          const repaired = placeConnectedDoubleChest(dim, posA, posB, finalDir);
          if (repaired) {
            latestA = repaired.blockA;
            latestB = repaired.blockB;
          }
        }
        fillHalves(latestA, latestB);
        applySign();
      } catch (e) {}
    }, 2);

    return true;
  } catch (e) {
    return false;
  }
}

function placeDirectionalLectern(dim, pos, cardinalDir = "north") {
  try {
    const blk = dim.getBlock(pos);
    if (!blk) return;
    try {
      const perm = BlockPermutation.resolve("minecraft:lectern", {
        "minecraft:cardinal_direction": cardinalDir || "north"
      });
      blk.setPermutation(perm);
      return;
    } catch (e) {}
    blk.setType("minecraft:lectern");
  } catch (e) {}
}

// Constrói uma Cabine 1x1 Física real de Survival (sem precisar de efeito de lentidão e sem NameTag artificial)
// Funciona 100% no Survival Puro mesmo DEPOIS de remover a Add-On do mundo!
function spawnSingleLibrarianVillagerStall(dim, basis, fPos, rCell, rLectern, inwardDir, spec, arch) {
  try {
    const signStep = rLectern < rCell ? -1 : 1; // Direção para o corredor central
    const rBack = rLectern < rCell ? rCell + 1 : rCell - 1; // Parede traseira atrás do Villager

    // Subpiso iluminado e Piso de Survival sob o Villager e sob o Atril
    safeSetBlock(dim, basis.rel(fPos, -2, rCell), arch.lightBlock);
    safeSetBlock(dim, basis.rel(fPos, -1, rCell), arch.floorBlock);
    safeSetBlock(dim, basis.rel(fPos, -1, rLectern), arch.floorCenterBlock);

    // Parede traseira física (impede o Villager de sair por trás no Survival)
    for (let dy = 0; dy <= 2; dy++) {
      safeSetBlock(dim, basis.rel(fPos, dy, rBack), dy === 2 ? arch.lightBlock : arch.wallBlock);
    }

    // Divisórias laterais físicas (fPos - 1 e fPos + 1) fechando a cabine 1x1 como nas Farms de Survival
    for (const fSide of [fPos - 1, fPos + 1]) {
      for (let dy = 0; dy <= 2; dy++) {
        safeSetBlock(dim, basis.rel(fSide, dy, rCell), arch.pillarBlock);
        safeSetBlock(dim, basis.rel(fSide, dy, rLectern), arch.pillarBlock);
      }
    }

    // Espaço interno 1x2 para o Villager (y=0 e y=1) + Teto iluminado (y=2) que impede pulos
    safeSetBlock(dim, basis.rel(fPos, 0, rCell), "minecraft:air");
    safeSetBlock(dim, basis.rel(fPos, 1, rCell), "minecraft:air");
    safeSetBlock(dim, basis.rel(fPos, 2, rCell), arch.lightBlock);
    safeSetBlock(dim, basis.rel(fPos, 3, rCell), arch.wallBlock);

    // Frente da cabine Survival: Atril embaixo (y=0), Janela de Troca no meio (y=1) e Bloco Superior (y=2)
    placeDirectionalLectern(dim, basis.rel(fPos, 0, rLectern), inwardDir);
    safeSetBlock(dim, basis.rel(fPos, 1, rLectern), "minecraft:air");
    safeSetBlock(dim, basis.rel(fPos, 2, rLectern), arch.pillarBlock);
    safeSetBlock(dim, basis.rel(fPos, 3, rLectern), arch.lightBlock);

    // Placa de Madeira estilo Survival na frente da cabine identificando o encantamento
    const signPos = basis.rel(fPos, 2, rLectern + signStep);
    placeExternalWallSignOnPillar(
      dim,
      signPos,
      inwardDir,
      [
        "§l§2[Bibliotecário]",
        "§l§e" + String(spec.sign || "").slice(0, 15),
        "§bNível Máximo: " + spec.max,
        "§aTroca: 1 Esmer."
      ],
      arch.wallSignBlock
    );

    // Spawna o Villager Bibliotecário 100% Vanilla Survival (SEM nameTag hackeado e SEM efeito de lentidão)
    const spawnLoc = basis.relTp(fPos, 0, rCell);
    const villager = dim.spawnEntity("minecraft:villager_v2", spawnLoc);
    if (villager) {
      try { villager.triggerEvent("minecraft:ageable_grow_up"); } catch (e) {}
      try { villager.triggerEvent("minecraft:become_librarian"); } catch (e) {}
      // Evento nativo do Minecraft Bedrock para Villager Curado de Zumbi (Desconto Permanente de 1 Esmeralda no save!)
      try { villager.triggerEvent("minecraft:villager_converted"); } catch (e) {}
      try { villager.triggerEvent("minecraft:schedule_work_pro_villager"); } catch (e) {}

      try {
        // Sem nameTag colorido na cabeça para ficar 100% idêntico ao Survival quando tirar a Add-On!
        villager.nameTag = "";
        villager.addTag("survivalmenu_librarian:" + spec.id);
      } catch (e) {}
    }
    return true;
  } catch (e) {
    return false;
  }
}

// Constrói 1 Cabine Survival 1x1 Individual virada diretamente para o jogador
function spawnFrontSingleLibrarianStall(dim, basis, spec, arch) {
  try {
    // Piso e paredes da cabine individual na frente do jogador (f=3 Atril, f=4 Villager, f=5 Parede Traseira)
    for (let f = 2; f <= 5; f++) {
      for (let r = -1; r <= 1; r++) {
        safeSetBlock(dim, basis.rel(f, -1, r), arch.floorBlock);
        for (let dy = 0; dy <= 3; dy++) {
          safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
        }
      }
    }

    for (let dy = 0; dy <= 2; dy++) {
      safeSetBlock(dim, basis.rel(5, dy, 0), dy === 2 ? arch.lightBlock : arch.wallBlock);
      safeSetBlock(dim, basis.rel(4, dy, -1), arch.pillarBlock);
      safeSetBlock(dim, basis.rel(4, dy, 1), arch.pillarBlock);
      safeSetBlock(dim, basis.rel(3, dy, -1), arch.pillarBlock);
      safeSetBlock(dim, basis.rel(3, dy, 1), arch.pillarBlock);
    }

    safeSetBlock(dim, basis.rel(4, 2, 0), arch.lightBlock);
    placeDirectionalLectern(dim, basis.rel(3, 0, 0), basis.backDir);
    safeSetBlock(dim, basis.rel(3, 1, 0), "minecraft:air");
    safeSetBlock(dim, basis.rel(3, 2, 0), arch.pillarBlock);

    placeExternalWallSignOnPillar(
      dim,
      basis.rel(2, 2, 0),
      basis.backDir,
      [
        "§l§2[Bibliotecário]",
        "§l§e" + String(spec.sign || "").slice(0, 15),
        "§bNível Máximo: " + spec.max,
        "§aTroca: 1 Esmer."
      ],
      arch.wallSignBlock
    );

    const villager = dim.spawnEntity("minecraft:villager_v2", basis.relTp(4, 0, 0));
    if (villager) {
      try { villager.triggerEvent("minecraft:ageable_grow_up"); } catch (e) {}
      try { villager.triggerEvent("minecraft:become_librarian"); } catch (e) {}
      try { villager.triggerEvent("minecraft:villager_converted"); } catch (e) {}
      try { villager.triggerEvent("minecraft:schedule_work_pro_villager"); } catch (e) {}
      try {
        villager.nameTag = "";
        villager.addTag("survivalmenu_librarian:" + spec.id);
      } catch (e) {}
    }
    return true;
  } catch (e) {
    return false;
  }
}

// Gira/Reseta a troca nativa do Villager (igual a quebrar e colocar o Atril no Survival) mantendo o desconto de 1 Esmeralda
function rerollVillagerVanillaLibrarianTrade(player, villager) {
  if (!villager) return;
  try {
    villager.triggerEvent("minecraft:become_unskilled");
  } catch (e) {}
  system.runTimeout(() => {
    try {
      villager.triggerEvent("minecraft:become_librarian");
      villager.triggerEvent("minecraft:villager_converted");
      villager.triggerEvent("minecraft:schedule_work_pro_villager");
      villager.nameTag = "";
      player.playSound("block.lectern.place", { pitch: 1.1, volume: 1.0 });
      player.sendMessage("§8[§a💎 Trading Hall Survival§8] §aTroca nativa do Bibliotecário girada! Clique nele normalmente para ver o novo Livro de 1 Esmeralda e faça 1 troca para travar no mundo!");
    } catch (e) {}
  }, 2);
}

// Prepara todos os Villagers e o inventário para remover a Add-On mantendo 100% compatível com o Survival Puro
function prepareWorldForRemovingAddon(player) {
  const dim = player.dimension;
  let cleanedVillagers = 0;

  try {
    const villagers = dim.getEntities({ type: "minecraft:villager_v2" });
    for (const v of villagers) {
      try {
        v.nameTag = "";
        v.removeEffect("slowness");
        v.removeEffect("resistance");
        v.removeEffect("fire_resistance");
        v.triggerEvent("minecraft:villager_converted");
        v.triggerEvent("minecraft:schedule_work_pro_villager");
        const tags = v.getTags ? v.getTags() : [];
        for (const t of tags) {
          if (t.startsWith("survivalmenu_librarian:")) {
            v.removeTag(t);
          }
        }
        cleanedVillagers++;
      } catch (e) {}
    }
  } catch (e) {}

  // Remove itens customizados da Add-On da mochila para não virarem blocos de "?" (unknown) ao desativar o pacote
  let removedCustomItems = 0;
  try {
    const inv = player.getComponent("minecraft:inventory")?.container;
    if (inv) {
      for (let i = 0; i < inv.size; i++) {
        const it = inv.getItem(i);
        if (it && it.typeId.startsWith("survivalmenu:")) {
          inv.setItem(i, undefined);
          removedCustomItems++;
        }
      }
    }
  } catch (e) {}

  try {
    giveCustomQuantity(player, "minecraft:emerald", 64);
    giveCustomQuantity(player, "minecraft:book", 64);
    giveCustomQuantity(player, "minecraft:lapis_lazuli", 64);
    player.playSound("random.levelup", { pitch: 1.1, volume: 1.0 });
  } catch (e) {}

  player.sendMessage(
    "§8[§a🛡️ Modo 100% Survival Vanilla Pronto!§8]\\n" +
    "§a✔ " + cleanedVillagers + " Villagers higienizados: §fSem nomes coloridos, sem efeitos artificiais, presos nas cabines físicas 1x1 com Atril e com Desconto Nativo de Zumbi Curado (1 Esmeralda)!\\n" +
    "§a✔ " + removedCustomItems + " itens exclusivos da Add-On removidos da mochila §f(evita itens '?' após tirar a Add-On).\\n" +
    "§eIMPORTANTE ANTES DE SAIR E TIRAR A ADD-ON: §fClique normalmente em cada Villager e faça §a1 troca na janela original do Minecraft§f. Isso grava e trava a troca de 1 Esmeralda para sempre no arquivo do seu mundo!"
  );
}

// Constrói a Mega Sala de Encantamentos Suprema + 60 Baús Duplos (42 Livros Max + 18 Materiais) + 42 Villagers Survival (1 Esmeralda)
// Gerada 100% na direção exata em que o jogador está olhando!
function buildMegaEnchantmentAndVillagerHall(player, buildMode = "complete") {
  const arch = getPlayerArchTheme(player);
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const fStart = 3;

  // Aplica Herói da Vila V (Desconto Máximo em todos os Villagers) + entrega Esmeraldas, Livros e Lápis-Lazúli
  try {
    player.addEffect("village_hero", 20000000, { amplifier: 4, showParticles: false });
    giveCustomQuantity(player, "minecraft:emerald", 64);
    giveCustomQuantity(player, "minecraft:book", 64);
    giveCustomQuantity(player, "minecraft:lapis_lazuli", 64);
  } catch (e) {}

  player.sendMessage(
    "§8[§d📚 Mega Sala de Encantamentos & Villagers Survival§8] §eConstruindo na direção do seu olhar (§a" + basis.dirLabelPt + "§e) no estilo §b" + arch.name + "§e:"
  );
  player.sendMessage(
    "§a• Altar Nível 30 + Bigornas + Rebolos + Ferraria + Bloco Multiplicador\\n" +
    "§b• 42 Baús Duplos (Todos os Livros Encantados no Nível Máximo) + 18 Baús Duplos de Lápis, XP, Esmeraldas e Livros\\n" +
    "§e• Trading Hall 100% Survival com 42 Villagers Curados (1 Esmeralda, Cabines Físicas 1x1 com Atril, Sino e Camas — continua funcionando mesmo após tirar a Add-On!)"
  );

  // 1. Constrói o Salão de Entrada com Altar de Encantamento Nv. 30, Bigornas, Rebolos, Mesas de Ferraria e Multiplicador
  try {
    for (let df = 0; df < 6; df++) {
      const f = fStart + df;
      for (let r = -5; r <= 5; r++) {
        safeSetBlock(
          dim,
          basis.rel(f, -1, r),
          r === 0 ? arch.lightBlock : Math.abs(r) === 1 ? arch.floorCenterBlock : arch.floorBlock
        );
        for (let dy = 0; dy <= 3; dy++) {
          if (r === -5 || (r === 5 && (buildMode === "chests_only" || df < 1 || df > 4))) {
            safeSetBlock(
              dim,
              basis.rel(f, dy, r),
              dy === 1 && df % 2 === 1 ? arch.lightBlock : arch.wallBlock
            );
          } else {
            safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
          }
        }
        safeSetBlock(dim, basis.rel(f, 4, r), arch.ceilingBlock);
      }
    }

    // Altar de Encantamento Nível 30 no Centro da Entrada (fStart + 3, r = 0) com 16 Estantes de Livros ao redor
    const fAltar = fStart + 3;
    for (let af = -2; af <= 2; af++) {
      for (let ar = -2; ar <= 2; ar++) {
        if (Math.abs(af) === 2 || Math.abs(ar) === 2) {
          // Deixa abertura frontal (af === -2, ar === 0) e traseira (af === 2, ar === 0) para circular livremente
          if ((af === -2 || af === 2) && ar === 0) continue;
          safeSetBlock(dim, basis.rel(fAltar + af, 0, ar), "minecraft:bookshelf");
          safeSetBlock(dim, basis.rel(fAltar + af, 1, ar), "minecraft:bookshelf");
        }
      }
    }
    safeSetBlock(dim, basis.rel(fAltar, 0, 0), "minecraft:enchanting_table");

    // Bancadas de Encantar, Forja e Multiplicador nas Laterais da Entrada
    safeSetBlock(dim, basis.rel(fStart + 1, 0, -4), "minecraft:lodestone");
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(fStart + 1, 1, -3),
      basis.leftInwardDir,
      ["§l§d[MULTIPLICADOR]", "§eClique=+1 Pack", "§bShift=+5 Packs", "§aBater=Shulker!"],
      arch.wallSignBlock
    );
    safeSetBlock(dim, basis.rel(fStart + 2, 0, -4), "minecraft:anvil");
    safeSetBlock(dim, basis.rel(fStart + 3, 0, -4), "minecraft:anvil");
    safeSetBlock(dim, basis.rel(fStart + 4, 0, -4), "minecraft:grindstone");
    safeSetBlock(dim, basis.rel(fStart + 5, 0, -4), "minecraft:smithing_table");

    safeSetBlock(dim, basis.rel(fStart + 1, 0, 4), "minecraft:ender_chest");
    safeSetBlock(dim, basis.rel(fStart + 2, 0, 4), "minecraft:crafting_table");
    safeSetBlock(dim, basis.rel(fStart + 3, 0, 4), "minecraft:chiseled_bookshelf");
    safeSetBlock(dim, basis.rel(fStart + 4, 0, 4), "minecraft:lectern");
    safeSetBlock(dim, basis.rel(fStart + 5, 0, 4), "minecraft:anvil");
  } catch (e) {}

  // Lista combinada dos 60 Baús Duplos (42 Livros Encantados Nv. Máximo + 18 Suprimentos de Encantar)
  const totalChestBays = buildMode === "villagers_only" ? 0 : 10; // 10 Bays * 6 Baús = 60 Baús Duplos!
  const totalVillagerPairs = buildMode === "chests_only" ? 0 : 21; // 21 pares (Esquerda + Direita) = 42 Villagers!

  let bayCursor = 0;
  let chestItemIdx = 0;
  let villagerPairCursor = 0;

  // Se incluir o Trading Hall de Villagers, constrói a passagem conectada + Sino da Vila + Camas de Vila Survival
  if (totalVillagerPairs > 0) {
    try {
      const centerR = totalChestBays > 0 ? 10 : 0;
      if (totalChestBays > 0) {
        for (let df = 0; df < 4; df++) {
          const f = fStart + 1 + df;
          for (let r = 5; r <= 14; r++) {
            safeSetBlock(dim, basis.rel(f, -1, r), r === 10 ? arch.floorCenterBlock : arch.floorBlock);
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
            }
            safeSetBlock(dim, basis.rel(f, 4, r), arch.ceilingBlock);
          }
        }
      }
      // Instala Sino da Vila (minecraft:bell) na entrada do Trading Hall para registrar Vila oficial no Survival Vanilla
      safeSetBlock(dim, basis.rel(fStart + 4, 0, centerR - 1), "minecraft:bell");
      placeExternalWallSignOnPillar(
        dim,
        basis.rel(fStart + 4, 2, centerR - 1),
        basis.backDir,
        ["§l§2[VILA SURVIVAL]", "§e42 Bibliotecários", "§aTroca: 1 Esmer.", "§f1 Troca = Trava!"],
        arch.wallSignBlock
      );
    } catch (e) {}
  }

  const job = system.runInterval(() => {
    try {
      // Etapa A: Constrói os 10 Bays com os 60 Baús Duplos (42 Livros Max + 18 Materiais)
      if (bayCursor < totalChestBays) {
        const fBase = fStart + 6 + bayCursor * 3;

        for (let df = 0; df < 3; df++) {
          const cf = fBase + df;
          for (let r = -4; r <= 4; r++) {
            safeSetBlock(
              dim,
              basis.rel(cf, -1, r),
              r === 0 && df === 1 ? arch.lightBlock : r === 0 ? arch.floorCenterBlock : arch.floorBlock
            );
            for (let dy = 0; dy <= 3; dy++) {
              if (r === -4 || r === 4) {
                safeSetBlock(
                  dim,
                  basis.rel(cf, dy, r),
                  dy === 1 && df === 1 ? arch.lightBlock : arch.wallBlock
                );
              } else {
                safeSetBlock(dim, basis.rel(cf, dy, r), "minecraft:air");
              }
            }
            safeSetBlock(dim, basis.rel(cf, 4, r), arch.ceilingBlock);
          }

          if (df === 2) {
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(dim, basis.rel(cf, dy, -3), dy === 1 ? arch.lightBlock : arch.pillarBlock);
              safeSetBlock(dim, basis.rel(cf, dy, 3), dy === 1 ? arch.lightBlock : arch.pillarBlock);
            }
          }
        }

        // Preenche 6 Baús Duplos neste Bay (3 na esquerda, 3 na direita)
        for (let lvl = 0; lvl < 3; lvl++) {
          for (const side of ["left", "right"]) {
            const rChest = side === "left" ? -3 : 3;
            const facingDir = side === "left" ? basis.leftInwardDir : basis.rightInwardDir;
            const posA = basis.rel(fBase, lvl, rChest);
            const posB = basis.rel(fBase + 1, lvl, rChest);

            if (chestItemIdx < MEGA_ENCHANT_42_SPECS.length) {
              const enchSpec = MEGA_ENCHANT_42_SPECS[chestItemIdx++];
              fillDoubleChestWithEnchantedBook(dim, posA, posB, enchSpec, facingDir, arch.wallSignBlock);
            } else {
              const supIdx = chestItemIdx - MEGA_ENCHANT_42_SPECS.length;
              chestItemIdx++;
              if (supIdx < MEGA_ENCHANT_18_SUPPLIES_SPECS.length) {
                const supSpec = MEGA_ENCHANT_18_SUPPLIES_SPECS[supIdx];
                fillDoubleChestWithSingleItem(
                  dim,
                  posA,
                  posB,
                  supSpec.id,
                  facingDir,
                  supSpec.sign,
                  arch.wallSignBlock
                );
              }
            }
          }
        }

        bayCursor++;
        if (bayCursor === totalChestBays) {
          const endF = fStart + 6 + totalChestBays * 3;
          for (let r = -4; r <= 4; r++) {
            safeSetBlock(dim, basis.rel(endF, -1, r), arch.floorBlock);
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(
                dim,
                basis.rel(endF, dy, r),
                dy === 1 && r === 0 ? arch.lightBlock : arch.wallBlock
              );
            }
            safeSetBlock(dim, basis.rel(endF, 4, r), arch.ceilingBlock);
          }
        }

        player.onScreenDisplay.setActionBar(
          "§dMega Sala de Encantamentos (" + basis.dirLabelPt + "): §a" + Math.min(60, chestItemIdx) + "/60 Baús Duplos"
        );
        return;
      }

      // Etapa B: Constrói o Trading Hall Survival dos 42 Villagers Bibliotecários (1 Esmeralda)
      if (villagerPairCursor < totalVillagerPairs) {
        const centerR = totalChestBays > 0 ? 10 : 0;
        const fStall = fStart + 5 + villagerPairCursor * 2;

        // Constrói 2 blocos de extensão da Galeria de Villagers (fStall e fStall + 1)
        for (let df = 0; df < 2; df++) {
          const cf = fStall + df;
          for (let dr = -4; dr <= 4; dr++) {
            const r = centerR + dr;
            safeSetBlock(
              dim,
              basis.rel(cf, -1, r),
              dr === 0 ? arch.floorCenterBlock : Math.abs(dr) === 1 ? arch.lightBlock : arch.floorBlock
            );
            for (let dy = 0; dy <= 3; dy++) {
              if (dr === -4 || dr === 4) {
                safeSetBlock(dim, basis.rel(cf, dy, r), dy === 2 ? arch.lightBlock : arch.wallBlock);
              } else {
                safeSetBlock(dim, basis.rel(cf, dy, r), "minecraft:air");
              }
            }
            safeSetBlock(dim, basis.rel(cf, 4, r), arch.ceilingBlock);
          }
        }

        const leftIdx = villagerPairCursor * 2;
        const rightIdx = villagerPairCursor * 2 + 1;

        if (leftIdx < MEGA_ENCHANT_42_SPECS.length) {
          spawnSingleLibrarianVillagerStall(
            dim,
            basis,
            fStall,
            centerR - 3,
            centerR - 2,
            basis.leftInwardDir,
            MEGA_ENCHANT_42_SPECS[leftIdx],
            arch
          );
        }

        if (rightIdx < MEGA_ENCHANT_42_SPECS.length) {
          spawnSingleLibrarianVillagerStall(
            dim,
            basis,
            fStall,
            centerR + 3,
            centerR + 2,
            basis.rightInwardDir,
            MEGA_ENCHANT_42_SPECS[rightIdx],
            arch
          );
        }

        villagerPairCursor++;
        if (villagerPairCursor === totalVillagerPairs) {
          // Fecha a parede de fundo do Trading Hall
          const endVF = fStart + 5 + totalVillagerPairs * 2;
          for (let dr = -4; dr <= 4; dr++) {
            const r = centerR + dr;
            safeSetBlock(dim, basis.rel(endVF, -1, r), arch.floorBlock);
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(
                dim,
                basis.rel(endVF, dy, r),
                dy === 1 && dr === 0 ? arch.lightBlock : arch.wallBlock
              );
            }
            safeSetBlock(dim, basis.rel(endVF, 4, r), arch.ceilingBlock);
          }
        }

        player.onScreenDisplay.setActionBar(
          "§aTrading Hall Survival (" + basis.dirLabelPt + "): §e" + Math.min(42, villagerPairCursor * 2) + "/42 Villagers (1 Esmeralda)"
        );
        return;
      }

      // Concluído!
      system.clearRun(job);
      player.teleport(basis.relTp(fStart + 1, 0, 0));
      try { player.playSound("random.totem", { pitch: 1.15, volume: 1.0 }); } catch (e) {}
      player.sendMessage(
        "§8[§a📚 Mega Sala de Encantamentos & Villagers Survival Pronta!§8]\\n" +
        "§a• Construída na direção do seu olhar (" + basis.dirLabelPt + ")!\\n" +
        "§a• Como manter os Villagers p/ sempre mesmo depois de tirar a Add-On: §fClique normalmente nos Villagers para abrir a §eJanela Original do Minecraft§f e faça §a1 troca (1 Esmeralda)§f. Isso salva e trava o desconto de Zumbi Curado no seu mundo para sempre!"
      );
    } catch (e) {
      system.clearRun(job);
    }
  }, 2);
}

// Troca garantida de 1 Esmeralda com qualquer um dos 42 Villagers Bibliotecários Mestre
function executeInstant1EmeraldTrade(player, enchId, bookCount = 1) {
  const spec = MEGA_ENCHANT_42_SPECS.find((s) => s.id === enchId) || MEGA_ENCHANT_42_SPECS[0];
  const inv = player.getComponent("minecraft:inventory")?.container;
  if (!inv) return;

  // Deduz 1 Esmeralda se o jogador tiver no inventário (mas nunca bloqueia caso queira pegar direto)
  try {
    for (let i = 0; i < inv.size; i++) {
      const it = inv.getItem(i);
      if (it && it.typeId === "minecraft:emerald") {
        if (it.amount > 1) {
          it.amount -= 1;
          inv.setItem(i, it);
        } else {
          inv.setItem(i, undefined);
        }
        break;
      }
    }
  } catch (e) {}

  for (let c = 0; c < bookCount; c++) {
    const book = createMaxEnchantedBookItem(spec);
    if (book) {
      const leftover = inv.addItem(book);
      if (leftover) {
        player.dimension.spawnItem(leftover, player.location);
      }
    }
  }

  try {
    player.playSound("random.orb", { pitch: 1.3, volume: 1.0 });
    player.addExperience(12);
  } catch (e) {}

  player.onScreenDisplay.setActionBar(
    "§a§l[Troca 1 Esmeralda] §fRecebido §d+" + bookCount + "x Livro " + spec.name + "§f!"
  );
  player.sendMessage(
    "§8[§a💎 Bibliotecário 1 Esmeralda§8] §aTroca concluída por §e1 Esmeralda§a: entregue §d" + bookCount + "x Livro Encantado " + spec.name + "§a!"
  );
}

function openLibrarian1EmeraldTradeModal(player, enchId, targetVillager = null) {
  const spec = MEGA_ENCHANT_42_SPECS.find((s) => s.id === enchId) || MEGA_ENCHANT_42_SPECS[0];
  const form = new ActionFormData()
    .title("§l§2Baia: " + spec.sign + " (Survival)")
    .body(
      "§7Assistente da Cabine de Bibliotecário (100% Compatível c/ Survival):\\n" +
      "§e• Encantamento da Baia: §d§l" + spec.name + "\\n" +
      "§a• Dica p/ Remover a Add-On depois: §fClique §aSEM agachar§f no Villager para abrir a Janela Original do Minecraft e faça 1 troca de 1 Esmeralda para travar o livro no mundo!"
    )
    .button("§l§a[1 Esmeralda] Pegar 1x Livro " + spec.name + "\\n§r§8Entrega o Livro Encantado Nível Máximo na mochila", "textures/items/book_enchanted")
    .button("§l§e[1 Esmeralda] Pegar 5x Livros " + spec.name + "\\n§r§8Pacote com 5 Livros Encantados no Nível Máximo", "textures/items/book_enchanted")
    .button("§l§6🔄 Girar/Resetar Troca Nativa deste Villager (Reroll)\\n§r§8Atualiza o livro da janela original do Survival (1 Esmeralda)", "textures/items/compass_item")
    .button("§l§b[1 Esmeralda] Aplicar " + spec.sign + " Direto no Item da Mão\\n§r§8Encanta sua Arma/Armadura/Ferramenta na hora", "textures/items/anvil_top_damaged_0")
    .button("§l§2🛡️ Preparar Mundo p/ Remover a Add-On (100% Vanilla)\\n§r§8Deixa todos os Villagers 100% Survival limpos e sem itens '?'", "textures/items/totem")
    .button("§8Fechar");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      executeInstant1EmeraldTrade(player, spec.id, 1);
    } else if (res.selection === 1) {
      executeInstant1EmeraldTrade(player, spec.id, 5);
    } else if (res.selection === 2) {
      rerollVillagerVanillaLibrarianTrade(player, targetVillager);
    } else if (res.selection === 3) {
      const equip = player.getComponent("minecraft:equippable");
      const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
      if (!handItem) {
        player.sendMessage("§8[§cVillager§8] §cSegure uma armadura, espada ou ferramenta na mão ou pegue o Livro Encantado acima!");
        return;
      }
      if (spec.id === "omni_book") {
        applySafeEnchant(handItem, "mending", 1);
        applySafeEnchant(handItem, "unbreaking", 3);
        applySafeEnchant(handItem, "protection", 4);
        applySafeEnchant(handItem, "sharpness", 5);
        applySafeEnchant(handItem, "efficiency", 5);
      } else {
        applySafeEnchant(handItem, spec.id, spec.max);
      }
      equip.setEquipment(EquipmentSlot.Mainhand, handItem);
      try { player.playSound("random.anvil_use", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
      player.sendMessage("§8[§a💎 Bibliotecário§8] §aAplicado §d" + spec.name + " §adiretamente no item da sua mão!");
    } else if (res.selection === 4) {
      prepareWorldForRemovingAddon(player);
    }
  });
}

function openSpawnSingleLibrarianModal(player) {
  const options = MEGA_ENCHANT_42_SPECS.map(
    (s, i) => "#" + (i + 1) + " - " + s.name + " [1 Esmeralda Survival]"
  );
  const modal = new ModalFormData()
    .title("Invocar Villager Survival (1 Esmer.)")
    .dropdown("Escolha qual dos 42 Villagers Bibliotecários invocar na direção do seu olhar:", options, 0)
    .toggle("Construir Cabine 1x1 Física de Survival (Atril + Paredes + Placa)", true);

  showFormSafely(player, modal, (res) => {
    const [idx, withStall] = res.formValues;
    const spec = MEGA_ENCHANT_42_SPECS[Number(idx) || 0];
    const basis = getLookBasis(player);
    const arch = getPlayerArchTheme(player);
    const dim = player.dimension;

    player.addEffect("village_hero", 20000000, { amplifier: 4, showParticles: false });

    if (withStall) {
      spawnFrontSingleLibrarianStall(dim, basis, spec, arch);
    } else {
      const v = dim.spawnEntity("minecraft:villager_v2", basis.relTp(2, 0, 0));
      if (v) {
        try { v.triggerEvent("minecraft:ageable_grow_up"); } catch (e) {}
        try { v.triggerEvent("minecraft:become_librarian"); } catch (e) {}
        try { v.triggerEvent("minecraft:villager_converted"); } catch (e) {}
        try { v.triggerEvent("minecraft:schedule_work_pro_villager"); } catch (e) {}
        v.nameTag = "";
        v.addTag("survivalmenu_librarian:" + spec.id);
      }
    }
    player.sendMessage("§8[§a💎 Villager Survival Invocado§8] §aBibliotecário Curado (1 Esmeralda) criado na direção do seu olhar (" + basis.dirLabelPt + ")! Clique nele para abrir a troca original do Minecraft e faça 1 troca para travar no mundo!");
  });
}

function openGiveEnchantedBookModal(player) {
  const options = MEGA_ENCHANT_42_SPECS.map(
    (s, i) => "#" + (i + 1) + " - " + s.name + " (Nv. Máximo " + s.max + ")"
  );
  const modal = new ModalFormData()
    .title("Pegar Livro Encantado Nv. Máximo")
    .dropdown("Escolha o Encantamento no Nível Máximo:", options, 0)
    .slider("Quantidade de Livros Encantados (1 a 54)", 1, 54, 1, 5);

  showFormSafely(player, modal, (res) => {
    const [idx, qty] = res.formValues;
    const spec = MEGA_ENCHANT_42_SPECS[Number(idx) || 0];
    executeInstant1EmeraldTrade(player, spec.id, Math.max(1, Number(qty) || 1));
  });
}

function openMegaEnchantmentHallMenu(player) {
  const arch = getPlayerArchTheme(player);
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§dSala Encantamentos & Villagers Survival")
    .body(
      "§7Direção do olhar: §a" + basis.dirLabelPt + " §7| Estilo: §e" + arch.name + "\\n" +
      "§a✔ Villagers 100% Compatíveis c/ Survival Puro: §fCabines físicas 1x1 com Atril, sem nomes artificiais e com troca nativa de §a1 Esmeralda§f que continua funcionando mesmo após você remover a Add-On!"
    )
    .button("§l§d[1] Construir Mega Sala Completa (60 Baús + 42 Villagers Survival)\\n§r§8Altar Nv.30 + 60 Baús Duplos + 42 Cabines 1x1 c/ Troca Nativa 1 Esmer.", "textures/items/book_enchanted")
    .button("§l§b[2] Construir Sala dos 60 Baús de Encantamentos & Materiais\\n§r§8Altar Nv.30 + 42 Baús de Livros Max + 18 Baús de Lápis/XP/Bigornas", "textures/items/chest_minecart")
    .button("§l§a[3] Construir Trading Hall Survival dos 42 Villagers (1 Esmer.)\\n§r§842 Cabines Físicas 1x1 + Atris + Sino + Desconto de Zumbi Curado", "textures/items/emerald")
    .button("§l§e[4] Invocar 1 Cabine de Villager Survival (1 Esmeralda) na Frente\\n§r§8Cabine 1x1 física pronta p/ continuar no mundo sem Add-On", "textures/items/totem")
    .button("§l§2[5] 🛡️ Preparar Mundo p/ Remover a Add-On (100% Vanilla Puro)\\n§r§8Higieniza Villagers e limpa itens da Add-On p/ não ficar '?'", "textures/items/apple_golden")
    .button("§l§5[6] Pegar Livros Encantados no Máximo Direto na Mochila\\n§r§8Escolha qualquer encantamento Nv. Máximo + 64 Esmeraldas", "textures/items/nether_star")
    .button("§l§6[7] Trocar Estilo Arquitetônico da Sala\\n§r§8Quartzo, Medieval, Bunker, Santuário Nether ou Galeria End", "textures/items/painting")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      buildMegaEnchantmentAndVillagerHall(player, "complete");
    } else if (res.selection === 1) {
      buildMegaEnchantmentAndVillagerHall(player, "chests_only");
    } else if (res.selection === 2) {
      buildMegaEnchantmentAndVillagerHall(player, "villagers_only");
    } else if (res.selection === 3) {
      openSpawnSingleLibrarianModal(player);
    } else if (res.selection === 4) {
      prepareWorldForRemovingAddon(player);
    } else if (res.selection === 5) {
      openGiveEnchantedBookModal(player);
    } else if (res.selection === 6) {
      openArchitecturalThemeSelector(player, openMegaEnchantmentHallMenu);
    } else if (res.selection === 7) {
      openMainMenu(player);
    }
  });
}

// ============================================================================
// MENU SUPER FERRAMENTAS: 50X50, CHUNK 16X16, BEDROCK & MULTIPLICADOR
// ============================================================================
function openSuperToolsMenu(player) {
  const depth = Number(player.getDynamicProperty("survivalmenu:martelo_depth")) || 3;
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§6Super Ferramentas & Multiplicador")
    .body(
      "§7Super Ferramentas com Auto-Baús Duplos na direção do olhar (§a" + basis.dirLabelPt + "§7):\\n" +
      "§e• Martelo 50x50: §fProfundidade atual = §a" + depth + " camadas\\n" +
      "§e• Destruidor de Chunk: §f16x16 até Y:-63 + Queda Lenta\\n" +
      "§e• Quebrador de Bedrock: §fDropa Bedrock / Abre Teto 3x3"
    )
    .button("§l§aPegar Kit Super Ferramentas + 4x Multiplicador (1x)\\n§r§8Martelo 50x50 + Destruidor Chunk + Bedrock + Magnetita", "textures/items/netherite_pickaxe")
    .button("§l§ePegar Super Ferramentas & Multiplicadores em Pack (64x)\\n§r§8Recebe 64x Destruidores de Chunk + 64x Blocos Multiplicadores", "textures/items/tnt_side")
    .button("§l§6🔨 Ativar Martelo Titã 50x50 Agora (" + depth + " Camadas)\\n§r§8Escava 50x50 a 500 blocos/tick (60 FPS) + Gera Baús Duplos", "textures/items/iron_pickaxe")
    .button("§l§b🔨 Escolher Profundidade do Martelo 50x50 (1 a 25)\\n§r§8Equivale ao atalho Agachar (Shift) + Clicar", "textures/items/compass_item")
    .button("§l§c💣 Ativar Destruidor de Chunk 16x16 Agora (Até Y:-63)\\n§r§8Escava a Chunk inteira + Queda Lenta + Fundo Iluminado + Baús", "textures/items/fireball")
    .button("§l§d🟣 Quebrador de Bedrock: Passagem 3x3 Teto do Nether\\n§r§8Abre túnel 3x3 na Bedrock + Coluna de Escadas + Dropa Bedrock", "textures/items/ender_eye")
    .button("§l§5🔮 Colocar Estação do Bloco Multiplicador + Baú Duplo\\n§r§8Instala Magnetita Multiplicadora + Baú na direção do seu olhar", "textures/items/shulker_shell")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      giveSuperToolsAndMultiplierKit(player, 1);
      player.sendMessage("§8[§aSuper Ferramentas§8] §aEntregues: Martelo Titã 50x50, Destruidor de Chunk 16x16, Quebrador de Bedrock e 4x Blocos Multiplicadores!");
    } else if (res.selection === 1) {
      giveSuperToolsAndMultiplierKit(player, 64);
      player.sendMessage("§8[§aSuper Ferramentas§8] §eEntregues 64x Destruidores de Chunk + 64x Blocos Multiplicadores + Martelo 50x50 + Quebrador de Bedrock!");
    } else if (res.selection === 2) {
      startMartelo50x50Excavation(player, player.location, depth);
    } else if (res.selection === 3) {
      openMarteloDepthSelectorModal(player);
    } else if (res.selection === 4) {
      startChunkDestroyer16x16(player, player.location);
    } else if (res.selection === 5) {
      useQuebradorBedrockTool(player, null, true);
    } else if (res.selection === 6) {
      spawnMultiplierStationInFront(player);
    } else if (res.selection === 7) {
      openMainMenu(player);
    }
  });
}

// ============================================================================
// SUBSCRIÇÕES DE EVENTOS PARA SUPER FERRAMENTAS, MULTIPLICADOR & VILLAGERS SURVIVAL
// ============================================================================
const superToolCooldowns = new Map();
function canTriggerSuperTool(player) {
  const now = Date.now();
  const last = superToolCooldowns.get(player.id) || 0;
  if (now - last < 450) return false;
  superToolCooldowns.set(player.id, now);
  return true;
}

function getVillagerEnchantTag(entity) {
  try {
    if (!entity || !entity.getTags) return null;
    const tags = entity.getTags();
    for (const t of tags) {
      if (t.startsWith("survivalmenu_librarian:")) {
        return t.replace("survivalmenu_librarian:", "");
      }
    }
  } catch (e) {}
  return null;
}

// ============================================================================
// CENTRAL DE KITS SURVIVAL & FARMS (20 KITS COMPLETOS + KIT #1 IDÊNTICO À FOTO)
// ============================================================================

function applyKitMaxEnchantments(itemStack, enchList) {
  if (!itemStack || !enchList || !enchList.length) return itemStack;
  try {
    const enchComp = itemStack.getComponent("minecraft:enchantable");
    if (!enchComp) return itemStack;
    for (const pair of enchList) {
      try {
        const eType = EnchantmentTypes.get(pair[0]) || EnchantmentTypes.get("minecraft:" + pair[0]);
        if (eType) {
          const lvl = Math.min(pair[1] || eType.maxLevel || 1, eType.maxLevel || 5);
          enchComp.addEnchantment({ type: eType, level: lvl });
        }
      } catch (innerE) {}
    }
  } catch (e) {}
  return itemStack;
}

const SURVIVAL_AND_FARM_KITS_RUNTIME = [
  {
    index: 1,
    id: "kit_foto_farm_ouro_xp",
    name: "§6§lKit #1 [EXATO DA FOTO 📸]: Farm de Ouro e XP + Trident Killer",
    shortSign: "KIT 01 FARM OURO FOTO",
    icon: "textures/items/trident",
    shulkerBlock: "minecraft:yellow_shulker_box",
    desc: "Idêntico slot por slot ao Large Chest da foto (896 Pedras, 128 Vidros, 2 Lavas, 304 Obsidianas, 4 Neves Fofas, 8 Pistões, 8 Observadores, 8 Bancadas, 4 Baús, 6 Funis, 4 Ejetores, 1 Tridente, 2 Águas, 128 Lajes, 1 Comparador, 2 Repetidores, 16 Tochas Redstone, 32 Redstones, 2 Alavancas)!",
    exactSlots: [
      // Linha 1 (Slots 0..8): 7x 64 Stone + 2x 64 Glass
      { slot: 0, id: "minecraft:stone", count: 64 },
      { slot: 1, id: "minecraft:stone", count: 64 },
      { slot: 2, id: "minecraft:stone", count: 64 },
      { slot: 3, id: "minecraft:stone", count: 64 },
      { slot: 4, id: "minecraft:stone", count: 64 },
      { slot: 5, id: "minecraft:stone", count: 64 },
      { slot: 6, id: "minecraft:stone", count: 64 },
      { slot: 7, id: "minecraft:glass", count: 64 },
      { slot: 8, id: "minecraft:glass", count: 64 },
      // Linha 2 (Slots 9..17): 7x 64 Stone + 2x 1 Lava Bucket
      { slot: 9, id: "minecraft:stone", count: 64 },
      { slot: 10, id: "minecraft:stone", count: 64 },
      { slot: 11, id: "minecraft:stone", count: 64 },
      { slot: 12, id: "minecraft:stone", count: 64 },
      { slot: 13, id: "minecraft:stone", count: 64 },
      { slot: 14, id: "minecraft:stone", count: 64 },
      { slot: 15, id: "minecraft:stone", count: 64 },
      { slot: 16, id: "minecraft:lava_bucket", count: 1 },
      { slot: 17, id: "minecraft:lava_bucket", count: 1 },
      // Linha 3 (Slots 18..26): 4x 64 Obsidian + 1x 48 Obsidian + 4x 1 Powder Snow Bucket
      { slot: 18, id: "minecraft:obsidian", count: 64 },
      { slot: 19, id: "minecraft:obsidian", count: 64 },
      { slot: 20, id: "minecraft:obsidian", count: 64 },
      { slot: 21, id: "minecraft:obsidian", count: 64 },
      { slot: 22, id: "minecraft:obsidian", count: 48 },
      { slot: 23, id: "minecraft:powder_snow_bucket", count: 1 },
      { slot: 24, id: "minecraft:powder_snow_bucket", count: 1 },
      { slot: 25, id: "minecraft:powder_snow_bucket", count: 1 },
      { slot: 26, id: "minecraft:powder_snow_bucket", count: 1 },
      // Linha 4 (Slots 27..35): 8 Piston, 8 Observer, 8 Crafting Table, 4 Chest, 6 Hopper, 4 Dispenser, 1 Trident, 2 Water Bucket
      { slot: 27, id: "minecraft:piston", count: 8 },
      { slot: 28, id: "minecraft:observer", count: 8 },
      { slot: 29, id: "minecraft:crafting_table", count: 8 },
      { slot: 30, id: "minecraft:chest", count: 4 },
      { slot: 31, id: "minecraft:hopper", count: 6 },
      { slot: 32, id: "minecraft:dispenser", count: 4 },
      { slot: 33, id: "minecraft:trident", count: 1, ench: [["impaling", 5], ["loyalty", 3], ["unbreaking", 3], ["mending", 1]] },
      { slot: 34, id: "minecraft:water_bucket", count: 1 },
      { slot: 35, id: "minecraft:water_bucket", count: 1 },
      // Linha 5 (Slots 36..42): 2x 64 Stone Slab, 1 Comparator, 2 Repeater, 16 Redstone Torch, 32 Redstone, 2 Lever
      { slot: 36, id: "minecraft:stone_slab", count: 64 },
      { slot: 37, id: "minecraft:stone_slab", count: 64 },
      { slot: 38, id: "minecraft:comparator", count: 1 },
      { slot: 39, id: "minecraft:repeater", count: 2 },
      { slot: 40, id: "minecraft:redstone_torch", count: 16 },
      { slot: 41, id: "minecraft:redstone", count: 32 },
      { slot: 42, id: "minecraft:lever", count: 2 }
    ]
  },
  {
    index: 2,
    id: "kit_farm_ouro_xp_pro_4_portais",
    name: "§e§lKit #2: Mega Farm de Ouro & XP PRO (4 Portais + Auto-Sorter)",
    shortSign: "KIT 02 FARM OURO PRO",
    icon: "textures/items/gold_ingot",
    shulkerBlock: "minecraft:orange_shulker_box",
    desc: "Versão expandida com 1.024 Obsidianas para 4 Portais 21x21, 4 Tridentes Max, Espada Pilhagem III, Funis, Baús e Fornalhas Potentes!",
    items: [
      { id: "minecraft:obsidian", count: 64, packs: 16 },
      { id: "minecraft:stone", count: 64, packs: 12 },
      { id: "minecraft:glass", count: 64, packs: 4 },
      { id: "minecraft:stone_slab", count: 64, packs: 2 },
      { id: "minecraft:piston", count: 64, packs: 1 },
      { id: "minecraft:observer", count: 64, packs: 1 },
      { id: "minecraft:dispenser", count: 32, packs: 1 },
      { id: "minecraft:hopper", count: 64, packs: 2 },
      { id: "minecraft:chest", count: 64, packs: 2 },
      { id: "minecraft:blast_furnace", count: 32, packs: 1 },
      { id: "minecraft:comparator", count: 32, packs: 1 },
      { id: "minecraft:repeater", count: 32, packs: 1 },
      { id: "minecraft:redstone_torch", count: 64, packs: 1 },
      { id: "minecraft:redstone", count: 64, packs: 2 },
      { id: "minecraft:lever", count: 16, packs: 1 },
      { id: "minecraft:lava_bucket", count: 1, packs: 2 },
      { id: "minecraft:powder_snow_bucket", count: 1, packs: 4 },
      { id: "minecraft:water_bucket", count: 1, packs: 2 },
      { id: "minecraft:trident", count: 1, packs: 2, ench: [["impaling", 5], ["loyalty", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_sword", count: 1, packs: 1, ench: [["sharpness", 5], ["looting", 3], ["unbreaking", 3], ["mending", 1]] }
    ]
  },
  {
    index: 3,
    id: "kit_trident_killer_universal",
    name: "§b§lKit #3: Trident Killer Universal (Matadouro Automático)",
    shortSign: "KIT 03 TRIDENT KILLER",
    icon: "textures/items/prismarine_shard",
    shulkerBlock: "minecraft:cyan_shulker_box",
    desc: "Monte até 4 Matadouros Automáticos de Tridente para qualquer Farm de Mobs + 4 Tridentes Empalamento V + Espada Pilhagem III!",
    items: [
      { id: "minecraft:piston", count: 16, packs: 1 },
      { id: "minecraft:sticky_piston", count: 16, packs: 1 },
      { id: "minecraft:observer", count: 16, packs: 1 },
      { id: "minecraft:redstone_torch", count: 16, packs: 1 },
      { id: "minecraft:lever", count: 8, packs: 1 },
      { id: "minecraft:repeater", count: 16, packs: 1 },
      { id: "minecraft:comparator", count: 16, packs: 1 },
      { id: "minecraft:redstone", count: 64, packs: 1 },
      { id: "minecraft:hopper", count: 64, packs: 1 },
      { id: "minecraft:hopper_minecart", count: 1, packs: 4 },
      { id: "minecraft:rail", count: 32, packs: 1 },
      { id: "minecraft:chest", count: 64, packs: 1 },
      { id: "minecraft:glass", count: 64, packs: 2 },
      { id: "minecraft:stone_slab", count: 64, packs: 2 },
      { id: "minecraft:stone_bricks", count: 64, packs: 4 },
      { id: "minecraft:sea_lantern", count: 64, packs: 1 },
      { id: "minecraft:trident", count: 1, packs: 4, ench: [["impaling", 5], ["loyalty", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_sword", count: 1, packs: 1, ench: [["sharpness", 5], ["looting", 3], ["unbreaking", 3], ["mending", 1]] }
    ]
  },
  {
    index: 4,
    id: "kit_mega_farm_ferro_bedrock",
    name: "§f§lKit #4: Mega Farm de Ferro Bedrock (20 Aldeões + Camas + Lava)",
    shortSign: "KIT 04 FARM DE FERRO",
    icon: "textures/items/iron_ingot",
    shulkerBlock: "minecraft:white_shulker_box",
    desc: "Todos os itens para a Farm de Ferro do Minecraft Bedrock: 20 Camas, 20 Mesas de Arquearia, 20 Ovos de Aldeão, Lava, Água, Placas e Funis!",
    items: [
      { id: "minecraft:fletching_table", count: 20, packs: 1 },
      { id: "minecraft:villager_spawn_egg", count: 20, packs: 1 },
      { id: "minecraft:bell", count: 2, packs: 1 },
      { id: "minecraft:stone_bricks", count: 64, packs: 10 },
      { id: "minecraft:glass", count: 64, packs: 4 },
      { id: "minecraft:stone_brick_slab", count: 64, packs: 4 },
      { id: "minecraft:oak_leaves", count: 64, packs: 3 },
      { id: "minecraft:oak_sign", count: 16, packs: 2 },
      { id: "minecraft:campfire", count: 4, packs: 1 },
      { id: "minecraft:hopper", count: 16, packs: 1 },
      { id: "minecraft:chest", count: 16, packs: 1 },
      { id: "minecraft:lava_bucket", count: 1, packs: 4 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 },
      { id: "minecraft:white_bed", count: 1, packs: 20 }
    ]
  },
  {
    index: 5,
    id: "kit_farm_creeper_polvora_mobs",
    name: "§2§lKit #5: Farm de Creeper (Pólvora Infinita) & Mob Trap Geral",
    shortSign: "KIT 05 FARM CREEPER",
    icon: "textures/items/gunpowder",
    shulkerBlock: "minecraft:green_shulker_box",
    desc: "Blocos para múltiplos andares de Farm de Creeper/Pólvora: Ardósia, Alçapões, Botões, Tapetes, Andaimes, Gelo e Trident Killer!",
    items: [
      { id: "minecraft:polished_deepslate", count: 64, packs: 16 },
      { id: "minecraft:spruce_trapdoor", count: 64, packs: 8 },
      { id: "minecraft:stone_button", count: 64, packs: 6 },
      { id: "minecraft:white_carpet", count: 64, packs: 4 },
      { id: "minecraft:scaffolding", count: 64, packs: 4 },
      { id: "minecraft:packed_ice", count: 64, packs: 2 },
      { id: "minecraft:glass", count: 64, packs: 2 },
      { id: "minecraft:stone_slab", count: 64, packs: 2 },
      { id: "minecraft:piston", count: 8, packs: 1 },
      { id: "minecraft:observer", count: 8, packs: 1 },
      { id: "minecraft:redstone_torch", count: 16, packs: 1 },
      { id: "minecraft:lever", count: 4, packs: 1 },
      { id: "minecraft:hopper", count: 16, packs: 1 },
      { id: "minecraft:chest", count: 16, packs: 1 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 },
      { id: "minecraft:lava_bucket", count: 1, packs: 2 },
      { id: "minecraft:trident", count: 1, packs: 1, ench: [["impaling", 5], ["loyalty", 3], ["unbreaking", 3], ["mending", 1]] }
    ]
  },
  {
    index: 6,
    id: "kit_farm_raid_totem_esmeralda",
    name: "§a§lKit #6: Farm de Raid (Invasão 1.21), Totens & Esmeraldas",
    shortSign: "KIT 06 FARM DE RAID",
    icon: "textures/items/totem",
    shulkerBlock: "minecraft:lime_shulker_box",
    desc: "Construa a Farm de Raid completa: Frascos Sinistros (Ominous Bottle), Sino, Camas, Aldeões, Folhas Anti-Spawn, Trident Killer e Separador!",
    items: [
      { id: "minecraft:ominous_bottle", count: 64, packs: 2 },
      { id: "minecraft:villager_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:pillager_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:bell", count: 4, packs: 1 },
      { id: "minecraft:white_bed", count: 1, packs: 4 },
      { id: "minecraft:composter", count: 4, packs: 1 },
      { id: "minecraft:stone_bricks", count: 64, packs: 12 },
      { id: "minecraft:oak_leaves", count: 64, packs: 6 },
      { id: "minecraft:glass", count: 64, packs: 4 },
      { id: "minecraft:scaffolding", count: 64, packs: 4 },
      { id: "minecraft:piston", count: 8, packs: 1 },
      { id: "minecraft:observer", count: 8, packs: 1 },
      { id: "minecraft:redstone_torch", count: 16, packs: 1 },
      { id: "minecraft:lever", count: 4, packs: 1 },
      { id: "minecraft:hopper", count: 32, packs: 1 },
      { id: "minecraft:chest", count: 32, packs: 1 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 },
      { id: "minecraft:lava_bucket", count: 1, packs: 2 },
      { id: "minecraft:trident", count: 1, packs: 2, ench: [["impaling", 5], ["loyalty", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:totem_of_undying", count: 1, packs: 4 }
    ]
  },
  {
    index: 7,
    id: "kit_farm_cana_bambu_melancia",
    name: "§2§lKit #7: Farm Automática de Cana, Bambu, Melancia & Abóbora",
    shortSign: "KIT 07 FARMS AGRICOLAS",
    icon: "textures/items/reeds",
    shulkerBlock: "minecraft:green_shulker_box",
    desc: "64 Pistões, 64 Observadores, Trilhos Elétricos, Carrinhos c/ Funil, Mudas de Cana/Bambu e Sementes!",
    items: [
      { id: "minecraft:piston", count: 64, packs: 2 },
      { id: "minecraft:sticky_piston", count: 64, packs: 1 },
      { id: "minecraft:observer", count: 64, packs: 2 },
      { id: "minecraft:redstone", count: 64, packs: 3 },
      { id: "minecraft:powered_rail", count: 64, packs: 2 },
      { id: "minecraft:rail", count: 64, packs: 2 },
      { id: "minecraft:redstone_torch", count: 64, packs: 1 },
      { id: "minecraft:redstone_block", count: 64, packs: 1 },
      { id: "minecraft:hopper", count: 64, packs: 1 },
      { id: "minecraft:chest", count: 64, packs: 1 },
      { id: "minecraft:hopper_minecart", count: 1, packs: 6 },
      { id: "minecraft:mud", count: 64, packs: 4 },
      { id: "minecraft:sand", count: 64, packs: 4 },
      { id: "minecraft:dirt", count: 64, packs: 4 },
      { id: "minecraft:glass", count: 64, packs: 4 },
      { id: "minecraft:sugar_cane", count: 64, packs: 4 },
      { id: "minecraft:bamboo", count: 64, packs: 4 },
      { id: "minecraft:melon_seeds", count: 64, packs: 1 },
      { id: "minecraft:pumpkin_seeds", count: 64, packs: 1 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 }
    ]
  },
  {
    index: 8,
    id: "kit_redstone_auto_sorter",
    name: "§c§lKit #8: Mestre da Redstone & Separador Automático (Auto-Sorter)",
    shortSign: "KIT 08 AUTO SORTER",
    icon: "textures/items/comparator",
    shulkerBlock: "minecraft:red_shulker_box",
    desc: "256 Funis, 128 Baús, 128 Baús c/ Armadilha, 64 Comparadores, 64 Repetidores, Pistões, Observadores, Slime e Mel!",
    items: [
      { id: "minecraft:hopper", count: 64, packs: 4 },
      { id: "minecraft:chest", count: 64, packs: 2 },
      { id: "minecraft:trapped_chest", count: 64, packs: 2 },
      { id: "minecraft:barrel", count: 64, packs: 2 },
      { id: "minecraft:comparator", count: 64, packs: 2 },
      { id: "minecraft:repeater", count: 64, packs: 2 },
      { id: "minecraft:redstone_torch", count: 64, packs: 2 },
      { id: "minecraft:redstone", count: 64, packs: 4 },
      { id: "minecraft:redstone_block", count: 64, packs: 2 },
      { id: "minecraft:piston", count: 64, packs: 1 },
      { id: "minecraft:sticky_piston", count: 64, packs: 1 },
      { id: "minecraft:observer", count: 64, packs: 1 },
      { id: "minecraft:dropper", count: 64, packs: 1 },
      { id: "minecraft:dispenser", count: 64, packs: 1 },
      { id: "minecraft:crafter", count: 64, packs: 1 },
      { id: "minecraft:target", count: 64, packs: 1 },
      { id: "minecraft:slime", count: 64, packs: 2 },
      { id: "minecraft:honey_block", count: 64, packs: 2 },
      { id: "minecraft:redstone_lamp", count: 64, packs: 2 },
      { id: "minecraft:lever", count: 64, packs: 1 },
      { id: "minecraft:item_frame", count: 64, packs: 2 },
      { id: "minecraft:quartz_block", count: 64, packs: 4 }
    ]
  },
  {
    index: 9,
    id: "kit_trading_hall_cura_villager",
    name: "§a§lKit #9: Trading Hall & Cura de Villagers (1 Esmeralda Survival)",
    shortSign: "KIT 09 TRADING HALL",
    icon: "textures/items/emerald",
    shulkerBlock: "minecraft:lime_shulker_box",
    desc: "64 Atris, todas as bancadas de profissão, 128 Maçãs Douradas, Poções de Fraqueza, Etiquetas, Trilhos, Ovos e 640 Esmeraldas!",
    items: [
      { id: "minecraft:lectern", count: 64, packs: 1 },
      { id: "minecraft:smithing_table", count: 64, packs: 1 },
      { id: "minecraft:fletching_table", count: 64, packs: 1 },
      { id: "minecraft:blast_furnace", count: 64, packs: 1 },
      { id: "minecraft:smoker", count: 64, packs: 1 },
      { id: "minecraft:cartography_table", count: 64, packs: 1 },
      { id: "minecraft:grindstone", count: 64, packs: 1 },
      { id: "minecraft:stonecutter_block", count: 64, packs: 1 },
      { id: "minecraft:composter", count: 64, packs: 1 },
      { id: "minecraft:cauldron", count: 64, packs: 1 },
      { id: "minecraft:brewing_stand", count: 64, packs: 1 },
      { id: "minecraft:golden_apple", count: 64, packs: 2 },
      { id: "minecraft:emerald", count: 64, packs: 10 },
      { id: "minecraft:emerald_block", count: 64, packs: 4 },
      { id: "minecraft:book", count: 64, packs: 10 },
      { id: "minecraft:name_tag", count: 64, packs: 1 },
      { id: "minecraft:powered_rail", count: 64, packs: 2 },
      { id: "minecraft:rail", count: 64, packs: 2 },
      { id: "minecraft:minecart", count: 1, packs: 4 },
      { id: "minecraft:villager_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:zombie_villager_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:zombie_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:bell", count: 16, packs: 1 },
      { id: "minecraft:splash_potion", count: 1, packs: 6 }
    ]
  },
  {
    index: 10,
    id: "kit_deus_combate_pvp_mace",
    name: "§4§lKit #10: Deus do Combate & PvP Supremo (Full Netherita Max + Clava)",
    shortSign: "KIT 10 COMBATE PVP MAX",
    icon: "textures/items/netherite_sword",
    shulkerBlock: "minecraft:black_shulker_box",
    desc: "Set Completo Netherita Max + Espada, Machado, Clava 1.21 (Mace), Arco, Besta, Tridente, 8 Totens, Maçãs Notch, Cargas de Vento e Cristais!",
    items: [
      { id: "minecraft:netherite_helmet", count: 1, packs: 1, ench: [["protection", 4], ["unbreaking", 3], ["mending", 1], ["respiration", 3], ["aqua_affinity", 1], ["thorns", 3]] },
      { id: "minecraft:netherite_chestplate", count: 1, packs: 1, ench: [["protection", 4], ["unbreaking", 3], ["mending", 1], ["thorns", 3]] },
      { id: "minecraft:netherite_leggings", count: 1, packs: 1, ench: [["protection", 4], ["unbreaking", 3], ["mending", 1], ["swift_sneak", 3], ["thorns", 3]] },
      { id: "minecraft:netherite_boots", count: 1, packs: 1, ench: [["protection", 4], ["feather_falling", 4], ["depth_strider", 3], ["soul_speed", 3], ["unbreaking", 3], ["mending", 1], ["thorns", 3]] },
      { id: "minecraft:netherite_sword", count: 1, packs: 1, ench: [["sharpness", 5], ["looting", 3], ["fire_aspect", 2], ["knockback", 2], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_axe", count: 1, packs: 1, ench: [["sharpness", 5], ["efficiency", 5], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:mace", count: 1, packs: 1, ench: [["density", 5], ["wind_burst", 3], ["fire_aspect", 2], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:bow", count: 1, packs: 1, ench: [["power", 5], ["flame", 1], ["punch", 2], ["infinity", 1], ["unbreaking", 3]] },
      { id: "minecraft:crossbow", count: 1, packs: 1, ench: [["quick_charge", 3], ["multishot", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:trident", count: 1, packs: 1, ench: [["impaling", 5], ["loyalty", 3], ["channeling", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:shield", count: 1, packs: 2, ench: [["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:elytra", count: 1, packs: 1, ench: [["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:totem_of_undying", count: 1, packs: 10 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 4 },
      { id: "minecraft:golden_apple", count: 64, packs: 4 },
      { id: "minecraft:golden_carrot", count: 64, packs: 4 },
      { id: "minecraft:wind_charge", count: 64, packs: 4 },
      { id: "minecraft:ender_pearl", count: 16, packs: 4 },
      { id: "minecraft:end_crystal", count: 64, packs: 2 },
      { id: "minecraft:obsidian", count: 64, packs: 2 },
      { id: "minecraft:respawn_anchor", count: 64, packs: 1 },
      { id: "minecraft:glowstone", count: 64, packs: 2 },
      { id: "minecraft:arrow", count: 64, packs: 4 },
      { id: "minecraft:firework_rocket", count: 64, packs: 4 }
    ]
  },
  {
    index: 11,
    id: "kit_minerador_supremo_netherite",
    name: "§b§lKit #11: Minerador Supremo (Fortuna III + Toque Suave + Minérios)",
    shortSign: "KIT 11 MINERADOR PRO",
    icon: "textures/items/netherite_pickaxe",
    shulkerBlock: "minecraft:light_blue_shulker_box",
    desc: "2 Picaretas Netherita Max (Fortuna III e Toque Suave), Pá, Machado, Enxada, TNT, Tochas, Shulkers e 64 Blocos de cada Minério!",
    items: [
      { id: "minecraft:netherite_pickaxe", count: 1, packs: 1, ench: [["efficiency", 5], ["fortune", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_pickaxe", count: 1, packs: 1, ench: [["efficiency", 5], ["silk_touch", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_shovel", count: 1, packs: 1, ench: [["efficiency", 5], ["silk_touch", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_axe", count: 1, packs: 1, ench: [["efficiency", 5], ["fortune", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_hoe", count: 1, packs: 1, ench: [["efficiency", 5], ["fortune", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_block", count: 64, packs: 2 },
      { id: "minecraft:diamond_block", count: 64, packs: 4 },
      { id: "minecraft:emerald_block", count: 64, packs: 4 },
      { id: "minecraft:gold_block", count: 64, packs: 4 },
      { id: "minecraft:iron_block", count: 64, packs: 4 },
      { id: "minecraft:copper_block", count: 64, packs: 2 },
      { id: "minecraft:lapis_block", count: 64, packs: 2 },
      { id: "minecraft:redstone_block", count: 64, packs: 2 },
      { id: "minecraft:coal_block", count: 64, packs: 4 },
      { id: "minecraft:ancient_debris", count: 64, packs: 2 },
      { id: "minecraft:netherite_upgrade_smithing_template", count: 64, packs: 1 },
      { id: "minecraft:tnt", count: 64, packs: 8 },
      { id: "minecraft:torch", count: 64, packs: 4 },
      { id: "minecraft:ladder", count: 64, packs: 2 },
      { id: "minecraft:scaffolding", count: 64, packs: 2 },
      { id: "minecraft:ender_chest", count: 64, packs: 1 },
      { id: "minecraft:shulker_box", count: 1, packs: 4 },
      { id: "minecraft:water_bucket", count: 1, packs: 2 }
    ]
  },
  {
    index: 12,
    id: "kit_explorador_aereo_elytra",
    name: "§d§lKit #12: Explorador Aéreo Supremo (4 Élitros Max + 20 Packs Foguetes)",
    shortSign: "KIT 12 ELYTRA & VOO",
    icon: "textures/items/elytra",
    shulkerBlock: "minecraft:magenta_shulker_box",
    desc: "4 Élitros Encantados (Inquebrável III + Remendo), 20 Packs de Foguetes (1.280x), Frascos de XP, Ender Chests, Shulkers e Totens!",
    items: [
      { id: "minecraft:elytra", count: 1, packs: 4, ench: [["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:totem_of_undying", count: 1, packs: 6 },
      { id: "minecraft:firework_rocket", count: 64, packs: 20 },
      { id: "minecraft:experience_bottle", count: 64, packs: 6 },
      { id: "minecraft:ender_pearl", count: 16, packs: 4 },
      { id: "minecraft:ender_chest", count: 64, packs: 1 },
      { id: "minecraft:phantom_membrane", count: 64, packs: 2 },
      { id: "minecraft:golden_carrot", count: 64, packs: 3 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 2 },
      { id: "minecraft:cyan_shulker_box", count: 1, packs: 2 },
      { id: "minecraft:purple_shulker_box", count: 1, packs: 2 },
      { id: "minecraft:yellow_shulker_box", count: 1, packs: 2 }
    ]
  },
  {
    index: 13,
    id: "kit_conquista_nether_bastiao",
    name: "§6§lKit #13: Conquista do Nether, Bastião Piglin & Fortaleza",
    shortSign: "KIT 13 NETHER & BASTIAO",
    icon: "textures/items/netherite_scrap",
    shulkerBlock: "minecraft:orange_shulker_box",
    desc: "Capacete de Ouro Max, 640 Barras de Ouro p/ Piglins, Obsidiana, Âncoras de Renascimento, Pedra Luminosa, Moldes e TNT!",
    items: [
      { id: "minecraft:golden_helmet", count: 1, packs: 1, ench: [["fire_protection", 4], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_boots", count: 1, packs: 1, ench: [["fire_protection", 4], ["soul_speed", 3], ["feather_falling", 4], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:gold_ingot", count: 64, packs: 12 },
      { id: "minecraft:gold_block", count: 64, packs: 4 },
      { id: "minecraft:obsidian", count: 64, packs: 6 },
      { id: "minecraft:crying_obsidian", count: 64, packs: 2 },
      { id: "minecraft:respawn_anchor", count: 64, packs: 1 },
      { id: "minecraft:glowstone", count: 64, packs: 4 },
      { id: "minecraft:flint_and_steel", count: 1, packs: 2, ench: [["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:fire_charge", count: 64, packs: 2 },
      { id: "minecraft:netherite_upgrade_smithing_template", count: 64, packs: 2 },
      { id: "minecraft:ancient_debris", count: 64, packs: 2 },
      { id: "minecraft:netherite_ingot", count: 64, packs: 2 },
      { id: "minecraft:blaze_rod", count: 64, packs: 2 },
      { id: "minecraft:nether_wart", count: 64, packs: 2 },
      { id: "minecraft:magma_cream", count: 64, packs: 2 },
      { id: "minecraft:ghast_tear", count: 64, packs: 1 },
      { id: "minecraft:tnt", count: 64, packs: 4 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 2 },
      { id: "minecraft:cauldron", count: 16, packs: 1 },
      { id: "minecraft:water_bucket", count: 1, packs: 2 }
    ]
  },
  {
    index: 14,
    id: "kit_cacador_ender_dragon_end",
    name: "§5§lKit #14: Caçador do Ender Dragon & Exploração da End City",
    shortSign: "KIT 14 ENDER DRAGON",
    icon: "textures/items/ender_eye",
    shulkerBlock: "minecraft:purple_shulker_box",
    desc: "Molduras do Portal do Fim, Olhos do Fim, Arco Infinito, Espada Max, Camas, Pérolas, Frascos p/ Bafo do Dragão e Água!",
    items: [
      { id: "minecraft:end_portal_frame", count: 64, packs: 1 },
      { id: "minecraft:ender_eye", count: 64, packs: 2 },
      { id: "minecraft:ender_pearl", count: 16, packs: 8 },
      { id: "minecraft:bow", count: 1, packs: 1, ench: [["power", 5], ["infinity", 1], ["flame", 1], ["unbreaking", 3]] },
      { id: "minecraft:netherite_sword", count: 1, packs: 1, ench: [["sharpness", 5], ["looting", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_pickaxe", count: 1, packs: 1, ench: [["efficiency", 5], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:arrow", count: 64, packs: 2 },
      { id: "minecraft:glass_bottle", count: 64, packs: 4 },
      { id: "minecraft:dragon_breath", count: 64, packs: 2 },
      { id: "minecraft:end_crystal", count: 64, packs: 1 },
      { id: "minecraft:carved_pumpkin", count: 64, packs: 1 },
      { id: "minecraft:end_stone_bricks", count: 64, packs: 6 },
      { id: "minecraft:scaffolding", count: 64, packs: 4 },
      { id: "minecraft:ladders", count: 64, packs: 2 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 2 },
      { id: "minecraft:totem_of_undying", count: 1, packs: 4 },
      { id: "minecraft:elytra", count: 1, packs: 2, ench: [["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:firework_rocket", count: 64, packs: 6 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 },
      { id: "minecraft:white_bed", count: 1, packs: 8 }
    ]
  },
  {
    index: 15,
    id: "kit_destruidor_wither_beacon",
    name: "§b§lKit #15: Destruidor de Wither & 4 Sinalizadores Nível 4 (Pirâmide)",
    shortSign: "KIT 15 WITHER & BEACON",
    icon: "textures/items/nether_star",
    shulkerBlock: "minecraft:cyan_shulker_box",
    desc: "64 Crânios Wither, Areia das Almas, Espada Julgamento V (Smite V), 4 Beacons e 1.024 Blocos de Esmeralda/Diamante/Netherita/Ouro!",
    items: [
      { id: "minecraft:netherite_sword", count: 1, packs: 1, ench: [["smite", 5], ["looting", 3], ["fire_aspect", 2], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:bow", count: 1, packs: 1, ench: [["power", 5], ["infinity", 1], ["flame", 1], ["unbreaking", 3]] },
      { id: "minecraft:wither_skeleton_skull", count: 64, packs: 2 },
      { id: "minecraft:soul_sand", count: 64, packs: 4 },
      { id: "minecraft:beacon", count: 64, packs: 1 },
      { id: "minecraft:nether_star", count: 64, packs: 1 },
      { id: "minecraft:emerald_block", count: 64, packs: 8 },
      { id: "minecraft:diamond_block", count: 64, packs: 8 },
      { id: "minecraft:gold_block", count: 64, packs: 6 },
      { id: "minecraft:iron_block", count: 64, packs: 6 },
      { id: "minecraft:netherite_block", count: 64, packs: 4 },
      { id: "minecraft:obsidian", count: 64, packs: 4 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 3 },
      { id: "minecraft:totem_of_undying", count: 1, packs: 4 },
      { id: "minecraft:milk_bucket", count: 1, packs: 4 }
    ]
  },
  {
    index: 16,
    id: "kit_warden_trial_chambers_121",
    name: "§3§lKit #16: Cidade Ancestral (Warden) & Trial Chambers 1.21",
    shortSign: "KIT 16 WARDEN & 1.21",
    icon: "textures/items/wind_charge",
    shulkerBlock: "minecraft:cyan_shulker_box",
    desc: "Calça Passos Furtivos III, Enxada Eficiência V, 128 Lãs, Chaves de Provação Sinistras, Cofres, Núcleo Pesado e Clava 1.21!",
    items: [
      { id: "minecraft:netherite_leggings", count: 1, packs: 1, ench: [["protection", 4], ["swift_sneak", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_hoe", count: 1, packs: 1, ench: [["efficiency", 5], ["silk_touch", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:mace", count: 1, packs: 1, ench: [["density", 5], ["wind_burst", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:white_wool", count: 64, packs: 8 },
      { id: "minecraft:white_carpet", count: 64, packs: 4 },
      { id: "minecraft:ominous_trial_key", count: 64, packs: 2 },
      { id: "minecraft:trial_key", count: 64, packs: 2 },
      { id: "minecraft:ominous_bottle", count: 64, packs: 2 },
      { id: "minecraft:heavy_core", count: 64, packs: 1 },
      { id: "minecraft:breeze_rod", count: 64, packs: 2 },
      { id: "minecraft:wind_charge", count: 64, packs: 6 },
      { id: "minecraft:echo_shard", count: 64, packs: 2 },
      { id: "minecraft:recovery_compass", count: 1, packs: 1 },
      { id: "minecraft:sculk_sensor", count: 64, packs: 1 },
      { id: "minecraft:calibrated_sculk_sensor", count: 64, packs: 1 },
      { id: "minecraft:sculk_shrieker", count: 64, packs: 1 },
      { id: "minecraft:sculk_catalyst", count: 64, packs: 1 },
      { id: "minecraft:snowball", count: 16, packs: 4 },
      { id: "minecraft:night_vision", count: 1, packs: 1 },
      { id: "minecraft:enchanted_golden_apple", count: 64, packs: 2 },
      { id: "minecraft:totem_of_undying", count: 1, packs: 4 }
    ]
  },
  {
    index: 17,
    id: "kit_mestre_construtor_moderno",
    name: "§f§lKit #17: Mestre Construtor Moderno & Iluminação (3.456 Blocos)",
    shortSign: "KIT 17 CONSTRUTOR PRO",
    icon: "textures/items/quartz",
    shulkerBlock: "minecraft:white_shulker_box",
    desc: "54 Packs de 64x (3.456 blocos) de Quartzo, Concreto Branco/Preto, Tijolos de Ardósia, Abeto Descascado, Vidros e Lanternas do Mar!",
    items: [
      { id: "minecraft:quartz_block", count: 64, packs: 10 },
      { id: "minecraft:chiseled_quartz_block", count: 64, packs: 4 },
      { id: "minecraft:quartz_pillar", count: 64, packs: 4 },
      { id: "minecraft:white_concrete", count: 64, packs: 6 },
      { id: "minecraft:black_concrete", count: 64, packs: 4 },
      { id: "minecraft:gray_concrete", count: 64, packs: 4 },
      { id: "minecraft:deepslate_bricks", count: 64, packs: 6 },
      { id: "minecraft:deepslate_tiles", count: 64, packs: 4 },
      { id: "minecraft:stripped_spruce_log", count: 64, packs: 4 },
      { id: "minecraft:spruce_planks", count: 64, packs: 2 },
      { id: "minecraft:glass", count: 64, packs: 2 },
      { id: "minecraft:sea_lantern", count: 64, packs: 2 },
      { id: "minecraft:shroomlight", count: 64, packs: 1 },
      { id: "minecraft:lantern", count: 64, packs: 1 }
    ]
  },
  {
    index: 18,
    id: "kit_mestre_alquimista_encantador",
    name: "§d§lKit #18: Mestre Alquimista & Encantador Nível 30 Completo",
    shortSign: "KIT 18 ALQUIMIA & XP",
    icon: "textures/items/brewing_stand",
    shulkerBlock: "minecraft:purple_shulker_box",
    desc: "Mesas de Encantamento, 32 Estantes, Bigornas, Lápis-Lazúli, Frascos de XP, Suportes de Poções e todos os Ingredientes de Alquimia!",
    items: [
      { id: "minecraft:enchanting_table", count: 16, packs: 1 },
      { id: "minecraft:bookshelf", count: 64, packs: 2 },
      { id: "minecraft:anvil", count: 16, packs: 1 },
      { id: "minecraft:grindstone", count: 16, packs: 1 },
      { id: "minecraft:smithing_table", count: 16, packs: 1 },
      { id: "minecraft:lapis_lazuli", count: 64, packs: 4 },
      { id: "minecraft:experience_bottle", count: 64, packs: 8 },
      { id: "minecraft:book", count: 64, packs: 4 },
      { id: "minecraft:brewing_stand", count: 16, packs: 1 },
      { id: "minecraft:cauldron", count: 16, packs: 1 },
      { id: "minecraft:glass_bottle", count: 64, packs: 4 },
      { id: "minecraft:nether_wart", count: 64, packs: 2 },
      { id: "minecraft:blaze_powder", count: 64, packs: 2 },
      { id: "minecraft:redstone", count: 64, packs: 2 },
      { id: "minecraft:glowstone_dust", count: 64, packs: 2 },
      { id: "minecraft:gunpowder", count: 64, packs: 2 },
      { id: "minecraft:dragon_breath", count: 64, packs: 2 },
      { id: "minecraft:ghast_tear", count: 64, packs: 2 },
      { id: "minecraft:glistering_melon_slice", count: 64, packs: 2 },
      { id: "minecraft:golden_carrot", count: 64, packs: 2 },
      { id: "minecraft:magma_cream", count: 64, packs: 2 },
      { id: "minecraft:sugar", count: 64, packs: 2 },
      { id: "minecraft:pufferfish", count: 64, packs: 1 },
      { id: "minecraft:phantom_membrane", count: 64, packs: 1 },
      { id: "minecraft:fermented_spider_eye", count: 64, packs: 2 },
      { id: "minecraft:rabbit_foot", count: 64, packs: 1 },
      { id: "minecraft:turtle_helmet", count: 1, packs: 2 },
      { id: "minecraft:water_bucket", count: 1, packs: 4 }
    ]
  },
  {
    index: 19,
    id: "kit_fazendeiro_pecuaria_abelhas",
    name: "§e§lKit #19: Fazendeiro, Pecuária & Apicultura Completo",
    shortSign: "KIT 19 FAZENDA & PETS",
    icon: "textures/items/wheat",
    shulkerBlock: "minecraft:yellow_shulker_box",
    desc: "Todas as Sementes e Mudas, 640 Farinhas de Osso, Colmeias, Ninhos de Abelha, Ovos de Animais, Selas, Laços e Armaduras de Cavalo/Lobo!",
    items: [
      { id: "minecraft:wheat_seeds", count: 64, packs: 2 },
      { id: "minecraft:carrot", count: 64, packs: 2 },
      { id: "minecraft:potato", count: 64, packs: 2 },
      { id: "minecraft:beetroot_seeds", count: 64, packs: 2 },
      { id: "minecraft:melon_seeds", count: 64, packs: 1 },
      { id: "minecraft:pumpkin_seeds", count: 64, packs: 1 },
      { id: "minecraft:torchflower_seeds", count: 64, packs: 1 },
      { id: "minecraft:pitcher_pod", count: 64, packs: 1 },
      { id: "minecraft:sweet_berries", count: 64, packs: 1 },
      { id: "minecraft:glow_berries", count: 64, packs: 1 },
      { id: "minecraft:sugar_cane", count: 64, packs: 2 },
      { id: "minecraft:bamboo", count: 64, packs: 2 },
      { id: "minecraft:oak_sapling", count: 64, packs: 1 },
      { id: "minecraft:spruce_sapling", count: 64, packs: 1 },
      { id: "minecraft:cherry_sapling", count: 64, packs: 1 },
      { id: "minecraft:bone_meal", count: 64, packs: 6 },
      { id: "minecraft:bone_block", count: 64, packs: 4 },
      { id: "minecraft:beehive", count: 64, packs: 1 },
      { id: "minecraft:bee_nest", count: 64, packs: 1 },
      { id: "minecraft:campfire", count: 64, packs: 1 },
      { id: "minecraft:lead", count: 64, packs: 1 },
      { id: "minecraft:name_tag", count: 64, packs: 1 },
      { id: "minecraft:cow_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:sheep_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:pig_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:chicken_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:bee_spawn_egg", count: 64, packs: 1 },
      { id: "minecraft:horse_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:wolf_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:cat_spawn_egg", count: 16, packs: 1 },
      { id: "minecraft:saddle", count: 1, packs: 4 },
      { id: "minecraft:diamond_horse_armor", count: 1, packs: 2 },
      { id: "minecraft:wolf_armor", count: 1, packs: 2 }
    ]
  },
  {
    index: 20,
    id: "kit_oceano_monumento_conduto",
    name: "§3§lKit #20: Conquista do Oceano, Monumento Guardião & 4 Condutos",
    shortSign: "KIT 20 OCEANO CONDUTO",
    icon: "textures/items/heartofthesea",
    shulkerBlock: "minecraft:light_blue_shulker_box",
    desc: "4 Condutos Marinhos, 384 Prismarinhos, 256 Esponjas Secas p/ secar Monumento, Tridentes Empalamento V / Impulso Aquático III e Capacete Tartaruga!",
    items: [
      { id: "minecraft:conduit", count: 16, packs: 1 },
      { id: "minecraft:heart_of_the_sea", count: 64, packs: 1 },
      { id: "minecraft:nautilus_shell", count: 64, packs: 2 },
      { id: "minecraft:prismarine", count: 64, packs: 4 },
      { id: "minecraft:prismarine_bricks", count: 64, packs: 4 },
      { id: "minecraft:dark_prismarine", count: 64, packs: 4 },
      { id: "minecraft:sea_lantern", count: 64, packs: 4 },
      { id: "minecraft:sponge", count: 64, packs: 6 },
      { id: "minecraft:sand", count: 64, packs: 6 },
      { id: "minecraft:oak_fence_gate", count: 64, packs: 2 },
      { id: "minecraft:soul_sand", count: 64, packs: 2 },
      { id: "minecraft:magma", count: 64, packs: 2 },
      { id: "minecraft:glass", count: 64, packs: 4 },
      { id: "minecraft:trident", count: 1, packs: 1, ench: [["impaling", 5], ["loyalty", 3], ["channeling", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:trident", count: 1, packs: 1, ench: [["impaling", 5], ["riptide", 3], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:turtle_helmet", count: 1, packs: 1, ench: [["protection", 4], ["respiration", 3], ["aqua_affinity", 1], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:netherite_boots", count: 1, packs: 1, ench: [["protection", 4], ["depth_strider", 3], ["feather_falling", 4], ["unbreaking", 3], ["mending", 1]] },
      { id: "minecraft:milk_bucket", count: 1, packs: 4 }
    ]
  }
];

function buildKit54SlotArray(kit) {
  const result = new Array(54).fill(null);
  if (!kit) return result;

  if (kit.exactSlots && Array.isArray(kit.exactSlots)) {
    for (const entry of kit.exactSlots) {
      if (entry && entry.slot >= 0 && entry.slot < 54) {
        const st = createSafeItemStack(entry.id, entry.count || 1);
        if (st) {
          if (entry.ench) applyKitMaxEnchantments(st, entry.ench);
          result[entry.slot] = st;
        }
      }
    }
    return result;
  }

  let cursor = 0;
  if (kit.items && Array.isArray(kit.items)) {
    for (const it of kit.items) {
      if (cursor >= 54) break;
      const packs = Math.max(1, it.packs || 1);
      for (let p = 0; p < packs && cursor < 54; p++) {
        const st = createSafeItemStack(it.id, it.count || 64);
        if (st) {
          if (it.ench) applyKitMaxEnchantments(st, it.ench);
          result[cursor] = st;
          cursor++;
        }
      }
    }
  }
  return result;
}

function getCurrentTheme(player) {
  return getPlayerArchTheme(player);
}

function spawnKitInConnectedDoubleChest(
  player,
  kit,
  customPosA = null,
  customPosB = null,
  customFacing = null,
  skipMessage = false,
  customSignPos = null
) {
  if (!player || !kit) return false;
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const arch = getPlayerArchTheme(player);

  const posA = customPosA || basis.rel(2, 0, 0);
  const posB = customPosB || basis.rel(2, 0, 1);
  const chestFacing = customFacing || basis.backDir;

  // Limpa espaço acima e na frente do baú individual para abrir livremente
  if (!customPosA) {
    try {
      safeSetBlock(dim, basis.rel(2, -1, 0), arch.floorBlock || "minecraft:quartz_block");
      safeSetBlock(dim, basis.rel(2, -1, 1), arch.floorBlock || "minecraft:quartz_block");
      safeSetBlock(dim, basis.rel(2, 1, 0), "minecraft:air");
      safeSetBlock(dim, basis.rel(2, 1, 1), "minecraft:air");
      safeSetBlock(dim, basis.rel(1, 0, 0), "minecraft:air");
      safeSetBlock(dim, basis.rel(1, 0, 1), "minecraft:air");
      safeSetBlock(dim, basis.rel(1, 1, 0), "minecraft:air");
      safeSetBlock(dim, basis.rel(1, 1, 1), "minecraft:air");
    } catch (e) {}
  } else {
    // Garante que o bloco imediatamente acima das 2 metades do Baú Duplo seja AR para sempre abrir!
    try {
      safeSetBlock(dim, { x: posA.x, y: posA.y + 1, z: posA.z }, "minecraft:air");
      safeSetBlock(dim, { x: posB.x, y: posB.y + 1, z: posB.z }, "minecraft:air");
    } catch (e) {}
  }

  // 1. Coloca os 2 blocos de baú com a MESMA direção cardinal para conectarem em 1 Baú Duplo (Large Chest 54 slots)
  const pair = placeConnectedDoubleChest(dim, posA, posB, chestFacing);
  const finalDir = (pair && pair.dir) || chestFacing || "north";

  // 2. Placa identificadora na frente do baú (passando Array de 4 linhas para placeExternalWallSignOnPillar)
  const signLines = [
    "§e§l[KIT #" + String(kit.index).padStart(2, "0") + "]",
    "§f§l" + String(kit.shortSign || "KIT COMPLETO").slice(0, 15),
    "§aBaú Duplo (54)",
    "§bSurvivalMenu Pro"
  ];

  const signTargetPos = customSignPos || (!customPosA ? basis.rel(1, 0, 1) : null);

  const applySignNow = () => {
    if (!signTargetPos) return;
    try {
      placeExternalWallSignOnPillar(
        dim,
        signTargetPos,
        finalDir,
        signLines,
        arch.wallSignBlock || "minecraft:birch_wall_sign"
      );
    } catch (e) {}
  };

  // 3. Preenche slot por slot do container de 54 slots
  const populateSlotsNow = () => {
    try {
      let bA = dim.getBlock(posA);
      let bB = dim.getBlock(posB);
      let cA = bA?.getComponent("minecraft:inventory")?.container;
      if (!cA || cA.size < 54) {
        const repaired = placeConnectedDoubleChest(dim, posA, posB, finalDir);
        if (repaired) {
          bA = repaired.blockA;
          bB = repaired.blockB;
        }
        cA = bA?.getComponent("minecraft:inventory")?.container;
      }
      const cB = bB?.getComponent("minecraft:inventory")?.container;

      const slotItems = buildKit54SlotArray(kit);
      if (cA && cA.size >= 54) {
        for (let s = 0; s < 54; s++) {
          try {
            cA.setItem(s, slotItems[s] || undefined);
          } catch (e) {}
        }
      } else {
        if (cA) {
          for (let s = 0; s < Math.min(27, cA.size); s++) {
            try {
              cA.setItem(s, slotItems[s] || undefined);
            } catch (e) {}
          }
        }
        if (cB) {
          for (let s = 0; s < Math.min(27, cB.size); s++) {
            try {
              cB.setItem(s, slotItems[27 + s] || undefined);
            } catch (e) {}
          }
        }
      }
      applySignNow();
    } catch (err) {}
  };

  populateSlotsNow();
  // Garantia extra no Tick +2 de que o Baú Duplo permanece 100% conectado (54 slots), com placa e abastecido!
  try {
    system.runTimeout(() => {
      populateSlotsNow();
    }, 2);
  } catch (e) {}

  if (!skipMessage) {
    try { player.playSound("random.chestopen", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
    player.sendMessage(
      \`§8[§6Central de Kits§8] §aGerado §eBaú Duplo Conectado (Large Chest 54 Slots) §ana sua frente (direção §b\${basis.dirLabelPt}§a) com §f\${kit.name}§a!\`
    );
  }
  return true;
}

function giveKitToPlayerInventoryAndShulker(player, kit) {
  if (!player || !kit) return;
  const slotItems = buildKit54SlotArray(kit).filter(Boolean);
  const inv = player.getComponent("minecraft:inventory")?.container;

  // Entregar itens diretamente no inventário e gerar Shulker Boxes ao lado para não perder nenhum item!
  if (inv) {
    for (const st of slotItems) {
      try {
        inv.addItem(st.clone());
      } catch (e) {}
    }
  }

  // Também gera 2 Caixas de Shulker na frente do jogador com todos os slots do Kit organizados!
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const shulkerId = kit.shulkerBlock || "minecraft:yellow_shulker_box";
  const allKitSlots = buildKit54SlotArray(kit);

  try {
    // Shulker #1 (Slots 0..26 - Metade Superior do Large Chest)
    const posS1 = basis.rel(2, 0, 0);
    safeSetBlock(dim, posS1, shulkerId, "minecraft:undyed_shulker_box");
    const blkS1 = dim.getBlock(posS1);
    const contS1 = blkS1?.getComponent("minecraft:inventory")?.container;
    if (contS1) {
      for (let i = 0; i < 27; i++) {
        if (allKitSlots[i]) contS1.setItem(i, allKitSlots[i].clone());
      }
    }

    // Shulker #2 (Slots 27..53 - Metade Inferior do Large Chest)
    const hasSecondHalf = allKitSlots.slice(27, 54).some(Boolean);
    if (hasSecondHalf) {
      const posS2 = basis.rel(2, 0, 1);
      safeSetBlock(dim, posS2, shulkerId, "minecraft:undyed_shulker_box");
      const blkS2 = dim.getBlock(posS2);
      const contS2 = blkS2?.getComponent("minecraft:inventory")?.container;
      if (contS2) {
        for (let i = 0; i < 27; i++) {
          if (allKitSlots[27 + i]) contS2.setItem(i, allKitSlots[27 + i].clone());
        }
      }
    }
  } catch (e) {}

  try { player.playSound("random.levelup", { pitch: 1.2, volume: 0.9 }); } catch (e) {}
  player.sendMessage(
    \`§8[§6Central de Kits§8] §aEntregue §f\${kit.name} §ano seu Inventário + §e2 Caixas de Shulker §ana sua frente (quebre-as para levar na mochila)!\`
  );
}

// Constrói a Sala Galeria com TODOS os 20 Kits em Baús Duplos Conectados (5 Baias × 4 Baús Duplos = 20 Kits)
// Usa system.runInterval (igual à Mega Sala de Poções) para zero lag e 100% dentro do chunk ativo!
function buildAll20KitsMegaGallery(player) {
  if (!player) return;
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const arch = getPlayerArchTheme(player);
  const fStart = 2;
  const totalBays = 5; // 5 baias × 4 Baús Duplos por baia (Esquerda y=0, y=2 | Direita y=0, y=2) = 20 Kits!

  try { player.playSound("block.end_portal.spawn", { pitch: 1.1, volume: 0.8 }); } catch (e) {}
  player.sendMessage(
    \`§8[§6🏛️ Sala Galeria de Todos os 20 Kits§8] §eConstruindo na direção §b\${basis.dirLabelPt} §eno estilo §a\${arch.name} §ecom §f20 Baús Duplos Conectados (Large Chests) + Placas na Frente§e...\`
  );

  // 1. Constrói o Hall de Entrada Iluminado (f = 2..4) com Bloco Multiplicador e Tapete Central
  try {
    for (let df = 0; df < 3; df++) {
      const f = fStart + df;
      for (let r = -4; r <= 4; r++) {
        safeSetBlock(
          dim,
          basis.rel(f, -1, r),
          r === 0 ? arch.lightBlock : Math.abs(r) <= 1 ? arch.floorCenterBlock : arch.floorBlock
        );
        for (let dy = 0; dy <= 4; dy++) {
          const isFrontPortal = df === 0 && Math.abs(r) <= 1 && dy <= 2;
          if (dy === 4) {
            safeSetBlock(dim, basis.rel(f, dy, r), Math.abs(r) <= 2 ? arch.ceilingBlock : arch.wallBlock);
          } else if (r === -4 || r === 4 || (df === 0 && !isFrontPortal)) {
            safeSetBlock(
              dim,
              basis.rel(f, dy, r),
              dy === 2 && (Math.abs(r) === 4 || Math.abs(r) === 2) ? arch.lightBlock : arch.wallBlock
            );
          } else {
            safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
          }
        }
      }
    }

    // Instala 1 Bloco Multiplicador na entrada da Galeria de Kits
    safeSetBlock(dim, basis.rel(fStart + 1, 0, -2), "minecraft:lodestone");
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(fStart + 1, 0, -1),
      basis.leftInwardDir,
      ["§d§lMULTIPLICADOR", "§eClique=+1 Pack", "§aBater=Shulker!", "§bGaleria 20 Kits"],
      arch.wallSignBlock
    );
  } catch (e) {}

  // 2. Constrói as 5 Baias progressivamente (4 Kits por baia = 20 Kits no total)
  // Cada Baú Duplo fica em y=0 (com y=1 livre de AR acima) e em y=2 (com y=3 livre de AR acima),
  // garantindo que TODOS os 20 Baús Duplos abram livremente sem nenhum bloco travando a tampa!
  let currentBay = 0;
  let kitIdx = 0;

  const job = system.runInterval(() => {
    try {
      if (currentBay >= totalBays) {
        system.clearRun(job);
        const endF = fStart + 3 + totalBays * 3;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(dim, basis.rel(endF, -1, r), arch.floorBlock);
          for (let dy = 0; dy <= 4; dy++) {
            safeSetBlock(
              dim,
              basis.rel(endF, dy, r),
              dy === 2 && Math.abs(r) <= 1 ? arch.lightBlock : arch.wallBlock
            );
          }
        }
        try {
          player.teleport(basis.relTp(fStart + 1, 0, 0));
          player.playSound("random.totem", { pitch: 1.15, volume: 1.0 });
        } catch (e) {}
        player.sendMessage(
          \`§8[§a🏛️ Galeria de Todos os 20 Kits Concluída!§8] §aTodos os §e20 Baús Duplos Conectados (Large Chests de 54 slots) §aforam gerados na direção §b\${basis.dirLabelPt} §acom Placa na Frente (incluindo o §6Kit #01 Idêntico à Foto§a)!\`
        );
        return;
      }

      const fBase = fStart + 3 + currentBay * 3;

      // Estrutura arquitetônica da baia (3 blocos de extensão: df = 0, 1, 2)
      for (let df = 0; df < 3; df++) {
        const cf = fBase + df;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(
            dim,
            basis.rel(cf, -1, r),
            r === 0 && df === 1
              ? arch.lightBlock
              : Math.abs(r) <= 1
              ? arch.floorCenterBlock
              : arch.floorBlock
          );
          for (let dy = 0; dy <= 3; dy++) {
            if (r === -4 || r === 4) {
              safeSetBlock(
                dim,
                basis.rel(cf, dy, r),
                (dy === 1 || dy === 3) && df === 1 ? arch.lightBlock : arch.wallBlock
              );
            } else {
              safeSetBlock(dim, basis.rel(cf, dy, r), "minecraft:air");
            }
          }
          safeSetBlock(
            dim,
            basis.rel(cf, 4, r),
            Math.abs(r) <= 2 ? arch.ceilingBlock : arch.wallBlock
          );
        }

        // Coluna divisória iluminada no 3º bloco da baia (df === 2)
        if (df === 2) {
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(cf, dy, -3),
              dy === 1 || dy === 3 ? arch.lightBlock : arch.pillarBlock
            );
            safeSetBlock(
              dim,
              basis.rel(cf, dy, 3),
              dy === 1 || dy === 3 ? arch.lightBlock : arch.pillarBlock
            );
          }
        }
      }

      // Dois níveis desimpedidos por parede: y = 0 (térreo, com y=1 de AR) e y = 2 (superior, com y=3 de AR)
      const chestLevels = [0, 2];
      for (const yLvl of chestLevels) {
        // Parede Esquerda (r = -3, virado para o corredor central: basis.leftInwardDir, placa em r = -2)
        if (kitIdx < SURVIVAL_AND_FARM_KITS_RUNTIME.length) {
          const kitLeft = SURVIVAL_AND_FARM_KITS_RUNTIME[kitIdx++];
          const posALeft = basis.rel(fBase, yLvl, -3);
          const posBLeft = basis.rel(fBase + 1, yLvl, -3);
          const signPosLeft = basis.rel(fBase, yLvl, -2);

          spawnKitInConnectedDoubleChest(
            player,
            kitLeft,
            posALeft,
            posBLeft,
            basis.leftInwardDir,
            true,
            signPosLeft
          );
        }

        // Parede Direita (r = +3, virado para o corredor central: basis.rightInwardDir, placa em r = +2)
        if (kitIdx < SURVIVAL_AND_FARM_KITS_RUNTIME.length) {
          const kitRight = SURVIVAL_AND_FARM_KITS_RUNTIME[kitIdx++];
          const posARight = basis.rel(fBase, yLvl, 3);
          const posBRight = basis.rel(fBase + 1, yLvl, 3);
          const signPosRight = basis.rel(fBase, yLvl, 2);

          spawnKitInConnectedDoubleChest(
            player,
            kitRight,
            posARight,
            posBRight,
            basis.rightInwardDir,
            true,
            signPosRight
          );
        }
      }

      currentBay++;
      try {
        player.onScreenDisplay.setActionBar(
          \`§6Construindo Galeria de Todos os 20 Kits (\${basis.dirLabelPt}): §a\${kitIdx}/20 Baús Duplos Conectados\`
        );
      } catch (e) {}
    } catch (err) {
      currentBay++;
    }
  }, 2);
}

function openKitDeliveryChoiceMenu(player, kitIndex) {
  const kit = SURVIVAL_AND_FARM_KITS_RUNTIME[kitIndex];
  if (!kit) return;
  const basis = getLookBasis(player);

  const form = new ActionFormData()
    .title(kit.name)
    .body(
      \`§7Descrição do Kit:\\n§f\${kit.desc}\\n\\n\` +
      \`§7Direção atual do olhar: §b\${basis.dirLabelPt}\\n\` +
      "§eComo você deseja receber este Kit?"
    )
    .button(
      "§l§a1. Gerar Baú Duplo Conectado (Large Chest) na Frente\\n§r§8Cria o Baú Duplo de 54 slots igual à foto + Placa na frente",
      "textures/items/chest_minecart"
    )
    .button(
      "§l§d2. Receber no Inventário + 2 Caixas de Shulker\\n§r§8Entrega os itens na mochila e cria 2 Shulkers portáteis",
      "textures/items/shulker_shell"
    )
    .button(
      "§l§63. Construir Sala Galeria com TODOS os 20 Kits\\n§r§8Gera o Salão na direção do olhar com os 20 Baús Duplos + Placas",
      "textures/items/nether_star"
    )
    .button(
      "§l§b4. Combo: Baú Duplo na Frente + Inventário\\n§r§8Cria o Large Chest na frente E entrega os itens na mochila",
      "textures/items/trident"
    )
    .button("§8« Voltar para a Lista de 20 Kits");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      spawnKitInConnectedDoubleChest(player, kit);
    } else if (res.selection === 1) {
      giveKitToPlayerInventoryAndShulker(player, kit);
    } else if (res.selection === 2) {
      buildAll20KitsMegaGallery(player);
    } else if (res.selection === 3) {
      spawnKitInConnectedDoubleChest(player, kit);
      giveKitToPlayerInventoryAndShulker(player, kit);
    } else if (res.selection === 4) {
      openKitsCenterMenu(player);
    }
  });
}

function openKitsCenterMenu(player) {
  try { player.playSound("random.pop", { pitch: 1.15, volume: 0.8 }); } catch (e) {}
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§6Central: 20 Kits Survival & Farms")
    .body(
      \`§7Direção do Olhar: §b\${basis.dirLabelPt}\\n\` +
      "§aDestaque #1: §eKit Exato da Foto (Farm de Ouro e XP c/ Portal + Trident Killer — 43 Slots Idênticos no Large Chest)!\\n" +
      "§7Escolha um Kit individual ou gere a §6Sala Galeria com Todos os 20 Kits§7:"
    )
    .button(
      "§l§6📸 [KIT #1 EXATO DA FOTO] Farm Ouro/XP + Trident Killer\\n§r§8Gera na hora o Large Chest com os 43 slots idênticos à foto!",
      "textures/items/trident"
    )
    .button(
      "§l§d🏛️ Construir Sala Galeria com TODOS os 20 Kits (Baús Duplos)\\n§r§8Salão na direção do olhar com 20 Large Chests conectados + Placas",
      "textures/items/chest_minecart"
    );

  for (const k of SURVIVAL_AND_FARM_KITS_RUNTIME) {
    form.button(
      \`\${k.name}\\n§r§8[\${k.shortSign}] Baú Duplo 54 Slots ou Shulker\`,
      k.icon || "textures/items/chest_minecart"
    );
  }

  form.button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      openKitDeliveryChoiceMenu(player, 0);
    } else if (res.selection === 1) {
      buildAll20KitsMegaGallery(player);
    } else if (res.selection >= 2 && res.selection < 2 + SURVIVAL_AND_FARM_KITS_RUNTIME.length) {
      openKitDeliveryChoiceMenu(player, res.selection - 2);
    } else {
      openMainMenu(player);
    }
  });
}

// ============================================================================
// 16 COLUNAS DE ARMAZENAMENTO VERTICAL COM 10 NÍVEIS E SHULKERS CHEIAS
// Padrão Obrigatório:
// - Cada coluna possui exatamente 10 níveis de altura.
// - Cada nível possui 2 baús duplos conectados lado a lado.
// - Cada coluna possui 20 baús duplos funcionais (com espaço de ar desobstruído).
// - Baús armazenam Shulker Boxes personalizadas e pilhas de itens por categoria.
// - 16 Colunas = 160 Níveis = 320 Baús Duplos com Shulkers cheias e placas frontais!
// ============================================================================
const MEGA_STORAGE_COLUMNS_RUNTIME = ${JSON.stringify(MEGA_STORAGE_COLUMNS_16)};

// Índice rápido de todas as 320 Shulker Boxes por código e por nome para autopreenchimento imediato ao colocar no chão
const SHULKER_SPEC_BY_CODE = new Map();
const SHULKER_SPEC_BY_TITLE = new Map();
const pendingShulkerPlaceByPlayer = new Map();

for (const col of MEGA_STORAGE_COLUMNS_RUNTIME) {
  const cNum = col.colNumber || col.index || 1;
  const cTitle = col.title || col.name || "Coluna";
  for (const lvl of col.levels || []) {
    for (const sideChest of [lvl.chestLeft, lvl.chestRight]) {
      if (!sideChest) continue;
      const code =
        sideChest.shulkerCode ||
        \`SHULKER_C\${String(cNum).padStart(2, "0")}_L\${String(lvl.level).padStart(2, "0")}_\${sideChest.chestIndex || 1}\`;
      const enriched = {
        ...sideChest,
        shulkerCode: code,
        colNumber: cNum,
        colTitle: cTitle,
        levelNum: lvl.level || 1
      };
      SHULKER_SPEC_BY_CODE.set(code, enriched);
      if (sideChest.shulkerBoxName) {
        SHULKER_SPEC_BY_TITLE.set(String(sideChest.shulkerBoxName).toLowerCase(), enriched);
      }
    }
  }
}

// Cria um ItemStack real (com encantamentos máximos, se houver) a partir de um item de ShulkerContentItem
function createStorageSpecItemStack(itemDef) {
  if (!itemDef || !itemDef.id) return null;
  const stack = createSafeItemStack(itemDef.id, itemDef.count || 64);
  if (!stack) return null;
  try {
    const desired = Number(itemDef.count) || 64;
    stack.amount = Math.max(1, Math.min(desired, stack.maxAmount || 64));
  } catch (e) {}
  if (itemDef.ench && Array.isArray(itemDef.ench) && itemDef.ench.length > 0) {
    applyKitMaxEnchantments(stack, itemDef.ench);
  }
  return stack;
}

// Resolve o código aux de Poções do Minecraft Bedrock para que as poções dentro das Shulker Boxes tenham efeito e cor reais!
function resolveBedrockPotionAuxFromSpec(def, chestSpec) {
  const txt = (
    String(def?.name || "") + " " +
    String(chestSpec?.signTitle || "") + " " +
    String(chestSpec?.subcategory || "") + " " +
    String(chestSpec?.shulkerBoxName || "")
  ).toLowerCase();

  if (txt.includes("velocidade") || txt.includes("swift")) return 16; // Velocidade II
  if (txt.includes("força") || txt.includes("forca") || txt.includes("strength")) return 33; // Força II
  if (txt.includes("cura") || txt.includes("heal")) return 22; // Cura Instantânea II
  if (txt.includes("regenera")) return 30; // Regeneração II
  if (txt.includes("fogo") || txt.includes("fire")) return 13; // Resistência ao Fogo (8:00)
  if (txt.includes("respira") || txt.includes("water")) return 20; // Respiração Aquática (8:00)
  if (txt.includes("visão") || txt.includes("visao") || txt.includes("night")) return 6; // Visão Noturna (8:00)
  if (txt.includes("queda") || txt.includes("slow fall")) return 41; // Queda Lenta (4:00)
  if (txt.includes("invisib")) return 8; // Invisibilidade (8:00)
  if (txt.includes("salto") || txt.includes("leap") || txt.includes("jump")) return 11; // Super Salto II
  if (txt.includes("dano") || txt.includes("harm")) return 24; // Dano Instantâneo II
  if (txt.includes("veneno") || txt.includes("poison")) return 26; // Veneno II
  if (txt.includes("fraqueza") || txt.includes("weak")) return 35; // Fraqueza (4:00)
  if (txt.includes("tartaruga") || txt.includes("turtle") || txt.includes("lentid")) return 38; // Mestre Tartaruga
  return 16;
}

// Coloca uma escada de mão (minecraft:ladder) com a direção cardinal exata para nunca quebrar ou dropar no chão!
function placeAttachedLadder(dim, pos, cardinalFacing) {
  if (!dim || !pos) return;
  try {
    const blk = dim.getBlock(pos);
    if (!blk) return;
    const facingMap = { north: 2, south: 3, west: 4, east: 5 };
    const facingInt = facingMap[cardinalFacing] || 2;
    try {
      const perm = BlockPermutation.resolve("minecraft:ladder", {
        "facing_direction": facingInt
      });
      blk.setPermutation(perm);
    } catch (e1) {
      try {
        dim.runCommand("setblock " + pos.x + " " + pos.y + " " + pos.z + " ladder " + facingInt);
      } catch (e2) {}
    }
  } catch (e) {}
}

// Preenche todos os 27 slots de um Bloco físico de Shulker Box no mundo com O MESMO ITEM do Baú Duplo!
function populatePlacedShulkerBlock27Slots(dim, pos, chestSpec, placeBlockIfNeeded = false, _pageIndex = 0) {
  if (!dim || !pos || !chestSpec) return false;
  try {
    const shulkerBlockId = chestSpec.shulkerBoxColor || "minecraft:purple_shulker_box";
    if (placeBlockIfNeeded) {
      safeSetBlock(dim, pos, shulkerBlockId, "minecraft:undyed_shulker_box");
    }
    const blk = dim.getBlock(pos);
    if (!blk) return false;
    const cont = blk.getComponent("minecraft:inventory")?.container;
    if (!cont) return false;

    const items27 = chestSpec.shulkerItems || [];
    const rawIds = chestSpec.rawItems64x || [];

    // Pega O ÚNICO ITEM deste Baú Duplo para que todas as Shulker Boxes dele tenham 27/27 slots desse MESMO item!
    const singleDef =
      (items27.length > 0 && items27[0]) ||
      (rawIds.length > 0 ? { id: rawIds[0], count: 64 } : { id: "minecraft:diamond_block", count: 64 });

    const cleanId = String(singleDef.id || "").replace("minecraft:", "");
    const maxSlots = Math.min(27, cont.size);

    // Se for poção, preenche todos os 27 slots da Shulker Box com a mesma poção (auxId real do efeito)!
    if (cleanId === "potion" || cleanId === "splash_potion" || cleanId === "lingering_potion") {
      const aux = resolveBedrockPotionAuxFromSpec(singleDef, chestSpec);
      for (let slot = 0; slot < maxSlots; slot++) {
        try {
          dim.runCommand(
            "replaceitem block " + pos.x + " " + pos.y + " " + pos.z + " slot.container " + slot + " " + cleanId + " 1 " + aux
          );
        } catch (e) {}
      }
      return true;
    }

    // Cria a pilha do item único deste Baú Duplo e preenche todos os 27 slots da Shulker Box com ele!
    const baseStack = createStorageSpecItemStack(singleDef);
    if (!baseStack) return false;

    for (let slot = 0; slot < maxSlots; slot++) {
      try {
        cont.setItem(slot, baseStack.clone ? baseStack.clone() : baseStack);
      } catch (e) {}
    }
    return true;
  } catch (e) {
    return false;
  }
}

// Identifica se um ItemStack na mão do jogador é uma Shulker Box catalogada das 16 Colunas
function resolveShulkerSpecFromItemStack(itemStack) {
  if (!itemStack || !itemStack.typeId || !itemStack.typeId.includes("shulker_box")) return null;
  try {
    const lore = itemStack.getLore ? itemStack.getLore() : [];
    for (const line of lore) {
      const match = String(line).match(/SHULKER_C\d+_L\d+_\d+/);
      if (match && SHULKER_SPEC_BY_CODE.has(match[0])) {
        return SHULKER_SPEC_BY_CODE.get(match[0]);
      }
    }
    if (itemStack.nameTag) {
      const cleanTag = String(itemStack.nameTag)
        .replace(/§[0-9a-fk-or]/gi, "")
        .replace(/^\[SHULKER[^\]]*\]\s*/i, "")
        .trim()
        .toLowerCase();
      if (SHULKER_SPEC_BY_TITLE.has(cleanTag)) {
        return SHULKER_SPEC_BY_TITLE.get(cleanTag);
      }
      for (const [k, v] of SHULKER_SPEC_BY_TITLE.entries()) {
        if (cleanTag.includes(k) || k.includes(cleanTag)) {
          return v;
        }
      }
    }
  } catch (e) {}
  return null;
}

// Gera um ItemStack de Shulker Box com os 27 slots do MESMO item JÁ SALVOS no NBT nativo do Minecraft Bedrock!
// Funciona colocando temporariamente o bloco de Shulker Box em workPos, enchendo os 27 slots do container do bloco com o mesmo item,
// quebrando com "setblock ... air destroy" para o motor C++ do Bedrock serializar os 27 itens no ItemStack dropado,
// capturando o ItemStack da entidade "minecraft:item" e limpando o bloco/entidade no mesmo tick!
function createNativeNbtShulkerItemStack(dim, workPos, chestSpec, pageIndex = 0) {
  if (!dim || !workPos || !chestSpec) return null;
  try {
    try {
      dim.runCommand("gamerule dotiledrops true");
    } catch (e) {}

    // Limpa eventuais drops antigos no ponto de trabalho antes de gerar
    const centerLoc = { x: workPos.x + 0.5, y: workPos.y + 0.5, z: workPos.z + 0.5 };
    try {
      const oldDrops = dim.getEntities({ location: centerLoc, maxDistance: 1.8, type: "minecraft:item" });
      for (const oldEnt of oldDrops) {
        try { oldEnt.remove(); } catch (e) {}
      }
    } catch (e) {}

    // 1. Posiciona o bloco físico da Shulker Box e preenche todos os 27 slots reais do container com o mesmo item
    const filledOk = populatePlacedShulkerBlock27Slots(dim, workPos, chestSpec, true, pageIndex);
    if (!filledOk) {
      safeSetBlock(dim, workPos, "minecraft:air");
      return null;
    }

    // 2. Quebra o bloco com "destroy" para que o Bedrock gere o ItemStack nativo contendo a tag NBT "Items" (27 slots)
    dim.runCommand("setblock " + workPos.x + " " + workPos.y + " " + workPos.z + " air destroy");

    // 3. Captura o ItemStack serializado da entidade dropada e remove a entidade do mundo imediatamente
    let capturedStack = null;
    const drops = dim.getEntities({ location: centerLoc, maxDistance: 2.4, type: "minecraft:item" });
    for (const ent of drops) {
      try {
        const itemComp = ent.getComponent("minecraft:item");
        const st = itemComp?.itemStack;
        if (st && st.typeId && st.typeId.includes("shulker_box") && !capturedStack) {
          capturedStack = st.clone ? st.clone() : st;
        }
        ent.remove();
      } catch (e) {}
    }

    safeSetBlock(dim, workPos, "minecraft:air");
    return capturedStack;
  } catch (e) {
    try {
      safeSetBlock(dim, workPos, "minecraft:air");
    } catch (err) {}
    return null;
  }
}

function fillDoubleChestWithShulkersAndItems(
  dim,
  posA,
  posB,
  chestSpec,
  cardinalDir = "north",
  wallSignBlock = "minecraft:birch_wall_sign",
  levelNum = 1,
  colTitle = "",
  colShort = "",
  delayTicks = 2
) {
  try {
    // Garante que o espaço acima dos 2 blocos do Baú Duplo esteja sempre livre para abrir
    safeSetBlock(dim, { x: posA.x, y: posA.y + 1, z: posA.z }, "minecraft:air");
    safeSetBlock(dim, { x: posB.x, y: posB.y + 1, z: posB.z }, "minecraft:air");

    const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
    const finalDir = (pair && pair.dir) || cardinalDir || "north";

    // Executa o preenchimento quando os 2 blocos do Baú Duplo já estão 100% unidos (54 slots) e virados para o corredor
    system.runTimeout(() => {
      try {
        safeSetBlock(dim, { x: posA.x, y: posA.y + 1, z: posA.z }, "minecraft:air");
        safeSetBlock(dim, { x: posB.x, y: posB.y + 1, z: posB.z }, "minecraft:air");

        let bA = dim.getBlock(posA);
        let bB = dim.getBlock(posB);
        let cA = bA?.getComponent("minecraft:inventory")?.container;
        if (!cA || cA.size < 54) {
          const rep = placeConnectedDoubleChest(dim, posA, posB, finalDir);
          if (rep) {
            bA = rep.blockA;
            bB = rep.blockB;
          }
          cA = bA?.getComponent("minecraft:inventory")?.container;
        }
        const cB = bB?.getComponent("minecraft:inventory")?.container;

        const shulkerId = chestSpec.shulkerBoxColor || "minecraft:purple_shulker_box";
        const codeTag =
          chestSpec.shulkerCode ||
          ("SHULKER_C01_L" + String(levelNum).padStart(2, "0") + "_" + (chestSpec.chestIndex || 1));

        const shItems = chestSpec.shulkerItems || [];
        const singleItem = (shItems.length > 0 && shItems[0]) || {
          id: (chestSpec.rawItems64x && chestSpec.rawItems64x[0]) || "minecraft:diamond_block",
          count: 64,
          name: chestSpec.signTitle || "Item"
        };
        const singleItemName = singleItem.name || String(singleItem.id || "").replace("minecraft:", "");
        const singleItemCount = singleItem.count || 64;
        const totalUnitsInShulker = singleItemCount * 27;

        // Usa uma coordenada de trabalho isolada acima do teto (y + 24) para gerar a Shulker Box com 27 slots do MESMO item no NBT nativo!
        const workPos = { x: posA.x, y: posA.y + 24, z: posA.z };
        const baseNativeShulker = createNativeNbtShulkerItemStack(dim, workPos, chestSpec, 0);

        const taggedShulker = baseNativeShulker
          ? (baseNativeShulker.clone ? baseNativeShulker.clone() : createSafeItemStack(shulkerId, 1))
          : createSafeItemStack(shulkerId, 1);

        if (taggedShulker) {
          try {
            taggedShulker.nameTag = "§d§l[SHULKER 27/27] §f" + singleItemName;
            taggedShulker.setLore([
              "§8ID:" + codeTag,
              "§6§l" + String(colTitle || colShort || "Coluna de Armazenamento"),
              "§eItem Único: §f" + singleItemName,
              "§a✔ Todos os 27 Slots com o MESMO Item!",
              "§b• 27 Slots × " + singleItemCount + "x = §e" + totalUnitsInShulker + " unidades na Shulker!"
            ]);
          } catch (e) {}
        }

        // Preenche TODAS AS 6 FILEIRAS (Todos os 54 Slots = 54 Shulker Boxes iguais, todas com 27 slots do MESMO item!)
        const slotsArray = new Array(54).fill(null);

        // Fileiras 1, 2 e 3 (Slots 0..26 = 27 Shulker Boxes com NBT Nativo Puro já com os 27 slots do mesmo item dentro!)
        for (let s = 0; s < 27; s++) {
          const shulkerA = baseNativeShulker || taggedShulker;
          if (shulkerA) {
            slotsArray[s] = shulkerA.clone ? shulkerA.clone() : shulkerA;
          }
        }

        // Fileiras 4, 5 e 6 (Slots 27..53 = 27 Shulker Boxes 27/27 Nomeadas + Lore do mesmo item!)
        for (let s = 27; s < 54; s++) {
          const shulkerB = taggedShulker || baseNativeShulker;
          if (shulkerB) {
            slotsArray[s] = shulkerB.clone ? shulkerB.clone() : shulkerB;
          }
        }

        if (cA && cA.size >= 54) {
          for (let s = 0; s < 54; s++) {
            try {
              if (slotsArray[s]) cA.setItem(s, slotsArray[s]);
            } catch (e) {}
          }
        } else {
          if (cA) {
            for (let s = 0; s < Math.min(27, cA.size); s++) {
              try {
                if (slotsArray[s]) cA.setItem(s, slotsArray[s]);
              } catch (e) {}
            }
          }
          if (cB) {
            for (let s = 0; s < Math.min(27, cB.size); s++) {
              try {
                if (slotsArray[27 + s]) cB.setItem(s, slotsArray[27 + s]);
              } catch (e) {}
            }
          }
        }
      } catch (e) {}
    }, Math.max(2, Number(delayTicks) || 2));

    return true;
  } catch (e) {
    return false;
  }
}

// Preenche uma COLUNA VERTICAL INTEIRA DE 10 BAÚS DUPLOS (Nível 1 em y=0 até Nível 10 em y=18)
// onde TODOS OS 10 BAÚS DUPLOS DA COLUNA contêm EXATAMENTE O MESMO ITEM (54 Shulker Boxes 27/27 desse item em cada um dos 10 baús)!
function fillVerticalColumnOf10DoubleChestsSameItem(
  dim,
  getPosA,
  getPosB,
  chestSpec,
  cardinalDir = "north",
  colNumLabel = 1,
  categoryLabel = "",
  delayTicks = 2
) {
  try {
    const finalPairs = [];
    // 1. Posiciona e une imediatamente os 10 Baús Duplos da Coluna Vertical (Nível 1 ao 10: yOff = 0, 2, 4, 6, 8, 10, 12, 14, 16, 18)
    for (let lvl = 0; lvl < 10; lvl++) {
      const yChest = lvl * 2;
      const posA = getPosA(yChest);
      const posB = getPosB(yChest);
      safeSetBlock(dim, { x: posA.x, y: posA.y + 1, z: posA.z }, "minecraft:air");
      safeSetBlock(dim, { x: posB.x, y: posB.y + 1, z: posB.z }, "minecraft:air");
      const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
      finalPairs.push({
        lvlNum: lvl + 1,
        posA,
        posB,
        dir: (pair && pair.dir) || cardinalDir || "north"
      });
    }

    // 2. Após os 10 Baús Duplos unirem (54 slots cada), gera 1 única Shulker Box 27/27 no topo isolado (y + 24)
    // e clona nas 6 fileiras (54/54 slots) de TODOS OS 10 BAÚS DUPLOS desta coluna vertical!
    system.runTimeout(() => {
      try {
        const basePosA = getPosA(0);
        const workPos = { x: basePosA.x, y: basePosA.y + 24, z: basePosA.z };

        const shulkerId = chestSpec.shulkerBoxColor || "minecraft:purple_shulker_box";
        const codeTag = chestSpec.shulkerCode || ("SHULKER_COL_" + String(colNumLabel).padStart(3, "0"));

        const shItems = chestSpec.shulkerItems || [];
        const singleItem = (shItems.length > 0 && shItems[0]) || {
          id: (chestSpec.rawItems64x && chestSpec.rawItems64x[0]) || "minecraft:diamond_block",
          count: 64,
          name: chestSpec.signTitle || "Item"
        };
        const singleItemName = singleItem.name || String(singleItem.id || "").replace("minecraft:", "");
        const singleItemCount = singleItem.count || 64;
        const totalUnitsInShulker = singleItemCount * 27;

        const baseNativeShulker = createNativeNbtShulkerItemStack(dim, workPos, chestSpec, 0);
        const taggedShulker = baseNativeShulker
          ? (baseNativeShulker.clone ? baseNativeShulker.clone() : createSafeItemStack(shulkerId, 1))
          : createSafeItemStack(shulkerId, 1);

        if (taggedShulker) {
          try {
            taggedShulker.nameTag = "§d§l[SHULKER 27/27] §f" + singleItemName;
            taggedShulker.setLore([
              "§8ID:" + codeTag,
              "§6§lColuna #" + String(colNumLabel).padStart(3, "0") + " (10 Baús Duplos Iguais)",
              "§eItem Único da Coluna: §f" + singleItemName,
              "§a✔ Todos os 10 Baús e 27 Slots da Shulker têm este MESMO Item!",
              "§b• 27 Slots × " + singleItemCount + "x = §e" + totalUnitsInShulker + " un. por Shulker!"
            ]);
          } catch (e) {}
        }

        // Prepara os 54 slots padrão (6 fileiras de Shulker Boxes 27/27 do mesmo item)
        const templateSlots = new Array(54).fill(null);
        for (let s = 0; s < 27; s++) {
          templateSlots[s] = baseNativeShulker || taggedShulker;
        }
        for (let s = 27; s < 54; s++) {
          templateSlots[s] = taggedShulker || baseNativeShulker;
        }

        // Abastece TODOS OS 10 BAÚS DUPLOS (Nível 1 a 10) desta Coluna Vertical com exatamente o mesmo item!
        for (const entry of finalPairs) {
          try {
            safeSetBlock(dim, { x: entry.posA.x, y: entry.posA.y + 1, z: entry.posA.z }, "minecraft:air");
            safeSetBlock(dim, { x: entry.posB.x, y: entry.posB.y + 1, z: entry.posB.z }, "minecraft:air");

            let bA = dim.getBlock(entry.posA);
            let bB = dim.getBlock(entry.posB);
            let cA = bA?.getComponent("minecraft:inventory")?.container;
            if (!cA || cA.size < 54) {
              const rep = placeConnectedDoubleChest(dim, entry.posA, entry.posB, entry.dir);
              if (rep) {
                bA = rep.blockA;
                bB = rep.blockB;
              }
              cA = bA?.getComponent("minecraft:inventory")?.container;
            }
            const cB = bB?.getComponent("minecraft:inventory")?.container;

            if (cA && cA.size >= 54) {
              for (let s = 0; s < 54; s++) {
                try {
                  const st = templateSlots[s];
                  if (st) cA.setItem(s, st.clone ? st.clone() : st);
                } catch (e) {}
              }
            } else {
              if (cA) {
                for (let s = 0; s < Math.min(27, cA.size); s++) {
                  try {
                    const st = templateSlots[s];
                    if (st) cA.setItem(s, st.clone ? st.clone() : st);
                  } catch (e) {}
                }
              }
              if (cB) {
                for (let s = 0; s < Math.min(27, cB.size); s++) {
                  try {
                    const st = templateSlots[27 + s];
                    if (st) cB.setItem(s, st.clone ? st.clone() : st);
                  } catch (e) {}
                }
              }
            }
          } catch (e) {}
        }
      } catch (e) {}
    }, Math.max(2, Number(delayTicks) || 2));

    return true;
  } catch (e) {
    return false;
  }
}

// Extrai a lista sequencial de itens únicos onde CADA ITEM recebe 1 COLUNA VERTICAL INTEIRA DE 10 BAÚS DUPLOS IGUAIS!
// - 1ª Coluna de 10 Baús = Item #1
// - 2ª Coluna de 10 Baús = Item #2
// - 3ª Coluna de 10 Baús = Item #3
// ...e assim por diante até completar TODOS os itens!
function getAllSequentialSingleItemColumnSpecs(includeAllGameVariations = false) {
  const sequentialSpecs = [];
  const seenItemKeys = new Set();

  const shulkerPalette = [
    "minecraft:purple_shulker_box",
    "minecraft:cyan_shulker_box",
    "minecraft:amber_shulker_box" in {} ? "minecraft:orange_shulker_box" : "minecraft:orange_shulker_box",
    "minecraft:lime_shulker_box",
    "minecraft:light_blue_shulker_box",
    "minecraft:magenta_shulker_box",
    "minecraft:yellow_shulker_box",
    "minecraft:red_shulker_box",
    "minecraft:blue_shulker_box",
    "minecraft:green_shulker_box",
    "minecraft:pink_shulker_box",
    "minecraft:white_shulker_box"
  ];

  // 1. Coleta todos os 320 itens principais das 16 categorias (20 itens por categoria)
  for (let cIdx = 0; cIdx < MEGA_STORAGE_COLUMNS_RUNTIME.length; cIdx++) {
    const col = MEGA_STORAGE_COLUMNS_RUNTIME[cIdx];
    const catTitle = col.title || col.name || ("Categoria #" + (cIdx + 1));
    const catShort = col.shortName || col.shortSign || ("CAT " + String(cIdx + 1).padStart(2, "0"));

    for (let lIdx = 0; lIdx < (col.levels || []).length; lIdx++) {
      const lvl = col.levels[lIdx];
      for (const ch of [lvl.chestLeft, lvl.chestRight]) {
        if (!ch) continue;
        const firstItem = (ch.shulkerItems && ch.shulkerItems[0]) || {
          id: (ch.rawItems64x && ch.rawItems64x[0]) || "minecraft:diamond_block",
          count: 64,
          name: ch.signTitle || "Item"
        };
        const itemKey = String(firstItem.id) + "|" + String(firstItem.name || "");
        seenItemKeys.add(firstItem.id);
        seenItemKeys.add(itemKey);

        const colOrderNum = sequentialSpecs.length + 1;
        const itemLabel = firstItem.name || ch.signTitle || String(firstItem.id).replace("minecraft:", "");
        sequentialSpecs.push({
          ...ch,
          globalColNum: colOrderNum,
          categoryIndex: cIdx,
          categoryTitle: catTitle,
          categoryShort: catShort,
          signTitle: itemLabel,
          shulkerBoxName: "Shulker 27/27: " + itemLabel
        });
      }
    }
  }

  // 2. Se solicitado (Modo Universal 100% de Todos os Itens do Jogo), adiciona cada bloco/item restante do catálogo e do ItemTypes.getAll()
  if (includeAllGameVariations) {
    const extraCandidates = [];
    if (typeof getAllGameBlocksAndItems === "function") {
      try {
        const catalogAll = getAllGameBlocksAndItems();
        for (const entry of catalogAll) {
          if (entry && entry.id && !seenItemKeys.has(entry.id)) {
            seenItemKeys.add(entry.id);
            extraCandidates.push({
              id: entry.id,
              name: entry.name || String(entry.id).replace("minecraft:", "").replace(/_/g, " "),
              count: Number(entry.count) || 64
            });
          }
        }
      } catch (e) {}
    }

    const forbiddenSubstrings = [
      "spawn_egg", "command_block", "structure_block", "structure_void", "jigsaw", "barrier",
      "light_block", "border_block", "allow", "deny", "air", "piston_arm_collision",
      "sticky_piston_arm_collision", "moving_block", "invisible_bedrock", "info_update",
      "reserved6", "client_request_placeholder_block", "glowingobsidian", "netherreactor",
      "camera", "chalkboard", "chemical_", "chemistry_", "colored_torch", "underwater_torch",
      "element_", "compound", "ice_bomb", "bleach", "super_fertilizer", "sparkler",
      "glow_stick", "balloon", "hard_glass", "hard_stained_glass", "wall_sign", "standing_sign",
      "wall_banner", "standing_banner", "lit_", "powered_", "unpowered_",
      "daylight_detector_inverted", "flowing_", "frosted_ice", "cave_vines_body",
      "cave_vines_head", "bamboo_sapling", "kelp_plant", "twisting_vines_plant",
      "weeping_vines_plant", "double_stone_slab", "survivalmenu:"
    ];

    try {
      const allTypes = ItemTypes.getAll ? ItemTypes.getAll() : [];
      for (const t of allTypes) {
        const id = t.id || "";
        if (!id || seenItemKeys.has(id)) continue;
        const lower = id.toLowerCase();
        let skip = false;
        for (const bad of forbiddenSubstrings) {
          if (lower.includes(bad.toLowerCase())) {
            skip = true;
            break;
          }
        }
        if (!skip) {
          seenItemKeys.add(id);
          const cleanName = id.replace("minecraft:", "").replace(/_/g, " ").toUpperCase();
          extraCandidates.push({ id, name: cleanName, count: 64 });
        }
      }
    } catch (e) {}

    for (let i = 0; i < extraCandidates.length; i++) {
      const ex = extraCandidates[i];
      const colOrderNum = sequentialSpecs.length + 1;
      const shulkerColor = shulkerPalette[colOrderNum % shulkerPalette.length];
      const code = "SHULKER_U" + String(colOrderNum).padStart(4, "0");
      const shItems = [];
      for (let s = 0; s < 27; s++) {
        shItems.push({ id: ex.id, count: ex.count || 64, name: ex.name });
      }
      const spec = {
        chestIndex: (colOrderNum % 2) + 1,
        globalColNum: colOrderNum,
        categoryIndex: 16,
        categoryTitle: "Catálogo Universal Survival",
        categoryShort: "COL " + String(colOrderNum).padStart(3, "0"),
        shulkerCode: code,
        signTitle: String(ex.name).slice(0, 15),
        subcategory: ex.name + " (10 Baús Iguais)",
        shulkerBoxColor: shulkerColor,
        shulkerBoxName: "Shulker 27/27: " + ex.name,
        shulkerItems: shItems,
        rawItems64x: [ex.id]
      };
      SHULKER_SPEC_BY_CODE.set(code, spec);
      SHULKER_SPEC_BY_TITLE.set(spec.shulkerBoxName.toLowerCase(), spec);
      sequentialSpecs.push(spec);
    }
  }

  return sequentialSpecs;
}

// Constrói uma Categoria de 20 Colunas de 10 Baús Iguais (quando chamado pelo menu)
// ou um Módulo de 2 Colunas Verticais de 10 Baús Iguais (1ª Coluna de 10 Baús = Item 1, 2ª Coluna de 10 Baús = Item 2)!
function buildSingleStorageColumn(player, colIndex, customBasePos = null, customChestFrontDir = null, skipMsg = false) {
  if (!player) return;
  const colSpec = MEGA_STORAGE_COLUMNS_RUNTIME[colIndex] || MEGA_STORAGE_COLUMNS_RUNTIME[0];
  const colNum = colSpec.colNumber || colSpec.index || (colIndex + 1);
  const colTitle = colSpec.title || colSpec.name || ("Categoria #" + colNum);
  const colShort = colSpec.shortName || colSpec.shortSign || ("CAT " + String(colNum).padStart(2, "0"));

  // Se o jogador pediu para construir esta Categoria pelo menu (sem customBasePos),
  // constrói o Corredor completo das 20 Colunas Verticais de 10 Baús desta Categoria
  // (1ª Coluna de 10 Baús = Item 1, 2ª Coluna de 10 Baús = Item 2 ... até a 20ª Coluna de 10 Baús = Item 20)!
  if (!customBasePos) {
    const categoryItems = [];
    for (let l = 0; l < (colSpec.levels || []).length; l++) {
      const lvl = colSpec.levels[l];
      if (lvl && lvl.chestLeft) {
        categoryItems.push({
          ...lvl.chestLeft,
          globalColNum: categoryItems.length + 1,
          categoryTitle: colTitle,
          categoryShort: colShort
        });
      }
      if (lvl && lvl.chestRight) {
        categoryItems.push({
          ...lvl.chestRight,
          globalColNum: categoryItems.length + 1,
          categoryTitle: colTitle,
          categoryShort: colShort
        });
      }
    }
    buildVerticalColumnsShulkerHall(player, categoryItems, colTitle);
    return;
  }

  const dim = player.dimension;
  const basis = getLookBasis(player);
  const arch = getPlayerArchTheme(player);
  const wallSign = arch.wallSignBlock || "minecraft:birch_wall_sign";

  const pLoc = player.location;
  const chestFrontDir = customChestFrontDir || basis.backDir || "south";

  let fx = 0, fz = 1, rx = -1, rz = 0;
  if (chestFrontDir === "south") { fx = 0; fz = -1; rx = 1; rz = 0; }
  else if (chestFrontDir === "east") { fx = -1; fz = 0; rx = 0; rz = 1; }
  else if (chestFrontDir === "west") { fx = 1; fz = 0; rx = 0; rz = -1; }

  const baseOrigin = customBasePos || {
    x: Math.floor(pLoc.x) + fx * 4,
    y: Math.floor(pLoc.y),
    z: Math.floor(pLoc.z) + fz * 4
  };

  const getColBlock = (fOff, yOff, rOff) => ({
    x: baseOrigin.x + fx * fOff + rx * rOff,
    y: baseOrigin.y + yOff,
    z: baseOrigin.z + fz * fOff + rz * rOff
  });

  for (let fOff = -3; fOff <= 1; fOff++) {
    for (let r = -3; r <= 3; r++) {
      safeSetBlock(
        dim,
        getColBlock(fOff, -1, r),
        fOff === -2 ? arch.lightBlock : fOff < 0 ? arch.floorCenterBlock : arch.floorBlock
      );
    }
  }

  for (let y = 0; y <= 19; y++) {
    for (let fClean = -3; fClean <= -1; fClean++) {
      for (let r = -3; r <= 3; r++) {
        safeSetBlock(dim, getColBlock(fClean, y, r), "minecraft:air");
      }
    }
    safeSetBlock(dim, getColBlock(0, y, -3), y % 2 === 0 ? arch.pillarBlock : arch.lightBlock);
    placeAttachedLadder(dim, getColBlock(-1, y, -3), chestFrontDir);
    safeSetBlock(dim, getColBlock(0, y, 0), y % 4 === 0 ? arch.lightBlock : arch.pillarBlock);
    safeSetBlock(dim, getColBlock(0, y, 3), y % 2 === 0 ? arch.pillarBlock : arch.lightBlock);

    for (let r = -3; r <= 3; r++) {
      safeSetBlock(
        dim,
        getColBlock(1, y, r),
        (y % 2 === 1 && Math.abs(r) === 1) ? arch.lightBlock : arch.wallBlock
      );
    }
  }

  for (let fOff = -3; fOff <= 1; fOff++) {
    for (let r = -3; r <= 3; r++) {
      safeSetBlock(
        dim,
        getColBlock(fOff, 20, r),
        r === 0 || fOff === -2 ? arch.lightBlock : arch.ceilingBlock
      );
    }
  }

  for (const wy of [3, 7, 11, 15]) {
    for (let r = -2; r <= 3; r++) {
      safeSetBlock(dim, getColBlock(-1, wy, r), "minecraft:glass");
    }
  }

  // 1ª Coluna Vertical de 10 Baús Duplos (Esquerda: r = -2..-1, Nível 1 ao 10) -> Todos os 10 Baús com o Item #1!
  const firstColSpec = (colSpec.levels && colSpec.levels[0] && colSpec.levels[0].chestLeft) || {
    chestIndex: 1,
    shulkerBoxColor: "minecraft:purple_shulker_box",
    shulkerBoxName: "Item #1",
    signTitle: "Item #1",
    shulkerItems: [],
    rawItems64x: []
  };
  // 2ª Coluna Vertical de 10 Baús Duplos (Direita: r = 1..2, Nível 1 ao 10) -> Todos os 10 Baús com o Item #2!
  const secondColSpec = (colSpec.levels && colSpec.levels[0] && colSpec.levels[0].chestRight) || {
    chestIndex: 2,
    shulkerBoxColor: "minecraft:cyan_shulker_box",
    shulkerBoxName: "Item #2",
    signTitle: "Item #2",
    shulkerItems: [],
    rawItems64x: []
  };

  fillVerticalColumnOf10DoubleChestsSameItem(
    dim,
    (yChest) => getColBlock(0, yChest, -2),
    (yChest) => getColBlock(0, yChest, -1),
    firstColSpec,
    chestFrontDir,
    colNum * 2 - 1,
    colTitle,
    2
  );

  fillVerticalColumnOf10DoubleChestsSameItem(
    dim,
    (yChest) => getColBlock(0, yChest, 1),
    (yChest) => getColBlock(0, yChest, 2),
    secondColSpec,
    chestFrontDir,
    colNum * 2,
    colTitle,
    4
  );

  for (let lvl = 0; lvl < 10; lvl++) {
    const yChest = lvl * 2;
    const yAir = yChest + 1;
    const lvlNum = lvl + 1;
    populatePlacedShulkerBlock27Slots(
      dim,
      getColBlock(0, yAir, 3),
      lvl % 2 === 0 ? firstColSpec : secondColSpec,
      true,
      0
    );
    placeExternalWallSignOnPillar(
      dim,
      getColBlock(-1, yChest, 0),
      chestFrontDir,
      [
        "§l§e[NV " + String(lvlNum).padStart(2, "0") + "/10 IGUAIS]",
        "§a<" + String(firstColSpec.signTitle || "Col 1").slice(0, 14),
        "§b>" + String(secondColSpec.signTitle || "Col 2").slice(0, 14),
        "§d10 Baús = 1 Item"
      ],
      wallSign
    );
  }

  if (!skipMsg) {
    try { player.playSound("random.chestopen", { pitch: 1.15, volume: 1.0 }); } catch (e) {}
    player.sendMessage(
      "§8[§a🏗️ Colunas de 10 Baús Iguais Concluídas!§8]\\n" +
      "§a• 1ª Coluna de 10 Baús (Esquerda): §fTodos os 10 Baús com §e" + (firstColSpec.signTitle || "Item 1") + "\\n" +
      "§b• 2ª Coluna de 10 Baús (Direita): §fTodos os 10 Baús com §e" + (secondColSpec.signTitle || "Item 2")
    );
  }
}

// Constrói a Mega Sala de Baús de Shulker Box com Corredor Central no meio da sala (r = -2..+2),
// onde:
// - A 1ª Coluna Vertical de 10 Baús Duplos (Nível 1 ao 10) tem TODOS os 10 Baús com o Item #1!
// - A 2ª Coluna Vertical de 10 Baús Duplos (Nível 1 ao 10) tem TODOS os 10 Baús com o Item #2!
// - A 3ª Coluna Vertical de 10 Baús Duplos (Nível 1 ao 10) tem TODOS os 10 Baús com o Item #3!
// ...e por aí vai, coluna por coluna de 10 baús iguais, até completar TODOS os itens!
function buildVerticalColumnsShulkerHall(player, customSpecsList = null, customHallTitle = "") {
  if (!player) return;
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const arch = getPlayerArchTheme(player);
  const wallSign = arch.wallSignBlock || "minecraft:birch_wall_sign";

  // Lista sequencial de itens onde cada item ganha 1 Coluna Vertical inteira de 10 Baús Duplos iguais!
  const allColumnSpecs =
    Array.isArray(customSpecsList) && customSpecsList.length > 0
      ? customSpecsList
      : getAllSequentialSingleItemColumnSpecs(false);

  const totalVerticalColumns = allColumnSpecs.length; // Ex.: 320 Colunas de 10 Baús (ou 20 na categoria, ou 100% no modo universal)
  const totalBays = Math.max(1, Math.ceil(totalVerticalColumns / 4)); // Cada Bay de 7 blocos aloja 4 Colunas Verticais de 10 Baús (2 na Esquerda + 2 na Direita)
  const bayLength = 7;
  const fOrigin = 6; // O Corredor Central começa em f = 6 logo após o Hall de Entrada (f = 1..5)
  const totalDoubleChests = totalVerticalColumns * 10;
  const hallLabel = customHallTitle || (totalVerticalColumns + " Colunas de 10 Baús Iguais");

  try { player.playSound("block.end_portal.spawn", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
  player.sendMessage(
    "§8[§d🏛️ Mega Sala de Shulker Boxes - " + hallLabel + "§8]\\n" +
    "§e• Construindo Corredor Central na direção §b" + basis.dirLabelPt + " §eno estilo §a" + arch.name + "§e...\\n" +
    "§a• 1ª Coluna de 10 Baús = §f" + (allColumnSpecs[0]?.signTitle || "Item #1") +
    " §8| §a2ª Coluna de 10 Baús = §f" + (allColumnSpecs[1]?.signTitle || "Item #2") +
    " §8| ...até completar §e" + totalVerticalColumns + " itens (" + totalDoubleChests + " Baús Duplos)§e!"
  );

  // 1. Constrói o Hall de Entrada conectado direto ao Corredor Central (f = 1..5, r = -4..+4, y = -1..20)
  for (let f = 1; f <= 5; f++) {
    for (let r = -4; r <= 4; r++) {
      safeSetBlock(
        dim,
        basis.rel(f, -1, r),
        r === 0 ? arch.lightBlock : Math.abs(r) === 1 ? arch.floorCenterBlock : arch.floorBlock
      );
      for (let y = 0; y <= 19; y++) {
        if (f === 1 && Math.abs(r) <= 2 && y <= 4) {
          safeSetBlock(dim, basis.rel(f, y, r), "minecraft:air");
        } else if (f === 1 || Math.abs(r) === 4) {
          safeSetBlock(
            dim,
            basis.rel(f, y, r),
            (y % 4 === 2 && Math.abs(r) <= 3) ? arch.lightBlock : arch.wallBlock
          );
        } else {
          safeSetBlock(dim, basis.rel(f, y, r), "minecraft:air");
        }
      }
      safeSetBlock(
        dim,
        basis.rel(f, 20, r),
        r === 0 ? arch.lightBlock : arch.ceilingBlock
      );
    }
  }

  // Bancadas utilitárias nas laterais do Hall de Entrada (r = ±3), deixando o Corredor Central (r = -2..+2) 100% livre!
  safeSetBlock(dim, basis.rel(2, 0, -3), "minecraft:crafting_table");
  safeSetBlock(dim, basis.rel(3, 0, -3), "minecraft:anvil");
  safeSetBlock(dim, basis.rel(2, 0, 3), "minecraft:ender_chest");
  safeSetBlock(dim, basis.rel(3, 0, 3), "minecraft:lodestone");

  for (let y = 0; y <= 19; y++) {
    safeSetBlock(dim, basis.rel(5, y, -3), y % 4 === 0 ? arch.lightBlock : arch.pillarBlock);
    safeSetBlock(dim, basis.rel(5, y, 3), y % 4 === 0 ? arch.lightBlock : arch.pillarBlock);
  }
  placeExternalWallSignOnPillar(
    dim,
    basis.rel(5, 1, -2),
    basis.leftInwardDir,
    [
      "§l§6< ALA ESQUERDA",
      "§aCol 1: " + String(allColumnSpecs[0]?.signTitle || "Item 1").slice(0, 10),
      "§bCol 2: " + String(allColumnSpecs[1]?.signTitle || "Item 2").slice(0, 10),
      "§d10 Baús Iguais/Col"
    ],
    wallSign
  );
  placeExternalWallSignOnPillar(
    dim,
    basis.rel(5, 1, 2),
    basis.rightInwardDir,
    [
      "§l§eALA DIREITA >",
      "§aCol 3: " + String(allColumnSpecs[2]?.signTitle || "Item 3").slice(0, 10),
      "§bCol 4: " + String(allColumnSpecs[3]?.signTitle || "Item 4").slice(0, 10),
      "§d10 Baús Iguais/Col"
    ],
    wallSign
  );

  // 2. Constrói o Corredor Central Bay por Bay (em cada Bay de 7 blocos são erguidas 4 Colunas Verticais de 10 Baús Duplos Iguais!)
  let currentBay = 0;

  const job = system.runInterval(() => {
    try {
      if (currentBay >= totalBays) {
        system.clearRun(job);

        // Parede de Fechamento no final do Corredor Central
        const endF = fOrigin + totalBays * bayLength;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(dim, basis.rel(endF, -1, r), arch.floorBlock);
          for (let y = 0; y <= 19; y++) {
            safeSetBlock(
              dim,
              basis.rel(endF, y, r),
              (y % 4 === 2 && Math.abs(r) <= 2) ? arch.lightBlock : arch.wallBlock
            );
          }
          safeSetBlock(dim, basis.rel(endF, 20, r), arch.ceilingBlock);
        }

        // Retorna o jogador para a entrada do Corredor Central olhando pelo meio da sala!
        try { player.teleport(basis.relTp(3, 0, 0)); } catch (e) {}
        try { player.playSound("random.totem", { pitch: 1.15, volume: 1.0 }); } catch (e) {}
        player.sendMessage(
          "§8[§a🏛️ Mega Sala de Shulker Boxes Concluída!§8]\\n" +
          "§a• 1ª Coluna de 10 Baús = Todos do Item #1 (§f" + (allColumnSpecs[0]?.signTitle || "Item 1") + "§a)!\\n" +
          "§a• 2ª Coluna de 10 Baús = Todos do Item #2 (§f" + (allColumnSpecs[1]?.signTitle || "Item 2") + "§a)!\\n" +
          "§e• Total Concluído: §f" + totalVerticalColumns + " Colunas Verticais × 10 Baús Iguais = §a" + totalDoubleChests + " Baús Duplos §evirados para o Corredor Central!"
        );
        return;
      }

      const fStart = fOrigin + currentBay * bayLength;

      // Mantém o jogador acompanhando a construção no meio do Corredor Central para manter os chunks 100% carregados
      try { player.teleport(basis.relTp(fStart + 3, 0, 0)); } catch (e) {}

      // 2.1. Ergue a estrutura física deste segmento de 7 blocos do Corredor Central (df = 0..6)
      for (let df = 0; df < bayLength; df++) {
        const cf = fStart + df;
        for (let r = -4; r <= 4; r++) {
          safeSetBlock(
            dim,
            basis.rel(cf, -1, r),
            r === 0 ? arch.lightBlock : Math.abs(r) === 1 ? arch.floorCenterBlock : arch.floorBlock
          );
          safeSetBlock(
            dim,
            basis.rel(cf, 20, r),
            r === 0 ? arch.lightBlock : arch.ceilingBlock
          );
        }

        for (let y = 0; y <= 19; y++) {
          const isLightWall = (y % 2 === 1) && (df === 1 || df === 2 || df === 4 || df === 5);
          safeSetBlock(dim, basis.rel(cf, y, -4), isLightWall ? arch.lightBlock : arch.wallBlock);
          safeSetBlock(dim, basis.rel(cf, y, 4), isLightWall ? arch.lightBlock : arch.wallBlock);

          // Limpa todo o Corredor Central no meio da sala (r = -2, -1, 0, +1, +2)
          for (let rMid = -2; rMid <= 2; rMid++) {
            safeSetBlock(dim, basis.rel(cf, y, rMid), "minecraft:air");
          }

          // Pilares em df = 0 (Escada), df = 3 (Pilar Central entre as 2 Colunas de 10 Baús) e df = 6 (Pilar Divisor / Shulkers)
          if (df === 0 || df === 3 || df === 6) {
            const pBlock = (y % 4 === 0) ? arch.lightBlock : arch.pillarBlock;
            safeSetBlock(dim, basis.rel(cf, y, -3), pBlock);
            safeSetBlock(dim, basis.rel(cf, y, 3), pBlock);
          } else {
            safeSetBlock(dim, basis.rel(cf, y, -3), "minecraft:air");
            safeSetBlock(dim, basis.rel(cf, y, 3), "minecraft:air");
          }

          if (df === 0) {
            placeAttachedLadder(dim, basis.rel(cf, y, -2), basis.leftInwardDir);
            placeAttachedLadder(dim, basis.rel(cf, y, 2), basis.rightInwardDir);
          }
        }

        // Passarelas laterais de vidro (1 bloco em r = -2 e r = +2) nos andares y = 3, 7, 11, 15 (pula df = 0 p/ escada livre)
        if (df >= 1) {
          for (const wy of [3, 7, 11, 15]) {
            safeSetBlock(dim, basis.rel(cf, wy, -2), "minecraft:glass");
            safeSetBlock(dim, basis.rel(cf, wy, 2), "minecraft:glass");
          }
        }
      }

      // 2.2. Seleciona os 4 Itens deste Bay (cada um terá sua própria Coluna Vertical de 10 Baús Duplos iguais de Nível 1 a 10!)
      const colIdx1 = currentBay * 4 + 0; // Esquerda Coluna 1 (df = 1..2, r = -3)
      const colIdx2 = currentBay * 4 + 1; // Esquerda Coluna 2 (df = 4..5, r = -3)
      const colIdx3 = currentBay * 4 + 2; // Direita Coluna 1  (df = 1..2, r = +3)
      const colIdx4 = currentBay * 4 + 3; // Direita Coluna 2  (df = 4..5, r = +3)

      const specLeft1 = allColumnSpecs[colIdx1 % allColumnSpecs.length];
      const specLeft2 = allColumnSpecs[colIdx2 % allColumnSpecs.length];
      const specRight1 = allColumnSpecs[colIdx3 % allColumnSpecs.length];
      const specRight2 = allColumnSpecs[colIdx4 % allColumnSpecs.length];

      // Coluna Vertical #1 da Esquerda (df = 1..2, r = -3, Níveis 1 a 10): Todos os 10 Baús Duplos com specLeft1!
      fillVerticalColumnOf10DoubleChestsSameItem(
        dim,
        (yChest) => basis.rel(fStart + 1, yChest, -3),
        (yChest) => basis.rel(fStart + 2, yChest, -3),
        specLeft1,
        basis.leftInwardDir,
        colIdx1 + 1,
        specLeft1.categoryTitle,
        2
      );

      // Coluna Vertical #2 da Esquerda (df = 4..5, r = -3, Níveis 1 a 10): Todos os 10 Baús Duplos com specLeft2!
      fillVerticalColumnOf10DoubleChestsSameItem(
        dim,
        (yChest) => basis.rel(fStart + 4, yChest, -3),
        (yChest) => basis.rel(fStart + 5, yChest, -3),
        specLeft2,
        basis.leftInwardDir,
        colIdx2 + 1,
        specLeft2.categoryTitle,
        2
      );

      // Coluna Vertical #1 da Direita (df = 1..2, r = +3, Níveis 1 a 10): Todos os 10 Baús Duplos com specRight1!
      fillVerticalColumnOf10DoubleChestsSameItem(
        dim,
        (yChest) => basis.rel(fStart + 1, yChest, 3),
        (yChest) => basis.rel(fStart + 2, yChest, 3),
        specRight1,
        basis.rightInwardDir,
        colIdx3 + 1,
        specRight1.categoryTitle,
        2
      );

      // Coluna Vertical #2 da Direita (df = 4..5, r = +3, Níveis 1 a 10): Todos os 10 Baús Duplos com specRight2!
      fillVerticalColumnOf10DoubleChestsSameItem(
        dim,
        (yChest) => basis.rel(fStart + 4, yChest, 3),
        (yChest) => basis.rel(fStart + 5, yChest, 3),
        specRight2,
        basis.rightInwardDir,
        colIdx4 + 1,
        specRight2.categoryTitle,
        2
      );

      // 2.3. Placas de Identificação nos 10 Níveis e Shulkers Físicas 27/27 nos nichos laterais (df = 6)
      for (let lvl = 0; lvl < 10; lvl++) {
        const yChest = lvl * 2;
        const yAir = yChest + 1;
        const lvlNum = lvl + 1;

        populatePlacedShulkerBlock27Slots(
          dim,
          basis.rel(fStart + 6, yAir, -3),
          lvl % 2 === 0 ? specLeft1 : specLeft2,
          true,
          0
        );
        populatePlacedShulkerBlock27Slots(
          dim,
          basis.rel(fStart + 6, yAir, 3),
          lvl % 2 === 0 ? specRight1 : specRight2,
          true,
          0
        );

        placeExternalWallSignOnPillar(
          dim,
          basis.rel(fStart + 3, yChest, -2),
          basis.leftInwardDir,
          [
            "§l§e[NV " + String(lvlNum).padStart(2, "0") + "/10 IGUAIS]",
            "§a#" + (colIdx1 + 1) + ":" + String(specLeft1.signTitle || "Item").slice(0, 11),
            "§b#" + (colIdx2 + 1) + ":" + String(specLeft2.signTitle || "Item").slice(0, 11),
            "§d10 Baús = 1 Item"
          ],
          wallSign
        );

        placeExternalWallSignOnPillar(
          dim,
          basis.rel(fStart + 3, yChest, 2),
          basis.rightInwardDir,
          [
            "§l§e[NV " + String(lvlNum).padStart(2, "0") + "/10 IGUAIS]",
            "§a#" + (colIdx3 + 1) + ":" + String(specRight1.signTitle || "Item").slice(0, 11),
            "§b#" + (colIdx4 + 1) + ":" + String(specRight2.signTitle || "Item").slice(0, 11),
            "§d10 Baús = 1 Item"
          ],
          wallSign
        );
      }

      const builtColsSoFar = Math.min(totalVerticalColumns, (currentBay + 1) * 4);
      const builtChestsSoFar = builtColsSoFar * 10;
      try {
        player.onScreenDisplay.setActionBar(
          "§d[Corredor Shulkers] §eColunas #" + (colIdx1 + 1) + " a #" + builtColsSoFar +
          "/" + totalVerticalColumns + " (10 Baús Iguais/Col) §8| §a" +
          builtChestsSoFar + "/" + totalDoubleChests + " Baús Duplos..."
        );
      } catch (e) {}

      currentBay++;
    } catch (err) {
      currentBay++;
    }
  }, 3);
}

// Gerador Rápido de Shulker Box Física 27/27 na frente do jogador ou Teleporte de Andar (Nível 1 a 10)
function openSpawnFilledShulkerOrFloorModal(player) {
  if (!player) return;
  const colOptions = MEGA_STORAGE_COLUMNS_RUNTIME.map(
    (c, idx) => "#" + String(c.colNumber || c.index || idx + 1).padStart(2, "0") + " - " + (c.title || c.name)
  );
  const sideOptions = [
    "Ambos os Lados (2 Shulker Boxes Físicas 27/27 na Frente)",
    "Apenas Coluna 1 (Esquerda - 27/27 Slots do Mesmo Item)",
    "Apenas Coluna 2 (Direita - 27/27 Slots do Mesmo Item)",
    "Teleportar para o Andar/Nível Escolhido (Elevador Vertical)"
  ];

  const modal = new ModalFormData()
    .title("Shulkers 27/27 & Elevador de Nível")
    .dropdown("1. Escolha a Categoria (1 a 16):", colOptions, 0)
    .slider("2. Escolha o Nível/Par de Item (1 a 10)", 1, 10, 1, 1)
    .dropdown("3. O que deseja fazer:", sideOptions, 0);

  showFormSafely(player, modal, (res) => {
    const [colIdx, lvlNum, actionIdx] = res.formValues;
    const col = MEGA_STORAGE_COLUMNS_RUNTIME[Number(colIdx) || 0] || MEGA_STORAGE_COLUMNS_RUNTIME[0];
    const lvl = col.levels[(Number(lvlNum) || 1) - 1] || col.levels[0];
    const dim = player.dimension;
    const basis = getLookBasis(player);

    if (Number(actionIdx) === 3) {
      const targetY = Math.floor(player.location.y) + ((Number(lvlNum) || 1) - 1) * 2;
      player.teleport({ x: player.location.x, y: targetY, z: player.location.z });
      try { player.playSound("mob.endermen.portal", { pitch: 1.2, volume: 0.9 }); } catch (e) {}
      player.sendMessage("§8[§dElevador 10 Níveis§8] §aTeleportado para a altura do §eNível " + lvlNum + "/10§a!");
      return;
    }

    if (Number(actionIdx) === 0 || Number(actionIdx) === 1) {
      populatePlacedShulkerBlock27Slots(dim, basis.rel(2, 0, 0), lvl.chestLeft, true);
    }
    if (Number(actionIdx) === 0 || Number(actionIdx) === 2) {
      const pos2 = Number(actionIdx) === 0 ? basis.rel(2, 0, 1) : basis.rel(2, 0, 0);
      populatePlacedShulkerBlock27Slots(dim, pos2, lvl.chestRight, true);
    }

    try { player.playSound("random.shulkerboxopen", { pitch: 1.15, volume: 1.0 }); } catch (e) {}
    player.sendMessage(
      "§8[§d📦 Shulker Box 27/27 Gerada!§8] §aColocada na sua frente com todos os §e27 slots do mesmo item §a(§f" +
      (lvl.chestLeft?.signTitle || lvl.name) + "§a)!"
    );
  });
}

// Varre 100% de TODOS os itens do jogo (Catálogo + ItemTypes.getAll) e constrói o Salão Universal
// onde CADA ITEM tem sua própria Coluna Vertical de 10 Baús Duplos iguais!
function buildAutoSurvivalCatalogExpansionColumns(player) {
  if (!player) return;
  try {
    const universalSpecs = getAllSequentialSingleItemColumnSpecs(true);
    buildVerticalColumnsShulkerHall(
      player,
      universalSpecs,
      "Salão Universal 100% (" + universalSpecs.length + " Colunas de 10 Baús Iguais)"
    );
  } catch (e) {
    buildVerticalColumnsShulkerHall(player);
  }
}

// Menu de Acesso à Nova Sala de Baús (1 Coluna de 10 Baús Duplos = 1 Único Item até completar todos os itens!)
function openVerticalColumnsShulkerHallMenu(player) {
  if (!player) return;
  try { player.playSound("random.chestopen", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
  const basis = getLookBasis(player);
  const arch = getPlayerArchTheme(player);

  const form = new ActionFormData()
    .title("§l§dSala de Shulkers: 10 Baús/Item")
    .body(
      "§7Estilo Arquitetônico: §e" + arch.name + " §8| §7Olhar: §b" + basis.dirLabelPt + "\\n\\n" +
      "§aOrganização Exata por Coluna Vertical de 10 Baús Duplos:\\n" +
      "§f• §e1ª Coluna de 10 Baús (Nv. 1 ao 10): §aTodos os 10 Baús têm o Item #1!\\n" +
      "§f• §e2ª Coluna de 10 Baús (Nv. 1 ao 10): §aTodos os 10 Baús têm o Item #2!\\n" +
      "§f• §e3ª Coluna em diante: §aSegue item por item até completar TODOS os itens!\\n" +
      "§f• §dCada Baú Duplo tem 54 Shulker Boxes, e cada Shulker tem 27 slots desse mesmo item!"
    )
    .button(
      "§l§a1. Construir Salão Completo (320 Colunas de 10 Baús Iguais)\\n§r§81ª Coluna = Item 1, 2ª = Item 2... até completar os 320 itens!",
      "textures/items/chest_minecart"
    )
    .button(
      "§l§e2. Construir Corredor de 1 Categoria (20 Colunas de 10 Baús)\\n§r§8Escolha 1 das 16 categorias (20 itens × 10 Baús Duplos = 200 Baús)",
      "textures/items/shulker_shell"
    )
    .button(
      "§l§d3. Pegar Shulker 27/27 no Chão ou Elevador (Nível 1 a 10)\\n§r§8Gera qualquer Shulker já aberta c/ 27 slots na frente ou sobe de andar",
      "textures/items/ender_pearl"
    )
    .button(
      "§l§64. Salão Universal 100% de TODOS os Itens do Jogo\\n§r§8Inclui catálogo + ItemTypes.getAll (1 Coluna de 10 Baús p/ cada item!)",
      "textures/items/netherite_pickaxe"
    )
    .button(
      "§l§b5. Catálogo Detalhado das Colunas de 10 Baús Iguais\\n§r§8Veja qual item fica em cada Coluna Vertical de 10 Baús Duplos",
      "textures/items/book_enchanted"
    )
    .button("§8« Voltar ao Menu de Armazéns");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      buildVerticalColumnsShulkerHall(player);
    } else if (res.selection === 1) {
      openSingleColumnSelectorModal(player, false);
    } else if (res.selection === 2) {
      openSpawnFilledShulkerOrFloorModal(player);
    } else if (res.selection === 3) {
      buildAutoSurvivalCatalogExpansionColumns(player);
    } else if (res.selection === 4) {
      openColumnsCatalogDetailsModal(player, 0);
    } else if (res.selection === 5) {
      if (typeof openMegaChestHallMenu === "function") {
        openMegaChestHallMenu(player);
      }
    }
  });
}

// Seletor de 1 Categoria (constrói as 20 Colunas Verticais de 10 Baús Iguais da categoria escolhida)
function openSingleColumnSelectorModal(player, isExpansion = false) {
  if (!player) return;
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title(isExpansion ? "§l§6Adicionar Categoria de Colunas" : "§l§eEscolher Categoria (20 Colunas de 10 Baús)")
    .body(
      "§7Direção do olhar: §b" + basis.dirLabelPt + "\\n" +
      "§7Cada categoria possui §e20 Itens = 20 Colunas Verticais de 10 Baús Duplos Iguais (200 Baús Duplos)§7 virados para o corredor central:"
    );

  for (const col of MEGA_STORAGE_COLUMNS_RUNTIME) {
    const cNum = col.colNumber || col.index || 1;
    const cShort = col.shortName || col.shortSign || "CATEGORIA";
    const cTitle = col.title || col.name || "";
    form.button(
      "§l§f#" + String(cNum).padStart(2, "0") + " " + cShort + " (20 Colunas de 10 Baús)\\n§r§8" + cTitle.slice(0, 38) + "...",
      "textures/items/shulker_shell"
    );
  }
  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection < MEGA_STORAGE_COLUMNS_RUNTIME.length) {
      buildSingleStorageColumn(player, res.selection);
    } else {
      openVerticalColumnsShulkerHallMenu(player);
    }
  });
}

// Catálogo Detalhado mostrando que cada Item da Categoria ocupa 1 Coluna Vertical inteira de 10 Baús Duplos Iguais
function openColumnsCatalogDetailsModal(player, colIndex = 0) {
  if (!player) return;
  const col = MEGA_STORAGE_COLUMNS_RUNTIME[colIndex] || MEGA_STORAGE_COLUMNS_RUNTIME[0];
  const cNum = col.colNumber || col.index || (colIndex + 1);
  const cTitle = col.title || col.name || ("Categoria #" + cNum);

  let bodyText = "§6§lCategoria #" + cNum + ": §f" + cTitle + "\\n";
  bodyText += "§7Cada item abaixo ocupa §e1 Coluna Vertical inteira de 10 Baús Duplos Iguais (Nv. 1 ao 10)§7:\\n\\n";

  const baseColOffset = colIndex * 20;
  for (let l = 0; l < col.levels.length; l++) {
    const lvl = col.levels[l];
    const colA = baseColOffset + l * 2 + 1;
    const colB = baseColOffset + l * 2 + 2;
    bodyText += "§a• Coluna #" + String(colA).padStart(3, "0") + " (10 Baús): §f" + (lvl.chestLeft ? lvl.chestLeft.signTitle : "") + "\\n";
    bodyText += "§b• Coluna #" + String(colB).padStart(3, "0") + " (10 Baús): §f" + (lvl.chestRight ? lvl.chestRight.signTitle : "") + "\\n";
  }

  const form = new ActionFormData()
    .title("Colunas #" + (baseColOffset + 1) + " a #" + (baseColOffset + 20))
    .body(bodyText)
    .button("§l§aConstruir Estas 20 Colunas de 10 Baús (200 Baús)")
    .button("§ePróxima Categoria (" + ((colIndex + 1) % MEGA_STORAGE_COLUMNS_RUNTIME.length + 1) + "/16)")
    .button("§8« Voltar ao Menu das Colunas");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      buildSingleStorageColumn(player, colIndex);
    } else if (res.selection === 1) {
      openColumnsCatalogDetailsModal(player, (colIndex + 1) % MEGA_STORAGE_COLUMNS_RUNTIME.length);
    } else {
      openVerticalColumnsShulkerHallMenu(player);
    }
  });
}

try {
  // Antes do jogador colocar uma Shulker Box no chão, memoriza o código da Shulker que estava na mão
  if (world.beforeEvents && world.beforeEvents.playerInteractWithBlock) {
    world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
      try {
        const { player, itemStack } = event;
        if (!player || !itemStack) return;
        const spec = resolveShulkerSpecFromItemStack(itemStack);
        if (spec) {
          pendingShulkerPlaceByPlayer.set(player.id, {
            spec,
            timestamp: Date.now()
          });
        }
      } catch (e) {}
    });
  }

  // Assim que qualquer Shulker Box das 16 Colunas é colocada no chão, abastece todos os seus 27 slots imediatamente!
  if (world.afterEvents && world.afterEvents.playerPlaceBlock) {
    world.afterEvents.playerPlaceBlock.subscribe((event) => {
      try {
        const { player, block } = event;
        if (!player || !block || !block.typeId || !block.typeId.includes("shulker_box")) return;

        let matchedSpec = null;
        const pending = pendingShulkerPlaceByPlayer.get(player.id);
        if (pending && Date.now() - pending.timestamp < 2500) {
          matchedSpec = pending.spec;
          pendingShulkerPlaceByPlayer.delete(player.id);
        }

        if (!matchedSpec) {
          const equip = player.getComponent("minecraft:equippable");
          const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
          matchedSpec = resolveShulkerSpecFromItemStack(handItem);
        }

        if (matchedSpec) {
          system.run(() => {
            const ok = populatePlacedShulkerBlock27Slots(block.dimension, block.location, matchedSpec, false);
            if (ok) {
              try { player.playSound("random.shulkerboxopen", { pitch: 1.15, volume: 0.9 }); } catch (e) {}
              player.onScreenDisplay.setActionBar(
                "§d§l[Shulker 27/27] §aAbastecida com 27 slots de §e" + (matchedSpec.signTitle || matchedSpec.shulkerBoxName) + "§a!"
              );
            }
          });
        }
      } catch (e) {}
    });
  }

  // Interação 100% Compatível com Survival:
  // - Clique Normal no Villager: NÃO bloqueia! Abre a Janela de Troca Original do Minecraft (1 Esmeralda) para você travar a troca no mundo antes de tirar a Add-On!
  // - Agachado (Shift) + Clique segurando o Menu ou Livro: Abre o assistente opcional da Baia (pegar livro, girar troca nativa ou limpar p/ remover Add-On).
  if (world.beforeEvents && world.beforeEvents.playerInteractWithEntity) {
    world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
      const { player, target, itemStack } = event;
      if (!player || !target || target.typeId !== "minecraft:villager_v2") return;
      const enchId = getVillagerEnchantTag(target);
      if (!enchId) return;

      const isHoldingHelperTrigger =
        player.isSneaking &&
        itemStack &&
        (itemStack.typeId === "survivalmenu:amuleto" ||
          itemStack.typeId === "minecraft:book" ||
          itemStack.typeId === "minecraft:enchanted_book");

      if (isHoldingHelperTrigger) {
        event.cancel = true;
        system.run(() => {
          try {
            openLibrarian1EmeraldTradeModal(player, enchId, target);
          } catch (e) {}
        });
      } else {
        // Clique normal: deixa abrir a Janela Nativa de Troca do Minecraft e garante desconto de Zumbi Curado (1 Esmeralda)!
        system.run(() => {
          try {
            target.triggerEvent("minecraft:villager_converted");
            player.addEffect("village_hero", 20000000, { amplifier: 4, showParticles: false });
          } catch (e) {}
        });
      }
    });
  }

  // Clicar no chão / interagir com bloco
  if (world.afterEvents.playerInteractWithBlock) {
    world.afterEvents.playerInteractWithBlock.subscribe((event) => {
      const { player, block, itemStack } = event;
      if (!player || !block) return;

      if (block.typeId === "minecraft:lodestone") {
        if (canTriggerSuperTool(player)) {
          handleMultiplierBlockRightClick(player, block);
        }
        return;
      }

      if (!itemStack) return;
      if (
        itemStack.typeId === "survivalmenu:martelo_50x50" ||
        itemStack.typeId === "survivalmenu:destruidor_chunk" ||
        itemStack.typeId === "survivalmenu:quebrador_bedrock"
      ) {
        if (!canTriggerSuperTool(player)) return;
        if (itemStack.typeId === "survivalmenu:martelo_50x50") {
          if (player.isSneaking) {
            openMarteloDepthSelectorModal(player);
          } else {
            startMartelo50x50Excavation(player, block.location);
          }
        } else if (itemStack.typeId === "survivalmenu:destruidor_chunk") {
          startChunkDestroyer16x16(player, block.location);
        } else if (itemStack.typeId === "survivalmenu:quebrador_bedrock") {
          useQuebradorBedrockTool(player, block, player.isSneaking);
        }
      }
    });
  }

  // Bater em um bloco (Botão Esquerdo / Toque na tela)
  if (world.afterEvents.entityHitBlock) {
    world.afterEvents.entityHitBlock.subscribe((event) => {
      const player = event.damagingEntity;
      const block = event.hitBlock;
      if (!player || player.typeId !== "minecraft:player" || !block) return;

      const equip = player.getComponent("minecraft:equippable");
      const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);

      if (block.typeId === "minecraft:lodestone") {
        if (player.isSneaking && handItem && handItem.typeId.includes("pickaxe")) {
          return;
        }
        if (canTriggerSuperTool(player)) {
          handleMultiplierBlockLeftClickPunch(player, block);
        }
        return;
      }

      if (!handItem) return;
      if (
        handItem.typeId === "survivalmenu:martelo_50x50" ||
        handItem.typeId === "survivalmenu:destruidor_chunk" ||
        handItem.typeId === "survivalmenu:quebrador_bedrock"
      ) {
        if (!canTriggerSuperTool(player)) return;
        if (handItem.typeId === "survivalmenu:martelo_50x50") {
          startMartelo50x50Excavation(player, block.location);
        } else if (handItem.typeId === "survivalmenu:destruidor_chunk") {
          startChunkDestroyer16x16(player, block.location);
        } else if (handItem.typeId === "survivalmenu:quebrador_bedrock") {
          useQuebradorBedrockTool(player, block, player.isSneaking);
        }
      }
    });
  }

  // Proteção inteligente do Bloco Multiplicador contra quebra acidental
  world.afterEvents.playerBreakBlock.subscribe((event) => {
    const { player, brokenBlockPermutation, block } = event;
    if (!player || brokenBlockPermutation.type.id !== "minecraft:lodestone") return;
    const equip = player.getComponent("minecraft:equippable");
    const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
    const isIntentionalPickaxeBreak = player.isSneaking && handItem && handItem.typeId.includes("pickaxe");
    if (!isIntentionalPickaxeBreak) {
      system.run(() => {
        try {
          block.setType("minecraft:lodestone");
          handleMultiplierBlockLeftClickPunch(player, block);
        } catch (e) {}
      });
    }
  });
} catch (e) {}
`;
}


