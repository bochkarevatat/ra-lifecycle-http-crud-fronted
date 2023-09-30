import './grud.css'

type ButtonProps = {
    updateHandler?: () => void,
    
  }
  
  const Button: React.FC<ButtonProps> = ({ updateHandler }) => {
    return (
        <button className='btn' onClick={updateHandler}>
        
      </button>
    )
  }
  
  export default Button