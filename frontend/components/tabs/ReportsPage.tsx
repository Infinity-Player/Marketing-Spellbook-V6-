"use client"

import { useEffect, useState } from "react"

type Row = { label: string; value: number }

export default function ReportPage() {
  const [rows, setRows] = useState<Row[]>([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/report`)
      .then((r) => r.json())
      .then(setRows)
      .catch(() => setRows([]))
  }, [])
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold mb-3">Key Metrics</h3>
      {rows.length === 0 ? (
        <p className="text-gray-500">No data.</p>
      ) : (
        <ul className="space-y-1">
          {rows.map((r, i) => (
            <li key={i} className="flex justify-between">
              <span>{r.label}</span>
              <span className="font-medium">{r.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
