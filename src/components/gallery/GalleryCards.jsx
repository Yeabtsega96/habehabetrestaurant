import "./gallery.css";
import galleryData from "../../data/GalleryData.js";

const GalleryCards = ({ selectedCategory }) => {
  const filteredGalleryData =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  if (filteredGalleryData.length === 0) {
    return (
      <p className="no-images" role="status">
        No images available
      </p>
    );
  }

  return (
    <section
      className="gallery-cards"
      aria-label="Gallery images"
    >
      {filteredGalleryData.map((gallery) => (
        <figure key={gallery.id} className="gallery-item">
          <img
            src={gallery.image}
            alt={`${gallery.title} - Habeshabet gallery`}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </section>
  );
};

export default GalleryCards;