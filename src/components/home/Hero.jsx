import Button from "../Button";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <h1 id="hero-title" className="tagline">
        Simple Taste, <span>True Ethiopian</span> Flavor
      </h1>

      <p className="headline">
        Experience the warmth of authentic Ethiopian hospitality — from
        slow-cooked doro wat to the sacred coffee ceremony, every dish tells
        a story.
      </p>

      <div className="btns" role="group" aria-label="Hero actions">
        <Link to="/menu">
          <Button variant="primary">
            View Our Menu
          </Button>
        </Link>

        <Link to="/contact">
          <Button variant="secondary">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;