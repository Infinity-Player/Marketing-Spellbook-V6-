// frontend/components/tabs/InsightsTab.tsx

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface Insight {
  id: number;
  title: string;
  description: string;
  metric: string;
  value: number;
}

export default function InsightsTab() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await apiGet<Insight[]>("insights");
        setInsights(data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load insights");
      } finally {
        setLoading(false);
      }
    }
    loadInsights();
  }, []);

  if (loading) return <p className="p-4">Loading insights...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4 grid gap-4 md:grid-cols-2">
      {insights.map((insight) => (
        <div
          key={insight.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-1">{insight.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
          <p className="text-sm">
            <span className="font-medium">{insight.metric}: </span>
            {insight.value}
          </p>
        </div>
      ))}
    </div>
  );
}
