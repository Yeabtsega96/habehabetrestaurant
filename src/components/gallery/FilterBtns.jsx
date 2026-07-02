import Button from "../Button";
import "./gallery.css";

const categories = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "interior", label: "Interior" },
  { key: "drinks", label: "Drinks" },
  { key: "events", label: "Events" },
];

const FilterBtns = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="filter-btns" aria-label="Gallery filters">
      {categories.map((cat) => (
        <Button
          key={cat.key}
          variant="secondary"
          size="md"
          className={selectedCategory === cat.key ? "active" : ""}
          aria-pressed={selectedCategory === cat.key}
          onClick={() => setSelectedCategory(cat.key)}
        >
          {cat.label}
        </Button>
      ))}
    </section>
  );
};

export default FilterBtns;