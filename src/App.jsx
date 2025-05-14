
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-gradient-to-b from-zinc-900 to-black p-6 text-center shadow-md sticky top-0 z-50">
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
            className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded shadow"
          >
            View Projects
          </button>
          <Link
            to="/about"
            className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded shadow"
          >
            Meet Dallas
          </Link>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            Tavry Labs is where bold ideas meet raw-ambition.
          </h2>
          <p className="text-zinc-400 text-md">
            Every system is built by a student learning as he goes, proving himself one system at a time.
          </p>
        </div>
        <div>
          <div className="w-80 h-80 bg-zinc-800 rounded-full" />
        </div>
      </section>

      <section id="projects" className="px-8 md:px-20 py-10">
        <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-4 rounded shadow hover:shadow-lg">
            <div className="w-full h-48 bg-zinc-800 rounded mb-4"></div>
            <h4 className="text-xl font-semibold">ARC Core</h4>
            <p className="text-sm text-zinc-400">Multi-functional diagnostics and testing bench</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded shadow hover:shadow-lg">
            <div className="w-full h-48 bg-zinc-800 rounded mb-4"></div>
            <h4 className="text-xl font-semibold">Tavry Core</h4>
            <p className="text-sm text-zinc-400">Wearable arc reactor-style power system</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
