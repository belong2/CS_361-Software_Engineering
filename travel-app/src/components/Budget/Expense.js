import React from "react";
import { useState } from "react";

function Expense(props) {
    const [title, setTitle] = useState(props.title);
    const [type, setType] = useState(props.type);
    const [amount, setAmount] = useState(props.amount);

    function changeTitleHandler(e) {
        setTitle(e.target.value);
        props.updateExpenses(props.componentKey, title, type, amount);
    }

    function changeTypeHandler(e) {
        setType(e.target.value);
        props.updateExpenses(props.componentKey, title, type, amount);
    }

    function changeAmountHandler(e) {
        setAmount(e.target.value);
        props.updateExpenses(props.componentKey, title, type, amount);
    }

    return(
        <tr className="expense">
            <td>
                <input onChange={changeTitleHandler} type="text" className="form-control" />
            </td>
            <td>
                <select onChange={changeTypeHandler} className="form-control">
                    <option value="Transportation">
                        Transportation
                    </option>
                    <option value="Lodging">
                        Lodging
                    </option>
                    <option value="Food">
                        Food
                    </option>
                    <option value="Entertainment">
                        Entertainment
                    </option>
                    <option value="Other">
                        Other
                    </option>
                </select>
            </td>
            <td>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input onChange={changeAmountHandler} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">.00</span>
                </div>
            </td>
            <td>
                <button className="btn edit-btn">Edit</button>
            </td>
            <td>
                <button className="btn delete-btn">Delete</button>
            </td>
        </tr>
    )
}

export default Expense;