type KpiCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function KpiCard({
  title,
  value,
  subtitle,
}: KpiCardProps) {
  return (
    <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
      <h3 className="text-slate-400 text-sm">{title}</h3>

      <p className="mt-3 text-3xl font-bold text-white">
        {value}
      </p>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

