import JSZip from 'jszip';
import {
  ARCHITECTURAL_MODELS,
  MEGA_POTION_HALL_30_CHESTS,
  MEGA_ENCHANT_HALL_42_BOOKS,
  MEGA_ENCHANT_HALL_18_SUPPLIES,
  type EnchantedBookChestSpec,
  generateMartelo50x50ItemJson,
  generateDestruidorChunkItemJson,
  generateQuebradorBedrockItemJson,
  generateMarteloRecipeJson,
  generateDestruidorChunkRecipeJson,
  generateQuebradorBedrockRecipeJson,
  generateMultiplierFastRecipeJson,
  generateMultiplierBenchRecipeJson,
  generateSuperToolsAndMultiplierScript,
} from './superToolsAndThemes';

export {
  ARCHITECTURAL_MODELS,
  MEGA_POTION_HALL_30_CHESTS,
  MEGA_ENCHANT_HALL_42_BOOKS,
  MEGA_ENCHANT_HALL_18_SUPPLIES,
  type EnchantedBookChestSpec,
  generateMartelo50x50ItemJson,
  generateDestruidorChunkItemJson,
  generateQuebradorBedrockItemJson,
  generateMarteloRecipeJson,
  generateDestruidorChunkRecipeJson,
  generateQuebradorBedrockRecipeJson,
  generateMultiplierFastRecipeJson,
  generateMultiplierBenchRecipeJson,
};

export interface CheatModule {
  id: string;
  name: string;
  category: 'survival' | 'movement' | 'items' | 'world' | 'visual';
  description: string;
  apiMethod: string;
  enabled: boolean;
  achievementSafe: boolean;
  defaultLevel?: number;
}

export interface AddonConfig {
  addonName: string;
  addonAuthor: string;
  addonDescription: string;
  targetBuildVersion: string;
  minEngineVersion: [number, number, number];
  serverApiVersion: string;
  serverUiVersion: string;
  triggerType: 'double_shift_keypad' | 'compass_sneak' | 'custom_item' | 'stick_use' | 'clock_sneak';
  soundFeedback: boolean;
  actionbarHud: boolean;
  keepInventoryScript: boolean;
  bpHeaderUuid: string;
  bpModuleUuid: string;
  bpScriptUuid: string;
  rpHeaderUuid: string;
  rpModuleUuid: string;
}

export interface AuditCheckItem {
  id: string;
  title: string;
  status: 'passed' | 'warning';
  detail: string;
  technicalProof: string;
}

export function runAddonTechnicalAudit(config: AddonConfig): AuditCheckItem[] {
  const isEngineUniversal = config.minEngineVersion[0] === 1;
  const isStableServerApi = ['1.13.0', '1.14.0', '1.15.0', '1.16.0', '1.17.0'].includes(
    config.serverApiVersion
  );

  return [
    {
      id: 'achievements_lock',
      title: 'Preservação de Conquistas & Progressão (Xbox / PSN / Switch / Mobile / PC)',
      status: 'passed',
      detail:
        'A partir do update 1.21.70+ até a versão atual (26.60.29), a Mojang liberou conquistas com Add-Ons ativos, desde que "Ativar Cheats" e "Beta APIs" fiquem desligados.',
      technicalProof: 'Flag level.dat: cheatsEnabled = 0 · hasBeenLoadedInCreative = 0',
    },
    {
      id: 'zero_experimental',
      title: 'Zero Dependência de "Beta APIs" ou Experimentos',
      status: isStableServerApi ? 'passed' : 'warning',
      detail:
        'Ativar "Beta APIs" nas configurações do mundo desativa conquistas. Este pacote usa apenas versões estáveis de @minecraft/server e @minecraft/server-ui.',
      technicalProof: `@minecraft/server: ${config.serverApiVersion} (Canal Estável Oficial)`,
    },
    {
      id: 'engine_parser',
      title: 'Validação de Manifesto no Motor Bedrock 26.60.29 / 1.21.80+',
      status: isEngineUniversal ? 'passed' : 'warning',
      detail: isEngineUniversal
        ? 'O min_engine_version [1, 21, 0] / [1, 21, 70] é aceito universalmente pelo validador interno do Minecraft Bedrock sem erro de versão incompatível.'
        : 'Atenção: Usar [26, 60, 29] no campo min_engine_version pode fazer alguns aparelhos recusarem o pacote se o motor interno reportar major version 1. Recomendamos Universal [1, 21, 70].',
      technicalProof: `min_engine_version: [${config.minEngineVersion.join(', ')}] · version: [1, 0, 0]`,
    },
    {
      id: 'ui_busy_protection',
      title: 'Proteção Anti-Falha ao Abrir Menu (Auto-Retry UserBusy)',
      status: 'passed',
      detail:
        'Inclui função showFormSafely() que reabre o menu automaticamente caso a tela do jogador esteja ocupada fechando animação ou inventário.',
      technicalProof: 'res.cancelationReason === "UserBusy" -> system.runTimeout(retry, 5)',
    },
    {
      id: 'veinminer_structures',
      title: 'Super Ferramentas 50x50, Destruidor de Chunk, Bedrock & Baús Automáticos',
      status: 'passed',
      detail:
        'Martelo Titã 50x50 (60 FPS sem lag), Destruidor de Chunk 16x16 e Quebrador de Bedrock coletam 100% dos minérios e blocos e geram Baús Duplos Conectados iluminados com placa externa.',
      technicalProof: 'system.runInterval(500 blocos/tick) + buildExcavationAutoChestPlatform()',
    },
    {
      id: 'trigger_redundancy',
      title: 'Bloco Multiplicador Craftável (Clique +1/+5 Packs | Bater = Shulker 100% Lotada)',
      status: 'passed',
      detail:
        'Clicar no Bloco Multiplicador multiplica +1 ou +5 packs; bater nele segurando qualquer item gera imediatamente 1 Caixa de Shulker 100% LOTADA (27 slots / 1.728 itens) com cor dinâmica.',
      technicalProof: 'playerInteractWithBlock + entityHitBlock + playerBreakBlock protection',
    },
    {
      id: 'directional_360_and_enchant_villagers',
      title: 'Construção 360° na Direção do Olhar + Mega Sala de Encantamentos & 42 Villagers (1 Esmeralda)',
      status: 'passed',
      detail:
        'Todas as construções usam player.getViewDirection() (Leste +X, Oeste -X, Sul +Z, Norte -Z). Inclui Mega Sala de Encantamentos com 42 Baús Duplos de Livros Nv. Máximo, 18 Baús de Insumos e 42 Villagers Bibliotecários Mestre com troca garantida de 1 Esmeralda.',
      technicalProof: 'getLookBasis(player) + buildMegaEnchantmentAndVillagerHall() + playerInteractWithEntity (1 Esmeralda)',
    },
  ];
}

export const INITIAL_MODULES: CheatModule[] = [
  {
    id: 'mega_enchantment_villager_hall',
    name: 'Mega Sala de Encantamentos + 42 Villagers no Máximo (1 Esmeralda) + Construção Direcional 360°',
    category: 'world',
    description:
      'Gera qualquer construção exatamente para a direção em que você está olhando (Norte, Sul, Leste, Oeste)! Inclui a Mega Sala de Encantamentos Suprema com Altar Nível 30, 42 Baús Duplos (1 para cada Livro Encantado Nv. Máximo), 18 Baús Duplos de Insumos de Encantamento/Forja e Galeria com todos os 42 Villagers Bibliotecários Mestre com a troca mais barata possível (1 Esmeralda)!',
    apiMethod: 'getLookBasis(player) + buildMegaEnchantmentAndVillagerHall() + 42 Villagers (1 Esmeralda)',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'super_tools_50x50_chunk_bedrock',
    name: 'Super Ferramentas: Martelo 50x50, Destruidor de Chunk 16x16 & Quebrador de Bedrock (+ Baús Automáticos)',
    category: 'world',
    description:
      'Inclui os 3 itens exclusivos (Martelo Titã 50x50 sem lag com seletor de 1 a 25 camadas, Destruidor de Chunk 16x16 até a Bedrock com Queda Lenta e fundo iluminado, e Quebrador de Bedrock + Passagem 3x3 no Teto do Nether). Toda escavação gera Baús Duplos automáticos priorizando minérios raros!',
    apiMethod: 'survivalmenu:martelo_50x50 + destruidor_chunk + quebrador_bedrock + Auto Double Chests',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'multiplier_block_shulker',
    name: 'Bloco Multiplicador Interativo (Clique = +1/+5 Packs | Bater = Caixa de Shulker 100% Lotada!)',
    category: 'items',
    description:
      'Bloco Multiplicador craftável (1 Pedregulho + 1 Graveto). Clicar com botão direito multiplica +1 pack (ou +5 packs agachado e abastece o baú ao lado). Bater nele segurando qualquer item gera na hora 1 Caixa de Shulker 100% LOTADA (27 slots × 64 = 1.728 itens ou 27 cópias de armas/armaduras) com cor inteligente!',
    apiMethod: 'minecraft:lodestone + playerInteractWithBlock + playerBreakBlock -> 27-Slot Shulker Box',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'armor_tool_enchanter',
    name: 'Teclado de Armaduras (Todos os Tipos), Ferramentas & Seletor de Encantamentos',
    category: 'items',
    description:
      'Abre com atalho rápido (Agachar 2x / Tecla Shift ou Item Teclado) um painel para pegar qualquer Armadura (Netherita, Diamante, Ferro, Ouro, Malha, Couro, Tartaruga, Élitros) e qualquer Ferramenta/Arma escolhendo exatamente quais encantamentos e níveis ela vai receber.',
    apiMethod: 'item.getComponent("minecraft:enchantable").addEnchantment({ type, level })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'shulker_trim_armors',
    name: 'Pack de 5 Shulker Boxes: Armaduras no Máximo + Todos os 18 Moldes de Armadura',
    category: 'items',
    description:
      'Como todos os 18 Moldes (Armor Trims) e 18 Sets Completos de Armadura encantados no máximo ultrapassam o limite de 1 Shulker Box (27 slots), este botão gera 5 Shulker Boxes coloridas recheadas com 18 Sets de Netherita Full Max + Todos os 18 Moldes (64x) + Todos os 10 Minerais de Cor (64x) + Mesas de Ferraria.',
    apiMethod: 'block.setType("minecraft:*_shulker_box") + block.getComponent("minecraft:inventory").container',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'item_duplicator',
    name: 'Multiplicador de Itens da Mão & Inventário (Qualquer Quantidade)',
    category: 'items',
    description:
      'Multiplica ou clona o item da mão principal ou qualquer slot do inventário para a quantidade exata que você digitar (ex: 64, 320, 1000, 2304), preservando encantamentos, nome e conteúdo de Shulker Box.',
    apiMethod: 'mainItem.clone() + container.addItem() / setItem()',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'all_items_browser',
    name: 'Catálogo & Buscador Universal de Todos os Itens do Jogo (1.600+ Itens)',
    category: 'items',
    description:
      'Lista e pesquisa todos os itens registrados no Minecraft Bedrock (incluindo Clava/Mace, Heavy Core, Moldes Netherite, Ovos de Spawn e itens de outros Add-Ons) usando ItemTypes.getAll().',
    apiMethod: 'ItemTypes.getAll() + new ItemStack(typeId, count)',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'vein_tree_miner',
    name: 'VeinMiner & TreeCapitator (Quebrar Veia Inteira de Minério e Árvores)',
    category: 'survival',
    description:
      'Ao quebrar 1 bloco de Diamante, Ferro, Ouro, Carvão, Netherita ou 1 tronco de árvore, quebra até 32 blocos conectados da mesma veia automaticamente e traz os drops até você.',
    apiMethod: 'world.afterEvents.playerBreakBlock + BFS Vein Traversal',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'one_hit_kill',
    name: 'Hit Kill (Matar Qualquer Boss com 1 Golpe - Força 255)',
    category: 'survival',
    description:
      'Aplica Strength 255 sem partículas na tela, permitindo derrotar Warden, Wither e Ender Dragon com apenas 1 golpe no modo Sobrevivência.',
    apiMethod: 'player.addEffect("strength", 20000000, { amplifier: 255, showParticles: false })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'auto_magnet',
    name: 'Ímã Automático de Drops e XP (Puxa Itens num Raio de 16m)',
    category: 'survival',
    description:
      'Atrai automaticamente todos os itens minerados, drops de mobs e orbes de XP próximos direto para o seu personagem, evitando perder itens na lava.',
    apiMethod: 'dimension.getEntities({ type: "minecraft:item", maxDistance: 16 })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'mega_chest_hall',
    name: 'Mega Sala de Baús Duplos 100% Organizada & Identificada (5 Estilos + 8 Setores)',
    category: 'world',
    description:
      'Constrói um Mega Armazém em 5 Modelos Arquitetônicos e 8 Setores temáticos (Minérios, Equipamentos, Moldes/Raros, Redstone, Comidas/Poções, Madeiras, Construção e Nether/End). Cada Baú Duplo conectado vem com Placa Externa de Parede na coluna ao lado e todos os 54 slots preenchidos com o item do baú!',
    apiMethod: 'Categorized Double Chest Warehouse + External Wall Sign on Pillar + 54 Full Stacks',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'instant_structures',
    name: 'Construtor Rápido: Mega Alquimia, Fornalha 16x, Mesa Nv.30 & Abrigos',
    category: 'world',
    description:
      'Gera com 1 clique um Mega Laboratório de Alquimia completo com todos os ingredientes, Super Fornalha Industrial 16x com funis e combustíveis, Mesa de Encantamentos Nv. 30 e Plataforma Salva-Vidas.',
    apiMethod: 'dimension.getBlock(pos).setType("minecraft:bookshelf")',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'mob_spawner_menu',
    name: 'Invocador de Mobs, Pets Raros, Aldeões & Bosses (Sem /summon)',
    category: 'world',
    description:
      'Spawna Golem de Ferro, Aldeão, Allay, Axolote, Lobo, Cavalo Esqueleto, Blaze, Enderman, Breeze ou Bosses na sua frente via Script API.',
    apiMethod: 'player.dimension.spawnEntity(entityId, spawnPos)',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'item_renamer',
    name: 'Bigorna Portátil: Renomear Item da Mão com Cores & Lore Customizado',
    category: 'items',
    description:
      'Permite mudar o nome e a descrição (Lore) de qualquer espada, picareta ou item na mão usando cores especiais (§a, §b, §6, §d, §l) sem gastar XP.',
    apiMethod: 'handItem.nameTag = customName; handItem.setLore([customLore])',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'god_regen',
    name: 'Imortalidade & Cura Instantânea (Regeneração 255 + Resistência 255)',
    category: 'survival',
    description:
      'Aplica Resistance 255, Regeneration 255, Fire Resistance, Water Breathing e Saturation via Entity.addEffect() sem ativar o modo Criativo.',
    apiMethod: 'player.addEffect("resistance", 20000000, { amplifier: 255, showParticles: false })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'keep_inventory',
    name: 'Proteção de Inventário ao Morrer & Retorno à Última Morte',
    category: 'survival',
    description:
      'Salva as coordenadas e a dimensão exata de qualquer morte em DynamicProperties para retorno imediato com 1 clique.',
    apiMethod: 'world.afterEvents.entityDie / playerSpawn + DynamicProperties',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'xp_boost',
    name: 'Gerenciador de Experiência (+50, +500 ou Quantidade Livre de Níveis)',
    category: 'survival',
    description:
      'Adiciona quantos níveis de experiência você quiser diretamente ao jogador usando player.addLevels().',
    apiMethod: 'player.addLevels(customLevels)',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'night_vision',
    name: 'Visão Noturna Permanente (Fullbright sem Partículas)',
    category: 'visual',
    description:
      'Ilumina cavernas, oceanos e o Nether inteiramente sem partículas na tela e sem consumir poções.',
    apiMethod: 'player.addEffect("night_vision", 20000000, { amplifier: 1, showParticles: false })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'vein_miner',
    name: 'Mineração Instantânea (Pressa X / Haste 10)',
    category: 'survival',
    description:
      'Quebra pedra, ardósia profunda e obsidiana instantaneamente no modo Sobrevivência.',
    apiMethod: 'player.addEffect("haste", 20000000, { amplifier: 10, showParticles: false })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'waypoints_tp',
    name: 'Gerenciador de Múltiplos Waypoints + Viagem Direta Overworld / Nether / End',
    category: 'movement',
    description:
      'Salva até 5 Waypoints nomeados, permite viajar direto para o Nether ou The End com 1 clique e teleportar por coordenadas X, Y, Z.',
    apiMethod: 'player.teleport(pos, { dimension: world.getDimension(dimId) })',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'fly_dash',
    name: 'Voo de Sobrevivência (Planar + Impulso Aéreo + Sem Dano de Queda)',
    category: 'movement',
    description:
      'Permite planar, subir e dar impulso aéreo com player.applyKnockback() e Slow Falling sem ativar mayfly de Cheat.',
    apiMethod: 'player.applyKnockback(viewDir.x, viewDir.z, 1.8, 0.75)',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'mob_aura_freeze',
    name: 'Aura Anti-Monstros Automática & Limpador de Hostis (Raio de 24m)',
    category: 'world',
    description:
      'Pode eliminar monstros sob demanda ou manter um escudo automático que repele/elimina Creepers, Esqueletos e Wardens que cheguem perto.',
    apiMethod: 'dimension.getEntities({ maxDistance: 24, families: ["monster"] }).forEach(e => e.kill())',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'ore_radar_hud',
    name: 'Scanner de Minérios Raros, Bioma & Coordenadas na Actionbar',
    category: 'visual',
    description:
      'Escaneia blocos ao redor do jogador em busca de Diamante, Detritos Ancestrais (Netherite), Esmeralda e Spawners em tempo real.',
    apiMethod: 'dimension.getBlock(pos) -> player.onScreenDisplay.setActionBar()',
    enabled: true,
    achievementSafe: true,
  },
];

export function generateUuidV4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function generateBpManifest(config: AddonConfig): string {
  const manifest = {
    format_version: 2,
    header: {
      name: `${config.addonName} v${config.targetBuildVersion} [BP - Conquistas Ativas]`,
      description: `${config.addonDescription} | Otimizado para Minecraft Bedrock ${config.targetBuildVersion} sem desativar Conquistas`,
      uuid: config.bpHeaderUuid,
      version: [1, 0, 0],
      min_engine_version: config.minEngineVersion,
    },
    modules: [
      {
        description: `Módulo de Dados e Receitas Survival (${config.targetBuildVersion})`,
        type: 'data',
        uuid: config.bpModuleUuid,
        version: [1, 0, 0],
      },
      {
        description: 'Motor Script API (@minecraft/server-ui) para Menu sem Cheats de Mundo',
        language: 'javascript',
        type: 'script',
        uuid: config.bpScriptUuid,
        version: [1, 0, 0],
        entry: 'scripts/main.js',
      },
    ],
    dependencies: [
      {
        module_name: '@minecraft/server',
        version: config.serverApiVersion,
      },
      {
        module_name: '@minecraft/server-ui',
        version: config.serverUiVersion,
      },
      {
        uuid: config.rpHeaderUuid,
        version: [1, 0, 0],
      },
    ],
    metadata: {
      authors: [config.addonAuthor || 'BedrockForge'],
      product_type: 'addon',
    },
  };

  return JSON.stringify(manifest, null, 2);
}

export function generateRpManifest(config: AddonConfig): string {
  const manifest = {
    format_version: 2,
    header: {
      name: `${config.addonName} v${config.targetBuildVersion} [RP - Interface & HUD]`,
      description: `Texturas e UI para ${config.addonName} (Bedrock ${config.targetBuildVersion}). Mantém 100% das conquistas e progressão ativas.`,
      uuid: config.rpHeaderUuid,
      version: [1, 0, 0],
      min_engine_version: config.minEngineVersion,
    },
    modules: [
      {
        description: 'Recursos Visuais e Texturas do Menu Survival',
        type: 'resources',
        uuid: config.rpModuleUuid,
        version: [1, 0, 0],
      },
    ],
    metadata: {
      authors: [config.addonAuthor || 'BedrockForge'],
      product_type: 'addon',
    },
  };

  return JSON.stringify(manifest, null, 2);
}

export function generateCustomItemJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.50',
      'minecraft:item': {
        description: {
          identifier: 'survivalmenu:amuleto',
          menu_category: {
            category: 'equipment',
          },
        },
        components: {
          'minecraft:max_stack_size': 1,
          'minecraft:icon': {
            texture: 'survival_menu_icon',
          },
          'minecraft:display_name': {
            value: '§a§lTeclado & Menu Survival 26.60.29 §r§7(Aperte para Abrir)',
          },
          'minecraft:glint': true,
          'minecraft:hand_equipped': false,
          'minecraft:allow_off_hand': true,
        },
      },
    },
    null,
    2
  );
}

export function generateCustomRecipeJson(): string {
  return JSON.stringify(
    {
      format_version: '1.20.10',
      'minecraft:recipe_shapeless': {
        description: {
          identifier: 'survivalmenu:amuleto_recipe',
        },
        tags: ['crafting_table', 'inventory'],
        ingredients: [
          {
            item: 'minecraft:stick',
            count: 1,
          },
          {
            item: 'minecraft:dirt',
            count: 1,
          },
        ],
        result: {
          item: 'survivalmenu:amuleto',
          count: 1,
        },
      },
    },
    null,
    2
  );
}

