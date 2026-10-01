import { useEffect, useRef, useState } from 'react';

const ROW_1_SOURCE = [
  '/photoshopwork/work1.jpg',
  '/photoshopwork/work19.jpg',
  '/photoshopwork/work6.jpg',
  '/photoshopwork/work25.jpg',
];

const ROW_2_SOURCE = [
  '/photoshopwork/work3.jpg',
  '/photoshopwork/work9.jpg',
  '/photoshopwork/work16.jpg',
  '/photoshopwork/work17.jpg',
];

// Repeat images so the moving rows stay filled
const ROW_1 = [
  ...ROW_1_SOURCE,
  ...ROW_1_SOURCE,
  ...ROW_1_SOURCE,
];

const ROW_2 = [
  ...ROW_2_SOURCE,
  ...ROW_2_SOURCE,
  ...ROW_2_SOURCE,
];

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block rounded-2xl"
        style={{
          height: 'clamp(160px, 22vw, 270px)',
          width: 'auto',
          maxWidth: 'none',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) {
          ticking = false;
          return;
        }

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        const viewportWidth = window.innerWidth;

        // Responsive marquee movement speed
        let speed: number;

        if (viewportWidth < 640) {
          // Mobile
          speed = 0.18;
        } else if (viewportWidth < 1024) {
          // Tablet
          speed = 0.24;
        } else {
          // Desktop
          speed = 0.30;
        }

        const value =
          (window.scrollY - sectionTop + window.innerHeight) * speed;

        setOffset(value);

        ticking = false;
      });
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Responsive starting offset
  const initialOffset = 'clamp(80px, 15vw, 200px)';

  return (
    <section
      ref={sectionRef}
      className="w-full pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 overflow-hidden"
      style={{
        background: '#0C0C0C',
      }}
    >
      {/* =========================
          TOP ROW
      ========================== */}
      <div
        className="flex gap-3 items-start"
        style={{
          transform: `translateX(calc(${offset}px - ${initialOffset}))`,
          willChange: 'transform',
        }}
      >
        {ROW_1.map((src, i) => (
          <Tile
            key={`row1-${i}`}
            src={src}
            alt={`Work ${((i % 4) + 1)}`}
          />
        ))}
      </div>

      {/* =========================
          BOTTOM ROW
      ========================== */}
      <div
        className="flex gap-3 items-start"
        style={{
          transform: `translateX(calc(-${offset}px + ${initialOffset}))`,
          willChange: 'transform',
        }}
      >
        {ROW_2.map((src, i) => (
          <Tile
            key={`row2-${i}`}
            src={src}
            alt={`Work ${((i % 4) + 5)}`}
          />
        ))}
      </div>
    </section>
  );
}