import { Helmet } from "react-helmet-async";

import Hero from "../components/home/Hero";
import PopularDishes from "../components/home/PopularDishes";
import Services from "../components/home/Services";
import Story from "../components/home/Story";
import VisualStory from "../components/home/VisualStory";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HabeshaBet Restaurant | Authentic Ethiopian Food in Addis Ababa</title>

        <meta
          name="description"
          content="Experience authentic Ethiopian cuisine at HabeshaBet Restaurant in Addis Ababa. Enjoy traditional dishes, coffee ceremonies, delivery, and catering services."
        />

        <meta
          name="keywords"
          content="Ethiopian restaurant Addis Ababa, HabeshaBet, Ethiopian food, doro wat, injera, traditional restaurant Ethiopia, food delivery Addis Ababa"
        />

        <meta property="og:title" content="HabeshaBet Restaurant Addis Ababa" />
        <meta
          property="og:description"
          content="Authentic Ethiopian food, coffee ceremony, and dining experience in Addis Ababa."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="home-page">
        

        <Hero />
        <PopularDishes />
        <Services />
        <Story />
        <VisualStory />
      </main>
    </>
  );
};

export default HomePage;