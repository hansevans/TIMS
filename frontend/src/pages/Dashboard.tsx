import SystemStatus from "../components/dashboard/SystemStatus";
import DashboardCards from "../components/dashboard/DashboardCards";
import RecentEvents from "../components/tables/RecentEvents";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          TIMS Dashboard
        </h1>

        <p className="text-slate-400">
          Telecom Infrastructure Management System
        </p>
      </div>

      <SystemStatus />

      <DashboardCards />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-white">
            Network Traffic
          </h2>

          <p className="text-slate-400">
            Line chart coming soon...
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-white">
            Power Status
          </h2>

          <p className="text-slate-400">
            Power chart coming soon...
          </p>
        </div>
      </div>

      <RecentEvents />
    </div>
  );
}