'use client'

import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend, ArcElement );

const data = {
  backgroundColor: [
    "rgb(59 130 246)",
    "rgb(147 197 253)",
    "rgb(99 102 241)",
    "rgb(96 165 250)",
  ],
  labels: ["First Year", "Second Year", "Third Year", "Fourth Year"],
  datasets: [
    {
      label: "Visits",
      data: [300, 50, 100, 300],
      backgroundColor: [
        "rgb(59 130 246)",
        "rgb(147 197 253)",
        "rgb(99 102 241)",
        "rgb(96 165 250)",
      ],
      hoverOffset: 5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      }
    },
  },
  elements: {
    arc: {
      weight: 0.5,
      borderWidth: 0,
    },
  },
  cutout: 80,
  maintainAspectRatio: false,
  responsive: true,
};

const Chart = () => {
  return (
    <Doughnut data={data} width={20} height={20} options={options} />
  )
}

export default Chart