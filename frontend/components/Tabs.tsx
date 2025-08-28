"use client";
import { useState } from "react";

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  initial?: string;
}

export default function Tabs({ tabs, initial }: TabsProps) {
  const [active, setActive] = useState(initial || tabs[0]?.id);

  return (
    <div>
      <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              active === tab.id
                ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) =>
          tab.id === active ? (
            <div key={tab.id} className="animate-fadeIn">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
