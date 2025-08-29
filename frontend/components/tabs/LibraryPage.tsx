"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type LibItem = { id: string; filename: string; size: number }

export default function LibraryPage() {
  const [items, setItems] = useState<LibItem[]>([])

  async function load() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/library`)
    setItems(await res.json())
  }
  useEffect(() => void load(), [])

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    const fd = new FormData()
    fd.append("file", f)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/library`, {
      method: "POST",
      body: fd,
    })
    if (res.ok) {
      toast.success("Uploaded")
      load()
    } else toast.error("Upload failed")
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <input type="file" onChange={upload} />
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.id} className="flex justify-between border rounded p-2">
            <span>{it.filename}</span>
            <span className="text-xs text-gray-500">{(it.size / 1024).toFixed(1)} KB</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
