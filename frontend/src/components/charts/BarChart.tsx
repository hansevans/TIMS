import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
  title: string;
  labels: string[];
  data: number[];
  label: string;
};

export default function BarChart({
  title,
  labels,
  data,
  label,
}: BarChartProps) {
  return (
    <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
      <Bar
        data={{
          labels,
          datasets: [
            {
              label,
              data,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title,
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}