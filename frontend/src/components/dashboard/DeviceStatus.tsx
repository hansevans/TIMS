const devices = [
  { name: "Router A", status: "Online" },
  { name: "Router B", status: "Online" },
  { name: "Tower 01", status: "Online" },
  { name: "Tower 07", status: "Offline" },
  { name: "ESP32 Gateway", status: "Online" },
];

export default function DeviceStatus() {
  return (
    <div className="rounded-xl bg-slate-800 p-6">
      <h2 className="mb-4 text-xl font-bold text-white">
        Device Status
      </h2>

      <div className="space-y-3">
        {devices.map((device) => (
          <div
            key={device.name}
            className="flex items-center justify-between border-b border-slate-700 pb-2"
          >
            <span className="text-white">
              {device.name}
            </span>

            <span
              className={
                device.status === "Online"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              ● {device.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}