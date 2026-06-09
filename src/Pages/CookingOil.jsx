import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";
import OilFeatures from "../Components/ProductComp/OilFeatures.jsx";

import { Sparkle, Droplets, Store, Factory, Package } from "lucide-react";

const CookingOil = () => {
  return (
    <>
      <PageHero
        title="Cooking"
        highlight="Oil"
        image="/zitelle pictures/lab 1.jpg"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Cooking Oil</span>
          </>
        }
      />

      <ProductHero
        label="About"
        title="Pal, Kernel Refined Oil /Palm Kernel Refined Oil"
        text="Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use. With its clean appearance, stable quality, and wide range of applications, it supports industries such as soap production, food processing, cosmetics, and other industrial formulations."
        image="/zitelle pictures/lab4.jpg"
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
            category: "Cooking Oil",
            name: "4 Litres",
            description:
              "Refined vegetable oil suitable for everyday cooking and frying.",
            image: "/zitelle pictures/4litres oil2.png",
            link: "/contact",
          },

          {
            id: 2,
            category: "Cooking Oil",
            name: "9 Litres",
            description:
              "Convenient packaging designed for daily household use.",
            image: "/zitelle pictures/10litres oil.png",
            link: "/contact",
          },

          {
            id: 3,
            category: "Cooking Oil",
            name: "18 Litres",
            description:
              "Large-volume supply for restaurants and food businesses.",
            image: "/zitelle pictures/18litres oil.png",
            link: "/contact",
          },

          {
            id: 4,
            category: "Cooking Oil",
            name: "25 Litres",
            description:
              "Consistent quality oil developed for high-volume frying.",
            image: "/zitelle pictures/25litres oil.png",
            link: "/contact",
          },
        ]}
      />
      <OilFeatures />

      <WhoWeServe
        label="Who We Serve"
        title="Supplying Kitchens And Businesses"
        image="/zitelle pictures/machine2.jpg"
        items={[
          {
            icon: <Package size={20} />,
            text: "Soap Manufacturers",
          },

          {
            icon: <Sparkle size={20} />,
            text: "Cosmetics & Personal Care Brands",
          },

          {
            icon: <Droplets size={20} />,
            text: "Detergent Manufacturers",
          },

          {
            icon: <Factory size={20} />,
            text: "Industrial Processors",
          },
        ]}
      />
    </>
  );
};

export default CookingOil;
