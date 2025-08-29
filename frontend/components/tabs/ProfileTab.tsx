// frontend/components/tabs/ProfileTab.tsx

import { useEffect, useState } from "react";
import { apiGet, apiPut } from "@/lib/api";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export default function ProfileTab() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", role: "" });

  async function loadProfile() {
    try {
      const data = await apiGet<UserProfile>("profile");
      setProfile(data);
      setForm({
        name: data.name,
        email: data.email,
        role: data.role || "",
      });
    } catch (err) {
      console.error(err);
      setError("❌ Failed to load profile");
    } finally {
      setLoading(false);
    }
  }

  async function saveProfile() {
    try {
      const updated = await apiPut<UserProfile>("profile", form);
      setProfile(updated);
      setEditing(false);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to update profile");
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  if (loading) return <p className="p-4">Loading profile...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4 space-y-4">
      {editing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Name"
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Email"
          />
          <input
            type="text"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Role"
          />
          <button
            onClick={saveProfile}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            💾 Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {profile?.name}</p>
          <p><span className="font-medium">Email:</span> {profile?.email}</p>
          {profile?.role && <p><span className="font-medium">Role:</span> {profile.role}</p>}
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ✏️ Edit
          </button>
        </div>
      )}
    </div>
  );
}