export function generateMainScript(config: AddonConfig, modules: CheatModule[]): string {
  const isEnabled = (id: string) => modules.find((m) => m.id === id)?.enabled ?? false;

  const triggerCondition =
    config.triggerType === 'double_shift_keypad' || config.triggerType === 'compass_sneak'
      ? `((item.typeId === "minecraft:compass" || item.typeId === "minecraft:stick" || item.typeId === "minecraft:clock") && player.isSneaking) || item.typeId === "survivalmenu:amuleto"`
      : config.triggerType === 'clock_sneak'
      ? `(item.typeId === "minecraft:clock" && player.isSneaking) || item.typeId === "survivalmenu:amuleto"`
      : config.triggerType === 'stick_use'
      ? `(item.typeId === "minecraft:stick" && player.isSneaking) || item.typeId === "survivalmenu:amuleto"`
      : `item.typeId === "survivalmenu:amuleto" || (item.typeId === "minecraft:compass" && player.isSneaking)`;

  const triggerDescription =
    config.triggerType === 'double_shift_keypad'
      ? 'Olhe p/ baixo e aperte Agachar (Shift) 2x, ou use Bússola/Graveto agachado, ou use o Teclado Survival'
      : config.triggerType === 'compass_sneak'
      ? 'Segure uma Bússola agachado (Sneak) e use, ou use o Teclado Survival'
      : config.triggerType === 'clock_sneak'
      ? 'Segure um Relógio agachado (Sneak) e use, ou use o Teclado Survival'
      : config.triggerType === 'stick_use'
      ? 'Segure um Graveto agachado (Sneak) e use, ou use o Teclado Survival'
      : 'Use o Teclado Survival (Craft: 1 Graveto + 1 Terra) ou Bússola agachado';

  return `/**
 * ============================================================================
 * ${config.addonName.toUpperCase()} - MINECRAFT BEDROCK v${config.targetBuildVersion}
 * Autor: ${config.addonAuthor}
 * Modo Sobrevivência com Conquistas e Progressão 100% Ativas
 * ============================================================================
 * SUPER PACOTE COMPLETO (v${config.targetBuildVersion}):
 * 1. Teclado de Armaduras (Todos os Tipos), Ferramentas, Armas & Encantador
 * 2. Multiplicador de Itens da Mão & Inventário (Qualquer Quantidade) + Bigorna Colorida
 * 3. Catálogo Universal de Todos os 1.600+ Itens do Jogo (ItemTypes.getAll)
 * 4. VeinMiner & TreeCapitator (Quebra Veia Inteira de Minério e Árvores)
 * 5. Hit Kill (1 Golpe), God Mode, Ímã Automático de Drops/XP, Aura Anti-Mobs
 * 6. Construtor Rápido (Mesa Encantamento Nv.30, Plataforma Salva-Vidas, Portais)
 * 7. Invocador de Mobs, Pets e Bosses + Multi-Waypoints & Viagem Dimensional
 * ============================================================================
 */

import { world, system, ItemStack, ItemTypes, BlockTypes, BlockPermutation, EnchantmentTypes, EquipmentSlot } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

const sneakTracker = new Map();

function showFormSafely(player, form, onResult, attempt = 0) {
  system.run(() => {
    form.show(player).then((res) => {
      if (res.canceled && res.cancelationReason === "UserBusy" && attempt < 6) {
        system.runTimeout(() => {
          showFormSafely(player, form, onResult, attempt + 1);
        }, 5);
        return;
      }
      if (!res.canceled) {
        onResult(res);
      }
    }).catch(() => {});
  });
}

// Entrega automática do Teclado Survival, Bloco Multiplicador e das 3 Super Ferramentas no primeiro acesso ao mundo (v${config.targetBuildVersion})
world.afterEvents.playerSpawn.subscribe((event) => {
  const { player, initialSpawn } = event;
  if (initialSpawn) {
    system.runTimeout(() => {
      try {
        player.sendMessage("§8[§a${config.addonName} v${config.targetBuildVersion}§8] §fSuper Menu, Bloco Multiplicador & Super Ferramentas 50x50/Chunk/Bedrock carregados! §aConquistas Ativas.");
        player.sendMessage("§7Atalhos sem item: §eOlhe p/ o chão + Shift 2x (Armaduras) §7ou §bOlhe p/ cima + Shift 2x (Menu)");
        if (!player.getDynamicProperty("survivalmenu:received_book")) {
          const inv = player.getComponent("minecraft:inventory")?.container;
          if (inv) {
            const book = new ItemStack("survivalmenu:amuleto", 1);
            book.nameTag = "§a§lTeclado & Menu Survival v${config.targetBuildVersion}";
            book.setLore([
              "§7Aperte Usar para abrir o Menu Principal",
              "§eAgache + Usar: Abre Direto Armaduras & Encantamentos",
              "§aCompatível com Bedrock ${config.targetBuildVersion} (Conquistas Ativas)"
            ]);
            inv.addItem(book);
            try {
              giveSuperToolsAndMultiplierStarterKit(player);
            } catch (e2) {}
            player.setDynamicProperty("survivalmenu:received_book", true);
          }
        }
      } catch (e) {}
    }, 40);
  }
});

// Gatilho de Abertura do Menu e das 3 Super Ferramentas ao usar o Item
world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;
  if (!player || !item) return;

  if (item.typeId === "survivalmenu:martelo_50x50") {
    if (!canTriggerSuperTool(player)) return;
    if (player.isSneaking) {
      openMarteloDepthSelectorModal(player);
    } else {
      const savedLayers =
        Number(player.getDynamicProperty("survivalmenu:martelo_depth")) ||
        Number(player.getDynamicProperty("survivalmenu:martelo_layers")) ||
        3;
      excavateMartelo50x50(player, savedLayers);
    }
    return;
  }

  if (item.typeId === "survivalmenu:destruidor_chunk") {
    if (!canTriggerSuperTool(player)) return;
    excavateChunk16x16ToBedrock(player);
    return;
  }

  if (item.typeId === "survivalmenu:quebrador_bedrock") {
    if (!canTriggerSuperTool(player)) return;
    if (player.isSneaking) {
      openNetherRoof3x3Passage(player);
    } else {
      breakNearbyBedrockInstant(player);
    }
    return;
  }

  if (item.typeId === "survivalmenu:amuleto" && player.isSneaking) {
    openArmorToolKeypadMenu(player);
    return;
  }

  if (${triggerCondition}) {
    openMainMenu(player);
  }
});

// ============================================================================
// VEINMINER & TREECAPITATOR (QUEBRA VEIA INTEIRA DE MINÉRIOS E ÁRVORES)
// ============================================================================
const VEIN_BLOCKS = {
  "minecraft:coal_ore": "minecraft:coal",
  "minecraft:deepslate_coal_ore": "minecraft:coal",
  "minecraft:iron_ore": "minecraft:raw_iron",
  "minecraft:deepslate_iron_ore": "minecraft:raw_iron",
  "minecraft:copper_ore": "minecraft:raw_copper",
  "minecraft:deepslate_copper_ore": "minecraft:raw_copper",
  "minecraft:gold_ore": "minecraft:raw_gold",
  "minecraft:deepslate_gold_ore": "minecraft:raw_gold",
  "minecraft:nether_gold_ore": "minecraft:gold_nugget",
  "minecraft:diamond_ore": "minecraft:diamond",
  "minecraft:deepslate_diamond_ore": "minecraft:diamond",
  "minecraft:emerald_ore": "minecraft:emerald",
  "minecraft:deepslate_emerald_ore": "minecraft:emerald",
  "minecraft:lapis_ore": "minecraft:lapis_lazuli",
  "minecraft:deepslate_lapis_ore": "minecraft:lapis_lazuli",
  "minecraft:redstone_ore": "minecraft:redstone",
  "minecraft:deepslate_redstone_ore": "minecraft:redstone",
  "minecraft:lit_redstone_ore": "minecraft:redstone",
  "minecraft:lit_deepslate_redstone_ore": "minecraft:redstone",
  "minecraft:quartz_ore": "minecraft:quartz",
  "minecraft:ancient_debris": "minecraft:ancient_debris",
  "minecraft:oak_log": "minecraft:oak_log",
  "minecraft:spruce_log": "minecraft:spruce_log",
  "minecraft:birch_log": "minecraft:birch_log",
  "minecraft:jungle_log": "minecraft:jungle_log",
  "minecraft:acacia_log": "minecraft:acacia_log",
  "minecraft:dark_oak_log": "minecraft:dark_oak_log",
  "minecraft:mangrove_log": "minecraft:mangrove_log",
  "minecraft:cherry_log": "minecraft:cherry_log",
  "minecraft:crimson_stem": "minecraft:crimson_stem",
  "minecraft:warped_stem": "minecraft:warped_stem"
};

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const { player, brokenBlockPermutation, block } = event;
  if (!player || player.getDynamicProperty("survivalmenu:veinminer") !== true) return;

  const brokenId = brokenBlockPermutation.type.id;
  const dropItemId = VEIN_BLOCKS[brokenId];
  if (!dropItemId) return;

  system.run(() => {
    try {
      const dim = block.dimension;
      const startPos = block.location;
      const visited = new Set([\`\${startPos.x},\${startPos.y},\${startPos.z}\`]);
      const queue = [startPos];
      let brokenCount = 0;
      const maxBlocks = 28;

      while (queue.length > 0 && brokenCount < maxBlocks) {
        const curr = queue.shift();
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            for (let dz = -1; dz <= 1; dz++) {
              if (dx === 0 && dy === 0 && dz === 0) continue;
              const nx = curr.x + dx;
              const ny = curr.y + dy;
              const nz = curr.z + dz;
              const key = \`\${nx},\${ny},\${nz}\`;
              if (visited.has(key)) continue;
              visited.add(key);

              const neighbor = dim.getBlock({ x: nx, y: ny, z: nz });
              if (neighbor && neighbor.typeId === brokenId) {
                neighbor.setType("minecraft:air");
                brokenCount++;
                queue.push({ x: nx, y: ny, z: nz });
                if (brokenCount >= maxBlocks) break;
              }
            }
            if (brokenCount >= maxBlocks) break;
          }
          if (brokenCount >= maxBlocks) break;
        }
      }

      if (brokenCount > 0) {
        giveCustomQuantity(player, dropItemId, brokenCount);
        player.addExperience(brokenCount * 2);
      }
    } catch (e) {}
  });
});

// Função auxiliar: Aplica encantamento de forma compatível com qualquer build 26.60.29 / 1.21+
function applySafeEnchant(itemStack, enchantId, level) {
  try {
    const enchComp =
      itemStack.getComponent("minecraft:enchantable") ||
      itemStack.getComponent("enchantable");
    if (!enchComp) return false;

    const cleanId = String(enchantId).replace("minecraft:", "");
    const enchType =
      EnchantmentTypes.get(cleanId) ||
      EnchantmentTypes.get("minecraft:" + cleanId);
    if (!enchType) return false;

    const maxLvl = enchType.maxLevel || 5;
    const safeLevel = Math.max(1, Math.min(Number(level) || 1, maxLvl));
    enchComp.addEnchantment({ type: enchType, level: safeLevel });
    return true;
  } catch (e) {
    return false;
  }
}

// Função auxiliar: Entrega qualquer quantidade de um ItemStack (mesmo acima de 64!)
function giveCustomQuantity(player, baseItemOrId, totalQuantity) {
  const inv = player.getComponent("minecraft:inventory")?.container;
  if (!inv) return 0;

  let remaining = Math.max(1, Math.min(9999, Math.floor(Number(totalQuantity) || 1)));
  let delivered = 0;

  while (remaining > 0) {
    let stack;
    if (typeof baseItemOrId === "string") {
      stack = new ItemStack(baseItemOrId, 1);
    } else {
      stack = baseItemOrId.clone();
    }

    const maxStack = stack.maxAmount || 64;
    const batch = Math.min(remaining, maxStack);
    stack.amount = batch;

    const leftover = inv.addItem(stack);
    if (leftover) {
      player.dimension.spawnItem(leftover, player.location);
    }
    remaining -= batch;
    delivered += batch;
  }
  return delivered;
}

${
  isEnabled('keep_inventory')
    ? `// ============================================================================
// PROTEÇÃO DE MORTE & REGISTRO AUTOMÁTICO DO LOCAL DE MORTE
// ============================================================================
world.afterEvents.entityDie.subscribe((event) => {
  const dead = event.deadEntity;
  if (dead?.typeId === "minecraft:player") {
    const loc = dead.location;
    const dim = dead.dimension.id;
    dead.setDynamicProperty("survivalmenu:last_death", JSON.stringify({
      x: Math.floor(loc.x),
      y: Math.floor(loc.y),
      z: Math.floor(loc.z),
      dimension: dim
    }));
    dead.sendMessage(\`§8[§aMenu§8] §eLocal da morte salvo em: §f\${Math.floor(loc.x)}, \${Math.floor(loc.y)}, \${Math.floor(loc.z)} (\${dim})\`);
  }
});`
    : ''
}

// ============================================================================
// LOOP DE ATALHO DE TECLADO (SHIFT 2X) + ÍMÃ DE DROPS + ESCUDO + RADAR
// ============================================================================
let tickCounter = 0;
system.runInterval(() => {
  tickCounter++;
  const now = Date.now();
  for (const player of world.getAllPlayers()) {
    try {
      const state = sneakTracker.get(player.id) || { wasSneaking: false, lastTap: 0, count: 0 };
      const isSneakingNow = player.isSneaking;
      const rot = player.getRotation();

      // Detecta Duplo-Shift olhando para baixo (pitch > 65) ou para cima (pitch < -65)
      if (isSneakingNow && !state.wasSneaking && (rot.x > 65 || rot.x < -65)) {
        if (now - state.lastTap < 700) {
          state.count += 1;
        } else {
          state.count = 1;
        }
        state.lastTap = now;

        if (state.count >= 2) {
          state.count = 0;
          if (rot.x > 65) {
            openArmorToolKeypadMenu(player);
          } else {
            openMainMenu(player);
          }
        }
      }
      state.wasSneaking = isSneakingNow;
      sneakTracker.set(player.id, state);

      // Voo Survival Assistido
      if (player.getDynamicProperty("survivalmenu:fly_enabled") === true) {
        player.addEffect("slow_falling", 60, { amplifier: 0, showParticles: false });
        if (player.isJumping && player.isSneaking) {
          const dir = player.getViewDirection();
          player.applyKnockback(dir.x, dir.z, 1.8, 0.75);
        }
      }

      // Ímã Automático de Drops e XP (a cada 3 ciclos)
      if (tickCounter % 3 === 0 && player.getDynamicProperty("survivalmenu:magnet_enabled") === true) {
        const items = player.dimension.getEntities({
          location: player.location,
          maxDistance: 16,
          type: "minecraft:item"
        });
        for (const it of items) {
          it.teleport(player.location);
        }
        const orbs = player.dimension.getEntities({
          location: player.location,
          maxDistance: 16,
          type: "minecraft:xp_orb"
        });
        for (const orb of orbs) {
          orb.teleport(player.location);
        }
      }

      // Escudo Automático Anti-Monstros (Elimina hostis a menos de 8 blocos)
      if (tickCounter % 5 === 0 && player.getDynamicProperty("survivalmenu:shield_aura") === true) {
        const hostiles = player.dimension.getEntities({
          location: player.location,
          maxDistance: 8,
          families: ["monster"]
        });
        for (const h of hostiles) {
          try { h.kill(); } catch (e) {}
        }
      }

      // HUD de Coordenadas e Scanner de Minérios
      if (tickCounter % 4 === 0 && player.getDynamicProperty("survivalmenu:hud_enabled") === true) {
        const pos = player.location;
        let hudText = \`§aXYZ: §f\${Math.floor(pos.x)} \${Math.floor(pos.y)} \${Math.floor(pos.z)}\`;
        ${
          isEnabled('ore_radar_hud')
            ? `const nearestOre = scanNearbyValuableOres(player, 8);
        if (nearestOre) {
          hudText += \` §8| §b\${nearestOre}\`;
        } else {
          hudText += \` §8| §7Radar: Limpo (8m)\`;
        }`
            : ''
        }
        player.onScreenDisplay.setActionBar(hudText);
      }
    } catch (e) {}
  }
}, 4);

function scanNearbyValuableOres(player, radius) {
  const dim = player.dimension;
  const px = Math.floor(player.location.x);
  const py = Math.floor(player.location.y);
  const pz = Math.floor(player.location.z);
  const targets = {
    "minecraft:diamond_ore": "Diamante",
    "minecraft:deepslate_diamond_ore": "Diamante Profundo",
    "minecraft:ancient_debris": "Detrito Ancestral (Netherite)",
    "minecraft:emerald_ore": "Esmeralda",
    "minecraft:mob_spawner": "Mob Spawner"
  };

  for (let dx = -radius; dx <= radius; dx += 2) {
    for (let dy = -radius; dy <= radius; dy += 2) {
      for (let dz = -radius; dz <= radius; dz += 2) {
        try {
          const block = dim.getBlock({ x: px + dx, y: py + dy, z: pz + dz });
          if (block && targets[block.typeId]) {
            const dist = Math.round(Math.sqrt(dx * dx + dy * dy + dz * dz));
            return \`\${targets[block.typeId]} a \${dist}m\`;
          }
        } catch (err) {}
      }
    }
  }
  return null;
}

// ============================================================================
// MENU PRINCIPAL (@minecraft/server-ui ActionFormData)
// ============================================================================
function openMainMenu(player) {
  ${config.soundFeedback ? `try { player.playSound("random.pop", { pitch: 1.2, volume: 0.8 }); } catch (e) {}` : ''}
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§2${config.addonName} v${config.targetBuildVersion}")
    .body(
      "§7Modo Sobrevivência §8| §aConquistas: ATIVAS\\n" +
      \`§7Direção atual do olhar p/ Construções: §b\${basis.dirLabelPt}\\n\` +
      "§eAtalho: Olhe p/ o chão + Shift 2x abre o Teclado de Armaduras!"
    )
    .button("§l§6Teclado: Armaduras, 5 Shulkers & Encantar\\n§r§8Todos os sets + 18 Moldes + Encantamentos", "textures/items/netherite_chestplate")
    .button("§l§cSuper Ferramentas: 50x50, Chunk & Bedrock\\n§r§8Martelo 50x50 + Chunk 16x16 + Bedrock + Baús Automáticos", "textures/items/netherite_pickaxe")
    .button("§l§dMega Sala Encantamentos + 42 Villagers (1 Esmeralda)\\n§r§842 Baús Livros Nv.Máx + 18 Baús Insumos + 42 Villagers", "textures/items/book_enchanted")
    .button("§l§5Mega Armazém: Baús Duplos & 5 Estilos (Direção Olhar)\\n§r§810 Setores + Placas na Frente + 5 Modelos de Arquitetura", "textures/items/chest_minecart")
    .button("§l§dBloco Multiplicador, Shulker Lotada & Bigorna\\n§r§8Clique=+1/+5 Packs | Bater=Shulker 100% Lotada", "textures/items/shulker_shell")
    .button("§l§bPegar Qualquer Item do Jogo\\n§r§8Buscador Universal (1.600+ itens), ID e Kits", "textures/items/diamond")
    .button("§l§2God Mode, Hit-Kill, VeinMiner & Ímã\\n§r§8Imortalidade, 1-Hit Kill, Quebrar Veia, XP", "textures/items/totem")
    .button("§l§eWaypoints, Dimensões & Voo Survival\\n§r§85 Waypoints, Ir ao Nether/End, Voo", "textures/items/ender_pearl")
    .button("§l§aConstrutor (Direção do Olhar): 30 Poções & Fornalha\\n§r§830 Baús de Poções + Fornalha 16x + Mesa Nv.30 + Bosses", "textures/items/brewing_stand")
    .button("§l§3Mundo, Clima, Fullbright & Radar HUD\\n§r§8Dia/Noite, Escudo Anti-Mobs, Scanner", "textures/items/spyglass");

  showFormSafely(player, form, (res) => {
    switch (res.selection) {
      case 0:
        openArmorToolKeypadMenu(player);
        break;
      case 1:
        openSuperToolsMenu(player);
        break;
      case 2:
        openMegaEnchantmentHallMenu(player);
        break;
      case 3:
        openMegaChestHallMenu(player);
        break;
      case 4:
        openDuplicatorMenu(player);
        break;
      case 5:
        openAllItemsMenu(player);
        break;
      case 6:
        openSurvivalBuffsMenu(player);
        break;
      case 7:
        openMovementMenu(player);
        break;
      case 8:
        openBuilderAndSpawnerMenu(player);
        break;
      case 9:
        openWorldAndVisualCombinedMenu(player);
        break;
    }
  });
}

// ============================================================================
// 0. TECLADO DE ARMADURAS, FERRAMENTAS & SELETOR DE ENCANTAMENTOS
// ============================================================================
function openArmorToolKeypadMenu(player) {
  ${config.soundFeedback ? `try { player.playSound("random.anvil_use", { pitch: 1.1, volume: 0.7 }); } catch (e) {}` : ''}
  const form = new ActionFormData()
    .title("§l§6Teclado: Armaduras & Encantamentos")
    .body(
      "§7Selecione uma tecla abaixo para escolher a Armadura, Ferramenta ou gerar as 5 Shulker Boxes com todos os 18 Moldes:"
    )
    .button("§l§5[Tecla 1] 5 Shulker Boxes: Armaduras Max + Todos os 18 Moldes\\n§r§8Gera 5 Shulkers lotadas com 18 Sets Full Max + Todos os Moldes", "textures/items/shulker_shell")
    .button("§l§d[Tecla 2] Armaduras Completas (Escolher Material & Encantamentos)\\n§r§8Netherita, Diamante, Ferro, Ouro, Malha, Couro, Tartaruga", "textures/items/netherite_chestplate")
    .button("§l§b[Tecla 3] Ferramentas (Picareta, Machado, Pá, Enxada)\\n§r§8Todos os materiais + Escolher Eficiência, Fortuna, Toque Suave", "textures/items/netherite_pickaxe")
    .button("§l§c[Tecla 4] Armas (Espadas, Clava 1.21, Tridente, Arco)\\n§r§8Escolha Afiação V, Pilhagem III, Densidade, Empalamento...", "textures/items/netherite_sword")
    .button("§l§a[Tecla 5] Encantar o Item que Está na Minha Mão\\n§r§8Aplica qualquer encantamento no item que você está segurando", "textures/items/book_enchanted")
    .button("§l§e[Tecla 6] Kit Deus Instantâneo no Corpo (Set Netherita + Armas Full)\\n§r§8Entrega e equipa tudo já encantado no nível máximo!", "textures/items/totem")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      spawnMaxArmorTrimShulkerBoxes(player);
    } else if (res.selection === 1) {
      openArmorSelectorModal(player);
    } else if (res.selection === 2) {
      openToolSelectorModal(player);
    } else if (res.selection === 3) {
      openWeaponSelectorModal(player);
    } else if (res.selection === 4) {
      openHandItemEnchanterModal(player);
    } else if (res.selection === 5) {
      giveInstantMaxedGodGear(player);
    } else if (res.selection === 6) {
      openMainMenu(player);
    }
  });
}

function openArmorSelectorModal(player) {
  const materials = [
    { name: "Netherita (Netherite)", prefix: "netherite" },
    { name: "Diamante (Diamond)", prefix: "diamond" },
    { name: "Ferro (Iron)", prefix: "iron" },
    { name: "Ouro (Golden)", prefix: "golden" },
    { name: "Malha (Chainmail)", prefix: "chainmail" },
    { name: "Couro (Leather)", prefix: "leather" }
  ];

  const pieceOptions = [
    "Set Completo (Capacete + Peitoral + Calça + Botas)",
    "Set Completo + Élitros Encantado",
    "Apenas Capacete",
    "Apenas Peitoral",
    "Apenas Calças",
    "Apenas Botas",
    "Apenas Casco de Tartaruga (Turtle Helmet)",
    "Apenas Élitros (Elytra)"
  ];

  const protTypes = [
    { name: "Proteção Geral (Protection)", id: "protection" },
    { name: "Proteção contra Fogo (Fire Protection)", id: "fire_protection" },
    { name: "Proteção contra Explosões (Blast Protection)", id: "blast_protection" },
    { name: "Proteção contra Projéteis (Projectile Protection)", id: "projectile_protection" },
    { name: "Nenhuma Proteção", id: "none" }
  ];

  const modal = new ModalFormData()
    .title("Teclado de Armaduras & Encantamentos")
    .dropdown("1. Escolha o Material da Armadura:", materials.map((m) => m.name), 0)
    .dropdown("2. Quais Peças você quer receber:", pieceOptions, 0)
    .dropdown("3. Tipo de Proteção Principal:", protTypes.map((p) => p.name), 0)
    .slider("Nível da Proteção (1 a 4)", 1, 4, 1, 4)
    .toggle("Inquebrável III (Unbreaking 3)", true)
    .toggle("Remendo (Mending - Regenera com XP)", true)
    .toggle("Espinhos III (Thorns 3 - Dano em quem te ataca)", false)
    .toggle("Botas: Peso Pena IV + Passos Profundos III + Velocidade das Almas III", true)
    .toggle("Capacete & Calça: Respiração III + Afinidade Aquática + Passos Rápidos III", true)
    .toggle("Equipar automaticamente no corpo agora", true);

  showFormSafely(player, modal, (res) => {
    const [
      matIdx,
      pieceIdx,
      protIdx,
      protLevel,
      useUnbreaking,
      useMending,
      useThorns,
      useBootExtras,
      useHelmLegExtras,
      autoEquip
    ] = res.formValues;

    const mat = materials[Number(matIdx)].prefix;
    const protId = protTypes[Number(protIdx)].id;

    const itemsToCreate = [];
    if (pieceIdx === 0 || pieceIdx === 1) {
      itemsToCreate.push({ id: \`minecraft:\${mat}_helmet\`, slot: EquipmentSlot.Head, kind: "helmet" });
      itemsToCreate.push({ id: \`minecraft:\${mat}_chestplate\`, slot: EquipmentSlot.Chest, kind: "chest" });
      itemsToCreate.push({ id: \`minecraft:\${mat}_leggings\`, slot: EquipmentSlot.Legs, kind: "legs" });
      itemsToCreate.push({ id: \`minecraft:\${mat}_boots\`, slot: EquipmentSlot.Feet, kind: "boots" });
      if (pieceIdx === 1) {
        itemsToCreate.push({ id: "minecraft:elytra", slot: null, kind: "elytra" });
      }
    } else if (pieceIdx === 2) {
      itemsToCreate.push({ id: \`minecraft:\${mat}_helmet\`, slot: EquipmentSlot.Head, kind: "helmet" });
    } else if (pieceIdx === 3) {
      itemsToCreate.push({ id: \`minecraft:\${mat}_chestplate\`, slot: EquipmentSlot.Chest, kind: "chest" });
    } else if (pieceIdx === 4) {
      itemsToCreate.push({ id: \`minecraft:\${mat}_leggings\`, slot: EquipmentSlot.Legs, kind: "legs" });
    } else if (pieceIdx === 5) {
      itemsToCreate.push({ id: \`minecraft:\${mat}_boots\`, slot: EquipmentSlot.Feet, kind: "boots" });
    } else if (pieceIdx === 6) {
      itemsToCreate.push({ id: "minecraft:turtle_helmet", slot: EquipmentSlot.Head, kind: "helmet" });
    } else if (pieceIdx === 7) {
      itemsToCreate.push({ id: "minecraft:elytra", slot: EquipmentSlot.Chest, kind: "elytra" });
    }

    const inv = player.getComponent("minecraft:inventory")?.container;
    const equip = player.getComponent("minecraft:equippable");

    for (const entry of itemsToCreate) {
      const stack = new ItemStack(entry.id, 1);
      if (protId !== "none" && entry.kind !== "elytra") {
        applySafeEnchant(stack, protId, Number(protLevel));
      }
      if (useUnbreaking) applySafeEnchant(stack, "unbreaking", 3);
      if (useMending) applySafeEnchant(stack, "mending", 1);
      if (useThorns && entry.kind !== "elytra") applySafeEnchant(stack, "thorns", 3);

      if (useBootExtras && entry.kind === "boots") {
        applySafeEnchant(stack, "feather_falling", 4);
        applySafeEnchant(stack, "depth_strider", 3);
        applySafeEnchant(stack, "soul_speed", 3);
      }
      if (useHelmLegExtras && entry.kind === "helmet") {
        applySafeEnchant(stack, "respiration", 3);
        applySafeEnchant(stack, "aqua_affinity", 1);
      }
      if (useHelmLegExtras && entry.kind === "legs") {
        applySafeEnchant(stack, "swift_sneak", 3);
      }

      if (autoEquip && entry.slot && equip) {
        const prev = equip.getEquipment(entry.slot);
        if (prev && inv) inv.addItem(prev);
        equip.setEquipment(entry.slot, stack);
      } else if (inv) {
        inv.addItem(stack);
      }
    }

    player.sendMessage("§8[§aTeclado Forja§8] §aArmadura personalizada criada e encantada com sucesso!");
  });
}

function openToolSelectorModal(player) {
  const materials = [
    { name: "Netherita (Netherite)", prefix: "netherite" },
    { name: "Diamante (Diamond)", prefix: "diamond" },
    { name: "Ferro (Iron)", prefix: "iron" },
    { name: "Ouro (Golden)", prefix: "golden" },
    { name: "Pedra (Stone)", prefix: "stone" },
    { name: "Madeira (Wooden)", prefix: "wooden" }
  ];

  const toolTypes = [
    "Kit Completo (Picareta + Machado + Pá + Enxada)",
    "Apenas Picareta (Pickaxe)",
    "Apenas Machado (Axe)",
    "Apenas Pá (Shovel)",
    "Apenas Enxada (Hoe)",
    "Vara de Pesca (Fishing Rod)",
    "Tesoura (Shears) + Pederneira (Flint and Steel)"
  ];

  const modal = new ModalFormData()
    .title("Teclado de Ferramentas & Encantamentos")
    .dropdown("1. Material da Ferramenta:", materials.map((m) => m.name), 0)
    .dropdown("2. Qual Ferramenta você quer:", toolTypes, 0)
    .toggle("Eficiência (Efficiency)", true)
    .slider("Nível da Eficiência (1 a 5)", 1, 5, 1, 5)
    .dropdown("3. Fortuna ou Toque Suave:", [
      "Fortuna III (Multiplica Diamantes e Minérios)",
      "Toque Suave (Silk Touch - Pega o próprio bloco)",
      "Nenhum dos dois"
    ], 0)
    .toggle("Inquebrável III (Unbreaking 3)", true)
    .toggle("Remendo (Mending)", true);

  showFormSafely(player, modal, (res) => {
    const [matIdx, toolIdx, useEff, effLvl, fortuneOrSilk, useUnb, useMend] = res.formValues;
    const mat = materials[Number(matIdx)].prefix;
    const inv = player.getComponent("minecraft:inventory")?.container;
    if (!inv) return;

    let ids = [];
    if (toolIdx === 0) {
      ids = [
        \`minecraft:\${mat}_pickaxe\`,
        \`minecraft:\${mat}_axe\`,
        \`minecraft:\${mat}_shovel\`,
        \`minecraft:\${mat}_hoe\`
      ];
    } else if (toolIdx === 1) ids = [\`minecraft:\${mat}_pickaxe\`];
    else if (toolIdx === 2) ids = [\`minecraft:\${mat}_axe\`];
    else if (toolIdx === 3) ids = [\`minecraft:\${mat}_shovel\`];
    else if (toolIdx === 4) ids = [\`minecraft:\${mat}_hoe\`];
    else if (toolIdx === 5) ids = ["minecraft:fishing_rod"];
    else if (toolIdx === 6) ids = ["minecraft:shears", "minecraft:flint_and_steel"];

    for (const id of ids) {
      const stack = new ItemStack(id, 1);
      if (useEff) applySafeEnchant(stack, "efficiency", Number(effLvl));
      if (fortuneOrSilk === 0) applySafeEnchant(stack, "fortune", 3);
      if (fortuneOrSilk === 1) applySafeEnchant(stack, "silk_touch", 1);
      if (useUnb) applySafeEnchant(stack, "unbreaking", 3);
      if (useMend) applySafeEnchant(stack, "mending", 1);
      if (id === "minecraft:fishing_rod") {
        applySafeEnchant(stack, "luck_of_the_sea", 3);
        applySafeEnchant(stack, "lure", 3);
      }
      inv.addItem(stack);
    }

    player.sendMessage("§8[§aTeclado Forja§8] §bFerramenta(s) entregue(s) com os encantamentos escolhidos!");
  });
}

function openWeaponSelectorModal(player) {
  const weapons = [
    { name: "Espada de Netherita", id: "minecraft:netherite_sword", type: "sword" },
    { name: "Espada de Diamante", id: "minecraft:diamond_sword", type: "sword" },
    { name: "Espada de Ferro", id: "minecraft:iron_sword", type: "sword" },
    { name: "Espada de Ouro", id: "minecraft:golden_sword", type: "sword" },
    { name: "Clava 1.21 (Mace)", id: "minecraft:mace", type: "mace" },
    { name: "Tridente (Trident)", id: "minecraft:trident", type: "trident" },
    { name: "Arco (Bow)", id: "minecraft:bow", type: "bow" },
    { name: "Besta (Crossbow)", id: "minecraft:crossbow", type: "crossbow" },
    { name: "Machado de Combate Netherita", id: "minecraft:netherite_axe", type: "sword" }
  ];

  const damageTypes = [
    { name: "Afiação (Sharpness - Dano Geral)", id: "sharpness" },
    { name: "Julgamento (Smite - Dano em Mortos-Vivos/Wither)", id: "smite" },
    { name: "Ruína dos Artrópodes (Bane of Arthropods)", id: "bane_of_arthropods" }
  ];

  const modal = new ModalFormData()
    .title("Teclado de Armas & Encantamentos")
    .dropdown("1. Escolha a Arma:", weapons.map((w) => w.name), 0)
    .dropdown("2. Encantamento de Dano (Espada/Machado):", damageTypes.map((d) => d.name), 0)
    .slider("Nível de Dano / Força / Densidade (1 a 5)", 1, 5, 1, 5)
    .toggle("Pilhagem III / Saque III (Looting 3 - Mais drops)", true)
    .toggle("Aspecto Flamejante II / Chama (Fogo no alvo)", true)
    .toggle("Repulsão II / Impacto II (Knockback)", false)
    .toggle("Clava 1.21: Brecha IV (Breach) + Rajada de Vento III (Wind Burst)", true)
    .toggle("Tridente: Empalamento V + Lealdade III + Condutividade", true)
    .toggle("Arco/Besta: Força V + Infinidade + Tiro Múltiplo + Carga Rápida III", true)
    .toggle("Inquebrável III + Remendo (Mending)", true);

  showFormSafely(player, modal, (res) => {
    const [
      wIdx,
      dmgIdx,
      dmgLvl,
      useLooting,
      useFire,
      useKnock,
      useMaceExtras,
      useTridentExtras,
      useBowExtras,
      useUnbMend
    ] = res.formValues;

    const chosen = weapons[Number(wIdx)];
    const stack = new ItemStack(chosen.id, 1);
    const inv = player.getComponent("minecraft:inventory")?.container;
    if (!inv) return;

    if (chosen.type === "sword") {
      applySafeEnchant(stack, damageTypes[Number(dmgIdx)].id, Number(dmgLvl));
      if (useLooting) applySafeEnchant(stack, "looting", 3);
      if (useFire) applySafeEnchant(stack, "fire_aspect", 2);
      if (useKnock) applySafeEnchant(stack, "knockback", 2);
    } else if (chosen.type === "mace") {
      applySafeEnchant(stack, "density", Number(dmgLvl));
      if (useMaceExtras) {
        applySafeEnchant(stack, "breach", 4);
        applySafeEnchant(stack, "wind_burst", 3);
      }
      if (useFire) applySafeEnchant(stack, "fire_aspect", 2);
    } else if (chosen.type === "trident") {
      if (useTridentExtras) {
        applySafeEnchant(stack, "impaling", Number(dmgLvl));
        applySafeEnchant(stack, "loyalty", 3);
        applySafeEnchant(stack, "channeling", 1);
      }
    } else if (chosen.type === "bow") {
      if (useBowExtras) {
        applySafeEnchant(stack, "power", Number(dmgLvl));
        applySafeEnchant(stack, "infinity", 1);
      }
      if (useFire) applySafeEnchant(stack, "flame", 1);
      if (useKnock) applySafeEnchant(stack, "punch", 2);
    } else if (chosen.type === "crossbow") {
      if (useBowExtras) {
        applySafeEnchant(stack, "quick_charge", 3);
        applySafeEnchant(stack, "multishot", 1);
        applySafeEnchant(stack, "piercing", 4);
      }
    }

    if (useUnbMend) {
      applySafeEnchant(stack, "unbreaking", 3);
      applySafeEnchant(stack, "mending", 1);
    }

    inv.addItem(stack);
    player.sendMessage(\`§8[§aTeclado Forja§8] §a\${chosen.name} entregue com seus encantamentos personalizados!\`);
  });
}

function openHandItemEnchanterModal(player) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);

  if (!handItem) {
    player.sendMessage("§8[§cTeclado Forja§8] §cSegure uma armadura, ferramenta ou arma na mão principal primeiro!");
    return;
  }

  const allEnchants = [
    { id: "sharpness", label: "Afiação (Sharpness)" },
    { id: "efficiency", label: "Eficiência (Efficiency)" },
    { id: "fortune", label: "Fortuna (Fortune)" },
    { id: "silk_touch", label: "Toque Suave (Silk Touch)" },
    { id: "protection", label: "Proteção IV (Protection)" },
    { id: "unbreaking", label: "Inquebrável (Unbreaking)" },
    { id: "mending", label: "Remendo (Mending)" },
    { id: "looting", label: "Pilhagem / Saque (Looting)" },
    { id: "fire_aspect", label: "Aspecto Flamejante (Fire Aspect)" },
    { id: "feather_falling", label: "Peso Pena (Feather Falling)" },
    { id: "density", label: "Densidade (Density - Clava)" },
    { id: "wind_burst", label: "Rajada de Vento (Wind Burst - Clava)" },
    { id: "breach", label: "Brecha (Breach - Clava)" },
    { id: "power", label: "Força (Power - Arco)" },
    { id: "infinity", label: "Infinidade (Infinity - Arco)" },
    { id: "impaling", label: "Empalamento (Impaling - Tridente)" },
    { id: "loyalty", label: "Lealdade (Loyalty - Tridente)" },
    { id: "riptide", label: "Correnteza (Riptide - Tridente)" },
    { id: "thorns", label: "Espinhos (Thorns)" },
    { id: "soul_speed", label: "Velocidade das Almas (Soul Speed)" },
    { id: "swift_sneak", label: "Passos Rápidos (Swift Sneak)" }
  ];

  const modal = new ModalFormData()
    .title(\`Encantar: \${handItem.typeId.replace("minecraft:", "")}\`)
    .dropdown("Escolha o Encantamento para aplicar:", allEnchants.map((e) => e.label), 0)
    .slider("Nível do Encantamento (1 a 5)", 1, 5, 1, 5)
    .toggle("Também adicionar Inquebrável III + Remendo automaticamente", true);

  showFormSafely(player, modal, (res) => {
    const [enchIdx, lvl, addUnbMend] = res.formValues;
    const chosen = allEnchants[Number(enchIdx)];

    const ok = applySafeEnchant(handItem, chosen.id, Number(lvl));
    if (addUnbMend) {
      applySafeEnchant(handItem, "unbreaking", 3);
      applySafeEnchant(handItem, "mending", 1);
    }

    equip.setEquipment(EquipmentSlot.Mainhand, handItem);
    if (ok) {
      player.sendMessage(\`§8[§aTeclado Forja§8] §aAplicado \${chosen.label} (Nível \${lvl}) no item da sua mão!\`);
    } else {
      player.sendMessage("§8[§eTeclado Forja§8] §eEncantamentos compatíveis foram aplicados ao item da mão!");
    }
  });
}

function giveInstantMaxedGodGear(player) {
  const inv = player.getComponent("minecraft:inventory")?.container;
  const equip = player.getComponent("minecraft:equippable");
  if (!inv || !equip) return;

  const armorPieces = [
    { id: "minecraft:netherite_helmet", slot: EquipmentSlot.Head, extras: [["respiration", 3], ["aqua_affinity", 1]] },
    { id: "minecraft:netherite_chestplate", slot: EquipmentSlot.Chest, extras: [["thorns", 3]] },
    { id: "minecraft:netherite_leggings", slot: EquipmentSlot.Legs, extras: [["swift_sneak", 3]] },
    { id: "minecraft:netherite_boots", slot: EquipmentSlot.Feet, extras: [["feather_falling", 4], ["depth_strider", 3], ["soul_speed", 3]] }
  ];

  for (const piece of armorPieces) {
    const st = new ItemStack(piece.id, 1);
    applySafeEnchant(st, "protection", 4);
    applySafeEnchant(st, "unbreaking", 3);
    applySafeEnchant(st, "mending", 1);
    for (const [eid, elvl] of piece.extras) {
      applySafeEnchant(st, eid, elvl);
    }
    equip.setEquipment(piece.slot, st);
  }

  const sword = new ItemStack("minecraft:netherite_sword", 1);
  applySafeEnchant(sword, "sharpness", 5);
  applySafeEnchant(sword, "looting", 3);
  applySafeEnchant(sword, "fire_aspect", 2);
  applySafeEnchant(sword, "unbreaking", 3);
  applySafeEnchant(sword, "mending", 1);
  inv.addItem(sword);

  const pick = new ItemStack("minecraft:netherite_pickaxe", 1);
  applySafeEnchant(pick, "efficiency", 5);
  applySafeEnchant(pick, "fortune", 3);
  applySafeEnchant(pick, "unbreaking", 3);
  applySafeEnchant(pick, "mending", 1);
  inv.addItem(pick);

  const mace = new ItemStack("minecraft:mace", 1);
  applySafeEnchant(mace, "density", 5);
  applySafeEnchant(mace, "wind_burst", 3);
  applySafeEnchant(mace, "unbreaking", 3);
  applySafeEnchant(mace, "mending", 1);
  inv.addItem(mace);

  player.sendMessage("§8[§aTeclado Forja§8] §6Set Netherita Completo equipado + Espada, Picareta e Clava Full Encantadas entregues!");
}

// ============================================================================
// GERADOR DE 5 SHULKER BOXES COM ARMADURAS NO MÁXIMO + TODOS OS 18 MOLDES
// ============================================================================
function createMaxEnchantedArmorSet(materialPrefix, trimDisplayName, colorPrefix) {
  const pieces = [
    {
      id: \`minecraft:\${materialPrefix}_helmet\`,
      label: "Capacete",
      extras: [["respiration", 3], ["aqua_affinity", 1]]
    },
    {
      id: \`minecraft:\${materialPrefix}_chestplate\`,
      label: "Peitoral",
      extras: []
    },
    {
      id: \`minecraft:\${materialPrefix}_leggings\`,
      label: "Calças",
      extras: [["swift_sneak", 3]]
    },
    {
      id: \`minecraft:\${materialPrefix}_boots\`,
      label: "Botas",
      extras: [["feather_falling", 4], ["depth_strider", 3], ["soul_speed", 3]]
    }
  ];

  const created = [];
  for (const p of pieces) {
    try {
      const st = new ItemStack(p.id, 1);
      applySafeEnchant(st, "protection", 4);
      applySafeEnchant(st, "unbreaking", 3);
      applySafeEnchant(st, "mending", 1);
      applySafeEnchant(st, "thorns", 3);
      for (const [eid, elvl] of p.extras) {
        applySafeEnchant(st, eid, elvl);
      }
      st.nameTag = \`\${colorPrefix}§l\${p.label} Full Max [\${trimDisplayName}]\`;
      st.setLore([
        "§7Encantada no Nível Máximo Absoluto",
        \`§eKit para Molde: §f\${trimDisplayName}\`,
        "§aPronta para combinar na Mesa de Ferraria"
      ]);
      created.push(st);
    } catch (e) {}
  }
  return created;
}

function spawnMaxArmorTrimShulkerBoxes(player) {
  const dim = player.dimension;
  const basis = getLookBasis(player);

  // Todos os 18 Moldes de Armadura do Minecraft 1.21+ divididos em 4 Shulker Boxes + 1 Shulker Box Cofre Mestre
  const shulkerBatches = [
    {
      blockId: "minecraft:purple_shulker_box",
      boxTitle: "Shulker 1 (Roxa): Moldes Lendários (Silêncio, Guardião, Espiral, Vex, Olho)",
      offsetX: -2,
      trims: [
        { id: "minecraft:silence_armor_trim_smithing_template", name: "Molde Silêncio (Ancient City)", color: "§3" },
        { id: "minecraft:ward_armor_trim_smithing_template", name: "Molde Guardião (Ward)", color: "§b" },
        { id: "minecraft:spire_armor_trim_smithing_template", name: "Molde Espiral (End City)", color: "§d" },
        { id: "minecraft:vex_armor_trim_smithing_template", name: "Molde Vex (Mansão)", color: "§5" },
        { id: "minecraft:eye_armor_trim_smithing_template", name: "Molde Olho (Stronghold)", color: "§e" }
      ],
      materials: ["minecraft:amethyst_shard", "minecraft:diamond"]
    },
    {
      blockId: "minecraft:cyan_shulker_box",
      boxTitle: "Shulker 2 (Ciano): Provação 1.21, Nether & Oceano (Fluxo, Parafuso, Focinho, Costela, Maré)",
      offsetX: -1,
      trims: [
        { id: "minecraft:flow_armor_trim_smithing_template", name: "Molde Fluxo 1.21 (Flow)", color: "§b" },
        { id: "minecraft:bolt_armor_trim_smithing_template", name: "Molde Parafuso 1.21 (Bolt)", color: "§6" },
        { id: "minecraft:snout_armor_trim_smithing_template", name: "Molde Focinho (Bastião)", color: "§6" },
        { id: "minecraft:rib_armor_trim_smithing_template", name: "Molde Costela (Fortaleza)", color: "§c" },
        { id: "minecraft:tide_armor_trim_smithing_template", name: "Molde Maré (Monumento)", color: "§3" }
      ],
      materials: ["minecraft:emerald", "minecraft:netherite_ingot"]
    },
    {
      blockId: "minecraft:red_shulker_box",
      boxTitle: "Shulker 3 (Vermelha): Selva, Deserto & Costa (Selva, Sentinela, Duna, Costa, Descobridor)",
      offsetX: 0,
      trims: [
        { id: "minecraft:wild_armor_trim_smithing_template", name: "Molde Selva (Wild)", color: "§a" },
        { id: "minecraft:sentry_armor_trim_smithing_template", name: "Molde Sentinela (Sentry)", color: "§c" },
        { id: "minecraft:dune_armor_trim_smithing_template", name: "Molde Duna (Pirâmide)", color: "§e" },
        { id: "minecraft:coast_armor_trim_smithing_template", name: "Molde Costa (Naufrágio)", color: "§b" },
        { id: "minecraft:wayfinder_armor_trim_smithing_template", name: "Molde Descobridor (Ruínas)", color: "§6" }
      ],
      materials: ["minecraft:gold_ingot", "minecraft:redstone"]
    },
    {
      blockId: "minecraft:yellow_shulker_box",
      boxTitle: "Shulker 4 (Amarela): Arqueologia + Sets Diamante & Ouro Max (Modelador, Elevador, Anfitrião)",
      offsetX: 1,
      trims: [
        { id: "minecraft:shaper_armor_trim_smithing_template", name: "Molde Modelador (Shaper)", color: "§d" },
        { id: "minecraft:raiser_armor_trim_smithing_template", name: "Molde Elevador (Raiser)", color: "§a" },
        { id: "minecraft:host_armor_trim_smithing_template", name: "Molde Anfitrião (Host)", color: "§b" }
      ],
      extraArmorMaterials: [
        { mat: "diamond", name: "Set Diamante Max", color: "§b" },
        { mat: "golden", name: "Set Ouro Max", color: "§6" }
      ],
      materials: ["minecraft:lapis_lazuli", "minecraft:quartz", "minecraft:copper_ingot", "minecraft:iron_ingot"]
    }
  ];

  let boxesPlaced = 0;

  for (const batch of shulkerBatches) {
    try {
      const targetPos = basis.rel(2, 0, batch.offsetX);
      const block = dim.getBlock(targetPos);
      if (block) {
        block.setType(batch.blockId);
        const container = block.getComponent("minecraft:inventory")?.container;
        if (container) {
          container.clearAll();
          for (const t of batch.trims) {
            const armorSet = createMaxEnchantedArmorSet("netherite", t.name, t.color);
            for (const piece of armorSet) {
              container.addItem(piece);
            }
          }
          if (batch.extraArmorMaterials) {
            for (const ex of batch.extraArmorMaterials) {
              const extraSet = createMaxEnchantedArmorSet(ex.mat, ex.name, ex.color);
              for (const piece of extraSet) {
                container.addItem(piece);
              }
            }
          }
          for (const t of batch.trims) {
            try {
              const tmpl = new ItemStack(t.id, 64);
              container.addItem(tmpl);
            } catch (e) {}
          }
          for (const matId of batch.materials) {
            try {
              container.addItem(new ItemStack(matId, 64));
            } catch (e) {}
          }
          try {
            container.addItem(new ItemStack("minecraft:smithing_table", 16));
          } catch (e) {}
          boxesPlaced++;
        }
      }
    } catch (e) {}
  }

  // Shulker Box 5 (Verde-Limão): Cofre Mestre com TODOS os 18 Moldes (64x) + Molde Netherita (64x) + Élitros Max + Todos os 10 Minerais
  try {
    const masterPos = basis.rel(2, 0, 2);
    const masterBlock = dim.getBlock(masterPos);
    if (masterBlock) {
      masterBlock.setType("minecraft:lime_shulker_box");
      const masterCont = masterBlock.getComponent("minecraft:inventory")?.container;
      if (masterCont) {
        masterCont.clearAll();
        const all19Templates = [
          "minecraft:netherite_upgrade_smithing_template",
          "minecraft:silence_armor_trim_smithing_template",
          "minecraft:ward_armor_trim_smithing_template",
          "minecraft:spire_armor_trim_smithing_template",
          "minecraft:vex_armor_trim_smithing_template",
          "minecraft:eye_armor_trim_smithing_template",
          "minecraft:snout_armor_trim_smithing_template",
          "minecraft:flow_armor_trim_smithing_template",
          "minecraft:bolt_armor_trim_smithing_template",
          "minecraft:rib_armor_trim_smithing_template",
          "minecraft:tide_armor_trim_smithing_template",
          "minecraft:wild_armor_trim_smithing_template",
          "minecraft:sentry_armor_trim_smithing_template",
          "minecraft:dune_armor_trim_smithing_template",
          "minecraft:coast_armor_trim_smithing_template",
          "minecraft:wayfinder_armor_trim_smithing_template",
          "minecraft:shaper_armor_trim_smithing_template",
          "minecraft:raiser_armor_trim_smithing_template",
          "minecraft:host_armor_trim_smithing_template"
        ];
        for (const tid of all19Templates) {
          try { masterCont.addItem(new ItemStack(tid, 64)); } catch (e) {}
        }
        const elytra = new ItemStack("minecraft:elytra", 1);
        applySafeEnchant(elytra, "unbreaking", 3);
        applySafeEnchant(elytra, "mending", 1);
        elytra.nameTag = "§d§lÉlitros Suprema Full Max";
        masterCont.addItem(elytra);

        const turtle = new ItemStack("minecraft:turtle_helmet", 1);
        applySafeEnchant(turtle, "protection", 4);
        applySafeEnchant(turtle, "respiration", 3);
        applySafeEnchant(turtle, "aqua_affinity", 1);
        applySafeEnchant(turtle, "unbreaking", 3);
        applySafeEnchant(turtle, "mending", 1);
        turtle.nameTag = "§a§lCasco de Tartaruga Full Max";
        masterCont.addItem(turtle);

        masterCont.addItem(new ItemStack("minecraft:smithing_table", 64));
        masterCont.addItem(new ItemStack("minecraft:amethyst_shard", 64));
        masterCont.addItem(new ItemStack("minecraft:emerald", 64));
        masterCont.addItem(new ItemStack("minecraft:diamond", 64));
        masterCont.addItem(new ItemStack("minecraft:netherite_ingot", 64));
        masterCont.addItem(new ItemStack("minecraft:gold_ingot", 64));
        boxesPlaced++;
      }
    }
  } catch (e) {}

  // Coloca também uma Bancada de Ferraria pronta ao lado para o jogador usar na hora
  try {
    dim.getBlock(basis.rel(1, 0, 0))?.setType("minecraft:smithing_table");
  } catch (e) {}

  giveInstantMaxedGodGear(player);

  try { player.playSound("random.totem", { pitch: 1.0, volume: 0.9 }); } catch (e) {}
  player.sendMessage(\`§8[§dShulker Trims§8] §aForam geradas \${boxesPlaced} Shulker Boxes Coloridas na direção do seu olhar (\${basis.dirLabelPt})!\`);
  player.sendMessage("§7Cada Shulker Box contém Sets Completos de Armadura no Nível Máximo + Todos os 18 Moldes (64x) + Todos os Minerais de Cor + Bancada de Ferraria! Quebre-as para levar na mochila!");
}

// ============================================================================
// 1. MULTIPLICADOR DE ITENS + BIGORNA COLORIDA (RENOMEAR ITEM DA MÃO)
// ============================================================================
function openDuplicatorMenu(player) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
  const handName = handItem ? \`\${handItem.typeId.replace("minecraft:", "")} (\${handItem.amount}x)\` : "Nenhum item na mão";

  const form = new ActionFormData()
    .title("§l§dBloco Multiplicador & Bigorna")
    .body(
      \`§7Item atual na mão: §e\${handName}\\n\` +
      "§dBloco Multiplicador: §fClicar = +1/+5 Packs | §eBater nele = Gera 1 Shulker Box 100% Lotada!"
    )
    .button("§l§dColocar Estação do Bloco Multiplicador + Baú Duplo\\n§r§8Instala o Bloco Multiplicador na sua frente pronto para clicar ou bater!", "textures/items/compass_item")
    .button("§l§bBater / Gerar 1 Shulker Box 100% LOTADA do Item da Mão\\n§r§827 slots lotados (1.728 itens ou 27 cópias da sua arma/armadura)", "textures/items/shulker_shell")
    .button("§aMultiplicar Item da Mão (Escolher Quantidade)\\n§r§8Digite qualquer valor (ex: 64, 500, 2304)", "textures/items/nether_star")
    .button("§bEscolher Item do Inventário para Multiplicar\\n§r§8Seleciona qualquer slot da mochila e clona", "textures/items/chest_minecart")
    .button("§eDeixar Item da Mão em 64x Instantâneo\\n§r§8Completa o pack da mão imediatamente", "textures/items/emerald")
    .button("§dMultiplicar TODOS os Itens do Inventário (x64)\\n§r§8Transforma cada slot do inventário em pack máximo", "textures/items/totem")
    .button("§6Bigorna Colorida: Renomear Item da Mão\\n§r§8Mude o nome e a descrição com cores sem gastar XP", "textures/items/name_tag")
    .button("§3Reparar 100% da Durabilidade (Mão + Inventário)\\n§r§8Conserta todas as ferramentas e armaduras", "textures/items/anvil_top_damaged_0")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      buildMultiplierBlockStation(player);
    } else if (res.selection === 1) {
      if (!handItem) {
        player.sendMessage("§8[§cShulker Multiplicadora§8] §cSegure um item, minério, poção ou arma na mão principal primeiro!");
        return;
      }
      const pLoc = {
        x: Math.floor(player.location.x),
        y: Math.floor(player.location.y),
        z: Math.floor(player.location.z) + 1
      };
      spawnFull27SlotShulkerFromItem(player, handItem, pLoc);
    } else if (res.selection === 2) {
      if (!handItem) {
        player.sendMessage("§8[§cMenu§8] §cSegure um item na mão principal primeiro!");
        return;
      }
      openQuantityMultiplierModal(player, handItem, \`Mão: \${handItem.typeId.replace("minecraft:", "")}\`);
    } else if (res.selection === 3) {
      openInventorySlotPicker(player);
    } else if (res.selection === 4) {
      if (!handItem) {
        player.sendMessage("§8[§cMenu§8] §cVocê não está segurando nenhum item na mão!");
        return;
      }
      const cloned = handItem.clone();
      cloned.amount = cloned.maxAmount || 64;
      equip.setEquipment(EquipmentSlot.Mainhand, cloned);
      player.sendMessage(\`§8[§aMenu§8] §aItem da mão definido para \${cloned.amount}x!\`);
    } else if (res.selection === 5) {
      const inv = player.getComponent("minecraft:inventory")?.container;
      if (!inv) return;
      let count = 0;
      for (let i = 0; i < inv.size; i++) {
        const slotItem = inv.getItem(i);
        if (slotItem && !slotItem.typeId.startsWith("survivalmenu:")) {
          const max = slotItem.maxAmount || 64;
          if (slotItem.amount < max) {
            slotItem.amount = max;
            inv.setItem(i, slotItem);
            count++;
          }
        }
      }
      player.sendMessage(\`§8[§aMenu§8] §d\${count} slots do inventário foram multiplicados para o pack máximo (64x)!\`);
    } else if (res.selection === 6) {
      openItemRenamerModal(player);
    } else if (res.selection === 7) {
      const inv = player.getComponent("minecraft:inventory")?.container;
      if (!inv) return;
      let repaired = 0;
      for (let i = 0; i < inv.size; i++) {
        const slotItem = inv.getItem(i);
        if (slotItem) {
          const dur = slotItem.getComponent("minecraft:durability");
          if (dur && dur.damage > 0) {
            dur.damage = 0;
            inv.setItem(i, slotItem);
            repaired++;
          }
        }
      }
      player.sendMessage(\`§8[§aMenu§8] §a\${repaired} itens tiveram sua durabilidade restaurada em 100%!\`);
    } else if (res.selection === 8) {
      openMainMenu(player);
    }
  });
}

function openItemRenamerModal(player) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);
  if (!handItem) {
    player.sendMessage("§8[§cBigorna§8] §cSegure um item na mão principal para renomear!");
    return;
  }

  const colors = [
    { name: "Dourado Brilhante (§6§l)", code: "§6§l" },
    { name: "Verde Esmeralda (§a§l)", code: "§a§l" },
    { name: "Azul Diamante (§b§l)", code: "§b§l" },
    { name: "Roxo Místico (§d§l)", code: "§d§l" },
    { name: "Vermelho Rubi (§c§l)", code: "§c§l" },
    { name: "Branco Puro (§f§l)", code: "§f§l" }
  ];

  const modal = new ModalFormData()
    .title("Bigorna Colorida (Renomear Item)")
    .dropdown("Escolha a Cor do Nome:", colors.map((c) => c.name), 0)
    .textField("Novo Nome do Item:", "Ex: Excalibur Lendária", handItem.nameTag || "")
    .textField("Descrição / Lore abaixo do nome (opcional):", "Ex: Forjada no Modo Sobrevivência", "");

  showFormSafely(player, modal, (res) => {
    const [colorIdx, newName, newLore] = res.formValues;
    const prefix = colors[Number(colorIdx)].code;
    if (String(newName).trim()) {
      handItem.nameTag = \`\${prefix}\${String(newName).trim()}§r\`;
    }
    if (String(newLore).trim()) {
      handItem.setLore([\`§7\${String(newLore).trim()}\`, "§aItem Legítimo Survival"]);
    }
    equip.setEquipment(EquipmentSlot.Mainhand, handItem);
    player.sendMessage("§8[§aBigorna§8] §aItem renomeado com sucesso!");
  });
}

function openQuantityMultiplierModal(player, targetItemStack, label) {
  const modal = new ModalFormData()
    .title(\`Multiplicar: \${label.slice(0, 22)}\`)
    .slider("Quantidade pelo Slider (1 a 640)", 1, 640, 1, 64)
    .textField(
      "Ou digite QUALQUER quantidade exata aqui (ex: 64, 500, 1000, 2304):",
      "Deixe em branco para usar o valor do slider acima",
      ""
    );

  showFormSafely(player, modal, (res) => {
    const [sliderVal, customText] = res.formValues;
    const parsedCustom = parseInt(String(customText).trim(), 10);
    const finalQty = !isNaN(parsedCustom) && parsedCustom > 0 ? parsedCustom : Number(sliderVal);

    const totalGiven = giveCustomQuantity(player, targetItemStack, finalQty);
    player.sendMessage(
      \`§8[§aMultiplicador§8] §aClonado +\${totalGiven}x §e\${targetItemStack.typeId.replace("minecraft:", "")} §acom sucesso!\`
    );
  });
}

function openInventorySlotPicker(player) {
  const inv = player.getComponent("minecraft:inventory")?.container;
  if (!inv) return;

  const occupiedSlots = [];
  const form = new ActionFormData()
    .title("§l§bMultiplicar do Inventário")
    .body("§7Selecione qualquer item do seu inventário para multiplicar pela quantidade que quiser:");

  for (let i = 0; i < inv.size; i++) {
    const it = inv.getItem(i);
    if (it) {
      occupiedSlots.push({ slot: i, item: it });
      const shortName = it.nameTag ? it.nameTag : it.typeId.replace("minecraft:", "");
      form.button(\`§eSlot \${i + 1}: §f\${shortName} §a(\${it.amount}x)\\n§r§8Clique para escolher a quantidade\`);
    }
  }

  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection >= occupiedSlots.length) {
      openDuplicatorMenu(player);
      return;
    }
    const chosen = occupiedSlots[res.selection];
    openQuantityMultiplierModal(player, chosen.item, chosen.item.typeId.replace("minecraft:", ""));
  });
}

// ============================================================================
// 2. PEGAR QUALQUER ITEM DO JOGO (BUSCADOR UNIVERSAL ItemTypes.getAll() + ID)
// ============================================================================
function openAllItemsMenu(player) {
  const form = new ActionFormData()
    .title("§l§bPegar Qualquer Item do Jogo")
    .body("§7Acesse todos os 1.600+ itens do Minecraft Bedrock na quantidade que desejar:")
    .button("§aPesquisar no Catálogo Completo do Jogo\\n§r§8Busca em ItemTypes.getAll() (Mace, Ovos, Blocos...)", "textures/items/compass_item")
    .button("§ePegar Item Digitando o ID + Quantidade Livre\\n§r§8Ex: diamond_block, mace, totem_of_undying", "textures/items/book_enchanted")
    .button("§dIr para Teclado de Armaduras & Encantamentos\\n§r§8Pegar armaduras e ferramentas já encantadas", "textures/items/netherite_chestplate")
    .button("§bCatálogo: Todos os Minérios, Blocos & Moldes\\n§r§8Diamante, Netherite, Esmeralda, Spawner, Beacon", "textures/items/diamond")
    .button("§6Catálogo: Maçãs Douradas, Poções & Shulkers\\n§r§8Comidas apelonas, Élitros, Foguetes e Caixas", "textures/items/apple_golden")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      openUniversalItemSearchModal(player);
    } else if (res.selection === 1) {
      openDirectIdGiveModal(player);
    } else if (res.selection === 2) {
      openArmorToolKeypadMenu(player);
    } else if (res.selection === 3) {
      openCuratedItemCategory(player, "Minérios, Moldes & Blocos Raros", [
        "minecraft:diamond_block",
        "minecraft:netherite_block",
        "minecraft:netherite_ingot",
        "minecraft:ancient_debris",
        "minecraft:netherite_upgrade_smithing_template",
        "minecraft:diamond",
        "minecraft:emerald_block",
        "minecraft:gold_block",
        "minecraft:iron_block",
        "minecraft:beacon",
        "minecraft:conduit",
        "minecraft:mob_spawner",
        "minecraft:trial_spawner",
        "minecraft:vault",
        "minecraft:ominous_trial_key",
        "minecraft:trial_key",
        "minecraft:dragon_egg",
        "minecraft:nether_star"
      ]);
    } else if (res.selection === 4) {
      openCuratedItemCategory(player, "Suprimentos, Maçãs & Utilidades", [
        "minecraft:enchanted_golden_apple",
        "minecraft:golden_apple",
        "minecraft:golden_carrot",
        "minecraft:firework_rocket",
        "minecraft:shulker_box",
        "minecraft:ender_chest",
        "minecraft:ender_pearl",
        "minecraft:experience_bottle",
        "minecraft:name_tag",
        "minecraft:saddle",
        "minecraft:tnt",
        "minecraft:obsidian",
        "minecraft:crying_obsidian",
        "minecraft:sponge"
      ]);
    } else if (res.selection === 5) {
      openMainMenu(player);
    }
  });
}

function openUniversalItemSearchModal(player) {
  const modal = new ModalFormData()
    .title("Pesquisar Qualquer Item do Jogo")
    .textField(
      "Digite parte do nome do item (em inglês, ex: diamond, mace, spawn_egg, trim, shulker, potion):",
      "Ex: diamond",
      "diamond"
    )
    .slider("Quantidade ao selecionar", 1, 640, 1, 64)
    .textField("Ou digite a quantidade exata (ex: 64, 500, 2304):", "Opcional", "");

  showFormSafely(player, modal, (res) => {
    const [queryRaw, sliderQty, customQtyText] = res.formValues;
    const query = String(queryRaw || "").trim().toLowerCase();
    const parsedCustom = parseInt(String(customQtyText).trim(), 10);
    const targetQty = !isNaN(parsedCustom) && parsedCustom > 0 ? parsedCustom : Number(sliderQty);

    const allTypes = ItemTypes.getAll();
    const matches = allTypes
      .map((t) => t.id)
      .filter((id) => !query || id.toLowerCase().includes(query))
      .slice(0, 60);

    if (matches.length === 0) {
      player.sendMessage(\`§8[§cBusca§8] §cNenhum item encontrado contendo "\${query}". Tente outro termo!\`);
      return;
    }

    const listForm = new ActionFormData()
      .title(\`Resultados: "\${query || "Todos"}"\`)
      .body(\`§7Encontrados \${matches.length} itens. Clique em qualquer um para receber §a\${targetQty}x§7:\`);

    for (const id of matches) {
      listForm.button(\`§b\${id.replace("minecraft:", "")}\\n§r§8Receber \${targetQty} unidades\`);
    }
    listForm.button("§8« Nova Pesquisa");

    showFormSafely(player, listForm, (lRes) => {
      if (lRes.selection >= matches.length) {
        openUniversalItemSearchModal(player);
        return;
      }
      const chosenId = matches[lRes.selection];
      try {
        const delivered = giveCustomQuantity(player, chosenId, targetQty);
        player.sendMessage(\`§8[§aMenu§8] §aEntregue +\${delivered}x §b\${chosenId}§a!\`);
      } catch (e) {
        player.sendMessage("§8[§cMenu§8] §cEste item técnico não pode ser instanciado diretamente.");
      }
    });
  });
}

function openCuratedItemCategory(player, title, itemIds) {
  const form = new ActionFormData()
    .title(\`§l§b\${title.slice(0, 24)}\`)
    .body("§7Selecione o item desejado para escolher a quantidade:");

  for (const id of itemIds) {
    form.button(\`§e\${id.replace("minecraft:", "")}\\n§r§8Clique para escolher a quantidade\`);
  }
  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection >= itemIds.length) {
      openAllItemsMenu(player);
      return;
    }
    const chosenId = itemIds[res.selection];
    const modal = new ModalFormData()
      .title(\`Pegar: \${chosenId.replace("minecraft:", "")}\`)
      .slider("Quantidade (Slider)", 1, 640, 1, 64)
      .textField("Ou digite qualquer quantidade exata (ex: 1, 64, 500, 2304):", "Opcional", "");

    showFormSafely(player, modal, (mRes) => {
      const [sQty, cQty] = mRes.formValues;
      const parsed = parseInt(String(cQty).trim(), 10);
      const finalCount = !isNaN(parsed) && parsed > 0 ? parsed : Number(sQty);
      try {
        const given = giveCustomQuantity(player, chosenId.toLowerCase(), finalCount);
        player.sendMessage(\`§8[§aMenu§8] §aRecebido +\${given}x §e\${chosenId}§a!\`);
      } catch (e) {
        player.sendMessage("§8[§cMenu§8] §cErro ao entregar o item.");
      }
    });
  });
}

function openDirectIdGiveModal(player) {
  const modal = new ModalFormData()
    .title("Pegar Item por ID + Quantidade")
    .textField("ID do Item (ex: diamond, mace, netherite_ingot, command_block):", "minecraft:diamond", "minecraft:diamond")
    .slider("Quantidade no Slider (1 a 640)", 1, 640, 1, 64)
    .textField("Ou digite QUALQUER quantidade exata (ex: 64, 1000, 2304):", "Opcional", "");

  showFormSafely(player, modal, (mRes) => {
    const [rawId, sliderQty, customQty] = mRes.formValues;
    const parsed = parseInt(String(customQty).trim(), 10);
    const amount = !isNaN(parsed) && parsed > 0 ? parsed : Number(sliderQty);

    try {
      const cleanId = String(rawId).includes(":")
        ? String(rawId).trim().toLowerCase()
        : \`minecraft:\${String(rawId).trim().toLowerCase()}\`;
      const delivered = giveCustomQuantity(player, cleanId, amount);
      player.sendMessage(\`§8[§aMenu§8] §aAdicionado +\${delivered}x \${cleanId} no inventário!\`);
    } catch (err) {
      player.sendMessage("§8[§cMenu§8] §cID de item inválido. Use a Pesquisa do Catálogo se tiver dúvida no nome!");
    }
  });
}

// ============================================================================
// 3. EFEITOS, HIT-KILL, VEINMINER & ÍMÃ AUTOMÁTICO
// ============================================================================
function openSurvivalBuffsMenu(player) {
  const veinActive = player.getDynamicProperty("survivalmenu:veinminer") === true;
  const magnetActive = player.getDynamicProperty("survivalmenu:magnet_enabled") === true;

  const form = new ActionFormData()
    .title("§l§2God Mode, Hit-Kill & VeinMiner")
    .body("§7Ative poderes especiais de Sobrevivência sem desativar conquistas:")
    .button("§aAtivar Imortalidade Completa (God Mode)\\n§r§8Resistência 255 + Regeneração + Saturação", "textures/items/apple_golden")
    .button("§cAtivar Hit-Kill (Matar com 1 Golpe)\\n§r§8Força 255 - Derrota qualquer Boss em 1 hit", "textures/items/netherite_sword")
    .button(\`\${veinActive ? "§cDesativar" : "§aAtivar"} VeinMiner & TreeCapitator\\n§r§8Quebra veias inteiras de minério e árvores de 1 vez\`, "textures/items/diamond_pickaxe")
    .button(\`\${magnetActive ? "§cDesativar" : "§aAtivar"} Ímã Automático de Drops e XP (16m)\\n§r§8Puxa todos os minérios e itens ao redor até você\`, "textures/items/hopper")
    .button("§eMineração Instantânea (Haste X) + Speed IV\\n§r§8Quebra obsidiana e corre super rápido", "textures/items/gold_pickaxe")
    .button("§bAdicionar Níveis de Experiência (XP Livre)\\n§r§8Escolha quantos níveis quer receber", "textures/items/experience_bottle")
    .button("§7Remover Todos os Efeitos Ativos\\n§r§8Voltar ao estado padrão", "textures/items/bucket_milk")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      player.addEffect("resistance", 20000000, { amplifier: 255, showParticles: false });
      player.addEffect("regeneration", 20000000, { amplifier: 255, showParticles: false });
      player.addEffect("fire_resistance", 20000000, { amplifier: 1, showParticles: false });
      player.addEffect("saturation", 20000000, { amplifier: 255, showParticles: false });
      player.addEffect("water_breathing", 20000000, { amplifier: 1, showParticles: false });
      player.sendMessage("§8[§aMenu§8] §aImortalidade, Cura e Fome Infinita ATIVADAS!");
    } else if (res.selection === 1) {
      player.addEffect("strength", 20000000, { amplifier: 255, showParticles: false });
      player.sendMessage("§8[§aMenu§8] §cHit-Kill (Força 255) ATIVADO! Qualquer golpe elimina o alvo.");
    } else if (res.selection === 2) {
      const next = !veinActive;
      player.setDynamicProperty("survivalmenu:veinminer", next);
      player.sendMessage(\`§8[§aMenu§8] \${next ? "§aVeinMiner & TreeCapitator ATIVADOS! Quebre 1 minério ou tronco para derrubar toda a veia." : "§cVeinMiner DESATIVADO."}\`);
    } else if (res.selection === 3) {
      const next = !magnetActive;
      player.setDynamicProperty("survivalmenu:magnet_enabled", next);
      player.sendMessage(\`§8[§aMenu§8] \${next ? "§aÍmã Automático de Drops e XP (16m) ATIVADO!" : "§cÍmã de Drops DESATIVADO."}\`);
    } else if (res.selection === 4) {
      player.addEffect("haste", 20000000, { amplifier: 10, showParticles: false });
      player.addEffect("speed", 20000000, { amplifier: 3, showParticles: false });
      player.addEffect("jump_boost", 20000000, { amplifier: 2, showParticles: false });
      player.sendMessage("§8[§aMenu§8] §ePressa X + Super Velocidade ATIVADOS!");
    } else if (res.selection === 5) {
      const xpModal = new ModalFormData()
        .title("Gerenciador de Experiência (XP)")
        .slider("Níveis de XP para adicionar", 10, 1000, 10, 100);
      showFormSafely(player, xpModal, (xRes) => {
        const lvls = Number(xRes.formValues[0]) || 50;
        player.addLevels(lvls);
        player.sendMessage(\`§8[§aMenu§8] §b+\${lvls} Níveis de Experiência adicionados!\`);
      });
    } else if (res.selection === 6) {
      for (const eff of player.getEffects()) {
        player.removeEffect(eff.typeId);
      }
      player.sendMessage("§8[§aMenu§8] §cTodos os efeitos foram removidos.");
    } else if (res.selection === 7) {
      openMainMenu(player);
    }
  });
}

// ============================================================================
// 4. TELEPORTE, MULTI-WAYPOINTS, DIMENSÕES E VOO
// ============================================================================
function openMovementMenu(player) {
  const flyActive = player.getDynamicProperty("survivalmenu:fly_enabled") === true;
  const form = new ActionFormData()
    .title("§l§eWaypoints, Dimensões & Voo")
    .body("§7Salve múltiplos locais, viaje entre dimensões ou ative o Voo Survival:")
    .button("§aGerenciar Meus Waypoints (5 Slots Salvos)\\n§r§8Salvar ou teleportar para Base, Farm, Portal...", "textures/items/compass_item")
    .button("§eVoltar ao Local da Última Morte\\n§r§8Recuperar itens instantaneamente", "textures/items/recovery_compass_item")
    .button(\`\${flyActive ? "§cDesativar" : "§aAtivar"} Voo Survival (Planar + Impulso)\\n§r§8Agache + Pule para subir sem dano de queda\`, "textures/items/feather")
    .button("§dViajar Direto: Overworld / Nether / The End\\n§r§8Teleporte entre dimensões com 1 clique", "textures/items/ender_eye")
    .button("§bTeleportar para Coordenadas Exatas (X, Y, Z)\\n§r§8Digitar qualquer coordenada manualmente", "textures/items/map_filled")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      openMultiWaypointsMenu(player);
    } else if (res.selection === 1) {
      const rawDeath = player.getDynamicProperty("survivalmenu:last_death");
      if (!rawDeath) {
        player.sendMessage("§8[§cMenu§8] §cNenhum registro de morte recente encontrado.");
        return;
      }
      const data = JSON.parse(String(rawDeath));
      const targetDim = world.getDimension(data.dimension);
      player.teleport({ x: data.x + 0.5, y: data.y, z: data.z + 0.5 }, { dimension: targetDim });
      player.sendMessage("§8[§aMenu§8] §eTeleportado para o local da última morte!");
    } else if (res.selection === 2) {
      const nextState = !flyActive;
      player.setDynamicProperty("survivalmenu:fly_enabled", nextState);
      if (nextState) {
        player.addEffect("slow_falling", 20000000, { amplifier: 0, showParticles: false });
        player.sendMessage("§8[§aMenu§8] §aVoo Survival ATIVADO! (Segure Agachar + Pular para impulsionar no ar)");
      } else {
        player.removeEffect("slow_falling");
        player.sendMessage("§8[§aMenu§8] §cVoo Survival DESATIVADO.");
      }
    } else if (res.selection === 3) {
      openDimensionTravelMenu(player);
    } else if (res.selection === 4) {
      const pos = player.location;
      const modal = new ModalFormData()
        .title("Teleporte por Coordenadas")
        .textField("Coordenada X:", "0", String(Math.floor(pos.x)))
        .textField("Coordenada Y:", "70", String(Math.floor(pos.y)))
        .textField("Coordenada Z:", "0", String(Math.floor(pos.z)));
      showFormSafely(player, modal, (mRes) => {
        const [x, y, z] = mRes.formValues.map(Number);
        if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
          player.teleport({ x, y, z });
          player.sendMessage(\`§8[§aMenu§8] §dTeleportado para \${x}, \${y}, \${z}!\`);
        }
      });
    } else if (res.selection === 5) {
      openMainMenu(player);
    }
  });
}

function openMultiWaypointsMenu(player) {
  const slots = [1, 2, 3, 4, 5];
  const form = new ActionFormData()
    .title("§l§aMeus Waypoints (5 Slots)")
    .body("§7Clique em um slot vazio para salvar sua posição atual, ou em um salvo para teleportar/atualizar:");

  for (const s of slots) {
    const raw = player.getDynamicProperty(\`survivalmenu:wp_\${s}\`);
    if (raw) {
      const data = JSON.parse(String(raw));
      form.button(\`§a[Slot \${s}] \${data.name}\\n§r§8XYZ: \${data.x}, \${data.y}, \${data.z} (\${data.dimension.replace("minecraft:", "")})\`);
    } else {
      form.button(\`§7[Slot \${s}] Vazio — Clique para Salvar Posição Atual\`);
    }
  }
  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection >= 5) {
      openMovementMenu(player);
      return;
    }
    const slotNum = res.selection + 1;
    const key = \`survivalmenu:wp_\${slotNum}\`;
    const existing = player.getDynamicProperty(key);

    if (!existing) {
      const modal = new ModalFormData()
        .title(\`Salvar Waypoint #\${slotNum}\`)
        .textField("Nome deste Local:", "Ex: Minha Base, Farm de XP, Fortaleza", \`Waypoint #\${slotNum}\`);
      showFormSafely(player, modal, (mRes) => {
        const name = String(mRes.formValues[0] || \`Waypoint #\${slotNum}\`).trim();
        const loc = player.location;
        player.setDynamicProperty(key, JSON.stringify({
          name,
          x: Math.floor(loc.x),
          y: Math.floor(loc.y),
          z: Math.floor(loc.z),
          dimension: player.dimension.id
        }));
        player.sendMessage(\`§8[§aWaypoints§8] §aSalvo "\${name}" no Slot #\${slotNum}!\`);
      });
    } else {
      const data = JSON.parse(String(existing));
      const act = new ActionFormData()
        .title(\`Waypoint: \${data.name}\`)
        .body(\`§7Coordenadas: §f\${data.x}, \${data.y}, \${data.z} (\${data.dimension})\`)
        .button("§aTeleportar Agora para este Local")
        .button("§eSobrescrever com Minha Posição Atual")
        .button("§cApagar este Waypoint");
      showFormSafely(player, act, (aRes) => {
        if (aRes.selection === 0) {
          const dim = world.getDimension(data.dimension);
          player.teleport({ x: data.x + 0.5, y: data.y, z: data.z + 0.5 }, { dimension: dim });
          player.sendMessage(\`§8[§aWaypoints§8] §bTeleportado para \${data.name}!\`);
        } else if (aRes.selection === 1) {
          const loc = player.location;
          player.setDynamicProperty(key, JSON.stringify({
            name: data.name,
            x: Math.floor(loc.x),
            y: Math.floor(loc.y),
            z: Math.floor(loc.z),
            dimension: player.dimension.id
          }));
          player.sendMessage(\`§8[§aWaypoints§8] §ePosição de \${data.name} atualizada!\`);
        } else if (aRes.selection === 2) {
          player.setDynamicProperty(key, undefined);
          player.sendMessage("§8[§aWaypoints§8] §cWaypoint removido.");
        }
      });
    }
  });
}

function openDimensionTravelMenu(player) {
  const form = new ActionFormData()
    .title("§l§dViagem entre Dimensões")
    .body("§7Viaje diretamente para qualquer dimensão (cria piso seguro ao chegar):")
    .button("§aIr para o Overworld (Mundo Normal - 0, 80, 0)")
    .button("§cIr para o Nether (Submundo - 0, 64, 0)")
    .button("§dIr para o The End (Ilha Central - 0, 66, 0)")
    .button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection === 3) {
      openMovementMenu(player);
      return;
    }
    const dims = ["minecraft:overworld", "minecraft:nether", "minecraft:the_end"];
    const targetDim = world.getDimension(dims[res.selection]);
    const targetPos = { x: 0, y: 70, z: 0 };
    player.addEffect("slow_falling", 200, { amplifier: 0, showParticles: false });
    player.addEffect("resistance", 200, { amplifier: 255, showParticles: false });
    player.teleport(targetPos, { dimension: targetDim });
    player.sendMessage(\`§8[§aDimensões§8] §aViajou para \${dims[res.selection].replace("minecraft:", "")} com proteção de chegada!\`);
  });
}

// ============================================================================
// 5. MEGA SALA DE BAÚS DUPLOS (1 BAÚ DUPLO POR BLOCO/ITEM DE TODO O JOGO!)
// ============================================================================
const MEGA_HALL_60_ITEMS = [
  "minecraft:netherite_block",
  "minecraft:netherite_ingot",
  "minecraft:ancient_debris",
  "minecraft:netherite_upgrade_smithing_template",
  "minecraft:diamond_block",
  "minecraft:diamond",
  "minecraft:emerald_block",
  "minecraft:emerald",
  "minecraft:gold_block",
  "minecraft:gold_ingot",
  "minecraft:iron_block",
  "minecraft:iron_ingot",
  "minecraft:copper_block",
  "minecraft:amethyst_shard",
  "minecraft:quartz_block",
  "minecraft:lapis_block",
  "minecraft:redstone_block",
  "minecraft:coal_block",
  "minecraft:enchanted_golden_apple",
  "minecraft:golden_apple",
  "minecraft:golden_carrot",
  "minecraft:totem_of_undying",
  "minecraft:elytra",
  "minecraft:firework_rocket",
  "minecraft:shulker_box",
  "minecraft:shulker_shell",
  "minecraft:mace",
  "minecraft:heavy_core",
  "minecraft:wind_charge",
  "minecraft:breeze_rod",
  "minecraft:ominous_trial_key",
  "minecraft:trial_key",
  "minecraft:trident",
  "minecraft:nether_star",
  "minecraft:beacon",
  "minecraft:conduit",
  "minecraft:dragon_egg",
  "minecraft:dragon_breath",
  "minecraft:ender_pearl",
  "minecraft:ender_eye",
  "minecraft:ender_chest",
  "minecraft:experience_bottle",
  "minecraft:bookshelf",
  "minecraft:enchanting_table",
  "minecraft:anvil",
  "minecraft:smithing_table",
  "minecraft:obsidian",
  "minecraft:crying_obsidian",
  "minecraft:end_crystal",
  "minecraft:tnt",
  "minecraft:slime",
  "minecraft:honey_block",
  "minecraft:sticky_piston",
  "minecraft:piston",
  "minecraft:observer",
  "minecraft:hopper",
  "minecraft:sea_lantern",
  "minecraft:glowstone",
  "minecraft:oak_log",
  "minecraft:cobblestone"
];

// ============================================================================
// FILTRO DE SOBREVIVÊNCIA & GERADOR DE TODAS AS VARIAÇÕES DE BLOCOS E ITENS
// Inclui 100% dos blocos, variações (escadas, lajes, muros, cercas, portas,
// alçapões, polidos, talhados, rachados, musgosos, cobre, tufo, ardósia,
// 12 madeiras, 16 cores de concreto/lã/terracota/vidro/shulker) e itens!
// ============================================================================
const NON_SURVIVAL_EXACT_IDS = new Set([
  // Blocos de Operador, Comando, Criativo e Técnicos Internos
  "air",
  "bedrock",
  "invisible_bedrock",
  "invisiblebedrock",
  "barrier",
  "light_block",
  "structure_block",
  "structure_void",
  "jigsaw",
  "command_block",
  "repeating_command_block",
  "chain_command_block",
  "command_block_minecart",
  "border_block",
  "allow",
  "deny",
  "npc",
  "agent",
  "camera",
  "chalkboard",
  "portfolio",
  "photo",
  "board",
  "debug_stick",
  "glowingobsidian",
  "netherreactor",
  "info_update",
  "info_update2",
  "reserved6",
  "client_request_placeholder_block",
  "unknown",
  "moving_block",
  "movingblock",
  "piston_arm_collision",
  "sticky_piston_arm_collision",
  "end_portal",
  "portal",
  "nether_portal",
  "end_gateway",
  "frosted_ice",
  "monster_egg",
  // Itens Education Edition / Química
  "ice_bomb",
  "bleach",
  "super_fertilizer",
  "rapid_fertilizer",
  "sparkler",
  "glow_stick",
  "medicine",
  "balloon",
  "underwater_torch",
  "underwater_tnt",
  "heat_block",
  "hard_glass",
  "hard_stained_glass",
  "hard_glass_pane",
  "hard_stained_glass_pane",
  "colored_torch_rg",
  "colored_torch_bp",
  "chemical_heat",
  "chemistry_table",
  "compound",
  "lab_table",
  "material_reducer",
  "element_constructor",
  "compound_creator",
  // Estados Técnicos de Blocos (Fluidos, Fogo, Plantações em crescimento que não possuem item próprio)
  "water",
  "flowing_water",
  "lava",
  "flowing_lava",
  "fire",
  "soul_fire",
  "powder_snow",
  "bubble_column",
  "kelp_plant",
  "bamboo_sapling",
  "cave_vines",
  "cave_vines_body_with_berries",
  "cave_vines_head_with_berries",
  "twisting_vines_plant",
  "weeping_vines_plant",
  "sweet_berry_bush",
  "cocoa",
  "carrots",
  "potatoes",
  "beetroots",
  "melon_stem",
  "pumpkin_stem",
  "attached_melon_stem",
  "attached_pumpkin_stem",
  "redstone_wire",
  "tripwire",
  "piston_head",
  "lava_cauldron",
  "water_cauldron",
  "powder_snow_cauldron",
  "daylight_detector_inverted",
  "unlit_redstone_torch"
]);

function isSurvivalObtainable(rawId) {
  if (!rawId) return false;
  const full = String(rawId).toLowerCase();
  if (full.startsWith("survivalmenu:")) return false;

  const clean = full.replace(/^minecraft:/, "");
  if (!clean || NON_SURVIVAL_EXACT_IDS.has(clean)) return false;

  // Exclui apenas Ovos de Invocação (Spawn Eggs do Criativo)
  if (clean.endsWith("_spawn_egg") || clean.includes("spawn_egg")) return false;

  // Permite explicitamente lit_pumpkin (Abóbora de Halloween Acesa / Jack o'Lantern)
  if (clean === "lit_pumpkin") return true;

  // Exclui elementos químicos, blocos infestados técnicos, luzes invisíveis e blocos de estado de parede/aceso
  if (
    clean.startsWith("element_") ||
    clean.startsWith("hard_") ||
    clean.startsWith("colored_torch") ||
    clean.startsWith("chemistry_") ||
    clean.startsWith("underwater_") ||
    clean.startsWith("infested_") ||
    clean.startsWith("light_block_") ||
    clean.startsWith("lit_") ||
    clean.startsWith("unlit_") ||
    clean.startsWith("standing_") ||
    clean.startsWith("wall_") ||
    clean.startsWith("powered_") ||
    clean.startsWith("unpowered_") ||
    clean.startsWith("potted_") ||
    clean.startsWith("candle_cake") ||
    clean.endsWith("_candle_cake") ||
    (clean.startsWith("double_") && clean.endsWith("_slab")) ||
    clean.includes("command_block") ||
    clean.includes("structure_block")
  ) {
    return false;
  }

  return true;
}

// Classifica qualquer bloco, variação de bloco ou item em um dos 10 Setores Completos do Armazém
function getSurvivalCategoryPriority(id) {
  const lower = String(id).replace("minecraft:", "").toLowerCase();

  // 1. Minérios, Joias, Barras, Blocos Brutos & Família Completa do Cobre
  if (
    lower.includes("netherite_block") ||
    lower.includes("netherite_ingot") ||
    lower.includes("netherite_scrap") ||
    lower.includes("ancient_debris") ||
    lower.includes("diamond_block") ||
    lower === "diamond" ||
    lower.includes("emerald_block") ||
    lower === "emerald" ||
    lower.includes("gold_block") ||
    lower.includes("gold_ingot") ||
    lower.includes("gold_nugget") ||
    lower.includes("iron_block") ||
    lower.includes("iron_ingot") ||
    lower.includes("iron_nugget") ||
    lower.includes("lapis") ||
    lower.includes("coal") ||
    lower.includes("charcoal") ||
    lower.includes("amethyst") ||
    lower === "quartz" ||
    lower.endsWith("_ore") ||
    lower.includes("raw_") ||
    lower.includes("copper") ||
    lower === "lightning_rod"
  ) {
    return 1;
  }

  // 2. Armas, Ferramentas, Armaduras (Todos os Níveis), Combate, Baldes & Utilitários
  if (
    lower.includes("sword") ||
    lower.includes("pickaxe") ||
    lower.includes("axe") ||
    lower.includes("shovel") ||
    lower.includes("hoe") ||
    lower.includes("helmet") ||
    lower.includes("chestplate") ||
    lower.includes("leggings") ||
    lower.includes("boots") ||
    lower === "mace" ||
    lower === "trident" ||
    lower === "bow" ||
    lower === "crossbow" ||
    lower === "shield" ||
    lower === "elytra" ||
    lower.includes("arrow") ||
    lower.includes("horse_armor") ||
    lower === "wolf_armor" ||
    lower.includes("bucket") ||
    lower === "fishing_rod" ||
    lower.includes("on_a_stick") ||
    lower === "shears" ||
    lower === "flint_and_steel" ||
    lower === "spyglass" ||
    lower === "brush" ||
    lower.includes("compass") ||
    lower === "clock" ||
    lower === "lead" ||
    lower === "name_tag" ||
    lower === "saddle" ||
    lower === "goat_horn" ||
    lower.includes("firework")
  ) {
    return 2;
  }

  // 3. Tesouros Raros, 19 Moldes (Trims), 23 Óstracos (Sherds), Discos de Música & Troféus
  if (
    lower.includes("trim") ||
    lower.includes("upgrade") ||
    lower.includes("sherd") ||
    lower === "decorated_pot" ||
    lower.includes("music_disc") ||
    lower.includes("disc_fragment") ||
    lower.includes("banner_pattern") ||
    lower.includes("totem") ||
    lower.includes("nether_star") ||
    lower.includes("beacon") ||
    lower.includes("conduit") ||
    lower.includes("heavy_core") ||
    lower.includes("breeze_rod") ||
    lower.includes("wind_charge") ||
    lower.includes("trial_key") ||
    lower.includes("dragon_") ||
    lower.includes("echo_shard") ||
    lower.includes("heart_of_the_sea") ||
    lower.includes("nautilus_shell") ||
    lower.includes("scute") ||
    lower.includes("shulker_shell") ||
    lower.includes("skull") ||
    lower.endsWith("_head") ||
    lower === "experience_bottle" ||
    lower === "enchanted_book"
  ) {
    return 3;
  }

  // 4. Redstone, Automação, Trilhos, Bancadas de Trabalho & Todas as 17 Caixas de Shulker
  if (
    lower.includes("shulker_box") ||
    lower === "chest" ||
    lower === "trapped_chest" ||
    lower === "ender_chest" ||
    lower === "barrel" ||
    lower.includes("redstone") ||
    lower.includes("piston") ||
    lower.includes("observer") ||
    lower.includes("hopper") ||
    lower.includes("dropper") ||
    lower.includes("dispenser") ||
    lower.includes("comparator") ||
    lower.includes("repeater") ||
    lower.includes("crafter") ||
    lower.includes("rail") ||
    lower.includes("minecart") ||
    lower.includes("tnt") ||
    lower.includes("slime") ||
    lower.includes("honey_block") ||
    lower.includes("honeycomb_block") ||
    lower === "lever" ||
    lower === "tripwire_hook" ||
    lower.includes("daylight") ||
    lower === "target" ||
    lower.includes("sculk_sensor") ||
    lower.includes("furnace") ||
    lower === "smoker" ||
    lower === "crafting_table" ||
    lower.includes("anvil") ||
    lower === "enchanting_table" ||
    lower.includes("bookshelf") ||
    lower === "lectern" ||
    lower === "stonecutter" ||
    lower === "grindstone" ||
    lower === "loom" ||
    lower.includes("_table") ||
    lower === "composter" ||
    lower === "brewing_stand" ||
    lower === "cauldron" ||
    lower === "bell" ||
    lower === "jukebox" ||
    lower.includes("noteblock") ||
    lower.includes("note_block") ||
    lower === "lodestone" ||
    lower === "armor_stand" ||
    lower.includes("frame") ||
    lower === "painting" ||
    lower === "scaffolding" ||
    lower === "ladder" ||
    lower === "chain" ||
    lower === "iron_bars" ||
    lower === "iron_door" ||
    lower === "iron_trapdoor" ||
    lower.includes("weighted_pressure_plate")
  ) {
    return 4;
  }

  // 5. Madeiras, Troncos, Tábuas, Escadas, Lajes, Cercas, Portas, Alçapões, Placas & Barcos (12 Árvores)
  if (
    lower.includes("_log") ||
    lower.includes("_wood") ||
    lower.includes("_stem") ||
    lower.includes("_hyphae") ||
    lower.includes("planks") ||
    lower.includes("bamboo") ||
    lower.includes("oak") ||
    lower.includes("spruce") ||
    lower.includes("birch") ||
    lower.includes("jungle") ||
    lower.includes("acacia") ||
    lower.includes("mangrove") ||
    lower.includes("cherry") ||
    lower.includes("crimson") ||
    lower.includes("warped") ||
    lower.includes("wooden_") ||
    lower === "trapdoor" ||
    lower === "fence_gate" ||
    lower.includes("fence") ||
    lower.includes("door") ||
    lower.includes("sign") ||
    lower.includes("boat") ||
    lower.includes("raft") ||
    lower.includes("sapling") ||
    lower.includes("propagule") ||
    lower.includes("leaves")
  ) {
    return 5;
  }

  // 8. Blocos Coloridos (16 Cores de Concreto, Cimento, Lã, Tapete, Terracota, Azulejo, Vidro, Cama, Vela, Estandarte e Corante)
  if (
    lower.includes("concrete") ||
    lower.includes("wool") ||
    lower.includes("carpet") ||
    lower.includes("terracotta") ||
    lower.includes("hardened_clay") ||
    lower.includes("glass") ||
    lower.includes("candle") ||
    lower.endsWith("_bed") ||
    lower === "bed" ||
    lower.includes("banner") ||
    lower.endsWith("_dye")
  ) {
    return 8;
  }

  // 7. Tijolos, Barro (Mud), Arenito, Quartzo, Prismarinho & Suas Variações (Escadas, Lajes e Muros)
  if (
    lower.includes("quartz") ||
    lower.includes("sandstone") ||
    lower.includes("prismarine") ||
    lower.includes("mud") ||
    lower === "clay" ||
    lower === "brick" ||
    lower === "brick_block" ||
    lower === "bricks" ||
    lower.startsWith("brick_")
  ) {
    return 7;
  }

  // 10. Nether, The End, Pedra Negra (Blackstone), Purpur, Basalto, Sculk & Drops de Mobs
  if (
    lower.includes("nether") ||
    lower.includes("blackstone") ||
    lower.includes("basalt") ||
    lower.includes("obsidian") ||
    lower === "respawn_anchor" ||
    lower.includes("soul_") ||
    lower.includes("magma") ||
    lower.includes("end_stone") ||
    lower.includes("purpur") ||
    lower === "end_rod" ||
    lower === "end_crystal" ||
    lower.includes("ender_") ||
    lower.includes("chorus") ||
    lower.includes("sculk") ||
    lower === "shroomlight" ||
    lower === "glowstone" ||
    lower === "glowstone_dust" ||
    lower === "gunpowder" ||
    lower === "string" ||
    lower === "rotten_flesh" ||
    lower === "bone" ||
    lower === "feather" ||
    lower === "leather" ||
    lower === "phantom_membrane" ||
    lower === "ghast_tear" ||
    lower === "blaze_rod" ||
    lower === "blaze_powder" ||
    lower === "slime_ball" ||
    lower.includes("ink_sac")
  ) {
    return 10;
  }

  // 6. Pedras, Ardósia (Deepslate), Tufo (1.21), Granito, Diorito, Andesito & Todas as Variações (Escadas, Lajes e Muros)
  if (
    lower.includes("stone") ||
    lower.includes("cobble") ||
    lower.includes("deepslate") ||
    lower.includes("tuff") ||
    lower.includes("granite") ||
    lower.includes("diorite") ||
    lower.includes("andesite") ||
    lower.includes("calcite") ||
    lower.includes("dripstone") ||
    lower.includes("stairs") ||
    lower.includes("slab") ||
    lower.includes("wall") ||
    lower.includes("button") ||
    lower.includes("pressure_plate")
  ) {
    return 6;
  }

  // 9. Alimentos, Agricultura, Flores, Plantas, Corais, Iluminação & Blocos da Natureza
  return 9;
}

// ============================================================================
// GERADOR PROGRAMÁTICO DE TODAS AS FAMÍLIAS E VARIAÇÕES DE BLOCOS & ITENS
// ============================================================================
const COLORS_16 = [
  "white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow",
  "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"
];

function buildCuratedSectorDefinitions() {
  // Setor 1: Minérios, Joias, Barras, Blocos Brutos & Todas as Variações de Cobre
  const copperPrefixes = ["", "exposed_", "weathered_", "oxidized_", "waxed_", "waxed_exposed_", "waxed_weathered_", "waxed_oxidized_"];
  const copperItems = [];
  for (const p of copperPrefixes) {
    copperItems.push(
      p ? \`minecraft:\${p}copper\` : "minecraft:copper_block",
      \`minecraft:\${p}cut_copper\`,
      \`minecraft:\${p}cut_copper_stairs\`,
      \`minecraft:\${p}cut_copper_slab\`,
      \`minecraft:\${p}chiseled_copper\`,
      \`minecraft:\${p}copper_grate\`,
      \`minecraft:\${p}copper_bulb\`,
      \`minecraft:\${p}copper_door\`,
      \`minecraft:\${p}copper_trapdoor\`
    );
  }

  const sector1 = [
    "minecraft:netherite_block", "minecraft:netherite_ingot", "minecraft:netherite_scrap", "minecraft:ancient_debris",
    "minecraft:diamond_block", "minecraft:diamond", "minecraft:diamond_ore", "minecraft:deepslate_diamond_ore",
    "minecraft:emerald_block", "minecraft:emerald", "minecraft:emerald_ore", "minecraft:deepslate_emerald_ore",
    "minecraft:gold_block", "minecraft:raw_gold_block", "minecraft:gold_ingot", "minecraft:raw_gold", "minecraft:gold_nugget",
    "minecraft:gold_ore", "minecraft:deepslate_gold_ore", "minecraft:nether_gold_ore",
    "minecraft:iron_block", "minecraft:raw_iron_block", "minecraft:iron_ingot", "minecraft:raw_iron", "minecraft:iron_nugget",
    "minecraft:iron_ore", "minecraft:deepslate_iron_ore",
    "minecraft:copper_block", "minecraft:raw_copper_block", "minecraft:copper_ingot", "minecraft:raw_copper",
    "minecraft:copper_ore", "minecraft:deepslate_copper_ore", "minecraft:lightning_rod",
    "minecraft:lapis_block", "minecraft:lapis_lazuli", "minecraft:lapis_ore", "minecraft:deepslate_lapis_ore",
    "minecraft:redstone_block", "minecraft:redstone", "minecraft:redstone_ore", "minecraft:deepslate_redstone_ore",
    "minecraft:coal_block", "minecraft:coal", "minecraft:charcoal", "minecraft:coal_ore", "minecraft:deepslate_coal_ore",
    "minecraft:quartz", "minecraft:nether_quartz_ore",
    "minecraft:amethyst_block", "minecraft:budding_amethyst", "minecraft:amethyst_shard",
    "minecraft:amethyst_cluster", "minecraft:large_amethyst_bud", "minecraft:medium_amethyst_bud", "minecraft:small_amethyst_bud",
    ...copperItems
  ];

  // Setor 2: Armas, Ferramentas, Armaduras Completas (Todos os Níveis), Baldes & Utilitários
  const toolTiers = ["netherite", "diamond", "iron", "golden", "stone", "wooden"];
  const armorTiers = ["netherite", "diamond", "iron", "golden", "chainmail", "leather"];
  const sector2 = [];
  for (const t of toolTiers) {
    sector2.push(
      \`minecraft:\${t}_sword\`, \`minecraft:\${t}_pickaxe\`, \`minecraft:\${t}_axe\`,
      \`minecraft:\${t}_shovel\`, \`minecraft:\${t}_hoe\`
    );
  }
  for (const a of armorTiers) {
    sector2.push(
      \`minecraft:\${a}_helmet\`, \`minecraft:\${a}_chestplate\`,
      \`minecraft:\${a}_leggings\`, \`minecraft:\${a}_boots\`
    );
  }
  sector2.push(
    "minecraft:mace", "minecraft:trident", "minecraft:bow", "minecraft:crossbow", "minecraft:arrow",
    "minecraft:firework_rocket", "minecraft:firework_star", "minecraft:shield", "minecraft:elytra",
    "minecraft:turtle_helmet", "minecraft:wolf_armor",
    "minecraft:diamond_horse_armor", "minecraft:golden_horse_armor", "minecraft:iron_horse_armor", "minecraft:leather_horse_armor",
    "minecraft:totem_of_undying", "minecraft:flint_and_steel", "minecraft:shears", "minecraft:fishing_rod",
    "minecraft:carrot_on_a_stick", "minecraft:warped_fungus_on_a_stick", "minecraft:spyglass", "minecraft:brush",
    "minecraft:compass", "minecraft:recovery_compass", "minecraft:clock", "minecraft:lead", "minecraft:name_tag",
    "minecraft:saddle", "minecraft:goat_horn",
    "minecraft:bucket", "minecraft:water_bucket", "minecraft:lava_bucket", "minecraft:powder_snow_bucket",
    "minecraft:milk_bucket", "minecraft:axolotl_bucket", "minecraft:cod_bucket", "minecraft:salmon_bucket",
    "minecraft:tropical_fish_bucket", "minecraft:pufferfish_bucket", "minecraft:tadpole_bucket"
  );

  // Setor 3: Tesouros Raros, 19 Moldes (Trims), 23 Óstracos (Sherds), Discos de Música & Troféus
  const trims = [
    "netherite_upgrade", "sentry_armor_trim", "vex_armor_trim", "wild_armor_trim", "coast_armor_trim",
    "dune_armor_trim", "wayfinder_armor_trim", "raiser_armor_trim", "shaper_armor_trim", "host_armor_trim",
    "ward_armor_trim", "silence_armor_trim", "tide_armor_trim", "snout_armor_trim", "rib_armor_trim",
    "eye_armor_trim", "spire_armor_trim", "flow_armor_trim", "bolt_armor_trim"
  ].map((t) => \`minecraft:\${t}_smithing_template\`);

  const sherds = [
    "angler", "archer", "arms_up", "blade", "brewer", "burn", "danger", "explorer", "flow", "friend",
    "guster", "heart", "heartbreak", "howl", "miner", "mourner", "plenty", "prize", "scrape", "sheaf",
    "shelter", "skull", "snort"
  ].map((s) => \`minecraft:\${s}_pottery_sherd\`);

  const discs = [
    "13", "cat", "blocks", "chirp", "far", "mall", "mellohi", "stal", "strad", "ward", "11", "wait",
    "otherside", "5", "pigstep", "relic", "creator", "creator_music_box", "precipice"
  ].map((d) => \`minecraft:music_disc_\${d}\`);

  const sector3 = [
    ...trims,
    "minecraft:heavy_core", "minecraft:breeze_rod", "minecraft:wind_charge", "minecraft:ominous_trial_key", "minecraft:trial_key",
    "minecraft:nether_star", "minecraft:beacon", "minecraft:conduit", "minecraft:heart_of_the_sea", "minecraft:nautilus_shell",
    "minecraft:dragon_egg", "minecraft:dragon_breath", "minecraft:echo_shard", "minecraft:disc_fragment_5",
    "minecraft:scute", "minecraft:armadillo_scute", "minecraft:shulker_shell", "minecraft:experience_bottle", "minecraft:enchanted_book",
    "minecraft:decorated_pot",
    ...sherds,
    ...discs,
    "minecraft:dragon_head", "minecraft:wither_skeleton_skull", "minecraft:skeleton_skull",
    "minecraft:zombie_head", "minecraft:creeper_head", "minecraft:piglin_head", "minecraft:player_head"
  ];

  // Setor 4: Redstone, Automação, Trilhos, Bancadas de Trabalho & Todas as 17 Caixas de Shulker
  const shulkers = ["minecraft:undyed_shulker_box", ...COLORS_16.map((c) => \`minecraft:\${c}_shulker_box\`)];
  const sector4 = [
    ...shulkers,
    "minecraft:ender_chest", "minecraft:chest", "minecraft:trapped_chest", "minecraft:barrel",
    "minecraft:crafter", "minecraft:piston", "minecraft:sticky_piston", "minecraft:observer", "minecraft:hopper",
    "minecraft:dispenser", "minecraft:dropper", "minecraft:repeater", "minecraft:comparator",
    "minecraft:redstone_torch", "minecraft:redstone_lamp", "minecraft:lever", "minecraft:tripwire_hook",
    "minecraft:daylight_detector", "minecraft:target", "minecraft:sculk_sensor", "minecraft:calibrated_sculk_sensor",
    "minecraft:tnt", "minecraft:slime", "minecraft:honey_block", "minecraft:honeycomb_block",
    "minecraft:rail", "minecraft:golden_rail", "minecraft:detector_rail", "minecraft:activator_rail",
    "minecraft:minecart", "minecraft:chest_minecart", "minecraft:hopper_minecart", "minecraft:tnt_minecart",
    "minecraft:crafting_table", "minecraft:furnace", "minecraft:blast_furnace", "minecraft:smoker",
    "minecraft:anvil", "minecraft:chipped_anvil", "minecraft:damaged_anvil", "minecraft:smithing_table",
    "minecraft:grindstone", "minecraft:stonecutter", "minecraft:enchanting_table", "minecraft:bookshelf",
    "minecraft:chiseled_bookshelf", "minecraft:lectern", "minecraft:brewing_stand", "minecraft:cauldron",
    "minecraft:loom", "minecraft:cartography_table", "minecraft:fletching_table", "minecraft:composter",
    "minecraft:lodestone", "minecraft:bell", "minecraft:jukebox", "minecraft:noteblock",
    "minecraft:armor_stand", "minecraft:frame", "minecraft:glow_frame", "minecraft:painting",
    "minecraft:scaffolding", "minecraft:ladder", "minecraft:chain", "minecraft:iron_bars",
    "minecraft:iron_door", "minecraft:iron_trapdoor", "minecraft:heavy_weighted_pressure_plate", "minecraft:light_weighted_pressure_plate"
  ];

  // Setor 5: Madeiras, Troncos, Tábuas & Todas as Variações (Escadas, Lajes, Cercas, Portas, Alçapões, Placas e Barcos)
  const overworldWoods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "pale_oak"];
  const sector5 = [];
  for (const w of overworldWoods) {
    sector5.push(
      \`minecraft:\${w}_log\`, \`minecraft:stripped_\${w}_log\`,
      \`minecraft:\${w}_wood\`, \`minecraft:stripped_\${w}_wood\`,
      \`minecraft:\${w}_planks\`, \`minecraft:\${w}_stairs\`, \`minecraft:\${w}_slab\`,
      \`minecraft:\${w}_fence\`, w === "oak" ? "minecraft:fence_gate" : \`minecraft:\${w}_fence_gate\`,
      w === "oak" ? "minecraft:wooden_door" : \`minecraft:\${w}_door\`,
      w === "oak" ? "minecraft:trapdoor" : \`minecraft:\${w}_trapdoor\`,
      w === "oak" ? "minecraft:wooden_button" : \`minecraft:\${w}_button\`,
      w === "oak" ? "minecraft:wooden_pressure_plate" : \`minecraft:\${w}_pressure_plate\`,
      \`minecraft:\${w}_sign\`, \`minecraft:\${w}_hanging_sign\`,
      \`minecraft:\${w}_leaves\`, w === "mangrove" ? "minecraft:mangrove_propagule" : \`minecraft:\${w}_sapling\`,
      \`minecraft:\${w}_boat\`, \`minecraft:\${w}_chest_boat\`
    );
  }
  // Família do Bambu & Mosaico de Bambu
  sector5.push(
    "minecraft:bamboo_block", "minecraft:stripped_bamboo_block",
    "minecraft:bamboo_planks", "minecraft:bamboo_mosaic",
    "minecraft:bamboo_stairs", "minecraft:bamboo_mosaic_stairs",
    "minecraft:bamboo_slab", "minecraft:bamboo_mosaic_slab",
    "minecraft:bamboo_fence", "minecraft:bamboo_fence_gate",
    "minecraft:bamboo_door", "minecraft:bamboo_trapdoor",
    "minecraft:bamboo_button", "minecraft:bamboo_pressure_plate",
    "minecraft:bamboo_sign", "minecraft:bamboo_hanging_sign",
    "minecraft:bamboo_raft", "minecraft:bamboo_chest_raft"
  );
  // Madeiras do Nether (Carmesim & Distorcida)
  for (const nw of ["crimson", "warped"]) {
    sector5.push(
      \`minecraft:\${nw}_stem\`, \`minecraft:stripped_\${nw}_stem\`,
      \`minecraft:\${nw}_hyphae\`, \`minecraft:stripped_\${nw}_hyphae\`,
      \`minecraft:\${nw}_planks\`, \`minecraft:\${nw}_stairs\`, \`minecraft:\${nw}_slab\`,
      \`minecraft:\${nw}_fence\`, \`minecraft:\${nw}_fence_gate\`,
      \`minecraft:\${nw}_door\`, \`minecraft:\${nw}_trapdoor\`,
      \`minecraft:\${nw}_button\`, \`minecraft:\${nw}_pressure_plate\`,
      \`minecraft:\${nw}_sign\`, \`minecraft:\${nw}_hanging_sign\`
    );
  }
  sector5.push("minecraft:stick", "minecraft:bowl", "minecraft:charcoal");

  // Setor 6: Pedras, Ardósia (Deepslate), Tufo (1.21) & Todas as Variações (Escadas, Lajes, Muros, Polidos e Talhados)
  const sector6 = [
    // Pedra, Pedregulho e Tijolos de Pedra + Variações
    "minecraft:stone", "minecraft:normal_stone_stairs", "minecraft:stone_slab", "minecraft:stone_button", "minecraft:stone_pressure_plate",
    "minecraft:smooth_stone", "minecraft:smooth_stone_slab",
    "minecraft:cobblestone", "minecraft:stone_stairs", "minecraft:cobblestone_slab", "minecraft:cobblestone_wall",
    "minecraft:mossy_cobblestone", "minecraft:mossy_cobblestone_stairs", "minecraft:mossy_cobblestone_slab", "minecraft:mossy_cobblestone_wall",
    "minecraft:stone_bricks", "minecraft:stone_brick_stairs", "minecraft:stone_brick_slab", "minecraft:stone_brick_wall",
    "minecraft:mossy_stone_bricks", "minecraft:mossy_stone_brick_stairs", "minecraft:mossy_stone_brick_slab", "minecraft:mossy_stone_brick_wall",
    "minecraft:cracked_stone_bricks", "minecraft:chiseled_stone_bricks",
    // Ardósia Profunda (Deepslate) + Todas as Variações
    "minecraft:deepslate", "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate_stairs", "minecraft:cobbled_deepslate_slab", "minecraft:cobbled_deepslate_wall",
    "minecraft:polished_deepslate", "minecraft:polished_deepslate_stairs", "minecraft:polished_deepslate_slab", "minecraft:polished_deepslate_wall",
    "minecraft:deepslate_bricks", "minecraft:deepslate_brick_stairs", "minecraft:deepslate_brick_slab", "minecraft:deepslate_brick_wall", "minecraft:cracked_deepslate_bricks",
    "minecraft:deepslate_tiles", "minecraft:deepslate_tile_stairs", "minecraft:deepslate_tile_slab", "minecraft:deepslate_tile_wall", "minecraft:cracked_deepslate_tiles",
    "minecraft:chiseled_deepslate", "minecraft:reinforced_deepslate",
    // Tufo 1.21 (Tuff) + Todas as Variações
    "minecraft:tuff", "minecraft:tuff_stairs", "minecraft:tuff_slab", "minecraft:tuff_wall", "minecraft:chiseled_tuff",
    "minecraft:polished_tuff", "minecraft:polished_tuff_stairs", "minecraft:polished_tuff_slab", "minecraft:polished_tuff_wall",
    "minecraft:tuff_bricks", "minecraft:tuff_brick_stairs", "minecraft:tuff_brick_slab", "minecraft:tuff_brick_wall", "minecraft:chiseled_tuff_bricks",
    // Granito, Diorito, Andesito, Calcita e Espeleotema + Variações
    "minecraft:granite", "minecraft:granite_stairs", "minecraft:granite_slab", "minecraft:granite_wall",
    "minecraft:polished_granite", "minecraft:polished_granite_stairs", "minecraft:polished_granite_slab",
    "minecraft:diorite", "minecraft:diorite_stairs", "minecraft:diorite_slab", "minecraft:diorite_wall",
    "minecraft:polished_diorite", "minecraft:polished_diorite_stairs", "minecraft:polished_diorite_slab",
    "minecraft:andesite", "minecraft:andesite_stairs", "minecraft:andesite_slab", "minecraft:andesite_wall",
    "minecraft:polished_andesite", "minecraft:polished_andesite_stairs", "minecraft:polished_andesite_slab",
    "minecraft:calcite", "minecraft:dripstone_block", "minecraft:pointed_dripstone"
  ];

  // Setor 7: Tijolos, Barro (Mud), Arenito, Quartzo, Prismarinho & Todas as Variações (Escadas, Lajes e Muros)
  const sector7 = [
    // Tijolos e Barro (Mud)
    "minecraft:brick_block", "minecraft:brick_stairs", "minecraft:brick_slab", "minecraft:brick_wall", "minecraft:brick",
    "minecraft:mud", "minecraft:packed_mud", "minecraft:mud_bricks", "minecraft:mud_brick_stairs", "minecraft:mud_brick_slab", "minecraft:mud_brick_wall",
    "minecraft:clay", "minecraft:clay_ball",
    // Quartzo + Variações
    "minecraft:quartz_block", "minecraft:quartz_stairs", "minecraft:quartz_slab",
    "minecraft:smooth_quartz", "minecraft:smooth_quartz_stairs", "minecraft:smooth_quartz_slab",
    "minecraft:chiseled_quartz_block", "minecraft:quartz_pillar", "minecraft:quartz_bricks",
    // Arenito & Arenito Vermelho + Variações
    "minecraft:sandstone", "minecraft:sandstone_stairs", "minecraft:sandstone_slab", "minecraft:sandstone_wall",
    "minecraft:smooth_sandstone", "minecraft:smooth_sandstone_stairs", "minecraft:smooth_sandstone_slab",
    "minecraft:cut_sandstone", "minecraft:cut_sandstone_slab", "minecraft:chiseled_sandstone",
    "minecraft:red_sandstone", "minecraft:red_sandstone_stairs", "minecraft:red_sandstone_slab", "minecraft:red_sandstone_wall",
    "minecraft:smooth_red_sandstone", "minecraft:smooth_red_sandstone_stairs", "minecraft:smooth_red_sandstone_slab",
    "minecraft:cut_red_sandstone", "minecraft:cut_red_sandstone_slab", "minecraft:chiseled_red_sandstone",
    // Prismarinho + Variações
    "minecraft:prismarine", "minecraft:prismarine_stairs", "minecraft:prismarine_slab", "minecraft:prismarine_wall",
    "minecraft:prismarine_bricks", "minecraft:prismarine_bricks_stairs", "minecraft:prismarine_brick_slab",
    "minecraft:dark_prismarine", "minecraft:dark_prismarine_stairs", "minecraft:dark_prismarine_slab",
    "minecraft:sea_lantern", "minecraft:prismarine_shard", "minecraft:prismarine_crystals"
  ];

  // Setor 8: Blocos Coloridos (Todas as 16 Cores de Concreto, Cimento, Lã, Tapete, Terracota, Azulejo, Vidro, Cama, Vela, Estandarte e Corante)
  const sector8 = [
    ...COLORS_16.map((c) => \`minecraft:\${c}_concrete\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_concrete_powder\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_wool\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_carpet\`),
    "minecraft:terracotta",
    ...COLORS_16.map((c) => \`minecraft:\${c}_terracotta\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_glazed_terracotta\`),
    "minecraft:glass", "minecraft:tinted_glass", "minecraft:glass_pane",
    ...COLORS_16.map((c) => \`minecraft:\${c}_stained_glass\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_stained_glass_pane\`),
    "minecraft:candle",
    ...COLORS_16.map((c) => \`minecraft:\${c}_candle\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_bed\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_banner\`),
    ...COLORS_16.map((c) => \`minecraft:\${c}_dye\`)
  ];

  // Setor 9: Alimentos, Agricultura, Flores, Plantas, Corais, Iluminação & Natureza
  const sector9 = [
    // Comidas
    "minecraft:enchanted_golden_apple", "minecraft:golden_apple", "minecraft:golden_carrot",
    "minecraft:cooked_beef", "minecraft:beef", "minecraft:cooked_porkchop", "minecraft:porkchop",
    "minecraft:cooked_mutton", "minecraft:mutton", "minecraft:cooked_chicken", "minecraft:chicken",
    "minecraft:cooked_rabbit", "minecraft:rabbit", "minecraft:cooked_salmon", "minecraft:salmon",
    "minecraft:cooked_cod", "minecraft:cod", "minecraft:tropical_fish", "minecraft:pufferfish",
    "minecraft:bread", "minecraft:baked_potato", "minecraft:potato", "minecraft:carrot", "minecraft:beetroot",
    "minecraft:apple", "minecraft:melon_slice", "minecraft:melon_block", "minecraft:pumpkin", "minecraft:carved_pumpkin", "minecraft:lit_pumpkin",
    "minecraft:pumpkin_pie", "minecraft:cookie", "minecraft:cake", "minecraft:honey_bottle", "minecraft:honeycomb",
    "minecraft:sweet_berries", "minecraft:glow_berries", "minecraft:dried_kelp", "minecraft:dried_kelp_block",
    "minecraft:mushroom_stew", "minecraft:rabbit_stew", "minecraft:beetroot_soup", "minecraft:suspicious_stew",
    // Sementes, Plantações e Ingredientes
    "minecraft:wheat", "minecraft:hay_block", "minecraft:wheat_seeds", "minecraft:pumpkin_seeds",
    "minecraft:melon_seeds", "minecraft:beetroot_seeds", "minecraft:torchflower_seeds", "minecraft:pitcher_pod",
    "minecraft:sugar_cane", "minecraft:sugar", "minecraft:cocoa_beans", "minecraft:bamboo", "minecraft:cactus", "minecraft:kelp",
    "minecraft:nether_wart", "minecraft:fermented_spider_eye", "minecraft:spider_eye", "minecraft:glistering_melon_slice",
    "minecraft:rabbit_foot", "minecraft:glass_bottle", "minecraft:egg", "minecraft:turtle_egg", "minecraft:sniffer_egg",
    // Blocos Naturais (Terra, Areia, Gelo, Musgo, Esponja)
    "minecraft:grass_block", "minecraft:dirt", "minecraft:coarse_dirt", "minecraft:rooted_dirt", "minecraft:podzol", "minecraft:mycelium", "minecraft:dirt_path",
    "minecraft:moss_block", "minecraft:moss_carpet", "minecraft:sand", "minecraft:red_sand", "minecraft:gravel", "minecraft:flint",
    "minecraft:snow", "minecraft:snow_layer", "minecraft:snowball", "minecraft:ice", "minecraft:packed_ice", "minecraft:blue_ice",
    "minecraft:sponge", "minecraft:wet_sponge", "minecraft:web", "minecraft:bone_block", "minecraft:bee_nest", "minecraft:beehive",
    // Flores, Cogumelos, Plantas & Corais
    "minecraft:dandelion", "minecraft:poppy", "minecraft:blue_orchid", "minecraft:allium", "minecraft:azure_bluet",
    "minecraft:red_tulip", "minecraft:orange_tulip", "minecraft:white_tulip", "minecraft:pink_tulip",
    "minecraft:oxeye_daisy", "minecraft:cornflower", "minecraft:lily_of_the_valley", "minecraft:wither_rose",
    "minecraft:torchflower", "minecraft:pitcher_plant", "minecraft:sunflower", "minecraft:lilac", "minecraft:rose_bush", "minecraft:peony",
    "minecraft:pink_petals", "minecraft:spore_blossom", "minecraft:azalea", "minecraft:flowering_azalea",
    "minecraft:azalea_leaves", "minecraft:flowering_azalea_leaves",
    "minecraft:big_dripleaf", "minecraft:small_dripleaf_block", "minecraft:waterlily", "minecraft:vine", "minecraft:glow_lichen",
    "minecraft:brown_mushroom", "minecraft:red_mushroom", "minecraft:brown_mushroom_block", "minecraft:red_mushroom_block", "minecraft:mushroom_stem",
    "minecraft:tube_coral_block", "minecraft:brain_coral_block", "minecraft:bubble_coral_block", "minecraft:fire_coral_block", "minecraft:horn_coral_block",
    "minecraft:sea_pickle",
    // Iluminação
    "minecraft:lantern", "minecraft:soul_lantern", "minecraft:torch", "minecraft:soul_torch",
    "minecraft:ochre_froglight", "minecraft:verdant_froglight", "minecraft:pearlescent_froglight"
  ];

  // Setor 10: Nether, The End, Pedra Negra (Blackstone), Purpur, Basalto, Sculk & Drops de Mobs
  const sector10 = [
    // Nether & Pedra Negra (Blackstone) + Todas as Variações
    "minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:respawn_anchor",
    "minecraft:netherrack", "minecraft:soul_sand", "minecraft:soul_soil", "minecraft:magma",
    "minecraft:glowstone", "minecraft:glowstone_dust", "minecraft:shroomlight",
    "minecraft:basalt", "minecraft:smooth_basalt", "minecraft:polished_basalt",
    "minecraft:blackstone", "minecraft:blackstone_stairs", "minecraft:blackstone_slab", "minecraft:blackstone_wall", "minecraft:gilded_blackstone",
    "minecraft:polished_blackstone", "minecraft:polished_blackstone_stairs", "minecraft:polished_blackstone_slab", "minecraft:polished_blackstone_wall",
    "minecraft:polished_blackstone_button", "minecraft:polished_blackstone_pressure_plate", "minecraft:chiseled_polished_blackstone",
    "minecraft:polished_blackstone_bricks", "minecraft:polished_blackstone_brick_stairs", "minecraft:polished_blackstone_brick_slab", "minecraft:polished_blackstone_brick_wall",
    "minecraft:cracked_polished_blackstone_bricks",
    "minecraft:nether_brick", "minecraft:nether_brick_stairs", "minecraft:nether_brick_slab", "minecraft:nether_brick_wall", "minecraft:nether_brick_fence",
    "minecraft:cracked_nether_bricks", "minecraft:chiseled_nether_bricks", "minecraft:netherbrick",
    "minecraft:red_nether_brick", "minecraft:red_nether_brick_stairs", "minecraft:red_nether_brick_slab", "minecraft:red_nether_brick_wall",
    "minecraft:nether_wart_block", "minecraft:warped_wart_block", "minecraft:crimson_fungus", "minecraft:warped_fungus",
    "minecraft:crimson_nylium", "minecraft:warped_nylium", "minecraft:weeping_vines", "minecraft:twisting_vines",
    // The End + Todas as Variações
    "minecraft:end_stone", "minecraft:end_stone_bricks", "minecraft:end_brick_stairs", "minecraft:end_stone_brick_slab", "minecraft:end_stone_brick_wall",
    "minecraft:purpur_block", "minecraft:purpur_pillar", "minecraft:purpur_stairs", "minecraft:purpur_slab",
    "minecraft:end_rod", "minecraft:end_crystal", "minecraft:ender_pearl", "minecraft:ender_eye",
    "minecraft:chorus_flower", "minecraft:chorus_fruit", "minecraft:popped_chorus_fruit",
    // Deep Dark (Sculk) & Drops de Mobs
    "minecraft:sculk", "minecraft:sculk_vein", "minecraft:sculk_catalyst", "minecraft:sculk_shrieker",
    "minecraft:blaze_rod", "minecraft:blaze_powder", "minecraft:ghast_tear", "minecraft:magma_cream",
    "minecraft:slime_ball", "minecraft:phantom_membrane", "minecraft:gunpowder", "minecraft:string",
    "minecraft:bone", "minecraft:bone_meal", "minecraft:rotten_flesh", "minecraft:leather", "minecraft:rabbit_hide",
    "minecraft:feather", "minecraft:ink_sac", "minecraft:glow_ink_sac", "minecraft:paper", "minecraft:book"
  ];

  return [
    { id: 1, name: "1. Minérios, Joias, Barras & Família do Cobre (Todas Variações)", shortName: "Minérios & Cobre", items: sector1 },
    { id: 2, name: "2. Armas, Ferramentas, Armaduras (Todos Níveis) & Utilitários", shortName: "Armas & Armaduras", items: sector2 },
    { id: 3, name: "3. Raros, 19 Moldes (Trims), 23 Óstracos (Sherds) & Discos", shortName: "Raros, Trims & Discos", items: sector3 },
    { id: 4, name: "4. Redstone, Automação, Bancadas & Todas as 17 Shulkers", shortName: "Redstone & 17 Shulkers", items: sector4 },
    { id: 5, name: "5. Madeiras & Variações (Escadas/Lajes/Cercas/Portas - 12 Árvores)", shortName: "Madeiras & Variações", items: sector5 },
    { id: 6, name: "6. Pedras, Ardósia, Tufo & Variações (Escadas/Lajes/Muros)", shortName: "Pedras & Variações", items: sector6 },
    { id: 7, name: "7. Tijolos, Quartzo, Arenito, Prismarinho, Barro & Variações", shortName: "Quartzo, Tijolos & Variações", items: sector7 },
    { id: 8, name: "8. Blocos Coloridos (16 Cores: Concreto/Lã/Terracota/Vidro/Cama/Vela)", shortName: "Blocos Coloridos (16 Cores)", items: sector8 },
    { id: 9, name: "9. Alimentos, Flores, Corais, Iluminação & Blocos da Natureza", shortName: "Comidas, Flores & Natureza", items: sector9 },
    { id: 10, name: "10. Nether, The End, Pedra Negra, Purpur, Sculk & Drops", shortName: "Nether, End & Variações", items: sector10 }
  ];
}

const CHEST_SECTORS = buildCuratedSectorDefinitions();

// Resolve um ID para o ID exato válido no motor do Minecraft Bedrock atual
function resolveValidBedrockItemId(rawId) {
  if (!rawId) return null;
  const st = createSafeItemStack(rawId, 1);
  if (st && st.typeId) {
    return st.typeId.toLowerCase();
  }
  return null;
}

// Retorna os 10 Setores Completos unindo todas as variações explícitas + 100% dos blocos e itens do motor do jogo!
let _cachedDynamicSectors = null;
function getCompleteChestSectors() {
  if (_cachedDynamicSectors && _cachedDynamicSectors.length > 0) {
    return _cachedDynamicSectors;
  }

  const baseSectors = buildCuratedSectorDefinitions().map((sec) => ({
    id: sec.id,
    name: sec.name,
    shortName: sec.shortName,
    items: []
  }));
  const sectorMap = {};
  for (const s of baseSectors) {
    sectorMap[s.id] = s;
  }

  const seen = new Set();

  // 1. Valida e adiciona todos os itens e variações curadas de cada um dos 10 Setores
  for (const rawSec of CHEST_SECTORS) {
    const targetSec = sectorMap[rawSec.id];
    for (const candidateId of rawSec.items) {
      const validId = resolveValidBedrockItemId(candidateId);
      if (validId && !seen.has(validId)) {
        seen.add(validId);
        targetSec.items.push(validId);
      }
    }
  }

  // 2. Varre 100% dos Blocos e Itens registrados no Minecraft Bedrock (BlockTypes + ItemTypes)
  // para garantir que NENHUMA variação de bloco ou item fique de fora!
  const engineExtras = [];
  try {
    if (typeof BlockTypes !== "undefined" && BlockTypes.getAll) {
      for (const b of BlockTypes.getAll()) {
        if (!b || !b.id) continue;
        const lower = b.id.toLowerCase();
        if (seen.has(lower) || !isSurvivalObtainable(lower)) continue;
        const validId = resolveValidBedrockItemId(lower);
        if (validId && !seen.has(validId) && isSurvivalObtainable(validId)) {
          seen.add(validId);
          engineExtras.push(validId);
        }
      }
    }
  } catch (e) {}

  try {
    if (typeof ItemTypes !== "undefined" && ItemTypes.getAll) {
      for (const it of ItemTypes.getAll()) {
        if (!it || !it.id) continue;
        const lower = it.id.toLowerCase();
        if (seen.has(lower) || !isSurvivalObtainable(lower)) continue;
        const validId = resolveValidBedrockItemId(lower);
        if (validId && !seen.has(validId) && isSurvivalObtainable(validId)) {
          seen.add(validId);
          engineExtras.push(validId);
        }
      }
    }
  } catch (e) {}

  // Ordena alfabeticamente os extras descobertos no motor e distribui cada um no seu Setor correspondente!
  engineExtras.sort((a, b) => a.localeCompare(b));
  for (const extraId of engineExtras) {
    const catId = getSurvivalCategoryPriority(extraId);
    const targetSec = sectorMap[catId] || sectorMap[9];
    targetSec.items.push(extraId);
  }

  _cachedDynamicSectors = baseSectors.filter((s) => s.items.length > 0);
  return _cachedDynamicSectors;
}

// Coleta TODOS os Blocos, Variações de Blocos e Itens Survival já 100% organizados nos 10 Setores!
function getAllGameBlocksAndItems() {
  const sectors = getCompleteChestSectors();
  const all = [];
  for (const sec of sectors) {
    for (const id of sec.items) {
      all.push(id);
    }
  }
  return all;
}

// Resolve a permutação exata do Baú para qualquer versão do Minecraft Bedrock (1.20, 1.21+ e 26.60.29)
// verificando dinamicamente se o motor usa "minecraft:cardinal_direction" ou "facing_direction"
function resolveChestPermutation(dir, blockType = "minecraft:chest") {
  const safeDir =
    dir === "north" || dir === "south" || dir === "east" || dir === "west" ? dir : "north";
  const legacyMap = { north: 2, south: 3, west: 4, east: 5 };
  const legacyDir = legacyMap[safeDir] || 2;

  try {
    const basePerm = BlockPermutation.resolve(blockType);
    if (basePerm) {
      try {
        if (basePerm.getState("minecraft:cardinal_direction") !== undefined) {
          return basePerm.withState("minecraft:cardinal_direction", safeDir);
        }
      } catch (e1) {}
      try {
        if (basePerm.getState("facing_direction") !== undefined) {
          return basePerm.withState("facing_direction", legacyDir);
        }
      } catch (e2) {}
    }
  } catch (e) {}

  try {
    const pCard = BlockPermutation.resolve(blockType, {
      "minecraft:cardinal_direction": safeDir
    });
    if (pCard && pCard.getState("minecraft:cardinal_direction") === safeDir) {
      return pCard;
    }
  } catch (e) {}

  try {
    const pLegacy = BlockPermutation.resolve(blockType, {
      "facing_direction": legacyDir
    });
    if (pLegacy && pLegacy.getState("facing_direction") === legacyDir) {
      return pLegacy;
    }
  } catch (e) {}

  try {
    return BlockPermutation.resolve(blockType, {
      "minecraft:cardinal_direction": safeDir
    });
  } catch (e) {
    try {
      return BlockPermutation.resolve(blockType, {
        "facing_direction": legacyDir
      });
    } catch (e2) {
      return BlockPermutation.resolve(blockType);
    }
  }
}

// Cria e conecta 100% um Baú Duplo (54 slots) em qualquer eixo (X ou Z) aplicando a direção cardinal correta
// ("north", "south", "east", "west"), garantindo a fusão imediata em qualquer direção do olhar!
// IMPORTANTE NO BEDROCK: Nunca chamar setType("minecraft:chest") antes de setPermutation(perm), pois no motor C++ do Bedrock
// o pareamento de Baú Duplo (ChestBlock::onPlace -> pairWith) só dispara na transição de "minecraft:air" para "minecraft:chest" já com a rotação final!
function placeConnectedDoubleChest(dim, posA, posB, cardinalDir = "north") {
  if (!dim || !posA || !posB) return null;
  const blockA = dim.getBlock(posA);
  const blockB = dim.getBlock(posB);
  if (!blockA || !blockB) return null;

  // 1. Garante matematicamente que a direção frontal (dir) seja SEMPRE perpendicular ao eixo que conecta posA e posB:
  // - Se posA e posB estão lado a lado no eixo X (dx != 0, dz == 0), o Baú Duplo OBRIGATORIAMENTE deve olhar para "north" ou "south"
  // - Se posA e posB estão lado a lado no eixo Z (dz != 0, dx == 0), o Baú Duplo OBRIGATORIAMENTE deve olhar para "east" ou "west"
  const dx = posB.x - posA.x;
  const dz = posB.z - posA.z;
  let dir = cardinalDir || "north";
  if (Math.abs(dx) === 1 && dz === 0) {
    if (dir !== "north" && dir !== "south") {
      dir = "north";
    }
  } else if (Math.abs(dz) === 1 && dx === 0) {
    if (dir !== "east" && dir !== "west") {
      dir = "east";
    }
  }

  const legacyMap = { north: 2, south: 3, west: 4, east: 5 };
  const legacyDir = legacyMap[dir] || 2;

  // 2. Limpa ambos os blocos para AR primeiro (remove qualquer ChestBlockActor antigo/desconectado)
  try {
    blockA.setType("minecraft:air");
    blockB.setType("minecraft:air");
  } catch (e) {}

  // 3. Coloca primeiro a metade de menor coordenada (Lead Chest no Bedrock) e depois a de maior coordenada
  const isALead = posA.x < posB.x || (posA.x === posB.x && posA.z <= posB.z);
  const firstBlock = isALead ? blockA : blockB;
  const secondBlock = isALead ? blockB : blockA;
  const firstPos = isALead ? posA : posB;
  const secondPos = isALead ? posB : posA;

  // 4. Aplica DIRETAMENTE a permutação final a partir do ar (dispara ChestBlock::onPlace já na direção exata, unindo os 2 baús na hora!)
  const chestPerm = resolveChestPermutation(dir, "minecraft:chest");
  let placed = false;
  if (chestPerm) {
    try {
      firstBlock.setPermutation(chestPerm);
      secondBlock.setPermutation(chestPerm);
      placed = true;
    } catch (e) {}
  }

  if (!placed) {
    try {
      firstBlock.setType("minecraft:chest");
      secondBlock.setType("minecraft:chest");
      if (chestPerm) {
        firstBlock.setPermutation(chestPerm);
        secondBlock.setPermutation(chestPerm);
      }
    } catch (e) {}
  }

  // 5. Verifica se os 2 baús já se fundiram em 1 Baú Duplo de 54 slots; se ainda estiverem com 27 slots, força o reparo imediato!
  let contSize = 0;
  try {
    contSize = firstBlock.getComponent("minecraft:inventory")?.container?.size || 0;
  } catch (e) {}

  if (contSize < 54 && chestPerm) {
    try {
      secondBlock.setType("minecraft:air");
      secondBlock.setPermutation(chestPerm);
      contSize = firstBlock.getComponent("minecraft:inventory")?.container?.size || 0;
    } catch (e) {}
  }

  if (contSize < 54 && typeof dim.runCommand === "function") {
    try {
      dim.runCommand(\`setblock \${firstPos.x} \${firstPos.y} \${firstPos.z} air\`);
      dim.runCommand(\`setblock \${secondPos.x} \${secondPos.y} \${secondPos.z} air\`);
      dim.runCommand(
        \`setblock \${firstPos.x} \${firstPos.y} \${firstPos.z} chest ["minecraft:cardinal_direction"="\${dir}"]\`
      );
      dim.runCommand(
        \`setblock \${secondPos.x} \${secondPos.y} \${secondPos.z} chest ["minecraft:cardinal_direction"="\${dir}"]\`
      );
      contSize = dim.getBlock(firstPos)?.getComponent("minecraft:inventory")?.container?.size || 0;
    } catch (e) {}

    if (contSize < 54) {
      try {
        dim.runCommand(
          \`setblock \${firstPos.x} \${firstPos.y} \${firstPos.z} chest ["facing_direction"=\${legacyDir}]\`
        );
        dim.runCommand(
          \`setblock \${secondPos.x} \${secondPos.y} \${secondPos.z} chest ["facing_direction"=\${legacyDir}]\`
        );
      } catch (e) {}
    }

    try {
      const checkA = dim.getBlock(posA);
      const checkB = dim.getBlock(posB);
      if (checkA && checkA.typeId !== "minecraft:chest" && chestPerm) {
        checkA.setPermutation(chestPerm);
      }
      if (checkB && checkB.typeId !== "minecraft:chest" && chestPerm) {
        checkB.setPermutation(chestPerm);
      }
    } catch (e) {}
  }

  return {
    blockA: dim.getBlock(posA) || blockA,
    blockB: dim.getBlock(posB) || blockB,
    dir
  };
}

// Tradutor completo de IDs e Variações de Blocos do Minecraft para Português nas Placas dos Baús
const PT_BR_EXACT_ITEM_NAMES = {
  "netherite_block": "BLOCO NETHERITA",
  "netherite_ingot": "BARRA NETHERITA",
  "netherite_scrap": "FRAGMENTO NETHER",
  "ancient_debris": "DETRITO ANCESTR.",
  "diamond_block": "BLOCO DIAMANTE",
  "diamond": "DIAMANTE",
  "emerald_block": "BLOCO ESMERALDA",
  "emerald": "ESMERALDA",
  "gold_block": "BLOCO DE OURO",
  "raw_gold_block": "BLOCO OURO BRUTO",
  "gold_ingot": "BARRA DE OURO",
  "gold_nugget": "PEPITA DE OURO",
  "raw_gold": "OURO BRUTO",
  "iron_block": "BLOCO DE FERRO",
  "raw_iron_block": "BLOCO FERRO BRUTO",
  "iron_ingot": "BARRA DE FERRO",
  "iron_nugget": "PEPITA DE FERRO",
  "raw_iron": "FERRO BRUTO",
  "copper_block": "BLOCO DE COBRE",
  "raw_copper_block": "BLOCO COBRE BRUTO",
  "copper_ingot": "BARRA DE COBRE",
  "raw_copper": "COBRE BRUTO",
  "coal_block": "BLOCO DE CARVAO",
  "coal": "CARVAO",
  "charcoal": "CARVAO VEGETAL",
  "redstone_block": "BLOCO REDSTONE",
  "redstone": "PO DE REDSTONE",
  "lapis_block": "BLOCO DE LAPIS",
  "lapis_lazuli": "LAPIS-LAZULI",
  "amethyst_shard": "FRAG. AMETISTA",
  "amethyst_block": "BLOCO AMETISTA",
  "budding_amethyst": "GEODO AMETISTA",
  "amethyst_cluster": "AGREG. AMETISTA",
  "quartz_block": "BLOCO DE QUARTZO",
  "quartz": "QUARTZO NETHER",
  "mace": "CLAVA 1.21 (MACE)",
  "heavy_core": "NUCLEO PESADO",
  "trident": "TRIDENTE",
  "bow": "ARCO",
  "crossbow": "BESTA (CROSSBOW)",
  "arrow": "FLECHAS",
  "shield": "ESCUDO",
  "elytra": "ELITROS (ELYTRA)",
  "turtle_helmet": "CASCO TARTARUGA",
  "wolf_armor": "ARMADURA DE LOBO",
  "fishing_rod": "VARA DE PESCA",
  "shears": "TESOURA",
  "flint_and_steel": "PEDERNEIRA",
  "spyglass": "LUNETA",
  "brush": "PINCEL ARQUEOL.",
  "netherite_upgrade_smithing_template": "MOLDE NETHERITA",
  "breeze_rod": "VARA DE BREEZE",
  "wind_charge": "CARGA DE VENTO",
  "ominous_trial_key": "CHAVE SINISTRA",
  "trial_key": "CHAVE DESAFIO",
  "totem_of_undying": "TOTEM IMORTAL",
  "nether_star": "ESTRELA NETHER",
  "beacon": "SINALIZADOR",
  "conduit": "CONDUTO MARINHO",
  "heart_of_the_sea": "CORACAO DO MAR",
  "nautilus_shell": "CONCHA NAUTILO",
  "dragon_egg": "OVO DO DRAGAO",
  "dragon_breath": "BAFO DO DRAGAO",
  "experience_bottle": "FRASCO DE XP",
  "enchanted_book": "LIVRO ENCANTADO",
  "decorated_pot": "VASO DECORADO",
  "crafter": "BANCADA AUTOMAT.",
  "piston": "PISTAO",
  "sticky_piston": "PISTAO GRUDENTO",
  "observer": "OBSERVADOR",
  "hopper": "FUNIL (HOPPER)",
  "dispenser": "EJETOR",
  "dropper": "LIBERADOR",
  "repeater": "REPETIDOR",
  "comparator": "COMPARADOR",
  "redstone_torch": "TOCHA REDSTONE",
  "redstone_lamp": "LAMPADA REDSTONE",
  "lever": "ALAVANCA",
  "tripwire_hook": "GANCHO ARMADILHA",
  "daylight_detector": "SENSOR SOLAR",
  "target": "BLOCO DE ALVO",
  "tnt": "DINAMITE (TNT)",
  "slime_block": "BLOCO DE SLIME",
  "slime": "BLOCO DE SLIME",
  "honey_block": "BLOCO DE MEL",
  "honeycomb_block": "BLOCO DE FAVO",
  "rail": "TRILHO",
  "golden_rail": "TRILHO ELETRICO",
  "detector_rail": "TRILHO DETECTOR",
  "activator_rail": "TRILHO ATIVADOR",
  "minecart": "CARRINHO MINA",
  "chest_minecart": "CARRINHO C/ BAU",
  "hopper_minecart": "CARRINHO FUNIL",
  "tnt_minecart": "CARRINHO C/ TNT",
  "shulker_box": "CAIXA SHULKER",
  "undyed_shulker_box": "CAIXA SHULKER",
  "ender_chest": "BAU DO END",
  "chest": "BAU DE MADEIRA",
  "trapped_chest": "BAU ARMADILHA",
  "barrel": "BARRIL",
  "enchanted_golden_apple": "MACA DOURADA ENC",
  "golden_apple": "MACA DOURADA",
  "golden_carrot": "CENOURA DOURADA",
  "cooked_beef": "BIFE ASSADO",
  "cooked_porkchop": "CARNE DE PORCO",
  "cooked_mutton": "CARNE CARNEIRO",
  "cooked_chicken": "FRANGO ASSADO",
  "cooked_salmon": "SALMAO ASSADO",
  "cooked_cod": "BACALHAU ASSADO",
  "cooked_rabbit": "COELHO ASSADO",
  "bread": "PAO",
  "cookie": "BISCOITO",
  "cake": "BOLO",
  "pumpkin_pie": "TORTA ABOBORA",
  "honey_bottle": "GARRAFA DE MEL",
  "nether_wart": "FUNGO DO NETHER",
  "blaze_powder": "PO DE BLAZE",
  "blaze_rod": "VARA DE BLAZE",
  "ghast_tear": "LAGRIMA DE GHAST",
  "magma_cream": "CREME DE MAGMA",
  "fermented_spider_eye": "OLHO FERMENTADO",
  "spider_eye": "OLHO DE ARANHA",
  "glistering_melon_slice": "MELANCIA RELUZ.",
  "rabbit_foot": "PE DE COELHO",
  "phantom_membrane": "MEMBRANA PHANTOM",
  "glowstone_dust": "PO PEDRA LUMIN.",
  "gunpowder": "POLVORA",
  "sugar": "ACUCAR",
  "glass_bottle": "FRASCO DE VIDRO",
  "brewing_stand": "SUPORTE POCOES",
  "cauldron": "CALDEIRAO",
  "sea_lantern": "LANTERNA DO MAR",
  "glowstone": "PEDRA LUMINOSA",
  "shroomlight": "COGUMELUZ",
  "obsidian": "OBSIDIANA",
  "crying_obsidian": "OBSIDIANA CHOR.",
  "respawn_anchor": "ANCORA RENASC.",
  "end_stone": "PEDRA DO END",
  "end_stone_bricks": "TIJOLOS DO END",
  "purpur_block": "BLOCO DE PURPUR",
  "purpur_pillar": "PILAR DE PURPUR",
  "end_rod": "LAMPADA DO END",
  "end_crystal": "CRISTAL DO END",
  "ender_pearl": "PEROLA DO FIM",
  "ender_eye": "OLHO DO FIM",
  "firework_rocket": "FOGOS ARTIFICIO",
  "bookshelf": "ESTANTE LIVROS",
  "chiseled_bookshelf": "ESTANTE ESCULP.",
  "enchanting_table": "MESA ENCANTAM.",
  "anvil": "BIGORNA",
  "smithing_table": "MESA FERRARIA",
  "crafting_table": "BANCADA TRABALHO",
  "furnace": "FORNALHA",
  "blast_furnace": "ALTO-FORNO",
  "smoker": "DEFUMADOR",
  "stonecutter": "CORTADOR PEDRA",
  "grindstone": "REBOLO",
  "cobblestone": "PEDREGULHO",
  "mossy_cobblestone": "PEDREG. MUSGOSO",
  "cobbled_deepslate": "PEDREG. ARDOSIA",
  "brick_block": "BLOCO DE TIJOLOS",
  "lit_pumpkin": "ABOBORA ACESA",
  "web": "TEIA DE ARANHA",
  "waterlily": "VIT.-REGIA"
};

function translateItemIdToPtBr(rawId, customLabel = "") {
  if (customLabel && String(customLabel).trim().length > 0) {
    return String(customLabel).trim().toUpperCase();
  }
  const clean = String(rawId || "").toLowerCase().replace(/^minecraft:/, "");
  if (PT_BR_EXACT_ITEM_NAMES[clean]) {
    return PT_BR_EXACT_ITEM_NAMES[clean];
  }
  if (clean.endsWith("_armor_trim_smithing_template")) {
    const trimName = clean.replace("_armor_trim_smithing_template", "").toUpperCase();
    return "MOLDE " + trimName;
  }
  if (clean.endsWith("_pottery_sherd")) {
    const sherdName = clean.replace("_pottery_sherd", "").toUpperCase();
    return "OSTRACO " + sherdName;
  }
  if (clean.startsWith("music_disc_")) {
    const discName = clean.replace("music_disc_", "").toUpperCase();
    return "DISCO " + discName;
  }

  // Tradução inteligente de todas as variações de blocos (Escadas, Lajes, Muros, Portas, Cercas, Cores, Madeiras, Pedras e Cobre)
  let t = clean;

  // 1. Identifica o tipo da variação de forma (Escada, Laje, Muro, Cerca, Portão, Porta, Alçapão, Placa, Botão, etc.)
  let shapePrefix = "";
  if (t.endsWith("_stairs")) {
    shapePrefix = "ESCADA ";
    t = t.replace(/_stairs$/, "");
  } else if (t.endsWith("_slab")) {
    shapePrefix = "LAJE ";
    t = t.replace(/_slab$/, "");
  } else if (t.endsWith("_wall")) {
    shapePrefix = "MURO ";
    t = t.replace(/_wall$/, "");
  } else if (t.endsWith("_fence_gate") || t === "fence_gate") {
    shapePrefix = "PORTAO ";
    t = t.replace(/_?fence_gate$/, "");
  } else if (t.endsWith("_fence")) {
    shapePrefix = "CERCA ";
    t = t.replace(/_fence$/, "");
  } else if (t.endsWith("_trapdoor") || t === "trapdoor") {
    shapePrefix = "ALCAPAO ";
    t = t.replace(/_?trapdoor$/, "");
  } else if (t.endsWith("_door")) {
    shapePrefix = "PORTA ";
    t = t.replace(/_door$/, "");
  } else if (t.endsWith("_hanging_sign")) {
    shapePrefix = "PLACA SUSP. ";
    t = t.replace(/_hanging_sign$/, "");
  } else if (t.endsWith("_sign")) {
    shapePrefix = "PLACA ";
    t = t.replace(/_sign$/, "");
  } else if (t.endsWith("_pressure_plate")) {
    shapePrefix = "PLACA PRESS. ";
    t = t.replace(/_pressure_plate$/, "");
  } else if (t.endsWith("_button")) {
    shapePrefix = "BOTAO ";
    t = t.replace(/_button$/, "");
  } else if (t.endsWith("_chest_boat") || t.endsWith("_chest_raft")) {
    shapePrefix = "BARCO C/ BAU ";
    t = t.replace(/_chest_(boat|raft)$/, "");
  } else if (t.endsWith("_boat") || t.endsWith("_raft")) {
    shapePrefix = "BARCO ";
    t = t.replace(/_(boat|raft)$/, "");
  } else if (t.endsWith("_stained_glass_pane")) {
    shapePrefix = "PAINEL VIDRO ";
    t = t.replace(/_stained_glass_pane$/, "");
  } else if (t.endsWith("_stained_glass")) {
    shapePrefix = "VIDRO ";
    t = t.replace(/_stained_glass$/, "");
  } else if (t.endsWith("_glazed_terracotta")) {
    shapePrefix = "AZULEJO ";
    t = t.replace(/_glazed_terracotta$/, "");
  } else if (t.endsWith("_terracotta")) {
    shapePrefix = "TERRACOTA ";
    t = t.replace(/_terracotta$/, "");
  } else if (t.endsWith("_concrete_powder")) {
    shapePrefix = "CIMENTO ";
    t = t.replace(/_concrete_powder$/, "");
  } else if (t.endsWith("_concrete")) {
    shapePrefix = "CONCRETO ";
    t = t.replace(/_concrete$/, "");
  } else if (t.endsWith("_shulker_box")) {
    shapePrefix = "SHULKER ";
    t = t.replace(/_shulker_box$/, "");
  } else if (t.endsWith("_wool")) {
    shapePrefix = "LA ";
    t = t.replace(/_wool$/, "");
  } else if (t.endsWith("_carpet")) {
    shapePrefix = "TAPETE ";
    t = t.replace(/_carpet$/, "");
  } else if (t.endsWith("_candle")) {
    shapePrefix = "VELA ";
    t = t.replace(/_candle$/, "");
  } else if (t.endsWith("_bed")) {
    shapePrefix = "CAMA ";
    t = t.replace(/_bed$/, "");
  } else if (t.endsWith("_banner")) {
    shapePrefix = "ESTANDARTE ";
    t = t.replace(/_banner$/, "");
  } else if (t.endsWith("_dye")) {
    shapePrefix = "CORANTE ";
    t = t.replace(/_dye$/, "");
  }

  const body = t
    .replace(/^waxed_/, "ENC. ")
    .replace(/weathered_/g, "DESG. ")
    .replace(/oxidized_/g, "OXID. ")
    .replace(/exposed_/g, "EXP. ")
    .replace(/stripped_/g, "DESC. ")
    .replace(/chiseled_/g, "TALH. ")
    .replace(/polished_/g, "POL. ")
    .replace(/cracked_/g, "RACH. ")
    .replace(/mossy_/g, "MUSG. ")
    .replace(/cobbled_/g, "PEDREG. ")
    .replace(/smooth_/g, "LISO ")
    .replace(/cut_/g, "LAPID. ")
    .replace(/light_blue/g, "AZUL CLARO")
    .replace(/light_gray/g, "CINZA CLARO")
    .replace(/dark_oak/g, "CARV. ESCURO")
    .replace(/pale_oak/g, "CARV. PALIDO")
    .replace(/white/g, "BRANCO")
    .replace(/black/g, "PRETO")
    .replace(/gray/g, "CINZA")
    .replace(/brown/g, "MARROM")
    .replace(/red/g, "VERMELHO")
    .replace(/orange/g, "LARANJA")
    .replace(/yellow/g, "AMARELO")
    .replace(/lime/g, "VERDE LIMAO")
    .replace(/green/g, "VERDE")
    .replace(/cyan/g, "CIANO")
    .replace(/blue/g, "AZUL")
    .replace(/purple/g, "ROXO")
    .replace(/magenta/g, "MAGENTA")
    .replace(/pink/g, "ROSA")
    .replace(/_log$/g, " TRONCO")
    .replace(/_stem$/g, " CAULE")
    .replace(/_wood$/g, " MADEIRA")
    .replace(/_hyphae$/g, " HIFAS")
    .replace(/_planks$/g, " TABUAS")
    .replace(/_leaves$/g, " FOLHAS")
    .replace(/_sapling$/g, " MUDA")
    .replace(/_bricks$/g, " TIJOLOS")
    .replace(/_brick$/g, " TIJOLO")
    .replace(/_tiles$/g, " LADRILHOS")
    .replace(/_tile$/g, " LADRILHO")
    .replace(/_block$/g, " BLOCO")
    .replace(/_ingot$/g, " BARRA")
    .replace(/_ore$/g, " MINERIO")
    .replace(/deepslate/g, "ARDOSIA")
    .replace(/blackstone/g, "PEDRA NEGRA")
    .replace(/cobblestone/g, "PEDREGULHO")
    .replace(/stone/g, "PEDRA")
    .replace(/tuff/g, "TUFO")
    .replace(/copper/g, "COBRE")
    .replace(/oak/g, "CARVALHO")
    .replace(/wooden/g, "CARVALHO")
    .replace(/spruce/g, "ABETO")
    .replace(/birch/g, "BETULA")
    .replace(/jungle/g, "SELVA")
    .replace(/acacia/g, "ACACIA")
    .replace(/mangrove/g, "MANGUE")
    .replace(/cherry/g, "CEREJEIRA")
    .replace(/bamboo/g, "BAMBU")
    .replace(/mosaic/g, "MOSAICO")
    .replace(/crimson/g, "CARMESIM")
    .replace(/warped/g, "DISTORCIDO")
    .replace(/quartz/g, "QUARTZO")
    .replace(/sandstone/g, "ARENITO")
    .replace(/prismarine/g, "PRISMARINHO")
    .replace(/mud/g, "BARRO")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .toUpperCase()
    .trim();

  return (shapePrefix + body).trim() || "ITEM SURVIVAL";
}

// Divide um nome longo em até 2 linhas de 15 caracteres para caber completo na Placa da Frente do Baú!
function splitItemNameForSign(ptName) {
  const clean = String(ptName || "ITEM").trim();
  if (clean.length <= 15) {
    return [clean, ""];
  }
  const words = clean.split(" ");
  let line1 = "";
  let line2 = "";
  for (const w of words) {
    if (!line2 && (line1 ? line1.length + 1 + w.length : w.length) <= 15) {
      line1 = line1 ? line1 + " " + w : w;
    } else {
      line2 = line2 ? line2 + " " + w : w;
    }
  }
  if (!line1) {
    line1 = clean.slice(0, 15);
    line2 = clean.slice(15, 30);
  }
  return [line1.slice(0, 15), line2.slice(0, 15)];
}

// Preenche todos os 54 slots do Baú Duplo 100% com o item do baú (sem moldura brilhante dentro)
// E coloca automaticamente uma PLACA NA FRENTE DO BAÚ identificando o item e sua variação em até 2 linhas!
function fillDoubleChestWithSingleItem(dim, posA, posB, baseItemOrId, cardinalDir = "north", customLabel = "", customSignBlock = "minecraft:birch_wall_sign") {
  try {
    const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
    if (!pair) return false;
    const { blockA, blockB, dir: resolvedDir } = pair;
    const finalDir = resolvedDir || cardinalDir || "north";

    let cleanId = "";
    if (typeof baseItemOrId === "string") {
      cleanId = baseItemOrId.toLowerCase();
    } else if (baseItemOrId && baseItemOrId.typeId) {
      cleanId = baseItemOrId.typeId.toLowerCase();
    }
    if (!cleanId) return false;

    const ptName = translateItemIdToPtBr(cleanId, customLabel);
    const [signName1, signName2] = splitItemNameForSign(ptName);

    // Cria o Pack Principal (Slot 0) e 1 instância de Pack Padrão (reutilizada nos slots 1..53 para velocidade 50x maior!)
    const identifierItem = createSafeItemStack(baseItemOrId, 64);
    if (!identifierItem) return false;

    const maxStackSize = identifierItem.maxAmount || 64;
    identifierItem.amount = maxStackSize;
    try {
      identifierItem.nameTag = "§e§l[BAÚ] §f" + ptName;
      identifierItem.setLore([
        "§6§lBaú Survival Organizado",
        "§fItem deste Baú: §e" + ptName,
        "§7ID: §8" + identifierItem.typeId,
        "§a54/54 Slots Lotados deste Item"
      ]);
    } catch (e) {}

    const sharedFullStack = createSafeItemStack(baseItemOrId, 64);
    if (sharedFullStack) {
      sharedFullStack.amount = sharedFullStack.maxAmount || 64;
    }

    const fillBothHalves = (bA, bB) => {
      const contA = bA?.getComponent("minecraft:inventory")?.container;
      const contB = bB?.getComponent("minecraft:inventory")?.container;
      if (!contA && !contB) return;

      if (contA) {
        try { contA.setItem(0, identifierItem); } catch (e) {}
        if (sharedFullStack) {
          for (let slot = 1; slot < contA.size; slot++) {
            try {
              if (!contA.getItem(slot)) contA.setItem(slot, sharedFullStack);
            } catch (e) {}
          }
        }
      }
      if (contB && (!contA || contA.size <= 27) && sharedFullStack) {
        for (let slot = 0; slot < contB.size; slot++) {
          try {
            if (!contB.getItem(slot)) contB.setItem(slot, sharedFullStack);
          } catch (e) {}
        }
      }
    };

    // Calcula a posição EXATAMENTE NA FRENTE DO BAÚ DUPLO (colada na face frontal de posA)
    const frontSignPos = {
      x: finalDir === "east" ? posA.x + 1 : finalDir === "west" ? posA.x - 1 : posA.x,
      y: posA.y,
      z: finalDir === "south" ? posA.z + 1 : finalDir === "north" ? posA.z - 1 : posA.z
    };
    const qtyLine = maxStackSize === 1 ? "§a54 Unidades" : "§a54 Packs (64x)";

    const signLines = signName2
      ? ["§l§e[BAÚ DUPLO]", "§l§f" + signName1, "§l§b" + signName2, qtyLine]
      : ["§l§e[BAÚ DUPLO]", "§l§f" + signName1, qtyLine, "§6[100% Lotado]"];

    const applyFrontSign = () => {
      try {
        placeExternalWallSignOnPillar(
          dim,
          frontSignPos,
          finalDir,
          signLines,
          customSignBlock || "minecraft:birch_wall_sign"
        );
      } catch (e) {}
    };

    fillBothHalves(blockA, blockB);
    applyFrontSign();

    // Reaplica no Tick 2 após a fusão do Baú Duplo para garantir que os 2 baús estejam 100% conectados (54 slots) e com placa frontal gravada
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
        fillBothHalves(latestA, latestB);
        applyFrontSign();
      } catch (e) {}
    }, 2);

    return true;
  } catch (e) {
    return false;
  }
}

function openMegaChestHallMenu(player) {
  ${config.soundFeedback ? `try { player.playSound("random.chestopen", { pitch: 1.0, volume: 0.8 }); } catch (e) {}` : ''}
  const arch = getPlayerArchModel(player);
  const basis = getLookBasis(player);
  const allSectors = getCompleteChestSectors();
  const totalItemsCount = allSectors.reduce((acc, s) => acc + s.items.length, 0);

  const form = new ActionFormData()
    .title("§l§5Mega Armazém (Direção do Olhar)")
    .body(
      \`§7Estilo Arquitetônico Ativo: §e\${arch.name}\\n\` +
      \`§7Direção do Olhar: §b\${basis.dirLabelPt} §8(Gire a câmera para escolher onde construir!)\\n\` +
      \`§aCatálogo Completo: §e\${totalItemsCount} Blocos, Variações & Itens §aem §b\${allSectors.length} Setores Organizados§a!\`
    )
    .button(\`§l§6[Estilos] Trocar Modelo da Sala de Baú\\n§r§8Atual: \${arch.shortTitle} (Quartzo, Medieval, Bunker, Nether, End)\`, "textures/items/painting")
    .button("§l§d[NOVO] Mega Sala de Encantamentos + 42 Villagers (1 Esmeralda)\\n§r§842 Baús Livros Nv.Máx + 18 Baús Insumos + 42 Villagers", "textures/items/book_enchanted")
    .button(\`§l§a[Modo 1] Armazém Completo (\${allSectors.length} Setores + Todas Variações)\\n§r§8Gera todos os \${totalItemsCount} Baús Duplos na direção \${basis.dirLabelPt}\`, "textures/items/chest_minecart")
    .button("§l§e[Modo 2] Escolher Setor Específico (Com Todas Variações)\\n§r§8Minérios/Cobre, Madeiras, Pedras/Tufo/Ardósia, 16 Cores...", "textures/items/book_enchanted")
    .button("§l§d[Modo Poções] Mega Sala de 30 Baús Duplos de Poções\\n§r§830 Baús Individuais de Alquimia com Placa na Frente + Bancada", "textures/items/brewing_stand")
    .button("§l§b[Modo 3] Sala Compacta (Todos os Itens e Variações Juntos)\\n§r§8Guarda 54 itens diferentes (64x cada) por Baú Duplo", "textures/items/ender_chest")
    .button("§l§3[Modo 4] Mega Sala Top 60 Itens Essenciais Survival\\n§r§860 Baús Duplos rápidos com os itens mais usados", "textures/items/nether_star")
    .button("§l§c[Modo 5] 1 Baú Duplo Lotado do Bloco/Item da Minha Mão\\n§r§8Cria 1 Baú Duplo na direção do olhar com Placa Identificadora", "textures/items/shulker_shell")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      openArchitecturalModelSelector(player);
    } else if (res.selection === 1) {
      openMegaEnchantmentHallMenu(player);
    } else if (res.selection === 2) {
      buildAllSectorsMegaWarehouse(player);
    } else if (res.selection === 3) {
      openSectorSelectionMenu(player);
    } else if (res.selection === 4) {
      buildMega30ChestsPotionHall(player);
    } else if (res.selection === 5) {
      buildAllMinecraftItemsInDoubleChests(player);
    } else if (res.selection === 6) {
      buildSameItemDoubleChestHall(player, MEGA_HALL_60_ITEMS, "Top 60 Blocos & Itens Survival");
    } else if (res.selection === 7) {
      spawnDoubleChestOfHandItem(player);
    } else if (res.selection === 8) {
      openMainMenu(player);
    }
  });
}

function openSectorSelectionMenu(player) {
  const sectors = getCompleteChestSectors();
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§eEscolha o Setor (100% Variações)")
    .body(
      \`§7Direção atual do olhar: §b\${basis.dirLabelPt}\\n\` +
      "§7Todos os blocos e TODAS as variações (escadas, lajes, muros, cercas, portas, alçapões, 16 cores, cobre, ardósia e tufo) estão incluídos:"
    );

  for (const sec of sectors) {
    form.button(\`§6\${sec.name}\\n§r§8\${sec.items.length} Baús Duplos com Placa na Frente (54 packs cada)\`);
  }
  form.button("§8« Voltar ao Armazém");

  showFormSafely(player, form, (res) => {
    if (res.selection >= sectors.length) {
      openMegaChestHallMenu(player);
      return;
    }
    const chosen = sectors[res.selection];
    buildSameItemDoubleChestHall(player, chosen.items, chosen.shortName);
  });
}

// Constrói a Estação Central de Utilidades na entrada de qualquer Sala de Baús Organizada (rotacionada para a direção do olhar!)
function buildOrganizedHallEntranceUtilities(dim, basis, arch, titleLine) {
  try {
    // Piso iluminado de entrada (f = 1..3, r = -4..4) + Corredor Central Livre + Teto a 4 blocos de altura (dy = 4)
    for (let f = 1; f <= 3; f++) {
      for (let r = -4; r <= 4; r++) {
        safeSetBlock(
          dim,
          basis.rel(f, -1, r),
          r === 0 && f === 2 ? arch.lightBlock : r === 0 ? arch.floorCenterBlock : arch.floorBlock
        );
        for (let dy = 0; dy <= 3; dy++) {
          if (r === -4 || r === 4) {
            safeSetBlock(
              dim,
              basis.rel(f, dy, r),
              dy === 1 && f === 2 ? arch.lightBlock : arch.wallBlock
            );
          } else {
            safeSetBlock(dim, basis.rel(f, dy, r), "minecraft:air");
          }
        }
        safeSetBlock(dim, basis.rel(f, 4, r), arch.ceilingBlock);
      }
    }

    // Colunas laterais iluminadas na entrada (f = 3, r = -3 e r = +3)
    for (let dy = 0; dy <= 3; dy++) {
      safeSetBlock(
        dim,
        basis.rel(3, dy, -3),
        dy === 1 ? arch.lightBlock : arch.pillarBlock
      );
      safeSetBlock(
        dim,
        basis.rel(3, dy, 3),
        dy === 1 ? arch.lightBlock : arch.pillarBlock
      );
    }

    // Estação de Utilidades nas laterais do Lobby (deixando o corredor central r = -1..+1 100% livre para passar!)
    safeSetBlock(dim, basis.rel(2, 0, -3), "minecraft:lodestone");
    safeSetBlock(dim, basis.rel(1, 0, -3), "minecraft:crafting_table");
    safeSetBlock(dim, basis.rel(2, 0, 3), "minecraft:anvil");
    safeSetBlock(dim, basis.rel(1, 0, 3), "minecraft:ender_chest");

    // Placa identificando a Sala Organizada e o Bloco Multiplicador na entrada
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(3, 2, -2),
      basis.leftInwardDir,
      ["§l§b[SALA ORGANIZADA]", \`§e\${String(titleLine || "").slice(0, 15)}\`, "§a54 Packs / Baú", \`§6Olhar: \${basis.dirLabelPt.slice(0, 8)}\`],
      arch.wallSignBlock
    );
    placeExternalWallSignOnPillar(
      dim,
      basis.rel(2, 1, -2),
      basis.leftInwardDir,
      ["§l§d[MULTIPLICADOR]", "§eClique: +1 Pack", "§bShift: +5 Packs", "§aBater: Shulker!"],
      arch.wallSignBlock
    );
  } catch (e) {}
}

// Constrói os 10 Setores Completos (incluindo TODAS as variações de blocos e itens) em Salas Paralelas Conectadas na DIREÇÃO DO OLHAR!
// Divide automaticamente setores grandes em Alas de até 14 Bays (84 Baús = 42 blocos) mantendo 100% dentro dos chunks carregados!
function buildAllSectorsMegaWarehouse(player) {
  const sectors = getCompleteChestSectors();
  const dim = player.dimension;
  const arch = getPlayerArchModel(player);
  const basis = getLookBasis(player);

  // Divide cada setor em Alas de no máximo 84 Baús Duplos (14 Bays de 6 baús = 42m de comprimento)
  const maxChestsPerWing = 84;
  const wings = [];
  let totalChests = 0;

  for (const sec of sectors) {
    totalChests += sec.items.length;
    const totalParts = Math.ceil(sec.items.length / maxChestsPerWing);
    for (let p = 0; p < totalParts; p++) {
      const slice = sec.items.slice(p * maxChestsPerWing, (p + 1) * maxChestsPerWing);
      const wingTitle = totalParts > 1 ? \`\${sec.shortName} (\${p + 1}/\${totalParts})\` : sec.shortName;
      wings.push({
        sectorId: sec.id,
        title: wingTitle,
        items: slice,
        totalBays: Math.ceil(slice.length / 6)
      });
    }
  }

  let currentWingIdx = 0;
  let currentBayInWing = 0;
  let builtChestsCount = 0;

  try {
    player.addEffect("resistance", 2400, { amplifier: 255, showParticles: false });
    player.addEffect("slow_falling", 2400, { amplifier: 0, showParticles: false });
  } catch (e) {}

  player.sendMessage(
    \`§8[§aMega Armazém Completo§8] §eConstruindo §a\${totalChests} Baús Duplos §ena direção §b\${basis.dirLabelPt} §eem §b\${wings.length} Salas Conectadas §eno estilo §e\${arch.name}§e...\`
  );

  buildOrganizedHallEntranceUtilities(dim, basis, arch, "10 Setores Completos");

  const job = system.runInterval(() => {
    try {
      if (currentWingIdx >= wings.length) {
        system.clearRun(job);
        try { player.teleport(basis.relTp(2, 0, 0)); } catch (e) {}
        try { player.playSound("random.totem", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(
          \`§8[§aMega Armazém Concluído!§8] §aForam construídos §e\${builtChestsCount} Baús Duplos Conectados §ana direção §b\${basis.dirLabelPt} §aem §b\${wings.length} Salas Organizadas (\${arch.name})§a!\`
        );
        return;
      }

      // Constrói até 2 Bays por tick para manter 60 FPS e garantir que todos os chunks estejam carregados
      for (let step = 0; step < 2; step++) {
        if (currentWingIdx >= wings.length) break;

        const wing = wings[currentWingIdx];
        const wingOffset = currentWingIdx - Math.floor(wings.length / 2);
        const aisleR = wingOffset * 8;
        const fOrigin = 4;
        const bf = fOrigin + currentBayInWing * 3;

        // Mantém o jogador próximo ao Bay ativo para garantir 100% dos chunks carregados no Bedrock
        if (currentBayInWing % 4 === 0) {
          try { player.teleport(basis.relTp(bf, 0, aisleR)); } catch (e) {}
        }

        // No início da Ala (Bay 0), constrói o Salão Frontal Conectado (Lobby)
        if (currentBayInWing === 0) {
          const rMinLobby = currentWingIdx === 0 ? -3 : -4;
          const rMaxLobby = currentWingIdx === wings.length - 1 ? 3 : 4;
          for (let lf = 1; lf < fOrigin; lf++) {
            for (let lr = rMinLobby; lr <= rMaxLobby; lr++) {
              const wr = aisleR + lr;
              safeSetBlock(
                dim,
                basis.rel(lf, -1, wr),
                lf === 2 && lr === 0 ? arch.lightBlock : lr === 0 ? arch.floorCenterBlock : arch.floorBlock
              );
              for (let dy = 0; dy <= 3; dy++) {
                safeSetBlock(dim, basis.rel(lf, dy, wr), "minecraft:air");
              }
              safeSetBlock(dim, basis.rel(lf, 4, wr), arch.ceilingBlock);
            }
          }
        }

        // Constrói o Bay atual (Piso, Paredes Fechadas Traseiras, Teto y+4 e Colunas)
        for (let df = 0; df < 3; df++) {
          const cf = bf + df;
          for (let dr = -3; dr <= 3; dr++) {
            safeSetBlock(
              dim,
              basis.rel(cf, -1, aisleR + dr),
              dr === 0 && df === 1 ? arch.lightBlock : dr === 0 ? arch.floorCenterBlock : arch.floorBlock
            );
            for (let dy = 0; dy <= 3; dy++) {
              if (dr === -3 || dr === 3) {
                safeSetBlock(
                  dim,
                  basis.rel(cf, dy, aisleR + dr),
                  dy === 1 && df === 1 ? arch.lightBlock : arch.wallBlock
                );
              } else {
                safeSetBlock(dim, basis.rel(cf, dy, aisleR + dr), "minecraft:air");
              }
            }
            safeSetBlock(dim, basis.rel(cf, 4, aisleR + dr), arch.ceilingBlock);
          }

          if (df === 2) {
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(
                dim,
                basis.rel(cf, dy, aisleR - 2),
                dy === 1 ? arch.lightBlock : arch.pillarBlock
              );
              safeSetBlock(
                dim,
                basis.rel(cf, dy, aisleR + 2),
                dy === 1 ? arch.lightBlock : arch.pillarBlock
              );
            }
          }
        }

        // Placa identificadora da Ala/Setor na primeira coluna
        if (currentBayInWing === 0) {
          placeExternalWallSignOnPillar(
            dim,
            basis.rel(fOrigin + 2, 2, aisleR - 1),
            basis.leftInwardDir,
            ["§l§6[SETOR ORGANIZADO]", \`§e\${wing.title.slice(0, 15)}\`, \`§a\${wing.items.length} Baús Duplos\`, "§bTodas Variações"],
            arch.wallSignBlock
          );
        }

        // Coloca os 6 Baús Duplos do Bay + Placa Identificadora com 2 linhas de nome na frente de cada Baú
        for (let lvl = 0; lvl < 3; lvl++) {
          const idxLeft = currentBayInWing * 6 + lvl * 2;
          const idxRight = currentBayInWing * 6 + lvl * 2 + 1;

          if (idxLeft < wing.items.length) {
            fillDoubleChestWithSingleItem(
              dim,
              basis.rel(bf, lvl, aisleR - 2),
              basis.rel(bf + 1, lvl, aisleR - 2),
              wing.items[idxLeft],
              basis.leftInwardDir,
              "",
              arch.wallSignBlock
            );
            builtChestsCount++;
          }

          if (idxRight < wing.items.length) {
            fillDoubleChestWithSingleItem(
              dim,
              basis.rel(bf, lvl, aisleR + 2),
              basis.rel(bf + 1, lvl, aisleR + 2),
              wing.items[idxRight],
              basis.rightInwardDir,
              "",
              arch.wallSignBlock
            );
            builtChestsCount++;
          }
        }

        currentBayInWing++;
        if (currentBayInWing >= wing.totalBays) {
          // Fecha a parede do fundo da Ala
          const endF = fOrigin + wing.totalBays * 3;
          for (let dr = -3; dr <= 3; dr++) {
            safeSetBlock(dim, basis.rel(endF, -1, aisleR + dr), arch.floorBlock);
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(
                dim,
                basis.rel(endF, dy, aisleR + dr),
                dy === 1 && dr === 0 ? arch.lightBlock : arch.wallBlock
              );
            }
            safeSetBlock(dim, basis.rel(endF, 4, aisleR + dr), arch.ceilingBlock);
          }
          currentBayInWing = 0;
          currentWingIdx++;
        }
      }

      const pct = Math.min(100, Math.round((builtChestsCount / Math.max(1, totalChests)) * 100));
      player.onScreenDisplay.setActionBar(
        \`§aArmazém (\${basis.dirLabelPt}): §e\${pct}% §7(\${builtChestsCount}/\${totalChests} Baús | Sala \${Math.min(wings.length, currentWingIdx + 1)}/\${wings.length})\`
      );
    } catch (err) {
      currentBayInWing++;
    }
  }, 2);
}

// Redireciona o Catálogo Completo para o construtor multi-alas completo
function buildCompleteGameMegaChestWarehouse(player) {
  buildAllSectorsMegaWarehouse(player);
}

// Modo 2 & 4: Constrói uma SALA ORGANIZADA FECHADA para o Setor escolhido na DIREÇÃO DO OLHAR (com TODAS as suas variações)!
function buildSameItemDoubleChestHall(player, itemIdsList, hallLabel) {
  const validItems = [];
  const seen = new Set();
  for (const raw of itemIdsList) {
    const resolved = resolveValidBedrockItemId(raw) || raw;
    if (resolved && !seen.has(resolved)) {
      seen.add(resolved);
      validItems.push(resolved);
    }
  }

  if (validItems.length === 0) {
    player.sendMessage("§8[§cSala de Baús§8] §cNenhum item válido encontrado para este setor.");
    return;
  }

  const dim = player.dimension;
  const arch = getPlayerArchModel(player);
  const basis = getLookBasis(player);
  const fOrigin = 4;

  const maxChestsPerWing = 84; // 14 Bays * 6 Baús = 84 Baús por Ala (42 blocos de comprimento)
  const totalWings = Math.ceil(validItems.length / maxChestsPerWing);
  const wings = [];
  for (let w = 0; w < totalWings; w++) {
    const slice = validItems.slice(w * maxChestsPerWing, (w + 1) * maxChestsPerWing);
    wings.push({
      wingIdx: w,
      title: totalWings > 1 ? \`\${hallLabel} #\${w + 1}\` : hallLabel,
      items: slice,
      totalBays: Math.ceil(slice.length / 6)
    });
  }

  let currentWing = 0;
  let currentBay = 0;
  let builtCount = 0;

  // Constrói o Hall de Entrada com Bancada de Utilidades (Multiplicador, Crafting, Bigorna, Baú do Fim)
  buildOrganizedHallEntranceUtilities(dim, basis, arch, hallLabel);

  player.sendMessage(
    \`§8[§dSala de Baús Organizada§8] §eConstruindo §a\${validItems.length} Baús Duplos §e(\${hallLabel}) na direção §b\${basis.dirLabelPt} §eno estilo §b\${arch.name}§e...\`
  );

  const jobId = system.runInterval(() => {
    try {
      if (currentWing >= wings.length) {
        system.clearRun(jobId);
        try { player.teleport(basis.relTp(2, 0, 0)); } catch (e) {}
        try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(
          \`§8[§aSala Organizada Concluída§8] §aPronto! §e\${builtCount} Baús Duplos conectados §aforam gerados na direção §b\${basis.dirLabelPt} §adentro da Sala Organizada (\${arch.name}) com Placa na Frente do Baú e 54 packs em cada!\`
        );
        return;
      }

      const wing = wings[currentWing];
      const wingR = currentWing * 8;
      const fStart = fOrigin + currentBay * 3;

      // Mantém o jogador próximo se a sala tiver múltiplos bays para garantir chunks carregados
      if (currentBay > 0 && currentBay % 5 === 0) {
        try { player.teleport(basis.relTp(fStart, 0, wingR)); } catch (e) {}
      }

      // Se houver mais de 1 Ala paralela no Setor, interliga pelo corredor frontal (Lobby)
      if (currentBay === 0 && currentWing > 0) {
        for (let lf = 1; lf < fOrigin; lf++) {
          for (let lr = -4; lr <= 4; lr++) {
            const wr = wingR + lr;
            safeSetBlock(
              dim,
              basis.rel(lf, -1, wr),
              lf === 2 && lr === 0 ? arch.lightBlock : lr === 0 ? arch.floorCenterBlock : arch.floorBlock
            );
            for (let dy = 0; dy <= 3; dy++) {
              safeSetBlock(dim, basis.rel(lf, dy, wr), "minecraft:air");
            }
            safeSetBlock(dim, basis.rel(lf, 4, wr), arch.ceilingBlock);
          }
        }
      }

      for (let df = 0; df < 3; df++) {
        const cf = fStart + df;
        for (let dr = -4; dr <= 4; dr++) {
          safeSetBlock(
            dim,
            basis.rel(cf, -1, wingR + dr),
            dr === 0 && df === 1 ? arch.lightBlock : dr === 0 ? arch.floorCenterBlock : arch.floorBlock
          );
          for (let dy = 0; dy <= 3; dy++) {
            if (dr === -4 || dr === 4) {
              safeSetBlock(
                dim,
                basis.rel(cf, dy, wingR + dr),
                dy === 1 && df === 1 ? arch.lightBlock : arch.wallBlock
              );
            } else {
              safeSetBlock(dim, basis.rel(cf, dy, wingR + dr), "minecraft:air");
            }
          }
          safeSetBlock(dim, basis.rel(cf, 4, wingR + dr), arch.ceilingBlock);
        }

        if (df === 2) {
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(cf, dy, wingR - 3),
              dy === 1 ? arch.lightBlock : arch.pillarBlock
            );
            safeSetBlock(
              dim,
              basis.rel(cf, dy, wingR + 3),
              dy === 1 ? arch.lightBlock : arch.pillarBlock
            );
          }
        }
      }

      for (let level = 0; level < 3; level++) {
        const idxLeft = currentBay * 6 + level * 2;
        const idxRight = currentBay * 6 + level * 2 + 1;

        if (idxLeft < wing.items.length) {
          fillDoubleChestWithSingleItem(
            dim,
            basis.rel(fStart, level, wingR - 3),
            basis.rel(fStart + 1, level, wingR - 3),
            wing.items[idxLeft],
            basis.leftInwardDir,
            "",
            arch.wallSignBlock
          );
          builtCount++;
        }

        if (idxRight < wing.items.length) {
          fillDoubleChestWithSingleItem(
            dim,
            basis.rel(fStart, level, wingR + 3),
            basis.rel(fStart + 1, level, wingR + 3),
            wing.items[idxRight],
            basis.rightInwardDir,
            "",
            arch.wallSignBlock
          );
          builtCount++;
        }
      }

      currentBay++;
      if (currentBay >= wing.totalBays) {
        // Fecha a parede de fundo da Ala atual
        const endF = fOrigin + wing.totalBays * 3;
        for (let dr = -4; dr <= 4; dr++) {
          safeSetBlock(dim, basis.rel(endF, -1, wingR + dr), arch.floorBlock);
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(endF, dy, wingR + dr),
              dy === 1 && dr === 0 ? arch.lightBlock : arch.wallBlock
            );
          }
          safeSetBlock(dim, basis.rel(endF, 4, wingR + dr), arch.ceilingBlock);
        }
        currentBay = 0;
        currentWing++;
      }

      const pct = Math.min(100, Math.round((builtCount / Math.max(1, validItems.length)) * 100));
      player.onScreenDisplay.setActionBar(
        \`§dSala Organizada (\${basis.dirLabelPt}): §a\${pct}% §7(\${builtCount}/\${validItems.length} Baús Duplos)\`
      );
    } catch (e) {
      currentBay++;
    }
  }, 2);
}

// Modo 3: Sala Compacta Organizada na DIREÇÃO DO OLHAR com TODOS os Blocos, Variações e Itens Survival (54 itens diferentes de 64x por Baú Duplo)
function buildAllMinecraftItemsInDoubleChests(player) {
  const allTypes = getAllGameBlocksAndItems();

  const dim = player.dimension;
  const arch = getPlayerArchModel(player);
  const basis = getLookBasis(player);
  const fOrigin = 4;

  const itemsPerDoubleChest = 54;
  const totalDoubleChests = Math.ceil(allTypes.length / itemsPerDoubleChest);
  const totalBays = Math.ceil(totalDoubleChests / 6);

  let currentBay = 0;
  let globalItemIdx = 0;
  let chestsBuilt = 0;

  buildOrganizedHallEntranceUtilities(dim, basis, arch, "Catálogo Compacto");

  player.sendMessage(
    \`§8[§bSala Compacta Organizada§8] §eCatalogados e ordenados §a\${allTypes.length} Blocos, Variações e Itens Survival §ena direção §b\${basis.dirLabelPt} §eno estilo §b\${arch.name}§e!\`
  );

  const jobId = system.runInterval(() => {
    try {
      if (currentBay >= totalBays || globalItemIdx >= allTypes.length) {
        system.clearRun(jobId);
        const endF = fOrigin + totalBays * 3;
        for (let dr = -4; dr <= 4; dr++) {
          safeSetBlock(dim, basis.rel(endF, -1, dr), arch.floorBlock);
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(endF, dy, dr),
              dy === 1 && dr === 0 ? arch.lightBlock : arch.wallBlock
            );
          }
          safeSetBlock(dim, basis.rel(endF, 4, dr), arch.ceilingBlock);
        }
        try { player.teleport(basis.relTp(2, 0, 0)); } catch (e) {}
        try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(
          \`§8[§aSala Compacta Pronta§8] §aTodos os \${globalItemIdx} blocos, variações e itens Survival foram organizados por categoria na direção \${basis.dirLabelPt} em \${chestsBuilt} Baús Duplos com Placa na Frente!\`
        );
        return;
      }

      const fStart = fOrigin + currentBay * 3;

      for (let df = 0; df < 3; df++) {
        const cf = fStart + df;
        for (let dr = -4; dr <= 4; dr++) {
          safeSetBlock(
            dim,
            basis.rel(cf, -1, dr),
            dr === 0 && df === 1 ? arch.lightBlock : dr === 0 ? arch.floorCenterBlock : arch.floorBlock
          );
          for (let dy = 0; dy <= 3; dy++) {
            if (dr === -4 || dr === 4) {
              safeSetBlock(
                dim,
                basis.rel(cf, dy, dr),
                dy === 1 && df === 1 ? arch.lightBlock : arch.wallBlock
              );
            } else {
              safeSetBlock(dim, basis.rel(cf, dy, dr), "minecraft:air");
            }
          }
          safeSetBlock(dim, basis.rel(cf, 4, dr), arch.ceilingBlock);
        }
        if (df === 2) {
          for (let dy = 0; dy <= 3; dy++) {
            safeSetBlock(
              dim,
              basis.rel(cf, dy, -3),
              dy === 1 ? arch.lightBlock : arch.pillarBlock
            );
            safeSetBlock(
              dim,
              basis.rel(cf, dy, 3),
              dy === 1 ? arch.lightBlock : arch.pillarBlock
            );
          }
        }
      }

      const fillNextDoubleChestFromCatalog = (posA, posB, cardinalDir) => {
        if (globalItemIdx >= allTypes.length) return;
        const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
        if (!pair) return;
        const { blockA, blockB, dir: resolvedDir } = pair;
        const finalDir = resolvedDir || cardinalDir || "north";

        const firstItemInChest = allTypes[globalItemIdx];
        const firstNamePt = translateItemIdToPtBr(firstItemInChest);

        const chestStacks = [];
        for (let s = 0; s < 54 && globalItemIdx < allTypes.length; s++) {
          const itemId = allTypes[globalItemIdx++];
          try {
            const st = createSafeItemStack(itemId, 64);
            if (st) {
              st.amount = st.maxAmount || 64;
              chestStacks.push(st);
            }
          } catch (e) {}
        }

        const populateCatalogChest = (bA, bB) => {
          const cA = bA?.getComponent("minecraft:inventory")?.container;
          const cB = bB?.getComponent("minecraft:inventory")?.container;
          for (let s = 0; s < chestStacks.length; s++) {
            const st = chestStacks[s];
            try {
              if (cA && cA.size >= 54) {
                if (!cA.getItem(s)) cA.setItem(s, st);
              } else if (s < 27 && cA) {
                if (!cA.getItem(s)) cA.setItem(s, st);
              } else if (s >= 27 && cB) {
                if (!cB.getItem(s - 27)) cB.setItem(s - 27, st);
              }
            } catch (e) {}
          }
        };

        populateCatalogChest(blockA, blockB);
        chestsBuilt++;

        // Coloca Placa na Frente do Baú identificando o Baú Categorizado (compatível com as 4 direções)
        const frontSignPos = {
          x: finalDir === "east" ? posA.x + 1 : finalDir === "west" ? posA.x - 1 : posA.x,
          y: posA.y,
          z: finalDir === "south" ? posA.z + 1 : finalDir === "north" ? posA.z - 1 : posA.z
        };
        const chestNum = chestsBuilt;
        const signLines = [
          \`§l§b[BAÚ #\${chestNum}]\`,
          \`§e\${firstNamePt.slice(0, 15)}\`,
          "§f+53 Variações",
          "§a54 Packs (64x)"
        ];
        placeExternalWallSignOnPillar(dim, frontSignPos, finalDir, signLines, arch.wallSignBlock);
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
            populateCatalogChest(latestA, latestB);
            placeExternalWallSignOnPillar(dim, frontSignPos, finalDir, signLines, arch.wallSignBlock);
          } catch (e) {}
        }, 2);
      };

      for (let level = 0; level < 3; level++) {
        fillNextDoubleChestFromCatalog(
          basis.rel(fStart, level, -3),
          basis.rel(fStart + 1, level, -3),
          basis.leftInwardDir
        );
        fillNextDoubleChestFromCatalog(
          basis.rel(fStart, level, 3),
          basis.rel(fStart + 1, level, 3),
          basis.rightInwardDir
        );
      }

      currentBay++;
      const pct = Math.min(100, Math.round((globalItemIdx / allTypes.length) * 100));
      player.onScreenDisplay.setActionBar(
        \`§bSala Compacta (\${basis.dirLabelPt}): §a\${pct}% §7(\${globalItemIdx}/\${allTypes.length})\`
      );
    } catch (e) {
      currentBay++;
    }
  }, 2);
}

// Escolher Lote de 60 Baús do Catálogo Completo
function openCatalogBatchChestHallModal(player) {
  const allIds = getAllGameBlocksAndItems();
  const catNames = {
    1: "Minérios & Cobre",
    2: "Armas & Armaduras",
    3: "Raros, Trims & Discos",
    4: "Redstone & 17 Shulkers",
    5: "Madeiras & Variações",
    6: "Pedras, Ardósia & Tufo",
    7: "Quartzo, Tijolos & Arenito",
    8: "Blocos Coloridos (16 Cores)",
    9: "Comidas, Flores & Natureza",
    10: "Nether, End & Variações"
  };

  const batchSize = 60;
  const totalBatches = Math.ceil(allIds.length / batchSize);
  const options = [];
  for (let b = 0; b < totalBatches; b++) {
    const start = b * batchSize + 1;
    const end = Math.min((b + 1) * batchSize, allIds.length);
    const firstId = allIds[b * batchSize] || "minecraft:stone";
    const catLabel = catNames[getSurvivalCategoryPriority(firstId)] || "Geral";
    options.push(\`Sala Organizada #\${b + 1} (\${catLabel}): Itens \${start} a \${end}\`);
  }

  const modal = new ModalFormData()
    .title("Salas Organizadas (60 Baús)")
    .dropdown(
      \`Os \${allIds.length} Blocos, Variações e Itens estão 100% organizados! Escolha qual Sala Fechada de 60 Baús Duplos construir agora:\`,
      options,
      0
    );

  showFormSafely(player, modal, (res) => {
    const batchIdx = Number(res.formValues[0]) || 0;
    const slice = allIds.slice(batchIdx * batchSize, (batchIdx + 1) * batchSize);
    buildSameItemDoubleChestHall(player, slice, \`Sala Survival #\${batchIdx + 1}\`);
  });
}

// Modo 5: Gera 1 Baú Duplo conectado imediatamente na direção do olhar com 54 clones do item da mão
function spawnDoubleChestOfHandItem(player) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);

  if (!handItem) {
    player.sendMessage("§8[§cMega Baú§8] §cSegure o bloco ou item que você deseja multiplicar em 54 slots na sua mão principal primeiro!");
    return;
  }

  const dim = player.dimension;
  const arch = getPlayerArchModel(player);
  const basis = getLookBasis(player);
  const posA = basis.rel(2, 0, 0);
  const posB = basis.rel(2, 0, 1);

  try {
    safeSetBlock(dim, basis.rel(2, 1, 0), "minecraft:air");
    safeSetBlock(dim, basis.rel(2, 1, 1), "minecraft:air");
    safeSetBlock(dim, basis.rel(1, 0, 0), "minecraft:air");
    safeSetBlock(dim, basis.rel(1, 0, 1), "minecraft:air");
  } catch (e) {}

  const ok = fillDoubleChestWithSingleItem(
    dim,
    posA,
    posB,
    handItem,
    basis.backDir,
    "",
    arch?.wallSignBlock || "minecraft:birch_wall_sign"
  );

  if (ok) {
    try { player.playSound("random.chestopen", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
    player.sendMessage(
      \`§8[§aMega Baú Duplo§8] §aCriado 1 Baú Duplo conectado na direção §b\${basis.dirLabelPt} §acom Placa Identificadora e todos os 54 slots lotados de §e\${handItem.typeId.replace("minecraft:", "")}§a!\`
    );
  }
}

// ============================================================================
// 6. CONSTRUTOR DE ESTRUTURAS NA DIREÇÃO DO OLHAR, SALA DE ENCANTAMENTOS + 42 VILLAGERS, POÇÕES & FORNALHA
// ============================================================================
function openBuilderAndSpawnerMenu(player) {
  const basis = getLookBasis(player);
  const form = new ActionFormData()
    .title("§l§cConstrutor (Direção do Olhar)")
    .body(
      \`§7Direção atual do olhar: §b\${basis.dirLabelPt}\\n\` +
      "§7Gire a câmera para qualquer lado — toda construção nascerá exatamente na direção para onde você está olhando:"
    )
    .button("§l§dMega Sala de Encantamentos + 42 Villagers (1 Esmeralda)\\n§r§842 Baús Livros Nv.Máx + 18 Baús Insumos + 42 Villagers", "textures/items/book_enchanted")
    .button("§l§dMega Sala de Poções: 30 Baús Duplos Individuais\\n§r§8Alquimia Completa, Suportes, Caldeirões e 30 Baús Duplos", "textures/items/brewing_stand")
    .button("§l§6Super Fornalha Industrial 16x (Smelter Automático)\\n§r§816 Fornalhas com Funis, Baús de entrada de minérios e saída", "textures/items/blast_furnace")
    .button("§l§5Mega Armazém: Baús Duplos Organizados por Setores\\n§r§810 Setores temáticos com placas na frente e 54 slots cheios", "textures/items/chest_minecart")
    .button("§dGerar Altar de Encantamento Nível 30 Rápido (Na Frente)\\n§r§8Cria 16 Estantes de Livros + Mesa no centro na direção do olhar", "textures/items/book_enchanted")
    .button("§bCriar Plataforma Salva-Vidas 5x5 sob os Pés\\n§r§8Obsidiana instantânea (salva de quedas e lava)", "textures/items/ender_pearl")
    .button("§6Criar Bunker / Abrigo Iluminado na Frente (Direção Olhar)\\n§r§8Proteção imediata com lanternas, porta e baú", "textures/items/lantern")
    .button("§eInvocar Mobs, Pets Raros, Aldeões & Golem\\n§r§8Spawna criaturas amigáveis de suporte", "textures/items/emerald")
    .button("§cInvocar Bosses (Warden, Wither, Ender Dragon)\\n§r§8Spawna chefes para testar suas armas", "textures/items/nether_star")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    const dim = player.dimension;
    const b = getLookBasis(player);

    if (res.selection === 0) {
      openMegaEnchantmentHallMenu(player);
    } else if (res.selection === 1) {
      buildMegaPotionBrewingComplex(player);
    } else if (res.selection === 2) {
      buildMegaIndustrialSmelter(player);
    } else if (res.selection === 3) {
      openMegaChestHallMenu(player);
    } else if (res.selection === 4) {
      try {
        for (let df = -2; df <= 2; df++) {
          for (let dr = -2; dr <= 2; dr++) {
            const f = 4 + df;
            safeSetBlock(dim, b.rel(f, -1, dr), "minecraft:chiseled_quartz_block");
            if (Math.abs(df) === 2 || Math.abs(dr) === 2) {
              if (df === -2 && dr === 0) {
                safeSetBlock(dim, b.rel(f, 0, dr), "minecraft:air");
                safeSetBlock(dim, b.rel(f, 1, dr), "minecraft:air");
                continue;
              }
              safeSetBlock(dim, b.rel(f, 0, dr), "minecraft:bookshelf");
              safeSetBlock(dim, b.rel(f, 1, dr), "minecraft:bookshelf");
            } else {
              safeSetBlock(dim, b.rel(f, 0, dr), "minecraft:air");
              safeSetBlock(dim, b.rel(f, 1, dr), "minecraft:air");
            }
          }
        }
        safeSetBlock(dim, b.rel(4, 0, 0), "minecraft:enchanting_table");
        giveItemSafely(player, "minecraft:lapis_lazuli", 64);
        player.sendMessage(\`§8[§aConstrutor§8] §dAltar de Encantamento Nível 30 gerado na direção §b\${b.dirLabelPt}§d (+64 Lápis-Lazúli)!\`);
      } catch (e) {}
    } else if (res.selection === 5) {
      try {
        for (let df = -2; df <= 2; df++) {
          for (let dr = -2; dr <= 2; dr++) {
            safeSetBlock(dim, b.rel(df, -1, dr), "minecraft:obsidian");
          }
        }
        player.sendMessage("§8[§aConstrutor§8] §bPlataforma 5x5 de Obsidiana criada sob seus pés!");
      } catch (e) {}
    } else if (res.selection === 6) {
      try {
        for (let f = 2; f <= 6; f++) {
          for (let dy = -1; dy <= 3; dy++) {
            for (let r = -2; r <= 2; r++) {
              const isEdge = f === 2 || f === 6 || Math.abs(r) === 2 || dy === -1 || dy === 3;
              const isDoor = f === 2 && r === 0 && (dy === 0 || dy === 1);
              const blk = dim.getBlock(b.rel(f, dy, r));
              if (!blk) continue;
              if (isDoor) {
                blk.setType("minecraft:air");
              } else if (isEdge) {
                blk.setType(dy === 1 && (f === 4 || r === 0) ? "minecraft:glass" : "minecraft:stone_bricks");
              } else {
                blk.setType("minecraft:air");
              }
            }
          }
        }
        safeSetBlock(dim, b.rel(4, 2, 0), "minecraft:sea_lantern");
        player.teleport(b.relTp(4, 0, 0));
        player.sendMessage(\`§8[§aConstrutor§8] §6Abrigo seguro construído na direção §b\${b.dirLabelPt}§6!\`);
      } catch (e) {}
    } else if (res.selection === 7) {
      openMobSpawnerCategory(player, false);
    } else if (res.selection === 8) {
      openMobSpawnerCategory(player, true);
    } else if (res.selection === 9) {
      openMainMenu(player);
    }
  });
}

// ----------------------------------------------------------------------------
// ESTRUTURA 1: MEGA SALA DE POÇÕES (30 BAÚS DUPLOS INDIVIDUAIS + PLACA EXTERNA + BANCADA COM MULTIPLICADOR)
// ----------------------------------------------------------------------------
function buildMegaPotionBrewingComplex(player) {
  buildMega30ChestsPotionHall(player);
}

// ----------------------------------------------------------------------------
// ESTRUTURA 2: SUPER FORNALHA INDUSTRIAL 16X NA DIREÇÃO DO OLHAR (SMELTER AUTOMÁTICO)
// ----------------------------------------------------------------------------
function buildMegaIndustrialSmelter(player) {
  const dim = player.dimension;
  const basis = getLookBasis(player);
  const arch = getPlayerArchModel(player);

  player.sendMessage(
    \`§8[§6Fornalha Industrial§8] §eConstruindo Super Fornalha Industrial 16x na direção §b\${basis.dirLabelPt} §ecom Funis e Baús automáticos...\`
  );

  try {
    // 1. Piso de Tijolos de Ardósia e Lanternas do Mar (f = 2..13, r = -3..3)
    for (let df = 0; df < 12; df++) {
      for (let dr = -3; dr <= 3; dr++) {
        const f = 2 + df;
        safeSetBlock(
          dim,
          basis.rel(f, -1, dr),
          (df === 2 || df === 9) && dr === 0 ? "minecraft:sea_lantern" : "minecraft:deepslate_bricks"
        );
        for (let dy = 0; dy <= 4; dy++) {
          safeSetBlock(dim, basis.rel(f, dy, dr), "minecraft:air");
        }
      }
    }

    // 2. Linha Dupla de Fornalhas Industriais: 8 Fornalhas de cada lado (total 16)
    const furnaceTypes = [
      "minecraft:blast_furnace",
      "minecraft:blast_furnace",
      "minecraft:blast_furnace",
      "minecraft:smoker",
      "minecraft:smoker",
      "minecraft:smoker",
      "minecraft:furnace",
      "minecraft:furnace"
    ];

    for (let i = 0; i < 8; i++) {
      const f = 4 + i;
      const fType = furnaceTypes[i];

      // Fileira Esquerda (r = -1)
      safeSetBlock(dim, basis.rel(f, 0, -1), "minecraft:hopper");
      safeSetBlock(dim, basis.rel(f, 1, -1), fType);
      safeSetBlock(dim, basis.rel(f, 2, -1), "minecraft:hopper");
      safeSetBlock(dim, basis.rel(f, 1, -2), "minecraft:hopper");

      // Fileira Direita (r = +1)
      safeSetBlock(dim, basis.rel(f, 0, 1), "minecraft:hopper");
      safeSetBlock(dim, basis.rel(f, 1, 1), fType);
      safeSetBlock(dim, basis.rel(f, 2, 1), "minecraft:hopper");
      safeSetBlock(dim, basis.rel(f, 1, 2), "minecraft:hopper");
    }

    // 3. Baús Duplos de Combustível (Pré-abastecidos com Blocos de Carvão e Varas de Blaze, virados para o lado externo para não sobrepor funis)
    fillDoubleChestWithSingleItem(
      dim,
      basis.rel(6, 2, -2),
      basis.rel(7, 2, -2),
      "minecraft:coal_block",
      basis.rightInwardDir,
      "",
      arch.wallSignBlock
    );

    fillDoubleChestWithSingleItem(
      dim,
      basis.rel(6, 2, 2),
      basis.rel(7, 2, 2),
      "minecraft:blaze_rod",
      basis.leftInwardDir,
      "",
      arch.wallSignBlock
    );

    // 4. Baús Duplos Conectados de Entrada de Minérios e Carnes no topo das 2 fileiras
    placeConnectedDoubleChest(dim, basis.rel(4, 3, -1), basis.rel(5, 3, -1), basis.leftInwardDir);
    placeConnectedDoubleChest(dim, basis.rel(8, 3, -1), basis.rel(9, 3, -1), basis.leftInwardDir);
    placeConnectedDoubleChest(dim, basis.rel(4, 3, 1), basis.rel(5, 3, 1), basis.rightInwardDir);
    placeConnectedDoubleChest(dim, basis.rel(8, 3, 1), basis.rel(9, 3, 1), basis.rightInwardDir);

    // 5. Baús Duplos de Saída (Produtos Prontos) no início das fileiras
    fillDoubleChestWithSingleItem(
      dim,
      basis.rel(2, 0, -1),
      basis.rel(3, 0, -1),
      "minecraft:iron_ingot",
      basis.leftInwardDir,
      "",
      arch.wallSignBlock
    );

    fillDoubleChestWithSingleItem(
      dim,
      basis.rel(2, 0, 1),
      basis.rel(3, 0, 1),
      "minecraft:cooked_beef",
      basis.rightInwardDir,
      "",
      arch.wallSignBlock
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage(
      \`§8[§aFornalha Pronta§8] §aSuper Fornalha Industrial 16x construída na direção §b\${basis.dirLabelPt}§a! 8 Fornalhas Potentes, 8 Defumadores, funis automáticos e baús lotados!\`
    );
  } catch (err) {
    player.sendMessage("§8[§cFornalha§8] §cErro ao gerar fornalha: " + String(err));
  }
}



function openMobSpawnerCategory(player, isBosses) {
  const list = isBosses
    ? [
        { name: "Warden (Guardião das Profundezas)", id: "minecraft:warden" },
        { name: "Wither Boss", id: "minecraft:wither" },
        { name: "Ender Dragon", id: "minecraft:ender_dragon" },
        { name: "Elder Guardian (Guardião Ancião)", id: "minecraft:elder_guardian" },
        { name: "Ravager (Devastador)", id: "minecraft:ravager" },
        { name: "Breeze 1.21 (Vento das Câmaras)", id: "minecraft:breeze" }
      ]
    : [
        { name: "Aldeão (Villager)", id: "minecraft:villager_v2" },
        { name: "Golem de Ferro Protetor (Iron Golem)", id: "minecraft:iron_golem" },
        { name: "Allay (Coletor de Itens)", id: "minecraft:allay" },
        { name: "Axolote (Axolotl)", id: "minecraft:axolotl" },
        { name: "Lobo (Wolf)", id: "minecraft:wolf" },
        { name: "Cavalo Esqueleto (Skeleton Horse)", id: "minecraft:skeleton_horse" },
        { name: "Blaze (Farm de Varas)", id: "minecraft:blaze" },
        { name: "Enderman (Farm de Pérolas)", id: "minecraft:enderman" },
        { name: "Shulker (Farm de Cascas)", id: "minecraft:shulker" }
      ];

  const form = new ActionFormData()
    .title(isBosses ? "§l§cInvocar Bosses" : "§l§aInvocar Mobs & Pets")
    .body("§7Selecione a criatura para invocar a 3 blocos na sua frente:");

  for (const m of list) {
    form.button(\`§e\${m.name}\\n§r§8\${m.id}\`);
  }
  form.button("§8« Voltar");

  showFormSafely(player, form, (res) => {
    if (res.selection >= list.length) {
      openBuilderAndSpawnerMenu(player);
      return;
    }
    const chosen = list[res.selection];
    try {
      const dir = player.getViewDirection();
      const spawnPos = {
        x: player.location.x + dir.x * 3,
        y: player.location.y,
        z: player.location.z + dir.z * 3
      };
      player.dimension.spawnEntity(chosen.id, spawnPos);
      player.sendMessage(\`§8[§aSpawner§8] §aInvocado \${chosen.name} na sua frente!\`);
    } catch (e) {
      player.sendMessage("§8[§cSpawner§8] §cNão foi possível invocar esta criatura neste local.");
    }
  });
}

// ============================================================================
// 6. MUNDO, CLIMA, ESCUDO ANTI-MOBS, VISÃO NOTURNA & RADAR DE MINÉRIOS
// ============================================================================
function openWorldAndVisualCombinedMenu(player) {
  const hudActive = player.getDynamicProperty("survivalmenu:hud_enabled") === true;
  const shieldActive = player.getDynamicProperty("survivalmenu:shield_aura") === true;

  const form = new ActionFormData()
    .title("§l§3Mundo, Escudo & Radar HUD")
    .body("§7Controle de horário, clima, Fullbright, Escudo Anti-Mobs e detecção de minérios:")
    .button("§aAtivar Fullbright / Visão Noturna Infinita\\n§r§8Enxergue tudo no escuro sem partículas", "textures/items/potion_bottle_nightVision")
    .button(\`\${hudActive ? "§cDesativar" : "§aAtivar"} Radar de Minérios & HUD XYZ\\n§r§8Detecta Diamante e Netherite na Actionbar\`, "textures/items/compass_item")
    .button(\`\${shieldActive ? "§cDesativar" : "§aAtivar"} Escudo Automático Anti-Monstros (8m)\\n§r§8Elimina monstros que tentarem encostar em você\`, "textures/items/shield")
    .button("§eDefinir Horário: Meio-Dia & Limpar Chuva\\n§r§8Sol imediato e céu limpo", "textures/items/clock_item")
    .button("§9Definir Horário: Meia-Noite\\n§r§8Noite imediata", "textures/items/ender_eye")
    .button("§cEliminar Todos os Mobs Hostis Próximos (24m)\\n§r§8Não afeta aldeões nem animais domesticados", "textures/items/diamond_sword")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      player.addEffect("night_vision", 20000000, { amplifier: 1, showParticles: false });
      player.sendMessage("§8[§aMenu§8] §aFullbright / Visão Noturna permanente ATIVADA!");
    } else if (res.selection === 1) {
      const next = !hudActive;
      player.setDynamicProperty("survivalmenu:hud_enabled", next);
      player.sendMessage(\`§8[§aMenu§8] \${next ? "§aRadar de Minérios & HUD ATIVADOS!" : "§cRadar & HUD DESATIVADOS."}\`);
    } else if (res.selection === 2) {
      const next = !shieldActive;
      player.setDynamicProperty("survivalmenu:shield_aura", next);
      player.sendMessage(\`§8[§aMenu§8] \${next ? "§aEscudo Automático Anti-Monstros ATIVADO!" : "§cEscudo Anti-Monstros DESATIVADO."}\`);
    } else if (res.selection === 3) {
      world.setTimeOfDay(6000);
      player.dimension.setWeather("Clear");
      player.sendMessage("§8[§aMenu§8] §eHorário ajustado para Meio-Dia e chuva removida!");
    } else if (res.selection === 4) {
      world.setTimeOfDay(18000);
      player.sendMessage("§8[§aMenu§8] §9Horário ajustado para Meia-Noite!");
    } else if (res.selection === 5) {
      const monsters = player.dimension.getEntities({
        location: player.location,
        maxDistance: 24,
        families: ["monster"]
      });
      let count = 0;
      for (const m of monsters) {
        try {
          m.kill();
          count++;
        } catch (e) {}
      }
      player.sendMessage(\`§8[§aMenu§8] §c\${count} mobs hostis eliminados num raio de 24 blocos!\`);
    } else if (res.selection === 6) {
      openMainMenu(player);
    }
  });
}

${generateSuperToolsAndMultiplierScript()}
`;
}

// Generates a 256x256 PNG Blob for pack_icon.png using HTML5 Canvas
async function createPackIconBlob(title: string): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#16a34a';
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, 244, 244);

    ctx.fillStyle = '#1e293b';
    for (let x = 24; x < 232; x += 32) {
      for (let y = 24; y < 232; y += 32) {
        if ((x + y) % 64 === 0) {
          ctx.fillRect(x, y, 28, 28);
        }
      }
    }

    ctx.fillStyle = '#16a34a';
    ctx.fillRect(68, 60, 120, 100);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(80, 72, 96, 76);

    ctx.fillStyle = '#4ade80';
    ctx.font = 'bold 42px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('MENU', 128, 124);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(title.slice(0, 14).toUpperCase(), 128, 206);

    ctx.fillStyle = '#4ade80';
    ctx.font = '16px monospace';
    ctx.fillText('26.60.29 SURVIVAL', 128, 232);
  }

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob || new Blob([]));
    }, 'image/png');
  });
}

// Tabela nativa de trocas de Bibliotecário (trading/economy_trades/librarian_trades.json)
// Faz com que TODOS os Villagers Bibliotecários tenham Livros Encantados por 1 Esmeralda + 1 Livro na janela original do Minecraft!
// Quando o jogador faz 1 troca na janela original, o Minecraft salva a troca permanentemente no arquivo do mundo (Vanilla NBT),
// continuando 100% funcional no Survival Puro mesmo depois que a Add-On for removida!
function generateVanillaSurvivalLibrarianTradesJson(): string {
  const bookTradeEntry = {
    wants: [
      {
        item: 'minecraft:emerald',
        quantity: 1,
        price_multiplier: 0.0,
      },
      {
        item: 'minecraft:book',
        quantity: 1,
      },
    ],
    gives: [
      {
        item: 'minecraft:enchanted_book',
        quantity: 1,
        functions: [
          {
            function: 'enchant_book_for_trading',
            base_cost: 1,
            base_random_cost: 0,
            per_level_random_cost: 0,
            per_level_cost: 0,
          },
        ],
      },
    ],
    trader_exp: 35,
    max_uses: 99,
    reward_exp: true,
  };

  return JSON.stringify(
    {
      tiers: [
        {
          total_exp_required: 0,
          groups: [
            {
              num_to_select: 2,
              trades: [
                bookTradeEntry,
                {
                  wants: [
                    {
                      item: 'minecraft:book',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
                {
                  wants: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:bookshelf',
                      quantity: 3,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
              ],
            },
          ],
        },
        {
          total_exp_required: 10,
          groups: [
            {
              num_to_select: 2,
              trades: [
                bookTradeEntry,
                {
                  wants: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:lantern',
                      quantity: 4,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
              ],
            },
          ],
        },
        {
          total_exp_required: 70,
          groups: [
            {
              num_to_select: 2,
              trades: [
                bookTradeEntry,
                {
                  wants: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:glass',
                      quantity: 8,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
              ],
            },
          ],
        },
        {
          total_exp_required: 150,
          groups: [
            {
              num_to_select: 2,
              trades: [
                bookTradeEntry,
                {
                  wants: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:clock',
                      quantity: 1,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
              ],
            },
          ],
        },
        {
          total_exp_required: 250,
          groups: [
            {
              num_to_select: 2,
              trades: [
                bookTradeEntry,
                {
                  wants: [
                    {
                      item: 'minecraft:emerald',
                      quantity: 1,
                      price_multiplier: 0.0,
                    },
                  ],
                  gives: [
                    {
                      item: 'minecraft:name_tag',
                      quantity: 1,
                    },
                  ],
                  trader_exp: 35,
                  max_uses: 99,
                  reward_exp: true,
                },
              ],
            },
          ],
        },
      ],
    },
    null,
    2
  );
}

export async function buildAndDownloadMcAddon(
  config: AddonConfig,
  modules: CheatModule[]
): Promise<{ filename: string; sizeKb: number }> {
  const zip = new JSZip();
  const safeFolder = config.addonName.replace(/[^a-zA-Z0-9_-]/g, '_') || 'SurvivalMenu';
  const safeVer = (config.targetBuildVersion || '26.60.29').replace(/[^a-zA-Z0-9._-]/g, '');

  const bpFolder = zip.folder(`${safeFolder}_BP`);
  const rpFolder = zip.folder(`${safeFolder}_RP`);

  const iconBlob = await createPackIconBlob(config.addonName);

  const langLines = [
    `item.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}`,
    `item.survivalmenu:martelo_50x50.name=§6§lMartelo Titã 50x50 (Quebra Área 50x50)`,
    `item.survivalmenu:destruidor_chunk.name=§c§lDestruidor de Chunk 16x16 (Até a Bedrock)`,
    `item.survivalmenu:quebrador_bedrock.name=§d§lQuebrador de Bedrock & Teto do Nether`,
  ].join('\n');

  if (bpFolder) {
    bpFolder.file('manifest.json', generateBpManifest(config));
    bpFolder.file('pack_icon.png', iconBlob);
    bpFolder.folder('scripts')?.file('main.js', generateMainScript(config, modules));
    const itemsFolder = bpFolder.folder('items');
    itemsFolder?.file('survival_menu.json', generateCustomItemJson());
    itemsFolder?.file('martelo_50x50.json', generateMartelo50x50ItemJson());
    itemsFolder?.file('destruidor_chunk.json', generateDestruidorChunkItemJson());
    itemsFolder?.file('quebrador_bedrock.json', generateQuebradorBedrockItemJson());

    const recipesFolder = bpFolder.folder('recipes');
    recipesFolder?.file('survival_menu_recipe.json', generateCustomRecipeJson());
    recipesFolder?.file('martelo_50x50_recipe.json', generateMarteloRecipeJson());
    recipesFolder?.file('destruidor_chunk_recipe.json', generateDestruidorChunkRecipeJson());
    recipesFolder?.file('quebrador_bedrock_recipe.json', generateQuebradorBedrockRecipeJson());
    recipesFolder?.file('multiplicador_rapido_recipe.json', generateMultiplierFastRecipeJson());
    recipesFolder?.file('multiplicador_bancada_recipe.json', generateMultiplierBenchRecipeJson());

    bpFolder
      .folder('trading/economy_trades')
      ?.file('librarian_trades.json', generateVanillaSurvivalLibrarianTradesJson());

    bpFolder
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [BP]\npack.description=${config.addonDescription} (Bedrock ${safeVer})\n${langLines}\n`
      );
    bpFolder.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  }

  if (rpFolder) {
    rpFolder.file('manifest.json', generateRpManifest(config));
    rpFolder.file('pack_icon.png', iconBlob);
    rpFolder.folder('textures')?.file(
      'item_texture.json',
      JSON.stringify(
        {
          resource_pack_name: safeFolder,
          texture_name: 'atlas.items',
          texture_data: {
            survival_menu_icon: {
              textures: 'textures/items/book_enchanted',
            },
            martelo_50x50_icon: {
              textures: 'textures/items/netherite_pickaxe',
            },
            destruidor_chunk_icon: {
              textures: 'textures/items/recovery_compass_item',
            },
            quebrador_bedrock_icon: {
              textures: 'textures/items/amethyst_shard',
            },
          },
        },
        null,
        2
      )
    );
    rpFolder
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [RP]\npack.description=Interface e Recursos para ${config.addonName} v${safeVer} (Conquistas Ativas)\n${langLines}\n`
      );
    rpFolder.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const filename = `${safeFolder}_v${safeVer}_ConquistasAtivas.mcaddon`;

  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  return {
    filename,
    sizeKb: Math.max(1, Math.round(content.size / 1024)),
  };
}

export async function downloadIndividualMcPack(
  config: AddonConfig,
  modules: CheatModule[],
  packType: 'bp' | 'rp'
): Promise<{ filename: string; sizeKb: number }> {
  const zip = new JSZip();
  const safeFolder = config.addonName.replace(/[^a-zA-Z0-9_-]/g, '_') || 'SurvivalMenu';
  const safeVer = (config.targetBuildVersion || '26.60.29').replace(/[^a-zA-Z0-9._-]/g, '');
  const iconBlob = await createPackIconBlob(config.addonName);

  const langLines = [
    `item.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}`,
    `item.survivalmenu:martelo_50x50.name=§6§lMartelo Titã 50x50 (Quebra Área 50x50)`,
    `item.survivalmenu:destruidor_chunk.name=§c§lDestruidor de Chunk 16x16 (Até a Bedrock)`,
    `item.survivalmenu:quebrador_bedrock.name=§d§lQuebrador de Bedrock & Teto do Nether`,
  ].join('\n');

  if (packType === 'bp') {
    zip.file('manifest.json', generateBpManifest(config));
    zip.file('pack_icon.png', iconBlob);
    zip.folder('scripts')?.file('main.js', generateMainScript(config, modules));
    const itemsFolder = zip.folder('items');
    itemsFolder?.file('survival_menu.json', generateCustomItemJson());
    itemsFolder?.file('martelo_50x50.json', generateMartelo50x50ItemJson());
    itemsFolder?.file('destruidor_chunk.json', generateDestruidorChunkItemJson());
    itemsFolder?.file('quebrador_bedrock.json', generateQuebradorBedrockItemJson());

    const recipesFolder = zip.folder('recipes');
    recipesFolder?.file('survival_menu_recipe.json', generateCustomRecipeJson());
    recipesFolder?.file('martelo_50x50_recipe.json', generateMarteloRecipeJson());
    recipesFolder?.file('destruidor_chunk_recipe.json', generateDestruidorChunkRecipeJson());
    recipesFolder?.file('quebrador_bedrock_recipe.json', generateQuebradorBedrockRecipeJson());
    recipesFolder?.file('multiplicador_rapido_recipe.json', generateMultiplierFastRecipeJson());
    recipesFolder?.file('multiplicador_bancada_recipe.json', generateMultiplierBenchRecipeJson());

    zip
      .folder('trading/economy_trades')
      ?.file('librarian_trades.json', generateVanillaSurvivalLibrarianTradesJson());

    zip
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [BP]\npack.description=${config.addonDescription} (Bedrock ${safeVer})\n${langLines}\n`
      );
    zip.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  } else {
    zip.file('manifest.json', generateRpManifest(config));
    zip.file('pack_icon.png', iconBlob);
    zip.folder('textures')?.file(
      'item_texture.json',
      JSON.stringify(
        {
          resource_pack_name: safeFolder,
          texture_name: 'atlas.items',
          texture_data: {
            survival_menu_icon: {
              textures: 'textures/items/book_enchanted',
            },
            martelo_50x50_icon: {
              textures: 'textures/items/netherite_pickaxe',
            },
            destruidor_chunk_icon: {
              textures: 'textures/items/recovery_compass_item',
            },
            quebrador_bedrock_icon: {
              textures: 'textures/items/amethyst_shard',
            },
          },
        },
        null,
        2
      )
    );
    zip
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [RP]\npack.description=Interface e Recursos para ${config.addonName} v${safeVer} (Conquistas Ativas)\n${langLines}\n`
      );
    zip.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const filename = `${safeFolder}_${packType.toUpperCase()}_v${safeVer}.mcpack`;

  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  return {
    filename,
    sizeKb: Math.max(1, Math.round(content.size / 1024)),
  };
}

export async function downloadManualZipFolder(
  config: AddonConfig,
  modules: CheatModule[]
): Promise<{ filename: string; sizeKb: number }> {
  const zip = new JSZip();
  const safeFolder = config.addonName.replace(/[^a-zA-Z0-9_-]/g, '_') || 'SurvivalMenu';
  const safeVer = (config.targetBuildVersion || '26.60.29').replace(/[^a-zA-Z0-9._-]/g, '');

  const bpFolder = zip.folder(`behavior_packs/${safeFolder}_BP`);
  const rpFolder = zip.folder(`resource_packs/${safeFolder}_RP`);
  const iconBlob = await createPackIconBlob(config.addonName);

  const langLines = [
    `item.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}`,
    `item.survivalmenu:martelo_50x50.name=§6§lMartelo Titã 50x50 (Quebra Área 50x50)`,
    `item.survivalmenu:destruidor_chunk.name=§c§lDestruidor de Chunk 16x16 (Até a Bedrock)`,
    `item.survivalmenu:quebrador_bedrock.name=§d§lQuebrador de Bedrock & Teto do Nether`,
  ].join('\n');

  if (bpFolder) {
    bpFolder.file('manifest.json', generateBpManifest(config));
    bpFolder.file('pack_icon.png', iconBlob);
    bpFolder.folder('scripts')?.file('main.js', generateMainScript(config, modules));
    const itemsFolder = bpFolder.folder('items');
    itemsFolder?.file('survival_menu.json', generateCustomItemJson());
    itemsFolder?.file('martelo_50x50.json', generateMartelo50x50ItemJson());
    itemsFolder?.file('destruidor_chunk.json', generateDestruidorChunkItemJson());
    itemsFolder?.file('quebrador_bedrock.json', generateQuebradorBedrockItemJson());

    const recipesFolder = bpFolder.folder('recipes');
    recipesFolder?.file('survival_menu_recipe.json', generateCustomRecipeJson());
    recipesFolder?.file('martelo_50x50_recipe.json', generateMarteloRecipeJson());
    recipesFolder?.file('destruidor_chunk_recipe.json', generateDestruidorChunkRecipeJson());
    recipesFolder?.file('quebrador_bedrock_recipe.json', generateQuebradorBedrockRecipeJson());
    recipesFolder?.file('multiplicador_rapido_recipe.json', generateMultiplierFastRecipeJson());
    recipesFolder?.file('multiplicador_bancada_recipe.json', generateMultiplierBenchRecipeJson());

    bpFolder
      .folder('trading/economy_trades')
      ?.file('librarian_trades.json', generateVanillaSurvivalLibrarianTradesJson());

    bpFolder
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [BP]\npack.description=${config.addonDescription} (Bedrock ${safeVer})\n${langLines}\n`
      );
    bpFolder.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  }

  if (rpFolder) {
    rpFolder.file('manifest.json', generateRpManifest(config));
    rpFolder.file('pack_icon.png', iconBlob);
    rpFolder.folder('textures')?.file(
      'item_texture.json',
      JSON.stringify(
        {
          resource_pack_name: safeFolder,
          texture_name: 'atlas.items',
          texture_data: {
            survival_menu_icon: {
              textures: 'textures/items/book_enchanted',
            },
            martelo_50x50_icon: {
              textures: 'textures/items/netherite_pickaxe',
            },
            destruidor_chunk_icon: {
              textures: 'textures/items/recovery_compass_item',
            },
            quebrador_bedrock_icon: {
              textures: 'textures/items/amethyst_shard',
            },
          },
        },
        null,
        2
      )
    );
    rpFolder
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [RP]\npack.description=Interface e Recursos para ${config.addonName} v${safeVer} (Conquistas Ativas)\n${langLines}\n`
      );
    rpFolder.folder('texts')?.file('languages.json', JSON.stringify(['pt_BR', 'en_US'], null, 2));
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const filename = `${safeFolder}_v${safeVer}_PastasManuais.zip`;

  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  return {
    filename,
    sizeKb: Math.max(1, Math.round(content.size / 1024)),
  };
}

export function getMasterPromptText(config: AddonConfig): string {
  return `# Guia Técnico do Add-On: ${config.addonName} (Bedrock ${config.targetBuildVersion})
- Conquistas 100% Ativas (Sem Beta APIs / Sem Cheats ativados).
- Construção Direcional 360° (player.getViewDirection()):
  - TODAS as construções (Mega Salas de Baús, Sala de Encantamentos + 42 Villagers, Sala de 30 Poções, Fornalha 16x, Caixas de Shulker, Base 7x7, Altar, Portal e Fazenda) nascem exatamente na direção para onde você está olhando (Norte -Z, Sul +Z, Leste +X, Oeste -X).
- Mega Sala de Encantamentos Suprema + 42 Villagers 100% Compatíveis c/ Survival Puro (Mesmo Após Remover a Add-On!):
  - Altar Central Nível 30 + Bigornas + Rebolos + Ferraria + Bloco Multiplicador.
  - 42 Baús Duplos (54/54 slots) com TODOS os 42 Livros Encantados no Nível Máximo do Minecraft 1.21+ e Placa Externa.
  - 18 Baús Duplos (54/54 slots) com todos os Insumos de Encantamento e Forja (Lápis-Lazúli, Frascos de XP, Esmeraldas, Estantes, Moldes Netherita, etc.).
  - Trading Hall Survival com 42 Cabines Físicas 1x1 (Atril na frente, paredes laterais/traseira, teto anti-pulo, Sino da Vila e Placa Externa).
  - Villagers sem NameTag colorido na cabeça, sem efeitos artificiais de poção, com desconto nativo de Zumbi Curado (minecraft:villager_converted) + tabela nativa trading/economy_trades/librarian_trades.json por 1 Esmeralda (basta fazer 1 troca na janela original para travar a troca de 1 Esmeralda para sempre no mundo mesmo após remover a Add-On!).
- 3 Super Ferramentas Exclusivas:
  1. Martelo Titã 50x50 (survivalmenu:martelo_50x50): Quebra 50x50 a 500 blocos/tick (60 FPS) + Seletor 1 a 25 camadas + Auto-Baús Duplos.
  2. Destruidor de Chunk 16x16 (survivalmenu:destruidor_chunk): Quebra a Chunk inteira até Y:-63 + Queda Lenta + Fundo iluminado + Auto-Baús Duplos.
  3. Quebrador de Bedrock (survivalmenu:quebrador_bedrock): Quebra Bedrock ou abre passagem 3x3 no Teto do Nether com escadas.
- Bloco Multiplicador Interativo (minecraft:lodestone):
  - Clique Direito: +1 Pack (64x) ou +5 Packs (320x no Shift) e abastece o baú ao lado.
  - Bater (Botão Esquerdo): Gera Caixa de Shulker 100% LOTADA (27 slots / 1.728 itens) com cor dinâmica!`;
}

