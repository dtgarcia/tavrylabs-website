import React from "react";

function ArcCore() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-arcblue mb-4">
        ARC Core — The Heart of the Ecosystem
      </h1>
      <p className="text-yellow-400 font-semibold mb-6 uppercase">
        Status: Research & Early Prototyping
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        ARC Core is a self-sustaining energy unit designed to act as the central power hub for the Tavry Labs hardware ecosystem. Intended to mount like a chest plate, it’s engineered to supply consistent voltage through layered generation systems including <span className="text-white font-semibold">EMF induction</span>, <span className="text-white font-semibold">MHD flow</span>, and <span className="text-white font-semibold">flywheel regeneration</span>.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        An onboard ESP32 will manage output logic, monitor performance metrics, and enable synchronized delivery of power pulses when high-demand actions occur. It’s designed not only to output power — but to share it, interactively, through <span className="text-white">magnetic connection points</span> for modular devices like the EXO Arm.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        ARC Core will prioritize uptime and control, serving as both battery and brain of next-gen systems.
      </p>
    </div>
  );
}

export default ArcCore;