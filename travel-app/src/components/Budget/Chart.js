function Chart() {
    return (
        <div className="overview container budget-container p-4">
            <form className="bg-white">
                <fieldset>
                    <label htmlFor='inputBudget' className="form-label overview-label">My Budget</label>
                    <input type="number" id="inputBudget" min="500" max="500000" step="500" className="form-control"></input>
                </fieldset>
            </form>
        </div>
    )
}

export default Chart;