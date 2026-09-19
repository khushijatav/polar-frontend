const StatusBadge = ({ status }) => {
  const styles = {
    Operational:
      "bg-green-400/10 text-green-400",

    Active:
      "bg-cyan-400/10 text-cyan-400",

    Warning:
      "bg-yellow-400/10 text-yellow-400",

    Critical:
      "bg-red-400/10 text-red-400",

    Completed:
      "bg-blue-400/10 text-blue-400",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
        styles[status] || "bg-slate-400/10 text-slate-400"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;