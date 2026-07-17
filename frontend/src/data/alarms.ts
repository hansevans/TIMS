import type { Alarm } from "../types/alarm";

export const alarms: Alarm[] = [
  {
    id: "1",
    device: "Tower 02",
    severity: "critical",
    message: "Battery level below 20%",
    time: "12:30",
    acknowledged: false,
  },
  {
    id: "2",
    device: "MikroTik Router",
    severity: "warning",
    message: "CPU usage above 85%",
    time: "12:25",
    acknowledged: false,
  },
  {
    id: "3",
    device: "ESP32 Gateway 01",
    severity: "info",
    message: "Device restarted successfully",
    time: "12:20",
    acknowledged: true,
  },
];