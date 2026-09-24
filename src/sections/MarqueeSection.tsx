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
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="rounded-2xl object-cover flex-shrink-0"
      style={{
        width: '420px',
        height: '270px',
      }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      setOffset(value);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 overflow-hidden"
      style={{
        background: '#0C0C0C',
      }}
    >
      {/* TOP ROW */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
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

      {/* BOTTOM ROW */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
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