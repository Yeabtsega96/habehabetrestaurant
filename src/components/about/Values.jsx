import "./Values.css";
import Card from "../Card";

import { FiAward, FiUsers } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { CiStar } from "react-icons/ci";

const values = [
  {
    title: "Authenticity",
    description:
      "Every recipe honors traditional methods and flavors passed down through generations.",
    icon: FiAward,
  },
  {
    title: "Fresh Ingredients",
    description:
      "We source spices from Mercato Market and vegetables from local farms daily.",
    icon: LuLeaf,
  },
  {
    title: "Community",
    description:
      "Sharing food is the Ethiopian way. Every table is a gathering, every meal a ceremony.",
    icon: FiUsers,
  },
  {
    title: "Excellence",
    description:
      "From service to flavor, we hold ourselves to a standard worthy of our heritage.",
    icon: CiStar,
  },
];

const Values = () => {
  return (
    <section
      className="values-section"
      aria-labelledby="values-title"
    >
      <h2 id="values-title">
        Our Values
      </h2>

      <hr className="values-divider" />

      <div className="cards">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <Card className="value-card" key={value.title}>
              <span
                className="icon-span"
                aria-hidden="true"
              >
                <Icon className="icon" />
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Values;