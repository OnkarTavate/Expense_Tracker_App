import { useState } from 'react'
import './ExpenseForm.css'


let ExpenseForm = (props) => {

    let[inTitle,setTitle] = useState(" ")
    let[inAmount,setAmount] = useState(0)
    let[inDate,setDate] = useState(0)

    let onTitleChangeHandler = (event) => {
        // console.log(event.target.value)
        setTitle(event.target.value)
    }


    let onAmountChangeHandler = (event) => {
        // console.log(event.target.value)
        setAmount(event.target.value)
    }


    let onDateChangeHandler = (event) => {
        // console.log(event.target.value)
        setDate(event.target.value)
    }

    let onSubmitHandler = (event) => {
        event.preventDefault() // supressing the default feature of submit
        // use the form data to create a json object

        let expenseData = {expTitle:inTitle, expAmount:inAmount, expDate:new Date(inDate)}
        console.log(expenseData)
        props.onData(expenseData)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input onChange={onTitleChangeHandler}/>
               </div> 
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number"  onChange={onAmountChangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" min="2019-01-01" max="2022-12-31" 
                          onChange={onDateChangeHandler} />
               </div>
            </div>
            <div className="new-expense__actions">
                <button type="button"  >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>


    )
}


export default ExpenseForm









