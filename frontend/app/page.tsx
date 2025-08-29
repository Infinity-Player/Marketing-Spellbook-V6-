"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import BriefPage from "@/components/BriefTab";
import AssetsPage from "@/components/AssetsPage";
import InsightsPage from "@/components/InsightsPage";
import ReportsPage from "@/components/tabs/ReportsTab";
import SchedulerPage from "@/components/tabs/SchedulerTab";
import ProfilePage from "@/components/tabs/ProfileTab";
import toast, { Toaster } from "react-hot-toast";

const TABS = ["brief", "assets", "insights", "reports", "scheduler", "profile"] as const;
type Tab = typeof TABS[number];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("brief");

  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
      <div className="p-4">
        {activeTab === "brief" && <BriefPage toast={toast} />}
        {activeTab === "assets" && <AssetsPage />}
        {activeTab === "insights" && <InsightsPage />}
        {activeTab === "reports" && <ReportsPage />}
        {activeTab === "scheduler" && <SchedulerPage />}
        {activeTab === "profile" && <ProfilePage />}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}