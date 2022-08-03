import ToDoList from "./Components/ToDoList";
import Button from "./Components/Button/Button";
import "./App.css";
import Input from "./Components/Input";
import Form from "./Components/Form/Form";
import { useState } from "react";
import ToDoListItem from "./Components/ToDoListItem";

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const [listArray, setListArray] = useState([]);

  const onInputValueChange = (event) => {
    event.preventDefault();
    inputValue && setListArray([...listArray, inputValue]);
    // setInputValue("");  
    // senza si popola ad input vuoto, con non si popola con stringhe lunghe 1 uguali tra loro
    event.target.reset();
    
  };
  const onCancelClick = (e) => {
    listArray.splice(e.target.id, 1);
    
    setInputValue(!inputValue);
  };
  console.log(listArray);
  return (
    <div className="App">
      <ToDoList>
        {listArray.map((el, index) => (
          <ToDoListItem key={index} id={index}>
            <div>
              <Input type="checkbox" /> <span>{el}</span>
            </div>
            <Button
              textContent="x"
              id={index}
              className="togli"
              onClick={onCancelClick}
            />
          </ToDoListItem>
        ))}
      </ToDoList>
      <Form onSubmit={onInputValueChange}>
        <Input
          placeholder="aggiungi qualcosa alla lista"
          setInputValue={setInputValue}
        />
        <Button textContent="+" className="aggiungi" />
      </Form>
    </div>
  );
}

export default App;
