"use client"

import { useMemo, useState } from "react"
import toast from "react-hot-toast"

// EXISTING pages from your repo
import BriefPage from "@/components/BriefPage"
import AssetsPage from "@/components/AssetsPage"
import InsightsPage from "@/components/InsightsPage"

// NEW pages added below in section 2 (copy-paste those files)
import BrandBrainPage from "@/components/tabs/BrandBrainPage"
import PersonasPage from "@/components/tabs/PersonasPage"
import ABTestsPage from "@/components/tabs/ABTestsPage"
import SchedulerPage from "@/components/tabs/SchedulerPage"
import ReportPage from "@/components/tabs/ReportPage"
import LibraryPage from "@/components/tabs/LibraryPage"
import CreativePage from "@/components/tabs/CreativePage"
import ProfilePage from "@/components/tabs/ProfilePage"

type TabId =
  | "Dashboard"
  | "Brand Brain"
  | "Personas"
  | "A/B Tests"
  | "Scheduler"
  | "Report"
  | "Library"
  | "Creative"
  | "Profile"
  | "Brief"
  | "Assets"
  | "Insights"

const TABS: TabId[] = [
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
  const [activeTab, setActiveTab] = useState<TabId>("Dashboard")

  const content = useMemo(() => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Quick Stats</h3>
              <p className="text-gray-500">Overview of campaigns</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Recent Activity</h3>
              <p className="text-gray-500">Logs, events, updates</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-bold">Notifications</h3>
              <p className="text-gray-500">All caught up</p>
            </div>
          </div>
        )
      case "Brand Brain":
        return <BrandBrainPage />
      case "Personas":
        return <PersonasPage />
      case "A/B Tests":
        return <ABTestsPage />
      case "Scheduler":
        return <SchedulerPage />
      case "Report":
        return <ReportPage />
      case "Library":
        return <LibraryPage />
      case "Creative":
        return <CreativePage />
      case "Profile":
        return <ProfilePage />
      case "Brief":
        return <BriefPage />
      case "Assets":
        return <AssetsPage />
      case "Insights":
        return <InsightsPage />
      default:
        return <div>Unknown tab</div>
    }
  }, [activeTab])

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">✨ Spellbook</h1>
        <nav className="flex flex-col gap-2">
          {TABS.map((tab) => (
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

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">{activeTab}</h2>
        {content}
      </main>
    </div>
  )
}
