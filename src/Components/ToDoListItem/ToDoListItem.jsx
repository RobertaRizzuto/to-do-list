import "./index.css";

const ToDoListItem = ({ children, id }) => {
  return (
    <li className="to-do-list-item" id={id}>
      {children}
    </li>
  );
};

export default ToDoListItem;
