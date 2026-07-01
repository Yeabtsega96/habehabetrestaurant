import { Helmet } from "react-helmet-async";

import ServicesHero from "../components/services/ServicesHero";
import Serviceses from "../components/services/Serviceses";
import Features from "../components/services/Features";
import WhatsAppContactCard from "../components/services/WhatsAppContactCard";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | HabeshaBet Restaurant</title>

        <meta
          name="description"
          content="Discover HabeshaBet's restaurant services including dine-in, takeaway, delivery, catering, traditional coffee ceremonies, and more in Addis Ababa."
        />
      </Helmet>

      <main className="services-page">
        <ServicesHero />
        <Serviceses />
        <Features />
        <WhatsAppContactCard />
      </main>
    </>
  );
};

export default ServicesPage;