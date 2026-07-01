import "./MenuHero.css";

const MenuHero = () => {
  return (
    <section
      className="menu-hero"
      aria-labelledby="menu-hero-title"
    >
      <span className="subtitle">Authentic Flavors</span>

      <h1 id="menu-hero-title">Our Menu</h1>
    </section>
  );
};

export default MenuHero;