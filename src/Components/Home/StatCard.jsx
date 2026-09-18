const StatCard = ({
  icon: Icon,
  value,
  label,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
      <Icon
        size={18}
        className="text-cyan-400"
      />

      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-black text-white">
          {value}
        </span>

        <span className="mb-1 text-xs text-slate-500">
          {label}
        </span>
      </div>
    </div>
  );
};

export default StatCard;