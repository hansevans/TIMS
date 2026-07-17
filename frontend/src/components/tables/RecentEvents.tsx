import { events } from "../../data/events";

export default function RecentEvents() {
  return (
    <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">
        Recent Events
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 text-left">
            <th className="pb-3 text-slate-400">Time</th>
            <th className="pb-3 text-slate-400">Event</th>
            <th className="pb-3 text-slate-400">Status</th>
          </tr>
        </thead>

        <tbody>
          {events.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-700"
            >
              <td className="py-3 text-white">
                {item.time}
              </td>

              <td className="py-3 text-white">
                {item.event}
              </td>

              <td
                className={`py-3 font-semibold ${
                  item.status === "Success"
                    ? "text-green-400"
                    : item.status === "Warning"
                    ? "text-yellow-400"
                    : "text-blue-400"
                }`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}