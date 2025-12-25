"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal";
import { useDashboardStore } from "@/store/dashboardStore";
import { v4 as uuid } from "uuid";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddWidgetModal({ open, onClose }: Props) {
  const addWidget = useDashboardStore((s) => s.addWidget);

  const [name, setName] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [interval, setInterval] = useState(30);
  const [type, setType] = useState<"card" | "table" | "chart">("card");

  const handleAdd = () => {
    if (!name || !apiUrl) return;

    addWidget({
      id: uuid(),
      name,
      apiUrl,
      interval,
      type,
    });

    onClose();
  };

  return (
    <Modal isOpen={open} onClose={onClose} title="Add Widget">
      <div className="space-y-4">
        <div>
          <label className="text-xs text-gray-400">Widget Name</label>
          <input
            className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Market Gainers"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">API URL</label>
          <input
            className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="https://api.example.com/data"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">Refresh Interval (sec)</label>
          <input
            type="number"
            className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm"
            value={interval}
            onChange={(e) => setInterval(+e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">Widget Type</label>
          <select
            className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="card">Finance Card</option>
            <option value="table">Table</option>
            <option value="chart">Chart</option>
          </select>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-green-600 hover:bg-green-500 py-2 rounded-lg text-sm"
        >
          Add Widget
        </button>
      </div>
    </Modal>
  );
}
