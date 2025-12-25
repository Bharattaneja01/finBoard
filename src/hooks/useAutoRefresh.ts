import { useEffect, useState } from "react";
import { fetchApiData } from "@/services/apiFetcher";

export function useAutoRefresh(apiUrl: string, interval: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const res = await fetchApiData(apiUrl);
      setData(res);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const id = setInterval(load, interval * 1000);
    return () => clearInterval(id);
  }, [apiUrl, interval]);

  return { data, loading, error };
}
