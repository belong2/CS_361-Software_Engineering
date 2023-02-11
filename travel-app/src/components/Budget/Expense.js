import React from "react";
import { useState } from "react";

function Expense(props) {
    const [title, setTitle] = useState(props.title);
    const [type, setType] = useState(props.type);
    const [amount, setAmount] = useState(props.amount);

    function changeTitleHandler() {

    }

    function changeTypeHandler() {

    }

    function changeAmountHandler() {

    }

    return(
        <tr className="expense">
            <td>
                <input onChange={changeTitleHandler} value={props.title} type="text" className="form-control" />
            </td>
            <td>
                <input onChange={changeTypeHandler} value={props.type} type="text" className="form-control" />
            </td>
            <td>
                <span>$</span><input onChange={changeAmountHandler} value={props.amount} type="number" className="form-control" />
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