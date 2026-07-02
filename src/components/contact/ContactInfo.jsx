import Button from "../Button";
import "./contact.css";

import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdAccessTime } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section
      className="contact-info"
      aria-labelledby="contact-info-title"
    >
      <h2 id="contact-info-title">
        Visit Us
      </h2>

      <ul>
        <li>
          <span className="icon-span" aria-hidden="true">
            <CiLocationOn className="icon" />
          </span>

          <div>
            <h3>Address</h3>

            <address>
              <a
                href="https://maps.google.com/?q=Bole+Road,+Near+Edna+Mall,+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bole Road, Near Edna Mall
                <br />
                Addis Ababa, Ethiopia
              </a>
            </address>
          </div>
        </li>

        <li>
          <span className="icon-span" aria-hidden="true">
            <IoCallOutline className="icon" />
          </span>

          <div>
            <h3>Phone</h3>

            <a href="tel:+251911000000">
              +251 91 100 0000
            </a>

            <a href="tel:+251112345678">
              +251 11 234 5678
            </a>
          </div>
        </li>

        <li>
          <span className="icon-span" aria-hidden="true">
            <MdOutlineEmail className="icon" />
          </span>

          <div>
            <h3>Email</h3>

            <a href="mailto:info@habeshabet.com">
              info@habeshabet.com
            </a>
          </div>
        </li>

        <li>
          <span className="icon-span" aria-hidden="true">
            <MdAccessTime className="icon" />
          </span>

          <div>
            <h3>Opening Hours</h3>

            <p>Monday – Friday: 10:00 AM – 10:00 PM</p>
            <p>Saturday – Sunday: 12:00 PM – 11:00 PM</p>
          </div>
        </li>
      </ul>

      <div className="btns">
        <a href="tel:+251911000000">
          <Button variant="primary">
            <IoCallOutline className="icon" />
            Call Now
          </Button>
        </a>

        <a
          href="https://wa.me/251911000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp">
            <LuMessageCircle className="icon" />
            WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;