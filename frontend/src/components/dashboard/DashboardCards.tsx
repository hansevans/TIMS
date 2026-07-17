import { dashboardStats } from "../../data/dashboard";
import Card from "../cards/Card";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
}