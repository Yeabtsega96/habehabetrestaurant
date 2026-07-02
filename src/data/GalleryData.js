// src/data/GalleryData.js

import restaurantView1 from "../assets/images/restaurant-view-1.webp";
import restaurantView2 from "../assets/images/restaurant-view-2.webp";

import dorowet from "../assets/images/dorowet-img.avif";
import kitfo from "../assets/images/kitfo-img.jpg";
import tibs from "../assets/images/tibs.jpg";
import misirWot from "../assets/images/misir-wot.jpg";
import shiroWot from "../assets/images/shiro-wot.jpg";
import gomenWot from "../assets/images/gomen-wot.avif";
import tikilGomen from "../assets/images/tikl-gomen.jpg";
import zilzilTibs from "../assets/images/zilzil-tbs.jpg";
import kitfoSpecial from "../assets/images/kitfo-special.jpg";
import lambTibs from "../assets/images/lamb-tibs.jpg";
import beefStew from "../assets/images/beef-stew.jpg";

import coffee from "../assets/images/eth-coffee.jpg";
import tej from "../assets/images/teg.jpg";
import tejSpecial from "../assets/images/teg-special.jpg";
import freshJuice from "../assets/images/fresh-juice.jpg";

const galleryData = [
  // Restaurant
  {
    id: 1,
    image: restaurantView1,
    title: "Restaurant Interior",
    category: "interior",
  },
  {
    id: 2,
    image: restaurantView2,
    title: "Dining Area",
    category: "interior",
  },

  // Traditional Food
  {
    id: 3,
    image: dorowet,
    title: "Doro Wat",
    category: "food",
  },
  {
    id: 4,
    image: kitfo,
    title: "Kitfo",
    category: "food",
  },
  {
    id: 5,
    image: tibs,
    title: "Tibs",
    category: "food",
  },
  {
    id: 6,
    image: misirWot,
    title: "Misir Wot",
    category: "food",
  },
  {
    id: 7,
    image: shiroWot,
    title: "Shiro Wot",
    category: "food",
  },
  {
    id: 8,
    image: gomenWot,
    title: "Gomen",
    category: "food",
  },
  {
    id: 9,
    image: tikilGomen,
    title: "Tikil Gomen",
    category: "food",
  },
  {
    id: 10,
    image: zilzilTibs,
    title: "Zilzil Tibs",
    category: "food",
  },
  {
    id: 11,
    image: kitfoSpecial,
    title: "Kitfo Special",
    category: "food",
  },
  {
    id: 12,
    image: lambTibs,
    title: "Lamb Tibs",
    category: "food",
  },
  {
    id: 13,
    image: beefStew,
    title: "Beef Stew",
    category: "food",
  },

  // Drinks
  {
    id: 14,
    image: coffee,
    title: "Ethiopian Coffee",
    category: "drinks",
  },
  {
    id: 15,
    image: tej,
    title: "Tej",
    category: "drinks",
  },
  {
    id: 16,
    image: tejSpecial,
    title: "Tej Special",
    category: "drinks",
  },
  {
    id: 17,
    image: freshJuice,
    title: "Fresh Juice",
    category: "drinks",
  },
  
];

export default galleryData;