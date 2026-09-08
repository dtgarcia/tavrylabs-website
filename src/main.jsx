import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/*
 * ============================================================
 * MAIN.JSX
 * ============================================================
 *
 * This file only starts the React application.
 *
 * BrowserRouter allows the website to use URLs such as:
 *
 * /about
 * /projects/tavry-fx
 *
 * The actual list of pages/routes now lives inside App.jsx.
 *
 * Keeping routing in one place makes the website much easier
 * to maintain.
 * ============================================================
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      {/* Vercel website analytics */}
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>
);