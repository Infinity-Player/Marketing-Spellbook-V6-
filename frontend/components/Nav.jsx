import React from 'react'
export default function Nav({ current, setCurrent }){
  const tabs = ['Brief','Assets','Brand Brain','Personas','A/B Tests','Scheduler','Insights','Report','Library','Creative','Profile']
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tabs.map(t => (
        <button key={t} onClick={()=>setCurrent(t)} className={"btn " + (current===t ? "bg-gray-900 text-white" : "btn-ghost")}>{t}</button>
      ))}
    </div>
  )
}
