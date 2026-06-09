import React from "react";
import PageHero from "../AboutComponents/PageHero";
import CareerApply from "./CareerApply";

const CareerForm = () => {
  return (
    <>
      <PageHero
        title="Job Apply Form"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /Career/</span>

            <span className="page-hero__crumb--active">Apply</span>
          </>
        }
      />
      <CareerApply />
    </>
  );
};

export default CareerForm;
