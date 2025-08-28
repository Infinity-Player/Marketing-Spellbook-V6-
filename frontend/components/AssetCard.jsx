import React from 'react'
export default function AssetCard({ record }){
  const a = record || {}
  return (
    <div className="card">
      <h3 className="font-semibold mb-1">Assets for Brief: {a.briefId}</h3>
      <p className="text-sm text-gray-500">Tone: {a.tone} • CTA: {a.cta}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {(a.baseline?.headlines||[]).map((h,i)=>(
          <div key={i} className="rounded-xl border border-dashed p-2">
            <b>Headline {i+1}</b>
            <div>{h}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <b>Primary Texts</b>
        <ul className="list-disc ml-5">{(a.baseline?.primaryText||[]).map((t,i)=>(<li key={i}>{t}</li>))}</ul>
      </div>
      <div className="mt-3">
        <b>Email Subject</b><div>{a.baseline?.emailSubject}</div>
        <b>Email Body</b><pre className="whitespace-pre-wrap">{a.baseline?.emailBody}</pre>
      </div>
      <div className="mt-3">
        <b>Variants</b>
        <ul className="list-disc ml-5">{(a.variants||[]).map(v=>(<li key={v.id}><b>{v.id}</b>: {v.hypothesis} — <i>{v.headline}</i></li>))}</ul>
      </div>
    </div>
  )
}
