import './App.css';
// import ExpenseItem from './components/ExpenseItem';
// import moduleName from './components/ExpenseForm';
import Expenses from './components/Expenses';
import React, { useState } from 'react';
import NewExpense from './components/NewExpenses';
const DUMMY_EXP = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXP);
  const addExpenseHandler = (expense) => {
    setExpenses(preExpenses => {
      return [expense, ...preExpenses]
    })

  }


  return (
    <div className="App">
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
