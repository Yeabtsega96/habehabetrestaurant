import "./gallery.css";

const GalleryHero = () => {
  return (
    <section
      className="gallery-hero"
      aria-labelledby="gallery-title"
    >
      <p className="subtitle">Visual Story</p>

      <h1 id="gallery-title">Our Gallery</h1>
    </section>
  );
};

export default GalleryHero;