import type { NodeProps } from "reactflow";

interface DeviceData {
  label: string;
  status: "online" | "warning" | "offline";
}

export default function DeviceNode({
  data,
}: NodeProps<DeviceData>) {

  const statusColor = {
    online: "bg-green-500",
    warning: "bg-yellow-500",
    offline: "bg-red-500",
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 shadow-lg">

      <div className="flex items-center gap-3">

        <span
          className={`h-3 w-3 rounded-full ${statusColor[data.status]}`}
        />

        <span className="font-semibold text-white">
          {data.label}
        </span>

      </div>

    </div>
  );
}