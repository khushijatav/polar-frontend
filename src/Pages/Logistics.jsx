
import {
  Anchor,
  ArrowRight,
  Package,
  Ship,
} from "lucide-react";

import Navbar from "../Components/Navbar";

const Logistics = () => {
  return (
    <div className="page-background min-h-screen">

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-32">

        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">
          Polar Transportation
        </p>

        <h1 className="mt-4 text-5xl font-black text-slate-950">
          From port to
          <span className="text-cyan-500">
            polar base.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
          Manage cargo ships, shipments and resource
          movement through one connected logistics workflow.
        </p>


        <div className="mt-12 grid items-center gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

            <Ship
              size={26}
              className="text-cyan-500"
            />

            <h2 className="mt-5 text-xl font-bold">
              Cargo Ship
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Track ship status, destination and ETA.
            </p>

          </div>


          <div className="flex justify-center">

            <ArrowRight
              size={28}
              className="hidden text-cyan-500 md:block"
            />

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

            <Anchor
              size={26}
              className="text-cyan-500"
            />

            <h2 className="mt-5 text-xl font-bold">
              Polar Base
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Receive and distribute expedition resources.
            </p>

          </div>

        </div>


        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
              <Package
                size={20}
                className="text-cyan-600"
              />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Cargo Flow
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Cargo Ship → Cargo → Polar Base → Inventory
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Logistics;