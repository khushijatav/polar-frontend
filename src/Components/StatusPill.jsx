const StatusPill = ({
  children = "SYSTEM ACTIVE",
  type = "success",
}) => {
  const styles = {
    success:
      "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",

    warning:
      "bg-amber-400/10 text-amber-300 border-amber-400/20",

    info:
      "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${styles[type]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      {children}
    </span>
  );
};

export default StatusPill;