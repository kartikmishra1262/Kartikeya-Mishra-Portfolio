import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects'];
const PORTRAIT_URL = '/profile-new.png';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        flex-col
        overflow-hidden
        bg-[#090909]
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {/* Central studio spotlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[620px]
          w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          sm:h-[760px]
          sm:w-[760px]
          lg:h-[950px]
          lg:w-[950px]
        "
        style={{
          background:
            'radial-gradient(circle, rgba(215,226,234,0.13) 0%, rgba(150,160,168,0.055) 25%, rgba(50,54,58,0.025) 44%, transparent 68%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Light bloom behind portrait */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-70
          sm:h-[420px]
          sm:w-[420px]
        "
        style={{
          background:
            'radial-gradient(circle, rgba(230,237,242,0.11) 0%, rgba(190,200,208,0.035) 42%, transparent 70%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Fine vertical guides */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute bottom-0 left-[25%] top-0 w-px bg-white/[0.025]" />
        <span className="absolute bottom-0 left-1/2 top-0 w-px bg-white/[0.035]" />
        <span className="absolute bottom-0 left-[75%] top-0 w-px bg-white/[0.025]" />
      </div>

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <FadeIn delay={0} y={-20} as="nav">
        <div
          className="
            relative
            z-50
            mx-auto
            flex
            w-full
            max-w-[1800px]
            items-center
            justify-between
            px-5
            pt-6
            sm:px-8
            md:px-10
            md:pt-8
          "
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                group
                relative
                pb-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D7E2EA]/70
                transition-colors
                duration-300
                hover:text-[#F4F7F9]
                sm:text-xs
                md:text-sm
              "
            >
              {link}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#D7E2EA]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </a>
          ))}

          <button
            type="button"
            onClick={scrollToContact}
            className="
              group
              relative
              pb-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#D7E2EA]/70
              transition-colors
              duration-300
              hover:text-[#F4F7F9]
              sm:text-xs
              md:text-sm
            "
          >
            Contact

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#D7E2EA]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </button>
        </div>
      </FadeIn>

      {/* ==================================================
          HI, I'M - BEHIND PORTRAIT
      ================================================== */}

      <FadeIn delay={0.1} y={18}>
        <div
          className="
            absolute
            left-1/2
            top-[12%]
            z-[4]
            flex
            -translate-x-1/2
            items-center
            gap-3

            sm:top-[11.5%]
            sm:gap-4

            md:top-[10%]
            md:gap-5
          "
        >
          {/* Left line */}
          <span
            className="
              h-px
              w-7
              bg-gradient-to-r
              from-transparent
              to-[#D7E2EA]/60
              sm:w-12
              md:w-16
            "
          />

          {/* Intro text */}
          <span
            className="
              whitespace-nowrap
              font-semibold
              uppercase
              text-[#D7E2EA]/80
            "
            style={{
              fontSize: 'clamp(0.65rem, 0.9vw, 0.85rem)',
              letterSpacing: '0.35em',
            }}
          >
            Hi, I&apos;m
          </span>

          {/* Right line */}
          <span
            className="
              h-px
              w-7
              bg-gradient-to-l
              from-transparent
              to-[#D7E2EA]/60
              sm:w-12
              md:w-16
            "
          />
        </div>
      </FadeIn>

      {/* ==================================================
          KARTIKEYA - BEHIND PORTRAIT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[17%]
          z-[3]
          w-full
          -translate-x-1/2

          sm:top-[15%]
          md:top-[13%]
        "
      >
        <FadeIn delay={0.16} y={55}>
          <h1
            className="
              hero-heading
              select-none
              whitespace-nowrap
              text-center
              font-black
              uppercase
              leading-[0.8]
            "
            style={{
              fontSize: 'clamp(4rem, 11.2vw, 180px)',
              letterSpacing: '0.000em',
              background:
                'linear-gradient(180deg, #E3E9ED 0%, #AEB7BF 48%, #6E767D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Kartikeya
          </h1>
        </FadeIn>
      </div>

      {/* ==================================================
          PORTRAIT - IN FRONT
      ================================================== */}

      <Magnet
        padding={180}
        strength={2}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.8s ease-in-out"
        className="
          absolute
          bottom-[20px]
          left-1/2
          z-10
          w-[320px]
          -translate-x-1/2

          sm:bottom-[8px]
          sm:w-[400px]

          md:bottom-[-5px]
          md:w-[510px]

          lg:bottom-[-20px]
          lg:w-[560px]

          xl:w-[590px]
        "
      >
        <FadeIn delay={0.38} y={45}>
          <div className="relative w-full">

            {/* Portrait halo */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[35%]
                h-[58%]
                w-full
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
              "
              style={{
                background:
                  'radial-gradient(ellipse, rgba(230,237,242,0.10) 0%, rgba(174,184,192,0.035) 42%, transparent 72%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Portrait */}
            <img
              src={PORTRAIT_URL}
              alt="Kartikeya Mishra, Graphic and UI Designer"
              draggable={false}
              className="
                pointer-events-none
                relative
                z-10
                block
                h-auto
                w-full
                select-none
              "
            />

            {/* Bottom fade */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                z-20
                h-[31%]
              "
              style={{
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(9,9,9,0.04) 16%, rgba(9,9,9,0.20) 38%, rgba(9,9,9,0.55) 65%, #090909 100%)',
              }}
            />

          </div>
        </FadeIn>
      </Magnet>

      {/* ==================================================
          LEFT IDENTITY
      ================================================== */}

      <FadeIn delay={0.5} y={25}>
        <div
          className="
            absolute
            bottom-7
            left-5
            z-30
            max-w-[165px]

            sm:bottom-8
            sm:left-8
            sm:max-w-[220px]

            md:bottom-10
            md:left-10
            md:max-w-[270px]
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D7E2EA]/60" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#D7E2EA]/45 sm:text-[9px]">
              Graphic + UI Designer
            </span>
          </div>

          <p
            className="
              uppercase
              leading-[1.5]
              tracking-[0.035em]
              text-[#D7E2EA]/85
            "
            style={{
              fontSize: 'clamp(0.68rem, 1.05vw, 1rem)',
            }}
          >
            Creating modern, professional and engaging visual experiences
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D7E2EA]/25" />
            <span className="h-[3px] w-[3px] rounded-full bg-[#D7E2EA]/30" />
          </div>
        </div>
      </FadeIn>

      {/* ==================================================
          RIGHT CONTACT
      ================================================== */}

      <FadeIn delay={0.56} y={25}>
        <div
          className="
            absolute
            bottom-7
            right-5
            z-30
            flex
            flex-col
            items-end
            gap-4

            sm:bottom-8
            sm:right-8

            md:bottom-10
            md:right-10
          "
        >
          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/35">
              Let&apos;s Connect
            </span>

            <span className="h-[4px] w-[4px] rounded-full bg-[#D7E2EA]/40" />
          </div>

          <div id="contact-area">
            <ContactButton />
          </div>
        </div>
      </FadeIn>

      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <FadeIn delay={0.68} y={15}>
        <button
          type="button"
          onClick={scrollDown}
          aria-label="Scroll to About section"
          className="
            group
            absolute
            bottom-8
            left-1/2
            z-40
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            md:flex
          "
        >
          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#D7E2EA]/30
              transition-colors
              duration-300
              group-hover:text-[#D7E2EA]/60
            "
          >
            Scroll
          </span>

          <span className="relative block h-9 w-px overflow-hidden bg-[#D7E2EA]/15">
            <span
              className="
                absolute
                left-0
                top-0
                h-4
                w-px
                bg-[#D7E2EA]/70
                transition-transform
                duration-500
                group-hover:translate-y-5
              "
            />
          </span>
        </button>
      </FadeIn>

      {/* Bottom hairline */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-40
          h-px
          w-[94%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D7E2EA]/10
          to-transparent
        "
      />
    </section>
  );
}