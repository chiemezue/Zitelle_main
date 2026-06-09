import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";

import { Factory, ShoppingCart, Package, Warehouse, Truck } from "lucide-react";

const Packaging = () => {
  return (
    <>
      <PageHero
        title="Packaging"
        highlight="Solutions"
        image="/zitelle pictures/lab3.jpg"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Packaging</span>
          </>
        }
      />

      <ProductHero
        label="About"
        title="Reliable Packaging For Every Product"
        text="Zitelle Packaging Solutions manufactures durable plastic containers and packaging products designed for food, oil, chemical, and industrial applications. We focus on quality materials, consistency, and dependable supply to help businesses package and distribute their products with confidence."
        image="/zitelle pictures/lab4.jpg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label="Our Products"
        title="What We Manufacture."
        products={[
          {
            id: 1,
            category: "Plastic Containers",
            name: "4 Litres ",
            description:
              "Durable food-grade plastic container suitable for oil and liquid products.",
            image: "/zitelle pictures/4 litres.jpg",
            link: "/contact",
          },

          {
            id: 2,
            category: "Plastic Containers",
            name: "10 Litres",
            description:
              "Strong and reliable packaging solution for cooking oil distribution.",
            image: "/zitelle pictures/10litres.jpg",
            link: "/contact",
          },

          {
            id: 3,
            category: "Industrial Packaging",
            name: "18 Litres",
            description:
              "Heavy-duty plastic container for commercial and industrial use.",
            image: "/zitelle pictures/18litres.jpg",
            link: "/contact",
          },

          {
            id: 4,
            category: "Industrial Packaging",
            name: "25 Litre",
            description:
              "Large-capacity packaging designed for bulk storage and transportation.",
            image: "/zitelle pictures/25litres.png",
            link: "/contact",
          },
        ]}
      />

      <WhoWeServe
        label="Who We Serve"
        title="Packaging For Businesses That Deliver"
        image="/zitelle pictures/10litres.jpg"
        items={[
          {
            icon: <Factory size={20} />,
            text: "Food and beverage manufacturers",
          },

          {
            icon: <Package size={20} />,
            text: "Cooking oil producers and distributors",
          },

          {
            icon: <ShoppingCart size={20} />,
            text: "Retail and wholesale businesses",
          },

          {
            icon: <Warehouse size={20} />,
            text: "Industrial and commercial suppliers",
          },
        ]}
      />
    </>
  );
};

export default Packaging;
