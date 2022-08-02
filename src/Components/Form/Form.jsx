
import "./index.css"


const Form =({children, onSubmit})=>{

    return (
        <form onSubmit={onSubmit} className="form">
           {children}
        </form>
    )
}

export default Form;