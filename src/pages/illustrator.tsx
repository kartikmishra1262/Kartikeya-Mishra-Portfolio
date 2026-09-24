import { useEffect, useState } from 'react';

const WORK_IMAGES = [
  '/Illustratorwork/Iwork1.png',
  '/Illustratorwork/Iwork2.jpg',
  '/Illustratorwork/Iwork3.jpg',
  '/Illustratorwork/Iwork4.png',
  '/Illustratorwork/Iwork5.jpg',
  '/Illustratorwork/Iwork6.jpg',
  '/Illustratorwork/Iwork7.jpg',
  '/Illustratorwork/Iwork8.png',
  '/Illustratorwork/Iwork9.jpg',
  '/Illustratorwork/Iwork10.jpg',
  '/Illustratorwork/Iwork11.jpg',
  '/Illustratorwork/Iwork12.jpg',
  '/Illustratorwork/Iwork13.png',
  '/Illustratorwork/Iwork14.jpg',
  '/Illustratorwork/Iwork15.png',
  '/Illustratorwork/Iwork16.png',
  '/Illustratorwork/Iwork17.jpg',
];

export default function Illustrator() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   // ==================================================
  // ALWAYS OPEN PAGE FROM THE TOP
  // ==================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  // ==================================================
  // PREVIOUS IMAGE
  // ==================================================

  const showPreviousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? WORK_IMAGES.length - 1
        : selectedIndex - 1
    );
  };

  // ==================================================
  // NEXT IMAGE
  // ==================================================

  const showNextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === WORK_IMAGES.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  // ==================================================
  // KEYBOARD NAVIGATION
  // ==================================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // CLOSE
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      // PREVIOUS
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === 0
            ? WORK_IMAGES.length - 1
            : current - 1;
        });
      }

      // NEXT
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === WORK_IMAGES.length - 1
            ? 0
            : current + 1;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  // ==================================================
  // PREVENT BACKGROUND SCROLL
  // ==================================================

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#0C0C0C' }}
    >

      {/* ==================================================
          HERO SECTION
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
            BIG HERO TITLE
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
              fontSize: 'clamp(2.5rem, 9vw, 135px)',
              letterSpacing: '-0.035em',
            }}
          >
            ILLUSTRATOR WORK
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
              MASONRY IMAGE GALLERY

              Mobile  = 2 columns
              Desktop = 4 columns

              Original image proportions preserved.
              No cropping.
              No stretching.
          ================================================== */}

          <div
            className="
              columns-2
              gap-3
              md:columns-4
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
                  mb-3
                  cursor-pointer
                  break-inside-avoid
                  overflow-hidden
                  rounded-[10px]
                  bg-[#151515]
                  md:mb-4
                  md:rounded-[12px]
                "
              >

                <img
                  src={image}
                  alt={`Illustrator Work ${index + 1}`}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
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
            aria-label="Close image preview"
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

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
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
            aria-label="Previous image"
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


          {/* ==================================================
              LIGHTBOX IMAGE
          ================================================== */}

          <img
            src={WORK_IMAGES[selectedIndex]}
            alt={`Illustrator Preview ${selectedIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="
              max-h-[88vh]
              max-w-[85vw]
              rounded-2xl
              object-contain
            "
          />


          {/* ==================================================
              NEXT BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
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
            aria-label="Next image"
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


          {/* ==================================================
              IMAGE COUNTER
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
            {selectedIndex + 1} / {WORK_IMAGES.length}
          </div>

        </div>

      )}

    </div>
  );
}