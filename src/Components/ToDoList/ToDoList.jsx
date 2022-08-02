
import "./index.css"


const ToDoList =({children})=>{

    return (<div className="to-do-list-container">
        <ul className="to-do-list">
          {children}
        </ul></div>
    )
}

export default ToDoList;