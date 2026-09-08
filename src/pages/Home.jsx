import { Link } from "react-router-dom";

function Home() {
  /*
   * ============================================================
   * TAVRY LABS — HOME PAGE
   * ============================================================
   *
   * Main landing page for tavrylabs.com.
   *
   * CURRENT PROJECT VISUALS:
   *
   * Tavry FX V1:
   * - Uses a real project photo
   *
   * Tavry FX V2:
   * - Uses an intentional title card until real design
   *   documentation exists
   *
   * ARC Bench:
   * - Uses an intentional title card until real design
   *   documentation exists
   * ============================================================
   */

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">

      {/* ========================================================
          NAVIGATION
         ======================================================== */}
      <nav className="border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          <Link
            to="/"
            className="text-lg font-bold tracking-[0.18em] uppercase"
          >
            Tavry Labs
          </Link>

          <div className="flex items-center gap-7 text-sm text-zinc-400">

            <a
              href="#work"
              className="hover:text-white transition-colors"
            >
              Work
            </a>

            <Link
              to="/about"
              className="hover:text-white transition-colors"
            >
              About
            </Link>

            {/* GitHub and Resume links can be added here later. */}

          </div>

        </div>

      </nav>


      <main>

        {/* ========================================================
            HERO
           ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-24">

          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 mb-6">
            Electrical Engineering · Embedded Systems · Prototyping
          </p>

          <h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Dallas Garcia
          </h1>

          <h2 className="max-w-4xl text-3xl md:text-5xl font-medium tracking-tight text-zinc-500 mt-3">
            Student.
          </h2>

          <p className="max-w-2xl mt-8 text-lg md:text-xl leading-relaxed text-zinc-400">
            Tavry Labs is where I document the systems I design,
            build, test, and improve outside the classroom.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#work"
              className="bg-zinc-100 text-black px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
            >
              View Selected Work
            </a>

            <Link
              to="/about"
              className="border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              About Me
            </Link>

          </div>

        </section>


        {/* ========================================================
            SELECTED WORK
           ======================================================== */}
        <section
          id="work"
          className="border-t border-zinc-800"
        >

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

            {/* Section heading */}
            <div className="flex items-end justify-between mb-12">

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
                  Portfolio
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold">
                  Selected Work
                </h2>

              </div>

              <p className="hidden md:block text-sm text-zinc-600">
                2025 — 2026
              </p>

            </div>


            {/* ==================================================
                PROJECT 01 — TAVRY FX V1
               ================================================== */}
            <Link
              to="/projects/tavry-fx"
              className="
                group block
                border-t border-zinc-800
                py-10
                transition-all duration-300
                hover:border-zinc-500
                hover:bg-white/[0.015]
              "
            >

              <div className="grid md:grid-cols-12 gap-8 items-center">

                {/* Project number */}
                <div className="md:col-span-1">

                  <span className="font-mono text-sm text-zinc-600">
                    01
                  </span>

                </div>


                {/* ------------------------------------------------
                    REAL TAVRY FX V1 PHOTO

                    The image is scaled back slightly inside the
                    card so more of the original photo remains
                    visible instead of being heavily cropped.
                   ------------------------------------------------ */}
                <div className="md:col-span-5">

                  <div className="aspect-[16/10] bg-black border border-zinc-800 overflow-hidden">

                    <img
                      src="/images/tavry-fx/tavry-fx-v1.jpeg"
                      alt="Tavry FX V1 guitar multi-effects system"
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        scale-[0.92]
                        group-hover:scale-[0.94]
                        transition-transform
                        duration-300
                      "
                    />

                  </div>

                </div>


                {/* Project information */}
                <div className="md:col-span-6">

                  <div className="flex items-center gap-3 mb-4">

                    <span className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                      V1 Build Complete
                    </span>

                    <span className="text-xs text-zinc-700">
                      /
                    </span>

                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      2026
                    </span>

                  </div>

                  <h3 className="text-3xl font-semibold group-hover:text-white transition-colors duration-300">
                    Tavry FX
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                    A portable guitar multi-effects system with
                    conventional amplifier output and an integrated
                    exciter system designed to mount directly to an
                    acoustic guitar.
                  </p>

                  <p className="font-mono text-xs text-zinc-600 mt-6">
                    EMBEDDED DSP · ANALOG AUDIO · PCB DESIGN · CAD · POWER
                  </p>

                </div>

              </div>

            </Link>


            {/* ==================================================
                PROJECT 02 — TAVRY FX V2
               ================================================== */}
            <Link
              to="/projects/tavry-fx-v2"
              className="
                group block
                border-t border-zinc-800
                py-10
                transition-all duration-300
                hover:border-zinc-500
                hover:bg-white/[0.015]
              "
            >

              <div className="grid md:grid-cols-12 gap-8 items-center">

                {/* Project number */}
                <div className="md:col-span-1">

                  <span className="font-mono text-sm text-zinc-600">
                    02
                  </span>

                </div>


                {/* ------------------------------------------------
                    TAVRY FX V2 TITLE CARD

                    No fake render.
                    No reused V1 image.
                    No unfinished CAD.

                    This remains until V2 has real engineering
                    documentation worth showing.
                   ------------------------------------------------ */}
                <div className="md:col-span-5">

                  <div
                    className="
                      relative
                      aspect-[16/10]
                      bg-zinc-950
                      border
                      border-zinc-800
                      overflow-hidden
                      group-hover:border-zinc-500
                      transition-all
                      duration-300
                    "
                  >

                    {/* Subtle technical grid */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.12]
                        [background-image:linear-gradient(to_right,#71717a_1px,transparent_1px),linear-gradient(to_bottom,#71717a_1px,transparent_1px)]
                        [background-size:32px_32px]
                      "
                    />


                    {/* Top project label */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">

                      <p className="font-mono text-xs text-zinc-600">
                        PROJECT / 02
                      </p>

                      <p className="font-mono text-xs text-zinc-700">
                        2026 —
                      </p>

                    </div>


                    {/* Main title */}
                    <div className="absolute inset-0 flex flex-col justify-center px-7 md:px-9">

                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-600 mb-3">
                        Tavry Labs
                      </p>

                      <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300">
                        Tavry FX
                      </h3>

                      <h4 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
                        V2
                      </h4>

                    </div>


                    {/* Bottom status bar */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 px-5 py-4">

                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-500/80">
                        Design Study
                      </p>

                    </div>

                  </div>

                </div>


                {/* Project information */}
                <div className="md:col-span-6">

                  <p className="text-xs uppercase tracking-[0.18em] text-amber-400 mb-4">
                    Design Study
                  </p>

                  <h3 className="text-3xl font-semibold group-hover:text-white transition-colors duration-300">
                    Tavry FX V2
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                    A second-generation design study focused on the
                    electrical, mechanical, and system-level improvements
                    identified while building and testing Tavry FX V1.
                  </p>

                  <p className="font-mono text-xs text-zinc-600 mt-6">
                    AUDIO · MECHANICAL · POWER · EMBEDDED SYSTEMS
                  </p>

                </div>

              </div>

            </Link>


            {/* ==================================================
                PROJECT 03 — ARC BENCH
               ================================================== */}
            <Link
              to="/projects/arc-bench"
              className="
                group block
                border-y border-zinc-800
                py-10
                transition-all duration-300
                hover:border-zinc-500
                hover:bg-white/[0.015]
              "
            >

              <div className="grid md:grid-cols-12 gap-8 items-center">

                {/* Project number */}
                <div className="md:col-span-1">

                  <span className="font-mono text-sm text-zinc-600">
                    03
                  </span>

                </div>


                {/* ------------------------------------------------
                    ARC BENCH TITLE CARD

                    No concept render is being used while the new
                    project is still in planning/development.

                    This can eventually be replaced with real CAD,
                    PCB work, hardware, or other documentation.
                   ------------------------------------------------ */}
                <div className="md:col-span-5">

                  <div
                    className="
                      relative
                      aspect-[16/10]
                      bg-zinc-950
                      border
                      border-zinc-800
                      overflow-hidden
                      group-hover:border-zinc-500
                      transition-all
                      duration-300
                    "
                  >

                    {/* Subtle technical grid */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.12]
                        [background-image:linear-gradient(to_right,#71717a_1px,transparent_1px),linear-gradient(to_bottom,#71717a_1px,transparent_1px)]
                        [background-size:32px_32px]
                      "
                    />


                    {/* Top project label */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">

                      <p className="font-mono text-xs text-zinc-600">
                        PROJECT / 03
                      </p>

                      <p className="font-mono text-xs text-zinc-700">
                        2026 —
                      </p>

                    </div>


                    {/* Main title */}
                    <div className="absolute inset-0 flex flex-col justify-center px-7 md:px-9">

                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-600 mb-3">
                        Tavry Labs
                      </p>

                      <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300">
                        ARC
                      </h3>

                      <h4 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
                        Bench
                      </h4>

                    </div>


                    {/* Bottom status bar */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 px-5 py-4">

                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-500/80">
                        In Development
                      </p>

                    </div>

                  </div>

                </div>


                {/* Project information */}
                <div className="md:col-span-6">

                  <p className="text-xs uppercase tracking-[0.18em] text-blue-400 mb-4">
                    In Development
                  </p>

                  <h3 className="text-3xl font-semibold group-hover:text-white transition-colors duration-300">
                    ARC Bench
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                    A portable electronics workbench designed to combine
                    common lab tools such as an adjustable power supply,
                    digital multimeter, oscilloscope, and signal generator
                    into one battery-powered system.
                  </p>

                  <p className="font-mono text-xs text-zinc-600 mt-6">
                    POWER ELECTRONICS · PCB DESIGN · INSTRUMENTATION · EMBEDDED SYSTEMS
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </section>


        {/* ========================================================
            ABOUT PREVIEW
           ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">

          <div className="grid md:grid-cols-12 gap-8">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                About
              </p>

            </div>


            <div className="md:col-span-8">

              <h2 className="text-2xl md:text-3xl font-medium max-w-3xl leading-relaxed">
                Tavry Labs is my workspace for taking ideas beyond the
                classroom and turning them into physical systems I can
                build, test, break, understand, and improve.
              </h2>

              <Link
                to="/about"
                className="inline-block mt-8 text-sm text-zinc-400 border-b border-zinc-600 pb-1 hover:text-white hover:border-white transition-colors"
              >
                Meet Dallas →
              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* ========================================================
          FOOTER
         ======================================================== */}
      <footer className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-xs text-zinc-600">

          <p>
            © 2026 Tavry Labs
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;