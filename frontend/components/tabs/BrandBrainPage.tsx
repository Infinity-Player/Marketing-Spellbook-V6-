"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export default function BrandBrainPage() {
  const [form, setForm] = useState({
    brandName: "",
    voice: "",
    pillars: "",
    audience: "",
  })
  const [guidelines, setGuidelines] = useState<any>(null)

  const onChange =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function generate() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/brandbrain`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed")
      const data = await res.json()
      setGuidelines(data)
      toast.success("Brand guidelines generated")
    } catch {
      toast.error("Could not generate")
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <input
          className="border rounded p-2 w-full"
          placeholder="Brand Name"
          value={form.brandName}
          onChange={onChange("brandName")}
        />
        <input
          className="border rounded p-2 w-full"
          placeholder="Voice (e.g., playful, expert, bold)"
          value={form.voice}
          onChange={onChange("voice")}
        />
        <input
          className="border rounded p-2 w-full"
          placeholder="Pillars (comma-separated)"
          value={form.pillars}
          onChange={onChange("pillars")}
        />
        <textarea
          className="border rounded p-2 w-full"
          placeholder="Audience"
          value={form.audience}
          onChange={onChange("audience")}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
          onClick={generate}
        >
          Generate
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        {guidelines ? (
          <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(guidelines, null, 2)}</pre>
        ) : (
          <p className="text-gray-500">Fill the form and click Generate.</p>
        )}
      </div>
    </div>
  )
}
