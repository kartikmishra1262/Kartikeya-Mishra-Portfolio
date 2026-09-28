import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WORK_VIDEOS = [
  {
    id: 'N_IdzSZe-6k',
    title: 'Video Work 01',
    aspectRatio: '16 / 9',
  },
  {
    id: '4FTD0CP7i1E',
    title: 'Video Work 02',
    aspectRatio: '16 / 9',
  },
  {
    id: '1w7LyjWL1X8',
    title: 'Video Work 03',
    aspectRatio: '16 / 9',
  },
  {
    id: 'h9GHKaQOEWc',
    title: 'Video Work 04',
    aspectRatio: '16 / 9',
  },
  {
    id: 'mbQAGClnpXI',
    title: 'Video Work 05',
    aspectRatio: '16 / 9',
  },
];

const PAGE_TITLES: Record<string, string> = {
  'graphic-design': 'PREMIERE PRO WORK',
  'ui-design': 'UI Design',
  'social-media-design': 'Social Media Design',
  'poster-creative-design': 'Poster & Creative Design',
  'branding-visual-design': 'Branding & Visual Design',
  'image-editing-retouching': 'Image Editing & Retouching',
  'layout-typography': 'Layout & Typography',
  'digital-content-design': 'Digital Content Design',
};

export default function GraphicDesignPage() {
  const { skill } = useParams();

  const pageTitle =
    PAGE_TITLES[skill || 'graphic-design'] || 'Graphic Design';

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // --------------------------------------------------
  // TITLE SIZE
  // --------------------------------------------------
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

  // --------------------------------------------------
  // BROWSER BACK BUTTON / HISTORY
  // --------------------------------------------------
  useEffect(() => {
    const handlePopState = () => {
      // If a video is currently open, browser Back closes
      // the lightbox instead of changing the page.
      if (selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedIndex]);

  // --------------------------------------------------
  // OPEN VIDEO
  // --------------------------------------------------
  const openVideo = (index: number) => {
    setSelectedIndex(index);

    // Add a temporary history entry for the lightbox.
    // This allows the browser Back button to close the
    // lightbox without leaving the current page.
    window.history.pushState(
      { videoLightbox: true },
      '',
      window.location.href
    );
  };

  // --------------------------------------------------
  // CLOSE VIDEO
  // --------------------------------------------------
  const closeVideo = () => {
    if (selectedIndex === null) return;

    // If the current history entry belongs to the lightbox,
    // go back one step. The popstate listener will close it.
    if (window.history.state?.videoLightbox) {
      window.history.back();
    } else {
      setSelectedIndex(null);
    }
  };

  // --------------------------------------------------
  // KEYBOARD NAVIGATION
  // --------------------------------------------------
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // CLOSE
      if (event.key === 'Escape') {
        closeVideo();
      }

      // NEXT
      if (event.key === 'ArrowRight') {
        setSelectedIndex(
          (selectedIndex + 1) % WORK_VIDEOS.length
        );
      }

      // PREVIOUS
      if (event.key === 'ArrowLeft') {
        setSelectedIndex(
          (selectedIndex - 1 + WORK_VIDEOS.length) %
            WORK_VIDEOS.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  // --------------------------------------------------
  // PREVIOUS VIDEO
  // --------------------------------------------------
  const showPreviousVideo = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + WORK_VIDEOS.length) %
        WORK_VIDEOS.length
    );
  };

  // --------------------------------------------------
  // NEXT VIDEO
  // --------------------------------------------------
  const showNextVideo = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % WORK_VIDEOS.length
    );
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
              VIDEO GALLERY
          ================================================== */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-[20px]
            "
          >
            {WORK_VIDEOS.map((video, index) => (
              <div
                key={video.id}
                onClick={() => openVideo(index)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[10px]
                  md:rounded-[12px]
                  cursor-pointer
                  bg-[#151515]
                  border
                  border-white/10
                  w-full
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  aspectRatio: video.aspectRatio,
                }}
              >
                {/* ==================================================
                    YOUTUBE THUMBNAIL
                ================================================== */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${pageTitle} ${video.title}`}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                  loading="lazy"
                />

                {/* ==================================================
                    DARK OVERLAY
                ================================================== */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/25
                    group-hover:bg-black/45
                    transition-all
                    duration-300
                  "
                />

                {/* ==================================================
                    PLAY BUTTON
                ================================================== */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      md:w-16
                      md:h-16
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-2xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <span
                      className="
                        ml-1
                        w-0
                        h-0
                        border-t-[9px]
                        border-t-transparent
                        border-b-[9px]
                        border-b-transparent
                        border-l-[14px]
                        border-l-[#0C0C0C]
                      "
                    />
                  </div>
                </div>

                {/* ==================================================
                    VIDEO TITLE
                ================================================== */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4
                    md:p-5
                    bg-gradient-to-t
                    from-black/85
                    to-transparent
                  "
                >
                  <p
                    className="
                      text-white
                      uppercase
                      tracking-wider
                      font-medium
                      text-xs
                      md:text-sm
                    "
                  >
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          VIDEO LIGHTBOX
      ================================================== */}
      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            p-4
            sm:p-8
          "
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.94)',
          }}
          onClick={closeVideo}
        >

          {/* ==================================================
              CLOSE BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeVideo();
            }}
            className="
              fixed
              top-5
              right-5
              sm:top-8
              sm:right-8
              w-10
              h-10
              sm:w-12
              sm:h-12
              rounded-full
              flex
              items-center
              justify-center
              z-[1002]
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              hover:bg-white/20
              hover:scale-105
              transition-all
              duration-200
            "
            aria-label="Close video preview"
          >
            <span
              className="
                relative
                w-4
                h-4
                sm:w-5
                sm:h-5
                block
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-full
                  h-[2px]
                  bg-white
                  rounded-full
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-45
                "
              />

              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-full
                  h-[2px]
                  bg-white
                  rounded-full
                  -translate-x-1/2
                  -translate-y-1/2
                  -rotate-45
                "
              />
            </span>
          </button>

          {/* ==================================================
              PREVIOUS BUTTON
          ================================================== */}
          {WORK_VIDEOS.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPreviousVideo();
              }}
              className="
                fixed
                left-3
                sm:left-6
                md:left-10
                top-1/2
                -translate-y-1/2
                z-[1002]
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-white/20
                hover:scale-105
                transition-all
                duration-200
              "
              aria-label="Previous video"
            >
              <span
                className="
                  block
                  w-3.5
                  h-3.5
                  sm:w-4
                  sm:h-4
                  border-l-2
                  border-b-2
                  border-white
                  rotate-45
                  translate-x-[2px]
                "
              />
            </button>
          )}

          {/* ==================================================
              VIDEO PLAYER
          ================================================== */}
          <div
            className="
              relative
              w-full
              max-w-6xl
              aspect-video
              rounded-xl
              sm:rounded-2xl
              overflow-hidden
              bg-black
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${WORK_VIDEOS[selectedIndex].id}?rel=0&autoplay=1`}
              title={WORK_VIDEOS[selectedIndex].title}
              className="
                absolute
                inset-0
                w-full
                h-full
              "
              frameBorder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share
              "
              allowFullScreen
            />
          </div>

          {/* ==================================================
              NEXT BUTTON
          ================================================== */}
          {WORK_VIDEOS.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNextVideo();
              }}
              className="
                fixed
                right-3
                sm:right-6
                md:right-10
                top-1/2
                -translate-y-1/2
                z-[1002]
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-white/20
                hover:scale-105
                transition-all
                duration-200
              "
              aria-label="Next video"
            >
              <span
                className="
                  block
                  w-3.5
                  h-3.5
                  sm:w-4
                  sm:h-4
                  border-r-2
                  border-t-2
                  border-white
                  rotate-45
                  -translate-x-[2px]
                "
              />
            </button>
          )}

          {/* ==================================================
              VIDEO COUNTER
          ================================================== */}
          <div
            className="
              fixed
              bottom-5
              sm:bottom-8
              left-1/2
              -translate-x-1/2
              z-[1002]
              text-white/80
              text-sm
              sm:text-base
              tracking-widest
              uppercase
            "
          >
            {selectedIndex + 1} / {WORK_VIDEOS.length}
          </div>
        </div>
      )}
    </div>
  );
}