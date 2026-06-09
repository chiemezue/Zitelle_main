import React from "react";

const visionMission = [
  {
    icon: (
      /* Lighthouse / Vision */
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="22"
          y="20"
          width="12"
          height="24"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19 44 H37"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 20 L25 8 H31 L34 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <rect
          x="25"
          y="28"
          width="6"
          height="6"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M28 8 V5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M26 5 H30"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="27.5"
          y="2"
          width="1"
          height="3"
          rx="0.5"
          fill="currentColor"
        />
        <path
          d="M16 38 Q28 32 40 38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 44 Q28 36 42 44"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Vision Statement",
    text: "To be number one in every market we serve and for every branded product we offer.",
  },
  {
    icon: (
      /* Target / Mission */
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="28"
          cy="28"
          r="22"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="28"
          cy="28"
          r="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="28"
          cy="28"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="28" cy="28" r="4" fill="currentColor" />
        <path
          d="M28 6 L28 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M28 44 L28 50"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 28 L12 28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M44 28 L50 28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Mission Statement",
    text: "To make financial services easy and accessible to our customers.",
  },
  {
    icon: (
      /* Diamond / Core Values */
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="28,6 50,20 28,50 6,20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <polyline
          points="6,20 18,20 28,6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <polyline
          points="50,20 38,20 28,6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="20"
          x2="50"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="20"
          x2="28"
          y2="50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="38"
          y1="20"
          x2="28"
          y2="50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="20"
          x2="28"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="38"
          y1="20"
          x2="28"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="28"
          y1="20"
          x2="28"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
    label: "Core Values",
    values: [
      "C - Customer First",
      "R - Respect",
      "E - Excellence",
      "S- Shared Ambition",
      "T - Tenacity",
    ],
  },
];

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        {/* LEFT TITLE */}
        <div className="mv-title-wrap">
          <h2 className="mv-title">
            Vision,
            <br />
            Mission &<br />
            Values
          </h2>
        </div>

        {/* DIVIDER */}
        <div className="mv-left-divider" />

        {/* RIGHT CARDS */}
        <div className="mv-grid">
          {visionMission.map((item, i) => (
            <div key={i} className="mv-card">
              <div className="mv-icon">{item.icon}</div>
              <h3 className="mv-card-label">{item.label}</h3>
              {item.text ? (
                <p className="mv-card-text">{item.text}</p>
              ) : (
                <ul className="mv-values-list">
                  {item.values.map((v, j) => (
                    <li key={j} className="mv-value-item">
                      <span className="mv-bullet" />
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
