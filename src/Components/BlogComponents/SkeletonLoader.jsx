import React from "react";

const SkeletonLoader = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="news-card news-card--skeleton">
          {/* Image skeleton */}
          <div className="news-card__image-wrap skeleton-box" />

          {/* Body skeleton */}
          <div className="news-card__body">
            <div className="news-card__meta">
              <div className="skeleton-box skeleton-box--meta" />
            </div>
            <div className="skeleton-box skeleton-box--title" />
            <div className="skeleton-box skeleton-box--title skeleton-box--title-short" />
            <div className="skeleton-box skeleton-box--text" />
            <div className="skeleton-box skeleton-box--text" />
            <div className="skeleton-box skeleton-box--text skeleton-box--text-short" />
            <div className="skeleton-box skeleton-box--link" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
