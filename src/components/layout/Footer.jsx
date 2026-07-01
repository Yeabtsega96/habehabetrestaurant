import "./Footer.css";
import Logo from "./Logo";

import {
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";

import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import { LuFacebook } from "react-icons/lu";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Site footer">

      <div className="footer-container">

        {/* ABOUT / BRAND */}
        <section className="footer-logo-section" aria-labelledby="footer-about">

          <h2 id="footer-about" className="sr-only">
            About HabeshaBet
          </h2>

          <Logo />

          <p>
            Authentic Ethiopian cuisine served with warmth,
            hospitality, and tradition since 2012.
          </p>

          <nav className="social-links" aria-label="Social media links">

            <a href="#" aria-label="Facebook" className="link">
              <LuFacebook className="link-icon" />
            </a>

            <a href="#" aria-label="Instagram" className="link">
              <FaInstagram className="link-icon" />
            </a>

            <a href="#" aria-label="TikTok" className="link">
              <FaTiktok className="link-icon" />
            </a>

          </nav>

        </section>

        {/* CONTACT */}
        <section className="footer-contact" aria-labelledby="footer-contact">

          <h2 id="footer-contact">Contact</h2>

          <address>
            <ul>

              <li>
                <IoLocationOutline className="icon" aria-hidden="true" />
                Bole Road, Addis Ababa
              </li>

              <li>
                <IoCallOutline className="icon" aria-hidden="true" />
                +251 91 100 0000
              </li>

              <li>
                <CiMail className="icon" aria-hidden="true" />
                info@habeshabet.com
              </li>

              <li>
                <IoMdTime className="icon" aria-hidden="true" />
                Daily • 8:00 AM – 10:00 PM
              </li>

            </ul>
          </address>

        </section>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p className="footer-copyright">
          © {new Date().getFullYear()} HabeshaBet Restaurant. All rights reserved.
        </p>

        <div className="footer-credit" aria-label="Website credits">

          <p className="credit-line">
            Designed &amp; developed by{" "}
            <a
              href="https://abrocreative-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abol Creative
            </a>
          </p>

          <p className="credit-line">
            Lead Developer •{" "}
            <a
              href="https://abrocreative-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yeabtsega Matewos
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;