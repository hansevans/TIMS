export interface Device {

  id: string;

  name: string;

  type:
    | "router"
    | "tower"
    | "esp32"
    | "sensor";

  status:
    | "online"
    | "warning"
    | "offline";

  ip?: string;

  location?: string;

  temperature?: number;

  battery?: number;

  signal?: number;

  lastSeen?: string;

}