import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="relative z-40 flex h-20 w-full items-center justify-between border-b border-white/10 bg-slate-950 px-5 lg:px-8">

      {/* LEFT - Search */}
      <div className="hidden w-80 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 md:flex">

        <Search
          size={17}
          className="shrink-0 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
        />

      </div>


      {/* RIGHT */}
      <div className="ml-auto flex items-center gap-4">

        {/* Notification */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-400"
        >
          <Bell size={18} />

          <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </button>


        {/* Divider */}
        <div className="hidden h-7 w-px bg-white/10 sm:block" />


        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/5"
        >

          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400">
            A
          </div>


          {/* User info */}
          <div className="hidden text-left sm:block">

            <p className="text-sm font-semibold text-white">
              Admin
            </p>

            <p className="mt-0.5 text-[10px] text-slate-500">
              Operations Manager
            </p>

          </div>


          <ChevronDown
            size={15}
            className="hidden text-slate-500 sm:block"
          />

        </button>

      </div>

    </header>
  );
};

export default DashboardHeader;