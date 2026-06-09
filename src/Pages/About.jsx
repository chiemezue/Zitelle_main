import PageHero from "../Components/AboutComponents/PageHero.jsx";
import AboutIntro from "../Components/AboutComponents/AboutIntro.jsx";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs.jsx";
import TeamSection from "../Components/AboutComponents/TeamSection.jsx";
import AboutCommit from "../Components/AboutComponents/AboutCommit.jsx";
import MissionVision from "../Components/AboutComponents/MissionVision.jsx";

const aboutSections = [
  {
    id: 1,

    label: "Who We Are",

    title: "Built Around Everyday Essentials",

    text: `Zitelle Group is an integrated Nigerian manufacturing group committed to producing essential products for homes, businesses and industries. With operations spanning edible oils, multipurpose soap, plastic packaging, and wood products, we bring together different sectors under one shared standard of quality, reliability and service. 
        
        For over a decade, we have operated with discipline and consistency, working seven days a week to improve our processes, strengthen our products, and deliver dependable value to our customers. Our journey has been shaped by resilience, continuous improvement, and clear understanding of the role manufacturing plays in everyday life. 
`,

    extra: `From the oil used in homes and businesses, to the soap used for bathing, laundry and cleaning, to the jerrycans that package and protect liquid products, and the wood products that support construction, furniture, and commercial use – Zitelle Group serves practical needs across multiple parts of the market. `,

    image: "/zitelle pictures/office.jpg ",
  },

  // {
  //   id: 2,

  //   label: "What We Do",

  //   title: "Manufacturing With Care And Precision",

  //   text: `From manufacturing to packaging and dependable delivery, we sweat the details so you don’t have to.`,

  //   extra: `Every process is handled with focus, consistency and operational excellence to maintain the standards we stand for.`,

  //   image: "/zitelle pictures/people in factory.jpg",
  // },

  {
    id: 2,

    label: "Our Standard",

    title: "Built on Discipline, Consistency, and Improvement",

    text: `At Zitelle, consistency is part of our identity. Operating seven days a week for over a decade has taught us that quality is not achieved by chance. It is built through routine, monitoring, training, process improvement, and commitment.
          Across our divisions, we continue to refine how we work – from raw material handling and production to packaging, quality control, logistics, and customer service.
          
          Our goal is not only to manufacture products, but to keep improving the systems behind those products.`,

    extra: `We believe that every product carrying the Zitelle name should reflect care, reliability and usefulness. Whether a customer is buying oil for household use, soap for daily washing, jerrycans for commercial packaging, or wood products for business needs, they should feel confident in the standard behind the product. `,
    image: "/zitelle pictures/zitelle trucks 2.jpg",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">About</span>
          </>
        }
      />

      <AboutIntro sections={aboutSections} />
      <MissionVision />

      {/* <WhyChooseUs /> */}

      <TeamSection />
      <AboutCommit />
    </>
  );
};

export default About;
