import './index.css';

const Button = ({textContent, onClick}) => {
  return (
    <button onClick={onClick}  className="Button">{ textContent }</button>
  )
}

export default Button;