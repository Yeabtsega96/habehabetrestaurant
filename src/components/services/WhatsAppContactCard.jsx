import "./WhatsAppContactCard.css";
import { LuMessageCircle } from "react-icons/lu";
import Button from "../Button";

const WhatsAppContactCard = () => {
  return (
    <section
      className="whatsapp-contact-card"
      aria-labelledby="whatsapp-title"
    >
      <span className="icon-span" aria-hidden="true">
        <LuMessageCircle className="icon" />
      </span>

      <h2 id="whatsapp-title">Order via WhatsApp</h2>

      <p>
        The fastest way to order. Send us a WhatsApp message and our team
        will confirm your order within minutes. Available daily from
        8:00 AM to 10:00 PM.
      </p>

      <a
        href="https://wa.me/251916921711"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order through WhatsApp"
      >
        <Button variant="whatsapp" size="lg">
          <LuMessageCircle aria-hidden="true" />
          Chat on WhatsApp
        </Button>
      </a>

      <small>Tap the button to open WhatsApp directly.</small>
    </section>
  );
};

export default WhatsAppContactCard;