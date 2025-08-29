// frontend/components/tabs/ReportsTab.tsx

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface Report {
  id: number;
  title: string;
  createdAt: string;
  status: string;
  downloadUrl?: string;
}

export default function ReportsTab() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReports() {
      try {
        const data = await apiGet<Report[]>("reports");
        setReports(data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load reports");
      } finally {
        setLoading(false);
      }
    }
    loadReports();
  }, []);

  if (loading) return <p className="p-4">Loading reports...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4 space-y-4">
      {reports.map((report) => (
        <div
          key={report.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-1">{report.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Created: {new Date(report.createdAt).toLocaleString()}
          </p>
          <p className="text-sm mb-2">
            <span className="font-medium">Status: </span>
            {report.status}
          </p>
          {report.downloadUrl && (
            <a
              href={report.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ⬇️ Download
            </a>
          )}
        </div>
      ))}
    </div>
  );
}