import Button from "../Button"
import "./gallery.css"

const FilterBtns = ({selectedCategory, setSelectedCategory}) => {
  return (
    <section className="filter-btns">
      <Button 
        variant={"secondary"} 
        size={"md"} 
        className={selectedCategory === 'all' ? 'active' : ''}
        onClick={() => setSelectedCategory('all')}
      >
        All
      </Button>
      <Button 
        variant={"secondary"} 
        size={"md"} 
        className={selectedCategory === 'food' ? 'active' : ''}
        onClick={() => setSelectedCategory('food')}
      >
        Food
      </Button>
      <Button 
        variant={"secondary"} 
        size={"md"} 
        className={selectedCategory === 'interior' ? 'active' : ''}
        onClick={() => setSelectedCategory('interior')}
      >
        Interior
      </Button>
      <Button 
        variant={"secondary"} 
        size={"md"} 
        className={selectedCategory === 'drinks' ? 'active' : ''}
        onClick={() => setSelectedCategory('drinks')}
      >
        Drinks
      </Button>
      <Button 
        variant={"secondary"} 
        size={"md"} 
        className={selectedCategory === 'events' ? 'active' : ''}
        onClick={() => setSelectedCategory('events')}
      >
        Events
      </Button>
    </section>
  )
}

export default FilterBtns