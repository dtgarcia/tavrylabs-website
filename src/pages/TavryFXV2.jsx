import { Link } from "react-router-dom";

function TavryFXV2() {
  /*
   * ============================================================
   * TAVRY FX V2
   * ============================================================
   *
   * This page documents the current design direction for a
   * second Tavry FX build.
   *
   * IMPORTANT:
   *
   * V2 has NOT been built yet.
   *
   * The language on this page should clearly separate:
   *
   * - what V1 proved
   * - what V1 exposed as a problem
   * - what may change in V2
   *
   * Nothing here should imply that an unbuilt feature has already
   * been implemented, tested, or validated.
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
              className="hover:text-white transition-colors"
            >
              About
            </Link>

          </div>

        </div>

      </nav>


      <main>

        {/* ======================================================
            PROJECT HEADER
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20">

          <div className="max-w-4xl">

            <div className="flex flex-wrap items-center gap-3 mb-6">

              <span className="text-xs uppercase tracking-[0.18em] text-amber-400">
                Design Study
              </span>

              <span className="text-zinc-700">/</span>

              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Tavry FX
              </span>

            </div>


            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Tavry FX V2
            </h1>


            <p className="mt-8 text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
              A second-generation design study based on the problems,
              compromises, and lessons that came out of building and
              testing Tavry FX V1.
            </p>

          </div>

        </section>


        {/* ======================================================
            CURRENT STATUS
           ====================================================== */}
        <section className="border-y border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

            <div className="grid sm:grid-cols-3 gap-8">

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Status
                </p>

                <p className="text-zinc-300">
                  Planning
                </p>

              </div>


              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Based On
                </p>

                <p className="text-zinc-300">
                  Tavry FX V1
                </p>

              </div>


              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Hardware
                </p>

                <p className="text-zinc-300">
                  Not Built
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            WHY A SECOND VERSION
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                01 / Why V2
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                V1 answered the first question.
              </h2>

            </div>


            <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

              <p>
                Tavry FX V1 showed that the basic idea could work:
                one portable system could process a guitar signal,
                output to a conventional amplifier, and also drive
                an exciter mounted to an acoustic guitar.
              </p>

              <p>
                Building it also exposed problems that were difficult
                to see earlier in the design process. The enclosure
                became larger than I wanted, the internal power and
                wiring took up more space than expected, and the
                mechanical connection between the exciter and guitar
                body turned out to matter much more than I originally
                assumed.
              </p>

              <p>
                Instead of continuing to add features to V1, I want to
                use those lessons to rethink the system before starting
                another build.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            WHAT STAYS
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  02 / What Stays
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  The main idea is staying the same.
                </h2>

              </div>


              <div className="md:col-span-8">

                <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
                  V2 is not meant to replace the concept behind Tavry FX.
                  The goal is to keep the parts of V1 that made sense
                  while improving the areas that created unnecessary
                  size, complexity, or mechanical problems.
                </p>


                <div className="grid sm:grid-cols-2 gap-6">

                  {/* Multi-effects */}
                  <div className="border border-zinc-800 p-6">

                    <p className="text-zinc-200 mb-3">
                      Multi-effects system
                    </p>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      The system would still process the guitar signal
                      digitally and allow multiple effects to be used
                      from the same device.
                    </p>

                  </div>


                  {/* Two output methods */}
                  <div className="border border-zinc-800 p-6">

                    <p className="text-zinc-200 mb-3">
                      Two output methods
                    </p>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      I want to keep both conventional amplifier output
                      and the option to drive an exciter mounted to an
                      acoustic guitar.
                    </p>

                  </div>


                  {/* On-device control */}
                  <div className="border border-zinc-800 p-6">

                    <p className="text-zinc-200 mb-3">
                      On-device control
                    </p>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      The controls and display would remain part of the
                      unit so the system can be adjusted without needing
                      another device.
                    </p>

                  </div>


                  {/* Portable design */}
                  <div className="border border-zinc-800 p-6">

                    <p className="text-zinc-200 mb-3">
                      Portable design
                    </p>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Battery operation and a self-contained enclosure
                      remain part of the direction for the next build.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            CURRENT DESIGN DIRECTION
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                03 / Current Direction
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What I’m looking at changing.
              </h2>

            </div>


            <div className="md:col-span-8">

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
                These are not finished specifications. They are the main
                areas I want to work through before starting another
                physical build.
              </p>


              <div className="border-t border-zinc-800">

                {/* Smaller enclosure */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Smaller enclosure
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    I want to reduce the overall size by reconsidering
                    the internal layout, component selection, and the
                    amount of separate hardware used inside V1.
                  </p>

                </div>


                {/* Power system */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Power system
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    The V1 power system works, but it uses several
                    separate components. I want to look at ways to make
                    the next version more compact and easier to package.
                  </p>

                </div>


                {/* Exciter coupling */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Exciter coupling
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    V1 testing showed that reliable contact between the
                    exciter and the curved guitar body has a large
                    effect on the result. I want the next design to
                    account for that mechanically from the beginning.
                  </p>

                </div>


                {/* Mounting */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Mounting
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    I want to improve the way the enclosure sits on the
                    guitar so the mounting system is more stable and
                    better matched to the shape of the instrument.
                  </p>

                </div>


                {/* Internal integration */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Internal integration
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    V1 was assembled from several separate electrical
                    and power sections. For another build, I want to
                    reconsider how those sections are arranged and how
                    much of the system could be integrated more cleanly.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            DEVELOPMENT STATUS
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  04 / Development
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Still on paper.
                </h2>

              </div>


              <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  Tavry FX V2 has not been built yet. There is no final
                  electrical design, enclosure, PCB, or validated
                  hardware for this version.
                </p>

                <p>
                  As the design develops, I plan to document the actual
                  engineering work here — including CAD, electronics,
                  prototypes, testing, and any changes that come out of
                  that process.
                </p>

                <p>
                  Until then, this page is simply a record of the
                  problems I want to address and the direction I am
                  considering based on V1.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            LINK BACK TO V1
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-600 mb-4">
            Previous Build
          </p>

          <Link
            to="/projects/tavry-fx"
            className="inline-block text-2xl md:text-3xl font-medium text-zinc-200 hover:text-white transition-colors"
          >
            ← Tavry FX V1
          </Link>

          <p className="mt-4 max-w-2xl text-zinc-500 leading-relaxed">
            V1 documents the physical system that these changes are
            based on.
          </p>

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

export default TavryFXV2;