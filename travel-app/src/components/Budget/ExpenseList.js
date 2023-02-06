import React from 'react';
import { useState } from 'react';

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler} className="expense-list container">
            <label></label>
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
                    <tr className='table-expenses'>
                        <td className="add-new-row">
                            <button type="submit" className="btn add-new-btn">+ Add New</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default ExpenseList;