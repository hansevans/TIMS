import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Network", path: "/network" },
    { name: "Power", path: "/power" },
    { name: "Devices", path: "/devices" },
    { name: "Alarms", path: "/alarms" },
    { name: "Analytics", path: "/analytics" },
    { name: "Reports", path: "/reports" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">TIMS</h1>
        <p className="text-sm text-slate-400">
          Telecom Infrastructure Management System
        </p>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 mb-2 ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}