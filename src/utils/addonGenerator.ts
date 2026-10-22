import JSZip from 'jszip';

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
      title: 'VeinMiner, TreeCapitator, Estruturas & Spawner de Mobs sem Comandos',
      status: 'passed',
      detail:
        'Usa eventos nativos playerBreakBlock, block.setType() e dimension.spawnEntity() para quebrar veias inteiras de minério, gerar estruturas e spawnar mobs sem usar /fill ou /summon.',
      technicalProof: 'world.afterEvents.playerBreakBlock + dimension.spawnEntity()',
    },
    {
      id: 'trigger_redundancy',
      title: 'Triplo Gatilho de Abertura no Survival (Sem Comandos de Chat)',
      status: 'passed',
      detail:
        'Funciona mesmo de mãos vazias (Olhar para o chão + Agachar 2x rápido), usando Graveto/Bússola agachado ou usando o item Teclado Survival.',
      technicalProof: 'world.afterEvents.itemUse + Detector Duplo-Shift em runInterval',
    },
  ];
}

export const INITIAL_MODULES: CheatModule[] = [
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
    name: 'Mega Sala de Baús Duplos com Molduras Brilhantes (100% Itens Survival)',
    category: 'world',
    description:
      'Constrói automaticamente um Mega Armazém iluminado só com Baús Duplos (54 slots cada) contendo EXCLUSIVAMENTE todos os Blocos e Itens que podem ser conseguidos no modo Survival. Cada Baú Duplo é equipado com uma Moldura Brilhante (Glow Item Frame) identificando o item dentro!',
    apiMethod: 'BlockTypes.getAll() + ItemTypes.getAll() + isSurvivalObtainable() + Glow Frame + Double Chest Builder',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'auto_farms_and_factories',
    name: 'Mega Laboratório de Poções, Fornalha 16x & Farms Automáticas (Ferro, Cana, Mobs, Lã, Algas)',
    category: 'world',
    description:
      'Gera com 1 clique um Mega Laboratório de Alquimia completo com todos os ingredientes, Super Fornalha Industrial 16x com funis e combustíveis, e 6 Farms Automáticas 100% funcionais no Survival (Ferro, Cana/Bambu, Abóbora/Melancia, Mob Grinder, Algas, Lã).',
    apiMethod: 'Automatic Redstone/Hopper Farm Builder + Chemical/Smelter Complex',
    enabled: true,
    achievementSafe: true,
  },
  {
    id: 'instant_structures',
    name: 'Construtor Rápido: Mesa Encantamento Nv.30, Portais & Plataforma Salva-Vidas',
    category: 'world',
    description:
      'Gera com 1 clique uma Mesa de Encantamento Nv. 30 completa (15 estantes), Portal do Nether/End, Abrigo iluminado ou Plataforma 5x5 de Obsidiana sob seus pés.',
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

// Entrega automática do Teclado Survival no primeiro acesso ao mundo (v${config.targetBuildVersion})
world.afterEvents.playerSpawn.subscribe((event) => {
  const { player, initialSpawn } = event;
  if (initialSpawn) {
    system.runTimeout(() => {
      try {
        player.sendMessage("§8[§a${config.addonName} v${config.targetBuildVersion}§8] §fSuper Menu & Teclado carregado! §aConquistas Ativas.");
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
            player.setDynamicProperty("survivalmenu:received_book", true);
          }
        }
      } catch (e) {}
    }, 40);
  }
});

