import React from 'react';
import { useState } from 'react';

function Chart() {
    const imgURL = "BudgetPieChart_output.png";

    let imageObjectURL;
    fetch(imgURL)
    .then(response => response.blob())
    .then(imageBlob => {
        // Then create a local URL for that image and print it 
        imageObjectURL = URL.createObjectURL(imageBlob);
    })

    return (
        <div className="overview container budget-container p-4">
            <img src={imageObjectURL} alt="budget chart" />
        </div>
    )
}

export default Chart;