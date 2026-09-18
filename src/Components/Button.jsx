import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  variant = "primary",
  icon = true,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-sm font-bold transition duration-300";

  const variants = {
    primary:
      "bg-slate-950 text-white shadow-lg hover:-translate-y-1 hover:bg-slate-800",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:-translate-y-1 hover:border-slate-400",

    cyan:
      "bg-cyan-400 text-slate-950 hover:-translate-y-1 hover:bg-cyan-300",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}

        {icon && <ArrowRight size={17} />}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}

      {icon && <ArrowRight size={17} />}
    </button>
  );
};

export default Button;