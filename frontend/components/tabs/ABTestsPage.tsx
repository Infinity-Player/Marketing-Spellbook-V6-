"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type Test = { id: string; name: string; hypothesis: string; variantA: string; variantB: string; winner?: string }

export default function ABTestsPage() {
  const [list, setList] = useState<Test[]>([])
  const [form, setForm] = useState<Omit<Test, "id">>({
    name: "",
    hypothesis: "",
    variantA: "",
    variantB: "",
  })

  async function load() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/abtests`)
    setList(await res.json())
  }
  useEffect(() => void load(), [])

  const onChange =
    (k: keyof Omit<Test, "id">) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function add() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/abtests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      toast.success("Test created")
      setForm({ name: "", hypothesis: "", variantA: "", variantB: "" })
      load()
    } else toast.error("Failed to create")
  }

  async function setWinner(id: string, winner: "A" | "B") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/abtests/${id}/winner`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ winner }),
    })
    if (res.ok) {
      toast.success("Winner saved")
      load()
    } else toast.error("Failed to save winner")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <input className="border rounded p-2 w-full" placeholder="Test name" value={form.name} onChange={onChange("name")} />
        <input
          className="border rounded p-2 w-full"
          placeholder="Hypothesis"
          value={form.hypothesis}
          onChange={onChange("hypothesis")}
        />
        <input className="border rounded p-2 w-full" placeholder="Variant A" value={form.variantA} onChange={onChange("variantA")} />
        <input className="border rounded p-2 w-full" placeholder="Variant B" value={form.variantB} onChange={onChange("variantB")} />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700" onClick={add}>
          Create Test
        </button>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-3">Experiments</h3>
        {list.length === 0 ? (
          <p className="text-gray-500">No experiments yet.</p>
        ) : (
          <ul className="space-y-2">
            {list.map((t) => (
              <li key={t.id} className="border rounded p-2">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-gray-500 mb-2">Hypothesis: {t.hypothesis}</div>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 rounded bg-gray-100" onClick={() => setWinner(t.id, "A")}>
                    Pick A
                  </button>
                  <button className="px-3 py-1 rounded bg-gray-100" onClick={() => setWinner(t.id, "B")}>
                    Pick B
                  </button>
                  {t.winner && <span className="text-indigo-600 font-medium">Winner: {t.winner}</span>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
