import AlarmStats from "../components/cards/AlarmStats";
import AlarmTable from "../components/tables/AlarmTable";

export default function Alarms() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Alarm Center
        </h1>

        <p className="text-slate-400">
          Monitor network alarms across all telecom infrastructure.
        </p>
      </div>

      <AlarmStats />

      <AlarmTable />

    </div>
  );
}