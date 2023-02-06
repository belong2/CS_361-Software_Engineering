import Overview from './Overview';
import ExpenseBreakdown from './ExpenseBreakdown';
import Chart from './Chart';
import ExpenseList from './ExpenseList';


function Budget() {
    return(
        <div className='container'>
            <h1 className='h1 budget-header mt-5'>Budget Dashboard</h1>
            <div className='container budget-wrapper d-flex justify-content-around mt-5'>
                <Overview />
                <ExpenseBreakdown />
                <Chart />
            </div>
            <ExpenseList />
        </div>
    )
}

export default Budget;