import Navbar from "../Components/Navbar";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Plan",
      description:
        "Create expedition details, assign objectives and prepare resources.",
    },
    {
      number: "02",
      title: "Equip",
      description:
        "Assign teams, assets, inventory and required equipment.",
    },
    {
      number: "03",
      title: "Transport",
      description:
        "Coordinate cargo ships, vehicles and movement of resources.",
    },
    {
      number: "04",
      title: "Track",
      description:
        "Monitor locations, operational status and expedition progress.",
    },
    {
      number: "05",
      title: "Maintain",
      description:
        "Monitor equipment condition and schedule maintenance activities.",
    },
    {
      number: "06",
      title: "Complete",
      description:
        "Review expedition performance and generate operational reports.",
    },
  ];

  return (
    <div className="page-background min-h-screen">

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-32">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            Expedition Workflow
          </p>

          <h1 className="mt-4 text-5xl font-black text-slate-950">
            From planning to
            <span className="text-cyan-500">
              completion.
            </span>
          </h1>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <span className="text-sm font-black text-cyan-500">
                {step.number}
              </span>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
};

export default HowItWorks;