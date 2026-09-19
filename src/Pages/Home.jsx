import {
  ArrowRight,
  MapPin,
  Users,
  Package,
  Ship,
  Activity,
} from "lucide-react";

import PageLayout from "../Components/PageLayout";
import PrimaryButton from "../ui/PrimaryButton";
import StatCard from "../ui/StatCard";

const Home = () => {
  return (
    <PageLayout>

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-10 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Polar Operations Platform
              </span>

            </div>


            <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Navigate.
              <br />

              <span className="text-cyan-400">
                Manage.
              </span>

              <br />

              Conquer the
              <br />

              Extreme.

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              An integrated command platform to manage every
              expedition, team, asset, inventory and logistics
              operation across the polar frontier.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <PrimaryButton to="/dashboard">
                Enter Command Center
              </PrimaryButton>

              <a
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                Explore Platform
                <ArrowRight size={17} />
              </a>

            </div>


            {/* Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">

              <StatCard
                value="24/7"
                label="Mission Monitoring"
              />

              <StatCard
                value="360°"
                label="Resource Control"
              />

              <StatCard
                value="01"
                label="Unified Platform"
              />

            </div>

          </div>


          {/* RIGHT COMMAND PANEL */}
          <div className="relative hidden lg:block">

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/40">

              {/* Window dots */}
              <div className="mb-6 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>


              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Active Mission
                  </p>

                  <h3 className="mt-1 font-bold text-white">
                    Arctic Expedition 2026
                  </h3>
                </div>

                <div className="rounded-full bg-green-400/10 px-3 py-1 text-[10px] font-bold text-green-400">
                  OPERATIONAL
                </div>

              </div>


              {/* Dashboard stats */}
              <div className="mt-8 grid grid-cols-4 gap-3">

                <div className="rounded-xl bg-white/5 p-3">
                  <Users
                    size={16}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-xl font-black">
                    24
                  </p>

                  <p className="text-[9px] uppercase text-slate-500">
                    Team
                  </p>
                </div>


                <div className="rounded-xl bg-white/5 p-3">
                  <Package
                    size={16}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-xl font-black">
                    186
                  </p>

                  <p className="text-[9px] uppercase text-slate-500">
                    Assets
                  </p>
                </div>


                <div className="rounded-xl bg-white/5 p-3">
                  <Ship
                    size={16}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-xl font-black">
                    03
                  </p>

                  <p className="text-[9px] uppercase text-slate-500">
                    Ships
                  </p>
                </div>


                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin
                    size={16}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-xl font-black">
                    05
                  </p>

                  <p className="text-[9px] uppercase text-slate-500">
                    Bases
                  </p>
                </div>

              </div>


              {/* Map placeholder */}
              <div className="relative mt-4 h-64 overflow-hidden rounded-2xl border border-white/5 bg-slate-950">

                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_50%)]" />
                </div>

                <div className="absolute left-1/4 top-1/3">
                  <MapPin
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <div className="absolute right-1/4 top-1/2">
                  <MapPin
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2">

                  <Activity
                    size={15}
                    className="text-green-400"
                  />

                  <span className="text-xs text-slate-300">
                    Live operational zone
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </PageLayout>
  );
};

export default Home;