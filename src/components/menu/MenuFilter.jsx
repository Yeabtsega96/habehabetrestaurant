import {
  IoRestaurantOutline,
} from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuLeaf, LuCoffee } from "react-icons/lu";
import { RiKnifeLine } from "react-icons/ri";
import Button from "../Button";
import "./MenuFilter.css";

const MenuFilter = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <section
      className="menu-filter"
      aria-label="Menu filter options"
    >
      <Button
        variant="outline"
        className={`filter-btn ${
          selectedMenu === "all" ? "active" : ""
        }`}
        onClick={() => setSelectedMenu("all")}
        aria-pressed={selectedMenu === "all"}
      >
        <IoRestaurantOutline aria-hidden="true" />
        All Items
      </Button>

      <Button
        variant="outline"
        className={`filter-btn ${
          selectedMenu === "traditional" ? "active" : ""
        }`}
        onClick={() => setSelectedMenu("traditional")}
        aria-pressed={selectedMenu === "traditional"}
      >
        <CiStar aria-hidden="true" />
        Traditional
      </Button>

      <Button
        variant="outline"
        className={`filter-btn ${
          selectedMenu === "vegetarian" ? "active" : ""
        }`}
        onClick={() => setSelectedMenu("vegetarian")}
        aria-pressed={selectedMenu === "vegetarian"}
      >
        <LuLeaf aria-hidden="true" />
        Vegetarian
      </Button>

      <Button
        variant="outline"
        className={`filter-btn ${
          selectedMenu === "meat" ? "active" : ""
        }`}
        onClick={() => setSelectedMenu("meat")}
        aria-pressed={selectedMenu === "meat"}
      >
        <RiKnifeLine aria-hidden="true" />
        Meat Dishes
      </Button>

      <Button
        variant="outline"
        className={`filter-btn ${
          selectedMenu === "drinks" ? "active" : ""
        }`}
        onClick={() => setSelectedMenu("drinks")}
        aria-pressed={selectedMenu === "drinks"}
      >
        <LuCoffee aria-hidden="true" />
        Drinks & Coffee
      </Button>
    </section>
  );
};

export default MenuFilter;