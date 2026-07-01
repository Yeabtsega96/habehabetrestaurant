import kitfo from "../assets/images/kitfo-img.jpg"
import Dorowot from "../assets/images/dorowet-img.avif"
import Tibs from "../assets/images/tibs.jpg"
import MisirWot from "../assets/images/misir-wot.jpg"
import ShiroWot from "../assets/images/shiro-wot.jpg"
import Gomen from "../assets/images/gomen-wot.avif"
import TikilGomen from "../assets/images/tikl-gomen.jpg"
import ZilzilTbs from "../assets/images/zilzil-tbs.jpg"
import KitfoSpecial from "../assets/images/kitfo-special.jpg"
import LambTibs from "../assets/images/lamb-tibs.jpg"
import BeefStew from "../assets/images/beef-stew.jpg"
import EthCoffee from "../assets/images/eth-coffee.jpg"
import Tej from "../assets/images/teg.jpg"
import TejSpecial from "../assets/images/teg-special.jpg"
import FreshJuice from "../assets/images/fresh-juice.jpg"


const menuData = [
  {
    id: 1,
    name: "Doro Wat",
    description:
      "Slow-cooked chicken in rich berbere spice sauce, served on injera.",
    price: 180,
    category: "traditional",
    popular: true,
    image: Dorowot,
  },
  {
    id: 2,
    name: "Kitfo",
    description:
      "Ethiopian-style minced beef seasoned with mitmita and kibbe butter.",
    price: 220,
    category: "traditional",
    popular: true,
    image: kitfo,
  },
  {
    id: 3,
    name: "Tibs",
    description:
      "Pan-fried beef with vegetables and Ethiopian spices.",
    price: 200,
    category: "traditional",
    popular: false,
    image: Tibs,
  },
  // {
  //   id: 4,
  //   name: "Injera Combo",
  //   description:
  //     "Assorted stews on injera — the classic Ethiopian sharing platter.",
  //   price: 150,
  //   category: "traditional",
  //   popular: true,
  //   image: "../assets/images/injera-combo.jpg",
  // },

  // Vegetarian
  {
    id: 5,
    name: "Misir Wot",
    description:
      "Red lentils simmered in spiced berbere sauce, rich and hearty.",
    price: 120,
    category: "vegetarian",
    popular: true,
    image: MisirWot,
  },
  {
    id: 6,
    name: "Shiro",
    description:
      "Ground chickpea flour stew, velvety and deeply spiced.",
    price: 110,
    category: "vegetarian",
    popular: false,
    image: ShiroWot,
  },
  {
    id: 7,
    name: "Gomen",
    description:
      "Collard greens sautéed with garlic, ginger, and Ethiopian spices.",
    price: 100,
    category: "vegetarian",
    popular: false,
    image: Gomen,
  },
  {
    id: 8,
    name: "Tikil Gomen",
    description:
      "Cabbage and carrots cooked with turmeric and mild spices.",
    price: 90,
    category: "vegetarian",
    popular: false,
    image: TikilGomen,
  },

  // Meat
  {
    id: 9,
    name: "Zilzil Tibs",
    description:
      "Strips of tender beef, pan-seared with rosemary and jalapeño.",
    price: 250,
    category: "meat",
    popular: true,
    image: ZilzilTbs,
  },
  {
    id: 10,
    name: "Kitfo Special",
    description:
      "Premium minced beef with ayib fresh cheese and gomen greens.",
    price: 280,
    category: "meat",
    popular: false,
    image: KitfoSpecial,
  },
  {
    id: 11,
    name: "Lamb Tibs",
    description:
      "Succulent lamb pieces sautéed with onions and hot peppers.",
    price: 240,
    category: "meat",
    popular: true,
    image: LambTibs
  },
  {
    id: 12,
    name: "Beef Stew",
    description:
      "Slow-braised beef in aromatic spiced sauce over spongy injera.",
    price: 200,
    category: "meat",
    popular: false,
    image: BeefStew,
  },

  // Drinks
  {
    id: 13,
    name: "Ethiopian Coffee",
    description:
      "Traditional jebena buna — three rounds of freshly roasted coffee.",
    price: 60,
    category: "drinks",
    popular: true,
    image: EthCoffee,
  },
  {
    id: 14,
    name: "Tej (Honey Wine)",
    description:
      "Traditional Ethiopian honey mead, lightly fermented and sweet.",
    price: 80,
    category: "drinks",
    popular: true,
    image: Tej,
  },
  {
    id: 15,
    name: "Tej Special",
    description:
      "Aged honey wine with a deeper, richer flavor profile.",
    price: 100,
    category: "drinks",
    popular: false,
    image: TejSpecial,
  },
  {
    id: 16,
    name: "Fresh Juice",
    description:
      "Seasonal fresh fruit juice — mango, avocado, or passion fruit.",
    price: 50,
    category: "drinks",
    popular: false,
    image: FreshJuice,
  },
];

export default menuData;