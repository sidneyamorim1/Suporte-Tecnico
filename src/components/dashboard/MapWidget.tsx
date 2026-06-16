

export function MapWidget() {
  return (
    <div className="lg:col-span-2 bg-white p-stack-lg rounded-xl border border-outline-variant h-64 relative overflow-hidden group">
      <div className="z-10 relative">
        <h3 className="text-headline-md font-bold text-primary mb-4">Mapa de Incidências</h3>
        <p className="text-body-md text-on-surface-variant">Distribuição geográfica dos chamados ativos por unidade fabril.</p>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-[180px] text-primary select-none absolute -bottom-8 -right-8">map</span>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-error rounded-full"></span>
          <span className="text-label-md">Ala Sul (High)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-secondary-container rounded-full"></span>
          <span className="text-label-md">Ala Norte (Normal)</span>
        </div>
      </div>
    </div>
  );
}
