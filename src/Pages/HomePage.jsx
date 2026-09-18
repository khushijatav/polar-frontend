import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import MissionCard from "../Components/Home/MissionCard";

const HomePage = () => {
  return (
    <div className="home-background min-h-screen overflow-hidden">

      <Navbar />

      <main className="relative flex min-h-screen items-center">

        {/* Background decoration */}

        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />


        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-10 pt-28 lg:grid-cols-2 lg:px-8">

          {/* LEFT */}

          <section>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                Integrated Polar Operations
              </span>

            </div>


            <h1 className="max-w-2xl text-6xl font-black leading-none tracking-tight text-slate-950 sm:text-7xl">

              Navigate.

              <span className="block text-slate-400">
                Manage.
              </span>

              <span className="block text-cyan-500">
                Explore.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              A centralized platform to plan polar
              expeditions, coordinate teams, manage
              assets and control logistics from one
              intelligent command center.
            </p>


            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <Button to="/login">
                Launch Mission
              </Button>

              <Button
                to="/features"
                variant="secondary"
              >
                Explore Platform
              </Button>

            </div>


            {/* Trust */}

            <div className="mt-10 flex flex-wrap gap-6">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={17}
                  className="text-cyan-600"
                />

                <span className="text-xs font-medium text-slate-500">
                  Centralized Control
                </span>

              </div>


              <div className="flex items-center gap-2">

                <Globe2
                  size={17}
                  className="text-cyan-600"
                />

                <span className="text-xs font-medium text-slate-500">
                  Global Operations
                </span>

              </div>

            </div>

          </section>


          {/* RIGHT */}

          <section className="flex justify-center lg:justify-end">

            <MissionCard />

          </section>

        </div>


        {/* Bottom indicator */}

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium tracking-widest text-slate-400 lg:flex">

          <span className="h-px w-10 bg-slate-300" />

          PLAN

          <span>•</span>

          TRACK

          <span>•</span>

          MANAGE

          <span>•</span>

          OPERATE

          <span className="h-px w-10 bg-slate-300" />

        </div>

      </main>

    </div>
  );
};

export default HomePage;