import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      aria-labelledby="about-hero-title"
    >
      <div className="about-hero-content">
        <p className="about-hero-subtitle">Who We Are</p>

        <h1 id="about-hero-title">
          About Habeshabet
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;