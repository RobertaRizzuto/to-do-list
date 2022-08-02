
import "./index.css"


const ToDoListItem =({children})=>{

    return (
        
            <li className="to-do-list-item">
              {children}
            </li>
          )
    
}

export default ToDoListItem;