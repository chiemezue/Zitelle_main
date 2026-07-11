import React from "react";

const teamMembers = [
  {
    name: "Dominic Okechukwu-Anolue",
    role: "Chairman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Frances Okechukwu-Anolue",
    role: "Managing Director",
    image: "/zitelle/Frances Okechukwu-Anolue.jpeg",
  },
  {
    name: "James Monweya",
    role: "Chief Financial Controller",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Stella Akunyiba ",
    role: "General Manager AWKA",
    image: "/zitelle/Stella Akunyiba.jpeg",
  },
  {
    name: "Ngozi Oluchime ",
    role: "General Manager LAGOS",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nonso Oyeoka",
    role: "Head of Audit & Internal Control",
    image: "/zitelle/Nonso Oyeoka.jpeg",
  },
  {
    name: "Emmanuel Edobor",
    role: "Financial Controller AWKA",
    image: "/zitelle/Emmanuel Edobor.jpeg",
  },

  {
    name: "Sonia Enumah",
    role: "Head of Administration",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kenneth Anuforo",
    role: "Head of Human Resource",
    image: "/zitelle/Kenneth Anuforo.jpeg",
  },
  {
    name: "Uche Onuorah",
    role: "Head of Sales & Marketing AWKA",
    image: "/zitelle/Uche Onuorah.jpeg",
  },
  {
    name: "Ebuka Dontaus Obinwa",
    role: "Head of Sales & Marketing LAGOS",
  },
  {
    name: "Romanus Idiemerio",
    role: "Senior Accountant",
    image: "/zitelle/Romanus Idiemerio.jpg",
  },
];

// Splits the role onto a new line before AWKA / LAGOS
const formatRole = (role) => {
  const locations = ["AWKA", "LAGOS"];
  const match = locations.find((loc) => role.endsWith(loc));

  if (!match) return role;

  const prefix = role.slice(0, role.length - match.length).trim();

  return (
    <>
      {prefix}
      <br />
      {match}
    </>
  );
};

const TeamSection = () => {
  return (
    <section className="team">
      {/* HEADER */}
      <div className="team__top">
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Executive Team</span>
          <div className="business-pg__label-line" />
        </div>
      </div>

      {/* GRID */}
      <div className="team__wrapper">
        <div className="team__slider">
          {teamMembers.map((member, index) => (
            <div className="team__card" key={index}>
              {/* IMAGE */}
              <div className="team__image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__image"
                />

                {/* GOLD PROFILE CARD */}
                <div className="team__profile">
                  <h3>{formatRole(member.role)}</h3>
                  <p>{member.name}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="team__body">
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
