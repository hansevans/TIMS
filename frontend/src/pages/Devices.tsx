import { devices } from "../data/devices";

export default function Devices() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Devices
        </h1>

        <p className="text-slate-400">
          Monitor all connected telecom devices
        </p>
      </div>

      {/* Device Table */}
      <div className="overflow-hidden rounded-xl bg-slate-800 shadow-lg">
        <table className="min-w-full text-left">

          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="px-6 py-4">Device</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Last Seen</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((device) => (
              <tr
                key={device.id}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                <td className="px-6 py-4 text-white">
                  {device.name}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {device.type}
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    device.status === "online"
                      ? "text-green-400"
                      : device.status === "warning"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  ● {device.status}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {device.ip ?? "-"}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {device.location ?? "-"}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {device.lastSeen ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}