import PageHero from "../Components/AboutComponents/PageHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import CareerRoles from "../Components/CareerComponents/CareerRoles";
import CareerCulture from "../Components/CareerComponents/CareerCulture";
import SplitSection from "../Components/SplitSection";
const careerSections = [
  {
    id: 1,

    label: "Join Our Team",

    title: "Build A Career With Purpose",

    text: `At Zitelle Group, we believe our people are central to our success. As an integrated manufacturing group, our work depends on dedicated teams across production, quality control, packaging, logistics, administration, sales, and internal operations.`,

    extra: `For over a decade, we have operated with discipline and consistency, producing essential products that serve homes, businesses, and industries. Our people help make this possible everyday. `,

    image: "/zitelle pictures/office.jpg",
  },
];

const Career = () => {
  return (
    <>
      <PageHero
        title="Career"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Career</span>
          </>
        }
      />

      <AboutIntro sections={careerSections} />
      <CareerCulture />
      <CareerRoles />

      <SplitSection
        label="Join Our Team"
        title="Interested In Joining Our Team?"
        text="We are always looking for talented, hardworking, and motivated people who want to grow with us. "
        extra="Explore our available roles and discover where your skills, experience, and ambition could fit within Zitelle Group."
        image="/zitelle pictures/office.jpg"
        buttonText="View Roles"
        buttonLink="/career/apply"
      />
    </>
  );
};

export default Career;
