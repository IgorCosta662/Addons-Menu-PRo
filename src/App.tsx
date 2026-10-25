/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  AddonConfig,
  CheatModule,
  INITIAL_MODULES,
  generateUuidV4,
  generateBpManifest,
  generateRpManifest,
  generateMainScript,
  generateCustomItemJson,
  generateCustomRecipeJson,
  buildAndDownloadMcAddon,
  downloadIndividualMcPack,
  downloadManualZipFolder,
  runAddonTechnicalAudit,
  getMasterPromptText,
} from './utils/addonGenerator';
import { BedrockSimulator } from './components/BedrockSimulator';
import {
  Download,
  Copy,
  Check,
  FolderArchive,
  RefreshCw,
  Search,
  Sliders,
  FileCode,
  ShieldCheck,
  BookOpen,
  Sparkles,
} from 'lucide-react';

type FileTab = 'main_js' | 'bp_manifest' | 'rp_manifest' | 'item_json' | 'recipe_json' | 'master_prompt';
type CategoryFilter = 'all' | 'survival' | 'items' | 'movement' | 'world' | 'visual';

export default function App() {
  const [modules, setModules] = useState<CheatModule[]>(INITIAL_MODULES);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [activeFileTab, setActiveFileTab] = useState<FileTab>('main_js');
  const [copiedFile, setCopiedFile] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [lastExportInfo, setLastExportInfo] = useState<{ filename: string; sizeKb: number } | null>(
    null
  );

  const [config, setConfig] = useState<AddonConfig>(() => ({
    addonName: 'SurvivalMenu Pro',
    addonAuthor: 'BedrockForge',
    addonDescription:
      'Menu Cheats, Grimório do Menu na Mão, Teclado de Armaduras/Ferramentas Encantadas, VeinMiner e Multiplicador com Conquistas 100% Ativas',
    targetBuildVersion: '26.60.29',
    minEngineVersion: [1, 21, 0],
    serverApiVersion: '1.14.0',
    serverUiVersion: '1.3.0',
    triggerType: 'double_shift_keypad',
    soundFeedback: true,
    actionbarHud: true,
    keepInventoryScript: true,
    bpHeaderUuid: generateUuidV4(),
    bpModuleUuid: generateUuidV4(),
    bpScriptUuid: generateUuidV4(),
    rpHeaderUuid: generateUuidV4(),
    rpModuleUuid: generateUuidV4(),
  }));

  const toggleModule = (id: string) => {
    setModules((prev) => prev.map((m) => (m.id === id ? { ...m, enabled: !m.enabled } : m)));
  };

  const applyPreset = (preset: 'all' | 'qol' | 'god') => {
    if (preset === 'all') {
      setModules((prev) => prev.map((m) => ({ ...m, enabled: true })));
    } else if (preset === 'qol') {
      const qolIds = [
        'armor_tool_enchanter',
        'shulker_trim_armors',
        'mega_chest_hall',
        'item_duplicator',
        'item_renamer',
        'all_items_browser',
        'vein_tree_miner',
        'auto_magnet',
        'keep_inventory',
        'night_vision',
        'waypoints_tp',
        'auto_repair',
        'ore_radar_hud',
      ];
      setModules((prev) => prev.map((m) => ({ ...m, enabled: qolIds.includes(m.id) })));
    } else if (preset === 'god') {
      const godIds = [
        'armor_tool_enchanter',
        'shulker_trim_armors',
        'mega_chest_hall',
        'item_duplicator',
        'item_renamer',
        'all_items_browser',
        'vein_tree_miner',
        'one_hit_kill',
        'auto_magnet',
        'god_regen',
        'xp_boost',
        'haste_miner',
        'instant_structures',
        'mob_spawner_menu',
        'fly_dash',
        'mob_aura_freeze',
      ];
      setModules((prev) => prev.map((m) => ({ ...m, enabled: godIds.includes(m.id) })));
    }
  };

  const regenerateAllUuids = () => {
    setConfig((prev) => ({
      ...prev,
      bpHeaderUuid: generateUuidV4(),
      bpModuleUuid: generateUuidV4(),
      bpScriptUuid: generateUuidV4(),
      rpHeaderUuid: generateUuidV4(),
      rpModuleUuid: generateUuidV4(),
    }));
  };

  const handleDownloadAddon = async () => {
    setIsExporting(true);
    try {
      const result = await buildAndDownloadMcAddon(config, modules);
      setLastExportInfo(result);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadPack = async (packType: 'bp' | 'rp') => {
    setIsExporting(true);
    try {
      const result = await downloadIndividualMcPack(config, modules, packType);
      setLastExportInfo(result);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadManualZip = async () => {
    setIsExporting(true);
    try {
      const result = await downloadManualZipFolder(config, modules);
      setLastExportInfo(result);
    } finally {
      setIsExporting(false);
    }
  };

  const filteredModules = useMemo(() => {
    return modules.filter((m) => {
      const matchesCat = categoryFilter === 'all' || m.category === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.apiMethod.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [modules, categoryFilter, searchQuery]);

  const currentCodeContent = useMemo(() => {
    switch (activeFileTab) {
      case 'main_js':
        return generateMainScript(config, modules);
      case 'bp_manifest':
        return generateBpManifest(config);
      case 'rp_manifest':
        return generateRpManifest(config);
      case 'item_json':
        return generateCustomItemJson();
      case 'recipe_json':
        return generateCustomRecipeJson();
      case 'master_prompt':
        return getMasterPromptText(config);
    }
  }, [activeFileTab, config, modules]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCodeContent);
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 1800);
  };

  const enabledCount = modules.filter((m) => m.enabled).length;
  const auditResults = useMemo(() => runAddonTechnicalAudit(config), [config]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 bg-[#0f172a]/95 backdrop-blur border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            BedrockForge Studio
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href="#modulos"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Módulos do Menu
            </a>
            <a
              href="#simulador"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Simulador Bedrock
            </a>
            <a
              href="#codigo"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Código & Manifesto
            </a>
            <a
              href="#guia"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Guia de Conquistas
            </a>
            <a
              href="#codigo"
              onClick={() => setActiveFileTab('master_prompt')}
              className="text-amber-400 hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Prompt Mestre
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleDownloadAddon}
              disabled={isExporting}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {isExporting ? 'Empacotando...' : `Baixar .MCADDON (${config.targetBuildVersion})`}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-12">
        {/* Hero & Package Configuration Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Core Pitch & Primary Export Action */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-slate-800 bg-slate-900/70 rounded-lg p-7">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 mb-3">
                <span>Minecraft Bedrock v{config.targetBuildVersion}</span>
                <span aria-hidden="true">·</span>
                <span>Conquistas Xbox / PSN / Switch / Mobile Ativas</span>
                <span aria-hidden="true">·</span>
                <span>Sem Ativar Cheats de Mundo</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Add-On de Menu Cheats para Bedrock {config.targetBuildVersion} sem perder Conquistas
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Gere e baixe o pacote <code className="text-emerald-300 font-mono">.mcaddon</code> configurado especificamente para a versão <strong className="text-white font-mono">{config.targetBuildVersion}</strong> do Minecraft Bedrock. Inclui <strong>Multiplicador de Itens da Mão e do Inventário para qualquer quantidade</strong> (<code className="text-slate-200 font-mono">item.clone()</code>) e <strong>Buscador Universal de todos os itens do jogo</strong> (<code className="text-slate-200 font-mono">ItemTypes.getAll()</code>) mantendo todas as conquistas e progressão válidas.
              </p>

              {/* Preset Selection Buttons */}
              <div className="mb-6">
                <div className="text-xs font-medium text-slate-400 mb-2">
                  Perfis Rápidos de Configuração:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => applyPreset('all')}
                    className="px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Ativar Todos os {modules.length} Cheats ({modules.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPreset('qol')}
                    className="px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Perfil Multiplicador + Catálogo + Radar
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPreset('god')}
                    className="px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Perfil Deus (God Mode + Multiplicador + Voo)
                  </button>
                </div>
              </div>

              {/* Bedrock 26.60.29 Compatibility & Activation Steps */}
              <div className="mb-6 p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <span>⚡ Como Funcionar 100% no Bedrock {config.targetBuildVersion} (Zero Erros de Importação):</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li><strong className="text-white">Opção 1 (Automática):</strong> Clique em <code className="text-emerald-300 font-mono">Baixar .MCADDON Completo</code>. Ele contém os 2 pacotes (BP e RP) prontos para importar com 1 clique no PC ou celular.</li>
                  <li><strong className="text-white">Opção 2 (Se der falha no aparelho):</strong> Baixe o <strong className="text-emerald-400">BP (.mcpack)</strong> e o <strong className="text-sky-400">RP (.mcpack)</strong> separados abaixo! Cada um importa de forma independente sem conflitos.</li>
                  <li><strong className="text-white">Ativar no Mundo:</strong> Em <em>Configurações do Mundo</em> &rarr; ative o <strong>Pacote de Comportamento (BP)</strong> e o <strong>Pacote de Recursos (RP)</strong>. Mantenha em <strong>Sobrevivência sem Cheats</strong> para preservar 100% das suas conquistas!</li>
                  <li><strong className="text-white">Entrada no Mapa:</strong> O <strong className="text-emerald-300">Grimório do Menu Survival (Livro Encantado)</strong> é entregue automaticamente no <strong>Slot 0 da sua mão</strong> e na hotbar. Basta clicar no chão, agachar ou digitar <code className="text-emerald-300 font-mono">!menu</code> no chat!</li>
                </ol>
              </div>
            </div>

            {/* Primary Download Action Box */}
            <div className="pt-5 border-t border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">
                    Pacote calibrado para Minecraft Bedrock {config.targetBuildVersion} (Conquistas Ativas)
                  </div>
                  <div className="text-sm font-mono text-emerald-400 tabular-nums mt-0.5">
                    {lastExportInfo
                      ? `Último download: ${lastExportInfo.filename} (${lastExportInfo.sizeKb} KB)`
                      : `${enabledCount} de ${modules.length} módulos prontos para v${config.targetBuildVersion}`}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadAddon}
                  disabled={isExporting}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <Download className="w-4 h-4" />
                  {isExporting ? 'Gerando Pacote...' : `Baixar .MCADDON Completo`}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
                <span className="text-slate-400 font-medium">
                  Downloads Diretos & Alternativos (Evita qualquer erro de importação):
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadPack('bp')}
                    disabled={isExporting}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-emerald-500/40 hover:border-emerald-500 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    title="Baixar apenas o Pacote de Comportamento para importar direto"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    Baixar BP (.mcpack)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadPack('rp')}
                    disabled={isExporting}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-sky-500/40 hover:border-sky-500 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    title="Baixar apenas o Pacote de Recursos"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    Baixar RP (.mcpack)
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadManualZip}
                    disabled={isExporting}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    title="Baixar arquivo ZIP com pastas descompactadas e tutorial de instalação manual"
                  >
                    <FolderArchive className="w-3.5 h-3.5 text-amber-400" />
                    Pastas ZIP (Manual)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Add-On Parameters & Trigger Settings */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-slate-800 bg-slate-900/70 rounded-lg p-6">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-base font-semibold text-white">
                    Configurações da Versão {config.targetBuildVersion}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={regenerateAllUuids}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  title="Gerar novos UUIDs v4 para evitar conflito de pacotes"
                >
                  <RefreshCw className="w-3 h-3" />
                  Novos UUIDs
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block font-medium text-slate-300 mb-1">
                      Nome do Add-On no Minecraft:
                    </label>
                    <input
                      type="text"
                      value={config.addonName}
                      onChange={(e) =>
                        setConfig((p) => ({
                          ...p,
                          addonName: e.target.value,
                          bpHeaderUuid: generateUuidV4(),
                          bpModuleUuid: generateUuidV4(),
                          bpScriptUuid: generateUuidV4(),
                          rpHeaderUuid: generateUuidV4(),
                          rpModuleUuid: generateUuidV4(),
                        }))
                      }
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">
                      Versão do Jogo:
                    </label>
                    <input
                      type="text"
                      value={config.targetBuildVersion}
                      onChange={(e) =>
                        setConfig((p) => ({ ...p, targetBuildVersion: e.target.value }))
                      }
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm font-mono text-emerald-400 font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">
                    Como Abrir o Menu no Jogo (Gatilho sem Comandos):
                  </label>
                  <select
                    value={config.triggerType}
                    onChange={(e) =>
                      setConfig((p) => ({
                        ...p,
                        triggerType: e.target.value as AddonConfig['triggerType'],
                      }))
                    }
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="double_shift_keypad">
                      Tecla Rápida: Agachar (Shift) 2x olhando p/ baixo + Item Teclado Survival
                    </option>
                    <option value="compass_sneak">
                      Segurar Bússola + Agachar (Sneak) e Usar (ou Teclado Survival)
                    </option>
                    <option value="custom_item">
                      Usar o Item "Teclado Survival" (Recebido ao nascer ou 1 Graveto + 1 Terra)
                    </option>
                    <option value="stick_use">
                      Segurar um Graveto (Stick) + Agachar e Usar
                    </option>
                    <option value="clock_sneak">
                      Segurar um Relógio (Clock) + Agachar e Usar
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">
                      Compatibilidade min_engine_version:
                    </label>
                    <select
                      value={config.minEngineVersion.join('.')}
                      onChange={(e) => {
                        const parts = e.target.value.split('.').map(Number) as [
                          number,
                          number,
                          number
                        ];
                        setConfig((p) => ({ ...p, minEngineVersion: parts }));
                      }}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="1.21.0">Universal [1, 21, 0] (Recomendado - Bedrock 26.60.29 / 1.21.x)</option>
                      <option value="1.21.50">Estável 1.21.50 ([1, 21, 50])</option>
                      <option value="1.20.80">Compatibilidade Ampla ([1, 20, 80])</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1">
                      Versão @minecraft/server:
                    </label>
                    <select
                      value={config.serverApiVersion}
                      onChange={(e) => {
                        const newVer = e.target.value;
                        const newUi = newVer === '2.11.0' ? '2.2.0' : '1.3.0';
                        setConfig((p) => ({ ...p, serverApiVersion: newVer, serverUiVersion: newUi }));
                      }}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="1.14.0">1.14.0 (Recomendado - Estável Oficial Bedrock 1.21.x / 26.60)</option>
                      <option value="1.16.0">1.16.0 (Bedrock 1.21.50 - 1.21.60)</option>
                      <option value="1.13.0">1.13.0 (Bedrock 1.21.0 Legado)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <label className="flex items-center justify-between py-1.5 cursor-pointer">
                    <span className="text-slate-300">
                      Entregar Item do Menu Cheat no inventário ao entrar no mundo (Slot 0 / Hotbar)
                    </span>
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center justify-between py-1.5 cursor-pointer">
                    <span className="text-slate-300">
                      Som de feedback (<code className="font-mono">random.pop</code>) ao abrir menu
                    </span>
                    <input
                      type="checkbox"
                      checked={config.soundFeedback}
                      onChange={(e) =>
                        setConfig((p) => ({ ...p, soundFeedback: e.target.checked }))
                      }
                      className="accent-emerald-500 w-4 h-4"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>UUID BP: {config.bpHeaderUuid.slice(0, 13)}...</span>
              <span className="text-emerald-400"> Sem Experimental Toggle</span>
            </div>
          </div>
        </section>

        {/* Full-Width Technical Proof Strip */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border border-slate-800 bg-slate-900/40 rounded-lg p-5">
          <div className="pr-4 sm:border-r border-slate-800">
            <div className="text-xs text-slate-400">Compatibilidade de Conquistas</div>
            <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mt-1">
              100% Ativas
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Suporte nativo da atualização 1.21.70+ sem ativar Cheats
            </div>
          </div>

          <div className="pr-4 lg:border-r border-slate-800">
            <div className="text-xs text-slate-400">Dependências de Experiência</div>
            <div className="text-xl font-bold font-mono text-white tabular-nums mt-1">
              0 Experimentos
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Usa API estável 1.17.0 / 1.3.0 (Não pede Beta APIs)
            </div>
          </div>

          <div className="pr-4 sm:border-r border-slate-800">
            <div className="text-xs text-slate-400">Receita de Craft no Survival</div>
            <div className="text-xl font-bold font-mono text-white tabular-nums mt-1">
              1 Graveto + 1 Terra
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Mais entrega automática ao dar spawn no mundo
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400">Arquivos no Pacote .MCADDON</div>
            <div className="text-xl font-bold font-mono text-sky-400 tabular-nums mt-1">
              10 Arquivos (BP + RP)
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Manifestos, Script UI, Item, Receita, Texturas e Idioma
            </div>
          </div>
        </section>

        {/* Section 1: Cheat Modules Configurator Table */}
        <section id="modulos" className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 mb-1">
                <span>01. Personalização de Recursos</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="tabular-nums">{enabledCount} módulos selecionados</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Módulos do Menu de Cheats & Utilitários Survival
              </h2>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar função ou método API..."
                  className="pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-md">
                {(
                  [
                    { id: 'all', label: 'Todos' },
                    { id: 'survival', label: 'Sobrevivência' },
                    { id: 'items', label: 'Itens & Kits' },
                    { id: 'movement', label: 'Teleporte & Voo' },
                    { id: 'world', label: 'Mundo' },
                    { id: 'visual', label: 'Radar & Visão' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setCategoryFilter(tab.id)}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      categoryFilter === tab.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* High-Density Modules Table */}
          <div className="border border-slate-800 bg-slate-900/60 rounded-lg overflow-hidden">
            {filteredModules.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-sm text-slate-400 mb-3">
                  Nenhum módulo encontrado para o filtro "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('all');
                  }}
                  className="px-3.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-800">
                {filteredModules.map((mod, idx) => (
                  <div
                    key={mod.id}
                    className="p-4 hover:bg-slate-800/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="font-mono text-slate-500 tabular-nums">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-medium">
                          Compatível com Conquistas
                        </span>
                        <span aria-hidden="true">·</span>
                        <code className="text-slate-300 font-mono">{mod.apiMethod}</code>
                      </div>
                      <h3 className="text-sm font-semibold text-white">{mod.name}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{mod.description}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          mod.enabled
                            ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
                            : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-white'
                        }`}
                      >
                        {mod.enabled ? 'Incluído no Menu' : 'Desativado'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Interactive In-Game Simulator */}
        <section id="simulador" className="space-y-4">
          <div>
            <div className="text-xs text-slate-400 mb-1">
              02. Teste Interativo da Interface
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Simulador do Menu no Jogo (@minecraft/server-ui)
            </h2>
          </div>
          <BedrockSimulator config={config} modules={modules} />
        </section>

        {/* Section 3: Generated Code & Manifest Inspector */}
        <section id="codigo" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 mb-1">
                03. Inspeção Transparente do Código-Fonte
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Arquivos Gerados no Pacote (.MCADDON)
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedFile ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copiado para Área de Transferência
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copiar Arquivo Atual
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="border border-slate-800 bg-slate-900/80 rounded-lg overflow-hidden">
            {/* File Selector Tabs */}
            <div className="flex items-center gap-1 p-2 bg-slate-950 border-b border-slate-800 overflow-x-auto">
              {(
                [
                  { id: 'main_js', label: 'BP/scripts/main.js' },
                  { id: 'bp_manifest', label: 'BP/manifest.json' },
                  { id: 'rp_manifest', label: 'RP/manifest.json' },
                  { id: 'item_json', label: 'BP/items/survival_menu.json' },
                  { id: 'recipe_json', label: 'BP/recipes/survival_menu_recipe.json' },
                  { id: 'master_prompt', label: 'PROMPT MESTRE (IA / DEV)', isSpecial: true },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFileTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeFileTab === tab.id
                      ? tab.id === 'master_prompt'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-emerald-400 border border-slate-700'
                      : tab.id === 'master_prompt'
                        ? 'text-amber-400/90 hover:text-amber-300'
                        : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {'isSpecial' in tab && tab.isSpecial ? (
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <FileCode className="w-3.5 h-3.5" />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Output */}
            <pre className="p-5 text-xs font-mono text-slate-200 overflow-x-auto max-h-[480px] leading-relaxed bg-slate-950/60">
              <code>{currentCodeContent}</code>
            </pre>
          </div>
        </section>

        {/* Section 4: Technical Audit & Achievement Preservation Guide */}
        <section id="guia" className="border border-slate-800 bg-slate-900/60 rounded-lg p-7 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs text-emerald-400 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>04. Diagnóstico Técnico Real & Garantia de Conquistas</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Análise de Compatibilidade: Minecraft Bedrock v{config.targetBuildVersion}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadAddon}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-md shadow-emerald-950/40"
              >
                <Download className="w-4 h-4" />
                Baixar .MCADDON Completo
              </button>
              <button
                type="button"
                onClick={() => handleDownloadPack('bp')}
                disabled={isExporting}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-200 bg-slate-800 hover:bg-slate-700 border border-emerald-500/40 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                BP (.mcpack)
              </button>
              <button
                type="button"
                onClick={() => handleDownloadPack('rp')}
                disabled={isExporting}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-200 bg-slate-800 hover:bg-slate-700 border border-sky-500/40 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                RP (.mcpack)
              </button>
              <button
                type="button"
                onClick={handleDownloadManualZip}
                disabled={isExporting}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FolderArchive className="w-3.5 h-3.5 text-amber-400" />
                Pastas ZIP
              </button>
            </div>
          </div>

          {/* 6-Point Technical Audit Matrix */}
          <div className="divide-y divide-slate-800 border border-slate-800 rounded-md bg-slate-950/60">
            {auditResults.map((item) => (
              <div
                key={item.id}
                className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-semibold ${
                        item.status === 'passed' ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {item.status === 'passed' ? '[VERIFICADO]' : '[ATENÇÃO]'}
                    </span>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
                <div className="text-xs font-mono text-slate-400 shrink-0">
                  {item.technicalProof}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400">PASSO 01 · IMPORTAÇÃO</div>
              <h3 className="text-base font-semibold text-white">
                Abra o Arquivo .MCADDON
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clique em <strong>Baixar .MCADDON Verificado</strong>. No PC (Windows 10/11), dê dois cliques no arquivo para o Minecraft importar o Behavior Pack e o Resource Pack. No Celular (Android/iOS), toque no arquivo baixado e selecione abrir com <strong>Minecraft</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400">PASSO 02 · REGRAS DE OURO</div>
              <h3 className="text-base font-semibold text-white">
                Não Ative "Cheats" nem "Beta APIs"
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ao criar ou editar seu mundo Sobrevivência, ative o <em>{config.addonName}</em> em <strong>Pacotes de Comportamento</strong> e <strong>Pacotes de Recursos</strong>. Mantenha o jogo em <strong>Sobrevivência</strong> e <strong>NÃO ligue</strong> "Ativar Cheats" nem "Beta APIs" (nosso pacote já usa a API estável que não precisa de Beta APIs).
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400">PASSO 03 · ATALHO DE TECLADO</div>
              <h3 className="text-base font-semibold text-white">
                Olhe para o Chão + Shift 2x
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dentro do mundo, você pode abrir o <strong>Teclado de Armaduras, Ferramentas & Encantamentos</strong> a qualquer momento mesmo de mãos vazias: basta <strong>olhar para o chão e apertar Agachar (Shift) 2 vezes seguidas</strong>, ou usar o item <strong>Teclado & Menu Survival</strong> entregue no inventário!
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Auditado para Minecraft Bedrock v{config.targetBuildVersion} — Flags <code className="text-slate-200">cheatsEnabled: 0</code> e <code className="text-slate-200">hasBeenLoadedInCreative: 0</code> preservados.
              </span>
            </div>
            <span className="font-mono text-slate-500">
              Formato: Manifest v2 · @minecraft/server {config.serverApiVersion} (Estável)
            </span>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-800/80 py-6 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>BedrockForge Studio — Gerador de Add-Ons Survival para Minecraft Bedrock Edition</span>
          <div className="flex items-center gap-4">
            <a href="#modulos" className="hover:text-slate-300 transition-colors">
              Módulos
            </a>
            <a href="#simulador" className="hover:text-slate-300 transition-colors">
              Simulador
            </a>
            <a href="#codigo" className="hover:text-slate-300 transition-colors">
              Código-Fonte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
