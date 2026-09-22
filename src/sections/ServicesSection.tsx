import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Graphic Design',
    description:
      'Creating professional and engaging visual designs for digital and print communication.',
  },
  {
    number: '02',
    name: 'UI Design',
    description:
      'Designing clean, modern and user-friendly interfaces with attention to layout and visual hierarchy.',
  },
  {
    number: '03',
    name: 'Social Media Design',
    description:
      'Creating social media graphics and promotional creatives for effective digital communication.',
  },
  {
    number: '04',
    name: 'Poster & Creative Design',
    description:
      'Designing posters, promotional creatives and marketing visuals for different platforms.',
  },
  {
    number: '05',
    name: 'Branding & Visual Design',
    description:
      'Creating consistent visual identities and brand-focused designs that communicate clearly.',
  },
  {
    number: '06',
    name: 'Image Editing & Retouching',
    description:
      'Enhancing and retouching images to produce clean and professional visual content.',
  },
  {
    number: '07',
    name: 'Layout & Typography',
    description:
      'Building balanced layouts and using typography effectively to improve readability and visual impact.',
  },
  {
    number: '08',
    name: 'Digital Content Design',
    description:
      'Creating visually engaging digital content for websites, social media and marketing materials.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="
        w-full
        rounded-t-[40px]
        bg-white
        px-5
        py-20
        sm:rounded-t-[50px]
        sm:px-8
        sm:py-24
        md:rounded-t-[60px]
        md:px-10
        md:py-32
      "
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="
            text-center
            font-black
            uppercase
            tracking-[0.00em]
            text-[#0C0C0C]
          "
          style={{
            fontSize: 'clamp(3.5rem, 11.5vw, 160px)',
            lineHeight: 0.85,
          }}
        >
          Core Skills
        </h2>
      </FadeIn>

      <FadeIn delay={0.08} y={15}>
        <div className="mx-auto mb-16 mt-9 flex max-w-[150px] items-center gap-3 sm:mb-20 md:mb-24">
          <span className="h-px flex-1 bg-black/15" />
          <span className="h-[4px] w-[4px] rounded-full bg-black/40" />
          <span className="h-px flex-1 bg-black/15" />
        </div>
      </FadeIn>

      <div className="mx-auto max-w-6xl border-t border-black/15">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.05} y={25}>
            <div
              className="
                group
                relative
                block
                border-b
                border-black/15
                transition-colors
                duration-300
                hover:bg-black/[0.025]
              "
            >
              <div
                className="
                  grid
                  grid-cols-[80px_1fr]
                  items-start
                  gap-5
                  py-8
                  sm:grid-cols-[120px_1fr]
                  sm:gap-8
                  sm:py-10
                  md:grid-cols-[170px_1fr]
                  md:gap-10
                  md:py-12
                "
              >
                <span
                  className="
                    font-black
                    text-black/80
                    transition-all
                    duration-300
                    group-hover:text-black
                  "
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 105px)',
                    lineHeight: 0.82,
                  }}
                >
                  {service.number.split('').map((digit, index) => (
                    <span
                      key={index}
                      style={{
                        marginRight: index === 0 ? '3px' : '0',
                      }}
                    >
                      {digit}
                    </span>
                  ))}
                </span>

                <div
                  className="
                    min-w-0
                    pt-1
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:translate-x-1
                    sm:pt-2
                  "
                >
                  <h3
                    className="
                      font-bold
                      uppercase
                      text-[#0C0C0C]
                    "
                    style={{
                      fontSize: 'clamp(1.05rem, 1.9vw, 1.75rem)',
                      lineHeight: 1.2,
                      overflowWrap: 'break-word',
                    }}
                  >
                    {service.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-3xl
                      font-light
                      leading-relaxed
                      text-black/55
                      sm:mt-4
                    "
                    style={{
                      fontSize: 'clamp(0.85rem, 1.25vw, 1.1rem)',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
