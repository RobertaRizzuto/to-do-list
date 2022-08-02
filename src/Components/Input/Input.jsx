import "./index.css";

const Input = ({ placeholder, setInput,type }) => {
  const onChange = (e) => setInput(e.target.value); 
  return (
    <input type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
