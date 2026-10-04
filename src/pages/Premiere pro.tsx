import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WORK_VIDEOS = [
  {
    id: 'Vy1tyqVGQTU',
    title: 'Video Work 01',
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
  // ALWAYS OPEN PAGE FROM THE TOP
  // --------------------------------------------------
  useLayoutEffect(() => {
    // Prevent browser from restoring the previous
    // scroll position when this page opens.
    window.history.scrollRestoration = 'manual';

    // Immediately move to the top.
    window.scrollTo(0, 0);

    // Extra safeguard against React Router/browser
    // restoring the previous scroll position afterward.
    const timer = window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => {
      window.clearTimeout(timer);

      // Restore normal browser scroll restoration
      // when leaving this page.
      window.history.scrollRestoration = 'auto';
    };
  }, [skill]);

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
    const handlePopState = (_event: PopStateEvent) => {
      // Browser Back while video is open:
      // close the lightbox instead of leaving the page.
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

    // Add one temporary history entry for the lightbox.
    // This makes the browser Back button close the lightbox.
    window.history.pushState(
      {
        ...window.history.state,
        videoLightbox: true,
      },
      '',
      window.location.href
    );
  };

  // --------------------------------------------------
  // CLOSE VIDEO
  // --------------------------------------------------
  const closeVideo = () => {
    if (selectedIndex === null) return;

    /*
      IMPORTANT:

      Do NOT use window.history.back() here.

      The X button should simply close the lightbox.
      Browser Back is handled separately by popstate.
    */

    setSelectedIndex(null);

    // Remove the lightbox flag from the current history state.
    // This prevents the next browser Back from being interpreted
    // as another lightbox close.
    window.history.replaceState(
      {
        ...window.history.state,
        videoLightbox: false,
      },
      '',
      window.location.href
    );
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
          TOP SECTION / HERO
      ================================================== */}

      <section className="relative min-h-screen w-full">

        {/* ==================================================
            NAVBAR
        ================================================== */}

        <nav
          className="
            relative
            z-20
            flex
            justify-between
            px-6
            pt-6
            md:px-10
            md:pt-8
          "
        >

          <a
            href="/#about"
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-[#D7E2EA]
              transition-opacity
              duration-200
              hover:opacity-70
              md:text-lg
              lg:text-[1.4rem]
            "
          >
            About
          </a>

          <a
            href="/#skills"
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-[#D7E2EA]
              transition-opacity
              duration-200
              hover:opacity-70
              md:text-lg
              lg:text-[1.4rem]
            "
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-[#D7E2EA]
              transition-opacity
              duration-200
              hover:opacity-70
              md:text-lg
              lg:text-[1.4rem]
            "
          >
            Projects
          </a>

          <a
            href="/#contact-area"
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-[#D7E2EA]
              transition-opacity
              duration-200
              hover:opacity-70
              md:text-lg
              lg:text-[1.4rem]
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
            min-h-[80vh]
            items-center
            justify-center
            overflow-hidden
            px-6
            md:px-10
          "
        >

          <h1
            className="
              hero-heading
              w-full
              whitespace-nowrap
              text-center
              font-black
              uppercase
              leading-none
              text-[#D7E2EA]
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
          pb-24
          sm:px-8
          md:px-10
          md:pb-32
        "
      >

        <div className="w-full">

          {/* ==================================================
              SECTION TITLE
          ================================================== */}

          <h2
            className="
              mb-8
              font-bold
              uppercase
              text-[#D7E2EA]
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
              gap-[20px]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {WORK_VIDEOS.map((video, index) => (

              <div
                key={video.id}
                onClick={() => openVideo(index)}
                className="
                  group
                  relative
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-white/10
                  bg-[#151515]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  md:rounded-[12px]
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
                    h-full
                    w-full
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
                    transition-all
                    duration-300
                    group-hover:bg-black/45
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
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-2xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                      md:h-16
                      md:w-16
                    "
                  >

                    <span
                      className="
                        ml-1
                        h-0
                        w-0
                        border-b-[9px]
                        border-b-transparent
                        border-l-[14px]
                        border-l-[#0C0C0C]
                        border-t-[9px]
                        border-t-transparent
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
                    bg-gradient-to-t
                    from-black/85
                    to-transparent
                    p-4
                    md:p-5
                  "
                >

                  <p
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-white
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
            onClick={(event) => {
              event.stopPropagation();
              closeVideo();
            }}
            className="
              fixed
              right-5
              top-5
              z-[1002]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white/20
              sm:right-8
              sm:top-8
              sm:h-12
              sm:w-12
            "
            aria-label="Close video preview"
          >

            <span
              className="
                relative
                block
                h-4
                w-4
                sm:h-5
                sm:w-5
              "
            >

              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[2px]
                  w-full
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-45
                  rounded-full
                  bg-white
                "
              />

              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[2px]
                  w-full
                  -translate-x-1/2
                  -translate-y-1/2
                  -rotate-45
                  rounded-full
                  bg-white
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
              onClick={(event) => {
                event.stopPropagation();
                showPreviousVideo();
              }}
              className="
                fixed
                left-3
                top-1/2
                z-[1002]
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                transition-all
                duration-200
                hover:scale-105
                hover:bg-white/20
                sm:left-6
                sm:h-14
                sm:w-14
                md:left-10
                md:h-16
                md:w-16
              "
              aria-label="Previous video"
            >

              <span
                className="
                  block
                  h-3.5
                  w-3.5
                  translate-x-[2px]
                  rotate-45
                  border-b-2
                  border-l-2
                  border-white
                  sm:h-4
                  sm:w-4
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
              aspect-video
              w-full
              max-w-6xl
              overflow-hidden
              rounded-xl
              bg-black
              shadow-2xl
              sm:rounded-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >

            <iframe
              key={WORK_VIDEOS[selectedIndex].id}
              src={`https://www.youtube.com/embed/${WORK_VIDEOS[selectedIndex].id}?rel=0&autoplay=1`}
              title={WORK_VIDEOS[selectedIndex].title}
              className="
                absolute
                inset-0
                h-full
                w-full
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
              onClick={(event) => {
                event.stopPropagation();
                showNextVideo();
              }}
              className="
                fixed
                right-3
                top-1/2
                z-[1002]
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                transition-all
                duration-200
                hover:scale-105
                hover:bg-white/20
                sm:right-6
                sm:h-14
                sm:w-14
                md:right-10
                md:h-16
                md:w-16
              "
              aria-label="Next video"
            >

              <span
                className="
                  block
                  h-3.5
                  w-3.5
                  -translate-x-[2px]
                  rotate-45
                  border-r-2
                  border-t-2
                  border-white
                  sm:h-4
                  sm:w-4
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
              left-1/2
              z-[1002]
              -translate-x-1/2
              text-sm
              uppercase
              tracking-widest
              text-white/80
              sm:bottom-8
              sm:text-base
            "
          >
            {selectedIndex + 1} / {WORK_VIDEOS.length}
          </div>

        </div>

      )}

    </div>
  );
}