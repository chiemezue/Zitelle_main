import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import HeroStats from "../HeroStats";

const slides = [
  {
    id: 1,
    src: "/zitelle pictures/machine4.jpg",
    alt: "Zitelle Cooking Oil",
    title: (
      <>
        Pure <span className="hl-yellow">Cooking Oil Made</span>
        <br />
        For Homes
        <br />
        And Businesses
      </>
    ),
    sub: "Refined palm kernel oil produced to support households, food businesses, soap manufacturers, and industrial users with reliable quality and consistent supply.",
    cta: "Explore",
    link: "/services/cooking-oil",
  },
  {
    id: 2,
    src: "/zitelle pictures/zitelle trucks 2.jpg",
    alt: "Zitelle Soap Manufacturing",
    title: (
      <>
        Everyday <span className="hl-yellow">Cleanliness</span>
        <br />
        Backed By Quality
        <br />
        Production
      </>
    ),
    sub: "Manufactured from carefully selected oil-based raw materials, Zitelle Soap delivers practical, affordable, and dependable cleaning solutions for everyday use.",
    cta: "Explore",
    link: "/services/soap",
  },
  {
    id: 3,
    src: "/zitelle pictures/people in factory.jpg",
    alt: "TATA & BOBO Plywood",
    title: (
      <>
        Quality <span className="hl-yellow">Plywood</span>
        <br />
        Built For Construction
        <br />
        And Furniture
      </>
    ),
    sub: "Through TATA & BOBO, we supply dependable plywood and board products trusted by furniture makers, contractors, interior designers, and distributors.",
    cta: "Explore",
    link: "/services/plywood",
  },
  {
    id: 4,
    src: "/zitelle pictures/sorroundings3.jpg",
    alt: "Zitelle Packaging Solutions",
    title: (
      <>
        Durable <span className="hl-yellow">Packaging</span>
        <br />
        Designed For
        <br />
        Every Journey
      </>
    ),
    sub: "We manufacture strong plastic jerrycans used for edible oils, liquid products, industrial packaging, and bulk commercial supply across multiple industries.",
    cta: "Explore",
    link: "/services/packaging",
  },
];

/* ── Separate component so React fully unmounts/remounts on key change ── */
const SlideContent = ({ slide }) => {
  return (
    <div className="hero__content-layer">
      <h1 className="hero__title hero__anim-title">{slide.title}</h1>
      <p className="hero__sub hero__anim-sub">{slide.sub}</p>
      <Link to={slide.link} className="hero__btn hero__anim-btn">
        {slide.cta}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <section className="hero">
        {/* PERMANENT OVERLAY */}
        <div className="hero__overlay" style={{ zIndex: 2 }} />

        {/* IMAGES ONLY — crossfade behind overlay */}
        {slides.map((slide, i) => {
          const isActive = i === current;
          return (
            <div
              key={slide.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: isActive
                  ? "opacity 1.2s ease"
                  : "opacity 0.8s ease",
                zIndex: 1,
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: isActive ? "scale(1)" : "scale(1.07)",
                  transition: "transform 9s ease",
                }}
              />
            </div>
          );
        })}

        {/* TEXT — key forces full unmount/remount on every slide change */}
        <SlideContent key={current} slide={slides[current]} />

        {/* ARROWS */}
        <button
          className="hero__arrow hero__arrow--prev"
          onClick={prev}
          aria-label="Previous slide"
          style={{ zIndex: 10 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M11 4L6 9l5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="hero__arrow hero__arrow--next"
          onClick={next}
          aria-label="Next slide"
          style={{ zIndex: 10 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M7 4l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* DOTS */}
        <div className="hero__dots" style={{ zIndex: 10 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="hero-stats hero-stats--desktop">
        <HeroStats />
      </div>
      <div className="hero-stats hero-stats--mobile">
        <HeroStats />
      </div>
    </>
  );
};

export default Hero;
