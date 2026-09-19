import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  number,
  title,
  description,
}) => {
  return (
    <div className="group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">

      {/* Top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-transparent transition group-hover:bg-cyan-400" />

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
          <Icon
            size={21}
            className="text-cyan-400"
          />
        </div>

        <div className="flex items-center gap-2">

          <span className="text-xs font-bold text-slate-600">
            {number}
          </span>

          <ArrowUpRight
            size={17}
            className="text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
          />

        </div>

      </div>

      <div className="mt-7">

        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm font-medium leading-6 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
};

export default FeatureCard;