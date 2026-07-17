import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
  datasets: [
    {
      label: "Network Usage (%)",
      data: [35, 48, 70, 62, 81, 55],
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function NetworkChart() {
  return <Line data={data} options={options} />;
}