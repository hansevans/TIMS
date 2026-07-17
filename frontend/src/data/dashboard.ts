export interface DashboardStat {
  title: string;
  value: string;
  status?: string;
  color?: string;
}

export const dashboardStats: DashboardStat[] = [
  {
    title: "Telecom Towers",
    value: "24",
    status: "Healthy",
    color: "text-green-400",
  },
  {
    title: "Connected Devices",
    value: "118",
    status: "All Online",
    color: "text-blue-400",
  },
  {
    title: "Active Alarms",
    value: "3",
    status: "Warning",
    color: "text-yellow-400",
  },
  {
    title: "Battery Level",
    value: "92%",
    status: "Charging",
    color: "text-green-400",
  },
];