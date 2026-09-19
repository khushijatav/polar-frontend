import {
  AlertTriangle,
  Wrench,
  Package,
} from "lucide-react";

const AlertCard = ({
  type,
  title,
  description,
  time,
}) => {
  const icons = {
    Critical: AlertTriangle,
    Maintenance: Wrench,
    Inventory: Package,
  };

  const Icon = icons[type] || AlertTriangle;

  return (
    <div className="flex gap-4 border-b border-white/5 py-4 last:border-0">
      
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
        <Icon
          size={17}
          className="text-yellow-400"
        />
      </div>

      <div className="min-w-0 flex-1">
        
        <div className="flex items-center justify-between gap-3">
          
          <h4 className="truncate text-sm font-semibold text-white">
            {title}
          </h4>

          <span className="shrink-0 text-[10px] text-slate-600">
            {time}
          </span>

        </div>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>

      </div>
    </div>
  );
};

export default AlertCard;