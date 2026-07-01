import "./Features.css";

import Card from "../Card";

import { FiWifi, FiCoffee } from "react-icons/fi";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { LuLeaf, LuUsers } from "react-icons/lu";

const features = [
  {
    id: 1,
    icon: <FiWifi aria-hidden="true" className="icon" />,
    title: "Free Wi-Fi",
  },
  {
    id: 2,
    icon: <LiaCarSideSolid aria-hidden="true" className="icon" />,
    title: "Parking",
  },
  {
    id: 3,
    icon: <LuUsers aria-hidden="true" className="icon" />,
    title: "Family Friendly",
  },
  {
    id: 4,
    icon: <LuLeaf aria-hidden="true" className="icon" />,
    title: "Clean Environment",
  },
  {
    id: 5,
    icon: <MdPayment aria-hidden="true" className="icon" />,
    title: "Card Payment",
  },
  {
    id: 6,
    icon: <FiCoffee aria-hidden="true" className="icon" />,
    title: "Traditional Coffee Ceremony",
  },
];

const Features = () => {
  return (
    <section
      className="features-section"
      aria-labelledby="features-title"
    >
      <p className="sub-tagline">At HabeshaBet</p>

      <h2 id="features-title">Restaurant Features</h2>

      <hr className="hr" />

      <div className="features-cards">
        {features.map((feature) => (
          <Card className="features-card" key={feature.id}>
            <span className="icon-span">
              {feature.icon}
            </span>

            <h3>{feature.title}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;