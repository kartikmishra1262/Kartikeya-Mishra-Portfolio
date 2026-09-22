import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const SOFTWARE = [
  { name: 'Adobe Photoshop', path: '/software/photoshop' },
  { name: 'Adobe Illustrator', path: '/software/illustrator' },
  { name: 'CorelDRAW', path: '/software/coreldraw' },
  { name: 'Figma', path: '/software/figma' },
  { name: 'Canva', path: '/software/canva' },
  { name: 'Adobe Premiere Pro', path: '/software/premiere-pro' },
  { name: 'Adobe After Effects', path: '/software/after-effects' },
  { name: 'HTML & CSS', path: '/software/html-css' },
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
          <div className="mx-auto mb-16 mt-10 flex max-w-[150px] items-center gap-3 sm:mb-20 md:mb-24">
            <span className="h-px flex-1 bg-[#D7E2EA]/15" />

            <span className="h-[4px] w-[4px] rotate-45 bg-[#D7E2EA]/45" />

            <span className="h-px flex-1 bg-[#D7E2EA]/15" />
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
                className="block"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    overflow-hidden
                    border-b
                    border-[#D7E2EA]/20
                    py-7
                    sm:py-8
                    md:py-10
                  "
                >
                  {/* SUBTLE HOVER BACKGROUND */}
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

                  {/* NUMBER */}
                  <span
                    className="
                      relative
                      z-10
                      font-medium
                      text-[#D7E2EA]/35
                      transition-all
                      duration-500
                      group-hover:text-[#D7E2EA]/75
                    "
                    style={{
                      fontSize: 'clamp(0.8rem, 1.3vw, 1.05rem)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* SOFTWARE NAME */}
                  <h3
                    className="
                      relative
                      z-10
                      max-w-[80%]
                      text-right
                      font-medium
                      uppercase
                      tracking-[-0.025em]
                      text-[#D7E2EA]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:-translate-x-2
                    "
                    style={{
                      fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                      lineHeight: 1.1,
                    }}
                  >
                    {software.name}
                  </h3>

                  {/* HOVER LINE */}
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
      </div>
    </section>
  );
}