import "./index.css";

const Input = ({ placeholder, setInputValue, type }) => {
  const onChange = (e) =>
     setInputValue(e.target.value.trim());
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
