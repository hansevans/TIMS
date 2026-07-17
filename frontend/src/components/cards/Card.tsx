interface CardProps {
  title: string;
  value: string;
  status: string;
}

export default function Card({
  title,
  value,
  status,
}: CardProps) {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "healthy":
      case "all online":
      case "charging":
        return "text-green-400";

      case "attention":
      case "warning":
        return "text-yellow-400";

      case "critical":
        return "text-red-400";

      default:
        return "text-cyan-400";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:border-cyan-500 hover:shadow-cyan-900/20">
      <h3 className="text-sm text-slate-400">
        {title}
      </h3>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className={`mt-4 font-semibold ${getStatusColor()}`}>
        ● {status}
      </p>
    </div>
  );
}