// frontend/components/tabs/BriefTab.tsx

import { useState } from "react";
import { apiPost } from "@/lib/api";

export default function BriefTab() {
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await apiPost<{ message: string }>("briefs", { text: brief });
      setStatus(res.message);
      setBrief("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to save brief");
    }
  }

  return (
    <div className="p-4 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Write your campaign brief..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Brief
        </button>
      </form>
      {status && <p className="text-sm text-gray-700">{status}</p>}
    </div>
  );
}
