import React from 'react';
import { useState } from 'react';
import Expense from './Expense';

function ExpenseList(props) {
    const [expenses, setExpenses] = useState([]);
    const [currKey, setCurrKey] = useState(0);

    function submitHandler(e) {
        e.preventDefault();
    }

    function clickHandler() {
        setExpenses([...expenses, {title: 'Title', type: 'Other', amount: '0.00', key: currKey}]);
        setCurrKey(currKey + 1);
    }

    function updateExpenses(key, title, type, amount) {
        for (const item of expenses) {
            if (item.key === key) {
                item.title = title;
                item.type = type;
                item.amount = amount;
                console.log(item);
                break;
            }
        }
        props.getExpenses(expenses);
    }

    return (
        <form onSubmit={submitHandler} className="expense-list container mt-5">
            <label>Expense List</label>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {expenses.map(expense => (<Expense
                        title={expense.title}
                        type={expense.type}
                        amount={expense.amount}
                        componentKey={expense.key}
                        updateExpenses={updateExpenses}
                        key={expense.key} />
                        ))}

                    <tr className='table-expenses'>
                        <td className="add-new-row">
                            <button onClick={clickHandler} type="submit" className="btn add-new-btn">+ Add New</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default ExpenseList;