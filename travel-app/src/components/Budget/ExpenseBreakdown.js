function ExpenseBreakdown() {
    return (
        <div className="overview container budget-container p-4">
            <form className="bg-white">
                <label className="form-label overview-label h4">Expense Breakdown</label>
                <hr></hr>
                <fieldset>
                    <label htmlFor='inputBudget' className="form-label overview-label">My Budget</label>
                    <input disabled value="500" type="number" id="inputBudget" min="500" max="500000" step="500" className="form-control"></input>
                </fieldset>
            </form>
        </div>
    )
}

export default ExpenseBreakdown;