import ToDoList from "./Components/ToDoList";
import Button from "./Components/Button/Button";
import "./App.css";
import Input from "./Components/Input";
import Form from "./Components/Form/Form";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [listArray, setListArray] = useState([]);

  const onInputChange = (event) => {
    event.preventDefault();
    setListArray(()=> [...listArray, input]);
    console.log(listArray);
  };

  return (
    <div className="App">
      <ToDoList>
        <ul className="todo-list-list">
          
          {listArray.map((el, index) =>
              <li key={index} className="todo-list-item">
                {el}
              </li>
            )}
        </ul>
      </ToDoList>
      <Form onSubmit={onInputChange}>
        <Input placeholder="aggiungi qualcosa alla lista" setInput={setInput} />
        <Button textContent="+" />
      </Form>
    </div>
  );
}

export default App;
