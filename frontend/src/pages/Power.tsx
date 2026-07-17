import Card from "../components/cards/Card";
import NetworkChart from "../components/charts/NetworkChart";

export default function Power() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Power Monitoring
        </h1>

        <p className="text-slate-400">
          Monitor telecom site power sources
        </p>
      </div>

      {/* Power Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Grid"
          value="ON"
          status="Healthy"
        />

        <Card
          title="Battery"
          value="91%"
          status="Charging"
        />

        <Card
          title="Solar"
          value="2.4 kW"
          status="Healthy"
        />

        <Card
          title="Generator"
          value="OFF"
          status="Standby"
        />

      </div>

      {/* Chart */}
      <div className="rounded-xl bg-slate-800 p-6 shadow-lg">

        <h2 className="mb-4 text-xl font-bold text-white">
          Power Usage History
        </h2>

        <NetworkChart />

      </div>

    </div>
  );
}