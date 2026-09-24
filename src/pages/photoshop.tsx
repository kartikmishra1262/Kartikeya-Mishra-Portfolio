import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WORK_IMAGES = [
  '/photoshopwork/work1.jpg',
  '/photoshopwork/work2.jpg',
  '/photoshopwork/work3.jpg',
  '/photoshopwork/work4.jpg',
  '/photoshopwork/work5.jpg',
  '/photoshopwork/work6.jpg',
  '/photoshopwork/work7.jpg',
  '/photoshopwork/work8.jpg',
  '/photoshopwork/work9.jpg',
  '/photoshopwork/work10.jpg',
  '/photoshopwork/work11.jpg',
  '/photoshopwork/work12.jpg',
  '/photoshopwork/work13.jpg',
  '/photoshopwork/work14.jpg',
  '/photoshopwork/work15.jpg',
  '/photoshopwork/work16.jpg',
  '/photoshopwork/work17.jpg',
  '/photoshopwork/work18.jpg',
  '/photoshopwork/work19.jpg',
  '/photoshopwork/work20.jpg',
  '/photoshopwork/work21.jpg',
  '/photoshopwork/work22.jpg',
  '/photoshopwork/work23.jpg',
  '/photoshopwork/work24.jpg',
  '/photoshopwork/work25.jpg',
  '/photoshopwork/work26.jpg',
  '/photoshopwork/work27.jpg',
  '/photoshopwork/work28.jpg',
  '/photoshopwork/work29.jpg',
  '/photoshopwork/work30.jpg',
  '/photoshopwork/work31.jpg',
  '/photoshopwork/work32.jpg',
  '/photoshopwork/work33.jpg',
  '/photoshopwork/work34.jpg',
  '/photoshopwork/work35.jpg',
  '/photoshopwork/work36.jpg',
];

const PAGE_TITLES: Record<string, string> = {
  'graphic-design': 'PHOTOSHOP WORK',
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

  // --------------------------------------------------
  // SELECTED IMAGE
  // --------------------------------------------------
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
  // KEYBOARD NAVIGATION
  // --------------------------------------------------
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // CLOSE
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      // NEXT
      if (event.key === 'ArrowRight') {
        setSelectedIndex(
          (selectedIndex + 1) % WORK_IMAGES.length
        );
      }

      // PREVIOUS
      if (event.key === 'ArrowLeft') {
        setSelectedIndex(
          (selectedIndex - 1 + WORK_IMAGES.length) %
            WORK_IMAGES.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  // --------------------------------------------------
  // PREVIOUS IMAGE
  // --------------------------------------------------
  const showPreviousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + WORK_IMAGES.length) %
        WORK_IMAGES.length
    );
  };

  // --------------------------------------------------
  // NEXT IMAGE
  // --------------------------------------------------
  const showNextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % WORK_IMAGES.length
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
              MASONRY IMAGE GALLERY

              - 4 columns desktop
              - 2 columns mobile
              - Original image proportions preserved
              - No cropping
              - No stretching
              - 16px gap
          ================================================== */}
          <div
            className="
              columns-2
              md:columns-4
              gap-3
              md:gap-4
            "
          >

            {WORK_IMAGES.map((image, index) => (

              <div
                key={image}
                onClick={() => setSelectedIndex(index)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[10px]
                  md:rounded-[12px]
                  cursor-pointer
                  mb-3
                  md:mb-4
                  break-inside-avoid
                  bg-[#151515]
                "
              >

                <img
                  src={image}
                  alt={`${pageTitle} Work ${index + 1}`}
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                  loading="lazy"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          IMAGE LIGHTBOX
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
          onClick={() => setSelectedIndex(null)}
        >

          {/* ==================================================
              CLOSE BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
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
            aria-label="Close image preview"
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

              {/* X - Line 1 */}
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

              {/* X - Line 2 */}
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
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
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
            aria-label="Previous image"
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


          {/* ==================================================
              LIGHTBOX IMAGE
          ================================================== */}
          <img
            src={WORK_IMAGES[selectedIndex]}
            alt={`${pageTitle} Preview ${selectedIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-[85vw]
              max-h-[88vh]
              object-contain
              rounded-2xl
            "
          />


          {/* ==================================================
              NEXT BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
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
            aria-label="Next image"
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


          {/* ==================================================
              IMAGE COUNTER
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
            {selectedIndex + 1} / {WORK_IMAGES.length}
          </div>

        </div>

      )}

    </div>
  );
}