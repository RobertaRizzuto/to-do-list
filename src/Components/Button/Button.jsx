import './index.css';

const Button = ({textContent, onClick, className, id}) => {
  return (
    <button onClick={onClick} id={id} className={className}>{ textContent }</button>
  )
}

export default Button;