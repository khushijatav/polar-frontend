const DashboardStat = ({
  icon: Icon,
  label,
  value,
  change,
  description,
}) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/20">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          <Icon
            size={19}
            className="text-cyan-400"
          />
        </div>

        {change && (
          <span className="rounded-full bg-green-400/10 px-2 py-1 text-[10px] font-bold text-green-400">
            {change}
          </span>
        )}

      </div>

      <p className="mt-5 text-3xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-400">
        {label}
      </p>

      {description && (
        <p className="mt-1 text-[11px] text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
};

export default DashboardStat;