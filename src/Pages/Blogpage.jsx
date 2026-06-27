import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../Components/BlogComponents/BlogContext";
import SkeletonLoader from "../Components/BlogComponents/SkeletonLoader";

const BlogPage = () => {
  const { blog, loading } = useContext(BlogContext);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero__overlay" />
        <div className="blog-hero__content">
          <p className="blog-hero__eyebrow">Press & Media</p>
          <h1 className="blog-hero__heading">News & Updates</h1>
          <p className="blog-hero__sub">
            Stay informed on the latest developments, milestones, and stories
            from across the Zitelle Group.
          </p>
        </div>
      </section>

      {/* ── All Posts ── */}
      <section className="blog-section">
        <div className="blog-section__container">
          <div className="blog-section__header">
            <p className="blog-section__eyebrow">All Articles</p>
            <h2 className="blog-section__title">All Posts</h2>
          </div>

          <div className="blog-section__grid">
            {loading ? (
              <SkeletonLoader count={6} />
            ) : (
              blog.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <article className="news-card">
                    {/* Image */}
                    <div className="news-card__image-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="news-card__image"
                      />
                      <div className="news-card__overlay" />
                    </div>

                    {/* Body */}
                    <div className="news-card__body">
                      <div className="news-card__meta">
                        <span className="news-card__category">
                          {post.category}
                        </span>
                        <span className="news-card__dot">•</span>
                        <span className="news-card__date">{post.date}</span>
                        <span className="news-card__dot">•</span>
                        <span className="news-card__date">{post.readTime}</span>
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
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
