import Card from "../Card";
import Button from "../Button";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./VisualStory.css";
import galleryData from "../../data/GalleryData.js";

const VisualStory = () => {
  const gallery = galleryData
    .filter((item) => item.category === "food")
    .slice(0, 4);

  return (
    <section className="visual-story" aria-labelledby="visual-title">
      <span className="subtitle">Visual Stories</span>

      <h2 id="visual-title">From Our Kitchen</h2>

      <hr className="hr" />

      <div className="cards">
        {gallery.map((item) => (
          <Card className="gallery-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
            />
          </Card>
        ))}
      </div>

      <Link to="/gallery">
        <Button variant="secondary">
          View Gallery <GrLinkNext />
        </Button>
      </Link>
    </section>
  );
};

export default VisualStory;