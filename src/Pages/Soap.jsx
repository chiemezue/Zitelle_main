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
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Soap Manufacturing</span>
        //   </>
        // }
      />

      <ProductHero
        label=""
        title="Feel The Difference With Every Wash"
        text="Made through a controlled production process using carefully selected oil-based raw materials, our soap is designed to support cleanliness, affordability. From production to packaging, each batch is monitored to help ensure reliable performance and customer satisfaction"
        image="/zitelle/IMG_8335.jpeg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label=""
        title="Our Soap Line"
        products={[
          {
            id: 1,
            // category: "Household Care",
            // name: "Multipurpose Bar Soap",

            image: "/zitelle/IMG_0420.png",
            link: "/contact",
          },

          {
            id: 2,
            // category: "Personal Care",
            // name: "Premium Bath Soap",

            image: "/zitelle/IMG_0401.png",
            link: "/contact",
          },

          {
            id: 3,
            // category: "Commercial Supply",
            // name: "Industrial Cleaning Soap",

            image: "/zitelle/IMG_0358.png",
            link: "/contact",
          },

          {
            id: 4,
            // category: "Household Care",
            // name: "Detergent Soap",
            image: "/zitelle/IMG_0296.png",
            link: "/contact",
          },
          {
            id: 5,
            // category: "Household Care",
            // name: "Detergent Soap",
            image: "/zitelle/IMG_0234.png",
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
