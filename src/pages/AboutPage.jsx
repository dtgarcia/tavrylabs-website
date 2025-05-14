import React from "react";
import ProfilePic from "../assets/profile.jpg"; // Replace with your actual image path

function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={ProfilePic}
            alt="Dallas Tavry Garcia"
            className="w-72 h-72 rounded-2xl object-cover border-4 border-zinc-700 shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Meet Dallas</h1>
          <p className="text-lg text-zinc-400 mb-4">
            I’m <span className="text-white font-semibold">Dallas Tavry Garcia</span>, an aspiring electrical engineer and the creator of <span className="text-white font-semibold">Tavry Labs</span>—a self-built engineering initiative where I turn complex ideas into functional technology.
          </p>
          <p className="text-lg text-zinc-400 mb-4">
            From hand-layered <span className="text-white">epoxy guitar builds</span> and custom <span className="text-white">resin-based desk setups</span> to developing real-time <span className="text-white">diagnostic tools</span>, I focus on hands-on engineering that blends classroom theory with real-world results.
          </p>
          <p className="text-lg text-zinc-400 mb-4">
            I take my education seriously—it’s the foundation of everything I’m building. Tavry Labs is how I bring that foundation to life: through projects that challenge me, teach me, and show the kind of engineer I’m becoming.
          </p>
          <p className="text-sm text-zinc-500 mt-6 italic">This is only the beginning.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
