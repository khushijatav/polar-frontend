import {
  MapPin,
  Navigation,
  Package,
  Ship,
  Users,
} from "lucide-react";

import StatusPill from "../StatusPill";
import StatCard from "./StatCard";

const MissionCard = () => {
  return (
    <div className="float-slow relative w-full max-w-xl">

      <div className="absolute -inset-8 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-3 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Active Expedition
            </p>

            <h2 className="mt-1 text-base font-bold text-white">
              Arctic Mission 2026
            </h2>
          </div>

          <StatusPill type="success">
            LIVE
          </StatusPill>

        </div>

        {/* Map */}
        <div className="mission-map polar-grid relative h-80 rounded-2xl">

          {/* Radar */}
          <div className="radar-circle radar-large" />
          <div className="radar-circle radar-medium" />
          <div className="radar-circle radar-small" />

          {/* Route */}
          <div className="route-line left-16 top-52" />

          {/* Point 1 */}
          <div className="absolute left-14 top-52">
            <div className="pulse-dot" />
          </div>

          {/* Center point */}
          <div className="absolute left-1/2 top-1/2">

            <div className="flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">

              <MapPin
                size={24}
                className="text-cyan-400"
              />

            </div>

          </div>

          {/* Point 2 */}
          <div className="absolute right-20 top-24">
            <div className="pulse-dot" />
          </div>

          {/* Live Tracking */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-2">

            <Navigation
              size={14}
              className="text-cyan-400"
            />

            <span className="text-xs text-slate-300">
              Live Tracking
            </span>

          </div>

          {/* Zone */}
          <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3">

            <p className="text-xs text-slate-500">
              Current Zone
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              Antarctic Operations
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 p-3">

          <StatCard
            icon={Users}
            value="24"
            label="Crew"
          />

          <StatCard
            icon={Package}
            value="186"
            label="Assets"
          />

          <StatCard
            icon={Ship}
            value="03"
            label="Ships"
          />

        </div>

      </div>

    </div>
  );
};

export default MissionCard;