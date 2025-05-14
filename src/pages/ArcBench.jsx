import React from "react";

function ArcBench() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">

        {/* Title & Status */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-arcblue">ARC Bench – Adaptive Reactive Core (V1)</h1>
          <p className="text-sm uppercase text-yellow-400 tracking-wide">Status: Nearing Completion — Final Housing Integration Underway</p>
        </div>

        {/* Summary */}
        <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
          <p>
            <strong>ARC Bench</strong> is a compact, multifunctional diagnostic and power delivery system engineered for versatility, field readiness, and creative control. It’s more than a power bank — it’s a fully integrated test bench in your hand.
          </p>
          <p>
            The system is powered by a dual-cell lithium-ion configuration wired in series to supply a nominal <strong>8.4V</strong>, intelligently managed through a <strong>dual buck converter system</strong>. One converter provides stable 5V to the internal electronics, while the second enables full-voltage output for external diagnostics and experimentation.
          </p>
          <p>
            <strong>There are four USB-C ports:</strong>
            <ul className="list-disc ml-6 mt-2 text-base text-zinc-400">
              <li>Two for charging external devices, with automatic fast/slow charge detection.</li>
              <li>One for recharging the system itself.</li>
              <li>One modular port for output/input testing, component powering, or continuity checks.</li>
            </ul>
          </p>
          <p>
            Power flow and behavior are tracked using internal sensors, with real-time performance data displayed on a rotary-controlled <strong>OLED interface</strong>. Users can view system status, charge levels, and test diagnostics through intuitive page navigation.
          </p>
          <p>
            <strong>Control is split between two microcontrollers:</strong> an ESP-based board for UI + monitoring, and a secondary board for managing the addressable lighting. This separation ensures smooth real-time feedback without interrupting system operations.
          </p>
          <p>
            Dual hardware buttons allow independent control of system power and test output, prioritizing safety and user control at all stages.
          </p>
          <p>
            All core functions are complete. ARC Bench is now in the final stretch: refining the custom housing, securing internal layout and mounting, and preparing for final deployment and field testing.
          </p>
        </div>

        {/* Final Note */}
        <p className="text-sm text-zinc-500 italic mt-10">This project defines Tavry Labs: intelligent, field-ready, and built from raw ambition.</p>
      </div>
    </div>
  );
}

export default ArcBench;
