import {
  Activity,
  Users,
  Package,
  Ship,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import PageLayout from "../Components/PageLayout";
import Sidebar from "../Components/SideBar";
import DashboardHeader from "../Components/DashboardHeader";
import DashboardStat from "../Components/DashboardStat";
import MissionCard from "../Components/MissionCard";
import AlertCard from "../Components/AlertCard";
import ActivityItem from "../Components/ActivityItem";

const Dashboard = () => {
  const stats = [
    {
      icon: Activity,
      value: "04",
      label: "Active Expeditions",
      change: "+12%",
      description: "Currently operational",
    },
    {
      icon: Users,
      value: "186",
      label: "Team Members",
      change: "+8%",
      description: "Across all missions",
    },
    {
      icon: Package,
      value: "342",
      label: "Total Assets",
      change: "+5%",
      description: "Tracked resources",
    },
    {
      icon: Ship,
      value: "03",
      label: "Cargo Ships",
      change: "Active",
      description: "Currently in transit",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="lg:pl-64">

        <DashboardHeader />

        <main className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                Operational Overview
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Command Center
              </h1>

              <p className="mt-2 max-w-xl text-sm text-slate-500">
                Monitor your polar operations, resources and
                logistics from one centralized platform.
              </p>

            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300">
              Create Expedition
              <ArrowUpRight size={15} />
            </button>

          </div>


          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => (
              <DashboardStat
                key={stat.label}
                {...stat}
              />
            ))}

          </div>


          {/* Main grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">

            {/* Missions */}
            <section className="xl:col-span-2">

              <div className="mb-4 flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-bold">
                    Active Expeditions
                  </h2>

                  <p className="mt-1 text-xs text-slate-600">
                    Current mission status
                  </p>

                </div>

                <button className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                  View all
                </button>

              </div>


              <div className="grid gap-4 md:grid-cols-2">

                <MissionCard
                  name="Arctic Expedition 2026"
                  location="Antarctic Operations Zone"
                  team="24"
                  date="18 Sep 2026"
                  status="Operational"
                />

                <MissionCard
                  name="Polar Research Alpha"
                  location="East Antarctica"
                  team="18"
                  date="22 Sep 2026"
                  status="Active"
                />

                <MissionCard
                  name="Ice Survey Mission"
                  location="Ross Ice Shelf"
                  team="12"
                  date="28 Sep 2026"
                  status="Warning"
                />

                <MissionCard
                  name="Base Support Mission"
                  location="McMurdo Region"
                  team="09"
                  date="02 Oct 2026"
                  status="Active"
                />

              </div>

            </section>


            {/* Alerts */}
            <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-bold">
                    Priority Alerts
                  </h2>

                  <p className="mt-1 text-xs text-slate-600">
                    Requires attention
                  </p>

                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-400/10 text-xs font-bold text-red-400">
                  04
                </div>

              </div>


              <div className="mt-3">

                <AlertCard
                  type="Critical"
                  title="Asset inspection overdue"
                  description="Generator G-204 requires immediate inspection."
                  time="12m"
                />

                <AlertCard
                  type="Inventory"
                  title="Low inventory"
                  description="Emergency medical supplies below threshold."
                  time="38m"
                />

                <AlertCard
                  type="Maintenance"
                  title="Maintenance scheduled"
                  description="Vehicle V-17 service due tomorrow."
                  time="1h"
                />

              </div>

            </section>

          </div>


          {/* Bottom */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">

            {/* Map */}
            <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 lg:col-span-2">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-bold">
                    Operational Map
                  </h2>

                  <p className="mt-1 text-xs text-slate-600">
                    Current expedition locations
                  </p>

                </div>

                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

              </div>


              <div className="relative mt-5 h-72 overflow-hidden rounded-xl border border-white/5 bg-slate-950">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%)]" />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Location points */}
                <div className="absolute left-[25%] top-[35%]">

                  <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                </div>

                <div className="absolute left-[58%] top-[48%]">

                  <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                </div>

                <div className="absolute left-[72%] top-[25%]">

                  <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />

                </div>


                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2">

                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  <span className="text-[10px] text-slate-400">
                    3 locations operational
                  </span>

                </div>

              </div>

            </section>


            {/* Activity */}
            <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">

              <h2 className="text-lg font-bold">
                Recent Activity
              </h2>

              <p className="mt-1 text-xs text-slate-600">
                Latest system updates
              </p>


              <div className="mt-6 space-y-6">

                <ActivityItem
                  title="New cargo shipment added"
                  description="Cargo SH-204 assigned to Arctic Expedition."
                  time="8 minutes ago"
                />

                <ActivityItem
                  title="Team member assigned"
                  description="Dr. Alex Morgan joined Research Alpha."
                  time="26 minutes ago"
                />

                <ActivityItem
                  title="Asset status updated"
                  description="Generator G-204 marked for inspection."
                  time="42 minutes ago"
                />

                <ActivityItem
                  title="Inventory received"
                  description="Emergency supplies added to Base Camp."
                  time="1 hour ago"
                />

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;