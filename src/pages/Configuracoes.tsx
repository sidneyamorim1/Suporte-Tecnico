import { useState } from 'react';

type ConfigTab = 'perfil' | 'sistema' | 'categorias' | 'status' | 'usuarios' | 'notificacoes' | 'seguranca';

const tabs: { id: ConfigTab; icon: string; label: string }[] = [
  { id: 'perfil', icon: 'manage_accounts', label: 'Perfil do Usuário' },
  { id: 'sistema', icon: 'tune', label: 'Sistema' },
  { id: 'categorias', icon: 'category', label: 'Categorias' },
  { id: 'status', icon: 'flag', label: 'Status de Chamados' },
  { id: 'usuarios', icon: 'group', label: 'Usuários' },
  { id: 'notificacoes', icon: 'notifications', label: 'Notificações' },
  { id: 'seguranca', icon: 'lock', label: 'Segurança e Acesso' },
];

// ── Tab: Perfil ──────────────────────────────────────────────────────────────
function TabPerfil() {
  const [form, setForm] = useState({
    name: 'Ricardo Silva',
    email: 'ricardo.silva@empresa.com',
    cargo: 'Coordenador de TI',
    phone: '(11) 99999-0001',
  });
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-5">
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHTjN8D-O9NJxhHbD95BD81vxbF9rojvUo-xnH7j80dcOyWHMtkfxAE9eaaSIPSKfcDYDWuC_nLZc01PMdM_VKKqCt3b9ol0FezDV9MOQgLEwcM4Qm5y0UiUG-qMv7UV8dn2r5XMwQi_6aDj5G-JHC7NL7XbBNxnApXhcX5wH0xgc-th93auCTCdRZmrWFIwA4D3OFPa9sfmQWomQ3WXAMypX7KPuHOgY2crt4FP4o5BJ_pk1XKQxVA6mwfjxxa_N6u79sU7nSvw"
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
          />
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary text-on-primary rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow">
            <span className="material-symbols-outlined text-[14px]">photo_camera</span>
          </button>
        </div>
        <div>
          <p className="text-headline-md font-bold text-on-surface">{form.name}</p>
          <p className="text-body-md text-on-surface-variant">{form.cargo}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {([
          { label: 'Nome Completo', key: 'name', type: 'text' },
          { label: 'E-mail', key: 'email', type: 'email' },
          { label: 'Cargo', key: 'cargo', type: 'text' },
          { label: 'Telefone', key: 'phone', type: 'tel' },
        ] as const).map(({ label, key, type }) => (
          <div key={key}>
            <label className="block text-label-md font-bold text-on-surface mb-1.5">{label}</label>
            <input
              type={type}
              value={form[key]}
              onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
              className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">save</span>
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}

// ── Tab: Sistema ─────────────────────────────────────────────────────────────
function TabSistema() {
  const [form, setForm] = useState({
    title: 'Suporte Técnico',
    subtitle: 'Gestão de Infraestrutura',
    timezone: 'America/Sao_Paulo',
    dateFormat: 'DD/MM/YYYY',
  });
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Título do Sistema</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Subtítulo</label>
          <input
            type="text"
            value={form.subtitle}
            onChange={(e) => setForm((p) => ({ ...p, subtitle: e.target.value }))}
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Fuso Horário</label>
          <select
            value={form.timezone}
            onChange={(e) => setForm((p) => ({ ...p, timezone: e.target.value }))}
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none cursor-pointer"
          >
            <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
            <option value="America/Manaus">Manaus (GMT-4)</option>
            <option value="America/Belem">Belém (GMT-3)</option>
          </select>
        </div>
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Formato de Data</label>
          <select
            value={form.dateFormat}
            onChange={(e) => setForm((p) => ({ ...p, dateFormat: e.target.value }))}
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none cursor-pointer"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">save</span>
          Salvar Configurações
        </button>
      </div>
    </div>
  );
}

// ── Tab: Categorias ──────────────────────────────────────────────────────────
function TabCategorias() {
  const [cats, setCats] = useState([
    { id: 1, name: 'Informática/TI', color: '#3b82f6', active: true },
    { id: 2, name: 'Elétrica', color: '#f59e0b', active: true },
    { id: 3, name: 'Predial', color: '#22c55e', active: true },
    { id: 4, name: 'Segurança', color: '#64748b', active: true },
    { id: 5, name: 'Telecom', color: '#a855f7', active: false },
  ]);
  const [newCat, setNewCat] = useState({ name: '', color: '#3b82f6' });

  const addCat = () => {
    if (!newCat.name.trim()) return;
    setCats((p) => [...p, { id: Date.now(), ...newCat, active: true }]);
    setNewCat({ name: '', color: '#3b82f6' });
  };

  return (
    <div className="space-y-5">
      {/* Add new */}
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Nova Categoria</label>
          <input
            type="text"
            value={newCat.name}
            onChange={(e) => setNewCat((p) => ({ ...p, name: e.target.value }))}
            placeholder="Nome da categoria..."
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Cor</label>
          <input
            type="color"
            value={newCat.color}
            onChange={(e) => setNewCat((p) => ({ ...p, color: e.target.value }))}
            className="w-12 h-10 rounded-lg border border-outline-variant cursor-pointer"
          />
        </div>
        <button
          onClick={addCat}
          className="px-4 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Adicionar
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-outline-variant border border-outline-variant rounded-xl overflow-hidden">
        {cats.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
              <span className={`text-body-md font-bold ${cat.active ? 'text-on-surface' : 'text-on-surface-variant line-through'}`}>
                {cat.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-caption px-2 py-0.5 rounded-full font-bold ${cat.active ? 'bg-green-100 text-green-700' : 'bg-surface-container text-on-surface-variant'}`}>
                {cat.active ? 'Ativa' : 'Inativa'}
              </span>
              <button
                onClick={() => setCats((p) => p.map((c) => c.id === cat.id ? { ...c, active: !c.active } : c))}
                className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">{cat.active ? 'toggle_on' : 'toggle_off'}</span>
              </button>
              <button
                onClick={() => setCats((p) => p.filter((c) => c.id !== cat.id))}
                className="p-1 hover:bg-error/10 rounded transition-colors text-on-surface-variant hover:text-error"
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab: Status ───────────────────────────────────────────────────────────────
function TabStatus() {
  const [statuses, setStatuses] = useState([
    { id: 1, name: 'Pendente', icon: 'schedule', color: '#64748b' },
    { id: 2, name: 'Em Progresso', icon: 'cached', color: '#3b82f6' },
    { id: 3, name: 'Aguardando Peças', icon: 'pending_actions', color: '#f59e0b' },
    { id: 4, name: 'Validando', icon: 'fact_check', color: '#a855f7' },
    { id: 5, name: 'Concluído', icon: 'done_all', color: '#22c55e' },
  ]);
  const [newStatus, setNewStatus] = useState({ name: '', icon: 'flag', color: '#3b82f6' });

  return (
    <div className="space-y-5">
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Novo Status</label>
          <input
            type="text"
            value={newStatus.name}
            onChange={(e) => setNewStatus((p) => ({ ...p, name: e.target.value }))}
            placeholder="Nome do status..."
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">Cor</label>
          <input
            type="color"
            value={newStatus.color}
            onChange={(e) => setNewStatus((p) => ({ ...p, color: e.target.value }))}
            className="w-12 h-10 rounded-lg border border-outline-variant cursor-pointer"
          />
        </div>
        <button
          onClick={() => {
            if (!newStatus.name.trim()) return;
            setStatuses((p) => [...p, { id: Date.now(), ...newStatus }]);
            setNewStatus({ name: '', icon: 'flag', color: '#3b82f6' });
          }}
          className="px-4 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Adicionar
        </button>
      </div>
      <div className="divide-y divide-outline-variant border border-outline-variant rounded-xl overflow-hidden">
        {statuses.map((st) => (
          <div key={st.id} className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[18px]" style={{ color: st.color }}>{st.icon}</span>
              <span className="text-body-md font-bold text-on-surface">{st.name}</span>
            </div>
            <button
              onClick={() => setStatuses((p) => p.filter((s) => s.id !== st.id))}
              className="p-1 hover:bg-error/10 rounded transition-colors text-on-surface-variant hover:text-error"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab: Usuários ─────────────────────────────────────────────────────────────
function TabUsuarios() {
  const users = [
    { name: 'Ricardo Silva', email: 'ricardo@empresa.com', role: 'Administrador', cargo: 'Coordenador de TI', avatar: 'R', roleColor: 'bg-primary text-on-primary' },
    { name: 'Carlos Mendes', email: 'carlos@empresa.com', role: 'Técnico', cargo: 'Técnico de TI', avatar: 'C', roleColor: 'bg-secondary-container text-on-secondary-container' },
    { name: 'Ana Ferreira', email: 'ana@empresa.com', role: 'Técnico', cargo: 'Técnica de Elétrica', avatar: 'A', roleColor: 'bg-secondary-container text-on-secondary-container' },
    { name: 'João Souza', email: 'joao@empresa.com', role: 'Cliente', cargo: 'Gerente Comercial', avatar: 'J', roleColor: 'bg-green-100 text-green-800' },
    { name: 'Maria Oliveira', email: 'maria@empresa.com', role: 'Cliente', cargo: 'Recepcionista', avatar: 'M', roleColor: 'bg-green-100 text-green-800' },
  ];
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="px-4 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Novo Usuário
        </button>
      </div>
      <div className="divide-y divide-outline-variant border border-outline-variant rounded-xl overflow-hidden">
        {users.map((u) => (
          <div key={u.email} className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary text-label-md font-bold flex-shrink-0">
                {u.avatar}
              </div>
              <div>
                <p className="text-body-md font-bold text-on-surface">{u.name}</p>
                <p className="text-caption text-on-surface-variant">{u.email} • {u.cargo}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-caption px-2 py-0.5 rounded-full font-bold ${u.roleColor}`}>{u.role}</span>
              <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
              <button className="p-1 hover:bg-error/10 rounded transition-colors text-on-surface-variant hover:text-error">
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab: Notificações ─────────────────────────────────────────────────────────
function TabNotificacoes() {
  const [prefs, setPrefs] = useState({
    novoChamado: true,
    atualizacaoStatus: true,
    chamadoCritico: true,
    resumoDiario: false,
    email: true,
    browser: false,
  });
  const toggle = (key: keyof typeof prefs) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

  const items = [
    { key: 'novoChamado' as const, label: 'Novo chamado aberto', sub: 'Notificado sempre que um chamado for criado' },
    { key: 'atualizacaoStatus' as const, label: 'Atualização de status', sub: 'Quando o status de um chamado seu for alterado' },
    { key: 'chamadoCritico' as const, label: 'Chamado Crítico', sub: 'Alerta imediato para chamados de prioridade crítica' },
    { key: 'resumoDiario' as const, label: 'Resumo diário', sub: 'E-mail com resumo dos chamados do dia' },
  ];

  return (
    <div className="space-y-5">
      <div className="divide-y divide-outline-variant border border-outline-variant rounded-xl overflow-hidden">
        {items.map(({ key, label, sub }) => (
          <div key={key} className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-low transition-colors">
            <div>
              <p className="text-body-md font-bold text-on-surface">{label}</p>
              <p className="text-caption text-on-surface-variant">{sub}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`w-10 h-6 rounded-full transition-colors relative ${prefs[key] ? 'bg-primary' : 'bg-outline-variant'}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${prefs[key] ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-label-md font-bold text-on-surface mb-3">Canal de Notificações</h4>
        <div className="flex gap-3">
          {[
            { key: 'email' as const, icon: 'email', label: 'E-mail' },
            { key: 'browser' as const, icon: 'notifications', label: 'Navegador' },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-bold text-body-md transition-all ${
                prefs[key]
                  ? 'bg-primary text-on-primary border-primary'
                  : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tab: Segurança ─────────────────────────────────────────────────────────────
function TabSeguranca() {
  const [form, setForm] = useState({ current: '', next: '', confirm: '' });
  return (
    <div className="space-y-5 max-w-md">
      <div className="p-4 bg-secondary-container/30 rounded-xl border border-outline-variant flex items-start gap-3">
        <span className="material-symbols-outlined text-primary mt-0.5">shield</span>
        <div>
          <p className="text-label-md font-bold text-on-surface">Troca de Senha</p>
          <p className="text-caption text-on-surface-variant">Sua senha deve ter no mínimo 8 caracteres com letras e números.</p>
        </div>
      </div>
      {[
        { key: 'current' as const, label: 'Senha Atual' },
        { key: 'next' as const, label: 'Nova Senha' },
        { key: 'confirm' as const, label: 'Confirmar Nova Senha' },
      ].map(({ key, label }) => (
        <div key={key}>
          <label className="block text-label-md font-bold text-on-surface mb-1.5">{label}</label>
          <input
            type="password"
            value={form[key]}
            onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
            className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
      ))}
      <button className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-opacity text-body-md flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">lock_reset</span>
        Alterar Senha
      </button>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
const tabContent: Record<ConfigTab, JSX.Element> = {
  perfil: <TabPerfil />,
  sistema: <TabSistema />,
  categorias: <TabCategorias />,
  status: <TabStatus />,
  usuarios: <TabUsuarios />,
  notificacoes: <TabNotificacoes />,
  seguranca: <TabSeguranca />,
};

export function Configuracoes() {
  const [activeTab, setActiveTab] = useState<ConfigTab>('perfil');

  return (
    <div className="space-y-stack-lg">
      {/* Page Header */}
      <div>
        <h2 className="text-headline-lg font-bold text-primary">Configurações</h2>
        <p className="text-body-md text-on-surface-variant mt-1">
          Gerencie seu perfil, preferências e configurações do sistema.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Sidebar das abas */}
        <aside className="lg:w-56 flex-shrink-0">
          <nav className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-l-2 ${
                    isActive
                      ? 'bg-primary/5 border-l-primary text-primary font-bold'
                      : 'border-l-transparent text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : ''}`}>{tab.icon}</span>
                  <span className="text-label-md">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Conteúdo da aba */}
        <main className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg min-h-[400px]">
          <h3 className="text-headline-md font-bold text-primary mb-5 pb-4 border-b border-outline-variant">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h3>
          {tabContent[activeTab]}
        </main>
      </div>
    </div>
  );
}
