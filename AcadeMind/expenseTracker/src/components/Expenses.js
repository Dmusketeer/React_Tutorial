import './Expenses.css';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';
function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');
    const onChangeFilter = (selectYear) => {
        setFilterYear(selectYear);
    }
    const filteredExpenses = props.item.filter(expenses => {
        return expenses.date.getFullYear().toString() === filterYear;
    })

    return (
        <div className="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={onChangeFilter} />
            {filteredExpenses.map((expenses) => (
                <ExpenseItem
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))}
        </div>
    )
}
export default Expenses;