import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group flex h-full min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
          <Icon
            size={21}
            className="text-cyan-600"
          />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 transition duration-300 group-hover:bg-cyan-50">
          <ArrowUpRight
            size={18}
            className="text-slate-400 transition duration-300 group-hover:text-cyan-500"
          />
        </div>

      </div>

      {/* Content */}
      <div className="mt-7">

        <h3 className="text-lg font-bold leading-6 text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>

      </div>

      {/* Bottom Line */}
      <div className="mt-auto pt-6">

        <div className="h-px w-full bg-slate-100 transition duration-300 group-hover:bg-cyan-100" />

      </div>

    </div>
  );
};

export default FeatureCard;