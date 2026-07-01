import HabeshabetImg from "../../assets/images/habehabet-bg-img.avif";
import Button from "../Button";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Story.css";

const Story = () => {
  return (
    <section className="story-section" aria-labelledby="story-title">
      <div className="img-box">
        <img
          src={HabeshabetImg}
          alt="Traditional Ethiopian food and cultural dining atmosphere"
          loading="lazy"
          decoding="async"
        />

        <div className="established" aria-hidden="true">
          <p className="year">2012</p>
          <p>Established</p>
        </div>
      </div>

      <div className="story">
        <span>Our Story</span>

        <h2 id="story-title">Born from Ethiopian Tradition</h2>

        <p>
          HabesaBet was founded with one mission: to share the warmth and
          richness of Ethiopian culture through food. From the spongy injera
          to the fragrant berbere spices, every dish is prepared with the same
          care as a home-cooked family meal.
        </p>

        <p>
          We source our spices from local markets in Mercato, brew our coffee
          using traditional jebena pots, and seat every guest as if welcoming
          them into our home.
        </p>

        <div className="trust-indicators">
          <div className="trust-indicator">
            <h3>100%</h3>
            <p>Local Ingredients</p>
          </div>

          <div className="trust-indicator">
            <h3>500+</h3>
            <p>Happy Guests/Week</p>
          </div>

          <div className="trust-indicator">
            <h3>20+</h3>
            <p>Signature Dishes</p>
          </div>
        </div>

        <Link to="/story">
          <Button>
            Learn More <GrLinkNext />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Story;