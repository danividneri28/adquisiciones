import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    
    datasets: [
        {
            data: [33,33, 33],
            backgroundColor: [
                'rgb(247, 147, 30)',
                'rgb(237, 28, 36)',
                'rgb(252, 238, 33)',
                
            ]
        },
    ],

};



export default function Procedimientos() {
    return <Pie data={data} options={options} />
}

