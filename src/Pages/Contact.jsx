import React from "react";
import PageHero from "../Components/AboutComponents/PageHero";
import ContactSection from "../Components/ContactSection";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact"
        highlight="Us"
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Contact</span>
          </>
        }
      />
      <ContactSection />
      <section className="contact-map">
        <iframe
          title="Zitelle Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.73344344668!2d7.132304474803905!3d6.298715593690387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10437fd8b3ab1c85%3A0x5e1665b657b1d030!2sZitelle%20Group!5e0!3m2!1sen!2sng!4v1780088574870!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
