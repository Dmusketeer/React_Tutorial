import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [pickDate, setPickDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     pickDate: ''
    // });

    const titieChangeHandler = (event) => {
        // console.log(event);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // updating states that depends on the previous state.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // })
    }

    const dateChangeHandler = (event) => {
        setPickDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(pickDate)
        }
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setPickDate('')


    }
    return (
        <div>
            <form className="new-expense__controls" onSubmit={submitHandler}>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titieChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min=" 2019-01-01" max="2022-12-31" value={pickDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </form>
        </div >
    )
}

