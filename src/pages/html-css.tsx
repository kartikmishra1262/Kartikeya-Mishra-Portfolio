import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const PAGE_TITLES: Record<string, string> = {
  'html-css': 'HTML & CSS',
};

const HTML_PROJECTS = [
  {
    title: 'MONO',
    description: 'Creative Design Agency — HTML & CSS',
    url: '/Projects/Mono/mono.html',
  },
  {
    title: 'VERVE',
    description: 'Creative Website — HTML & CSS',
    url: '/Projects/verve/verve.html',
  },
  {
    title: 'AURA',
    description: 'Creative Website — HTML & CSS',
    url: '/Projects/aura/aura.html',
  },
  {
    title: 'NOIRÉ',
    description: 'Luxury Creative Website — HTML & CSS',
    url: '/Projects/noire/noire.html',
  },
];

export default function HtmlCssPage() {
  const { skill } = useParams();

  const pageTitle =
    PAGE_TITLES[skill || 'html-css'] || 'HTML & CSS';

  // ==================================================
  // ALWAYS START FROM HERO SECTION
  // ==================================================
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      window.history.scrollRestoration = 'auto';
    };
  }, [skill]);

  // ==================================================
  // TITLE SIZE
  // ==================================================
  const getTitleSize = () => {
    return 'clamp(3rem, 10vw, 135px)';
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#0C0C0C' }}
    >

      {/* ==================================================
          TOP SECTION
      ================================================== */}
      <section className="min-h-screen w-full relative">

        {/* ==================================================
            NAVBAR
        ================================================== */}
        <nav
          className="
            flex
            justify-between
            px-6
            md:px-10
            pt-6
            md:pt-8
            relative
            z-20
          "
        >
          <a
            href="/#about"
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity
              duration-200
            "
          >
            About
          </a>

          <a
            href="/#skills"
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity
              duration-200
            "
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity
              duration-200
            "
          >
            Projects
          </a>

          <a
            href="/#contact-area"
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity
              duration-200
            "
          >
            Contact
          </a>
        </nav>

        {/* ==================================================
            BIG TITLE
        ================================================== */}
        <div
          className="
            flex
            items-center
            justify-center
            min-h-[80vh]
            px-6
            md:px-10
            overflow-hidden
          "
        >
          <h1
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              whitespace-nowrap
              text-center
              text-[#D7E2EA]
              w-full
            "
            style={{
              fontSize: getTitleSize(),
              letterSpacing: '-0.035em',
            }}
          >
            {pageTitle}
          </h1>
        </div>

      </section>

      {/* ==================================================
          SELECTED WORK
      ================================================== */}
      <section
        className="
          px-5
          sm:px-8
          md:px-10
          pb-24
          md:pb-32
        "
      >

        <div className="w-full">

          {/* ==================================================
              SECTION TITLE
          ================================================== */}
          <h2
            className="
              text-[#D7E2EA]
              uppercase
              font-bold
              mb-8
              md:mb-10
            "
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            }}
          >
            Selected Work
          </h2>

          {/* ==================================================
              PROJECT GRID
          ================================================== */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
              md:gap-8
            "
          >

            {HTML_PROJECTS.map((project) => (

              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  w-full
                  rounded-2xl
                  overflow-hidden
                  bg-[#151515]
                  border
                  border-white/10
                  hover:border-white/25
                  transition-all
                  duration-300
                  cursor-pointer
                "
                aria-label={`Open ${project.title} project`}
              >

                {/* ==================================================
                    LIVE WEBSITE PREVIEW
                ================================================== */}
                <div
                  className="
                    relative
                    w-full
                    aspect-[16/10]
                    overflow-hidden
                    bg-[#ECEDEF]
                  "
                >

                  {/* ==================================================
                      BROWSER TOP BAR
                  ================================================== */}
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-8
                      md:h-10
                      z-30
                      bg-[#1A1A1A]
                      flex
                      items-center
                      px-3
                      md:px-4
                      gap-1.5
                      md:gap-2
                    "
                  >

                    {/* Browser dots */}
                    <span
                      className="
                        w-2
                        h-2
                        md:w-2.5
                        md:h-2.5
                        rounded-full
                        bg-[#555]
                      "
                    />

                    <span
                      className="
                        w-2
                        h-2
                        md:w-2.5
                        md:h-2.5
                        rounded-full
                        bg-[#555]
                      "
                    />

                    <span
                      className="
                        w-2
                        h-2
                        md:w-2.5
                        md:h-2.5
                        rounded-full
                        bg-[#555]
                      "
                    />

                    {/* Fake URL */}
                    <div
                      className="
                        ml-3
                        md:ml-5
                        h-5
                        md:h-6
                        flex-1
                        rounded-md
                        bg-[#2A2A2A]
                        flex
                        items-center
                        px-3
                      "
                    >
                      <span
                        className="
                          text-[8px]
                          md:text-[10px]
                          text-white/40
                          truncate
                        "
                      >
                        {project.url}
                      </span>
                    </div>

                  </div>

                  {/* ==================================================
                      ACTUAL HTML WEBSITE
                  ================================================== */}
                  <iframe
                    src={project.url}
                    title={`${project.title} Website Preview`}
                    className="
                      absolute
                      left-0
                      top-8
                      md:top-10
                      w-full
                      h-[calc(100%_-_2rem)]
                      md:h-[calc(100%_-_2.5rem)]
                      border-0
                      pointer-events-none
                      bg-white
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.015]
                    "
                    loading="lazy"
                  />

                  {/* ==================================================
                      HOVER OVERLAY
                  ================================================== */}
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/35
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        opacity-0
                        group-hover:opacity-100
                        translate-y-3
                        group-hover:translate-y-0
                        transition-all
                        duration-300
                        bg-white
                        text-black
                        px-5
                        md:px-6
                        py-2.5
                        md:py-3
                        rounded-full
                        font-semibold
                        uppercase
                        tracking-wider
                        text-xs
                        md:text-sm
                        shadow-2xl
                      "
                    >
                      Open Project →
                    </div>

                  </div>

                </div>

                {/* ==================================================
                    PROJECT INFORMATION
                ================================================== */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                    px-5
                    py-5
                    md:px-7
                    md:py-6
                  "
                >

                  <div>

                    <h3
                      className="
                        text-[#D7E2EA]
                        text-2xl
                        md:text-3xl
                        font-bold
                        uppercase
                        tracking-tight
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        text-white/50
                        mt-1
                        text-sm
                        md:text-base
                      "
                    >
                      {project.description}
                    </p>

                  </div>

                  <span
                    className="
                      text-[#D7E2EA]
                      text-sm
                      md:text-base
                      uppercase
                      tracking-wider
                      font-medium
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    View Website →
                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}