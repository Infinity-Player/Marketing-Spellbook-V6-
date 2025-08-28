"use client"

import { useState } from "react"
import toast from "react-hot-toast"

const tabs = [
  "Dashboard",
  "Brand Brain",
  "Personas",
  "A/B Tests",
  "Scheduler",
  "Report",
  "Library",
  "Creative",
  "Profile",
  "Brief",
  "Assets",
  "Insights",
]

export default function Page() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  // Handlers
  const handleImportJson = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "application/json"
    input.onchange = () => toast.success("JSON imported successfully (stub)")
    input.click()
  }

  const handleGenerateAssets = () => {
    toast.success("Assets generated (stub)")
  }

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">
          ✨ Spellbook
        </h1>
        <nav className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-xl text-left transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">{activeTab}</h2>

        {activeTab === "Dashboard" && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Quick Stats</h3>
              <p className="text-gray-500">Overview of campaigns...</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Recent Activity</h3>
              <p className="text-gray-500">Logs go here...</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Notifications</h3>
              <p className="text-gray-500">You’re all caught up!</p>
            </div>
          </div>
        )}

        {activeTab === "Brief" && (
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-bold mb-4">Brief Actions</h3>
            <div className="flex gap-4">
              <button
                onClick={handleImportJson}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
              >
                Import JSON
              </button>
              <button
                onClick={handleGenerateAssets}
                className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700"
              >
                Generate Assets
              </button>
            </div>
          </div>
        )}

        {["Assets", "Insights"].includes(activeTab) && (
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-bold mb-4">{activeTab}</h3>
            <p className="text-gray-500">
              Buttons and interactions will be wired to backend soon.
            </p>
          </div>
        )}

        {!["Dashboard", "Brief", "Assets", "Insights"].includes(activeTab) && (
          <div className="bg-white shadow rounded-2xl p-6">
            <p className="text-gray-400 italic">
              Coming soon: {activeTab} features ✨
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
