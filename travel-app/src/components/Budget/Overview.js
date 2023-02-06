import React from 'react';
import { useState, useEffect } from 'react';

function Overview(props) {
    const [budget, setBudget] = useState(500);
    function changeHandler(e) {
        setBudget(parseInt(e.target.value));
    }


    return(
            <div className="overview container budget-container p-4">
                <form className="bg-white">
                    <label className="form-label overview-label h4">Budget Overview</label>
                    <hr></hr>
                    <fieldset>
                        <label htmlFor='inputBudget' className="form-label overview-label">My Budget</label>
                        <input value={budget.toString()} onChange={changeHandler} type="number" size="0.5" id="inputBudget" min="500" max="500000" step="500" className="form-control"></input>
                        
                        <label htmlFor='totalExpenses' className="form-label overview-label">Total Expenses</label>
                        <input disabled value="0" type="number" size="0.5" id="totalExpenses" className="form-control"></input>

                        <label htmlFor="difference" className="form-label overview-label">Difference</label>
                        <input disabled value="0" type="number" size="0.5" id="difference" className="form-control"></input>
                    </fieldset>
                </form>
            </div>
    )
}

export default Overview;