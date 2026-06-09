import React, { useEffect, useRef, useState } from "react";

const TypingText = ({ text, speed = 60, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");

  const [typingDone, setTypingDone] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const textRef = useRef(null);

  /* ───────── DETECT WHEN IN VIEW ───────── */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },

      {
        threshold: 0.4,
      },
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ───────── START TYPING WHEN VISIBLE ───────── */

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index === text.length) {
        clearInterval(interval);

        setTypingDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  return (
    <div ref={textRef} className={`typing-text ${className}`}>
      {displayedText}

      {!typingDone && isVisible && <span className="typing-cursor">|</span>}
    </div>
  );
};

export default TypingText;
