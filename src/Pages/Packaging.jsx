import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";

import {
  FlaskConical,
  Droplets,
  Store,
  Building2,
  PackageCheck,
} from "lucide-react";

const Packaging = () => {
  return (
    <>
      <PageHero
        title="Packaging"
        highlight="Solutions"
        image="/zitelle/rubber2.jpg"
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
        text="Zitelle manufactures durable plastic jerrycans from scratch for both our own oil packaging and external commercial supply. By producing our jerrycans in-house, we maintain greater control over quality, consistency, strength and availability. 
        
        Our jerrycans are designed for practical handling, storage, and transportation of liquid products, making them suitable for businesses, distributors, manufacturers, and bulk packaging customers. 

        "
        image="/zitelle/rubber1.jpg"
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
            image: "/zitelle/4 litres.jpg",
            link: "/contact",
          },

          {
            id: 2,
            category: "Plastic Containers",
            name: "9 Litres",
            description:
              "Strong and reliable packaging solution for cooking oil distribution.",
            image: "/zitelle/10litres.jpg",
            link: "/contact",
          },

          {
            id: 3,
            category: "Industrial Packaging",
            name: "18 Litres",
            description:
              "Heavy-duty plastic container for commercial and industrial use.",
            image: "/zitelle/18litres.jpg",
            link: "/contact",
          },

          {
            id: 4,
            category: "Industrial Packaging",
            name: "25 Litre",
            description:
              "Large-capacity packaging designed for bulk storage and transportation.",
            image: "/zitelle/25litres.png",
            link: "/contact",
          },
        ]}
      />

      <WhoWeServe
        label="Who We Serve"
        title="Packaging For Businesses That Deliver"
        image="/zitelle/rubber3.jpg"
        items={[
          {
            icon: <Droplets size={20} />,
            text: "Edible oil producers and packagers",
          },
          {
            icon: <FlaskConical size={20} />,
            text: "Liquid product manufacturers",
          },
          {
            icon: <Building2 size={20} />,
            text: "Commercial and industrial suppliers",
          },
          {
            icon: <Store size={20} />,
            text: "Retail and wholesale businesses",
          },
          {
            icon: <PackageCheck size={20} />,
            text: "Businesses requiring jerrycans in bulk",
          },
        ]}
      />
    </>
  );
};

export default Packaging;
