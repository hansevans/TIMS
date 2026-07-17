import { alarms } from "../../data/alarms";

export default function AlarmTable() {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-800 shadow-lg">
      <table className="min-w-full">
        <thead className="bg-slate-900 text-slate-300">
          <tr>
            <th className="px-6 py-4 text-left">Severity</th>
            <th className="px-6 py-4 text-left">Device</th>
            <th className="px-6 py-4 text-left">Message</th>
            <th className="px-6 py-4 text-left">Time</th>
            <th className="px-6 py-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {alarms.map((alarm) => (
            <tr key={alarm.id} className="border-b border-slate-700">
              <td className="px-6 py-4">{alarm.severity}</td>
              <td className="px-6 py-4">{alarm.device}</td>
              <td className="px-6 py-4">{alarm.message}</td>
              <td className="px-6 py-4">{alarm.time}</td>
              <td className="px-6 py-4">
                {alarm.acknowledged ? "Acknowledged" : "Active"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
