import { Link } from "react-router-dom";

function TavryFX() {
  /*
   * ============================================================
   * TAVRY FX V1
   * ============================================================
   *
   * This page documents the completed V1 build of Tavry FX.
   *
   * Real project images currently used:
   *
   * /public/images/tavry-fx/tavry-fx-v1.jpeg
   * /public/images/tavry-fx/analog-schematic.png
   * /public/images/tavry-fx/analog-pcb.png
   * /public/images/tavry-fx/tavry-fx-audio-hardware.jpeg
   * /public/images/tavry-fx/tavry-fx-power-system.jpeg
   * /public/images/tavry-fx/enclosure-cad.png
   * /public/images/tavry-fx/enclosure-interior.png
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

              <span className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                V1 Build Complete
              </span>

              <span className="text-zinc-700">/</span>

              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Tavry FX
              </span>

            </div>


            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Tavry FX
            </h1>


            <p className="mt-8 text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
              A portable guitar multi-effects system with conventional
              amplifier output and an integrated exciter system designed
              to mount directly to an acoustic guitar.
            </p>

          </div>

        </section>


        {/* ======================================================
            PROJECT DETAILS
           ====================================================== */}
        <section className="border-y border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Electronics
                </p>

                <p className="text-zinc-300">
                  Analog Audio + PCB
                </p>

              </div>


              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Embedded
                </p>

                <p className="text-zinc-300">
                  Daisy Seed
                </p>

              </div>


              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Mechanical
                </p>

                <p className="text-zinc-300">
                  Fusion 360 + 3D Printing
                </p>

              </div>


              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600 mb-2">
                  Power
                </p>

                <p className="text-zinc-300">
                  Rechargeable Battery System
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            FINAL BUILD IMAGE
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          <div className="border border-zinc-800 bg-zinc-950 overflow-hidden">

            <img
              src="/images/tavry-fx/tavry-fx-v1.jpeg"
              alt="Completed Tavry FX V1 guitar multi-effects system"
              className="w-full max-h-[850px] object-contain"
            />

          </div>

          <p className="mt-3 text-sm text-zinc-600">
            Tavry FX V1 assembled and powered on.
          </p>

        </section>


        {/* ======================================================
            01 / OVERVIEW
           ====================================================== */}
        <section className="border-t border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  01 / Overview
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  One system, two ways to use it.
                </h2>

              </div>


              <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  Tavry FX started as an attempt to build a portable guitar
                  effects system that could be used both like a traditional
                  effects unit and directly on an acoustic guitar.
                </p>

                <p>
                  The guitar signal passes through an analog front end before
                  entering a Daisy Seed for digital audio processing. The
                  processed signal can then be sent to an external amplifier
                  or through an internal amplifier to an exciter mounted
                  against the guitar body.
                </p>

                <p>
                  V1 was primarily about getting those different parts working
                  together as one physical system. The build works, but testing
                  also exposed several areas that I would approach differently
                  in another version.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            02 / SYSTEM
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  02 / System
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Bringing the pieces together.
                </h2>

              </div>


              <div className="md:col-span-8">

                <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                  <p>
                    Tavry FX combines an analog guitar input, embedded audio
                    processing, physical controls, battery power, audio
                    amplification, and a mechanical mounting system.
                  </p>

                  <p>
                    The challenge was not just getting each section to work
                    independently. The larger problem was making the electrical,
                    embedded, power, audio, and mechanical parts operate
                    together inside one portable device.
                  </p>

                </div>


                {/* ------------------------------------------------
                    SIMPLE SYSTEM BLOCK DIAGRAM
                   ------------------------------------------------ */}
                <div className="mt-12 border border-zinc-800">

                  <div className="grid md:grid-cols-5">

                    <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-800">
                      <p className="text-xs text-zinc-500 uppercase tracking-[0.16em]">
                        Guitar Input
                      </p>
                    </div>

                    <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-800">
                      <p className="text-xs text-zinc-500 uppercase tracking-[0.16em]">
                        Analog Front End
                      </p>
                    </div>

                    <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-800">
                      <p className="text-xs text-zinc-500 uppercase tracking-[0.16em]">
                        Daisy Seed
                      </p>
                    </div>

                    <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-800">
                      <p className="text-xs text-zinc-500 uppercase tracking-[0.16em]">
                        Output Stage
                      </p>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-zinc-500 uppercase tracking-[0.16em]">
                        Amp / Exciter
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            03 / ELECTRONICS
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                03 / Electronics
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                From breadboard to PCB.
              </h2>

            </div>


            <div className="md:col-span-8">

              <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  The analog side of Tavry FX conditions the guitar signal
                  before it reaches the digital audio hardware. The circuit
                  was designed around TL072 op-amps and includes the input
                  buffering, gain, and signal-conditioning stages used by the
                  system.
                </p>

                <p>
                  After developing and testing the circuit, I transferred the
                  design into KiCad and created a custom PCB for the analog
                  section.
                </p>

                <p>
                  The board went through revision as problems that were less
                  obvious during prototyping became easier to identify once the
                  circuit existed as physical hardware.
                </p>

              </div>


              {/* ------------------------------------------------
                  REAL KICAD IMAGES
                 ------------------------------------------------ */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">

                {/* Analog schematic */}
                <div>

                  <div className="aspect-[4/3] border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">

                    <img
                      src="/images/tavry-fx/analog-schematic.png"
                      alt="KiCad schematic for the Tavry FX analog audio circuit"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Analog audio schematic developed in KiCad.
                  </p>

                </div>


                {/* Analog PCB layout */}
                <div>

                  <div className="aspect-[4/3] border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">

                    <img
                      src="/images/tavry-fx/analog-pcb.png"
                      alt="KiCad PCB layout for the Tavry FX analog audio board"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Custom PCB layout for the analog front end.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            04 / EMBEDDED SYSTEM
           ====================================================== */}
        <section className="border-y border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  04 / Embedded System
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Audio processing and control.
                </h2>

              </div>


              <div className="md:col-span-8">

                <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                  <p>
                    A Daisy Seed handles the real-time audio processing and
                    provides the embedded platform for the controls and display
                    interface.
                  </p>

                  <p>
                    The system supports multiple digital effects, including
                    reverb, chorus, delay, vibrato, flanger, phaser, and
                    pitch-based effects. The controls allow the effects to be
                    adjusted and combined from the device itself.
                  </p>

                  <p>
                    The firmware is one part of a larger embedded system. Much
                    of the project work involved integrating the processing
                    hardware with the analog electronics, physical controls,
                    display, audio outputs, and the rest of the device.
                  </p>

                </div>


                {/* ------------------------------------------------
                    AI-ASSISTED FIRMWARE NOTE

                    This is intentionally visible but understated.
                   ------------------------------------------------ */}
                <div className="max-w-3xl mt-10 pl-5 border-l border-zinc-700">

                  <p className="text-sm text-zinc-500 leading-relaxed">
                    The Tavry FX firmware was developed with AI-assisted coding.
                    I defined the system behavior, integrated and tested the
                    firmware on the hardware, and modified and debugged the
                    implementation throughout development. AI was used primarily
                    to accelerate code generation and iteration.
                  </p>

                </div>


                {/* ------------------------------------------------
                    REAL AUDIO / EMBEDDED HARDWARE PHOTO
                   ------------------------------------------------ */}
                <div className="mt-12">

                  <div className="border border-zinc-800 bg-zinc-900 overflow-hidden">

                    <img
                      src="/images/tavry-fx/tavry-fx-audio-hardware.jpeg"
                      alt="Tavry FX internal audio and embedded hardware including the Daisy Seed and custom analog PCB"
                      className="w-full max-h-[900px] object-contain"
                    />

                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Tavry FX embedded and audio hardware assembled inside the enclosure.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            05 / POWER
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                05 / Power
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Making the system portable.
              </h2>

            </div>


            <div className="md:col-span-8">

              <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                <p>
                  Tavry FX uses a rechargeable two-cell lithium-ion battery
                  system with protection and DC-DC conversion to supply the
                  different electrical sections of the device.
                </p>

                <p>
                  The power system has to support the analog electronics,
                  Daisy Seed, display, and the amplifier used to drive the
                  exciter while keeping the complete system portable.
                </p>

                <p>
                  The V1 power architecture works, but it also uses several
                  separate components and takes up more internal space than I
                  would want in another version. Simplifying that architecture
                  is one of the areas I would revisit in V2.
                </p>

              </div>


              {/* ------------------------------------------------
                  REAL POWER SYSTEM PHOTO
                 ------------------------------------------------ */}
              <div className="mt-12">

                <div className="border border-zinc-800 bg-zinc-900 overflow-hidden">

                  <img
                    src="/images/tavry-fx/tavry-fx-power-system.jpeg"
                    alt="Tavry FX battery, DC-DC power conversion modules, wiring, and exciter"
                    className="w-full max-h-[900px] object-contain"
                  />

                </div>

                <p className="mt-3 text-sm text-zinc-600">
                  Battery, power-conversion hardware, and exciter installed in the V1 enclosure.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            06 / MECHANICAL
           ====================================================== */}
        <section className="border-y border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            <div className="grid md:grid-cols-12 gap-10">

              {/* ------------------------------------------------
                  SECTION TITLE
                 ------------------------------------------------ */}
              <div className="md:col-span-4">

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                  06 / Mechanical
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Designing around the electronics.
                </h2>

              </div>


              {/* ------------------------------------------------
                  SECTION CONTENT
                 ------------------------------------------------ */}
              <div className="md:col-span-8">

                <div className="max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

                  <p>
                    I designed the Tavry FX enclosure and faceplate in Fusion
                    360 and produced the parts through 3D printing. The
                    enclosure was designed around the physical requirements of
                    the electronics, controls, battery system, connectors, and
                    exciter.
                  </p>

                  <p>
                    Internal features were added to locate and support the
                    different components while packaging the system inside a
                    single enclosure. The exciter also required its own
                    mounting geometry so that it could extend through the
                    bottom of the housing and transfer vibration into the
                    guitar body.
                  </p>

                  <p>
                    Tavry FX is held against the back of the guitar using a
                    separate magnetic mounting bracket. Testing showed that
                    the exciter does not protrude far enough from the enclosure
                    to maintain consistent contact with the guitar.
                  </p>

                  <p>
                    I am addressing this by adding a compliant TPU transfer pad
                    between the exciter and guitar body. The pad is intended to
                    maintain contact while still allowing vibration to transfer
                    into the instrument. The final pad design is still being
                    developed and tested.
                  </p>

                </div>


                {/* ------------------------------------------------
                    REAL FUSION 360 CAD IMAGES
                   ------------------------------------------------ */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">

                  {/* Complete enclosure */}
                  <div>

                    <div className="aspect-[4/3] border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">

                      <img
                        src="/images/tavry-fx/enclosure-cad.png"
                        alt="Fusion 360 CAD views of the Tavry FX enclosure and faceplate"
                        className="w-full h-full object-contain"
                      />

                    </div>

                    <p className="mt-3 text-sm text-zinc-600">
                      Enclosure and faceplate assembly.
                    </p>

                  </div>


                  {/* Interior geometry */}
                  <div>

                    <div className="aspect-[4/3] border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">

                      <img
                        src="/images/tavry-fx/enclosure-interior.png"
                        alt="Fusion 360 CAD views of the internal Tavry FX enclosure geometry"
                        className="w-full h-full object-contain"
                      />

                    </div>

                    <p className="mt-3 text-sm text-zinc-600">
                      Internal mounting and component geometry.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            07 / RESULTS
           ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">
                07 / Results
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                A working V1 and a clear next step.
              </h2>

            </div>


            <div className="md:col-span-8 max-w-3xl space-y-6 text-lg text-zinc-400 leading-relaxed">

              <p>
                Tavry FX V1 successfully processes the guitar signal, supports
                multiple effects, provides conventional amplifier output, and
                drives an exciter mounted against an acoustic guitar.
              </p>

              <p>
                The conventional audio output has been the more reliable of the
                two output methods during testing. The exciter output is more
                sensitive to the mechanical interface between the device and
                the guitar, which is still being improved.
              </p>

              <p>
                The completed V1 is also larger and more internally complicated
                than I would want a future version to be. Rather than continue
                adding features to the same architecture, I am using what I
                learned from V1 as the starting point for a second-generation
                design.
              </p>

              <p>
                The biggest result of the project was learning how the circuit,
                PCB, embedded hardware, power system, audio hardware, and
                mechanical design affect each other once they have to work
                together as one device.
              </p>

            </div>

          </div>

        </section>


        {/* ======================================================
            NEXT ITERATION
           ====================================================== */}
        <section className="border-t border-zinc-800 bg-zinc-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-5">
              Next Iteration
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

              <div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Tavry FX V2
                </h2>

                <p className="mt-4 text-zinc-500 max-w-2xl leading-relaxed">
                  A second-generation design study based on the problems,
                  compromises, and lessons identified while building and
                  testing V1.
                </p>

              </div>


              <Link
                to="/projects/tavry-fx-v2"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                View V2 Design Study →
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
          <p>© 2026 Tavry Labs</p>
        </div>

      </footer>

    </div>
  );
}

export default TavryFX;