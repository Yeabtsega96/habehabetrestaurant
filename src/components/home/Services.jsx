import Button from "../Button";
import Card from "../Card";
import { GrLinkNext } from "react-icons/gr";
import {
  IoRestaurantOutline,
} from "react-icons/io5";
import { LuTruck, LuPartyPopper } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section
      className="services-section"
      aria-labelledby="services-title"
    >
      <h2 id="services-title">Our Services</h2>

      <div className="cards">
        <Card className="services-card">
          <span className="icon-span" aria-hidden="true">
            <IoRestaurantOutline className="icon" />
          </span>
          <h3>Dine-In</h3>
          <p>
            Enjoy the warm ambiance of our restaurant with family and friends
          </p>
        </Card>

        <Card className="services-card">
          <span className="icon-span" aria-hidden="true">
            <LuTruck className="icon" />
          </span>

          <h3>Delivery</h3>
          <p>
            Hot, fresh Ethiopian food delivered to your door across Addis Ababa
          </p>
        </Card>

        <Card className="services-card">
          <span className="icon-span" aria-hidden="true">
            <LuPartyPopper className="icon" />
          </span>

          <h3>Catering</h3>
          <p>
            We bring authentic Ethiopian flavors to your event or celebration
          </p>
        </Card>
      </div>

      <Link to="/services" className="all-services-link">
        <Button variant="primary">
          All Services <GrLinkNext />
        </Button>
      </Link>
    </section>
  );
};

export default Services;