import { useNavigation } from '../../contexts/NavigationContext';
import { useAuth } from '../../contexts/AuthContext';
interface HeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  'dashboard': 'Visão Geral',
  'meus-chamados': 'Meus Chamados',
  'novo-chamado': 'Novo Chamado',
  'relatorios': 'Relatórios',
  'configuracoes': 'Configurações',
};

export function Header({ onMenuClick }: HeaderProps) {
  const { currentPage } = useNavigation();
  const { user, signOut } = useAuth();
  const pageTitle = pageTitles[currentPage] ?? 'Suporte Técnico';

  return (
    <header className="docked full-width top-0 sticky z-40 bg-surface border-b border-outline-variant flex justify-between items-center h-16 px-gutter">
      <div className="flex items-center flex-1 gap-4">
        <button
          className="md:hidden text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors"
          onClick={onMenuClick}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Page title on mobile */}
        <span className="md:hidden font-bold text-on-surface text-body-lg">{pageTitle}</span>

        {/* Search bar — desktop */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:ring-2 focus:ring-primary outline-none transition-all"
            placeholder="Buscar chamados, equipamentos ou técnicos..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-4">
        {/* Notifications */}
        <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        {/* Help */}
        <button className="hidden sm:block text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        {/* User Info */}
        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-outline-variant">
          <div className="text-right hidden sm:block max-w-[150px] overflow-hidden">
            <p className="text-label-md font-bold truncate text-on-surface">
              {user?.email?.split('@')[0] || 'Usuário'}
            </p>
            <p className="text-caption text-on-surface-variant text-xs truncate">
              {user?.email || 'coordenador@ti.com'}
            </p>
          </div>
          <img
            alt="Foto do Usuário"
            className="w-10 h-10 rounded-full border border-outline-variant object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHTjN8D-O9NJxhHbD95BD81vxbF9rojvUo-xnH7j80dcOyWHMtkfxAE9eaaSIPSKfcDYDWuC_nLZc01PMdM_VKKqCt3b9ol0FezDV9MOQgLEwcM4Qm5y0UiUG-qMv7UV8dn2r5XMwQi_6aDj5G-JHC7NL7XbBNxnApXhcX5wH0xgc-th93auCTCdRZmrWFIwA4D3OFPa9sfmQWomQ3WXAMypX7KPuHOgY2crt4FP4o5BJ_pk1XKQxVA6mwfjxxa_N6u79sU7nSvw"
          />
          <button onClick={signOut} title="Sair" className="text-on-surface-variant hover:text-error hover:bg-error/10 p-2 rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
