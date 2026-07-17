interface DevicePanelProps {
  device: {
    label: string;
    status: string;
    ip?: string;
    temperature?: string;
    battery?: string;
  } | null;
}

export default function DevicePanel({
  device,
}: DevicePanelProps) {

  if (!device) {
    return (
      <div className="rounded-xl bg-slate-800 p-6 text-slate-400">
        Select a device to view details
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-800 p-6 text-white">

      <h2 className="text-xl font-bold mb-4">
        {device.label}
      </h2>

      <div className="space-y-3">

        <p>
          Status:
          <span className="ml-2 text-green-400">
            {device.status}
          </span>
        </p>

        {device.ip && (
          <p>
            IP Address:
            <span className="ml-2">
              {device.ip}
            </span>
          </p>
        )}

        {device.temperature && (
          <p>
            Temperature:
            <span className="ml-2">
              {device.temperature}
            </span>
          </p>
        )}

        {device.battery && (
          <p>
            Battery:
            <span className="ml-2">
              {device.battery}
            </span>
          </p>
        )}

      </div>

    </div>
  );
}