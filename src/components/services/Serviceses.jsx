import "./Serviceses.css";

import Card from "../Card";

import { IoRestaurantOutline } from "react-icons/io5";
import { LuTruck, LuPartyPopper } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";

const services = [
  {
    id: 1,
    title: "Dine-In",
    icon: <IoRestaurantOutline className="icon" aria-hidden="true" />,
    description:
      "Sit in our beautifully decorated dining hall and enjoy the full Ethiopian experience with family or friends.",
    items: [
      "Open 7 days a week",
      "Reservation available",
      "Private table options",
    ],
  },
  {
    id: 2,
    title: "Takeaway",
    icon: <IoRestaurantOutline className="icon" aria-hidden="true" />,
    description:
      "Order ahead and pick up your favorite dishes freshly prepared and neatly packed to go.",
    items: [
      "Ready in 20–30 minutes",
      "Eco-friendly packaging",
      "Pre-order online",
    ],
  },
  {
    id: 3,
    title: "Delivery",
    icon: <LuTruck className="icon" aria-hidden="true" />,
    description:
      "Enjoy hot Ethiopian food delivered to your home or office anywhere in Addis Ababa.",
    items: [
      "Covers all Addis Ababa",
      "45–60 minute delivery",
      "Tracked orders",
    ],
  },
  {
    id: 4,
    title: "Catering",
    icon: <LuPartyPopper className="icon" aria-hidden="true" />,
    description:
      "We bring authentic Ethiopian flavors to your event or celebration.",
    items: [
      "Custom menu planning",
      "Full setup & service",
      "50–500+ guests",
    ],
  },
];

const Serviceses = () => {
  return (
    <section
      className="serviceses-section"
      aria-labelledby="services-title"
    >
      <p className="sub-tagline">How We Serve You</p>

      <h2 id="services-title">Our Services</h2>

      <hr className="hr" />

      <div className="serviceses-cards">
        {services.map((service) => (
          <Card key={service.id} className="serviceses-card">
            <span className="icon-span">
              {service.icon}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <ul>
              {service.items.map((item) => (
                <li key={item}>
                  <IoMdCheckmark
                    className="checkmark-icon"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Serviceses;