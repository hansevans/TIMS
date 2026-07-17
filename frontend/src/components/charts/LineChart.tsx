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

type LineChartProps = {
  title: string;
  labels: string[];
  data: number[];
  label: string;
};

export default function LineChart({
  title,
  labels,
  data,
  label,
}: LineChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <Line data={chartData} options={options} />
    </div>
  );
}