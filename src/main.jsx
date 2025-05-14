import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import ArcBench from "./pages/ArcBench.jsx";
import ArcCore from "./pages/ArcCore.jsx";
import DaedalusAI from "./pages/DaedalusAI.jsx";
import ExoArm from "./pages/ExoArm.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/arc-bench" element={<ArcBench />} />
      <Route path="/projects/arc-core" element={<ArcCore />} />
      <Route path="/projects/daedalus-ai" element={<DaedalusAI />} />
      <Route path="/projects/exo-arm" element={<ExoArm />} />
    </Routes>
  </BrowserRouter>
);
