import { useState } from "react";
import { Helmet } from "react-helmet-async";

import MenuHero from "../components/menu/MenuHero";
import MenuFilter from "../components/menu/MenuFilter";
import MenuCards from "../components/menu/MenuCards";
import ContactCard from "../components/menu/ContactCard";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');
  return (
    <>
      <Helmet>
        <title>Menu | HabeshaBet Ethiopian Restaurant Addis Ababa</title>

        <meta
          name="description"
          content="Explore the HabeshaBet Restaurant menu in Addis Ababa — traditional Ethiopian dishes like Doro Wat, Kitfo, vegetarian meals, and drinks. Order easily via WhatsApp."
        />

        <meta
          name="keywords"
          content="Ethiopian restaurant menu, HabeshaBet menu, Addis Ababa food menu, doro wat, kitfo, injera, Ethiopian vegetarian food, Ethiopian drinks"
        />

        <meta property="og:title" content="HabeshaBet Menu - Ethiopian Cuisine" />
        <meta
          property="og:description"
          content="Browse authentic Ethiopian dishes and order directly from HabeshaBet Restaurant."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="menu-page">
        

        <MenuHero />

        <MenuFilter
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />

        <MenuCards selectedMenu={selectedMenu} />

        <ContactCard />
      </main>
    </>
  );
};

export default MenuPage;