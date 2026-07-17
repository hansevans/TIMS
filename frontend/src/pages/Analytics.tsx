import KpiCard from "../components/cards/KpiCard";
import LineChart from "../components/charts/LineChart";
import { networkTraffic, cpuUsage } from "../data/analytics";
import BarChart from "../components/charts/BarChart";
export default function Analytics() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-slate-400">
          Network performance and infrastructure analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <KpiCard title="Average CPU" value="46%" />
        <KpiCard title="Bandwidth" value="82 Mbps" />
        <KpiCard title="Uptime" value="99.98%" />
        <KpiCard title="Packet Loss" value="0.2%" />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
  <BarChart
    title="CPU Usage"
    label="CPU (%)"
    labels={cpuUsage.map((item) => item.device)}
    data={cpuUsage.map((item) => item.value)}
  />

  <div className="rounded-xl bg-slate-800 p-6 shadow-lg flex items-center justify-center">
    <p className="text-slate-400">
      Power Distribution Chart (Coming Next)
    </p>
  </div>
</div>

      <LineChart
        title="Network Download Traffic"
        label="Download (Mbps)"
        labels={networkTraffic.map((item) => item.time)}
        data={networkTraffic.map((item) => item.download)}
      />

    </div>
  );
}