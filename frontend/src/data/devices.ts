import type { Device } from "../types/Device";

export const devices: Device[] = [

  {
    id: "router01",
    name: "MikroTik Router",
    type: "router",
    status: "online",
    ip: "192.168.88.1",
    location: "Main Control Room",
    temperature: 35,
    lastSeen: "Just now",
  },


  {
    id: "tower01",
    name: "Tower 01",
    type: "tower",
    status: "online",
    location: "Site A",
    temperature: 42,
    battery: 91,
    signal: -65,
    lastSeen: "10 seconds ago",
  },


  {
    id: "tower02",
    name: "Tower 02",
    type: "tower",
    status: "warning",
    location: "Site B",
    temperature: 55,
    battery: 45,
    signal: -80,
    lastSeen: "1 minute ago",
  },


  {
    id: "esp01",
    name: "ESP32 Gateway 01",
    type: "esp32",
    status: "online",
    location: "Tower 01",
    battery: 88,
    signal: -60,
    lastSeen: "5 seconds ago",
  },


  {
    id: "esp02",
    name: "ESP32 Gateway 02",
    type: "esp32",
    status: "offline",
    location: "Tower 02",
    battery: 20,
    signal: -90,
    lastSeen: "15 minutes ago",
  },

];