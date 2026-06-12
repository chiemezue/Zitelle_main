import React from "react";

const teamMembers = [
  {
    name: "Dominic Okechukwu-Anolue",
    role: "Chairman",
    description:
      "Provides strategic direction and leadership, guiding the long-term vision and growth of Zitelle Group.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Chimfurumnanya Frances Okechukwu-Anolue",
    role: "Managing Director",
    description:
      "Leads the overall operations of the Group, ensuring excellence, innovation, and sustainable business growth.",
    image: "/zitelle/Chimfurumnanya.jpg",
  },

  {
    name: "Stella Akunyiba",
    role: "General Manager (Awka)",
    description:
      "Oversees business operations and strategic execution across the Awka division.",
    image: "/zitelle/Stella Akunyiba.jpg",
  },

  {
    name: "Ngozi Oluchime",
    role: "General Manager (Lagos)",
    description:
      "Drives operational performance and business development activities within the Lagos division.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Sonia Enumah",
    role: "Group Executive Secretary",
    description:
      "Coordinates executive administration, corporate communications, and organizational governance support.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "James Monweya",
    role: "Chief Financial Controller (Lagos)",
    description:
      "Leads financial planning, reporting, compliance, and fiscal strategy for the Group.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Emmanuel Edobor",
    role: "Financial Controller (Awka)",
    description:
      "Manages budgeting, financial reporting, and internal financial controls for the Awka operations.",
    image: "/zitelle/Emmanuel Edobor.jpg",
  },

  {
    name: "Nonso Oyeoka",
    role: "Head of Audit & Internal Control",
    description:
      "Ensures accountability, risk management, compliance, and strong internal control systems.",
    image: "/zitelle/Nonso Oyeoka.jpg",
  },

  {
    name: "Romanus Idiemerio",
    role: "Accountant",
    description:
      "Supports financial operations through accurate accounting, reporting, and regulatory compliance.",
    image: "/zitelle/Romanus Idiemerio.jpg",
  },

  {
    name: "Kenneth Anuforo",
    role: "Head of Human Resource",
    description:
      "Leads talent acquisition, employee development, workplace culture, and people management initiatives.",
    image: "/zitelle/Kenneth Anuforo.jpg",
  },

  {
    name: "Uche Onuorah",
    role: "Head of Sales & Marketing",
    description:
      "Drives market expansion, customer engagement, revenue growth, and brand development across the Group.",
    image: "/zitelle/Uche Onuorah.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team">
      {/* HEADER */}

      <div className="team__top">
        <div className="team__label">
          <div className="team__label-line"></div>

          <span>OUR EXECUTIVE TEAM</span>

          <div className="team__label-line"></div>
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
                  <h3>{member.name}</h3>

                  <p>{member.role}</p>
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
