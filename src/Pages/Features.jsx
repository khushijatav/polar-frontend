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
} from "lucide-react";

import PageLayout from "../Components/PageLayout";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Compass,
      number: "01",
      title: "Expedition Management",
      description:
        "Plan and monitor complete polar expeditions from one centralized command center.",
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
        "Track equipment, condition, availability and operational status.",
    },
    {
      icon: ClipboardList,
      number: "04",
      title: "Inventory Management",
      description:
        "Monitor supplies, stock levels and critical expedition resources.",
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
        "Track maintenance schedules, service history and upcoming requirements.",
    },
    {
      icon: Map,
      number: "07",
      title: "Location Tracking",
      description:
        "Monitor bases, vehicles, cargo movement and operational locations.",
    },
    {
      icon: Bell,
      number: "08",
      title: "Smart Alerts",
      description:
        "Receive timely alerts for inventory, maintenance and critical events.",
    },
    {
      icon: BarChart3,
      number: "09",
      title: "Reports & Analytics",
      description:
        "Generate operational insights for better expedition planning.",
    },
  ];

  return (
    <PageLayout>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

        <SectionTitle
          eyebrow="Platform Capabilities"
          title="Everything needed for"
          highlight="polar operations."
          description="One intelligent platform to manage expeditions, teams, assets, inventory and logistics from a centralized command center."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.number}
              {...feature}
            />
          ))}

        </div>

      </div>

    </PageLayout>
  );
};

export default Features;