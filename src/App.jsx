import ToDoList from "./Components/ToDoList";
import Button from "./Components/Button/Button";
import "./App.css";
import Input from "./Components/Input";
import Form from "./Components/Form/Form";
import { useState } from "react";
import ToDoListItem from "./Components/ToDoListItem";

function App() {
  const [input, setInput] = useState("");
  const [listArray, setListArray] = useState([]);

  const onInputChange = (event) => {
    event.preventDefault();
    setListArray(() => [...listArray, input]);
    console.log(listArray);
  };

  return (
    <div className="App">
      <ToDoList>
        {listArray.map((el, index) => (
          <ToDoListItem key={index}>
            <Input type="checkbox" /> <span>{el}</span>
          </ToDoListItem>
        ))}
      </ToDoList>
      <Form onSubmit={onInputChange}>
        <Input placeholder="aggiungi qualcosa alla lista" setInput={setInput} />
        <Button textContent="+" />
      </Form>
    </div>
  );
}

export default App;
