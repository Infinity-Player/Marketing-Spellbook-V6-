'use client';
import React, { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  panel: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div>
      {/* Tab headers */}
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 ${
              activeTab === tab.id ? 'border-b-2 border-blue-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab panel */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.panel}
      </div>
    </div>
  );
}
