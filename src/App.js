import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Person from './components/Person';
import MessageComponent from './components/MessageComponent';
import CounterComponent from './components/CounterComponent';
import NewExpense from './components/NewExpense';
import ListComponent from './components/ListComponent';
import { useState } from 'react';

var Dummy_expenses = [
  {id:"1",expDate: new Date(2020,11,11), expTitle:"TV", expAmount:45000},
  {id:"2",expDate: new Date(2021,8,10), expTitle:"Bike", expAmount:300000},
  {id:"3",expDate: new Date(2019,5,10), expTitle:"Mobile", expAmount:25000}
]
function App() {
    let [expenses,setExpenses] = useState(Dummy_expenses)

  const addExpenseHandler = expense => {
    // console.log("In App component ", expense)
    setExpenses(prev => [expense,...prev])
    }

  return (
    <div className="App">
      <ListComponent/>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      
      {expenses.map(expense => 
                       (
                        <ExpenseItem key = {expense.id}
                                    expDate={expense.expDate} 
                                    expTitle={expense.expTitle} 
                                    expAmount={expense.expAmount} />
                       )
                    )
      }



    
      {/* <CounterComponent/> */}
      {/* <ExpenseItem expDate={expenses[0].expDate} expTitle={expenses[0].expTitle} expAmount={expenses[0].expAmount}/>
      <ExpenseItem expDate={expenses[1].expDate} expTitle={expenses[1].expTitle} expAmount={expenses[1].expAmount}/>
      <ExpenseItem expDate={expenses[2].expDate} expTitle={expenses[2].expTitle}  expAmount={expenses[2].expAmount}/> */}
      {/* <Person name="Shreyas"/>
      <Person name="Vinay"/>
      <Person name="Rushi"/>
      <MessageComponent/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
