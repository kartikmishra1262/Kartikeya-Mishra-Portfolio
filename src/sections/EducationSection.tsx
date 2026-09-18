import FadeIn from '../components/FadeIn';

export default function EducationSection() {
  return (
    <section
      id="education"
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
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= EDUCATION ================= */}

        <FadeIn delay={0} y={35}>
          <h2
            className="
              hero-heading
              text-center
              font-black
              uppercase
              tracking-[0.02em]
              text-[#D7E2EA]
            "
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 145px)',
              lineHeight: 0.85,
            }}
          >
            Education
          </h2>
        </FadeIn>

        {/* HEADING DETAIL */}
        <FadeIn delay={0.08} y={15}>
          <div className="mx-auto mb-20 mt-10 flex max-w-[130px] items-center gap-3 md:mb-28">
            <span className="h-px flex-1 bg-[#D7E2EA]/15" />

            <span className="h-[4px] w-[4px] rotate-45 bg-[#D7E2EA]/45" />

            <span className="h-px flex-1 bg-[#D7E2EA]/15" />
          </div>
        </FadeIn>

        {/* EDUCATION LIST */}
        <div className="mx-auto max-w-6xl border-t border-[#D7E2EA]/15">

          {/* 01 */}
          <FadeIn delay={0.1} y={30}>
            <div
              className="
                group
                grid
                grid-cols-[85px_1fr]
                gap-6
                border-b
                border-[#D7E2EA]/15
                py-10

                sm:grid-cols-[130px_1fr]
                sm:gap-10
                sm:py-12

                md:grid-cols-[170px_1fr_auto]
                md:items-center
                md:py-16
              "
            >
              {/* NUMBER */}
              <span
                className="
                  font-black
                  text-[#D7E2EA]/15
                  transition-colors
                  duration-500
                  group-hover:text-[#D7E2EA]/30
                "
                style={{
                  fontSize: 'clamp(3.8rem, 8vw, 105px)',
                  lineHeight: 0.8,
                }}
              >
                <span style={{ marginRight: '3px' }}>0</span>
                <span>1</span>
              </span>

              {/* TITLE */}
              <div>
                <h3
                  className="
                    font-bold
                    uppercase
                    tracking-[0.001em]
                    text-[#D7E2EA]
                  "
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
                    lineHeight: 1.05,
                  }}
                >
                  Intermediate
                </h3>
              </div>

              {/* YEAR */}
              <p
                className="
                  col-start-2
                  font-medium
                  tracking-[0.00em]
                  text-[#D7E2EA]/50
                  md:col-start-auto
                  md:text-right
                "
                style={{
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                }}
              >
                2015
              </p>
            </div>
          </FadeIn>

          {/* 02 */}
          <FadeIn delay={0.16} y={30}>
            <div
              className="
                group
                grid
                grid-cols-[85px_1fr]
                gap-6
                border-b
                border-[#D7E2EA]/15
                py-10

                sm:grid-cols-[130px_1fr]
                sm:gap-10
                sm:py-12

                md:grid-cols-[170px_1fr_auto]
                md:items-center
                md:py-16
              "
            >
              {/* NUMBER */}
              <span
                className="
                  font-black
                  text-[#D7E2EA]/15
                  transition-colors
                  duration-500
                  group-hover:text-[#D7E2EA]/30
                "
                style={{
                  fontSize: 'clamp(3.8rem, 8vw, 105px)',
                  lineHeight: 0.8,
                }}
              >
                <span style={{ marginRight: '3px' }}>0</span>
                <span>2</span>
              </span>

              {/* COURSE */}
              <div className="max-w-3xl">
                <h3
                  className="
                    font-bold
                    tracking-[0.001em]
                    text-[#D7E2EA]
                  "
                  style={{
                    fontSize: 'clamp(1.35rem, 2.7vw, 2.5rem)',
                    lineHeight: 1.15,
                  }}
                >
                  Diploma in Graphics, Web Designing and 2D Animation
                </h3>
              </div>

              {/* YEAR / COURSE */}
              <p
                className="
                  col-start-2
                  font-medium
                  tracking-[0.04em]
                  text-[#D7E2EA]/55
                  md:col-start-auto
                  md:max-w-[170px]
                  md:text-right
                "
                style={{
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                }}
              >
                DGWA Plus 2025-26
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ================= CURRENT LEARNING ================= */}

        <div className="mt-28 sm:mt-36 md:mt-44">

          <FadeIn delay={0} y={35}>
            <h2
              className="
                hero-heading
                text-center
                font-black
                uppercase
                tracking-[0.02em]
                text-[#D7E2EA]
              "
              style={{
                fontSize: 'clamp(3rem, 8vw, 115px)',
                lineHeight: 0.86,
              }}
            >
              Current Learning
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} y={15}>
            <div className="mx-auto mb-16 mt-10 flex max-w-[130px] items-center gap-3 md:mb-24">
              <span className="h-px flex-1 bg-[#D7E2EA]/15" />

              <span className="h-[4px] w-[4px] rotate-45 bg-[#D7E2EA]/45" />

              <span className="h-px flex-1 bg-[#D7E2EA]/15" />
            </div>
          </FadeIn>

          {/* CURRENT LEARNING ITEM */}
          <div className="mx-auto max-w-6xl">
            <FadeIn delay={0.1} y={30}>
              <div
                className="
                  grid
                  grid-cols-[85px_1fr]
                  gap-6
                  border-y
                  border-[#D7E2EA]/15
                  py-10

                  sm:grid-cols-[130px_1fr]
                  sm:gap-10
                  sm:py-12

                  md:grid-cols-[170px_1fr_auto]
                  md:items-center
                  md:py-16
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    font-black
                    text-[#D7E2EA]/15
                  "
                  style={{
                    fontSize: 'clamp(3.8rem, 8vw, 105px)',
                    lineHeight: 0.8,
                  }}
                >
                  <span style={{ marginRight: '3px' }}>0</span>
                  <span>1</span>
                </span>

                {/* COURSE INFO */}
                <div>
                  <h3
                    className="
                      font-bold
                      uppercase
                      tracking-[0.01em]
                      text-[#D7E2EA]
                    "
                    style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                      lineHeight: 1,
                    }}
                  >
                    Tutedude
                  </h3>

                  <p
                    className="
                      mt-3
                      font-medium
                      text-[#D7E2EA]/75
                    "
                    style={{
                      fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                    }}
                  >
                    Graphic/UI Design Course
                  </p>
                </div>

                {/* STATUS */}
                <p
                  className="
                    col-start-2
                    max-w-[300px]
                    font-normal
                    leading-relaxed
                    text-[#D7E2EA]/60
                    md:col-start-auto
                    md:text-right
                  "
                  style={{
                    fontSize: 'clamp(0.85rem, 1.15vw, 1rem)',
                  }}
                >
                  Currently pursuing; expected completion: October 2026
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ================= LANGUAGES + PORTFOLIO ================= */}

        <div
          className="
            mx-auto
            mt-24
            grid
            max-w-6xl
            grid-cols-1
            gap-14
            sm:mt-28
            md:mt-36
            md:grid-cols-2
            md:gap-16
          "
        >
          {/* LANGUAGES */}
          <FadeIn delay={0.1} y={25}>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[5px] w-[5px] rounded-full bg-[#D7E2EA]/50" />

                <h3
                  className="
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#D7E2EA]/50
                  "
                  style={{
                    fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                  }}
                >
                  Languages
                </h3>
              </div>

              <div className="border-t border-[#D7E2EA]/15 pt-7">
                <p
                  className="
                    font-semibold
                    tracking-[-0.025em]
                    text-[#D7E2EA]
                  "
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  }}
                >
                  Hindi
                  <span className="mx-3 text-[#D7E2EA]/25">•</span>
                  English
                </p>
              </div>
            </div>
          </FadeIn>

          {/* PORTFOLIO */}
          <FadeIn delay={0.16} y={25}>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[5px] w-[5px] rounded-full bg-[#D7E2EA]/50" />

                <h3
                  className="
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#D7E2EA]/50
                  "
                  style={{
                    fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                  }}
                >
                  Resume
                </h3>
              </div>
              <div className="border-t border-[#D7E2EA]/15 pt-7">
  <a
    href="/Kartikey_Mishra_Graphic_UI_Designer_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <p
      className="
        font-semibold
        tracking-[-0.025em]
        text-[#D7E2EA]
        transition-opacity
        duration-300
        hover:opacity-60
      "
      style={{
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      Kartikeya Mishra Resume
    </p>
  </a>
</div>

              {/* <div className="border-t border-[#D7E2EA]/15 pt-7">
                <p
                  className="
                    font-semibold
                    tracking-[-0.025em]
                    text-[#D7E2EA]
                  "
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  }}
                >
                  Kartikeya Mishra Resume
                </p>
              </div> */}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}