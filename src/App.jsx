import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import TavryFX from "./pages/TavryFX.jsx";
import TavryFXV2 from "./pages/TavryFXV2.jsx";
import ArcBench from "./pages/ArcBench.jsx";

import ScrollToTop from "./ScrollToTop.jsx";


function App() {
  return (
    <>
      {/* Automatically return to the top whenever the route changes. */}
      <ScrollToTop />

      <Routes>

        {/* Main website */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />


        {/* Project pages */}
        <Route
          path="/projects/tavry-fx"
          element={<TavryFX />}
        />

        <Route
          path="/projects/tavry-fx-v2"
          element={<TavryFXV2 />}
        />

        <Route
          path="/projects/arc-bench"
          element={<ArcBench />}
        />

      </Routes>
    </>
  );
}

export default App;