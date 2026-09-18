import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 shadow-lg">
        <Compass
          size={20}
          className="text-cyan-400"
        />
      </div>

      <div>
        <p className="text-sm font-black tracking-widest text-slate-950">
          POLARIS
        </p>

        <p className="text-xs font-medium tracking-wide text-slate-400">
          EXPEDITION COMMAND
        </p>
      </div>
    </Link>
  );
};

export default Logo;