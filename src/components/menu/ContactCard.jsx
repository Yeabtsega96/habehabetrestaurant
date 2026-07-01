import Button from "../Button";
import { LuMessageCircle } from "react-icons/lu";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <section
      className="contact-card"
      aria-labelledby="contact-card-title"
    >
      <div>
        <h3 id="contact-card-title">
          Can’t decide? Let us help!
        </h3>

        <p>
          Message us on WhatsApp and we’ll recommend the best dishes for you.
        </p>
      </div>

      <a
        href="https://wa.me/251916921711"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Button variant="whatsapp">
          <LuMessageCircle aria-hidden="true" />
          Chat on WhatsApp
        </Button>
      </a>
    </section>
  );
};

export default ContactCard;