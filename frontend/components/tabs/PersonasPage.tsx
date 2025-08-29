"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type Persona = { id: string; name: string; ageRange: string; pains: string; goals: string }

export default function PersonasPage() {
  const [list, setList] = useState<Persona[]>([])
  const [form, setForm] = useState<Omit<Persona, "id">>({
    name: "",
    ageRange: "",
    pains: "",
    goals: "",
  })

  async function load() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/personas`)
    const data = await res.json()
    setList(data)
  }
  useEffect(() => {
    load()
  }, [])

  const onChange =
    (k: keyof Omit<Persona, "id">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function add() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/personas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      toast.success("Persona added")
      setForm({ name: "", ageRange: "", pains: "", goals: "" })
      load()
    } else toast.error("Failed to add")
  }

  async function remove(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/personas/${id}`, { method: "DELETE" })
    if (res.ok) {
      toast.success("Persona removed")
      load()
    } else toast.error("Failed to remove")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <input className="border rounded p-2 w-full" placeholder="Name" value={form.name} onChange={onChange("name")} />
        <input
          className="border rounded p-2 w-full"
          placeholder="Age range"
          value={form.ageRange}
          onChange={onChange("ageRange")}
        />
        <input className="border rounded p-2 w-full" placeholder="Pains" value={form.pains} onChange={onChange("pains")} />
        <input className="border rounded p-2 w-full" placeholder="Goals" value={form.goals} onChange={onChange("goals")} />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700" onClick={add}>
          Add Persona
        </button>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-3">Personas</h3>
        {list.length === 0 ? (
          <p className="text-gray-500">No personas yet.</p>
        ) : (
          <ul className="space-y-2">
            {list.map((p) => (
              <li key={p.id} className="flex items-center justify-between border rounded p-2">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">
                    {p.ageRange} · pains: {p.pains} · goals: {p.goals}
                  </div>
                </div>
                <button className="text-red-600 hover:underline" onClick={() => remove(p.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
