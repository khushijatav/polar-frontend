import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Logistics from "./Pages/Logistics";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const ComingSoon = ({ title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">

      <div className="text-center">

        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          POLARIS COMMAND
        </p>

        <h1 className="mt-4 text-4xl font-black">
          {title}
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          This module will be developed in the next phase.
        </p>

      </div>

    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        <Route
          path="/logistics"
          element={<Logistics />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/expeditions"
          element={<ComingSoon title="Expedition Management" />}
        />

        <Route
          path="/team"
          element={<ComingSoon title="Team Management" />}
        />

        <Route
          path="/assets"
          element={<ComingSoon title="Asset Management" />}
        />

        <Route
          path="/inventory"
          element={<ComingSoon title="Inventory Management" />}
        />

        <Route
          path="/cargo-ships"
          element={<ComingSoon title="Cargo Ship Management" />}
        />

        <Route
          path="/vehicles"
          element={<ComingSoon title="Vehicle Management" />}
        />

        <Route
          path="/map"
          element={<ComingSoon title="Live Map" />}
        />

        <Route
          path="/maintenance"
          element={<ComingSoon title="Maintenance Management" />}
        />

        <Route
          path="/alerts"
          element={<ComingSoon title="Alerts & Notifications" />}
        />

        <Route
          path="/reports"
          element={<ComingSoon title="Reports & Analytics" />}
        />

        <Route
          path="/settings"
          element={<ComingSoon title="Settings" />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;