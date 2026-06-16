import { useNavigation, type Page } from '../../contexts/NavigationContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems: { page: Page; icon: string; label: string }[] = [
  { page: 'dashboard', icon: 'dashboard', label: 'Visão Geral' },
  { page: 'meus-chamados', icon: 'confirmation_number', label: 'Meus Chamados' },
  { page: 'relatorios', icon: 'bar_chart', label: 'Relatórios' },
  { page: 'configuracoes', icon: 'settings', label: 'Configurações' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { currentPage, navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    navigate(page);
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed left-0 top-0 h-full w-sidebar-width bg-primary flex flex-col py-stack-lg px-stack-md z-50 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo / Título */}
        <div className="mb-10 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-headline-md font-headline-md font-bold text-on-primary">Suporte Técnico</h1>
            <p className="text-label-md font-label-md text-on-primary-container">Gestão de Infraestrutura</p>
          </div>
          <button
            className="md:hidden text-on-primary-container hover:text-on-primary"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map(({ page, icon, label }) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left sidebar-active ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-primary-container/70 hover:text-on-primary-container hover:bg-primary-container/50'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? 'text-on-primary-container' : ''}`}>{icon}</span>
                <span className="font-label-md text-label-md">{label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-5 bg-on-primary-container rounded-full opacity-70" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Novo Chamado Button */}
        <div className="mt-auto px-4 space-y-3">
          <button
            onClick={() => handleNavigate('novo-chamado')}
            className="w-full bg-primary-fixed text-primary px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">add</span>
            Novo Chamado
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 px-2 py-3 border-t border-primary-container/40 mt-2">
            <img
              alt="Foto do Usuário"
              className="w-9 h-9 rounded-full border border-primary-container object-cover flex-shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHTjN8D-O9NJxhHbD95BD81vxbF9rojvUo-xnH7j80dcOyWHMtkfxAE9eaaSIPSKfcDYDWuC_nLZc01PMdM_VKKqCt3b9ol0FezDV9MOQgLEwcM4Qm5y0UiUG-qMv7UV8dn2r5XMwQi_6aDj5G-JHC7NL7XbBNxnApXhcX5wH0xgc-th93auCTCdRZmrWFIwA4D3OFPa9sfmQWomQ3WXAMypX7KPuHOgY2crt4FP4o5BJ_pk1XKQxVA6mwfjxxa_N6u79sU7nSvw"
            />
            <div className="overflow-hidden">
              <p className="text-label-md text-on-primary font-bold truncate">Ricardo Silva</p>
              <p className="text-caption text-on-primary-container truncate">Coordenador de TI</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
