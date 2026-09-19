import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-white">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="relative min-h-screen pt-20">

        {/* Background effects */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-96 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Actual content */}
        <div className="relative z-10">
          {children}
        </div>

      </main>

    </div>
  );
};

export default PageLayout;