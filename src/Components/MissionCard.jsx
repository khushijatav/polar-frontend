import {
  MapPin,
  Users,
  CalendarDays,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

const MissionCard = ({
  name,
  location,
  team,
  date,
  status,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-400/20">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            Expedition
          </p>

          <h3 className="mt-1 text-base font-bold text-white">
            {name}
          </h3>

        </div>

        <StatusBadge status={status} />

      </div>


      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <MapPin
            size={15}
            className="text-cyan-400"
          />
          {location}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <Users
            size={15}
            className="text-cyan-400"
          />
          {team} members
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <CalendarDays
            size={15}
            className="text-cyan-400"
          />
          {date}
        </div>

      </div>

    </div>
  );
};

export default MissionCard;