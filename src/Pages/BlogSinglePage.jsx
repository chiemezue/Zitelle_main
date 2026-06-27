import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../Components/BlogComponents/BlogContext";

const BlogSinglePage = () => {
  const { id } = useParams();
  const { blog } = useContext(BlogContext);

  const post = blog.find((p) => p.id === parseInt(id));
  const related = blog.filter((p) => p.id !== parseInt(id)).slice(0, 3);

  if (!post) {
    return (
      <div className="single-not-found">
        <p>Post not found.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="single-page">
      {/* ── Article ── */}
      <div className="single-page__container">
        {/* Back */}
        <Link to="/blog" className="single-page__back">
          ← Back to Blog
        </Link>

        {/* Category badge */}
        <span className="single-page__badge">{post.category}</span>

        {/* Title */}
        <h1 className="single-page__title">{post.title}</h1>

        {/* Meta */}
        <div className="single-page__meta">
          <span className="single-page__meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {post.date}
          </span>
          <span className="single-page__meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Zitelle Communications
          </span>
          <span className="single-page__meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime}
          </span>
        </div>

        {/* Hero image */}
        <div className="single-page__image-wrap">
          <img
            src={post.image}
            alt={post.title}
            className="single-page__image"
          />
        </div>

        {/* Article body */}
        <div className="single-page__body">
          <p className="single-page__lead">{post.excerpt}</p>

          {post.content.map((section, i) => (
            <div key={i}>
              <h2 className="single-page__section-heading">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="single-page__paragraph">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="single-page__divider" />

        {/* Share */}
        <div className="single-page__share">
          <p className="single-page__share-label">Share this article</p>
          <div className="single-page__share-icons">
            {/* Facebook */}
            <a
              href="#"
              className="single-page__share-icon"
              aria-label="Share on Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              className="single-page__share-icon"
              aria-label="Share on X"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4 4l16 16M20 4L4 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="single-page__share-icon"
              aria-label="Share on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Email */}
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}`}
              className="single-page__share-icon"
              aria-label="Share via Email"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Related Articles ── */}
      <section className="single-related">
        <div className="single-related__container">
          <h2 className="single-related__heading">Related Articles</h2>
          <div className="single-related__grid">
            {related.map((item) => (
              <Link
                to={`/blog/${item.id}`}
                key={item.id}
                className="single-related__card"
              >
                <div className="single-related__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="single-related__image"
                  />
                </div>
                <div className="single-related__body">
                  <h3 className="single-related__title">{item.title}</h3>
                  <p className="single-related__date">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSinglePage;
