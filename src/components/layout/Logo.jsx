import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link
      to="/"
      className="logo-box"
      aria-label="HabeshaBet Restaurant Home"
    >
      <span className="logo" aria-hidden="true">
        HB
      </span>

      <div className="logo-text">
        <span className="logo-text-1">HabeshaBet</span>
        <span className="logo-text-2">Restaurant</span>
      </div>
    </Link>
  );
};

export default Logo;