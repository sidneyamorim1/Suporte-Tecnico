

interface KpiCardProps {
  title: string;
  value: string;
  icon: string;
  iconColor: string;
  trendIcon: string;
  trendText: string;
  trendColorClass: string;
}

export function KpiCard({
  title,
  value,
  icon,
  iconColor,
  trendIcon,
  trendText,
  trendColorClass
}: KpiCardProps) {
  return (
    <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant flex flex-col gap-2">
      <div className="flex justify-between items-center text-on-surface-variant">
        <span className="text-label-md uppercase tracking-wider font-bold">{title}</span>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <p className="text-display font-display text-primary">{value}</p>
      <div className={`flex items-center gap-1 text-caption ${trendColorClass}`}>
        <span className="material-symbols-outlined text-[14px]">{trendIcon}</span>
        <span>{trendText}</span>
      </div>
    </div>
  );
}
