import {
  LayoutDashboard,
  Compass,
  Users,
  Package,
  ClipboardList,
  Ship,
  Truck,
  Map,
  Wrench,
  Bell,
  BarChart3,
  Settings,
  LogOut,
  Snowflake,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Expeditions",
      path: "/expeditions",
      icon: Compass,
    },
    {
      label: "Team",
      path: "/team",
      icon: Users,
    },
    {
      label: "Assets",
      path: "/assets",
      icon: Package,
    },
    {
      label: "Inventory",
      path: "/inventory",
      icon: ClipboardList,
    },
    {
      label: "Cargo Ships",
      path: "/cargo-ships",
      icon: Ship,
    },
    {
      label: "Vehicles",
      path: "/vehicles",
      icon: Truck,
    },
    {
      label: "Live Map",
      path: "/map",
      icon: Map,
    },
    {
      label: "Maintenance",
      path: "/maintenance",
      icon: Wrench,
    },
    {
      label: "Alerts",
      path: "/alerts",
      icon: Bell,
    },
    {
      label: "Reports",
      path: "/reports",
      icon: BarChart3,
    },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-64 border-r border-white/10 bg-slate-950 lg:flex lg:flex-col">

      {/* Logo */}
      <Link
        to="/"
        className="flex h-20 items-center gap-3 border-b border-white/10 px-6"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          <Snowflake
            size={21}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h1 className="text-sm font-black tracking-[0.2em] text-white">
            POLARIS
          </h1>

          <p className="text-[9px] uppercase tracking-widest text-slate-600">
            Command Center
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">

        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Operations
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-500 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={17} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}

        </div>

        <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          System
        </p>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-white/5 hover:text-white"
        >
          <Settings size={17} />
          Settings
        </NavLink>

      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-3">

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 transition hover:bg-red-400/5 hover:text-red-400">
          <LogOut size={17} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default SideBar;