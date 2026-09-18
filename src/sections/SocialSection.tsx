import FadeIn from '../components/FadeIn';

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@mkartikeyaa',
      url: 'https://www.instagram.com/mkartikeyaa/',
      icon: '/social/instagram.svg',
    },
    {
      name: 'Facebook',
      handle: 'Kartik Mishra',
      url: 'https://www.facebook.com/kartikmishhra',
      icon: '/social/facebook.svg',
    },
    {
      name: 'LinkedIn',
      handle: 'Kartik Mishra',
      url: 'https://www.linkedin.com/in/kartik-mishra-10b15a3b7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: '/social/linkedin.svg',
    },
  ];

  return (
    <section
      id="contact"
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
        md:py-28
      "
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          opacity-20
        "
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(215,226,234,0.10) 0%, transparent 68%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}

        <FadeIn delay={0} y={20}>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D7E2EA]/50" />

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-[#D7E2EA]/45
              "
              style={{
                fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
              }}
            >
              Connect with me
            </p>

            <span className="h-px w-10 bg-[#D7E2EA]/15 sm:w-16" />
          </div>
        </FadeIn>

        <FadeIn delay={0.05} y={30}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              tracking-[0.02em]
              text-[#D7E2EA]
            "
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 105px)',
              lineHeight: 0.88,
            }}
          >
            Social Links
          </h2>
        </FadeIn>

        {/* ================= SOCIAL CARDS ================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:mt-16
            md:grid-cols-3
            md:gap-5
          "
        >
          {socialLinks.map((social, index) => (
            <FadeIn
              key={social.name}
              delay={0.08 + index * 0.06}
              y={25}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  flex
                  min-h-[230px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#D7E2EA]/10
                  bg-white/[0.025]
                  p-6
                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1
                  hover:border-[#D7E2EA]/25
                  hover:bg-white/[0.045]

                  sm:min-h-[250px]
                  sm:p-7
                "
              >
                {/* SUBTLE CARD GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#D7E2EA]/[0.06]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                      rounded-[16px]
                      bg-white
                      p-[9px]
                      shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:scale-[1.04]

                      sm:h-[62px]
                      sm:w-[62px]
                    "
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* ARROW */}
                  <span
                    className="
                      inline-block
                      text-[27px]
                      font-light
                      leading-none
                      text-[#D7E2EA]/35
                      transition-all
                      duration-500

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#D7E2EA]
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10">

                  {/* SMALL LINE */}
                  <span
                    className="
                      mb-5
                      block
                      h-px
                      w-7
                      bg-[#D7E2EA]/30
                      transition-all
                      duration-500
                      group-hover:w-12
                      group-hover:bg-[#D7E2EA]/60
                    "
                  />

                  <h3
                    className="
                      font-bold
                      uppercase
                      tracking-[0.015em]
                      text-[#D7E2EA]
                    "
                    style={{
                      fontSize: 'clamp(1.5rem, 2.4vw, 2.15rem)',
                      lineHeight: 1,
                    }}
                  >
                    {social.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      font-medium
                      text-[#D7E2EA]/40
                      transition-colors
                      duration-300
                      group-hover:text-[#D7E2EA]/65
                    "
                    style={{
                      fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                    }}
                  >
                    {social.handle}
                  </p>
                </div>

                {/* BOTTOM HOVER LINE */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#D7E2EA]/70
                    transition-all
                    duration-700
                    ease-out
                    group-hover:w-full
                  "
                />
              </a>
            </FadeIn>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <FadeIn delay={0.15} y={15}>
          <div
            className="
              mt-16
              flex
              flex-col
              gap-4
              border-t
              border-[#D7E2EA]/10
              pt-7

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-sm font-medium text-[#D7E2EA]/35">
              © 2026 Kartikeya Mishra
            </p>

            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#D7E2EA]/35" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D7E2EA]/30">
                Graphic + UI Designer
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}