import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { MainLayout } from './components/layout/MainLayout';
import { KpiCard } from './components/dashboard/KpiCard';
import { ChamadosTable } from './components/dashboard/ChamadosTable';
import { MapWidget } from './components/dashboard/MapWidget';
import { PerformanceWidget } from './components/dashboard/PerformanceWidget';
import { MeusChamados } from './pages/MeusChamados';
import { NovoChamado } from './pages/NovoChamado';
import { Relatorios } from './pages/Relatorios';
import { Configuracoes } from './pages/Configuracoes';
import { Login } from './pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// ── Dashboard (Visão Geral) ───────────────────────────────────────────────────
function Dashboard() {
  return (
    <>
      {/* Summary KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <KpiCard
          title="Chamados Abertos"
          value="12"
          icon="open_in_new"
          iconColor="text-primary"
          trendIcon="trending_up"
          trendText="+2 desde ontem"
          trendColorClass="text-error"
        />
        <KpiCard
          title="Em Atendimento"
          value="05"
          icon="engineering"
          iconColor="text-secondary"
          trendIcon="sync"
          trendText="Ritmo normal"
          trendColorClass="text-on-surface-variant"
        />
        <KpiCard
          title="Aguardando Peças"
          value="03"
          icon="pending_actions"
          iconColor="text-tertiary-container"
          trendIcon="warning"
          trendText="Logística pendente"
          trendColorClass="text-on-tertiary-container"
        />
        <KpiCard
          title="Concluídos Hoje"
          value="08"
          icon="check_circle"
          iconColor="text-secondary-fixed-dim"
          trendIcon="trending_up"
          trendText="Acima da média"
          trendColorClass="text-secondary"
        />
      </section>

      {/* Filters & Actions Row */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-2">
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
          <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-label-md font-bold transition-all hover:opacity-90 whitespace-nowrap">Todos</button>
          <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Informática/TI</button>
          <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Elétrica</button>
          <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Predial</button>
          <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Segurança</button>
          <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Telecom</button>
        </div>
        <div className="flex gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          <button className="flex-1 lg:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg text-body-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
            Filtros Avançados
          </button>
          <button className="flex-1 lg:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg text-body-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">download</span>
            Exportar
          </button>
        </div>
      </section>

      {/* Main Data Table */}
      <ChamadosTable />

      {/* Secondary Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <MapWidget />
        <PerformanceWidget />
      </section>
    </>
  );
}

// ── Router ────────────────────────────────────────────────────────────────────
function AppRouter() {
  const { currentPage } = useNavigation();

  const pages: Record<string, JSX.Element> = {
    'dashboard': <Dashboard />,
    'meus-chamados': <MeusChamados />,
    'novo-chamado': <NovoChamado />,
    'relatorios': <Relatorios />,
    'configuracoes': <Configuracoes />,
  };

  return (
    <MainLayout>
      {pages[currentPage] ?? <Dashboard />}
    </MainLayout>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
function RootApp() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-container flex items-center justify-center">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
      </div>
    );
  }

  if (!session) {
    return <Login />;
  }

  return (
    <NavigationProvider>
      <AppRouter />
    </NavigationProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <RootApp />
    </AuthProvider>
  );
}

export default App;
