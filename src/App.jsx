import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-100/20 text-white font-sans">

      {/* Header */}
      <header className="bg-gradient-to-b from-[#0B1D24] to-black p-6 text-center shadow-md">
  <Link to="/" className="text-5xl font-extrabold tracking-wide hover:opacity-90">
    TAVRY LABS
  </Link>
  <p className="mt-2 text-lg text-zinc-400">
    Innovating the future, one system at a time.
  </p>
  <div className="mt-4 flex justify-center gap-4">
    <button
      onClick={() =>
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
      }
      className="bg-zinc-800 px-4 py-2 rounded border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      View Projects
    </button>
    <Link
      to="/about"
      className="bg-zinc-800 px-4 py-2 rounded border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      Meet Dallas
    </Link>
  </div>
</header>

{/*SVG*/}
<div className="w-full h-10 overflow-hidden bg-transparent relative -mt-2">
<svg
  viewBox="0 0 200 20"
  preserveAspectRatio="none"
  className="absolute w-[200%] h-full transform animate-pulse-loop"
>

    <polyline
      fill="none"
      stroke="#00CFFF"
      strokeWidth="1.5"
      points="0,10 10,10 15,5 20,15 25,10 35,10 40,2 45,18 50,10 60,10 70,10 80,10 90,10 95,5 100,15 105,10 115,10 120,2 125,18 130,10 140,10 150,10 160,10 170,10 180,10 190,10 200,10"
    />
  </svg>
</div>






{/* Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8">
  {/* Text Block */}
  <div className="max-w-xl text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Tavry Labs is where bold ideas meet raw-ambition.
    </h2>
    <p className="text-zinc-400 text-md md:text-lg">
      Every system is built by a student learning as he goes, proving himself one system at a time.
    </p>
  </div>

  {/* Logo Bubble */}
  <div className="w-80 h-80 bg-black clip-hexagon flex items-center justify-center overflow-hidden border-4 border-arcblue shadow-arc-glow animate-pulse">
  <img
    src="/images/logo.jpeg"
    alt="Tavry Labs Logo"
    className="w-full h-full object-cover scale-95"
    style={{ transformOrigin: "center center" }}
  />
</div>



</section>

{/* Projects Section */}
<section id="projects" className="px-8 md:px-20 py-10">
  <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* ARC Bench */}
    <Link
      to="/projects/arc-bench"
      className="bg-zinc-900 p-4 rounded shadow-md border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      <div className="w-full aspect-[4/3] mb-4">
        <img
          src="/images/arc-bench.jpeg"
          alt="ARC Bench"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h4 className="text-xl font-semibold">ARC Bench</h4>
      <span className="text-xs text-cyan-400 uppercase tracking-wide">V1 Build in Progress</span>
      <p className="text-sm text-zinc-400 mt-2">
        Custom-built power bench and housing prototype
      </p>
    </Link>

    {/* ARC Core */}
    <Link
      to="/projects/arc-core"
      className="bg-zinc-900 p-4 rounded shadow-md border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      <div className="w-full aspect-[4/3] mb-4">
        <img
          src="/images/arc-core.jpeg"
          alt="ARC Core"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h4 className="text-xl font-semibold">ARC Core</h4>
      <span className="text-xs text-yellow-400 uppercase tracking-wide">Prototyping</span>
      <p className="text-sm text-zinc-400 mt-2">
        Advanced diagnostics + voltage test platform
      </p>
    </Link>

    {/* Daedalus AI */}
    <Link
      to="/projects/daedalus-ai"
      className="bg-zinc-900 p-4 rounded shadow-md border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      <div className="w-full aspect-[4/3] mb-4">
        <img
          src="/images/daedalus-ai.jpeg"
          alt="Daedalus AI"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h4 className="text-xl font-semibold">Daedalus AI</h4>
      <span className="text-xs text-red-400 uppercase tracking-wide">Research</span>
      <p className="text-sm text-zinc-400 mt-2">
        Core AI designed to unify and manage Tavry systems
      </p>
    </Link>

    {/* EXO Arm */}
    <Link
      to="/projects/exo-arm"
      className="bg-zinc-900 p-4 rounded shadow-md border border-transparent hover:border-arcblue hover:shadow-arc-glow transition-all duration-300"
    >
      <div className="w-full aspect-[4/3] mb-4">
        <img
          src="/images/exo-arm.jpeg"
          alt="EXO Arm"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h4 className="text-xl font-semibold">EXO Arm</h4>
      <span className="text-xs text-red-400 uppercase tracking-wide">Research</span>
      <p className="text-sm text-zinc-400 mt-2">
        Strength-enhancing arm system powered by ARC Core
      </p>
    </Link>

  </div>
</section>



    </div>
  );
}

export default App;
