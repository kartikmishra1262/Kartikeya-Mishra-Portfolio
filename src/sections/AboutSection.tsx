import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  'Creative and detail-oriented Graphic + UI Designer with hands-on experience in visual design, digital content creation and UI design. Skilled in creating modern, professional and engaging visuals using industry-standard design tools. Currently gaining practical experience through an internship at Abhyaas Classes while developing advanced graphic and UI/UX design skills.';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0C0C0C]"
    >
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(215,226,234,0.16) 0%, rgba(215,226,234,0.05) 35%, transparent 70%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Large background typography */}
      <div
        className="pointer-events-none absolute left-1/2 top-[7%] -translate-x-1/2 select-none whitespace-nowrap text-center font-black uppercase leading-none"
        style={{
          fontSize: 'clamp(7rem, 20vw, 300px)',
          color: 'rgba(215,226,234,0.018)',
          letterSpacing: '-0.06em',
        }}
      >
        ABOUT
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">

        {/* Top label */}
        <FadeIn delay={0} y={20}>
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#D7E2EA]/20 sm:w-16" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D7E2EA]/45 sm:text-xs">
              Who I Am
            </span>

            <div className="h-px w-10 bg-[#D7E2EA]/20 sm:w-16" />
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} y={35}>
          <h2
            className="hero-heading text-center font-black uppercase leading-[0.88] tracking-[0.000em]"
            style={{
              fontSize: 'clamp(4rem, 11vw, 155px)',
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

        {/* Main content */}
        <div className="mx-auto mt-12 w-full max-w-[850px] sm:mt-14 md:mt-16">

          {/* Top border */}
          <FadeIn delay={0.08} y={10}>
            <div className="mb-10 flex items-center sm:mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-[#D7E2EA]/10" />

              <div className="mx-4 h-[5px] w-[5px] rotate-45 bg-[#D7E2EA]/60" />

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D7E2EA]/25 to-[#D7E2EA]/10" />
            </div>
          </FadeIn>

          {/* Text */}
          <AnimatedText
            text={ABOUT_TEXT}
            className="mx-auto max-w-[760px] text-center font-medium leading-[1.8] text-[#D7E2EA]"
            style={{
              fontSize: 'clamp(1rem, 1.65vw, 1.4rem)',
            }}
          />

          {/* Bottom border */}
          <FadeIn delay={0.15} y={10}>
            <div className="mt-10 flex items-center sm:mt-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/15 to-transparent" />
            </div>
          </FadeIn>
        </div>

        {/* Bottom area */}
        <FadeIn delay={0.2} y={25}>
          <div className="mt-10 flex flex-col items-center sm:mt-12">
            <ContactButton />

            <div className="mt-7 flex items-center gap-3">
              <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/30 sm:text-[10px]">
                Graphic Design
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#D7E2EA]/30" />

              <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#D7E2EA]/30 sm:text-[10px]">
                UI Design
              </span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}