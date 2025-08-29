"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export default function CreativePage() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState<string[] | null>(null)

  async function generate() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/creative`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })
    if (res.ok) {
      const data = await res.json()
      setResult(data.assets)
    } else {
      toast.error("Failed to generate")
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">
        <textarea
          className="border rounded p-2 w-full"
          placeholder="Describe the creative you want"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700" onClick={generate}>
          Generate
        </button>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        {result ? (
          <ul className="space-y-2">
            {result.map((line, i) => (
              <li key={i} className="border rounded p-2">
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Enter a prompt and hit Generate.</p>
        )}
      </div>
    </div>
  )
}
