import { Link } from "react-router-dom";

function About() {
  /*
   * ============================================================
   * ABOUT PAGE
   * ============================================================
   *
   * This page explains:
   *
   * 1. Who Dallas is
   * 2. What areas of engineering he is most interested in
   * 3. How Tavry Labs and the projects developed over time
   *
   * The goal is to keep this grounded and personal.
   * The project pages provide the actual technical evidence.
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

            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Work
            </Link>

            <Link
              to="/about"
              className="text-white"
            >
              About
            </Link>

          </div>

        </div>
      </nav>


      {/* ========================================================
          MAIN ABOUT SECTION
         ======================================================== */}
      <main>

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-12 items-start">

            {/* ==================================================
                PHOTO

                Replace this with a real photo later.

                It does not need to be a corporate headshot.
                Something natural around a workbench, project,
                or other simple setting will probably fit better.
               ================================================== */}
            <div className="md:col-span-5">

              <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 flex items-center justify-center">

                <span className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                  Updated Photo
                </span>

              </div>

            </div>


            {/* ==================================================
                ABOUT CONTENT
               ================================================== */}
            <div className="md:col-span-7 md:pl-8">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-5">
                About
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Dallas Garcia
              </h1>


              {/* ==================================================
                  SHORT INTRO
                 ================================================== */}
              <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl">
                I’m an electrical engineering student at Texas State
                University. I’ve always liked taking things apart,
                fixing things, and trying to build whatever idea I
                happened to get interested in.
              </p>


              {/* ==================================================
                  ENGINEERING FOCUS

                  This is intentionally near the top of the page.

                  Someone looking through the site should be able to
                  quickly understand the type of engineering work
                  Dallas is most interested in without needing to read
                  the entire page.
                 ================================================== */}
              <div className="mt-12">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  Engineering Focus
                </p>

                <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
                  I’ve found that I enjoy the hardware side of
                  engineering most — especially when the electrical,
                  embedded, and physical parts all have to work
                  together.
                </p>


                <div className="border-t border-zinc-800">

                  {/* Electronics */}
                  <div className="grid sm:grid-cols-3 gap-3 py-5 border-b border-zinc-800">

                    <p className="text-zinc-200">
                      Electronics
                    </p>

                    <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                      Circuit design, analog electronics, power systems,
                      prototyping, and troubleshooting.
                    </p>

                  </div>


                  {/* PCB Design */}
                  <div className="grid sm:grid-cols-3 gap-3 py-5 border-b border-zinc-800">

                    <p className="text-zinc-200">
                      PCB Design
                    </p>

                    <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                      Schematic design, board layout, assembly, testing,
                      and revision.
                    </p>

                  </div>


                  {/* Embedded Systems */}
                  <div className="grid sm:grid-cols-3 gap-3 py-5 border-b border-zinc-800">

                    <p className="text-zinc-200">
                      Embedded Systems
                    </p>

                    <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                      Integrating microcontrollers, displays, controls,
                      audio, sensors, and other hardware into complete
                      systems.
                    </p>

                  </div>


                  {/* CAD & Prototyping */}
                  <div className="grid sm:grid-cols-3 gap-3 py-5 border-b border-zinc-800">

                    <p className="text-zinc-200">
                      CAD & Prototyping
                    </p>

                    <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                      Designing enclosures and mechanical parts around
                      the electronics and revising them through physical
                      prototypes.
                    </p>

                  </div>


                  {/* Integration & Testing */}
                  <div className="grid sm:grid-cols-3 gap-3 py-5 border-b border-zinc-800">

                    <p className="text-zinc-200">
                      Integration & Testing
                    </p>

                    <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                      Bringing the electrical, embedded, and mechanical
                      pieces together and debugging the problems that
                      appear once the full system is assembled.
                    </p>

                  </div>

                </div>

              </div>


              {/* ==================================================
                  BACKGROUND / TAVRY LABS

                  This section explains the history without trying to
                  turn every old experiment into a portfolio project.
                 ================================================== */}
              <div className="mt-12 space-y-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">

                <p>
                  Tavry Labs is just the name I started using for those
                  projects. It began with smaller builds and experiments,
                  and the projects have gradually become more technical
                  as I’ve learned more.
                </p>

               <p>
                   Not everything has worked. One of my earlier projects,
                   ARC Bench, went through a couple attempts without ever
                   becoming what I originally wanted it to be. Tavry FX
                   was the first project where I took a much more complete
                   approach to the electronics, PCB, embedded system, power,
                   enclosure, and overall integration.
                </p>

                <p>
                  This site isn’t meant to archive everything I’ve ever
                  made. I use it to document the projects that best show
                  what I’m currently working on and what I’ve learned
                  along the way.
                </p>

                <p>
                  For now, I’m focused on school, continuing to build,
                  and getting better at turning what I learn into
                  hardware that actually works.
                </p>

              </div>


              {/* ==================================================
                  LINKS

                  Replace "#" with the actual GitHub and resume links
                  when those are ready.
                 ================================================== */}
              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="#"
                  className="border border-zinc-700 px-5 py-3 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="border border-zinc-700 px-5 py-3 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Resume
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ========================================================
          FOOTER
         ======================================================== */}
      <footer className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-xs text-zinc-600">
          <p>© 2026 Tavry Labs</p>
        </div>

      </footer>

    </div>
  );
}

export default About;