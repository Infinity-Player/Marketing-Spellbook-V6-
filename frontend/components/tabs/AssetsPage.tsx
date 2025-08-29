// frontend/components/tabs/AssetsTab.tsx

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface Asset {
  id: number;
  name: string;
  type: string;
}

export default function AssetsTab() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAssets() {
      try {
        const data = await apiGet<Asset[]>("assets");
        setAssets(data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load assets");
      } finally {
        setLoading(false);
      }
    }
    loadAssets();
  }, []);

  if (loading) return <p className="p-4">Loading assets...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="border rounded-lg p-3 shadow-sm hover:shadow-md"
        >
          <h3 className="font-semibold">{asset.name}</h3>
          <p className="text-sm text-gray-600">Type: {asset.type}</p>
        </div>
      ))}
    </div>
  );
}