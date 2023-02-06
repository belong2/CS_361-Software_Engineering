import Hero from './Hero';
import Description from './Description';
import Card from './Card';

let planTitle = ""
let planText = ""


function Home() {
    return(
        <div>
            <Hero />
            <Description />
            <Card feature="plan" />
            <Card feature="budget" />
            <Card feature="checklist" />
        </div>
    )
}

export default Home;