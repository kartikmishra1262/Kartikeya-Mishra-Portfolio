import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WORK_IMAGES = [
  '/canvawork/canvawork1.jpg',
  '/canvawork/canvawork2.jpg',
  '/canvawork/canvawork3.jpg',
  '/canvawork/canvawork4.jpg',
  '/canvawork/canvawork5.jpg',
  '/canvawork/canvawork6.png',
  '/canvawork/canvawork7.jpg',
  '/canvawork/canvawork8.jpg',
  '/canvawork/canvawork9.jpg',
  '/canvawork/canvawork10.jpg',
];

const WORK_VIDEOS = [
  'rBSIQ9GccMQ',
  'iRfd3wi5t-E',
  'e8hvY-yXPig',
  'P6Ayr624_cA',
  'M3LNXiiHr-w',
  'GCRKsG9W_Uc',
  'FTEuYrXggJw',
  '9crtCw42FC4',
  '7Wf_YB0tRk4',
  '3amSaShhurE',
];

const PAGE_TITLES: Record<string, string> = {
  'graphic-design': 'CANVA WORK',
  'ui-design': 'UI Design',
  'social-media-design': 'Social Media Design',
  'poster-creative-design': 'Poster & Creative Design',
  'branding-visual-design': 'Branding & Visual Design',
  'image-editing-retouching': 'Image Editing & Retouching',
  'layout-typography': 'Layout & Typography',
  'digital-content-design': 'Digital Content Design',
};

type WorkView = 'selection' | 'photo' | 'video';

