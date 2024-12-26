import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Contrataciones','Requisiciones'],
    datasets: [
        {
            data: [75,25],
            backgroundColor: [
                'rgb(0,146, 69)',
                'rgb(122,201, 67)'
            ]
        },
    ],

};

export default function Requisiciones() {
    return <Pie data={data} options={options} />
}