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

try {
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

