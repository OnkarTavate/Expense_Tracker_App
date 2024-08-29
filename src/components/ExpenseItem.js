// function ExpenseItem(){}
import { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import"./ExpenseItem.css"
let ExpenseItem = (props) => {
    // let Title = props.expTitle
   let[Title, setTitle] = useState(props.expTitle)
    let btnhandler = () => {
        console.log("Button Clicked..!")
        setTitle("updated Title")
    }

    return (
        
        <div className="expense-item">
           <div>
            <ExpenseDate expDate = {props.expDate}/>
            </div>          
    
           <div className="expense-item__description">
               <h2>{Title}</h2>
               <p className="expense-item__price">Rs {props.expAmount}</p>
           </div>
           <button onClick={btnhandler}>Change Title</button>
       </div>
    )
}

export default ExpenseItem