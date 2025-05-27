import React from "react";

function ArcCore() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-arcblue mb-4">
        ARC Core — The Heart of the Ecosystem
      </h1>
      <p className="text-yellow-400 font-semibold mb-6 uppercase">
        Status: Concept Research — Energy Architecture in Development
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        ARC Core is a theoretical power unit designed to serve as the central nervous system of the Tavry Labs ecosystem. Its mission is simple but ambitious: deliver intelligent, self-sustaining energy in a compact form factor that can interface with future modular systems.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        The design explores multiple methods of power generation — including <span className="text-white font-semibold">EMF induction</span>, <span className="text-white font-semibold">magnetohydrodynamic flow</span>, and <span className="text-white font-semibold">flywheel regeneration</span> — all monitored and balanced through an onboard ESP32 to allow for live diagnostics and reactive power management.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        Although this project is not being actively prototyped yet, the foundational research and system planning are underway. ARC Core remains a forward-looking concept — the cornerstone of a future where energy isn't just stored, but created, recycled, and distributed with purpose.
      </p>

      <p className="text-sm text-zinc-500 italic mt-8">
        ARC Core exists as a vision — not a product. For now, its role is to set the standard for what’s possible at the intersection of ambition and engineering.
      </p>
    </div>
  );
}

export default ArcCore;
