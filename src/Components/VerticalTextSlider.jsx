import React from "react";

const VerticalTextSlider = ({
  staticText = "We Produce",
  words = [],
  className = "",
}) => {
  return (
    <div className={`vertical-slider ${className}`}>
      {/* STATIC TEXT */}

      <span className="vertical-slider__static">{staticText}</span>

      {/* SLIDING WORDS */}

      <div className="vertical-slider__wrapper">
        <div className="vertical-slider__track">
          {[...words, ...words].map((word, index) => (
            <span key={index} className="vertical-slider__word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTextSlider;
