"use client";

import { useDashboardStore } from "@/store/dashboardStore";

export default function Dashboard() {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div className="min-h-screen px-6 py-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
            📈
          </div>
          <div>
            <h1 className="text-lg font-semibold">Finance Dashboard</h1>
            <p className="text-sm text-gray-400">
              Connect to APIs and build your custom dashboard
            </p>
          </div>
        </div>

        <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-sm">
          + Add Widget
        </button>
      </header>

      {/* Dashboard Area */}
      {widgets.length === 0 ? (
        <div className="border border-dashed border-gray-700 rounded-xl h-[70vh] flex items-center justify-center text-gray-500">
          No widgets added yet. Click “Add Widget”.
        </div>
      ) : (
        <div>Widgets will appear here</div>
      )}
    </div>
  );
}
