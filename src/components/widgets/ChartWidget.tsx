"use client";

import WidgetCard from "./WidgetCard";
import { useAutoRefresh } from "@/hooks/useAutoRefresh";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  name: string;
  apiUrl: string;
  interval: number;
};

export default function ChartWidget({ name, apiUrl, interval }: Props) {
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
        <p className="text-sm text-gray-400">Invalid chart data</p>
      </WidgetCard>
    );

  return (
    <WidgetCard title={name}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={Object.keys(data[0])[1]}
            stroke="#22c55e"
          />
        </LineChart>
      </ResponsiveContainer>
    </WidgetCard>
  );
}
