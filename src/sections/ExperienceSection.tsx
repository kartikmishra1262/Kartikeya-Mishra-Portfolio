import FadeIn from '../components/FadeIn';

const EXPERIENCES = [
  {
    number: '01',
    role: 'Graphic Design Intern',
    company: 'Abhyaas Classes',
    duration: 'August 2026 – Present',
    location: 'Gorakhpur, Uttar Pradesh',
    points: [
      {
        title: '',
        text: 'Creating social media graphics and promotional creatives.',
      },
      {
        title: '',
        text: 'Designing educational and marketing content for digital platforms.',
      },
      {
        title: '',
        text: 'Working on posters, festival creatives, video content and other visual communication materials.',
      },
      {
        title: '',
        text: 'Applying typography, composition, color theory and branding principles to real-world projects.',
      },
    ],
  },
  {
    number: '02',
    role: 'Operation Manager',
    company: 'Perfect Shine Global Co., Ltd',
    duration: '2019 – 2025',
    location: 'Bangkok, Thailand',
    points: [
      {
        title: 'Procurement & Quality Control:',
        text: 'Oversee end-to-end gemstone purchasing from local vendors and Indian markets, rigorously performing gemstone grading to ensure high standards of quality, authenticity, and competitive pricing.',
      },
      {
        title: 'International Trade & Export Compliance:',
        text: 'Streamline global trade operations by managing cross-border export processes, customs clearance, and logistical workflows for secure international dispatch.',
      },
      {
        title: 'Sales Operations & Global Exhibitions:',
        text: 'Drive international business development and client relations, representing the company at major trade shows in Bangkok and Hong Kong to showcase fine gemstone and jewelry collections, negotiate high-value contracts, and expand market presence.',
      },
    ],
  },
   {
    number: '03',
    role: 'Gemstone Manager',
    company: 'Sachi Jewellery Co.',
    duration: '2017 – 2019',
    location: 'Jaipur, India',
    points: [
      {
        title: '',
        text: ' Managed gemstone inventory and maintained inventory records using Excel.',
      },
      {
        title: '',
        text: 'Supervised gemstone-related operations, including buying and purchasing activities.',
      },
      {
        title: '',
        text: ' Coordinated day-to-day gemstone department work and inventory management.',
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:px-10
        md:py-32
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <FadeIn delay={0} y={35}>
          <h2
            className="
              text-center
              font-black
              uppercase
              whitespace-nowrap
              tracking-[0.02em]
              text-[#0C0C0C]
            "
            style={{
              fontSize: 'clamp(2.7rem, 8.5vw, 125px)',
              lineHeight: 0.84,
            }}
          >
            Work Experience
          </h2>
        </FadeIn>

        {/* HEADING DETAIL */}
        <FadeIn delay={0.08} y={15}>
          <div className="mx-auto mb-20 mt-10 flex max-w-[130px] items-center gap-3 md:mb-28">
            <span className="h-px flex-1 bg-black/15" />
            <span className="h-[4px] w-[4px] rotate-45 bg-black/45" />
            <span className="h-px flex-1 bg-black/15" />
          </div>
        </FadeIn>

        {/* ================= EXPERIENCES ================= */}
        <div className="mx-auto max-w-6xl">
          {EXPERIENCES.map((experience, index) => (
            <FadeIn
              key={experience.number}
              delay={index * 0.08}
              y={35}
            >
              <article
                className={`
                  relative
                  py-14
                  sm:py-16
                  md:py-24
                  ${
                    index === 0
                      ? 'border-y border-black/10'
                      : 'border-b border-black/10'
                  }
                `}
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-10
                    md:grid-cols-[150px_1fr]
                    md:gap-14
                    lg:grid-cols-[190px_1fr]
                    lg:gap-20
                  "
                >
                  {/* ================= NUMBER ================= */}
                  <div>
                    <span
                      className="
                        font-black
                        text-black/[0.13]
                      "
                      style={{
                        fontSize: 'clamp(5rem, 9vw, 125px)',
                        lineHeight: 0.75,
                      }}
                    >
                      {experience.number.split('').map((digit, digitIndex) => (
                        <span
                          key={digitIndex}
                          style={{
                            marginRight: digitIndex === 0 ? '3px' : '0',
                          }}
                        >
                          {digit}
                        </span>
                      ))}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="min-w-0">

                    {/* ROLE */}
                    <h3
                      className="
                        max-w-4xl
                        font-black
                        uppercase
                        text-[#0C0C0C]
                      "
                      style={{
                        fontSize: 'clamp(2rem, 4.2vw, 4.2rem)',
                        lineHeight: 1,
                        letterSpacing: '0.01em',
                        wordSpacing: '0.16em',
                      }}
                    >
                      {experience.role}
                    </h3>

                    {/* COMPANY + DATE */}
                    <div
                      className="
                        mt-7
                        flex
                        flex-col
                        gap-5
                        border-t
                        border-black/10
                        pt-5
                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                      "
                    >
                      {/* COMPANY */}
                      <p
                        className="
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-black/70
                        "
                        style={{
                          fontSize: 'clamp(0.82rem, 1.15vw, 1rem)',
                        }}
                      >
                        {experience.company}
                      </p>

                      {/* DATE + LOCATION */}
                      <div className="sm:text-right">
                        <p
                          className="font-medium text-black/65"
                          style={{
                            fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                          }}
                        >
                          {experience.duration}
                        </p>

                        <p
                          className="mt-1 font-normal text-black/55"
                          style={{
                            fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                          }}
                        >
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    {/* ================= TIMELINE ================= */}
                    <div
                      className="
                        relative
                        mt-11
                        border-l
                        border-black/15
                        pl-7
                        sm:mt-12
                        sm:pl-9
                        md:pl-10
                      "
                    >
                      {experience.points.map((point, i) => (
                        <div
                          key={i}
                          className={`
                            group
                            relative
                            ${
                              i !== experience.points.length - 1
                                ? 'mb-9 sm:mb-11'
                                : ''
                            }
                          `}
                        >
                          {/* TIMELINE DOT */}
                          <span
                            className="
                              absolute
                              -left-[31px]
                              top-[9px]
                              h-[7px]
                              w-[7px]
                              rounded-full
                              border
                              border-black/40
                              bg-white
                              sm:-left-[39px]
                              md:-left-[43px]
                            "
                          />

                          {/* TITLE */}
                          {point.title && (
                            <h4
                              className="
                                mb-2
                                font-extrabold
                                tracking-[0.02em]
                                text-[#0C0C0C]
                              "
                              style={{
                                fontSize: 'clamp(1rem, 1.45vw, 1.2rem)',
                              }}
                            >
                              {point.title}
                            </h4>
                          )}

                          {/* DESCRIPTION */}
                          <p
                            className="
                              max-w-4xl
                              font-normal
                              leading-[1.8]
                              text-black/70
                            "
                            style={{
                              fontSize: 'clamp(0.95rem, 1.3vw, 1.08rem)',
                            }}
                          >
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}