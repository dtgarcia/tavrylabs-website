import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import ArcBench from "./pages/ArcBench.jsx";
import ArcCore from "./pages/ArcCore.jsx";
import DaedalusAI from "./pages/DaedalusAI.jsx";
import ExoArm from "./pages/ExoArm.jsx";
import ArcBenchV2 from "./pages/ArcBenchV2.jsx";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/arc-bench" element={<ArcBench />} />
      <Route path="/projects/arc-core" element={<ArcCore />} />
      <Route path="/projects/daedalus-ai" element={<DaedalusAI />} />
      <Route path="/projects/exo-arm" element={<ExoArm />} />
      <Route path="/projects/arc-bench-v2" element={<ArcBenchV2 />} />

    </Routes>
    <Analytics />
    <SpeedInsights />
  </BrowserRouter>
);

