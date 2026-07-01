import { Helmet } from "react-helmet-async";

import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import Values from "../components/about/Values";
import Team from "../components/about/Team";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | HabeshaBet Restaurant Addis Ababa</title>

        <meta
          name="description"
          content="Learn about HabeshaBet Restaurant in Addis Ababa — our story, Ethiopian culinary traditions, values, and the team behind authentic Ethiopian cuisine."
        />

        <meta
          name="keywords"
          content="HabeshaBet, Ethiopian restaurant Addis Ababa, about HabeshaBet, Ethiopian food, traditional Ethiopian cuisine, restaurant story Ethiopia"
        />

        {/* Open Graph (social sharing) */}
        <meta property="og:title" content="About HabeshaBet Restaurant" />
        <meta
          property="og:description"
          content="Discover our story, values, and the team behind authentic Ethiopian cuisine in Addis Ababa."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="about-page">
        <AboutHero />
        <Story />
        <Values />
        <Team />
      </main>
    </>
  );
};

export default AboutPage;