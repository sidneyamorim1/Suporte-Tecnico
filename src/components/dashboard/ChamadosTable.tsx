

const mockChamados = [
  {
    id: '#1024',
    title: 'Falha no Servidor de Arquivos',
    reporter: 'Admin Centro',
    category: 'TI',
    categoryColor: 'bg-secondary-container text-on-secondary-container',
    priority: 'Crítica',
    priorityDot: 'bg-error',
    priorityText: 'text-error',
    status: 'Em Progresso',
    statusIcon: 'cached',
    statusColor: 'text-secondary',
  },
  {
    id: '#1025',
    title: 'Reparo em Quadro Elétrico - Bloco B',
    reporter: 'Seg. Patrimonial',
    category: 'Elétrica',
    categoryColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    priority: 'Alta',
    priorityDot: 'bg-orange-500',
    priorityText: 'text-orange-600',
    status: 'Pendente',
    statusIcon: 'schedule',
    statusColor: 'text-on-surface-variant',
  },
  {
    id: '#1026',
    title: 'Manutenção Ar-Condicionado Sala 04',
    reporter: 'Recepção',
    category: 'Predial',
    categoryColor: 'bg-green-100 text-green-800',
    priority: 'Média',
    priorityDot: 'bg-blue-400',
    priorityText: 'text-blue-500',
    status: 'Validando',
    statusIcon: 'fact_check',
    statusColor: 'text-secondary',
  },
  {
    id: '#1027',
    title: 'Acesso à Câmera de Monitoramento Lote 12',
    reporter: 'Monitoria',
    category: 'Segurança',
    categoryColor: 'bg-slate-200 text-slate-700',
    priority: 'Média',
    priorityDot: 'bg-blue-400',
    priorityText: 'text-blue-500',
    status: 'Concluído',
    statusIcon: 'done_all',
    statusColor: 'text-green-600',
  },
];

export function ChamadosTable() {
  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="p-stack-lg border-b border-outline-variant flex justify-between items-center">
        <h2 className="text-headline-md font-bold text-primary">Chamados Recentes</h2>
        <span className="text-caption text-on-surface-variant">Atualizado há 2 minutos</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">ID</th>
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Assunto</th>
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Categoria</th>
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Prioridade</th>
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Status</th>
              <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {mockChamados.map((chamado) => (
              <tr key={chamado.id} className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                <td className="px-6 py-5 text-body-md font-bold text-primary">{chamado.id}</td>
                <td className="px-6 py-5">
                  <p className="text-body-md font-bold text-on-surface truncate max-w-xs">{chamado.title}</p>
                  <p className="text-caption text-on-surface-variant">Reportado por: {chamado.reporter}</p>
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
                <td className="px-6 py-5 text-right">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                    more_vert
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-center">
        <span className="text-caption text-on-surface-variant">Mostrando 4 de 12 chamados</span>
        <div className="flex gap-2">
          <button className="p-1 border border-outline-variant rounded hover:bg-white transition-colors disabled:opacity-50" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="p-1 border border-outline-variant rounded hover:bg-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
