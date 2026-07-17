export default function SystemStatus() {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4 shadow-lg">
      <div>
        <h2 className="text-xl font-bold text-white">
          Telecom Infrastructure Status
        </h2>

        <p className="text-slate-400">
          Last updated: Just now
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <span className="font-semibold text-green-400">
          All Systems Operational
        </span>
      </div>
    </div>
  );
}