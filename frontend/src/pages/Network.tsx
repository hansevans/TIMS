import { useState } from "react";
import "reactflow/dist/style.css";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import type { Node, Edge } from "reactflow";

import DeviceNode from "../components/network/DeviceNode";
import DevicePanel from "../components/network/DevicePanel";


const nodeTypes = {
  device: DeviceNode,
};


const initialNodes: Node[] = [
  {
    id: "internet",
    position: { x: 300, y: 50 },
    data: {
      label: "🌍 Internet",
      status: "online",
    },
    type: "device",
  },

  {
    id: "router",
    position: { x: 300, y: 180 },
    data: {
      label: "📡 MikroTik Router",
      status: "online",
    },
    type: "device",
  },

  {
    id: "tower1",
    position: { x: 100, y: 330 },
    data: {
      label: "🏢 Tower 01",
      status: "online",
    },
    type: "device",
  },

  {
    id: "tower2",
    position: { x: 500, y: 330 },
    data: {
      label: "🏢 Tower 02",
      status: "warning",
    },
    type: "device",
  },

  {
    id: "esp1",
    position: { x: 100, y: 480 },
    data: {
      label: "📡 ESP32 Gateway 1",
      status: "online",
    },
    type: "device",
  },

  {
    id: "esp2",
    position: { x: 500, y: 480 },
    data: {
      label: "📡 ESP32 Gateway 2",
      status: "offline",
    },
    type: "device",
  },
];


const initialEdges: Edge[] = [
  {
    id: "internet-router",
    source: "internet",
    target: "router",
  },

  {
    id: "router-tower1",
    source: "router",
    target: "tower1",
  },

  {
    id: "router-tower2",
    source: "router",
    target: "tower2",
  },

  {
    id: "tower1-esp1",
    source: "tower1",
    target: "esp1",
  },

  {
    id: "tower2-esp2",
    source: "tower2",
    target: "esp2",
  },
];


export default function Network() {

  const [selectedDevice, setSelectedDevice] = useState<any>(null);


  return (
    <div className="h-[calc(100vh-120px)] rounded-xl bg-slate-900">

      <div className="p-5">

        <h1 className="text-3xl font-bold text-white">
          Network Topology
        </h1>

        <p className="text-slate-400">
          Real-time telecom infrastructure monitoring
        </p>

      </div>


      <div className="grid h-full grid-cols-4 gap-4 p-4">


        {/* Network Map */}

        <div className="col-span-3 rounded-xl bg-slate-950">

          <ReactFlow

            nodes={initialNodes}

            edges={initialEdges}

            nodeTypes={nodeTypes}

            fitView


            onNodeClick={(_, node) => {

              setSelectedDevice({

                label: node.data.label,

                status: node.data.status,

                ip: "192.168.88.1",

                temperature: "42°C",

                battery: "91%",

              });

            }}

          >

            <Background />

            <Controls />

            <MiniMap />

          </ReactFlow>

        </div>


        {/* Device Information */}

        <div className="col-span-1">

          <DevicePanel
            device={selectedDevice}
          />

        </div>


      </div>

    </div>
  );
}