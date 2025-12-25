"use client";

import CardWidget from "@/components/widgets/CardWidget";
import TableWidget from "@/components/widgets/TableWidget";
import ChartWidget from "@/components/widgets/ChartWidget";
import { useDashboardStore } from "@/store/dashboardStore";
import { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";


export default function Dashboard() {
    const widgets = useDashboardStore((state) => state.widgets);
    const [open, setOpen] = useState(false);


    return (
        <div className="min-h-screen px-6 py-4">
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

                <button
                    onClick={() => setOpen(true)}
                    className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-sm"
                >
                    + Add Widget
                </button>

                <AddWidgetModal open={open} onClose={() => setOpen(false)} />

            </header>

            {widgets.length === 0 ? (
                <div className="border border-dashed border-gray-700 rounded-xl h-[70vh] flex items-center justify-center text-gray-500">
                    No widgets added yet. Click “Add Widget”.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {widgets.map((w) => {
                        if (w.type === "card")
                            return (
                                <CardWidget
                                    key={w.id}
                                    name={w.name}
                                    apiUrl={w.apiUrl}
                                    interval={w.interval}
                                />
                            );

                        if (w.type === "table")
                            return (
                                <TableWidget
                                    key={w.id}
                                    name={w.name}
                                    apiUrl={w.apiUrl}
                                    interval={w.interval}
                                />
                            );

                        return (
                            <ChartWidget
                                key={w.id}
                                name={w.name}
                                apiUrl={w.apiUrl}
                                interval={w.interval}
                            />
                        );
                    })}
                </div>

            )}
        </div>
    );
}
