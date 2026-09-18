import { useState } from "react";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className }: ContactButtonProps) {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setShowNumber((prev) => !prev)}
        className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-opacity duration-200 hover:opacity-90"
        style={{
          background:
            "linear-gradient(145deg, #0F1113 0%, #181B1E 45%, #24282C 52%, #171A1D 70%, #0E1012 100%)",

          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.12), inset 0 -1px 2px rgba(0, 0, 0, 0.7)",

          outline: "1px solid rgba(190, 198, 205, 0.35)",
          outlineOffset: "-2px",
        }}
        aria-expanded={showNumber}
      >
        Contact Me
      </button>

      {showNumber && (
        <div
          className="absolute bottom-full right-0 mb-4 px-5 py-3 rounded-2xl whitespace-nowrap z-50"
          style={{
            background: "#181818",
            border: "1px solid rgba(215, 226, 234, 0.25)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
          }}
        >
          <a
            href="https://wa.me/917233921262?s=t"
            className="text-[#D7E2EA] text-sm sm:text-base font-medium hover:opacity-70 transition-opacity duration-200"
            aria-label="Call 7233921262"
          >
            7233921262
          </a>
        </div>
      )}
    </div>
  );
}
