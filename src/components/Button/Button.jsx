import "./button.css";


const Button = ({
  children,  
  type = 'button',
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false,
}) => {
  return (
    <button 
      className={
        `btn 
         btn-${variant} 
         btn-${size} 
         ${fullWidth ? 'full-width' : ''} ${className}`} 
         type={type} 
         onClick={onClick} 
         disabled={disabled}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button