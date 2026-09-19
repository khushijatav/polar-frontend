import { ArrowUpRight } from "lucide-react";

const PrimaryButton = ({
  children,
  to = "#",
}) => {
  return (
    <a
      href={to}
      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
    >
      {children}

      <ArrowUpRight size={17} />
    </a>
  );
};

export default PrimaryButton;