import "./index.css";

const Input = ({ placeholder, setInput }) => {
  const onChange = (e) => setInput(e.target.value); 
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