export default function Canva() {
  const { slug } = useParams();

  const [currentView, setCurrentView] =
    useState<WorkView>('selection');

  const [selectedImageIndex, setSelectedImageIndex] =
    useState<number | null>(null);

  const [selectedVideoIndex, setSelectedVideoIndex] =
    useState<number | null>(null);

  const pageTitle =
    PAGE_TITLES[slug || 'graphic-design'] || 'CANVA WORK';

  /*
   * ---------------------------------------------------------
   * BROWSER HISTORY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;

      if (state?.canvaView === 'photo') {
        setCurrentView('photo');
        setSelectedVideoIndex(null);

        if (state.lightbox === 'image') {
          setSelectedImageIndex(
            typeof state.index === 'number'
              ? state.index
              : 0
          );
        } else {
          setSelectedImageIndex(null);
        }

        return;
      }

      if (state?.canvaView === 'video') {
        setCurrentView('video');
        setSelectedImageIndex(null);

        if (state.lightbox === 'video') {
          setSelectedVideoIndex(
            typeof state.index === 'number'
              ? state.index
              : 0
          );
        } else {
          setSelectedVideoIndex(null);
        }

        return;
      }

      setCurrentView('selection');
      setSelectedImageIndex(null);
      setSelectedVideoIndex(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * LOCK BODY SCROLL WHEN LIGHTBOX IS OPEN
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const lightboxOpen =
      selectedImageIndex !== null ||
      selectedVideoIndex !== null;

    document.body.style.overflow = lightboxOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, selectedVideoIndex]);

  /*
   * ---------------------------------------------------------
   * KEYBOARD CONTROLS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'Escape') {
          closePhotoLightbox();
          return;
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPreviousPhoto();
          return;
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNextPhoto();
          return;
        }
      }

      if (selectedVideoIndex !== null) {
        if (event.key === 'Escape') {
          closeVideoLightbox();
          return;
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPreviousVideo();
          return;
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNextVideo();
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, selectedVideoIndex]);

  /*
   * ---------------------------------------------------------
   * OPEN PHOTO WORK
   * ---------------------------------------------------------
   */

  const openPhotoWork = () => {
    window.history.pushState(
      { canvaView: 'photo' },
      '',
      window.location.href
    );

    setCurrentView('photo');
    setSelectedImageIndex(null);
    setSelectedVideoIndex(null);
  };

  /*
   * ---------------------------------------------------------
   * OPEN VIDEO WORK
   * ---------------------------------------------------------
   */

  const openVideoWork = () => {
    window.history.pushState(
      { canvaView: 'video' },
      '',
      window.location.href
    );

    setCurrentView('video');
    setSelectedImageIndex(null);
    setSelectedVideoIndex(null);
  };

  /*
   * ---------------------------------------------------------
   * PHOTO LIGHTBOX
   * ---------------------------------------------------------
   */

  const openPhotoLightbox = (index: number) => {
    window.history.pushState(
      {
        canvaView: 'photo',
        lightbox: 'image',
        index,
      },
      '',
      window.location.href
    );

    setSelectedImageIndex(index);
  };

  const closePhotoLightbox = () => {
    if (selectedImageIndex !== null) {
      window.history.back();
    }
  };

  const showPreviousPhoto = () => {
    if (selectedImageIndex === null) return;

    const newIndex =
      selectedImageIndex === 0
        ? WORK_IMAGES.length - 1
        : selectedImageIndex - 1;

    setSelectedImageIndex(newIndex);

    window.history.replaceState(
      {
        canvaView: 'photo',
        lightbox: 'image',
        index: newIndex,
      },
      '',
      window.location.href
    );
  };

  const showNextPhoto = () => {
    if (selectedImageIndex === null) return;

    const newIndex =
      selectedImageIndex === WORK_IMAGES.length - 1
        ? 0
        : selectedImageIndex + 1;

    setSelectedImageIndex(newIndex);

    window.history.replaceState(
      {
        canvaView: 'photo',
        lightbox: 'image',
        index: newIndex,
      },
      '',
      window.location.href
    );
  };

  /*
   * ---------------------------------------------------------
   * VIDEO LIGHTBOX
   * ---------------------------------------------------------
   */

  const openVideoLightbox = (index: number) => {
    window.history.pushState(
      {
        canvaView: 'video',
        lightbox: 'video',
        index,
      },
      '',
      window.location.href
    );

    setSelectedVideoIndex(index);
  };

  const closeVideoLightbox = () => {
    if (selectedVideoIndex !== null) {
      window.history.back();
    }
  };

  const showPreviousVideo = () => {
    if (selectedVideoIndex === null) return;

    const newIndex =
      selectedVideoIndex === 0
        ? WORK_VIDEOS.length - 1
        : selectedVideoIndex - 1;

    setSelectedVideoIndex(newIndex);

    window.history.replaceState(
      {
        canvaView: 'video',
        lightbox: 'video',
        index: newIndex,
      },
      '',
      window.location.href
    );
  };

  const showNextVideo = () => {
    if (selectedVideoIndex === null) return;

    const newIndex =
      selectedVideoIndex === WORK_VIDEOS.length - 1
        ? 0
        : selectedVideoIndex + 1;

    setSelectedVideoIndex(newIndex);

    window.history.replaceState(
      {
        canvaView: 'video',
        lightbox: 'video',
        index: newIndex,
      },
      '',
      window.location.href
    );
  };

  /*
   * ---------------------------------------------------------
   * NAVBAR
   * ---------------------------------------------------------
   */

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="/"
          className="text-white text-xl font-semibold tracking-wide"
        >
          KARTIKEYA
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#about"
            className="text-white/70 hover:text-white transition-colors"
          >
            About
          </a>

          <a
            href="/#skills"
            className="text-white/70 hover:text-white transition-colors"
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="text-white/70 hover:text-white transition-colors"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="text-white/70 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );

  /*
   * ---------------------------------------------------------
   * CANVA SELECTION PAGE
   * ---------------------------------------------------------
   */

  if (currentView === 'selection') {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-white">
        <Navbar />

        <main className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="w-full max-w-5xl">

            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.35em] text-white/40 mb-5 uppercase">
                Canva
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                {pageTitle}
              </h1>

              <p className="mt-6 text-white/50 max-w-xl mx-auto">
                Explore my Canva design work through
                photo and video projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* PHOTO WORK */}
              <button
                type="button"
                onClick={openPhotoWork}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={WORK_IMAGES[0]}
                    alt="Photo Work"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs tracking-[0.35em] text-white/60 mb-3">
                      CANVA
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                      PHOTO WORK
                    </h2>

                    <p className="mt-3 text-sm text-white/60">
                      View Photo Designs
                    </p>
                  </div>
                </div>
              </button>

              {/* VIDEO WORK */}
              <button
                type="button"
                onClick={openVideoWork}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#151515]">
                  <img
                    src={`https://i.ytimg.com/vi/${WORK_VIDEOS[0]}/hqdefault.jpg`}
                    alt="Video Work"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 text-black ml-1"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs tracking-[0.35em] text-white/60 mb-3">
                      CANVA
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                      VIDEO WORK
                    </h2>

                    <p className="mt-3 text-sm text-white/60">
                      Watch Video Designs
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * PHOTO WORK PAGE
   * ---------------------------------------------------------
   */

  if (currentView === 'photo') {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-white">
        <Navbar />

        <main className="pt-32 pb-20 px-5 md:px-8">
          <div className="max-w-[1600px] mx-auto">

            <div className="mb-14">
              <p className="text-sm tracking-[0.35em] text-white/40 mb-4">
                CANVA
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                PHOTO WORK
              </h1>

              <p className="mt-5 text-white/50 max-w-2xl">
                Selected Canva photo and graphic design work.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
              {WORK_IMAGES.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openPhotoLightbox(index)}
                  className="group block w-full mb-4 overflow-hidden rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <img
                    src={image}
                    alt={`Canva work ${index + 1}`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* PHOTO LIGHTBOX */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closePhotoLightbox}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closePhotoLightbox();
              }}
              className="absolute top-5 right-5 md:top-8 md:right-8 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousPhoto();
              }}
              className="absolute left-3 md:left-8 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto();
              }}
              className="absolute right-3 md:right-8 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* IMAGE */}
            <div
              className="w-full h-full flex items-center justify-center px-16 md:px-24 py-20"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={WORK_IMAGES[selectedImageIndex]}
                alt={`Canva work ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* COUNTER */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {selectedImageIndex + 1} / {WORK_IMAGES.length}
            </div>
          </div>
        )}
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * VIDEO WORK PAGE
   * ---------------------------------------------------------
   */

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-5 md:px-8">
        <div className="max-w-[1250px] mx-auto">

          <div className="mb-12">
            <p className="text-sm tracking-[0.35em] text-white/40 mb-4">
              CANVA
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              VIDEO WORK
            </h1>

            <p className="mt-5 text-white/50 max-w-2xl">
              Selected Canva video and social media design work.
            </p>
          </div>

          {/* =================================================
              VIDEO THUMBNAIL GRID
              DESKTOP = 5 COLUMNS
              10 VIDEOS = 2 ROWS
              ================================================= */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">

            {WORK_VIDEOS.map((videoId, index) => (
              <button
                key={videoId}
                type="button"
                onClick={() => openVideoLightbox(index)}
                className="group relative w-full overflow-hidden rounded-xl bg-[#151515] border border-white/10"
              >

                {/* 9:16 SHORTS CARD */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">

                  {/* THUMBNAIL */}
                  <img
                    src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                    alt={`Canva video work ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 group-hover:bg-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">

                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 md:w-7 md:h-7 text-black ml-1"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </div>

                  </div>

                  {/* VIDEO NUMBER */}
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] md:text-xs text-white/80">
                    Video {String(index + 1).padStart(2, '0')}
                  </div>

                </div>
              </button>
            ))}

          </div>
        </div>
      </main>

      {/* =====================================================
          VIDEO LIGHTBOX
          ===================================================== */}

      {selectedVideoIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeVideoLightbox}
        >

          {/* CLOSE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeVideoLightbox();
            }}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-[120] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousVideo();
            }}
            className="absolute left-3 sm:left-6 md:left-10 z-[120] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Previous video"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextVideo();
            }}
            className="absolute right-3 sm:right-6 md:right-10 z-[120] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Next video"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* YOUTUBE SHORT */}
          <div
            className="relative w-[min(82vw,480px)] aspect-[9/16] max-h-[88vh] rounded-xl overflow-hidden bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              key={WORK_VIDEOS[selectedVideoIndex]}
              src={`https://www.youtube.com/embed/${WORK_VIDEOS[selectedVideoIndex]}?autoplay=1&rel=0`}
              title={`Canva Video Work ${selectedVideoIndex + 1}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {selectedVideoIndex + 1} / {WORK_VIDEOS.length}
          </div>

        </div>
      )}
    </div>
  );
}