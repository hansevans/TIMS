import Card from "../components/cards/Card";
import NetworkChart from "../components/charts/NetworkChart";
import DeviceStatus from "../components/dashboard/DeviceStatus";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400">
          Telecom Infrastructure Management System
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Active Towers"
          value="25"
          status="All Online"
        />

        <Card
          title="Online Devices"
          value="148"
          status="Healthy"
        />

        <Card
          title="Active Alarms"
          value="3"
          status="Attention"
        />

        <Card
          title="Battery SOC"
          value="92%"
          status="Charging"
        />

      </div>

      {/* Chart + Device Status */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-white">
            Network Performance
          </h2>

          <NetworkChart />
        </div>

        <DeviceStatus />

      </div>

      {/* Recent Alarms */}
      <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">
          Recent Alarms
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="pb-3">Tower</th>
              <th className="pb-3">Alarm</th>
              <th className="pb-3">Severity</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-3">Tower 01</td>
              <td>Battery Voltage Low</td>
              <td className="text-red-400">Critical</td>
            </tr>

            <tr className="border-b border-slate-700">
              <td className="py-3">Tower 07</td>
              <td>High Temperature</td>
              <td className="text-yellow-400">Warning</td>
            </tr>

            <tr>
              <td className="py-3">Tower 12</td>
              <td>Router Offline</td>
              <td className="text-red-400">Critical</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}