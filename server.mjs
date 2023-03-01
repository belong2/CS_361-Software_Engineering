import express from 'express';
import child_process from 'child_process';

const app = express()

app.use(express.static('/static'))

app.get(
    '/transportation/:transportation/lodging/:lodging/food/:food/entertainment/:entertainment/other/:other',
    (req,res) => {
        console.log("received request!");
        const transportation = req.params.transportation;
        const lodging = req.params.lodging;
        const food = req.params.food;
        const entertaiment = req.params.entertainment;
        const other = req.params.other;

        child_process.exec(
            `py PieChartGenerator.py Transportation,${transportation} Lodging,${lodging} Food,${food} Entertainment,${entertaiment} Other,${other}`
        );

        console.log("Program Ran");

        res.status(200);
        res.send();
})


app.listen(8080, () => {
    console.log("app is listening on port 8080");
})