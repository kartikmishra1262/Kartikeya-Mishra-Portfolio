import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type WorkVideo = {
  url: string;
  title: string;
  featured?: boolean; // optional: makes a horizontal video 2 columns x 2 rows
};

/* ==================================================
   MOSAIC LAYOUT STYLES
   - 4 cols desktop / 2 tablet / 1 mobile
   - row height = one 16:9 tile, so every horizontal video is exactly 16:9
   - Shorts span 2 rows, featured videos span 2 cols x 2 rows
   - grid-auto-flow: dense fills holes so there are no empty gaps
================================================== */

const MOSAIC_CSS = `
.mosaic-wrap { container-type: inline-size; }
.mosaic {
  --cols: 1;
  --gap: 20px;
  display: grid;
  gap: var(--gap);
  grid-auto-flow: dense;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-auto-rows: calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols) * 0.5625);
}
@media (min-width: 640px)  { .mosaic { --cols: 2; } }
@media (min-width: 1024px) { .mosaic { --cols: 4; } }
.mosaic-short    { grid-row: span 2; }
.mosaic-featured { grid-row: span 2; }
@media (min-width: 640px) { .mosaic-featured { grid-column: span 2; } }
`;

const WORK_VIDEOS: WorkVideo[] = [
  { url: 'https://youtu.be/96FCxR6Ucqw', title: 'Video Work 01' },
  { url: 'https://youtu.be/bG6dcNc02nM', title: 'Video Work 02' },
  { url: 'https://youtu.be/RsfxNpdWE9g', title: 'Video Work 03' },
  { url: 'https://youtu.be/7451L3hiv7k', title: 'Video Work 04' },
  { url: 'https://youtube.com/shorts/W3k3KwNPwUg?feature=share', title: 'Video Work 05' },
  ];

/* ==================================================
   PAGE TITLES
================================================== */

const PAGE_TITLES: Record<string, string> = {
  'graphic-design': 'AFTER EFFECTS WORK',
  'ui-design': 'UI Design',
  'social-media-design': 'Social Media Design',
  'poster-creative-design': 'Poster & Creative Design',
  'branding-visual-design': 'Branding & Visual Design',
  'image-editing-retouching': 'Image Editing & Retouching',
  'layout-typography': 'Layout & Typography',
  'digital-content-design': 'Digital Content Design',
};

/* ==================================================
   YOUTUBE HELPERS
================================================== */

const getVideoId = (url: string): string => {
  // YouTube Shorts
  const shortMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/i);
  if (shortMatch) return shortMatch[1];

  // YouTube watch URL
  const watchMatch = url.match(/[?&]v=([^?&/]+)/i);
  if (watchMatch) return watchMatch[1];

  // youtu.be URL
  const youtuBeMatch = url.match(/youtu\.be\/([^?&/]+)/i);
  return youtuBeMatch?.[1] ?? '';
};

/* ==================================================
   DETECT YOUTUBE SHORT
================================================== */

const isShort = (url: string): boolean => {
  return /youtube\.com\/shorts\//i.test(url);
};

/* ==================================================
   COMPONENT
================================================== */

