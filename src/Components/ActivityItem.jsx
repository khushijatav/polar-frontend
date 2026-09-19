const ActivityItem = ({
  title,
  description,
  time,
}) => {
  return (
    <div className="flex gap-3">

      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

      <div>

        <p className="text-sm font-medium text-slate-300">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-600">
          {description}
        </p>

        <p className="mt-1 text-[10px] text-slate-700">
          {time}
        </p>

      </div>

    </div>
  );
};

export default ActivityItem;