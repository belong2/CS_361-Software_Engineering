import Overview from './Overview';
import ExpenseBreakdown from './ExpenseBreakdown';
import Chart from './Chart';
import ExpenseList from './ExpenseList';



function Budget() {
    function getExpenses(expenses) {
        let transportation = 0;
        let lodging = 0;
        let food = 0;
        let entertainment = 0;
        let other = 0;

        for (const item of expenses) {
            if (item.type === "Transportation") {
                transportation += item.amount;
            }
            if (item.type === "Lodging") {
                lodging += item.amount;
            }
            if (item.type === "Food") {
                food += item.amount;
            }
            if (item.type === "Entertainment") {
                entertainment += item.amount;
            }
            if (item.type === "Other") {
                other += item.amount;
            }
        }
        console.log("sending API request")
        fetch(`/transportation/${transportation}/lodging/${lodging}/food/${food}/entertainment/${entertainment}/other/${other}`)
        .then(response => console.log(response))
    }

    function changeImage(image, setImage) {
        setImage(fetch("/image"))
    }

    return(
        <div className='container'>
            <h1 className='h1 budget-header mt-5'>Budget Dashboard</h1>
            <div className='container budget-wrapper d-flex justify-content-around mt-5'>
                <Overview />
                <ExpenseBreakdown />
                <Chart changeImage={changeImage} />
            </div>
            <ExpenseList getExpenses={getExpenses} />
        </div>
    )
}

export default Budget;