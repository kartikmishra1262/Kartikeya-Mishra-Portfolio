import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const SOFTWARE = [
  {
    name: 'Adobe Photoshop',
    logo: '/software/photoshop.svg',
    path: '/software/photoshop',
  },
  {
    name: 'Adobe Illustrator',
    logo: '/software/illustrator.svg',
    path: '/software/illustrator',
  },
  {
    name: 'CorelDRAW',
    logo: '/software/coreldraw.svg',
    path: '/software/coreldraw',
  },
  {
    name: 'Figma',
    logo: '/software/figma.svg',
    path: '/software/figma',
  },
  {
    name: 'Canva',
    logo: '/software/Canva.svg',
    path: '/software/canva',
  },
  {
    name: 'Adobe Premiere Pro',
    logo: '/software/premierepro.svg',
    path: '/software/premiere-pro',
  },
  {
    name: 'Adobe After Effects',
    logo: '/software/aftereffects.svg',
    path: '/software/after-effects',
  },
  {
    name: 'HTML & CSS',
    logos: ['/software/html.svg', '/software/css3.svg'],
    path: '/software/html-css',
  },
];

export default function SoftwareSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0C0C0C]
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:px-10
        md:py-32
      "
    >
      {/* VERY SUBTLE BACKGROUND TEXT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[70px]
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-black
          uppercase
        "
        style={{
          color: 'rgba(215, 226, 234, 0.018)',
          fontSize: 'clamp(8rem, 22vw, 320px)',
          lineHeight: 0.8,
          letterSpacing: '-0.07em',
        }}
      >
        TOOLS
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADING */}
        <FadeIn delay={0} y={30}>
          <h2
            className="
              hero-heading
              text-center
              font-black
              uppercase
              tracking-[0.002em]
              text-[#D7E2EA]
            "
            style={{
              fontSize: 'clamp(3.2rem, 10vw, 140px)',
              lineHeight: 0.88,
            }}
          >
            Design Software
          </h2>
        </FadeIn>

        {/* SMALL DETAIL */}
        <FadeIn delay={0.08} y={15}>
          <div className="mx-auto mb-10 mt-10 flex max-w-[150px] items-center gap-3 sm:mb-12 md:mb-16">
            <span className="h-px flex-1 bg-[#D7E2EA]/15" />

            <span className="h-[4px] w-[4px] rotate-45 bg-[#D7E2EA]/45" />

            <span className="h-px flex-1 bg-[#D7E2EA]/15" />
          </div>
        </FadeIn>

        {/* INTERACTION HINT */}
        <FadeIn delay={0.12} y={10}>
          <div
            className="
              mx-auto
              mb-5
              flex
              max-w-5xl
              items-center
              justify-between
              px-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#D7E2EA]/35
              sm:text-xs
            "
          >
            <span>Select a tool</span>

            <span className="hidden sm:block">
              View selected work
            </span>
          </div>
        </FadeIn>

        {/* SOFTWARE LIST */}
        <div className="mx-auto max-w-5xl border-t border-[#D7E2EA]/20">

          {SOFTWARE.map((software, index) => (
            <FadeIn
              key={software.name}
              delay={index * 0.06}
              y={20}
            >
              <Link
                to={software.path}
                aria-label={`View ${software.name} work`}
                className="block"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    min-h-[100px]
                    cursor-pointer
                    items-center
                    overflow-hidden
                    border-b
                    border-[#D7E2EA]/20
                    px-1
                    py-6
                    transition-all
                    duration-500
                    sm:min-h-[115px]
                    sm:py-7
                    md:min-h-[130px]
                    md:py-8
                  "
                >

                  {/* HOVER BACKGROUND */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-white/[0.025]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* LEFT HOVER ACCENT */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      origin-left
                      scale-y-0
                      bg-[#D7E2EA]/60
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-y-100
                    "
                  />

                  {/* NUMBER */}
                  <span
                    className="
                      relative
                      z-10
                      w-[38px]
                      shrink-0
                      font-medium
                      text-[#D7E2EA]/35
                      transition-all
                      duration-500
                      group-hover:text-[#D7E2EA]/80
                      sm:w-[50px]
                    "
                    style={{
                      fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* SOFTWARE LOGO */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-[#D7E2EA]/10
                      bg-[#D7E2EA]/[0.025]
                      p-2
                      opacity-75
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-110
                      group-hover:border-[#D7E2EA]/25
                      group-hover:bg-[#D7E2EA]/[0.06]
                      group-hover:opacity-100
                      sm:h-16
                      sm:w-16
                      sm:p-2.5
                      md:h-[72px]
                      md:w-[72px]
                      md:p-3
                    "
                  >

                    {/* SINGLE SOFTWARE LOGO */}
                    {'logo' in software && software.logo && (
                      <img
                        src={software.logo}
                        alt=""
                        className="
                          h-full
                          w-full
                          scale-110
                          object-contain
                          grayscale
                          brightness-150
                          transition-all
                          duration-500
                          group-hover:grayscale-0
                          group-hover:brightness-100
                        "
                      />
                    )}

                    {/* HTML + CSS LOGOS */}
                    {'logos' in software && software.logos && (
                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          gap-1.5
                        "
                      >
                        {software.logos.map((logo) => (
                          <img
                            key={logo}
                            src={logo}
                            alt=""
                            className="
                              h-8
                              w-8
                              object-contain
                              grayscale
                              brightness-150
                              transition-all
                              duration-500
                              group-hover:grayscale-0
                              group-hover:brightness-100
                              sm:h-9
                              sm:w-9
                              md:h-10
                              md:w-10
                            "
                          />
                        ))}
                      </div>
                    )}

                  </div>

                  {/* SOFTWARE NAME */}
                  <h3
                    className="
                      relative
                      z-10
                      ml-4
                      max-w-[55%]
                      text-left
                      font-medium
                      uppercase
                      tracking-[-0.025em]
                      text-[#D7E2EA]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-x-2
                      sm:ml-5
                      sm:max-w-[60%]
                      md:ml-6
                    "
                    style={{
                      fontSize: 'clamp(1rem, 2.7vw, 2.5rem)',
                      lineHeight: 1.1,
                    }}
                  >
                    {software.name}
                  </h3>

                  {/* VIEW WORK */}
                  <div
                    className="
                      relative
                      z-10
                      ml-auto
                      flex
                      shrink-0
                      items-center
                      gap-2
                      pl-3
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#D7E2EA]/30
                      transition-all
                      duration-500
                      group-hover:text-[#D7E2EA]/85
                      sm:gap-3
                      sm:text-[10px]
                      sm:tracking-[0.16em]
                      md:text-xs
                    "
                  >
                    <span className="hidden sm:inline">
                      View Work
                    </span>

                    <span
                      className="
                        inline-block
                        text-sm
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:translate-x-1.5
                        sm:text-base
                        md:text-lg
                      "
                    >
                      →
                    </span>
                  </div>

                  {/* BOTTOM HOVER LINE */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      z-20
                      h-px
                      w-0
                      bg-[#D7E2EA]/80
                      transition-all
                      duration-700
                      ease-out
                      group-hover:w-full
                    "
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* BOTTOM HINT */}
        <FadeIn delay={0.55} y={15}>
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#D7E2EA]/25
              sm:mt-10
              sm:text-[10px]
            "
          >
            <span className="h-px w-8 bg-[#D7E2EA]/15" />

            <span>
              Click to explore
            </span>

            <span className="h-px w-8 bg-[#D7E2EA]/15" />

          </div>
        </FadeIn>

      </div>
    </section>
  );
}