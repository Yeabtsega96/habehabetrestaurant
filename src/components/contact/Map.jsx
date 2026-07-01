import "./map.css";
import Button from "../Button";
import { CiLocationOn } from "react-icons/ci";

const Map = () => {
  return (
    <section
      className="map"
      aria-labelledby="map-title"
    >
      <span className="map-icon-span" aria-hidden="true">
        <CiLocationOn className="icon" />
      </span>

      <h2 id="map-title">
        Bole Road, Addis Ababa
      </h2>

      <p className="map-subtitle">
        Find us easily on Google Maps
      </p>

      <a
        href="https://maps.app.goo.gl/yFq1dF3oKLRMQYoZ9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="primary">
          Open in Maps
        </Button>
      </a>
    </section>
  );
};

export default Map;