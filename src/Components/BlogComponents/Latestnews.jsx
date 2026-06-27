import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "./BlogContext";
import SkeletonLoader from "./SkeletonLoader";

const LatestNews = ({ limit }) => {
  const { blog, loading } = useContext(BlogContext);
  const visiblePosts = limit ? blog.slice(0, limit) : blog;

  return (
    <section className="latest-news">
      <div className="latest-news__container">
        {/* Header */}
        <div className="latest-news__header">
          <p className="latest-news__subtitle">Press</p>
          <h2 className="latest-news__title">Latest News</h2>
        </div>

        {/* Grid */}
        <div className="latest-news__grid">
          {loading ? (
            <SkeletonLoader count={limit || 6} />
          ) : (
            visiblePosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <article className="news-card">
                  <div className="news-card__image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="news-card__image"
                    />
                    <div className="news-card__overlay" />
                  </div>

                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span className="news-card__category">
                        {post.category}
                      </span>
                      <span className="news-card__dot">•</span>
                      <span className="news-card__date">{post.date}</span>
                    </div>

                    <h3 className="news-card__title">{post.title}</h3>

                    <p className="news-card__excerpt">{post.excerpt}</p>

                    <span className="news-card__link">
                      Read More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>

        {/* CTA — only when limit is set (homepage) */}
        {limit && !loading && (
          <div className="latest-news__footer">
            <Link to="/blog" className="latest-news__button">
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
