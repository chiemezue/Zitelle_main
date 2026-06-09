import React from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../Components/AboutComponents/PageHero";

const businesses = [
  {
    title: "Soap",
    categories: "Household",
    description:
      "Zitelle Soap is a versatile multipurpose soap made for everyday cleaning needs. Strong enough for laundry and practical washing, yet suitable for personal bathing use, it is designed to serve households, businesses, and everyday users who need one dependable soap for different purposes. ",
    image: "/zitelle pictures/soap3.jpg",
    path: "/services/soap",
  },
  {
    title: "Plywood",
    categories: "Construction",
    description:
      "TATA & BOBO is Zitelle Group’s plywood business, supplying  a wide range of plywood and board products for furniture making, interior finishing, and construction – focused on providing customers quality, dependable stock, smooth order execution and competitive pricing.",
    image: "/zitelle pictures/plywood5.jpg",
    path: "/services/plywood",
  },
  {
    title: "Packaging",
    categories: "Commercial",
    description:
      "Zitelle manufactures durable plastic jerrycans from scratch for both our own oil packaging and external commercial supply. By producing our jerrycans in-house, we maintain greater control over quality, consistency, strength and availability. ",
    image: "/zitelle pictures/18litres.jpg",
    path: "/services/packaging",
  },
  {
    title: "Refined Edible Oil",
    categories: "Edible Oil",
    description:
      "Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use. ",
    image: "/zitelle pictures/4litres oil2.png",
    path: "/services/cooking-oil",
  },
];

const Business = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Our Businesses"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>
            <span className="page-hero__crumb--active">Business</span>
          </>
        }
      />

      <section className="business-pg">
        {/* ── TOP ── */}
        <div className="business-pg__top">
          <div className="business-pg__label">
            <div className="business-pg__label-line" />
            <span>Our Businesses</span>
            <div className="business-pg__label-line" />
          </div>
          <h2 className="business-pg__heading">
            One group. Multiple industries.
            <br />
            One standard for quality,
            <br />
            consistency and delivery.
          </h2>
          <p className="business-pg__subtext">
            Select a business unit to explore what we do.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="business-pg__grid">
          {businesses.map((item, index) => (
            <div className="business-pg__card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="business-pg__image"
              />

              <div className="business-pg__overlay">
                <div className="business-pg__overlay-content">
                  <span className="business-pg__categories">
                    {item.categories}
                  </span>
                  <h3>{item.title}</h3>
                  <div className="business-pg__divider" />
                  <p>{item.description}</p>
                </div>

                <div className="business-pg__arrow-wrap">
                  <div
                    className="business-pg__arrow-btn"
                    onClick={() => navigate(item.path)}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M4 11h14M12 5l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Business;
