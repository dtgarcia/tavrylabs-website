import React from "react";

function ArcBenchV2() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-arcblue mb-4">
        ARC Bench V2 — Precision. Polish. Power.
      </h1>
      <p className="text-cyan-400 font-semibold mb-6 uppercase">
        Status: Planning Phase
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        ARC Bench V2 is more than a successor — it's a full evolution. Building on the foundation of V1, this new iteration shifts from prototyping into true product-level engineering. It introduces custom PCB design, a responsive touchscreen interface, and a 4 cell battery core allowing for faster charging and more versatile power ouput to the test port.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        The system will feature enhanced power delivery management, precision current sensing via upgraded INA238 sensors, and a new dual-mode USB-C testing system — one for output control, and one for voltage sense and measurement. These upgrades allow for clearer diagnostics, safer output control, and a far more intuitive user experience.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        ARC Bench V2 will also support pass-through charging, allowing it to remain fully functional even while recharging. This ensures it operates more like a field-ready tool and less like a hobbyist build. The enclosure will be redesigned for a more sleek and professional look, aiming to match the professionalism of industry-grade diagnostic gear.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        Perhaps most importantly, this project marks my first step into PCB design and layered circuit development, transforming Tavry Labs from functional design to polished systems engineering.
      </p>

      <p className="text-sm text-zinc-500 italic mt-8">
        ARC Bench V1 proved the concept. ARC Bench V2 will prove the standard.
      </p>
    </div>
  );
}

export default ArcBenchV2;
