'use client';
import React from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import BriefPage from '../components/BriefPage';
import AssetsPage from '../components/AssetsPage';
import InsightsPage from '../components/InsightsPage';

const Placeholder = ({ title }: { title: string }) => <div className="p-4">{title}</div>;

const tabs = [
  { id: 'brief', label: 'Brief', panel: <BriefPage /> },
  { id: 'assets', label: 'Assets', panel: <AssetsPage /> },
  { id: 'brand-brain', label: 'Brand Brain', panel: <Placeholder title="Brand Brain" /> },
  { id: 'personas', label: 'Personas', panel: <Placeholder title="Personas" /> },
  { id: 'ab-tests', label: 'A/B Tests', panel: <Placeholder title="A/B Tests" /> },
  { id: 'scheduler', label: 'Scheduler', panel: <Placeholder title="Scheduler" /> },
  { id: 'insights', label: 'Insights', panel: <InsightsPage /> },
  { id: 'report', label: 'Report', panel: <Placeholder title="Report" /> },
  { id: 'library', label: 'Library', panel: <Placeholder title="Library" /> },
  { id: 'creative', label: 'Creative', panel: <Placeholder title="Creative" /> },
  { id: 'profile', label: 'Profile', panel: <Placeholder title="Profile" /> },
];

export default function Page(){
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='p-4'>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
