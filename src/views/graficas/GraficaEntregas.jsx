import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: [ 'Facturas', 'Entregas'],
   
    datasets: [
        {
            data: [25,75],
            backgroundColor: [
                'rgb(122,201, 67)',
                'rgb(0,146, 69)',
                
            ]
        },
    ],

};



export default function Entregas() {
    return <Pie data={data} options={options} />
}

