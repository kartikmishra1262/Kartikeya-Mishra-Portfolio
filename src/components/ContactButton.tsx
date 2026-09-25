import { useState } from "react";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className }: ContactButtonProps) {
  const [showOptions, setShowOptions] = useState(false);

  const phoneNumber = "7233921262";

  const whatsappMessage =
    "Hi Kartikeya, I found your portfolio and would like to discuss a design project with you.";

  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      {/* Contact Me Button */}
      <button
        type="button"
        onClick={() => setShowOptions((prev) => !prev)}
        className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-opacity duration-200 hover:opacity-90"
        style={{
          background:
            "linear-gradient(145deg, #0F1113 0%, #181B1E 45%, #24282C 52%, #171A1D 70%, #0E1012 100%)",

          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.12), inset 0 -1px 2px rgba(0, 0, 0, 0.7)",

          outline: "1px solid rgba(190, 198, 205, 0.35)",
          outlineOffset: "-2px",
        }}
        aria-expanded={showOptions}
      >
        Contact Me
      </button>

      {/* Contact Options */}
      {showOptions && (
        <div
          className="absolute bottom-full right-0 mb-4 p-2 rounded-2xl z-50 min-w-[190px]"
          style={{
            background:
              "linear-gradient(145deg, #111315 0%, #1B1E21 50%, #111315 100%)",

            border: "1px solid rgba(215, 226, 234, 0.25)",

            boxShadow:
              "0 12px 35px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Call Option */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#D7E2EA] text-sm sm:text-base font-medium transition-all duration-200 hover:bg-white/10"
            aria-label="Call Kartikeya"
          >
            <span className="text-lg">📞</span>
            <span>Call Me</span>
          </a>

          {/* WhatsApp Option */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#D7E2EA] text-sm sm:text-base font-medium transition-all duration-200 hover:bg-white/10"
            aria-label="Contact me on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 shrink-0 text-[#25D366]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.49 1.33 5.01L2 22l5.13-1.34A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.3c-1.55 0-3.07-.42-4.4-1.21l-.31-.18-3.05.8.81-2.97-.2-.32A8.28 8.28 0 1 1 12.04 20.3Zm4.55-6.21c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.34 3.83.61.26 1.09.42 1.46.54.61.19 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z" />
            </svg>

            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
}
