import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";
import ChooseSoap from "../Components/ProductComp/ChooseSoap.jsx";

import { Home, ShoppingCart, Building2, Store, Warehouse } from "lucide-react";

const Soap = () => {
  return (
    <>
      <PageHero
        title="Soap"
        highlight="Manufacturing"
        image="/zitelle/soap4.jpg"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Soap Manufacturing</span>
          </>
        }
      />

      <ProductHero
        label="About"
        title="Made for Everyday Cleanliness "
        text="Zitelle Soap is a versatile multipurpose soap made for everyday cleaning needs. Strong enough for laundry and practical washing, yet suitable for personal bathing use, it is designed to serve households, businesses, and everyday users who need one dependable soap for different purposes."
        image="/zitelle/soap3.jpg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label="Our Products"
        title="What We Produce."
        products={[
          {
            id: 1,
            category: "Household Care",
            name: "Multipurpose Bar Soap",
            description:
              "Suitable for laundry, dishwashing, and general household cleaning.",
            image: "/zitelle/soap6.jpg",
            link: "/contact",
          },

          {
            id: 2,
            category: "Personal Care",
            name: "Premium Bath Soap",
            description:
              "Gentle cleansing soap formulated for everyday personal hygiene.",
            image: "/zitelle/soap7.jpg",
            link: "/contact",
          },

          {
            id: 3,
            category: "Commercial Supply",
            name: "Industrial Cleaning Soap",
            description:
              "Reliable cleaning solution for hotels, schools, and institutions.",
            image: "/zitelle/soap8.jpg",
            link: "/contact",
          },

          {
            id: 4,
            category: "Household Care",
            name: "Detergent Soap",
            description:
              "Effective stain removal with long-lasting cleaning performance.",
            image: "/zitelle/soap9.jpg",
            link: "/contact",
          },
        ]}
      />
      <ChooseSoap />

      {/* <WhoWeServe
        label="Who We Serve"
        title="Made For Homes And Businesses"
        image="/zitelle pictures/soap2.jpg"
        items={[
          {
            icon: <Home size={20} />,
            text: "Households and families across Nigeria",
          },

          {
            icon: <Store size={20} />,
            text: "Retail stores and supermarkets",
          },

          {
            icon: <ShoppingCart size={20} />,
            text: "Wholesalers and distributors",
          },

          {
            icon: <Building2 size={20} />,
            text: "Hotels, schools, and institutions",
          },

          {
            icon: <Warehouse size={20} />,
            text: "Bulk buyers and commercial businesses",
          },
        ]}
      /> */}
    </>
  );
};

export default Soap;
