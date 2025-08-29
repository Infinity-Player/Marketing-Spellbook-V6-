"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type Event = { id: string; title: string; date: string; channel: string }

export default function SchedulerPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [form, setForm] = useState<Omit<Event, "id">>({ title: "", date: "", channel: "" })

  async function load() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scheduler`)
    setEvents(await res.json())
  }
  useEffect(() => void load(), [])

  const onChange =
    (k: keyof Omit<Event, "id">) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function add() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scheduler`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      toast.success("Scheduled")
      setForm({ title: "", date: "", channel: "" })
      load()
    } else toast.error("Failed to schedule")
  }

  async function remove(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scheduler/${id}`, { method: "DELETE" })
    if (res.ok) {
      toast.success("Removed")
      load()
    } else toast.error("Failed to remove")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <input className="border rounded p-2 w-full" placeholder="Title" value={form.title} onChange={onChange("title")} />
        <input className="border rounded p-2 w-full" placeholder="Date (YYYY-MM-DD)" value={form.date} onChange={onChange("date")} />
        <input className="border rounded p-2 w-full" placeholder="Channel (e.g., IG, Email)" value={form.channel} onChange={onChange("channel")} />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700" onClick={add}>
          Add Event
        </button>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-3">Upcoming</h3>
        {events.length === 0 ? (
          <p className="text-gray-500">No events scheduled.</p>
        ) : (
          <ul className="space-y-2">
            {events.map((e) => (
              <li key={e.id} className="flex items-center justify-between border rounded p-2">
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-xs text-gray-500">
                    {e.date} · {e.channel}
                  </div>
                </div>
                <button className="text-red-600 hover:underline" onClick={() => remove(e.id)}>
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
