import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Button from "../Button";
import Logo from "./Logo";

import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <Logo />

      <button
        className="menu-btn"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
      </button>

      <nav
        id="primary-navigation"
        className={isOpen ? "nav open" : "nav"}
        aria-label="Primary navigation"
      >
        <ul>
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <a
          href="https://wa.me/251916921711"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <Button variant="whatsapp">
            Order Now
          </Button>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;