import { Link } from "react-router-dom";

function ArcBench() {
  /*
   * ============================================================
   * ARC BENCH
   * ============================================================
   *
   * ARC Bench is a planned portable electronics workbench.
   *
   * The project comes from a simple idea:
   *
   * Take the core instruments commonly used at an electronics
   * lab bench and integrate them into one portable system.
   *
   * CURRENTLY PLANNED:
   *
   * - Adjustable DC bench power supply
   * - Digital multimeter
   * - Oscilloscope
   * - Signal / function generator
   * - Battery-powered operation
   * - Possible wall-powered operating mode
   * - Embedded control and user interface
   * - Custom PCB-based electrical architecture
   *
   * IMPORTANT:
   *
   * This project is still in the planning stage.
   * These are design goals, NOT finished specifications.
   *
   * Features, ranges, accuracy, bandwidth, power capability,
   * architecture, and component choices should only be presented
   * as finalized once they have actually been designed and tested.
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
                Planning
              </span>

              <span className="text-zinc-700">/</span>

              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                ARC Bench
              </span>

            </div>


            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              ARC Bench
            </h1>


            <p className="mt-8 text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
              A portable electronics workbench designed to bring several
              of the core instruments I use in electrical engineering labs
              into one integrated system.
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
                  Architecture
                </p>

                <p className="text-zinc-300">
                  Custom PCB
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
            PURPOSE
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                01 / Purpose
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Take the bench with me.
              </h2>

            </div>


            <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

              <p>
                Most of the electronics work I do eventually ends up
                requiring the same group of tools: a power supply,
                multimeter, oscilloscope, and some way to generate a
                known signal for testing.
              </p>

              <p>
                ARC Bench is my attempt to combine those functions into
                one portable instrument rather than treating them as
                separate pieces of bench equipment.
              </p>

              <p>
                The system is intended to operate from an internal
                rechargeable battery so it can be used away from a
                traditional workbench. I am also considering a
                wall-powered mode for longer sessions and potentially
                greater power capability, but that part of the
                architecture has not been decided yet.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            BACKGROUND
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  02 / Background
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  This is not my first attempt.
                </h2>

              </div>


              <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  I have tried to build versions of ARC Bench before.
                  Those attempts helped establish the idea, but they
                  never became the system I originally wanted to build.
                </p>

                <p>
                  The earlier versions relied heavily on separate
                  off-the-shelf modules connected together inside an
                  enclosure. That made it possible to prototype quickly,
                  but it also created a large amount of wiring and made
                  the overall system difficult to integrate cleanly.
                </p>

                <p>
                  Some of the measurement and power functions also did
                  not perform as well as I wanted. Eventually I stopped
                  adding to those versions rather than continuing to
                  patch the same architecture.
                </p>

                <p>
                  I am returning to ARC Bench after gaining more
                  experience with PCB design, embedded systems, power,
                  CAD, and system integration through other projects.
                  The new version starts from the architecture instead
                  of starting with a collection of modules.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            PLANNED INSTRUMENTS
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                03 / Instruments
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                The core bench tools.
              </h2>

            </div>


            <div className="md:col-span-8">

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
                These are the instruments currently planned for ARC Bench.
                Their final ranges, accuracy, bandwidth, interfaces, and
                electrical designs have not been determined yet.
              </p>


              <div className="border-t border-zinc-800">

                {/* ==================================================
                    ADJUSTABLE POWER SUPPLY
                   ================================================== */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Adjustable Power Supply
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    A controllable DC output for powering circuits during
                    development and testing. Adjustable voltage, current
                    monitoring, and current limiting are part of the
                    current design goals.
                  </p>

                </div>


                {/* ==================================================
                    DIGITAL MULTIMETER
                   ================================================== */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Digital Multimeter
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    Probe-based electrical measurement intended to cover
                    the common measurements I regularly need while
                    building and troubleshooting circuits.
                  </p>

                </div>


                {/* ==================================================
                    OSCILLOSCOPE
                   ================================================== */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Oscilloscope
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    A built-in waveform measurement system for viewing
                    electrical signals directly from ARC Bench rather
                    than requiring a separate oscilloscope.
                  </p>

                </div>


                {/* ==================================================
                    SIGNAL / FUNCTION GENERATOR
                   ================================================== */}
                <div className="grid sm:grid-cols-3 gap-4 py-7 border-b border-zinc-800">

                  <p className="text-zinc-200">
                    Signal Generator
                  </p>

                  <p className="sm:col-span-2 text-sm text-zinc-500 leading-relaxed">
                    A controllable test-signal source for working with
                    filters, amplifiers, and other circuits where a
                    known input waveform is useful.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            ELECTRICAL ARCHITECTURE
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  04 / Architecture
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Designed as one system.
                </h2>

              </div>


              <div className="md:col-span-8">

                <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                  <p>
                    The biggest change from the earlier ARC Bench attempts
                    is the electrical architecture.
                  </p>

                  <p>
                    Instead of building the system primarily from
                    preassembled power, measurement, and control modules,
                    I want the new ARC Bench to use circuitry designed
                    specifically around the requirements of the project
                    and integrated onto a custom PCB.
                  </p>

                  <p>
                    The board will need to bring together several very
                    different electrical sections, including power
                    conversion, measurement circuitry, embedded control,
                    signal acquisition, test-signal generation, battery
                    management, and the connections to the physical
                    controls and interface.
                  </p>

                  <p>
                    The exact architecture is still being developed.
                    Schematics, calculations, component selection, PCB
                    layout, and revisions will be documented here as
                    those parts of the project are completed.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            POWER
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                05 / Power
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Portable first.
              </h2>

            </div>


            <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

              <p>
                Battery operation is one of the main requirements of ARC
                Bench. The system is intended to contain its own
                rechargeable battery pack and power-management hardware
                rather than requiring an outlet during normal portable
                use.
              </p>

              <p>
                Designing that system will require balancing runtime,
                battery size, output capability, conversion efficiency,
                protection, thermal behavior, and the power requirements
                of the instruments themselves.
              </p>

              <p>
                I am also considering allowing ARC Bench to operate from
                wall power. That could provide an option for extended
                bench use and may allow different power capabilities than
                battery operation, but the implementation has not been
                decided yet.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            EMBEDDED CONTROL
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  06 / Embedded System
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  One interface for the bench.
                </h2>

              </div>


              <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  ARC Bench will require embedded control to coordinate
                  the different instrument sections and present their
                  information through a common interface.
                </p>

                <p>
                  The current direction is for a microcontroller to handle
                  system monitoring, controls, measurement data, power
                  settings, and communication with the display and other
                  hardware.
                </p>

                <p>
                  The microcontroller and interface hardware have not been
                  finalized yet. Those choices will depend on what the
                  measurement, waveform acquisition, control, and display
                  requirements look like once the architecture is further
                  developed.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            DESIGN PRIORITIES
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                07 / Design Priorities
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What I want to get right this time.
              </h2>

            </div>


            <div className="md:col-span-8">

              <div className="grid sm:grid-cols-2 gap-6">

                <div className="border border-zinc-800 p-6">

                  <p className="text-zinc-200 mb-3">
                    Measurement Integrity
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Measurement functions need to be designed around
                    known ranges, protection, resolution, and accuracy
                    rather than simply displaying whatever a sensor
                    reports.
                  </p>

                </div>


                <div className="border border-zinc-800 p-6">

                  <p className="text-zinc-200 mb-3">
                    Electrical Protection
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    A device intended for circuit development needs to
                    account for incorrect connections, current limits,
                    input protection, battery protection, and faults as
                    part of the design.
                  </p>

                </div>


                <div className="border border-zinc-800 p-6">

                  <p className="text-zinc-200 mb-3">
                    PCB Integration
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    The PCB should be the foundation of the system rather
                    than something added after the individual functions
                    have already been assembled.
                  </p>

                </div>


                <div className="border border-zinc-800 p-6">

                  <p className="text-zinc-200 mb-3">
                    Serviceability
                  </p>

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    The enclosure and internal layout should make it
                    possible to access, test, and revise the electronics
                    while the project is still being developed.
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
                  08 / Development
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Currently in planning.
                </h2>

              </div>


              <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  The new ARC Bench has not been built yet. The instrument
                  specifications, electrical architecture, PCB, embedded
                  hardware, and enclosure are still being developed.
                </p>

                <p>
                  The current feature list is also not final. Additional
                  bench functions may be added if they make sense for the
                  way I actually use the system, while other ideas may be
                  removed if they add complexity without enough benefit.
                </p>

                <p>
                  As the project moves forward, this page will be updated
                  with the actual engineering work: requirements,
                  calculations, schematics, component decisions, PCB
                  layouts, CAD, prototypes, measurements, failures, and
                  revisions.
                </p>

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

export default ArcBench;