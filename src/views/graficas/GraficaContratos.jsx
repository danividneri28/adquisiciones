import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';

ChartJS.register(ArcElement);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Entregables','Contratos' ],
   
    datasets: [
        {
            data: [50,50],
            backgroundColor: [
               'rgb(63, 169, 245)',
               'rgb(73, 120, 201)'
                
            ]
        },
    ],

};



export default function Contratos() {
    return <Pie data={data} options={options} />
}

