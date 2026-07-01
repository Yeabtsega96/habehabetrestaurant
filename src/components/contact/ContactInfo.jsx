import Button from "../Button"
import "./contact.css"

import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Visit Us</h2>
      <ul>
        <li>
          <span className="icon-span">
            <CiLocationOn className="icon" />
          </span>
          <div>
            <h4>Address</h4>
            <p>Bole Road, Near Edna Mall Addis Ababa, Ethiopia</p>
          </div>
        </li>

        <li>
          <span className="icon-span">
            <IoCallOutline className="icon" />
          </span>
          <div>
            <h4>Phone</h4>
            <p>+251 91 100 0000</p>
            <p>+251 11 234 5678</p>
          </div>
        </li>

        <li>
          <span className="icon-span">
            <MdOutlineEmail className="icon" />
          </span>
          <div>
            <h4>Email</h4>
            <p>info@habeshabet.com</p>
          </div>
        </li>

        <li>
          <span className="icon-span">
            <MdAccessTime className="icon" />
          </span>
          <div>
            <h4>Hours</h4>
            <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
          </div>
        </li>
      </ul>
      <div className="btns">
        <Button variant={"primary"}> <IoCallOutline className="icon" /> Call Now</Button>
        <Button variant={"whatsapp"}> <LuMessageCircle className="icon" /> WhatsApp</Button>
      </div>
    </section>
  )
}

export default ContactInfo