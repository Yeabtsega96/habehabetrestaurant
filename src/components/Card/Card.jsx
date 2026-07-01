import "./card.css"


const Card = ({
  children,
  className,
  onClick,
  hover = true,
  shadow = "md"
}) => {
  return (
    <div 
      className={
        `card 
         card-shadow-${shadow}  
         ${hover ? "card-hover" : ""}
         ${className}`
      }
      onClick={onClick}
      >
      {children}
    </div>
  )
}

export default Card