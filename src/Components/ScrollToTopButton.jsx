import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-[999]
        w-12 h-12 rounded-full
        bg-[var(--color-primary)] text-[var(--color-dark)]
        flex items-center justify-center
        shadow-lg cursor-pointer border-none
        transition-all duration-300 ease-in-out
        hover:bg-[var(--color-green)] hover:text-white
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 14V4M4 9l5-5 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
