import "./MenuCards.css";
import Card from "../Card";
import Button from "../Button";
import menuData from "../../data/MenuData.js";

const MenuCards = ({ selectedMenu }) => {
  const filteredMenu =
    selectedMenu === "all"
      ? menuData
      : menuData.filter((menu) => menu.category === selectedMenu);

  if (filteredMenu.length === 0) {
    return (
      <section className="menu-cards empty" aria-live="polite">
        <p>No menu items available.</p>
      </section>
    );
  }

  return (
    <section className="menu-cards" aria-label="Menu items list">
      {filteredMenu.map((menu) => (
        <Card className="menu-card" key={menu.id}>
          {menu.popular && (
            <span className="popular-badge" aria-hidden="true">
              Popular
            </span>
          )}

          <span className="category-badge">{menu.category}</span>

          <img
            src={menu.image}
            alt={menu.name}
            loading="lazy"
            decoding="async"
          />

          <div className="menu-card-content">
            <h3>{menu.name}</h3>

            <p>{menu.description}</p>

            <div className="menu-card-footer">
              <span>{menu.price} ETB</span>

              <a
                href={`https://wa.me/251916921711?text=${encodeURIComponent(
                  `Hello! I would like to order ${menu.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${menu.name} via WhatsApp`}
              >
                <Button variant="secondary" size="sm">
                  Order
                </Button>
              </a>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default MenuCards;