import PageHero from "../Components/AboutComponents/PageHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import CareerRoles from "../Components/CareerComponents/CareerRoles";
import CareerCulture from "../Components/CareerComponents/CareerCulture";
import SplitSection from "../Components/SplitSection";
const careerSections = [
  {
    id: 1,

    label: "Join Our Team",

    title: "BUILD YOUR FUTURE WITH ZITELLE",

    text: `At Zitelle, every product begins with its people – the hands that build, the minds that improve, and the teams that keep us moving every day. Behind every process, every product, and every delivery is a shared commitment to quality, discipline, and continuous improvement. `,

    extra: ` `,

    image: "/zitelle/career.jpeg",
  },
];

const Career = () => {
  return (
    <>
      <PageHero
        title="Career"
        highlight=""
        image="/zitelle/career.jpg"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Career</span>
        //   </>
        // }
      />

      <AboutIntro sections={careerSections} />
      <CareerCulture />
      <CareerRoles />

      <SplitSection
        label="Join Our Team"
        title="Interested In Joining Our Team?"
        text="We are always looking for talented, hardworking, and motivated people who want to grow with us. "
        extra="Explore our available roles and discover where your skills, experience, and ambition could fit within Zitelle Group."
        image="/zitelle/join_our_team.jpeg"
        buttonText="View Roles"
        buttonLink="/career/apply"
      />
    </>
  );
};

export default Career;
