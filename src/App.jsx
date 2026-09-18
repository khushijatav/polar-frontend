import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/HomePage";
import FeaturesPage from "./Pages/FeaturePage";
import HowItWorksPage from "./Pages/HowItWorks";
import LogisticsPage from "./Pages/Logistics";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/features"
          element={<FeaturesPage />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorksPage />}
        />

        <Route
          path="/logistics"
          element={<LogisticsPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;