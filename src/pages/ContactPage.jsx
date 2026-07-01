import { Helmet } from "react-helmet-async";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | HabeshaBet Restaurant Addis Ababa</title>

        <meta
          name="description"
          content="Get in touch with HabeshaBet Restaurant in Addis Ababa for reservations, catering, delivery, or general inquiries. We respond quickly via phone, WhatsApp, or contact form."
        />

        <meta
          name="keywords"
          content="HabeshaBet contact, Ethiopian restaurant contact Addis Ababa, restaurant phone Addis Ababa, catering Addis Ababa, food delivery Ethiopia"
        />

        <meta property="og:title" content="Contact HabeshaBet Restaurant" />
        <meta
          property="og:description"
          content="Reach HabeshaBet for reservations, catering, and inquiries in Addis Ababa."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="contact-page">
        <ContactHero />

        <section
          className="contact-container"
          aria-labelledby="contact-section-title"
        >
          

          <ContactForm />
          <ContactInfo />
        </section>

        <Map />
      </main>
    </>
  );
};

export default ContactPage;