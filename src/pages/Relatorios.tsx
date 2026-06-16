const chamadosPorCategoria = [
  { categoria: 'Informática/TI', total: 18, concluidos: 14, color: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
  { categoria: 'Elétrica', total: 9, concluidos: 6, color: 'bg-tertiary-fixed', textColor: 'text-on-tertiary-fixed-variant' },
  { categoria: 'Predial', total: 12, concluidos: 9, color: 'bg-green-100', textColor: 'text-green-800' },
  { categoria: 'Segurança', total: 5, concluidos: 3, color: 'bg-slate-200', textColor: 'text-slate-700' },
  { categoria: 'Telecom', total: 7, concluidos: 5, color: 'bg-purple-100', textColor: 'text-purple-800' },
];

const tecnicosPerformance = [
  { nome: 'Carlos Mendes', resolvidos: 24, emAndamento: 2, tempoMedio: '1h 20min', avatar: 'C' },
  { nome: 'Ana Ferreira', resolvidos: 19, emAndamento: 3, tempoMedio: '2h 05min', avatar: 'A' },
  { nome: 'Bruno Costa', resolvidos: 15, emAndamento: 1, tempoMedio: '1h 45min', avatar: 'B' },
  { nome: 'Mariana Lima', resolvidos: 11, emAndamento: 4, tempoMedio: '3h 10min', avatar: 'M' },
];

const chamadosMes = [
  { mes: 'Jan', total: 28 },
  { mes: 'Fev', total: 34 },
  { mes: 'Mar', total: 22 },
  { mes: 'Abr', total: 41 },
  { mes: 'Mai', total: 38 },
  { mes: 'Jun', total: 26 },
];

const maxTotal = Math.max(...chamadosMes.map((m) => m.total));

export function Relatorios() {
  return (
    <div className="space-y-stack-lg">
      {/* Page Header */}
      <div>
        <h2 className="text-headline-lg font-bold text-primary">Relatórios</h2>
        <p className="text-body-md text-on-surface-variant mt-1">
          Análise de desempenho e estatísticas do sistema de suporte.
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total de Chamados', value: '51', icon: 'inbox', sub: 'Este mês', color: 'text-primary' },
          { label: 'Concluídos', value: '37', icon: 'check_circle', sub: '72% de resolução', color: 'text-green-600' },
          { label: 'Em Aberto', value: '14', icon: 'open_in_new', sub: '5 críticos', color: 'text-error' },
          { label: 'Tempo Médio', value: '2h10', icon: 'schedule', sub: 'Por chamado', color: 'text-secondary' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-md flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-label-md font-bold text-on-surface-variant uppercase tracking-wide">{kpi.label}</span>
              <span className={`material-symbols-outlined ${kpi.color}`}>{kpi.icon}</span>
            </div>
            <p className="text-display font-bold text-primary">{kpi.value}</p>
            <p className="text-caption text-on-surface-variant">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">

        {/* Gráfico de Barras — Chamados por Mês */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg">
          <h3 className="text-headline-md font-bold text-primary mb-1">Chamados por Mês</h3>
          <p className="text-caption text-on-surface-variant mb-6">Total de chamados abertos nos últimos 6 meses</p>
          <div className="flex items-end gap-3 h-40">
            {chamadosMes.map((item) => (
              <div key={item.mes} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-caption font-bold text-on-surface-variant">{item.total}</span>
                <div
                  className="w-full bg-primary rounded-t-md transition-all hover:bg-secondary"
                  style={{ height: `${(item.total / maxTotal) * 100}%`, minHeight: 4 }}
                />
                <span className="text-caption text-on-surface-variant">{item.mes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Por Categoria */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg">
          <h3 className="text-headline-md font-bold text-primary mb-1">Por Categoria</h3>
          <p className="text-caption text-on-surface-variant mb-5">Taxa de resolução por tipo de chamado</p>
          <div className="space-y-4">
            {chamadosPorCategoria.map((item) => {
              const pct = Math.round((item.concluidos / item.total) * 100);
              return (
                <div key={item.categoria}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-caption font-bold ${item.color} ${item.textColor}`}>
                        {item.categoria}
                      </span>
                    </div>
                    <span className="text-caption font-bold text-on-surface-variant">
                      {item.concluidos}/{item.total} • {pct}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desempenho dos Técnicos */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
        <div className="p-stack-lg border-b border-outline-variant flex justify-between items-center">
          <div>
            <h3 className="text-headline-md font-bold text-primary">Desempenho dos Técnicos</h3>
            <p className="text-caption text-on-surface-variant mt-0.5">Ranking de resolução de chamados este mês</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-body-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-[600px]">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">#</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Técnico</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Resolvidos</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Em Andamento</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Tempo Médio</th>
                <th className="px-6 py-4 text-label-md font-bold text-on-surface-variant">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {tecnicosPerformance.map((tec, idx) => {
                const perf = Math.min(100, Math.round((tec.resolvidos / 24) * 100));
                return (
                  <tr key={tec.nome} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 text-body-md font-bold text-on-surface-variant">
                      {idx === 0 ? (
                        <span className="material-symbols-outlined text-yellow-500">workspace_premium</span>
                      ) : (
                        `${idx + 1}º`
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-label-md font-bold flex-shrink-0">
                          {tec.avatar}
                        </div>
                        <span className="text-body-md font-bold text-on-surface">{tec.nome}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-body-md font-bold text-green-600">{tec.resolvidos}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-body-md text-on-surface-variant">{tec.emAndamento}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-body-md text-on-surface">{tec.tempoMedio}</span>
                    </td>
                    <td className="px-6 py-4 min-w-[120px]">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${perf > 75 ? 'bg-green-500' : perf > 50 ? 'bg-secondary' : 'bg-error'}`}
                            style={{ width: `${perf}%` }}
                          />
                        </div>
                        <span className="text-caption font-bold text-on-surface-variant w-8 text-right">{perf}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
