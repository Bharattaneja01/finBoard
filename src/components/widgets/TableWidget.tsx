"use client";

import WidgetCard from "./WidgetCard";
import { useAutoRefresh } from "@/hooks/useAutoRefresh";

type Props = {
  name: string;
  apiUrl: string;
  interval: number;
};

export default function TableWidget({ name, apiUrl, interval }: Props) {
  const { data, loading, error } = useAutoRefresh(apiUrl, interval);

  if (loading)
    return (
      <WidgetCard title={name}>
        <p className="text-sm text-gray-400">Loading...</p>
      </WidgetCard>
    );

  if (error)
    return (
      <WidgetCard title={name}>
        <p className="text-sm text-red-400">{error}</p>
      </WidgetCard>
    );

  if (!Array.isArray(data))
    return (
      <WidgetCard title={name}>
        <p className="text-sm text-gray-400">
          API did not return an array
        </p>
      </WidgetCard>
    );

  return (
    <WidgetCard title={name}>
      <div className="overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-400">
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="text-left py-1">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((row, i) => (
              <tr key={i} className="border-t border-gray-700">
                {Object.values(row).map((val, j) => (
                  <td key={j} className="py-1">
                    {String(val)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WidgetCard>
  );
}
