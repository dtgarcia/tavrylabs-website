import React from "react";

function ExoArm() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-arcblue mb-4">
        EXO Arm — Assistive Strength, Affordable Design
      </h1>
      <p className="text-red-400 font-semibold mb-6 uppercase">
        Status: Research Phase
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        The EXO Arm project explores wearable mechatronics with the goal of strength augmentation and rehabilitative assistance — without sacrificing affordability. Designed primarily using 3D-printed <span className="text-white">ABS</span> and <span className="text-white">TPU</span> components, this arm will include embedded motors, mechanical linkages, and sensors for controlled motion.
      </p>

      <p className="text-lg text-zinc-300 mb-4">
        Although energy integration is on the horizon, EXO Arm is being developed independently as a proof-of-concept in motion control, embedded design, and assistive tech. Its deeper mission is accessibility: creating a low-cost, expandable exoskeleton system that could one day assist with stroke rehabilitation and daily support.
      </p>
    </div>
  );
}

export default ExoArm;
