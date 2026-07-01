import { useState } from "react";

import { Helmet } from "react-helmet-async";

import GalleryHero from "../components/gallery/GalleryHero";
import FilterBtns from "../components/gallery/FilterBtns";
import GalleryCards from "../components/gallery/GalleryCards";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  return (
    <>
      <Helmet>
        <title>Gallery | HabeshaBet Restaurant Addis Ababa</title>

        <meta
          name="description"
          content="Explore the HabeshaBet Restaurant gallery in Addis Ababa — showcasing authentic Ethiopian dishes, interior design, drinks, and cultural dining experiences."
        />

        <meta
          name="keywords"
          content="HabeshaBet gallery, Ethiopian restaurant photos, Addis Ababa restaurant images, Ethiopian food gallery, restaurant interior Ethiopia"
        />

        <meta property="og:title" content="HabeshaBet Restaurant Gallery" />
        <meta
          property="og:description"
          content="Discover our food, drinks, and restaurant atmosphere in Addis Ababa."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="gallery-page">
        <GalleryHero />

        <section
          className="gallery-content"
          aria-labelledby="gallery-title"
        >
          

          <FilterBtns
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <GalleryCards selectedCategory={selectedCategory} />
        </section>
      </main>
    </>
  );
};

export default GalleryPage;