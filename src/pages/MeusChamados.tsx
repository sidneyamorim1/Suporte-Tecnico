import { useState } from 'react';
import { useNavigation } from '../contexts/NavigationContext';

const mockChamados = [
  {
    id: '#1024',
    title: 'Falha no Servidor de Arquivos',
    category: 'TI',
    categoryColor: 'bg-secondary-container text-on-secondary-container',
    priority: 'Crítica',
    priorityDot: 'bg-error',
    priorityText: 'text-error',
    status: 'Em Progresso',
    statusIcon: 'cached',
    statusColor: 'text-secondary',
    date: '16/06/2025',
  },
  {
    id: '#1025',
    title: 'Reparo em Quadro Elétrico - Bloco B',
    category: 'Elétrica',
    categoryColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    priority: 'Alta',
    priorityDot: 'bg-orange-500',
    priorityText: 'text-orange-600',
    status: 'Pendente',
    statusIcon: 'schedule',
    statusColor: 'text-on-surface-variant',
    date: '15/06/2025',
  },
  {
    id: '#1026',
    title: 'Manutenção Ar-Condicionado Sala 04',
    category: 'Predial',
    categoryColor: 'bg-green-100 text-green-800',
    priority: 'Média',
    priorityDot: 'bg-blue-400',
    priorityText: 'text-blue-500',
    status: 'Validando',
    statusIcon: 'fact_check',
    statusColor: 'text-secondary',
    date: '14/06/2025',
  },
  {
    id: '#1027',
    title: 'Acesso à Câmera de Monitoramento Lote 12',
    category: 'Segurança',
    categoryColor: 'bg-slate-200 text-slate-700',
    priority: 'Média',
    priorityDot: 'bg-blue-400',
    priorityText: 'text-blue-500',
    status: 'Concluído',
    statusIcon: 'done_all',
    statusColor: 'text-green-600',
    date: '13/06/2025',
  },
  {
    id: '#1028',
    title: 'Troca de Switch de Rede — Bloco A',
    category: 'TI',
    categoryColor: 'bg-secondary-container text-on-secondary-container',
    priority: 'Baixa',
    priorityDot: 'bg-slate-400',
    priorityText: 'text-slate-500',
    status: 'Concluído',
    statusIcon: 'done_all',
    statusColor: 'text-green-600',
    date: '12/06/2025',
  },
];

const statusFilters = ['Todos', 'Em Progresso', 'Pendente', 'Validando', 'Concluído'];

export function MeusChamados() {
  const { navigate } = useNavigation();
  const [filterStatus, setFilterStatus] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockChamados.filter((c) => {
    const matchStatus = filterStatus === 'Todos' || c.status === filterStatus;
    const matchSearch =
      searchTerm.trim() === '' ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-stack-lg">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-headline-lg font-bold text-primary">Meus Chamados</h2>
          <p className="text-body-md text-on-surface-variant mt-1">
            Acompanhe o status dos seus chamados abertos e histórico.
          </p>
        </div>
        <button
          onClick={() => navigate('novo-chamado')}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-opacity text-body-md self-start sm:self-auto"
        >
          <span className="material-symbols-outlined">add</span>
          Novo Chamado
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: String(mockChamados.length), icon: 'inbox', color: 'text-primary' },
          { label: 'Abertos', value: '2', icon: 'open_in_new', color: 'text-error' },
          { label: 'Em Progresso', value: '1', icon: 'cached', color: 'text-secondary' },
          { label: 'Concluídos', value: '2', icon: 'check_circle', color: 'text-green-600' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex items-center gap-3"
          >
            <span className={`material-symbols-outlined text-2xl ${stat.color}`}>{stat.icon}</span>
            <div>
              <p className="text-display font-bold text-primary leading-none">{stat.value}</p>
              <p className="text-caption text-on-surface-variant mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters + Search */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
        <div className="p-stack-lg border-b border-outline-variant flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <h3 className="text-headline-md font-bold text-primary">Lista de Chamados</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:flex-none">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por título ou ID..."
                className="w-full sm:w-56 pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary outline-none cursor-pointer"
            >
              {statusFilters.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">ID</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Assunto</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Categoria</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Prioridade</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Status</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Data</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-on-surface-variant text-body-md">
                    <span className="material-symbols-outlined text-4xl block mb-2 opacity-30">inbox</span>
                    Nenhum chamado encontrado.
                  </td>
                </tr>
              ) : (
                filtered.map((chamado) => (
                  <tr key={chamado.id} className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <td className="px-6 py-5 text-body-md font-bold text-primary">{chamado.id}</td>
                    <td className="px-6 py-5">
                      <p className="text-body-md font-bold text-on-surface truncate max-w-xs">{chamado.title}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-caption font-bold ${chamado.categoryColor}`}>
                        {chamado.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${chamado.priorityDot}`}></span>
                        <span className={`text-body-md font-bold ${chamado.priorityText}`}>{chamado.priority}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`text-body-md font-bold flex items-center gap-1 ${chamado.statusColor}`}>
                        <span className="material-symbols-outlined text-[18px]">{chamado.statusIcon}</span>
                        {chamado.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-body-md text-on-surface-variant">{chamado.date}</td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                        more_vert
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
          <span className="text-caption text-on-surface-variant">
            Mostrando {filtered.length} de {mockChamados.length} chamados
          </span>
        </div>
      </div>
    </div>
  );
}
