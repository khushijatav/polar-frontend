import {
  Compass,
  Users,
  Package,
  ClipboardList,
  Ship,
  Wrench,
  Map,
  Bell,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../Components/Navbar";

const FeaturePage = () => {
  const features = [
    {
      icon: Compass,
      number: "01",
      title: "Expedition Management",
      description:
        "Plan, create and monitor every polar expedition from one centralized command center.",
    },
    {
      icon: Users,
      number: "02",
      title: "Team Management",
      description:
        "Manage expedition members, roles, responsibilities and team availability.",
    },
    {
      icon: Package,
      number: "03",
      title: "Asset Management",
      description:
        "Track equipment, assets, availability, condition and operational status.",
    },
    {
      icon: ClipboardList,
      number: "04",
      title: "Inventory Management",
      description:
        "Monitor supplies, stock levels, critical resources and inventory requirements.",
    },
    {
      icon: Ship,
      number: "05",
      title: "Cargo Logistics",
      description:
        "Coordinate cargo ships, shipments, destinations, ETA and delivery status.",
    },
    {
      icon: Wrench,
      number: "06",
      title: "Maintenance",
      description:
        "Track maintenance schedules, service history and upcoming equipment needs.",
    },
    {
      icon: Map,
      number: "07",
      title: "Location Tracking",
      description:
        "Monitor bases, vehicles, cargo movement and important operational locations.",
    },
    {
      icon: Bell,
      number: "08",
      title: "Smart Alerts",
      description:
        "Get timely alerts for low inventory, maintenance and critical expedition events.",
    },
    {
      icon: BarChart3,
      number: "09",
      title: "Reports & Analytics",
      description:
        "Generate operational insights and reports for better expedition planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-96 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Page content */}
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-10">

          {/* HEADER */}
          <section className="mx-auto max-w-3xl text-center">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

              <span className="text-xs  font-semibold uppercase tracking-widest text-cyan-300">
                Platform Capabilities
              </span>

            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              Everything needed for

              <span className="mt-2 block text-cyan-400">
                polar operations.
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-400 sm:text-lg">
              One intelligent platform to manage expeditions,
              teams, assets, inventory and logistics from a
              centralized command center.
            </p>

          </section>


          {/* FEATURE GRID */}
          <section className="mt-16">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.number}
                    className="group relative min-h-60 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800"
                  >

                    {/* Top accent */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-slate-800 transition duration-300 group-hover:bg-cyan-400" />

                    {/* Header */}
                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">

                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="text-cyan-400"
                        />

                      </div>

                      <div className="flex items-center gap-2">

                        <span className="text-xs font-bold text-slate-600">
                          {feature.number}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                        />

                      </div>

                    </div>


                    {/* Text */}
                    <div className="mt-7">

                      <h2 className="text-lg font-bold leading-6 text-white">
                        {feature.title}
                      </h2>

                      <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-slate-400">
                        {feature.description}
                      </p>

                    </div>


                    {/* Bottom number */}
                    <div className="absolute bottom-4 right-5 text-5xl font-black text-white/[0.03]">
                      {feature.number}
                    </div>

                  </article>
                );
              })}

            </div>

          </section>


          {/* CTA */}
          <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center sm:p-12">

            <div className="mx-auto max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Polar Command Center
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                One platform. Every operation.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Bring expedition planning, team coordination,
                assets, inventory and logistics together.
              </p>

              <a
                href="/login"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Enter Command Center
                <ArrowUpRight size={17} />
              </a>

            </div>

          </section>

        </div>

      </main>
    </div>
  );
};

export default FeaturePage;