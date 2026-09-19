import {
  ClipboardCheck,
  PackageCheck,
  Truck,
  MapPin,
  Wrench,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

import PageLayout from "../Components/PageLayout";
import SectionTitle from "../ui/SectionTitle";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Plan",
      description:
        "Create the expedition, define objectives, team requirements and operational timeline.",
      icon: ClipboardCheck,
    },
    {
      number: "02",
      title: "Equip",
      description:
        "Assign assets, equipment and inventory required for the mission.",
      icon: PackageCheck,
    },
    {
      number: "03",
      title: "Transport",
      description:
        "Coordinate cargo ships, vehicles, shipments and delivery schedules.",
      icon: Truck,
    },
    {
      number: "04",
      title: "Track",
      description:
        "Monitor locations, assets, team activity and logistics status.",
      icon: MapPin,
    },
    {
      number: "05",
      title: "Maintain",
      description:
        "Track equipment condition and schedule required maintenance.",
      icon: Wrench,
    },
    {
      number: "06",
      title: "Complete",
      description:
        "Review mission performance, resources and generate final reports.",
      icon: CheckCircle2,
    },
  ];

  return (
    <PageLayout>

      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">

        <SectionTitle
          eyebrow="Mission Workflow"
          title="From planning"
          highlight="to completion."
          description="A structured operational workflow keeps every part of a polar expedition connected."
        />


        <div className="mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number}>

                <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-400/30">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-3">

                      <span className="text-xs font-bold text-cyan-400">
                        {step.number}
                      </span>

                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>

                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </div>

                {index !== steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowDown
                      size={18}
                      className="text-cyan-400/40"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </PageLayout>
  );
};

export default HowItWorks;