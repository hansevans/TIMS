export interface Alarm {
  id: string;
  device: string;
  severity: "critical" | "warning" | "info";
  message: string;
  time: string;
  acknowledged: boolean;
}