import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const TOTAL_CARDS = PROJECTS.length;

const IMG_RADIUS =
  'rounded-[26px] sm:rounded-[32px] md:rounded-[38px]';

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale =
    1 - (TOTAL_CARDS - 1 - index) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  return (
    <div
      ref={cardRef}
      className="
        sticky
        top-0
        flex
        h-screen
        items-center
        justify-center
      "
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: '#0C0C0C',
        }}
        className="
          group/card
          flex
          h-[88vh]
          w-full
          flex-col
          gap-5
          overflow-hidden
          rounded-[32px]
          border
          border-[#D7E2EA]/55
          p-4

          sm:gap-6
          sm:rounded-[40px]
          sm:p-6

          md:gap-7
          md:rounded-[48px]
          md:p-8
        "
      >
        {/* ================= TOP ROW ================= */}
        <div
          className="
            flex
            flex-shrink-0
            flex-wrap
            items-center
            justify-between
            gap-5
            border-b
            border-[#D7E2EA]/10
            pb-5
            sm:pb-6
          "
        >
          <div className="flex min-w-0 items-center gap-5 sm:gap-7 md:gap-9">

            {/* NUMBER */}
            <span
              className="
                flex-shrink-0
                font-black
                text-[#D7E2EA]/30
              "
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 105px)',
                lineHeight: 0.75,
              }}
            >
              {project.number.split('').map((digit, digitIndex) => (
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

            {/* DETAILS */}
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-[5px] w-[5px] rounded-full bg-[#D7E2EA]/50" />

                {/* CLIENT / PERSONAL */}
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#D7E2EA]/45
                    sm:text-[10px]
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* PROJECT NAME */}
              <h3
                className="
                  font-bold
                  uppercase
                  tracking-[0.015em]
                  text-[#D7E2EA]
                "
                style={{
                  fontSize: 'clamp(1.35rem, 2.8vw, 2.7rem)',
                  lineHeight: 1,
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* EXISTING BUTTON */}
          <LiveProjectButton />
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div
          className="
            flex
            min-h-0
            flex-1
            gap-3
            overflow-hidden
            sm:gap-4
          "
        >
          {/* LEFT COLUMN */}
          <div
            className="
              flex
              min-h-0
              flex-col
              gap-3
              sm:gap-4
            "
            style={{
              width: '39%',
            }}
          >
            {/* IMAGE 1 */}
            <div
              className={`
                group/image
                relative
                min-h-0
                flex-1
                overflow-hidden
                ${IMG_RADIUS}
              `}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover/image:scale-[1.035]
                "
                loading="lazy"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/0
                  transition-colors
                  duration-500
                  group-hover/image:bg-black/[0.04]
                "
              />
            </div>

            {/* IMAGE 2 */}
            <div
              className={`
                group/image
                relative
                min-h-0
                flex-1
                overflow-hidden
                ${IMG_RADIUS}
              `}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover/image:scale-[1.035]
                "
                loading="lazy"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/0
                  transition-colors
                  duration-500
                  group-hover/image:bg-black/[0.04]
                "
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`
              group/image
              relative
              min-h-0
              flex-1
              overflow-hidden
              ${IMG_RADIUS}
            `}
            style={{
              width: '61%',
            }}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover/image:scale-[1.025]
              "
              loading="lazy"
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/0
                transition-colors
                duration-500
                group-hover/image:bg-black/[0.04]
              "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        z-10
        -mt-10
        w-full
        rounded-t-[40px]
        bg-[#0C0C0C]
        px-5
        pb-20
        pt-20

        sm:-mt-12
        sm:rounded-t-[50px]
        sm:px-8
        sm:pb-24
        sm:pt-24

        md:-mt-14
        md:rounded-t-[60px]
        md:px-10
        md:pb-32
        md:pt-28
      "
    >
      {/* ================= HEADING ================= */}
      <FadeIn delay={0} y={30}>
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
            fontSize: 'clamp(3.5rem, 11vw, 155px)',
            lineHeight: 0.84,
          }}
        >
          Project
        </h2>
      </FadeIn>

      {/* SMALL DETAIL */}
      <FadeIn delay={0.08} y={15}>
        <div
          className="
            mx-auto
            mb-4
            mt-9
            flex
            max-w-[130px]
            items-center
            gap-3
            sm:mt-10
          "
        >
          <span className="h-px flex-1 bg-[#D7E2EA]/15" />

          <span className="h-[4px] w-[4px] rotate-45 bg-[#D7E2EA]/45" />

          <span className="h-px flex-1 bg-[#D7E2EA]/15" />
        </div>
      </FadeIn>

      {/* ================= PROJECT CARDS ================= */}
      <div className="relative mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}