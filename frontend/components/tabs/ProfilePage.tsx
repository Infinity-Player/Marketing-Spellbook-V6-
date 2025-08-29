"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type Profile = { name: string; email: string; company?: string }

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({ name: "", email: "", company: "" })

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`)
      .then((r) => r.json())
      .then(setProfile)
      .catch(() => {})
  }, [])

  async function save() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    })
    if (res.ok) toast.success("Saved")
    else toast.error("Failed to save")
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-3 max-w-xl">
      <input className="border rounded p-2 w-full" placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
      <input className="border rounded p-2 w-full" placeholder="Email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
      <input className="border rounded p-2 w-full" placeholder="Company" value={profile.company || ""} onChange={(e) => setProfile({ ...profile, company: e.target.value })} />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700" onClick={save}>
        Save
      </button>
    </div>
  )
}
