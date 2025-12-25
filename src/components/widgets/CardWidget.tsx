"use client";

import WidgetCard from "./WidgetCard";
import { useAutoRefresh } from "@/hooks/useAutoRefresh";

type Props = {
  name: string;
  apiUrl: string;
  interval: number;
};

export default function CardWidget({ name, apiUrl, interval }: Props) {
  const { data, loading, error } = useAutoRefresh(apiUrl, interval);

  return (
    <WidgetCard title={name}>
      {loading && <p className="text-sm text-gray-400">Loading...</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
      {data && (
        <pre className="text-xs text-gray-300 overflow-auto max-h-40">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </WidgetCard>
  );
}
