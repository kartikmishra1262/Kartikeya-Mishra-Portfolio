import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const ABOUT_TEXT =
  "I'm Kartikeya Mishra, a Graphic + UI Designer focused on creating visuals that feel clear, refined and purposeful. I combine visual design, typography, composition and digital experiences to turn ideas into work that communicates with impact. From branding and social creatives to interface design, I enjoy building modern visuals with strong attention to detail.";

const FOCUS_AREAS = [
  'Graphic Design',
  'UI Design',
  'Visual Design',
  'Digital Experiences',
];

const TOOLS = [
  'Photoshop',
  'Illustrator',
  'Figma',
  'CorelDRAW',
  'Premiere Pro',
  'Canva',
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0C0C0C]"
    >
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(215,226,234,0.16) 0%, rgba(215,226,234,0.05) 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* =========================================================
          LARGE BACKGROUND TYPOGRAPHY
      ========================================================= */}
      <div
        className="pointer-events-none absolute left-1/2 top-[5%] -translate-x-1/2 select-none whitespace-nowrap text-center font-black uppercase leading-none"
        style={{
          fontSize: 'clamp(7rem, 20vw, 300px)',
          color: 'rgba(215,226,234,0.018)',
          letterSpacing: '-0.07em',
        }}
      >
        ABOUT
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32">

        {/* =======================================================
            TOP LABEL
        ======================================================= */}
        <FadeIn delay={0} y={20}>
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#D7E2EA]/20 sm:w-16" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D7E2EA]/45 sm:text-xs">
              A Little About Me
            </span>

            <div className="h-px w-10 bg-[#D7E2EA]/20 sm:w-16" />
          </div>
        </FadeIn>

        {/* =======================================================
            MAIN HEADING
        ======================================================= */}
        <FadeIn delay={0.05} y={35}>
          <h2
            className="hero-heading text-center font-black uppercase leading-[0.88]"
            style={{
              fontSize: 'clamp(4rem, 11vw, 155px)',
              letterSpacing: '-0.035em',
              background:
                'linear-gradient(180deg, #F0F5F8 0%, #D7E2EA 45%, #89949E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}
        <div className="mx-auto mt-14 w-full max-w-6xl sm:mt-16 md:mt-20">

          {/* Top divider */}
          <FadeIn delay={0.08} y={10}>
            <div className="mb-10 flex items-center sm:mb-14">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-[#D7E2EA]/10" />

              <div className="mx-4 h-[5px] w-[5px] rotate-45 bg-[#D7E2EA]/60" />

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D7E2EA]/25 to-[#D7E2EA]/10" />
            </div>
          </FadeIn>

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">

            {/* Left editorial label */}
            <FadeIn delay={0.1} y={25}>
              <div className="lg:pt-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/35 sm:text-xs">
                  The Designer
                </span>

                <div className="mt-5 h-px w-16 bg-[#D7E2EA]/25" />

                <p className="mt-5 max-w-[280px] text-sm leading-7 text-[#D7E2EA]/45">
                  Creating visual experiences with clarity, character and
                  attention to detail.
                </p>
              </div>
            </FadeIn>

            {/* Main about text */}
            <div>
              <AnimatedText
                text={ABOUT_TEXT}
                className="max-w-[850px] font-medium leading-[1.8] text-[#D7E2EA]"
                style={{
                  fontSize: 'clamp(1.05rem, 1.65vw, 1.4rem)',
                }}
              />
            </div>
          </div>

          {/* =====================================================
              FOCUS AREAS
          ===================================================== */}
          <FadeIn delay={0.18} y={25}>
            <div className="mt-16 border-t border-[#D7E2EA]/10 pt-8 sm:mt-20 sm:pt-10">

              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/35">
                    What I Focus On
                  </span>

                  <h3 className="mt-2 text-lg font-medium tracking-wide text-[#D7E2EA] sm:text-xl">
                    Areas of Design
                  </h3>
                </div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D7E2EA]/25">
                  04 Focus Areas
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {FOCUS_AREAS.map((area, index) => (
                  <div
                    key={area}
                    className="group relative overflow-hidden rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.025] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/25 hover:bg-white/[0.05]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-[9px] font-medium tracking-[0.25em] text-[#D7E2EA]/25">
                        0{index + 1}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#D7E2EA]/30 transition-all duration-300 group-hover:bg-[#D7E2EA]/70" />
                    </div>

                    <h4 className="text-sm font-medium uppercase tracking-[0.12em] text-[#D7E2EA]/75">
                      {area}
                    </h4>

                    <div className="mt-5 h-px w-8 bg-[#D7E2EA]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#D7E2EA]/50" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* =====================================================
              TOOLS + CURRENTLY
          ===================================================== */}
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Tools */}
            <FadeIn delay={0.22} y={25}>
              <div className="h-full rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.02] p-6 sm:p-7">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/35">
                    Design Toolkit
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#D7E2EA]/20">
                    Tools
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#D7E2EA]/10 bg-white/[0.025] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#D7E2EA]/60 transition-all duration-300 hover:border-[#D7E2EA]/25 hover:bg-white/[0.06] hover:text-[#D7E2EA]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Currently */}
            <FadeIn delay={0.26} y={25}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.02] p-6 sm:p-7">

                {/* Subtle glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(215,226,234,0.25) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D7E2EA]/30" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D7E2EA]/60" />
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/35">
                      Currently
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-medium tracking-wide text-[#D7E2EA]">
                    Growing through real-world design
                  </h3>

                  <p className="mt-4 max-w-[500px] text-sm leading-7 text-[#D7E2EA]/45">
                    Developing advanced Graphic and UI/UX design skills while
                    working on practical creative projects and building a
                    stronger digital design portfolio.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* =====================================================
              BOTTOM TAGLINE
          ===================================================== */}
          <FadeIn delay={0.3} y={15}>
            <div className="mt-14 flex flex-col items-center sm:mt-16">

              <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-[#D7E2EA]/10 to-transparent" />

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/30 sm:text-[10px]">
                  Design with Purpose
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-[#D7E2EA]/30" />

                <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/30 sm:text-[10px]">
                  Crafted with Detail
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-[#D7E2EA]/30" />

                <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/30 sm:text-[10px]">
                  Built to Communicate
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}