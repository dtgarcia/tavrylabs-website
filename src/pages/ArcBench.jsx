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
        {/* Engineering Drawing */}
<div className="mt-12">
  <img
    src="/images/arc-page.jpeg"
    alt="ARC Bench Housing Drawing"
    className="w-full rounded shadow-md border border-zinc-700"
  />
  <p className="text-sm text-zinc-500 mt-2 text-center italic">Initial housing concept for ARC Bench V1 — designed for compact functionality and modular expansion.</p>
</div>


        {/* Final Note */}
        <p className="text-sm text-zinc-500 italic mt-10">This project defines Tavry Labs: intelligent, field-ready, and built from raw ambition.</p>
        {/* Founder's Note */}
       <div className="mt-16 border-t border-zinc-700 pt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Founder's Note</h2>
     <p className="text-zinc-400 text-lg leading-relaxed mb-4">
    ARC Bench wasn’t just my first build — it was my spark. I hadn’t taken a single electrical engineering course when I started this. I didn’t want to wait until someone taught me how to light up an LED. I wanted to build something real. Something that could test, power, diagnose, and grow with me.
      </p>
     <p className="text-zinc-400 text-lg leading-relaxed mb-4">
    This system became the proving ground for Tavry Labs — the moment I stopped waiting for opportunity and started creating it. Everything you see here was self-taught, from the dual microcontroller integration to the diagnostic logic to the housing design below.
     </p>
     <p className="text-zinc-500 italic text-sm">I built this before I was ever taught how to. That’s what makes it matter.</p>
    </div>

      </div>
    </div>
  );
}

export default ArcBench;
