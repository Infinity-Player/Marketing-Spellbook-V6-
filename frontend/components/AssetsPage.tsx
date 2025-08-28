"use client";
import { useEffect, useState } from "react";
import * as ExcelJS from "exceljs";

interface Asset {
  id: string;
  primaryText: string[];
  secondaryText?: string;
  keywords?: string[];
}

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("assets");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Defensive normalization
        setAssets(
          Array.isArray(parsed)
            ? parsed.map((a: any, idx: number) => ({
                id: a.id || `asset-${idx}`,
                primaryText: Array.isArray(a.primaryText)
                  ? a.primaryText
                  : [a.primaryText ?? ""],
                secondaryText: a.secondaryText || "",
                keywords: Array.isArray(a.keywords) ? a.keywords : [],
              }))
            : []
        );
      } catch {
        setAssets([]);
      }
    }
  }, []);

  const exportToExcel = async () => {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Assets");

    ws.columns = [
      { header: "Primary Text", key: "primaryText", width: 40 },
      { header: "Secondary Text", key: "secondaryText", width: 30 },
      { header: "Keywords", key: "keywords", width: 30 },
    ];

    assets.forEach((asset) => {
      ws.addRow({
        primaryText: asset.primaryText.join(" | "),
        secondaryText: asset.secondaryText,
        keywords: asset.keywords?.join(", "),
      });
    });

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "assets.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Assets</h1>
      <button
        onClick={exportToExcel}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
      >
        Export to Excel
      </button>
      <div className="mt-6 space-y-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 glass-dark"
          >
            <p className="font-medium">{asset.primaryText.join(" | ")}</p>
            {asset.secondaryText && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {asset.secondaryText}
              </p>
            )}
            {asset.keywords?.length ? (
              <p className="text-xs text-gray-400">
                Keywords: {asset.keywords.join(", ")}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