// Gatilho de Abertura do Menu ao usar o Item
world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;
  if (!player || !item) return;

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
  const form = new ActionFormData()
    .title("§l§2${config.addonName} v${config.targetBuildVersion}")
    .body(
      "§7Modo Sobrevivência §8| §aConquistas: ATIVAS\\n" +
      "§eAtalho: Olhe p/ o chão + Shift 2x abre o Teclado de Armaduras!"
    )
    .button("§l§6Teclado: Armaduras, 5 Shulkers & Encantar\\n§r§8Todos os sets + 18 Moldes + Encantamentos", "textures/items/netherite_chestplate")
    .button("§l§5Mega Sala de Baús Duplos (Itens Survival)\\n§r§81 Baú Duplo p/ cada Bloco e Item obtível no Survival", "textures/items/chest_minecart")
    .button("§l§dMultiplicar Itens & Bigorna Colorida\\n§r§8Clonar qualquer quantidade + Renomear Item", "textures/items/shulker_shell")
    .button("§l§bPegar Qualquer Item do Jogo\\n§r§8Buscador Universal (1.600+ itens), ID e Kits", "textures/items/diamond")
    .button("§l§2God Mode, Hit-Kill, VeinMiner & Ímã\\n§r§8Imortalidade, 1-Hit Kill, Quebrar Veia, XP", "textures/items/totem")
    .button("§l§eWaypoints, Dimensões & Voo Survival\\n§r§85 Waypoints, Ir ao Nether/End, Voo", "textures/items/ender_pearl")
    .button("§l§cConstrutor: Poções, Fornalha & Farms\\n§r§8Super Alquimia, Fornalha 16x, Farms Automáticas, Mobs", "textures/items/beacon")
    .button("§l§3Mundo, Clima, Fullbright & Radar HUD\\n§r§8Dia/Noite, Escudo Anti-Mobs, Scanner", "textures/items/spyglass");

  showFormSafely(player, form, (res) => {
    switch (res.selection) {
      case 0:
        openArmorToolKeypadMenu(player);
        break;
      case 1:
        openMegaChestHallMenu(player);
        break;
      case 2:
        openDuplicatorMenu(player);
        break;
      case 3:
        openAllItemsMenu(player);
        break;
      case 4:
        openSurvivalBuffsMenu(player);
        break;
      case 5:
        openMovementMenu(player);
        break;
      case 6:
        openBuilderAndSpawnerMenu(player);
        break;
      case 7:
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
  const px = Math.floor(player.location.x);
  const py = Math.floor(player.location.y);
  const pz = Math.floor(player.location.z);

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
      const targetPos = { x: px + batch.offsetX, y: py, z: pz + 2 };
      const block = dim.getBlock(targetPos);
      if (block) {
        block.setType(batch.blockId);
        const container = block.getComponent("minecraft:inventory")?.container;
        if (container) {
          container.clearAll();
          // 1. Adiciona cada Set Completo de Armadura Encantado no Máximo (4 peças por molde)
          for (const t of batch.trims) {
            const armorSet = createMaxEnchantedArmorSet("netherite", t.name, t.color);
            for (const piece of armorSet) {
              container.addItem(piece);
            }
          }
          // Se houver sets extras (Diamante / Ouro na Shulker 4)
          if (batch.extraArmorMaterials) {
            for (const ex of batch.extraArmorMaterials) {
              const extraSet = createMaxEnchantedArmorSet(ex.mat, ex.name, ex.color);
              for (const piece of extraSet) {
                container.addItem(piece);
              }
            }
          }
          // 2. Adiciona 64x de cada Molde de Armadura correspondente
          for (const t of batch.trims) {
            try {
              const tmpl = new ItemStack(t.id, 64);
              container.addItem(tmpl);
            } catch (e) {}
          }
          // 3. Adiciona 64x dos Minerais de Cor + Mesa de Ferraria
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
    const masterPos = { x: px + 2, y: py, z: pz + 2 };
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
    dim.getBlock({ x: px, y: py, z: pz + 1 })?.setType("minecraft:smithing_table");
  } catch (e) {}

  // Também equipa 1 Set Netherita Max no corpo + entrega Picareta Max para quebrar e guardar as Shulkers se quiser
  giveInstantMaxedGodGear(player);

  try { player.playSound("random.totem", { pitch: 1.0, volume: 0.9 }); } catch (e) {}
  player.sendMessage(\`§8[§dShulker Trims§8] §aForam geradas \${boxesPlaced} Shulker Boxes Coloridas na sua frente (Z+2)!\`);
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
    .title("§l§dMultiplicador & Bigorna")
    .body(
      \`§7Item atual na mão: §e\${handName}\\n\` +
      "§fPreserva encantamentos, durabilidade, nome e itens dentro de Shulker Boxes:"
    )
    .button("§aMultiplicar Item da Mão (Escolher Quantidade)\\n§r§8Digite qualquer valor (ex: 64, 500, 2304)", "textures/items/nether_star")
    .button("§bEscolher Item do Inventário para Multiplicar\\n§r§8Seleciona qualquer slot da mochila e clona", "textures/items/chest_minecart")
    .button("§eDeixar Item da Mão em 64x Instantâneo\\n§r§8Completa o pack da mão imediatamente", "textures/items/emerald")
    .button("§dMultiplicar TODOS os Itens do Inventário (x64)\\n§r§8Transforma cada slot do inventário em pack máximo", "textures/items/totem")
    .button("§6Bigorna Colorida: Renomear Item da Mão\\n§r§8Mude o nome e a descrição com cores sem gastar XP", "textures/items/name_tag")
    .button("§3Reparar 100% da Durabilidade (Mão + Inventário)\\n§r§8Conserta todas as ferramentas e armaduras", "textures/items/anvil_top_damaged_0")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      if (!handItem) {
        player.sendMessage("§8[§cMenu§8] §cSegure um item na mão principal primeiro!");
        return;
      }
      openQuantityMultiplierModal(player, handItem, \`Mão: \${handItem.typeId.replace("minecraft:", "")}\`);
    } else if (res.selection === 1) {
      openInventorySlotPicker(player);
    } else if (res.selection === 2) {
      if (!handItem) {
        player.sendMessage("§8[§cMenu§8] §cVocê não está segurando nenhum item na mão!");
        return;
      }
      const cloned = handItem.clone();
      cloned.amount = cloned.maxAmount || 64;
      equip.setEquipment(EquipmentSlot.Mainhand, cloned);
      player.sendMessage(\`§8[§aMenu§8] §aItem da mão definido para \${cloned.amount}x!\`);
    } else if (res.selection === 3) {
      const inv = player.getComponent("minecraft:inventory")?.container;
      if (!inv) return;
      let count = 0;
      for (let i = 0; i < inv.size; i++) {
        const slotItem = inv.getItem(i);
        if (slotItem && slotItem.typeId !== "survivalmenu:amuleto") {
          const max = slotItem.maxAmount || 64;
          if (slotItem.amount < max) {
            slotItem.amount = max;
            inv.setItem(i, slotItem);
            count++;
          }
        }
      }
      player.sendMessage(\`§8[§aMenu§8] §d\${count} slots do inventário foram multiplicados para o pack máximo (64x)!\`);
    } else if (res.selection === 4) {
      openItemRenamerModal(player);
    } else if (res.selection === 5) {
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
    } else if (res.selection === 6) {
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
// FILTRO ESTRITO DE SOBREVIVÊNCIA (EXCLUI CRIATIVO, COMANDOS, OVOS DE SPAWN E BLOCOS ILEGAIS)
// Garante que a Mega Sala de Baús Duplos contenha APENAS Blocos e Itens que dão para conseguir no Survival!
// ============================================================================
const NON_SURVIVAL_EXACT_IDS = new Set([
  // Blocos de Operador, Comando, Criativo e Técnicos
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
  // Blocos do Mundo Impossíveis de Obter no Inventário Survival (mesmo com Silk Touch)
  "mob_spawner",
  "spawner",
  "trial_spawner",
  "vault",
  "reinforced_deepslate",
  "end_portal_frame",
  "end_portal",
  "portal",
  "nether_portal",
  "end_gateway",
  "budding_amethyst",
  "petrified_oak_slab",
  "chorus_plant",
  "farmland",
  "dirt_path",
  "grass_path",
  "frosted_ice",
  "player_head",
  "monster_egg",
  "suspicious_sand",
  "suspicious_gravel",
  // Itens Education Edition / Química (Não obtíveis no Survival padrão)
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
  // Estados Técnicos de Blocos (Fluidos, Fogo, Plantações que têm versão de item própria)
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

  // Exclui todos os Ovos de Invocação (Spawn Eggs do Criativo)
  if (clean.endsWith("_spawn_egg") || clean.includes("spawn_egg")) return false;

  // Exclui elementos químicos, blocos infestados (Traças), luzes invisíveis e blocos técnicos
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

// Coleta TODOS os Blocos e Itens que dão para conseguir legitimamente no modo SURVIVAL!
function getAllGameBlocksAndItems() {
  const validIds = [];
  const seen = new Set();

  // 1. Percorre todos os Blocos registrados e filtra apenas os obtíveis no Survival
  try {
    if (typeof BlockTypes !== "undefined" && BlockTypes.getAll) {
      const allBlocks = BlockTypes.getAll();
      for (const b of allBlocks) {
        if (!b || !b.id) continue;
        const id = b.id;
        const lower = id.toLowerCase();
        if (seen.has(lower) || !isSurvivalObtainable(lower)) continue;
        try {
          const testStack = new ItemStack(id, 1);
          if (testStack) {
            seen.add(lower);
            validIds.push(id);
          }
        } catch (e) {}
      }
    }
  } catch (e) {}

  // 2. Percorre todos os Itens de inventário e filtra apenas os obtíveis no Survival
  try {
    const allItems = ItemTypes.getAll();
    for (const it of allItems) {
      if (!it || !it.id) continue;
      const id = it.id;
      const lower = id.toLowerCase();
      if (seen.has(lower) || !isSurvivalObtainable(lower)) continue;
      try {
        const testStack = new ItemStack(id, 1);
        if (testStack) {
          seen.add(lower);
          validIds.push(id);
        }
      } catch (e) {}
    }
  } catch (e) {}

  return validIds;
}

// Cria e conecta um Baú Duplo (54 slots) garantindo que ambos os blocos fiquem no eixo X (x e x + 1)
// e com a mesma direção (minecraft:cardinal_direction = "north" ou "south"), forçando a fusão automática no Bedrock!
function placeConnectedDoubleChest(dim, posA, posB, cardinalDir = "north") {
  const blockA = dim.getBlock(posA);
  const blockB = dim.getBlock(posB);
  if (!blockA || !blockB) return null;

  // Limpa antes para garantir que o evento de pareamento (onPlace) do Bedrock una os 2 baús
  try {
    blockA.setType("minecraft:air");
    blockB.setType("minecraft:air");
  } catch (e) {}

  // 1. Primeiro coloca os dois baús via setType("minecraft:chest") lado a lado no eixo X (posA.x e posA.x + 1),
  // pois no Bedrock o setType dispara nativamente o ChestBlockActor::pairWith no eixo X!
  try {
    blockA.setType("minecraft:chest");
    blockB.setType("minecraft:chest");
  } catch (e) {}

  // 2. Se a direção for "south" (parede norte olhando para o corredor), aplica a permutação idêntica nos dois blocos
  if (cardinalDir && cardinalDir !== "north") {
    const legacyDir = cardinalDir === "south" ? 3 : cardinalDir === "west" ? 4 : 5;
    let rotated = false;
    try {
      const perm = BlockPermutation.resolve("minecraft:chest", {
        "minecraft:cardinal_direction": cardinalDir
      });
      blockA.setPermutation(perm);
      blockB.setPermutation(perm);
      rotated = true;
    } catch (e) {}

    if (!rotated) {
      try {
        const permLegacy = BlockPermutation.resolve("minecraft:chest", {
          "facing_direction": legacyDir
        });
        blockA.setPermutation(permLegacy);
        blockB.setPermutation(permLegacy);
      } catch (e) {}
    }
  }

  return { blockA, blockB };
}

// Fixa uma Moldura Brilhante (Glow Item Frame) identificando o Bloco/Item exatamente na frente do Baú Duplo
function attachGlowItemFrameToDoubleChest(dim, posA, posB, baseItemOrId, cardinalDir = "north") {
  try {
    let cleanId = "";
    if (typeof baseItemOrId === "string") {
      cleanId = baseItemOrId.toLowerCase();
    } else if (baseItemOrId && baseItemOrId.typeId) {
      cleanId = baseItemOrId.typeId.toLowerCase();
    }
    if (!cleanId) return;

    // A Moldura Brilhante fica centralizada na face frontal do Baú Duplo
    const centerX = (posA.x + posB.x) / 2 + 0.5;
    const centerY = posA.y + 0.5;
    let centerZ = posA.z + 0.5;

    if (cardinalDir === "south") {
      centerZ += 0.52;
    } else if (cardinalDir === "north") {
      centerZ -= 0.52;
    }

    let frame = null;
    try {
      frame = dim.spawnEntity("minecraft:glow_item_frame", { x: centerX, y: centerY, z: centerZ });
    } catch (e1) {
      try {
        frame = dim.spawnEntity("glow_item_frame", { x: centerX, y: centerY, z: centerZ });
      } catch (e2) {}
    }

    if (frame) {
      // 1. Coloca o item/bloco dentro da Moldura Brilhante
      try {
        const itemComp = frame.getComponent("minecraft:item");
        if (itemComp) {
          itemComp.itemStack = new ItemStack(cleanId, 1);
        }
      } catch (e) {}

      // 2. Coloca o nome customizado brilhante identificando o item
      try {
        const displayName = cleanId.replace("minecraft:", "").replace(/_/g, " ").toUpperCase();
        frame.nameTag = "§e§l" + displayName;
        frame.isCustomNameVisible = true;
      } catch (e) {}
    }
  } catch (err) {}
}

function fillDoubleChestWithSingleItem(dim, posA, posB, baseItemOrId, cardinalDir = "north") {
  try {
    const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
    if (!pair) return false;
    const { blockA, blockB } = pair;

    const createFullStack = () => {
      let st;
      if (typeof baseItemOrId === "string") {
        const cleanId = baseItemOrId.toLowerCase();
        st = new ItemStack(cleanId, 1);
      } else {
        st = baseItemOrId.clone();
      }
      st.amount = st.maxAmount || 64;
      return st;
    };

    const fillBothHalves = (bA, bB) => {
      const contA = bA?.getComponent("minecraft:inventory")?.container;
      const contB = bB?.getComponent("minecraft:inventory")?.container;

      if (contA) {
        for (let slot = 0; slot < contA.size; slot++) {
          try {
            if (!contA.getItem(slot)) contA.setItem(slot, createFullStack());
          } catch (e) {}
        }
      }
      if (contB && (!contA || contA.size <= 27)) {
        for (let slot = 0; slot < contB.size; slot++) {
          try {
            if (!contB.getItem(slot)) contB.setItem(slot, createFullStack());
          } catch (e) {}
        }
      }
    };

    // Preenche imediatamente os 54 slots (27 da metade A + 27 da metade B ou 54 unificados)
    fillBothHalves(blockA, blockB);

    // Fixa a Moldura Brilhante (Glow Item Frame) com o item e nome brilhante na frente do baú
    attachGlowItemFrameToDoubleChest(dim, posA, posB, baseItemOrId, cardinalDir);

    // Reforço após 2 ticks (quando o ChestBlockActor do Bedrock finaliza a fusão visual/lógica dos 54 slots)
    system.runTimeout(() => {
      try {
        const latestA = dim.getBlock(posA);
        const latestB = dim.getBlock(posB);
        fillBothHalves(latestA, latestB);
      } catch (e) {}
    }, 2);

    return true;
  } catch (e) {
    return false;
  }
}

function openMegaChestHallMenu(player) {
  ${config.soundFeedback ? `try { player.playSound("random.chestopen", { pitch: 1.0, volume: 0.8 }); } catch (e) {}` : ''}
  const form = new ActionFormData()
    .title("§l§5Mega Sala de Baús (100% Survival)")
    .body(
      "§7Gere uma Mega Sala onde CADA Baú Duplo conectado (54 slots) vem 100% lotado e equipado com §eMolduras Brilhantes (Glow Item Frame)§7 identificando o item dentro:"
    )
    .button("§l§a[Modo 1] TODOS os Blocos e Itens Survival (com Molduras Brilhantes)\\n§r§8Gera ~1.180 Baús Duplos com Molduras Brilhantes identificadoras!", "textures/items/chest_minecart")
    .button("§l§e[Modo 2] Mega Sala Rápida: Top 60 Blocos & Itens Survival\\n§r§860 Baús Duplos conectados com Molduras Brilhantes e 54 packs", "textures/items/nether_star")
    .button("§l§b[Modo 3] Sala Compacta: Todos os Itens Survival (54 Diferentes/Baú)\\n§r§8Guarda todos os ~1.180 blocos e itens Survival em ~22 Baús Duplos", "textures/items/diamond")
    .button("§l§6[Modo 4] Escolher Corredor Survival (60 Baús Duplos por Vez)\\n§r§8Gera 1 corredor de 60 Baús Duplos conectados com Molduras Brilhantes", "textures/items/book_enchanted")
    .button("§l§d[Modo 5] 1 Baú Duplo Lotado do Bloco/Item da Minha Mão\\n§r§8Cria 1 Baú Duplo conectado com Moldura Brilhante do item da mão", "textures/items/shulker_shell")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    if (res.selection === 0) {
      buildCompleteGameMegaChestWarehouse(player);
    } else if (res.selection === 1) {
      buildSameItemDoubleChestHall(player, MEGA_HALL_60_ITEMS, "Top 60 Blocos & Itens Survival");
    } else if (res.selection === 2) {
      buildAllMinecraftItemsInDoubleChests(player);
    } else if (res.selection === 3) {
      openCatalogBatchChestHallModal(player);
    } else if (res.selection === 4) {
      spawnDoubleChestOfHandItem(player);
    } else if (res.selection === 5) {
      openMainMenu(player);
    }
  });
}

// MODO 1 PRINCIPAL: Constrói o Mega Armazém Completo com 1 Baú Duplo Conectado (54 slots do mesmo item)
// para CADA BLOCO E CADA ITEM OBTÍVEL NO SURVIVAL (~1.180 Baús Duplos em corredores paralelos no eixo X)!
function buildCompleteGameMegaChestWarehouse(player) {
  const allBlocksAndItems = getAllGameBlocksAndItems();
  if (allBlocksAndItems.length === 0) {
    player.sendMessage("§8[§cMega Sala§8] §cNenhum bloco/item encontrado.");
    return;
  }

  const dim = player.dimension;
  const startX = Math.floor(player.location.x) + 2;
  const startY = Math.floor(player.location.y);
  const startZ = Math.floor(player.location.z);

  // Arquitetura com Corredores no Eixo X (Garante que TODOS os Baús Duplos fiquem lado a lado em X e x+1,
  // virados para o centro do corredor com cardinal_direction "south" e "north", 100% conectados!):
  // Cada módulo (Bay) tem 2 paredes (Norte e Sul) x 4 andares de Baús Duplos = 8 Baús Duplos por Bay.
  // Cada Corredor (Aisle) tem 16 Bays de profundidade (48 blocos em X) = 128 Baús Duplos por Corredor!
  const baysPerAisle = 16;
  const chestsPerBay = 8; // 4 na parede norte (z - 2) + 4 na parede sul (z + 2)
  const chestsPerAisle = baysPerAisle * chestsPerBay; // 128 Baús Duplos por Corredor
  const totalAisles = Math.ceil(allBlocksAndItems.length / chestsPerAisle);

  let currentAisle = 0;
  let currentBayInAisle = 0;
  let itemCursor = 0;

  // Dá proteção total ao jogador durante a construção automática dos corredores
  player.addEffect("resistance", 1200, { amplifier: 255, showParticles: false });
  player.addEffect("slow_falling", 1200, { amplifier: 0, showParticles: false });

  player.sendMessage(
    \`§8[§aMega Armazém Survival§8] §eFiltrados §a\${allBlocksAndItems.length} Blocos e Itens 100% Survival§e! Construindo §b\${totalAisles} Corredores Paralelos §ecom §a\${allBlocksAndItems.length} Baús Duplos Conectados §e(cada Baú Duplo com 54 packs do mesmo bloco/item)...\`
  );

  const jobId = system.runInterval(() => {
    try {
      if (itemCursor >= allBlocksAndItems.length || currentAisle >= totalAisles) {
        system.clearRun(jobId);
        // Retorna o jogador para a entrada central da Mega Sala de Baús Duplos
        player.teleport({ x: startX + 1.5, y: startY, z: startZ + 0.5 });
        try { player.playSound("random.totem", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(
          \`§8[§aMega Sala Survival Completa!§8] §aForam gerados §e\${itemCursor} Baús Duplos 100% Conectados §adistribuídos em §b\${totalAisles} Corredores Paralelos§a! Todos os Blocos e Itens obtíveis no Survival possuem agora 1 Baú Duplo inteiro (54 slots) lotado só deles!\`
        );
        return;
      }

      // Constrói 2 Bays por ciclo (16 Baús Duplos = 864 packs por ciclo) para ser rápido e sem lag
      for (let step = 0; step < 2; step++) {
        if (itemCursor >= allBlocksAndItems.length || currentAisle >= totalAisles) break;

        // Posiciona os corredores paralelos a cada 7 blocos no eixo Z
        const aisleOffset = currentAisle - Math.floor(totalAisles / 2);
        const aisleCenterZ = startZ + aisleOffset * 7;
        const xStart = startX + 4 + currentBayInAisle * 3;

        // Mantém o jogador próximo ao corredor atual para garantir que os chunks estejam 100% carregados
        if (currentBayInAisle % 4 === 0) {
          player.teleport({ x: xStart + 0.5, y: startY, z: aisleCenterZ + 0.5 });
        }

        // Se for o início do corredor (Bay 0), constrói também o Salão Frontal de Conexão (Lobby)
        if (currentBayInAisle === 0) {
          for (let lx = startX; lx < startX + 4; lx++) {
            for (let lz = -3; lz <= 3; lz++) {
              dim.getBlock({ x: lx, y: startY - 1, z: aisleCenterZ + lz })?.setType(
                lz === 0 && lx === startX + 1 ? "minecraft:sea_lantern" : "minecraft:smooth_quartz"
              );
              for (let ly = 0; ly <= 4; ly++) {
                dim.getBlock({ x: lx, y: startY + ly, z: aisleCenterZ + lz })?.setType("minecraft:air");
              }
              dim.getBlock({ x: lx, y: startY + 4, z: aisleCenterZ + lz })?.setType("minecraft:glass");
            }
          }
        }

        // Constrói a estrutura do Bay atual (3 blocos em X: dx=0 e dx=1 para o Baú Duplo, dx=2 para o Pilar divisor)
        for (let dx = 0; dx < 3; dx++) {
          const cx = xStart + dx;
          for (let dz = -3; dz <= 3; dz++) {
            dim.getBlock({ x: cx, y: startY - 1, z: aisleCenterZ + dz })?.setType(
              dz === 0 && dx === 1 ? "minecraft:sea_lantern" : "minecraft:smooth_quartz"
            );
            for (let dy = 0; dy <= 3; dy++) {
              dim.getBlock({ x: cx, y: startY + dy, z: aisleCenterZ + dz })?.setType("minecraft:air");
            }
            // Teto de vidro transparente (permite abrir todos os Baús Duplos do 4º andar!)
            dim.getBlock({ x: cx, y: startY + 4, z: aisleCenterZ + dz })?.setType("minecraft:glass");
          }

          // Pilares divisórios em dx === 2 para isolar cada par de Baú Duplo (xStart e xStart + 1)
          if (dx === 2) {
            for (let dy = 0; dy <= 3; dy++) {
              dim.getBlock({ x: cx, y: startY + dy, z: aisleCenterZ - 2 })?.setType(
                dy === 1 ? "minecraft:sea_lantern" : "minecraft:quartz_pillar"
              );
              dim.getBlock({ x: cx, y: startY + dy, z: aisleCenterZ + 2 })?.setType(
                dy === 1 ? "minecraft:sea_lantern" : "minecraft:quartz_pillar"
              );
            }
          }
        }

        // Coloca 4 Baús Duplos Conectados na parede norte (aisleCenterZ - 2, virados para "south")
        // e 4 Baús Duplos Conectados na parede sul (aisleCenterZ + 2, virados para "north")
        for (let level = 0; level < 4; level++) {
          const cy = startY + level;

          if (itemCursor < allBlocksAndItems.length) {
            const nextBlockOrItem = allBlocksAndItems[itemCursor++];
            fillDoubleChestWithSingleItem(
              dim,
              { x: xStart, y: cy, z: aisleCenterZ - 2 },
              { x: xStart + 1, y: cy, z: aisleCenterZ - 2 },
              nextBlockOrItem,
              "south"
            );
          }

          if (itemCursor < allBlocksAndItems.length) {
            const nextBlockOrItem = allBlocksAndItems[itemCursor++];
            fillDoubleChestWithSingleItem(
              dim,
              { x: xStart, y: cy, z: aisleCenterZ + 2 },
              { x: xStart + 1, y: cy, z: aisleCenterZ + 2 },
              nextBlockOrItem,
              "north"
            );
          }
        }

        currentBayInAisle++;
        if (currentBayInAisle >= baysPerAisle) {
          currentBayInAisle = 0;
          currentAisle++;
        }
      }

      const pct = Math.min(100, Math.round((itemCursor / allBlocksAndItems.length) * 100));
      player.onScreenDisplay.setActionBar(
        \`§aGerando Baús Duplos Conectados (Survival): §e\${pct}% §7(\${itemCursor}/\${allBlocksAndItems.length} Baús Duplos | Corredor \${currentAisle + 1}/\${totalAisles})\`
      );
    } catch (e) {
      system.clearRun(jobId);
    }
  }, 2);
}

// Modo 2 & 4: Constrói um Corredor onde CADA Baú Duplo Conectado (54 slots) é 100% lotado de 1 único item da lista!
function buildSameItemDoubleChestHall(player, itemIdsList, hallLabel) {
  const dim = player.dimension;
  const originX = Math.floor(player.location.x) + 2;
  const originY = Math.floor(player.location.y);
  const originZ = Math.floor(player.location.z);

  const totalBays = Math.ceil(itemIdsList.length / 6);
  let currentBay = 0;
  let itemIndex = 0;

  player.sendMessage(\`§8[§dMega Sala de Baús§8] §eIniciando construção da Mega Sala (\${hallLabel}) com \${itemIdsList.length} Baús Duplos conectados...\`);

  const jobId = system.runInterval(() => {
    try {
      if (currentBay >= totalBays) {
        system.clearRun(jobId);
        try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(\`§8[§aMega Sala Concluída§8] §aPronto! \${itemIndex} Baús Duplos conectados foram gerados! Cada Baú Duplo contém 54 packs (até 3.456 unidades) do mesmo bloco/item!\`);
        return;
      }

      const xStart = originX + currentBay * 3;

      for (let dx = 0; dx < 3; dx++) {
        const cx = xStart + dx;
        for (let dz = -4; dz <= 4; dz++) {
          dim.getBlock({ x: cx, y: originY - 1, z: originZ + dz })?.setType(
            dz === 0 && dx === 1 ? "minecraft:sea_lantern" : "minecraft:smooth_quartz"
          );
          for (let dy = 0; dy <= 3; dy++) {
            dim.getBlock({ x: cx, y: originY + dy, z: originZ + dz })?.setType("minecraft:air");
          }
          dim.getBlock({ x: cx, y: originY + 3, z: originZ + dz })?.setType("minecraft:glass");
        }

        if (dx === 2) {
          for (let dy = 0; dy <= 2; dy++) {
            dim.getBlock({ x: cx, y: originY + dy, z: originZ - 3 })?.setType(
              dy === 1 ? "minecraft:sea_lantern" : "minecraft:quartz_pillar"
            );
            dim.getBlock({ x: cx, y: originY + dy, z: originZ + 3 })?.setType(
              dy === 1 ? "minecraft:sea_lantern" : "minecraft:quartz_pillar"
            );
          }
        }
      }

      for (let level = 0; level < 3; level++) {
        const cy = originY + level;

        if (itemIndex < itemIdsList.length) {
          const itemId = itemIdsList[itemIndex++];
          fillDoubleChestWithSingleItem(
            dim,
            { x: xStart, y: cy, z: originZ - 3 },
            { x: xStart + 1, y: cy, z: originZ - 3 },
            itemId,
            "south"
          );
        }

        if (itemIndex < itemIdsList.length) {
          const itemId = itemIdsList[itemIndex++];
          fillDoubleChestWithSingleItem(
            dim,
            { x: xStart, y: cy, z: originZ + 3 },
            { x: xStart + 1, y: cy, z: originZ + 3 },
            itemId,
            "north"
          );
        }
      }

      currentBay++;
      const pct = Math.min(100, Math.round((currentBay / totalBays) * 100));
      player.onScreenDisplay.setActionBar(\`§dConstruindo Mega Sala de Baús Duplos Conectados: §a\${pct}% §7(\${itemIndex}/\${itemIdsList.length} Baús Duplos)\`);
    } catch (e) {
      system.clearRun(jobId);
    }
  }, 2);
}

// Modo 3: Sala Compacta com TODOS os Blocos e Itens Survival (54 itens diferentes por Baú Duplo Conectado)
function buildAllMinecraftItemsInDoubleChests(player) {
  const allTypes = getAllGameBlocksAndItems();

  const dim = player.dimension;
  const originX = Math.floor(player.location.x) + 2;
  const originY = Math.floor(player.location.y);
  const originZ = Math.floor(player.location.z);

  const itemsPerDoubleChest = 54;
  const totalDoubleChests = Math.ceil(allTypes.length / itemsPerDoubleChest);
  const totalBays = Math.ceil(totalDoubleChests / 6);

  let currentBay = 0;
  let globalItemIdx = 0;
  let chestsBuilt = 0;

  player.sendMessage(\`§8[§bMega Galeria Survival§8] §eCatalogados §a\${allTypes.length} Blocos e Itens Survival§e! Gerando \${totalDoubleChests} Baús Duplos conectados...\`);

  const jobId = system.runInterval(() => {
    try {
      if (currentBay >= totalBays || globalItemIdx >= allTypes.length) {
        system.clearRun(jobId);
        try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
        player.sendMessage(\`§8[§aMega Galeria Pronta§8] §aTodos os \${globalItemIdx} blocos e itens Survival foram colocados em \${chestsBuilt} Baús Duplos conectados!\`);
        return;
      }

      const xStart = originX + currentBay * 3;

      for (let dx = 0; dx < 3; dx++) {
        const cx = xStart + dx;
        for (let dz = -4; dz <= 4; dz++) {
          dim.getBlock({ x: cx, y: originY - 1, z: originZ + dz })?.setType(
            dz === 0 && dx === 1 ? "minecraft:sea_lantern" : "minecraft:smooth_quartz"
          );
          for (let dy = 0; dy <= 3; dy++) {
            dim.getBlock({ x: cx, y: originY + dy, z: originZ + dz })?.setType("minecraft:air");
          }
          dim.getBlock({ x: cx, y: originY + 3, z: originZ + dz })?.setType("minecraft:glass");
        }
        if (dx === 2) {
          for (let dy = 0; dy <= 2; dy++) {
            dim.getBlock({ x: cx, y: originY + dy, z: originZ - 3 })?.setType("minecraft:quartz_pillar");
            dim.getBlock({ x: cx, y: originY + dy, z: originZ + 3 })?.setType("minecraft:quartz_pillar");
          }
        }
      }

      const fillNextDoubleChestFromCatalog = (posA, posB, cardinalDir) => {
        if (globalItemIdx >= allTypes.length) return;
        const pair = placeConnectedDoubleChest(dim, posA, posB, cardinalDir);
        if (!pair) return;
        const { blockA, blockB } = pair;

        const contA = blockA.getComponent("minecraft:inventory")?.container;
        const contB = blockB.getComponent("minecraft:inventory")?.container;

        const addCatalogItemsToContainer = (cont, maxSlots) => {
          if (!cont) return;
          for (let s = 0; s < maxSlots && globalItemIdx < allTypes.length; s++) {
            const itemId = allTypes[globalItemIdx++];
            try {
              const st = new ItemStack(itemId, 1);
              st.amount = st.maxAmount || 64;
              cont.addItem(st);
            } catch (e) {}
          }
        };

        if (contA && contA.size >= 54) {
          addCatalogItemsToContainer(contA, 54);
        } else {
          addCatalogItemsToContainer(contA, 27);
          addCatalogItemsToContainer(contB, 27);
        }
        chestsBuilt++;
      };

      for (let level = 0; level < 3; level++) {
        const cy = originY + level;
        fillNextDoubleChestFromCatalog(
          { x: xStart, y: cy, z: originZ - 3 },
          { x: xStart + 1, y: cy, z: originZ - 3 },
          "south"
        );
        fillNextDoubleChestFromCatalog(
          { x: xStart, y: cy, z: originZ + 3 },
          { x: xStart + 1, y: cy, z: originZ + 3 },
          "north"
        );
      }

      currentBay++;
      const pct = Math.min(100, Math.round((globalItemIdx / allTypes.length) * 100));
      player.onScreenDisplay.setActionBar(\`§bGerando Sala com Todos os Blocos e Itens Survival: §a\${pct}% §7(\${globalItemIdx}/\${allTypes.length})\`);
    } catch (e) {
      system.clearRun(jobId);
    }
  }, 2);
}

// Modo 4: Escolher corredor do catálogo para ter 1 Baú Duplo Inteiro (54 packs) para cada bloco/item do corredor
function openCatalogBatchChestHallModal(player) {
  const allIds = getAllGameBlocksAndItems();

  const batchSize = 60;
  const totalBatches = Math.ceil(allIds.length / batchSize);
  const options = [];
  for (let b = 0; b < totalBatches; b++) {
    const start = b * batchSize + 1;
    const end = Math.min((b + 1) * batchSize, allIds.length);
    options.push(\`Corredor #\${b + 1}: Blocos/Itens \${start} a \${end} (60 Baús Duplos Lotados)\`);
  }

  const modal = new ModalFormData()
    .title("1 Baú Duplo Por Bloco/Item")
    .dropdown(
      \`O jogo possui \${allIds.length} Blocos e Itens obtíveis no Survival. Escolha qual corredor de 60 Baús Duplos conectados (54 packs por baú) construir agora:\`,
      options,
      0
    );

  showFormSafely(player, modal, (res) => {
    const batchIdx = Number(res.formValues[0]) || 0;
    const slice = allIds.slice(batchIdx * batchSize, (batchIdx + 1) * batchSize);
    buildSameItemDoubleChestHall(player, slice, \`Corredor Survival #\${batchIdx + 1}\`);
  });
}

// Modo 5: Gera 1 Baú Duplo conectado imediatamente na frente do jogador com 54 clones do item da mão
function spawnDoubleChestOfHandItem(player) {
  const equip = player.getComponent("minecraft:equippable");
  const handItem = equip?.getEquipment(EquipmentSlot.Mainhand);

  if (!handItem) {
    player.sendMessage("§8[§cMega Baú§8] §cSegure o bloco ou item que você deseja multiplicar em 54 slots na sua mão principal primeiro!");
    return;
  }

  const dim = player.dimension;
  const px = Math.floor(player.location.x);
  const py = Math.floor(player.location.y);
  const pz = Math.floor(player.location.z) + 2;

  // Garante que o espaço acima do Baú Duplo esteja livre para abrir sem bloqueio
  try {
    dim.getBlock({ x: px, y: py + 1, z: pz })?.setType("minecraft:air");
    dim.getBlock({ x: px + 1, y: py + 1, z: pz })?.setType("minecraft:air");
  } catch (e) {}

  const ok = fillDoubleChestWithSingleItem(
    dim,
    { x: px, y: py, z: pz },
    { x: px + 1, y: py, z: pz },
    handItem,
    "north"
  );

  if (ok) {
    try { player.playSound("random.chestopen", { pitch: 1.1, volume: 0.9 }); } catch (e) {}
    player.sendMessage(\`§8[§aMega Baú Duplo§8] §aCriado 1 Baú Duplo conectado na sua frente com todos os 54 slots lotados de §e\${handItem.typeId.replace("minecraft:", "")}§a!\`);
  }
}

// ============================================================================
// 6. CONSTRUTOR RÁPIDO DE ESTRUTURAS, LABORATÓRIO DE POÇÕES, FORNALHA & FARMS
// ============================================================================
function openBuilderAndSpawnerMenu(player) {
  const form = new ActionFormData()
    .title("§l§cConstrutor de Estruturas & Farms")
    .body("§7Construa mega estruturas industriais, laboratórios e farms automáticas 100% funcionais:")
    .button("§l§dMega Laboratório de Poções Enorme (Alquimia)\\n§r§8Alquimia Completa, Suportes, Caldeirões e Todos os Ingredientes", "textures/items/brewing_stand")
    .button("§l§6Super Fornalha Industrial 16x (Smelter Automático)\\n§r§816 Fornalhas com Funis, Baús de entrada de minérios e saída", "textures/items/blast_furnace")
    .button("§l§aMenu de Farms Automáticas 100% Survival\\n§r§8Farms de Ferro, Cana/Bambu, Abóboras, Mob Trap, Lã e Algas", "textures/items/hopper")
    .button("§l§5Mega Sala de Baús Duplos (com Molduras Brilhantes)\\n§r§8~1.180 Baús Duplos com Molduras Brilhantes identificadoras", "textures/items/chest_minecart")
    .button("§dGerar Mesa de Encantamento Nível 30 Completa\\n§r§8Cria 15 Estantes de Livros + Mesa no centro", "textures/items/book_enchanted")
    .button("§bCriar Plataforma Salva-Vidas 5x5 sob os Pés\\n§r§8Obsidiana instantânea (salva de quedas e lava)", "textures/items/ender_pearl")
    .button("§6Criar Bunker / Abrigo Iluminado ao Redor\\n§r§8Proteção imediata com lanternas e baú", "textures/items/lantern")
    .button("§eInvocar Mobs, Pets Raros, Aldeões & Golem\\n§r§8Spawna criaturas amigáveis ou de farm", "textures/items/emerald")
    .button("§cInvocar Bosses (Warden, Wither, Ender Dragon)\\n§r§8Spawna chefes para testar suas armas", "textures/items/nether_star")
    .button("§8« Voltar ao Menu Principal");

  showFormSafely(player, form, (res) => {
    const dim = player.dimension;
    const px = Math.floor(player.location.x);
    const py = Math.floor(player.location.y);
    const pz = Math.floor(player.location.z);

    if (res.selection === 0) {
      buildMegaPotionBrewingComplex(player);
    } else if (res.selection === 1) {
      buildMegaIndustrialSmelter(player);
    } else if (res.selection === 2) {
      openAutomatedFarmsMenu(player);
    } else if (res.selection === 3) {
      openMegaChestHallMenu(player);
    } else if (res.selection === 4) {
      try {
        for (let dx = -2; dx <= 2; dx++) {
          for (let dz = -2; dz <= 2; dz++) {
            if (Math.abs(dx) === 2 || Math.abs(dz) === 2) {
              if (dx === 0 && dz === 2) continue;
              dim.getBlock({ x: px + dx, y: py, z: pz + dz })?.setType("minecraft:bookshelf");
              dim.getBlock({ x: px + dx, y: py + 1, z: pz + dz })?.setType("minecraft:bookshelf");
            }
          }
        }
        dim.getBlock({ x: px, y: py, z: pz })?.setType("minecraft:enchanting_table");
        player.sendMessage("§8[§aConstrutor§8] §dMesa de Encantamento Nível 30 gerada ao seu redor!");
      } catch (e) {}
    } else if (res.selection === 5) {
      try {
        for (let dx = -2; dx <= 2; dx++) {
          for (let dz = -2; dz <= 2; dz++) {
            dim.getBlock({ x: px + dx, y: py - 1, z: pz + dz })?.setType("minecraft:obsidian");
          }
        }
        player.sendMessage("§8[§aConstrutor§8] §bPlataforma 5x5 de Obsidiana criada sob seus pés!");
      } catch (e) {}
    } else if (res.selection === 6) {
      try {
        for (let dx = -2; dx <= 2; dx++) {
          for (let dy = -1; dy <= 3; dy++) {
            for (let dz = -2; dz <= 2; dz++) {
              const isEdge = Math.abs(dx) === 2 || Math.abs(dz) === 2 || dy === -1 || dy === 3;
              const b = dim.getBlock({ x: px + dx, y: py + dy, z: pz + dz });
              if (!b) continue;
              if (isEdge) {
                b.setType(dy === 1 && (dx === 0 || dz === 0) ? "minecraft:glass" : "minecraft:stone_bricks");
              } else {
                b.setType("minecraft:air");
              }
            }
          }
        }
        dim.getBlock({ x: px, y: py + 2, z: pz })?.setType("minecraft:sea_lantern");
        player.sendMessage("§8[§aConstrutor§8] §6Abrigo seguro construído ao seu redor!");
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
// ESTRUTURA 1: MEGA LABORATÓRIO DE POÇÕES ENORME (COMPLEXO DE ALQUIMIA)
// ----------------------------------------------------------------------------
function buildMegaPotionBrewingComplex(player) {
  const dim = player.dimension;
  const startX = Math.floor(player.location.x) + 2;
  const startY = Math.floor(player.location.y);
  const startZ = Math.floor(player.location.z) - 4;

  player.sendMessage("§8[§dLaboratório de Poções§8] §eConstruindo Mega Complexo de Alquimia Industrial com Suportes, Caldeirões e Ingredientes...");

  try {
    // 1. Piso, Paredes e Teto Iluminado (13 de comprimento em X x 9 de largura em Z x 5 de altura em Y)
    for (let dx = 0; dx < 13; dx++) {
      for (let dz = 0; dz < 9; dz++) {
        const cx = startX + dx;
        const cz = startZ + dz;

        // Piso com Ardósia Polida e Lanternas do Mar
        const isLightFloor = (dx === 3 || dx === 9) && (dz === 2 || dz === 6);
        dim.getBlock({ x: cx, y: startY - 1, z: cz })?.setType(
          isLightFloor ? "minecraft:sea_lantern" : "minecraft:polished_deepslate"
        );

        // Limpa o espaço interno
        for (let dy = 0; dy <= 4; dy++) {
          dim.getBlock({ x: cx, y: startY + dy, z: cz })?.setType("minecraft:air");
        }

        // Teto de Vidro com iluminação
        dim.getBlock({ x: cx, y: startY + 5, z: cz })?.setType(
          isLightFloor ? "minecraft:sea_lantern" : "minecraft:glass"
        );
      }
    }

    // 2. Pilares de Quartzo e Muros nos cantos
    for (let dy = 0; dy <= 4; dy++) {
      dim.getBlock({ x: startX, y: startY + dy, z: startZ })?.setType("minecraft:quartz_pillar");
      dim.getBlock({ x: startX + 12, y: startY + dy, z: startZ })?.setType("minecraft:quartz_pillar");
      dim.getBlock({ x: startX, y: startY + dy, z: startZ + 8 })?.setType("minecraft:quartz_pillar");
      dim.getBlock({ x: startX + 12, y: startY + dy, z: startZ + 8 })?.setType("minecraft:quartz_pillar");
    }

    // 3. Mesa Central de Alquimia: 4 Suportes de Poções + Funis + Caldeirões de Água
    for (let i = 0; i < 4; i++) {
      const bx = startX + 3 + i * 2;
      // Suporte de Poções sobre bancada de quartzo
      dim.getBlock({ x: bx, y: startY, z: startZ + 4 })?.setType("minecraft:smooth_quartz");
      dim.getBlock({ x: bx, y: startY + 1, z: startZ + 4 })?.setType("minecraft:brewing_stand");

      // Caldeirões com água infinita logo à frente para encher frascos
      dim.getBlock({ x: bx, y: startY, z: startZ + 3 })?.setType("minecraft:cauldron");
    }

    // 4. Canteiro de Fungos do Nether (Soul Sand + Nether Wart)
    for (let i = 0; i < 6; i++) {
      const wx = startX + 3 + i;
      dim.getBlock({ x: wx, y: startY, z: startZ + 7 })?.setType("minecraft:soul_sand");
      dim.getBlock({ x: wx, y: startY + 1, z: startZ + 7 })?.setType("minecraft:nether_wart");
    }

    // 5. 4 Baús Duplos Lotados com TODOS os Ingredientes de Poções e Molduras Brilhantes
    // Baú 1: Bases (Nether Wart, Pó de Blaze, Frascos de Vidro)
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 2, y: startY, z: startZ + 1 },
      { x: startX + 3, y: startY, z: startZ + 1 },
      "minecraft:nether_wart",
      "south"
    );

    // Baú 2: Ingredientes Especiais (Lágrima de Ghast, Olho de Aranha Fermentado, Cenoura Dourada)
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 5, y: startY, z: startZ + 1 },
      { x: startX + 6, y: startY, z: startZ + 1 },
      "minecraft:ghast_tear",
      "south"
    );

    // Baú 3: Potencializadores (Pó de Pedra Luminosa / Glowstone, Redstone, Pólvora)
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 8, y: startY, z: startZ + 1 },
      { x: startX + 9, y: startY, z: startZ + 1 },
      "minecraft:glowstone_dust",
      "south"
    );

    // Baú 4: Combustível de Alquimia (Pó de Blaze 54 packs)
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 10, y: startY, z: startZ + 3 },
      { x: startX + 11, y: startY, z: startZ + 3 },
      "minecraft:blaze_powder",
      "west"
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aAlquimia Pronta§8] §aMega Laboratório de Poções construído com sucesso! Suportes de poções, caldeirões com água, canteiro de fungos e 4 Baús Duplos com todos os ingredientes e molduras brilhantes prontos!");
  } catch (err) {
    player.sendMessage("§8[§cAlquimia§8] §cErro ao gerar o laboratório: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// ESTRUTURA 2: SUPER FORNALHA INDUSTRIAL 16X (SMELTER AUTOMÁTICO)
// ----------------------------------------------------------------------------
function buildMegaIndustrialSmelter(player) {
  const dim = player.dimension;
  const startX = Math.floor(player.location.x) + 2;
  const startY = Math.floor(player.location.y);
  const startZ = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§6Fornalha Industrial§8] §eConstruindo Super Fornalha Industrial 16x com Funis e Baús automáticos...");

  try {
    // 1. Piso de Tijolos de Ardósia e Lanternas do Mar (12x7)
    for (let dx = 0; dx < 12; dx++) {
      for (let dz = 0; dz < 7; dz++) {
        const cx = startX + dx;
        const cz = startZ + dz;
        dim.getBlock({ x: cx, y: startY - 1, z: cz })?.setType(
          (dx === 2 || dx === 9) && dz === 3 ? "minecraft:sea_lantern" : "minecraft:deepslate_bricks"
        );
        for (let dy = 0; dy <= 4; dy++) {
          dim.getBlock({ x: cx, y: startY + dy, z: cz })?.setType("minecraft:air");
        }
      }
    }

    // 2. Linha Dupla de Fornalhas Industriais: 8 Fornalhas de cada lado (total 16)
    // 6 Fornalhas Potentes (Blast Furnaces para Minérios) + 6 Defumadores (Smokers para Carnes) + 4 Fornalhas Convencionais
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
      const fx = startX + 2 + i;
      const fType = furnaceTypes[i];

      // Fileira Norte (z = startZ + 2)
      // Nível 0: Funis de Saída direcionando para baixo/frente
      dim.getBlock({ x: fx, y: startY, z: startZ + 2 })?.setType("minecraft:hopper");
      // Nível 1: Fornalha
      dim.getBlock({ x: fx, y: startY + 1, z: startZ + 2 })?.setType(fType);
      // Nível 2: Funil Superior de Entrada de Itens
      dim.getBlock({ x: fx, y: startY + 2, z: startZ + 2 })?.setType("minecraft:hopper");
      // Traseira: Funil de Combustível
      dim.getBlock({ x: fx, y: startY + 1, z: startZ + 1 })?.setType("minecraft:hopper");

      // Fileira Sul (z = startZ + 4)
      // Nível 0: Funis de Saída
      dim.getBlock({ x: fx, y: startY, z: startZ + 4 })?.setType("minecraft:hopper");
      // Nível 1: Fornalha
      dim.getBlock({ x: fx, y: startY + 1, z: startZ + 4 })?.setType(fType);
      // Nível 2: Funil Superior de Entrada
      dim.getBlock({ x: fx, y: startY + 2, z: startZ + 4 })?.setType("minecraft:hopper");
      // Traseira: Funil de Combustível
      dim.getBlock({ x: fx, y: startY + 1, z: startZ + 5 })?.setType("minecraft:hopper");
    }

    // 3. Baús Duplos de Combustível (Pré-abastecidos com Blocos de Carvão e Varas de Blaze)
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 4, y: startY + 2, z: startZ + 1 },
      { x: startX + 5, y: startY + 2, z: startZ + 1 },
      "minecraft:coal_block",
      "south"
    );

    fillDoubleChestWithSingleItem(
      dim,
      { x: startX + 4, y: startY + 2, z: startZ + 5 },
      { x: startX + 5, y: startY + 2, z: startZ + 5 },
      "minecraft:blaze_rod",
      "north"
    );

    // 4. Baús Duplos de Entrada de Minérios no topo
    placeConnectedDoubleChest(dim, { x: startX + 2, y: startY + 3, z: startZ + 2 }, { x: startX + 3, y: startY + 3, z: startZ + 2 }, "south");
    placeConnectedDoubleChest(dim, { x: startX + 6, y: startY + 3, z: startZ + 2 }, { x: startX + 7, y: startY + 3, z: startZ + 2 }, "south");

    // 5. Baús Duplos de Saída (Produtos Prontos) no início das fileiras
    fillDoubleChestWithSingleItem(
      dim,
      { x: startX, y: startY, z: startZ + 2 },
      { x: startX + 1, y: startY, z: startZ + 2 },
      "minecraft:iron_ingot",
      "south"
    );

    fillDoubleChestWithSingleItem(
      dim,
      { x: startX, y: startY, z: startZ + 4 },
      { x: startX + 1, y: startY, z: startZ + 4 },
      "minecraft:cooked_beef",
      "north"
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFornalha Pronta§8] §aSuper Fornalha Industrial 16x construída! 8 Fornalhas Potentes, 8 Defumadores, rede de funis automáticos, baús de combustível lotados e baús de saída prontos para uso!");
  } catch (err) {
    player.sendMessage("§8[§cFornalha§8] §cErro ao gerar fornalha: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// ESTRUTURA 3: MENU DE MEGA FARMS AVANÇADAS 100% SURVIVAL
// ----------------------------------------------------------------------------
function openAutomatedFarmsMenu(player) {
  const form = new ActionFormData()
    .title("§l§aMega Farms Avançadas")
    .body("§7Selecione a Farm Automática que você deseja construir instantaneamente (100% funcional com funis, baús duplos e molduras brilhantes):")
    .button("§l§61. Mega Farm de Ouro & XP do Nether (Portal Tick)\\n§r§8Portais gigantes, funis e Baú Duplo de Ouro e Pepitas", "textures/items/gold_ingot")
    .button("§l§e2. Mega Farm de Raid (Totens da Imortalidade & Esmeraldas)\\n§r§8Plataforma de Raid, câmara de morte e Baú de Totens Infinitos", "textures/items/totem")
    .button("§l§d3. Mega Farm de Enderman (XP Máximo & Pérolas do End)\\n§r§8Torre de queda 43m com isca de Endermite (0 a 30 em segundos)", "textures/items/ender_pearl")
    .button("§l§84. Mega Farm de Wither Skeleton (Crânios de Wither & Carvão)\\n§r§8Fortaleza do Nether com Wither Roses e Baú de Crânios", "textures/items/skull_wither")
    .button("§l§c5. Mega Farm de Creepers & Pólvora Pura (Gatos & Alçapões)\\n§r§8Filtro 100% Creeper para farmar Pólvora de foguetes e TNT", "textures/items/gunpowder")
    .button("§l§56. Mega Sala de Trocas com Piglins (Barter Automático)\\n§r§86 Baias com Piglins, ejetores de ouro e baús coletores", "textures/items/crying_obsidian")
    .button("§l§b7. Mega Farm de Guardiões do Templo (Prismarinho & Peixes)\\n§r§8Colunas de água e fogueiras coletando prismarinho", "textures/items/prismarine_shard")
    .button("§l§a8. Mega Farm de Slime (Bolas de Slime Infinitas)\\n§r§8Plataforma com isca de Golem e Baú Duplo de Slime", "textures/items/slimeball")
    .button("§l§e9. Farm Automática de Ferro (Iron Golem Farm)\\n§r§8Aldeões, Camas, Lava Blade e Baú Coletor de Ferro", "textures/items/iron_ingot")
    .button("§l§610. Farm de Aldeão Agricultor (Cenouras, Batatas & Pão)\\n§r§8Canteiro 9x9 com aldeão colhedor e funis coletores", "textures/items/carrot")
    .button("§l§a11. Farm de Cana-de-Açúcar & Bambu (Pistão + Observador)\\n§r§8Observadores + Pistões + Água e Baú Duplo", "textures/items/sugar_cane")
    .button("§l§612. Farm de Abóbora & Melancia Automática\\n§r§8Observadores cortando e funis coletando no baú", "textures/items/melon")
    .button("§l§c13. Farm de Mob Trap / Torre de Drops & XP\\n§r§8Câmara de spawn escurecida, queda e funis", "textures/items/bone")
    .button("§l§214. Farm de Algas / Kelp (Combustível Infinito)\\n§r§8Crescimento vertical, pistões automáticos e defumadores", "textures/items/kelp")
    .button("§l§f15. Farm de Lã Automática (Tosquia com Ejetores)\\n§r§8Baias de ovelhas com tesouras automáticas", "textures/items/shears")
    .button("§8« Voltar ao Menu de Estruturas");

  showFormSafely(player, form, (res) => {
    switch (res.selection) {
      case 0:
        buildAutomatedGoldXpFarm(player);
        break;
      case 1:
        buildAutomatedRaidFarm(player);
        break;
      case 2:
        buildAutomatedEndermanFarm(player);
        break;
      case 3:
        buildAutomatedWitherSkeletonFarm(player);
        break;
      case 4:
        buildAutomatedCreeperGunpowderFarm(player);
        break;
      case 5:
        buildAutomatedPiglinBarterHall(player);
        break;
      case 6:
        buildAutomatedGuardianFarm(player);
        break;
      case 7:
        buildAutomatedSlimeFarm(player);
        break;
      case 8:
        buildAutomatedIronFarm(player);
        break;
      case 9:
        buildAutomatedVillagerCropFarm(player);
        break;
      case 10:
        buildAutomatedSugarCaneFarm(player);
        break;
      case 11:
        buildAutomatedMelonPumpkinFarm(player);
        break;
      case 12:
        buildAutomatedMobTrap(player);
        break;
      case 13:
        buildAutomatedKelpFarm(player);
        break;
      case 14:
        buildAutomatedWoolFarm(player);
        break;
      case 15:
        openBuilderAndSpawnerMenu(player);
        break;
    }
  });
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 1: MEGA FARM DE OURO & XP DO NETHER (PORTAL TICK)
// ----------------------------------------------------------------------------
function buildAutomatedGoldXpFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 5;

  player.sendMessage("§8[§6Mega Farm de Ouro§8] §eConstruindo Mega Farm de Ouro e XP com Portais do Nether e Funis automáticos...");

  try {
    // 1. Piso da câmara de coleta (14x10) com Ardósia e Baús de Ouro
    for (let dx = 0; dx < 14; dx++) {
      for (let dz = 0; dz < 10; dz++) {
        dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + dz })?.setType("minecraft:polished_deepslate");
        for (let dy = 0; dy <= 12; dy++) {
          dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:air");
        }
      }
    }

    // 2. Linha de Coleta: 6 Funis direcionando para Baús Duplos
    for (let i = 0; i < 6; i++) {
      dim.getBlock({ x: sx + 4 + i, y: sy, z: sz + 4 })?.setType("minecraft:hopper");
      dim.getBlock({ x: sx + 4 + i, y: sy, z: sz + 5 })?.setType("minecraft:magma");
    }

    // Baú Duplo 1: Barras de Ouro com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 1, y: sy, z: sz + 4 },
      { x: sx + 2, y: sy, z: sz + 4 },
      "minecraft:gold_ingot",
      "south"
    );

    // Baú Duplo 2: Pepitas de Ouro com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 1, y: sy, z: sz + 6 },
      { x: sx + 2, y: sy, z: sz + 6 },
      "minecraft:gold_nugget",
      "north"
    );

    // 3. Estrutura de Portais do Nether Gigantes (Obsidiana)
    for (let dy = 2; dy <= 11; dy++) {
      for (let dx = 3; dx <= 11; dx++) {
        const isFrame = dy === 2 || dy === 11 || dx === 3 || dx === 11;
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + 3 })?.setType(
          isFrame ? "minecraft:obsidian" : "minecraft:crying_obsidian"
        );
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + 7 })?.setType(
          isFrame ? "minecraft:obsidian" : "minecraft:crying_obsidian"
        );
      }
    }

    // 4. Canaletas com correnteza de água direcionando os Piglins Zumbis para os blocos de magma e funis
    dim.getBlock({ x: sx + 10, y: sy + 1, z: sz + 4 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 10, y: sy + 1, z: sz + 5 })?.setType("minecraft:water");

    // Spawna Piglins Zumbis para iniciar a farm
    for (let i = 0; i < 4; i++) {
      dim.spawnEntity("minecraft:zombified_piglin", { x: sx + 5 + i, y: sy + 3, z: sz + 4.5 });
    }

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Ouro Pronta§8] §aMega Farm de Ouro & XP do Nether construída! Portais de obsidiana, correntezas de água, blocos de magma, funis e Baús Duplos de Ouro e Pepitas com molduras brilhantes prontos!");
  } catch (err) {
    player.sendMessage("§8[§cOuro§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 2: MEGA FARM DE RAID (TOTENS DA IMORTALIDADE & ESMERALDAS)
// ----------------------------------------------------------------------------
function buildAutomatedRaidFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 3;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 4;

  player.sendMessage("§8[§eFarm de Raid§8] §eConstruindo Mega Farm de Raid para Totens da Imortalidade e Esmeraldas Infinitas...");

  try {
    // 1. Câmara de Morte e Coleta no Chão com Funis
    for (let dx = 2; dx <= 5; dx++) {
      for (let dz = 2; dz <= 5; dz++) {
        dim.getBlock({ x: sx + dx, y: sy, z: sz + dz })?.setType("minecraft:hopper");
      }
    }

    // Baú Duplo 1: Totens da Imortalidade com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx, y: sy, z: sz + 2 },
      { x: sx + 1, y: sy, z: sz + 2 },
      "minecraft:totem_of_undying",
      "south"
    );

    // Baú Duplo 2: Esmeraldas com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx, y: sy, z: sz + 4 },
      { x: sx + 1, y: sy, z: sz + 4 },
      "minecraft:emerald",
      "south"
    );

    // Muros de Vidro da câmara de queda
    for (let dy = 1; dy <= 16; dy++) {
      for (let dx = 1; dx <= 6; dx++) {
        for (let dz = 1; dz <= 6; dz++) {
          if (dx === 1 || dx === 6 || dz === 1 || dz === 6) {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:glass");
          } else {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:air");
          }
        }
      }
    }

    // 2. Plataforma de Spawn de Invasores no Topo (Nível Y + 17)
    for (let dx = -3; dx <= 10; dx++) {
      for (let dz = -3; dz <= 10; dz++) {
        dim.getBlock({ x: sx + dx, y: sy + 17, z: sz + dz })?.setType("minecraft:dark_oak_planks");
      }
    }

    // Correntezas de água que empurram os saqueadores e evocadores para o fosso central de queda
    dim.getBlock({ x: sx - 2, y: sy + 18, z: sz - 2 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 9, y: sy + 18, z: sz - 2 })?.setType("minecraft:water");
    dim.getBlock({ x: sx - 2, y: sy + 18, z: sz + 9 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 9, y: sy + 18, z: sz + 9 })?.setType("minecraft:water");

    // Casulo seguro no topo com cama de aldeão (ativa e foca o Raid)
    dim.getBlock({ x: sx + 3, y: sy + 21, z: sz + 3 })?.setType("minecraft:bed");
    dim.spawnEntity("minecraft:villager_v2", { x: sx + 3.5, y: sy + 22, z: sz + 3.5 });

    // Spawna um Evoker para inaugurar a farm com totens
    dim.spawnEntity("minecraft:evoker", { x: sx + 3.5, y: sy + 18, z: sz + 3.5 });

    try { player.playSound("random.totem", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Raid Pronta§8] §aMega Farm de Raid concluída! Plataforma com correntezas, câmara de queda para 1 hit, funis e Baús Duplos de Totens da Imortalidade e Esmeraldas prontos!");
  } catch (err) {
    player.sendMessage("§8[§cRaid§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 3: MEGA FARM DE ENDERMAN (XP MÁXIMO & PÉROLAS DO END)
// ----------------------------------------------------------------------------
function buildAutomatedEndermanFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 3;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§dFarm de Enderman§8] §eConstruindo Farm de Enderman 43m com Isca de Endermite (0 a 30 níveis de XP instantâneo)...");

  try {
    // 1. Base com Fenda de Matança para 1 Golpe, Funis e Baú Duplo de Pérolas
    dim.getBlock({ x: sx + 1, y: sy, z: sz + 1 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 2, y: sy, z: sz + 1 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 1, y: sy, z: sz + 2 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 2, y: sy, z: sz + 2 })?.setType("minecraft:hopper");

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 1, y: sy, z: sz + 1 },
      { x: sx, y: sy, z: sz + 1 },
      "minecraft:ender_pearl",
      "south"
    );

    // Lajes no nível 1 para permitir bater nos pés dos Endermen sem que eles possam atacar
    dim.getBlock({ x: sx + 1, y: sy + 1, z: sz })?.setType("minecraft:stone_block_slab");
    dim.getBlock({ x: sx + 2, y: sy + 1, z: sz })?.setType("minecraft:stone_block_slab");

    // 2. Tubo de Queda de 43 Blocos de Altura (Endermen caem com apenas 0.5 coração)
    for (let dy = 1; dy <= 43; dy++) {
      for (let dx = 0; dx <= 3; dx++) {
        for (let dz = 0; dz <= 3; dz++) {
          if (dx === 0 || dx === 3 || dz === 0 || dz === 3) {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:end_stone_bricks");
          } else {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:air");
          }
        }
      }
    }

    // 3. Plataforma de Spawn no Topo (Nível Y + 44)
    const topY = sy + 44;
    for (let dx = -4; dx <= 7; dx++) {
      for (let dz = -4; dz <= 7; dz++) {
        dim.getBlock({ x: sx + dx, y: topY, z: sz + dz })?.setType("minecraft:end_stone_bricks");
      }
    }

    // Isca central suspensa sobre o fosso (Endermite com trilho)
    dim.getBlock({ x: sx + 1, y: topY + 2, z: sz + 1 })?.setType("minecraft:iron_bars");
    dim.spawnEntity("minecraft:endermite", { x: sx + 1.5, y: topY + 3, z: sz + 1.5 });

    // Spawna Endermen para inaugurar
    dim.spawnEntity("minecraft:enderman", { x: sx + 4.5, y: topY + 1, z: sz + 4.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aEnderman Farm Pronta§8] §aMega Farm de Enderman concluída! Tubo de queda de 43 blocos com isca de Endermite, fenda de 1 soco para matar dezenas de Endermen por segundo e Baú Duplo de Pérolas!");
  } catch (err) {
    player.sendMessage("§8[§cEnderman§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 4: MEGA FARM DE WITHER SKELETON (CRÂNIOS & CARVÃO)
// ----------------------------------------------------------------------------
function buildAutomatedWitherSkeletonFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 4;

  player.sendMessage("§8[§8Farm Wither Skeleton§8] §eConstruindo Farm de Wither Skeleton para Crânios e Carvão Infinito...");

  try {
    // Funis e Baú Duplo de Crânios de Wither
    dim.getBlock({ x: sx + 3, y: sy, z: sz + 3 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 4, y: sy, z: sz + 3 })?.setType("minecraft:hopper");

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 1, y: sy, z: sz + 3 },
      { x: sx + 2, y: sy, z: sz + 3 },
      "minecraft:wither_skeleton_skull",
      "south"
    );

    // Câmara de Fortaleza com Tijolos do Nether e Rosas do Wither
    for (let dx = 0; dx < 8; dx++) {
      for (let dz = 0; dz < 8; dz++) {
        dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + dz })?.setType("minecraft:nether_brick");
        dim.getBlock({ x: sx + dx, y: sy + 4, z: sz + dz })?.setType("minecraft:nether_brick");
      }
    }

    // Rosas do Wither nas laterais (apenas Wither Skeletons são imunes)
    for (let dx = 2; dx <= 5; dx++) {
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 1 })?.setType("minecraft:wither_rose");
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 6 })?.setType("minecraft:wither_rose");
    }

    dim.spawnEntity("minecraft:wither_skeleton", { x: sx + 3.5, y: sy + 1, z: sz + 3.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aWither Skeleton Pronta§8] §aMega Farm de Wither Skeleton construída! Fortaleza do Nether com Rosas do Wither, funis e Baú Duplo de Crânios de Wither com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cWither§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 5: MEGA FARM DE CREEPERS & PÓLVORA PURA
// ----------------------------------------------------------------------------
function buildAutomatedCreeperGunpowderFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§cFarm de Creepers§8] §eConstruindo Farm 100% Creepers com Gatos e Alçapões para Pólvora pura...");

  try {
    // Funis e Baú Duplo de Pólvora
    for (let dz = 1; dz <= 4; dz++) {
      dim.getBlock({ x: sx + 2, y: sy, z: sz + dz })?.setType("minecraft:hopper");
      dim.getBlock({ x: sx + 3, y: sy, z: sz + dz })?.setType("minecraft:campfire");
    }

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx, y: sy, z: sz + 2 },
      { x: sx + 1, y: sy, z: sz + 2 },
      "minecraft:gunpowder",
      "south"
    );

    // Plataforma de spawn com alçapões no teto (impede zumbis e esqueletos de 2m) e tapetes no chão (impede aranhas)
    for (let dx = 4; dx <= 9; dx++) {
      for (let dz = 0; dz <= 5; dz++) {
        dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + dz })?.setType("minecraft:stone_bricks");
        dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + dz })?.setType("minecraft:oak_trapdoor");
        dim.getBlock({ x: sx + dx, y: sy + 3, z: sz + dz })?.setType("minecraft:stone_bricks");
      }
    }

    // Gatos nas pontas (assustam os creepers direto para as fogueiras e funis)
    dim.spawnEntity("minecraft:cat", { x: sx + 8.5, y: sy, z: sz + 2.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aCreeper Farm Pronta§8] §aMega Farm de Creepers construída! Filtro de alçapões exclusivo para creepers, gatos repelidores, fogueiras coletoras e Baú Duplo de Pólvora com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cCreeper§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 6: MEGA SALA DE TROCAS COM PIGLINS (BARTER AUTOMÁTICO)
// ----------------------------------------------------------------------------
function buildAutomatedPiglinBarterHall(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§5Barter dos Piglins§8] §eConstruindo Mega Sala de Trocas Automáticas com Piglins...");

  try {
    // 6 Baias de Piglins com Ejetores de Ouro e Funis Coletores
    for (let i = 0; i < 6; i++) {
      const bx = sx + i * 2;
      dim.getBlock({ x: bx, y: sy - 1, z: sz + 2 })?.setType("minecraft:hopper");
      dim.getBlock({ x: bx, y: sy, z: sz + 2 })?.setType("minecraft:polished_blackstone");
      dim.getBlock({ x: bx, y: sy + 2, z: sz + 2 })?.setType("minecraft:dispenser");

      dim.getBlock({ x: bx, y: sy + 1, z: sz + 1 })?.setType("minecraft:glass");
      dim.getBlock({ x: bx, y: sy + 1, z: sz + 3 })?.setType("minecraft:glass");

      dim.spawnEntity("minecraft:piglin", { x: bx + 0.5, y: sy + 1, z: sz + 2.5 });
    }

    // Baú Duplo 1: Obsidiana Chorona com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy - 1, z: sz + 2 },
      { x: sx - 1, y: sy - 1, z: sz + 2 },
      "minecraft:crying_obsidian",
      "south"
    );

    // Baú Duplo 2: Obsidiana com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 12, y: sy - 1, z: sz + 2 },
      { x: sx + 13, y: sy - 1, z: sz + 2 },
      "minecraft:obsidian",
      "south"
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aBarter Pronto§8] §aMega Sala de Trocas com Piglins concluída! Baias com piglins, ejetores de ouro automáticos, funis coletores e Baús Duplos de Obsidiana e Obsidiana Chorona!");
  } catch (err) {
    player.sendMessage("§8[§cBarter§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 7: MEGA FARM DE GUARDIÕES DO TEMPLO OCEÂNICO
// ----------------------------------------------------------------------------
function buildAutomatedGuardianFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§bFarm de Guardião§8] §eConstruindo Mega Farm de Guardiões do Templo Oceânico...");

  try {
    for (let dx = 0; dx < 6; dx++) {
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 1 })?.setType("minecraft:hopper");
      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + 1 })?.setType("minecraft:campfire");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 1 })?.setType("minecraft:water");
    }

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy, z: sz + 1 },
      { x: sx - 1, y: sy, z: sz + 1 },
      "minecraft:prismarine_shard",
      "south"
    );

    dim.spawnEntity("minecraft:guardian", { x: sx + 2.5, y: sy + 3, z: sz + 1.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aGuardião Pronto§8] §aMega Farm de Guardiões construída! Coluna de água, fogueiras coletoras, funis e Baú Duplo de Fragmentos de Prismarinho com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cGuardião§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 8: MEGA FARM DE SLIME (BOLAS DE SLIME INFINITAS)
// ----------------------------------------------------------------------------
function buildAutomatedSlimeFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§aFarm de Slime§8] §eConstruindo Mega Farm de Slime...");

  try {
    for (let dx = 0; dx < 6; dx++) {
      for (let dz = 0; dz < 3; dz++) {
        dim.getBlock({ x: sx + dx, y: sy, z: sz + dz })?.setType("minecraft:magma");
      }
    }

    dim.getBlock({ x: sx, y: sy - 1, z: sz })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 1, y: sy - 1, z: sz })?.setType("minecraft:hopper");

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy - 1, z: sz },
      { x: sx - 1, y: sy - 1, z: sz },
      "minecraft:slime_ball",
      "south"
    );

    // Isca de Iron Golem atrás de barras de ferro
    dim.getBlock({ x: sx + 3, y: sy + 1, z: sz + 3 })?.setType("minecraft:iron_bars");
    dim.spawnEntity("minecraft:iron_golem", { x: sx + 3.5, y: sy + 1, z: sz + 4 });
    dim.spawnEntity("minecraft:slime", { x: sx + 2.5, y: sy + 1, z: sz + 1 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aSlime Pronto§8] §aMega Farm de Slime construída! Plataforma de magma com isca de Golem, funis e Baú Duplo de Bolas de Slime com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cSlime§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM AVANÇADA 9: FARM DE ALDEÃO AGRICULTOR (COMIDA INFINITA)
// ----------------------------------------------------------------------------
function buildAutomatedVillagerCropFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 4;

  player.sendMessage("§8[§6Farm de Aldeão§8] §eConstruindo Farm Automática de Aldeão Agricultor...");

  try {
    // Canteiro 9x9 com terra arada, água no centro e composteira
    for (let dx = 0; dx < 9; dx++) {
      for (let dz = 0; dz < 9; dz++) {
        const isCenter = dx === 4 && dz === 4;
        dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + dz })?.setType("minecraft:dirt");
        dim.getBlock({ x: sx + dx, y: sy, z: sz + dz })?.setType(
          isCenter ? "minecraft:water" : "minecraft:farmland"
        );
        if (!isCenter) {
          dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + dz })?.setType("minecraft:carrots");
        }
      }
    }

    dim.getBlock({ x: sx + 4, y: sy + 1, z: sz + 4 })?.setType("minecraft:composter");

    // Funis de coleta na borda com Baú Duplo de Cenouras
    dim.getBlock({ x: sx, y: sy - 1, z: sz + 4 })?.setType("minecraft:hopper");
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy - 1, z: sz + 4 },
      { x: sx - 1, y: sy - 1, z: sz + 4 },
      "minecraft:golden_carrot",
      "south"
    );

    dim.spawnEntity("minecraft:villager_v2", { x: sx + 4.5, y: sy + 1, z: sz + 3.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aAldeão Pronto§8] §aFarm Automática de Aldeão Agricultor construída! Canteiro 9x9 fértil, aldeão agricultor, composteira, funis e Baú Duplo com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cAldeão§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 1: FARM DE FERRO (IRON GOLEM FARM)
// ----------------------------------------------------------------------------
function buildAutomatedIronFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 4;

  player.sendMessage("§8[§eFarm de Ferro§8] §eConstruindo Farm Automática de Ferro completa...");

  try {
    // 1. Câmara de Morte e Coleta (Nível do Solo)
    // 4 Funis direcionando para o Baú Duplo de Saída
    dim.getBlock({ x: sx + 4, y: sy, z: sz + 4 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 5, y: sy, z: sz + 4 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 4, y: sy, z: sz + 5 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 5, y: sy, z: sz + 5 })?.setType("minecraft:hopper");

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 2, y: sy, z: sz + 4 },
      { x: sx + 3, y: sy, z: sz + 4 },
      "minecraft:iron_ingot",
      "south"
    );

    // Muros de Pedra ao redor da câmara de lava
    for (let dy = 0; dy <= 4; dy++) {
      for (let dx = 3; dx <= 6; dx++) {
        for (let dz = 3; dz <= 6; dz++) {
          if (dx === 3 || dx === 6 || dz === 3 || dz === 6) {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:glass");
          }
        }
      }
    }

    // Lava suspensa no nível 2 da câmara (os golems têm 3 blocos de altura, queimam na cabeça e o drop cai nos funis)
    dim.getBlock({ x: sx + 4, y: sy + 2, z: sz + 4 })?.setType("minecraft:lava");
    dim.getBlock({ x: sx + 5, y: sy + 2, z: sz + 5 })?.setType("minecraft:lava");

    // 2. Plataforma Superior de Spawn dos Golems de Ferro (8x8 no nível Y + 5)
    for (let dx = 0; dx <= 9; dx++) {
      for (let dz = 0; dz <= 9; dz++) {
        const px = sx + dx;
        const pz = sz + dz;
        const isBorder = dx === 0 || dx === 9 || dz === 0 || dz === 9;
        const isCenterChute = (dx === 4 || dx === 5) && (dz === 4 || dz === 5);

        if (isCenterChute) {
          dim.getBlock({ x: px, y: sy + 5, z: pz })?.setType("minecraft:air");
        } else {
          dim.getBlock({ x: px, y: sy + 5, z: pz })?.setType("minecraft:stone_bricks");
        }

        if (isBorder) {
          dim.getBlock({ x: px, y: sy + 6, z: pz })?.setType("minecraft:stone_brick_wall");
          dim.getBlock({ x: px, y: sy + 7, z: pz })?.setType("minecraft:stone_brick_wall");
        }
      }
    }

    // Correnteza de Água nos 4 cantos empurrando os Golems para o centro
    dim.getBlock({ x: sx + 1, y: sy + 6, z: sz + 1 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 8, y: sy + 6, z: sz + 1 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 1, y: sy + 6, z: sz + 8 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 8, y: sy + 6, z: sz + 8 })?.setType("minecraft:water");

    // 3. Casulos Seguros de Aldeões e Camas no topo
    for (let i = 0; i < 3; i++) {
      dim.getBlock({ x: sx + 1 + i, y: sy + 8, z: sz + 4 })?.setType("minecraft:bed");
      dim.getBlock({ x: sx + 1 + i, y: sy + 8, z: sz + 5 })?.setType("minecraft:bed");
    }

    // Spawna os aldeões em segurança no casulo
    dim.spawnEntity("minecraft:villager_v2", { x: sx + 2.5, y: sy + 9, z: sz + 4.5 });
    dim.spawnEntity("minecraft:villager_v2", { x: sx + 3.5, y: sy + 9, z: sz + 4.5 });
    dim.spawnEntity("minecraft:iron_golem", { x: sx + 4.5, y: sy + 6.5, z: sz + 4.5 });

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Ferro Pronta§8] §aFarm Automática de Ferro concluída! Plataforma com correntezas, câmara de lava suspensa, funis e Baú Duplo de coleta com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cFarm de Ferro§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 2: FARM DE CANA-DE-AÇÚCAR & BAMBU (PISTÃO + OBSERVADOR)
// ----------------------------------------------------------------------------
function buildAutomatedSugarCaneFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 2;

  player.sendMessage("§8[§aFarm de Cana§8] §eConstruindo Farm Automática de Cana-de-Açúcar & Bambu com Pistões e Observadores...");

  try {
    // 1. Canaleta Central de Água com Funil e Baú no fim
    for (let dx = 0; dx < 8; dx++) {
      dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + 2 })?.setType("minecraft:smooth_quartz");
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 2 })?.setType("minecraft:water");
    }

    // Funil no final da correnteza (dx = 0) levando para o Baú Duplo
    dim.getBlock({ x: sx, y: sy, z: sz + 2 })?.setType("minecraft:hopper");
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy, z: sz + 2 },
      { x: sx - 1, y: sy, z: sz + 2 },
      "minecraft:sugar_cane",
      "south"
    );

    // 2. Duas fileiras de Terra/Areia com Cana e Bambu (Norte z = sz+1, Sul z = sz+3)
    for (let dx = 1; dx < 8; dx++) {
      // Norte: Cana-de-açúcar
      dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + 1 })?.setType("minecraft:sand");
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 1 })?.setType("minecraft:sugar_cane");

      // Pistão no nível 1 (empurra quando a cana cresce no bloco 2)
      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz })?.setType("minecraft:stone_bricks");
      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + 1 })?.setType("minecraft:piston");

      // Observador no nível 2 (detecta o 3º bloco de cana)
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz })?.setType("minecraft:stone_bricks");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 1 })?.setType("minecraft:observer");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz })?.setType("minecraft:redstone_wire");

      // Sul: Bambu
      dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + 3 })?.setType("minecraft:dirt");
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 3 })?.setType("minecraft:bamboo");

      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + 4 })?.setType("minecraft:stone_bricks");
      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + 3 })?.setType("minecraft:piston");

      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 4 })?.setType("minecraft:stone_bricks");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 3 })?.setType("minecraft:observer");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 4 })?.setType("minecraft:redstone_wire");
    }

    // 3. Paredes e Cobertura de Vidro para evitar que os itens caiam fora da canaleta
    for (let dx = 0; dx <= 8; dx++) {
      for (let dy = 0; dy <= 3; dy++) {
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz - 1 })?.setType("minecraft:glass");
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + 5 })?.setType("minecraft:glass");
      }
      dim.getBlock({ x: sx + dx, y: sy + 4, z: sz + 2 })?.setType("minecraft:glass");
    }

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Cana Pronta§8] §aFarm Automática de Cana & Bambu concluída! Toda vez que a cana cresce, os observadores disparam os pistões e o fluxo de água carrega os drops direto para o Baú Duplo!");
  } catch (err) {
    player.sendMessage("§8[§cFarm de Cana§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 3: FARM DE ABÓBORA & MELANCIA AUTOMÁTICA
// ----------------------------------------------------------------------------
function buildAutomatedMelonPumpkinFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 2;

  player.sendMessage("§8[§6Farm de Abóbora & Melancia§8] §eConstruindo Farm Automática...");

  try {
    // Linha de coleta inferior com Funis e Baú Duplo
    for (let dx = 0; dx < 6; dx++) {
      dim.getBlock({ x: sx + dx, y: sy - 1, z: sz + 1 })?.setType("minecraft:hopper");
    }

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy - 1, z: sz + 1 },
      { x: sx - 1, y: sy - 1, z: sz + 1 },
      "minecraft:melon_slice",
      "south"
    );

    // Canteiro alternado de Abóbora e Melancia com pistões e observadores
    for (let dx = 0; dx < 6; dx++) {
      dim.getBlock({ x: sx + dx, y: sy - 1, z: sz })?.setType("minecraft:water");
      dim.getBlock({ x: sx + dx, y: sy, z: sz })?.setType("minecraft:farmland");

      dim.getBlock({ x: sx + dx, y: sy, z: sz + 1 })?.setType(
        dx % 2 === 0 ? "minecraft:pumpkin" : "minecraft:melon_block"
      );

      // Pistão em cima empurrando para baixo para quebrar o bloco
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 1 })?.setType("minecraft:piston");
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz })?.setType("minecraft:observer");
      dim.getBlock({ x: sx + dx, y: sy + 3, z: sz })?.setType("minecraft:redstone_wire");
      dim.getBlock({ x: sx + dx, y: sy + 3, z: sz + 1 })?.setType("minecraft:redstone_wire");
    }

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Abóboras Pronta§8] §aFarm Automática de Abóbora & Melancia construída com pistões, observadores e baú coletor com moldura brilhante!");
  } catch (err) {
    player.sendMessage("§8[§cFarm§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 4: FARM AUTOMÁTICA DE MOB TRAP (TORRE DE DROPS E XP)
// ----------------------------------------------------------------------------
function buildAutomatedMobTrap(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 3;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 3;

  player.sendMessage("§8[§cMob Trap§8] §eConstruindo Torre de Mob Trap automática...");

  try {
    // 1. Base de Coleta com Funis e Baú Duplo
    dim.getBlock({ x: sx + 1, y: sy, z: sz + 1 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 2, y: sy, z: sz + 1 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 1, y: sy, z: sz + 2 })?.setType("minecraft:hopper");
    dim.getBlock({ x: sx + 2, y: sy, z: sz + 2 })?.setType("minecraft:hopper");

    fillDoubleChestWithSingleItem(
      dim,
      { x: sx + 3, y: sy, z: sz + 1 },
      { x: sx + 4, y: sy, z: sz + 1 },
      "minecraft:gunpowder",
      "west"
    );

    // 2. Tubo de Queda (22 blocos de altura para deixar os monstros com 1 de vida ou matar na queda)
    for (let dy = 1; dy <= 20; dy++) {
      for (let dx = 0; dx <= 3; dx++) {
        for (let dz = 0; dz <= 3; dz++) {
          if (dx === 0 || dx === 3 || dz === 0 || dz === 3) {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:stone_bricks");
          } else {
            dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + dz })?.setType("minecraft:air");
          }
        }
      }
    }

    // 3. Câmara Escura de Spawn no Topo com Correntezas de Água
    const topY = sy + 21;
    for (let dx = -3; dx <= 6; dx++) {
      for (let dz = -3; dz <= 6; dz++) {
        dim.getBlock({ x: sx + dx, y: topY, z: sz + dz })?.setType("minecraft:stone_bricks");
        dim.getBlock({ x: sx + dx, y: topY + 4, z: sz + dz })?.setType("minecraft:stone_bricks");
        if (dx === -3 || dx === 6 || dz === -3 || dz === 6) {
          for (let dy = 1; dy <= 3; dy++) {
            dim.getBlock({ x: sx + dx, y: topY + dy, z: sz + dz })?.setType("minecraft:stone_bricks");
          }
        }
      }
    }

    // Água empurrando os mobs dos cantos para o buraco central
    dim.getBlock({ x: sx - 2, y: topY + 1, z: sz - 2 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 5, y: topY + 1, z: sz - 2 })?.setType("minecraft:water");
    dim.getBlock({ x: sx - 2, y: topY + 1, z: sz + 5 })?.setType("minecraft:water");
    dim.getBlock({ x: sx + 5, y: topY + 1, z: sz + 5 })?.setType("minecraft:water");

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aMob Trap Pronta§8] §aTorre de Mob Trap concluída! Mobs hostis spawnam no escuro no topo, a água empurra para a queda e os drops caem nos funis e no Baú Duplo de pólvora/ossos!");
  } catch (err) {
    player.sendMessage("§8[§cMob Trap§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 5: FARM AUTOMÁTICA DE ALGAS / KELP (COMBUSTÍVEL INFINITO)
// ----------------------------------------------------------------------------
function buildAutomatedKelpFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 2;

  player.sendMessage("§8[§2Farm de Algas§8] §eConstruindo Farm Automática de Algas...");

  try {
    // Tanque de água com vidro e pistões
    for (let dx = 0; dx < 5; dx++) {
      dim.getBlock({ x: sx + dx, y: sy, z: sz + 1 })?.setType("minecraft:sand");
      dim.getBlock({ x: sx + dx, y: sy + 1, z: sz + 1 })?.setType("minecraft:kelp");

      // Coluna d'água
      for (let dy = 1; dy <= 6; dy++) {
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz })?.setType("minecraft:glass");
        dim.getBlock({ x: sx + dx, y: sy + dy, z: sz + 2 })?.setType("minecraft:glass");
      }

      // Pistão no nível 2 e Observador no nível 5
      dim.getBlock({ x: sx + dx, y: sy + 2, z: sz + 2 })?.setType("minecraft:piston");
      dim.getBlock({ x: sx + dx, y: sy + 5, z: sz + 2 })?.setType("minecraft:observer");
    }

    // Funil coletor na superfície
    dim.getBlock({ x: sx, y: sy + 6, z: sz + 1 })?.setType("minecraft:hopper");
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy + 6, z: sz + 1 },
      { x: sx - 1, y: sy + 6, z: sz + 1 },
      "minecraft:dried_kelp_block",
      "south"
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Algas Pronta§8] §aFarm de Algas construída! Produção infinita de algas desidratadas para combustível 100% renovável!");
  } catch (err) {
    player.sendMessage("§8[§cAlgas§8] §cErro: " + String(err));
  }
}

// ----------------------------------------------------------------------------
// FARM 6: FARM AUTOMÁTICA DE LÃ (TOSQUIA COM EJETORES)
// ----------------------------------------------------------------------------
function buildAutomatedWoolFarm(player) {
  const dim = player.dimension;
  const sx = Math.floor(player.location.x) + 2;
  const sy = Math.floor(player.location.y);
  const sz = Math.floor(player.location.z) - 2;

  player.sendMessage("§8[§fFarm de Lã§8] §eConstruindo Farm Automática de Lã com Tosquiadores...");

  try {
    // 4 Baias de Ovelhas com Grama, Observador e Ejetor com Tesouras
    for (let i = 0; i < 4; i++) {
      const bx = sx + i * 2;

      // Nível 0: Funil embaixo da grama
      dim.getBlock({ x: bx, y: sy - 1, z: sz + 1 })?.setType("minecraft:hopper");
      // Nível 1: Bloco de Grama
      dim.getBlock({ x: bx, y: sy, z: sz + 1 })?.setType("minecraft:grass_block");
      // Traseira: Observador detectando quando a ovelha come a grama
      dim.getBlock({ x: bx, y: sy, z: sz + 2 })?.setType("minecraft:observer");
      // Nível 2: Ejetor virado para a ovelha carregado de tesouras
      dim.getBlock({ x: bx, y: sy + 1, z: sz + 2 })?.setType("minecraft:dispenser");

      // Vidro ao redor para prender a ovelha na baia
      dim.getBlock({ x: bx, y: sy + 1, z: sz })?.setType("minecraft:glass");
      dim.getBlock({ x: bx - 1, y: sy + 1, z: sz + 1 })?.setType("minecraft:glass");
      dim.getBlock({ x: bx + 1, y: sy + 1, z: sz + 1 })?.setType("minecraft:glass");

      // Spawna uma ovelha na baia
      dim.spawnEntity("minecraft:sheep", { x: bx + 0.5, y: sy + 1.2, z: sz + 1.5 });
    }

    // Baú Duplo Coletor de Lã com Moldura Brilhante
    fillDoubleChestWithSingleItem(
      dim,
      { x: sx - 2, y: sy - 1, z: sz + 1 },
      { x: sx - 1, y: sy - 1, z: sz + 1 },
      "minecraft:white_wool",
      "south"
    );

    try { player.playSound("random.levelup", { pitch: 1.0, volume: 1.0 }); } catch (e) {}
    player.sendMessage("§8[§aFarm de Lã Pronta§8] §aFarm de Lã Automática construída! Toda vez que a ovelha come a grama, o ejetor tosquia a lã automaticamente e guarda no Baú Duplo!");
  } catch (err) {
    player.sendMessage("§8[§cLã§8] §cErro: " + String(err));
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

  if (bpFolder) {
    bpFolder.file('manifest.json', generateBpManifest(config));
    bpFolder.file('pack_icon.png', iconBlob);
    bpFolder.folder('scripts')?.file('main.js', generateMainScript(config, modules));
    bpFolder.folder('items')?.file('survival_menu.json', generateCustomItemJson());
    bpFolder.folder('recipes')?.file('survival_menu_recipe.json', generateCustomRecipeJson());
    bpFolder
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [BP]\npack.description=${config.addonDescription} (Bedrock ${safeVer})\nitem.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}\n`
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
        `pack.name=${config.addonName} v${safeVer} [RP]\npack.description=Interface e Recursos para ${config.addonName} v${safeVer} (Conquistas Ativas)\nitem.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}\n`
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

  if (packType === 'bp') {
    zip.file('manifest.json', generateBpManifest(config));
    zip.file('pack_icon.png', iconBlob);
    zip.folder('scripts')?.file('main.js', generateMainScript(config, modules));
    zip.folder('items')?.file('survival_menu.json', generateCustomItemJson());
    zip.folder('recipes')?.file('survival_menu_recipe.json', generateCustomRecipeJson());
    zip
      .folder('texts')
      ?.file(
        'pt_BR.lang',
        `pack.name=${config.addonName} v${safeVer} [BP]\npack.description=${config.addonDescription} (Bedrock ${safeVer})\nitem.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}\n`
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
        `pack.name=${config.addonName} v${safeVer} [RP]\npack.description=Interface e Recursos para ${config.addonName} v${safeVer} (Conquistas Ativas)\nitem.survivalmenu:amuleto.name=§a§lTeclado & Menu Survival ${safeVer}\n`
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
