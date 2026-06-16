

export function PerformanceWidget() {
  return (
    <div className="bg-primary text-on-primary p-stack-lg rounded-xl border border-primary flex flex-col justify-between">
      <div>
        <h3 className="text-headline-md font-bold mb-2">Performance SLA</h3>
        <p className="text-body-md opacity-80">Média de tempo para resolução este mês.</p>
      </div>
      <div className="text-center py-6">
        <p className="text-[48px] font-bold">1h 45m</p>
        <p className="text-caption uppercase tracking-widest opacity-60">Meta: 2h 00m</p>
      </div>
      <div className="w-full bg-on-primary/10 h-2 rounded-full overflow-hidden">
        <div className="bg-primary-fixed h-full w-[85%]"></div>
      </div>
    </div>
  );
}
