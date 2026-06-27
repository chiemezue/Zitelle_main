import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhyUs from "./Pages/WhyUs";
import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Career";
import CareerForm from "./Components/CareerComponents/CareerForm";
import Contact from "./Pages/Contact";
import Plywood from "./Pages/Plywood";
import Soap from "./Pages/Soap";
import CookingOil from "./Pages/CookingOil";
import Packaging from "./Pages/Packaging";
import Business from "./Pages/Business";
import BlogPage from "./Pages/BlogPage";
import BlogSinglePage from "./Pages/BlogSinglePage";
import { BlogContext } from "./Components/BlogComponents/BlogContext";

const dummyPosts = [
  {
    id: 1,
    category: "Plywood",
    date: "June 12, 2026",
    readTime: "4 min read",
    title: "Tata & Bobo Expands Production Capacity with New Lamination Line",
    excerpt:
      "Zitelle Group's flagship plywood division commissions a state-of-the-art lamination facility in Onitsha, doubling output capacity and creating over 200 new jobs across Anambra State.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      {
        heading: "A New Era for Tata & Bobo",
        paragraphs: [
          "The commissioning of the new lamination line marks a significant milestone in Tata & Bobo's growth story. With demand for high-quality plywood rising steadily across Nigeria's construction and furniture sectors, the facility positions the division to meet market needs at an unprecedented scale.",
          "The new line incorporates cutting-edge German-engineered lamination technology, enabling the production of moisture-resistant, fire-retardant, and decorative grade panels — product categories that were previously imported at considerable cost.",
        ],
      },
      {
        heading: "Community and Economic Impact",
        paragraphs: [
          "Beyond production targets, the expansion has already begun delivering tangible social dividends. Over 200 direct employment positions have been created, with preference given to qualified candidates from within Anambra State.",
          "Zitelle Group has also partnered with Nnamdi Azikiwe University's engineering faculty to establish an internship pipeline, ensuring that the facility doubles as a skills development hub for young Nigerians entering the manufacturing sector.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "With Phase 1 of the expansion now complete, Tata & Bobo is already planning a Phase 2 that will introduce an automated edge-banding unit and increase overall production capacity by a further 40%.",
          "The Zitelle Group remains committed to its mission of building world-class manufacturing infrastructure in South-East Nigeria, reducing import dependency, and contributing meaningfully to the nation's industrial development agenda.",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Oil & Soap",
    date: "May 28, 2026",
    readTime: "3 min read",
    title: "Zitelle Oil Achieves NAFDAC Certification for Full Product Range",
    excerpt:
      "Following an 18-month quality assurance programme, Zitelle Oil and Zitelle Soap have received full NAFDAC certification, unlocking access to retail chains across six Nigerian states.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    content: [
      {
        heading: "The Road to Certification",
        paragraphs: [
          "The NAFDAC certification process for Zitelle Oil and Zitelle Soap spanned 18 rigorous months, involving comprehensive facility audits, product laboratory testing, and supply chain traceability assessments.",
          "Zitelle invested significantly in upgrading its production environment — installing new filtration systems, upgrading packaging lines to GMP-compliant standards, and training over 80 production staff on food safety protocols.",
        ],
      },
      {
        heading: "Market Access Unlocked",
        paragraphs: [
          "The certification opens doors to major retail chains across Lagos, Abuja, Enugu, Anambra, Rivers, and Delta states. Distribution agreements are already being finalised with three national supermarket chains.",
          "For consumers, the NAFDAC mark represents a guarantee of quality and safety. For Zitelle, it marks the transition from a regional manufacturer to a nationally recognised consumer goods brand.",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Corporate",
    date: "April 10, 2026",
    readTime: "5 min read",
    title:
      "Zitelle Group Named Among Top 50 Manufacturing Firms in South-East Nigeria",
    excerpt:
      "The Manufacturers Association of Nigeria Southeast chapter recognised Zitelle Group for consistent output growth, workforce development, and sustainable raw material sourcing.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    content: [
      {
        heading: "Recognition from the Industry",
        paragraphs: [
          "The Manufacturers Association of Nigeria (MAN) Southeast chapter's annual rankings evaluate firms across seven criteria including output volume, workforce size, quality certifications, export activity, and community investment.",
          "Zitelle Group's entry into the Top 50 reflects three consecutive years of double-digit revenue growth and a headcount that has grown from 120 to over 600 employees since 2022.",
        ],
      },
      {
        heading: "Sustainable Sourcing as a Differentiator",
        paragraphs: [
          "One area where the judging panel singled out Zitelle for commendation was sustainable raw material sourcing. Over 70% of the Group's inputs are now procured from verified local suppliers, reducing foreign exchange exposure and supporting smallholder farmers.",
          "The Group's ongoing tree-planting programme — which has seen over 5,000 trees planted in partnership with Anambra State's environmental agency — was also cited as evidence of genuine corporate environmental responsibility.",
        ],
      },
      {
        heading: "A Platform for Greater Ambition",
        paragraphs: [
          "Group Chairman Chief Emmanuel Okonkwo received the award on behalf of the Group, describing it as a validation of the team's commitment to excellence. 'We did not build Zitelle to be average,' he said. 'This recognition affirms that our people, our processes, and our products are genuinely world-class.'",
          "The Group has set a target of breaking into the national Top 100 manufacturing firms by 2028, a goal that will require continued investment in automation, talent development, and geographic expansion.",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Plastic",
    date: "March 5, 2026",
    readTime: "3 min read",
    title:
      "Zitelle Plastic Launches Eco-Friendly Packaging Line for FMCG Sector",
    excerpt:
      "In response to growing demand for sustainable packaging, Zitelle Plastic introduces a biodegradable product range now available to fast-moving consumer goods manufacturers across Nigeria.",
    image:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&q=80",
    content: [
      {
        heading: "Responding to a Changing Market",
        paragraphs: [
          "Nigerian FMCG manufacturers are under increasing pressure from retailers, regulators, and consumers to adopt more sustainable packaging formats. Zitelle Plastic's new biodegradable line was developed specifically to help local manufacturers meet these expectations without compromising on cost or performance.",
          "The range includes flexible pouches, rigid containers, and shrink-wrap variants — all manufactured using plant-derived resins that break down within 18 months under standard composting conditions.",
        ],
      },
      {
        heading: "Early Adoption and Scale",
        paragraphs: [
          "Three major food and beverage manufacturers have already signed supply agreements for the new line, with combined order volumes that will keep the Zitelle Plastic facility running at near-full capacity through Q3 2026.",
          "Zitelle plans to invest a further ₦120 million in expanding the biodegradable line's output capacity before the end of the year, anticipating continued growth in demand as Nigeria's packaging sector evolves.",
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Corporate",
    date: "February 18, 2026",
    readTime: "4 min read",
    title: "Zitelle Group Breaks Ground on New Headquarters in Onitsha",
    excerpt:
      "Construction has begun on Zitelle Group's new administrative headquarters, a five-storey complex designed to centralise operations and accommodate the group's expanding workforce.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    content: [
      {
        heading: "A Home Worthy of the Vision",
        paragraphs: [
          "The groundbreaking ceremony at the 3,200 square metre Onitsha site was attended by senior Zitelle leadership, state government representatives, and community stakeholders. The five-storey structure will house executive offices, a boardroom suite, a training centre, and a visitor experience floor showcasing the Group's product portfolio.",
          "Designed by a Lagos-based architecture firm, the building's facade incorporates the Group's signature green and gold colour palette, with energy-efficient glazing and rooftop solar panels that will supply up to 40% of the building's power requirements.",
        ],
      },
      {
        heading: "Centralising for Efficiency",
        paragraphs: [
          "Currently, Zitelle's corporate functions are distributed across three leased offices in Onitsha and Awka. The new headquarters will bring all administrative, finance, legal, and HR functions under one roof, reducing operational friction and enabling faster decision-making.",
          "The project is expected to be completed by Q1 2027, with the Group planning a phased staff transition to coincide with the commissioning of the new facility.",
        ],
      },
    ],
  },
  {
    id: 6,
    category: "Plywood",
    date: "January 22, 2026",
    readTime: "5 min read",
    title:
      "Tata & Bobo Partners with Federal Government Affordable Housing Initiative",
    excerpt:
      "Tata & Bobo Plywood has been selected as a key materials supplier for the Federal Government's 2026 affordable housing programme, supplying engineered wood panels to 12 states.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    content: [
      {
        heading: "A National Stage for a South-East Champion",
        paragraphs: [
          "The Federal Government's 2026 affordable housing programme targets the construction of 50,000 housing units across Nigeria, with a mandate to source at least 60% of materials from domestic manufacturers. Tata & Bobo's selection as a primary engineered wood panel supplier represents one of the largest single contracts in the division's history.",
          "The contract covers the supply of structural plywood, flooring underlays, and ceiling panels to construction sites across 12 states, with deliveries scheduled to begin in Q2 2026 and continue through 2027.",
        ],
      },
      {
        heading: "Quality That Speaks for Itself",
        paragraphs: [
          "Tata & Bobo underwent a rigorous pre-qualification process that assessed production capacity, product quality, logistics capability, and financial stability. The division's recent investment in its lamination line proved decisive, demonstrating to federal evaluators that it could deliver at the required scale and specification.",
          "This partnership not only validates Tata & Bobo's product quality on a national level but also provides the volume consistency needed to further drive down per-unit production costs — a benefit that will ultimately flow through to all customers.",
        ],
      },
    ],
  },
];

const App = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: swap with real fetch() when backend is ready
    // const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
    // const data = await res.json();
    // setBlog(data);
    const timer = setTimeout(() => {
      setBlog(dummyPosts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BlogContext.Provider value={{ blog, setBlog, loading }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why_us" element={<WhyUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career/apply" element={<CareerForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogSinglePage />} />
            <Route path="/services/plywood" element={<Plywood />} />
            <Route path="/services/soap" element={<Soap />} />
            <Route path="/services/cooking-oil" element={<CookingOil />} />
            <Route path="/services/packaging" element={<Packaging />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default App;
