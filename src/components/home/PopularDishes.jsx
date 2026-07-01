import Card from "../Card";
import Button from "../Button";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import menuData from "../../data/MenuData.js";
import "./PopularDishes.css";

const PopularDishes = () => {
  const popularDishes = menuData.filter((dish) => dish.popular);

  return (
    <section
      className="popular-dishes"
      aria-labelledby="popular-dishes-title"
    >
      <h2 id="popular-dishes-title">Popular Dishes</h2>

      <div className="cards">
        {popularDishes.map((menu) => (
          <Card className="menu-card" key={menu.id}>
            <span className="popular-txt" aria-hidden="true">
              Popular
            </span>

            <img
              src={menu.image}
              alt={menu.name}
              loading="lazy"
              decoding="async"
            />

            <div className="menu-infos">
              <h3>{menu.name}</h3>
              <p>{menu.description}</p>
              <span className="price">{menu.price} ETB</span>
            </div>
          </Card>
        ))}
      </div>

      <Link to="/menu" className="menu-link">
        <Button variant="secondary">
          View Full Menu <GrLinkNext />
        </Button>
      </Link>
    </section>
  );
};

export default PopularDishes;