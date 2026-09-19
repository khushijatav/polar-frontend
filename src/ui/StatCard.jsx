const StatCard = ({
  value,
  label,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <p className="text-2xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
};

export default StatCard;