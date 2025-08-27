// frontend/components/Tabs.tsx
'use client'
import React, { useState } from 'react';

type TabDef = {
  id: string;              // stable string id
  label: React.ReactNode;
  panel: React.ReactNode;
};

export default function Tabs({ tabs }: { tabs: TabDef[] }) {
  const [active, setActive] = useState<string>(tabs[0]?.id ?? '');

  return (
    <div>
      <div role="tablist" aria-label="Primary tabs" className="flex gap-2">
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              type="button"                     // <- prevents accidental form submit
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={
                `px-3 py-2 rounded-md focus:outline-none transition ` +
                (isActive ? 'bg-indigo-600 text-white' : 'bg-transparent text-gray-700')
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={active !== t.id}            // hidden keeps DOM in place; toggles visibility
          >
            {t.panel}
          </div>
        ))}
      </div>
    </div>
  );
}