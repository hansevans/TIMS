import { alarms } from "../../data/alarms";

type AlarmCardProps = {
  title: string;
  value: number;
  color: string;
};

function AlarmCard({ title, value, color }: AlarmCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-slate-400">{title}</h3>

      <p className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default function AlarmStats() {
  const critical = alarms.filter(
    (alarm) => alarm.severity === "critical"
  ).length;

  const warning = alarms.filter(
    (alarm) => alarm.severity === "warning"
  ).length;

  const info = alarms.filter(
    (alarm) => alarm.severity === "info"
  ).length;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <AlarmCard
        title="Critical"
        value={critical}
        color="text-red-500"
      />

      <AlarmCard
        title="Warning"
        value={warning}
        color="text-yellow-400"
      />

      <AlarmCard
        title="Information"
        value={info}
        color="text-blue-400"
      />
    </div>
  );
}