import { NavLink, Link } from "react-router-dom";
import {
  Snowflake,
  LogIn,
  LayoutDashboard,
} from "lucide-react";

const Navbar = () => {
  const navItems = [
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
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-[9999]
        h-20
        border-b
        border-white/10
        bg-slate-950/95
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/10
            "
          >
            <Snowflake
              size={21}
              strokeWidth={1.8}
              className="text-cyan-400"
            />
          </div>

          <div className="leading-none">
            <h1
              className="
                text-base
                font-black
                tracking-[0.2em]
                text-white
              "
            >
              POLARIS
            </h1>

            <p
              className="
                mt-1
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Expedition Command
            </p>
          </div>
        </Link>

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                group
                relative
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="flex items-center gap-3">
          {/* Sign In */}
          <Link
            to="/login"
            className="
              hidden
              items-center
              gap-2
              text-sm
              font-medium
              text-slate-400
              transition
              duration-300
              hover:text-white
              sm:flex
            "
          >
            <LogIn size={16} />
            <span>Sign In</span>
          </Link>

          {/* Command Center */}
          <Link
            to="/dashboard"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-300/20
              bg-cyan-400
              px-4
              py-2.5
              text-xs
              font-bold
              text-slate-950
              shadow-lg
              shadow-cyan-500/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-cyan-300
              hover:shadow-cyan-400/20
            "
          >
            <LayoutDashboard size={15} />

            <span className="hidden sm:inline">
              Command Center
            </span>

            <span className="sm:hidden">
              Command
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;