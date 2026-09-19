import {
  Ship,
  Package,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import PageLayout from "../Components/PageLayout";
import SectionTitle from "../ui/SectionTitle";

const Logistics = () => {
  return (
    <PageLayout>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

        <SectionTitle
          eyebrow="Polar Logistics"
          title="From port"
          highlight="to polar base."
          description="Coordinate cargo movement, transportation and delivery through a single logistics workflow."
        />


        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {/* Ship */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">

            <Ship
              size={28}
              className="text-cyan-400"
            />

            <p className="mt-6 text-xs uppercase tracking-widest text-slate-500">
              Origin
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Cargo Ship
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Manage ship information, cargo allocation,
              departure and destination.
            </p>

          </div>


          {/* Flow */}
          <div className="flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-7">

            <div className="text-center">

              <ArrowRight
                size={35}
                className="mx-auto text-cyan-400"
              />

              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-400">
                Logistics Flow
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Cargo → Transport → Delivery
              </p>

            </div>

          </div>


          {/* Base */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">

            <MapPin
              size={28}
              className="text-cyan-400"
            />

            <p className="mt-6 text-xs uppercase tracking-widest text-slate-500">
              Destination
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Polar Base
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Receive cargo and update inventory after
              successful delivery.
            </p>

          </div>

        </div>


        {/* Status */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <Package className="text-cyan-400" />

            <p className="mt-4 text-2xl font-black">
              186
            </p>

            <p className="text-sm text-slate-500">
              Active Cargo Items
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <Ship className="text-cyan-400" />

            <p className="mt-4 text-2xl font-black">
              03
            </p>

            <p className="text-sm text-slate-500">
              Active Ships
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <Clock className="text-cyan-400" />

            <p className="mt-4 text-2xl font-black">
              05
            </p>

            <p className="text-sm text-slate-500">
              Deliveries In Transit
            </p>
          </div>

        </div>

      </div>

    </PageLayout>
  );
};

export default Logistics;