export default function GraphicDesignPage() {
  const { skill } = useParams<{ skill: string }>();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const pageTitle =
    PAGE_TITLES[skill ?? 'graphic-design'] ?? 'AFTER EFFECTS WORK';

  /* ==================================================
     ALWAYS OPEN PAGE FROM TOP
  ================================================== */

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

  /* ==================================================
     BROWSER BACK BUTTON / HISTORY
  ================================================== */

  useEffect(() => {
    const handlePopState = () => {
      if (selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedIndex]);

  /* ==================================================
     OPEN VIDEO
  ================================================== */

  const openVideo = (index: number) => {
    setSelectedIndex(index);

    window.history.pushState(
      { ...window.history.state, videoLightbox: true },
      '',
      window.location.href
    );
  };

  /* ==================================================
     CLOSE VIDEO
  ================================================== */

  const closeVideo = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(null);

    window.history.replaceState(
      { ...window.history.state, videoLightbox: false },
      '',
      window.location.href
    );
  };

  /* ==================================================
     KEYBOARD NAVIGATION
  ================================================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo();
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % WORK_VIDEOS.length);
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex(
          (selectedIndex - 1 + WORK_VIDEOS.length) % WORK_VIDEOS.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  /* ==================================================
     LOCK BACKGROUND SCROLL
  ================================================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  /* ==================================================
     PREVIOUS / NEXT VIDEO
  ================================================== */

  const showPreviousVideo = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + WORK_VIDEOS.length) % WORK_VIDEOS.length
    );
  };

  const showNextVideo = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % WORK_VIDEOS.length);
  };

  /* ==================================================
     TITLE SIZE
  ================================================== */

  const getTitleSize = () => {
    if (pageTitle === 'Image Editing & Retouching') {
      return 'clamp(1.35rem, 4.6vw, 72px)';
    }

    if (pageTitle === 'Branding & Visual Design') {
      return 'clamp(1.5rem, 5.2vw, 82px)';
    }

    if (pageTitle === 'Social Media Design') {
      return 'clamp(1.7rem, 5.8vw, 92px)';
    }

    if (pageTitle === 'Poster & Creative Design') {
      return 'clamp(1.5rem, 5.2vw, 82px)';
    }

    if (pageTitle === 'Digital Content Design') {
      return 'clamp(1.5rem, 5.2vw, 82px)';
    }

    if (pageTitle === 'Layout & Typography') {
      return 'clamp(1.8rem, 6vw, 95px)';
    }

    return 'clamp(2.5rem, 9vw, 135px)';
  };

  const navLinkClass =
    'text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]';

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0C0C0C' }}>
      {/* ==================================================
          TOP SECTION / HERO
      ================================================== */}

      <section className="relative min-h-screen w-full">
        {/* NAVBAR */}
        <nav className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          <a href="/#about" className={navLinkClass}>
            About
          </a>
          <a href="/#skills" className={navLinkClass}>
            Skills
          </a>
          <a href="/#projects" className={navLinkClass}>
            Projects
          </a>
          <a href="/#contact-area" className={navLinkClass}>
            Contact
          </a>
        </nav>

        {/* BIG TITLE */}
        <div className="flex min-h-[80vh] items-center justify-center overflow-hidden px-6 md:px-10">
          <h1
            className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none text-[#D7E2EA]"
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

      <section className="px-5 pb-24 sm:px-8 md:px-10 md:pb-32">
        <div className="w-full">
          {/* SECTION TITLE */}
          <h2
            className="mb-8 font-bold uppercase text-[#D7E2EA] md:mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
          >
            Selected Work
          </h2>

          {/* ==================================================
              MOSAIC VIDEO GALLERY
          ================================================== */}

          <style>{MOSAIC_CSS}</style>

          <div className="mosaic-wrap">
            <div className="mosaic">
              {WORK_VIDEOS.map((video, index) => {
                const videoId = getVideoId(video.url);
                const short = isShort(video.url);

                const tileClass = short
                  ? 'mosaic-short'
                  : video.featured
                  ? 'mosaic-featured'
                  : '';

                return (
                  <div
                    key={`${videoId}-${index}`}
                    onClick={() => openVideo(index)}
                    className={`group relative cursor-pointer overflow-hidden rounded-[10px] bg-[#151515] md:rounded-[12px] ${tileClass}`}
                  >
                    {/* YOUTUBE THUMBNAIL */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={`${pageTitle} ${video.title}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      onError={(event) => {
                        const target = event.currentTarget;

                        if (!target.src.includes('hqdefault.jpg')) {
                          target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        }
                      }}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/45" />

                    {/* PLAY BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                        <span className="ml-1 h-0 w-0 border-b-[9px] border-l-[14px] border-t-[9px] border-b-transparent border-l-[#0C0C0C] border-t-transparent" />
                      </div>
                    </div>

                    {/* VIDEO TITLE */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4 md:p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-white md:text-sm">
                        {video.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          VIDEO LIGHTBOX
      ================================================== */}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.94)' }}
          onClick={closeVideo}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeVideo();
            }}
            className="fixed right-5 top-5 z-[1002] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/20 sm:right-8 sm:top-8 sm:h-12 sm:w-12"
            aria-label="Close video preview"
          >
            <span className="relative block h-4 w-4 sm:h-5 sm:w-5">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-white" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
            </span>
          </button>

          {/* PREVIOUS BUTTON */}
          {WORK_VIDEOS.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousVideo();
              }}
              className="fixed left-3 top-1/2 z-[1002] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14 md:left-10 md:h-16 md:w-16"
              aria-label="Previous video"
            >
              <span className="block h-3.5 w-3.5 translate-x-[2px] rotate-45 border-b-2 border-l-2 border-white sm:h-4 sm:w-4" />
            </button>
          )}

          {/* VIDEO PLAYER */}
          {(() => {
            const video = WORK_VIDEOS[selectedIndex];
            const videoId = getVideoId(video.url);
            const short = isShort(video.url);

            return (
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: short ? 'min(56.25vh, 82vw)' : 'min(90vw, 1152px)',
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl"
                  style={{
                    aspectRatio: short ? '9 / 16' : '16 / 9',
                  }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <iframe
                    key={videoId}
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&playsinline=1`}
                    title={video.title}
                    className="absolute inset-0 h-full w-full border-0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            );
          })()}

          {/* NEXT BUTTON */}
          {WORK_VIDEOS.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextVideo();
              }}
              className="fixed right-3 top-1/2 z-[1002] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14 md:right-10 md:h-16 md:w-16"
              aria-label="Next video"
            >
              <span className="block h-3.5 w-3.5 -translate-x-[2px] rotate-45 border-r-2 border-t-2 border-white sm:h-4 sm:w-4" />
            </button>
          )}

          {/* VIDEO COUNTER */}
          <div className="fixed bottom-5 left-1/2 z-[1002] -translate-x-1/2 text-sm uppercase tracking-widest text-white/80 sm:bottom-8 sm:text-base">
            {String(selectedIndex + 1).padStart(2, '0')}
            {' / '}
            {String(WORK_VIDEOS.length).padStart(2, '0')}
          </div>
        </div>
      )}
    </div>
  );
}
