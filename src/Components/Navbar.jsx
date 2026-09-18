import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";

const Navbar = () => {
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "How It Works",
      path: "/how-it-works",
    },
    {
      name: "Logistics",
      path: "/logistics",
    },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-6 pt-5">
      <nav className="flex h-16 w-full items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-6 shadow-lg backdrop-blur-xl">

        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-2 text-sm font-semibold transition duration-300 ${
                  active
                    ? "text-slate-950"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                {link.name}

                {/* Active underline */}
                {active && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-cyan-400" />
                )}
              </Link>
            );
          })}

        </div>

        {/* Command Center */}
        <Link
          to="/login"
          className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950"
        >
          Command Center
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;