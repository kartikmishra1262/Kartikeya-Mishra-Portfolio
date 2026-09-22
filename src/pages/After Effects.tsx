import { useState } from 'react';
import { useParams } from 'react-router-dom';

const WORK_IMAGES = [
  '/work/work1.jpg',
  '/work/work2.jpg',
  '/work/work3.jpg',
  '/work/work4.jpg',
  '/work/work5.jpg',
  '/work/work6.jpg',
  '/work/work7.jpg',
  '/work/work8.jpg',
];

const PAGE_TITLES: Record<string, string> = {
  'graphic-design': 'Graphic Design',
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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Different heading sizes so long titles stay inside the screen
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

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* TOP SECTION */}
      <section className="min-h-screen w-full relative">

        {/* NAVBAR */}
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          <a
            href="/#about"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>

          <a
            href="/#skills"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>

          <a
            href="/#contact-area"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>

        {/* BIG TITLE */}
        <div className="flex items-center justify-center min-h-[80vh] px-6 md:px-10 overflow-hidden">
          <h1
            className="hero-heading font-black uppercase leading-none whitespace-nowrap text-center text-[#D7E2EA] w-full"
            style={{
              fontSize: getTitleSize(),
              letterSpacing: '-0.035em',
            }}
          >
            {pageTitle}
          </h1>
        </div>

      </section>

      {/* SELECTED WORK */}
      <section className="px-5 sm:px-8 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-[#D7E2EA] uppercase font-bold mb-10 md:mb-14"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            }}
          >
            Selected Work
          </h2>

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {WORK_IMAGES.map((image, index) => (
              <div
                key={image}
                onClick={() => setSelectedImage(image)}
                className="overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${pageTitle} Work ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LARGE IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed top-5 right-5 sm:top-8 sm:right-8 text-white text-4xl sm:text-5xl font-light z-[1000] hover:opacity-60 transition-opacity duration-200"
            aria-label="Close image preview"
          >
            ×
          </button>

          {/* FULL IMAGE */}
          <img
            src={selectedImage}
            alt={`${pageTitle} Preview`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}