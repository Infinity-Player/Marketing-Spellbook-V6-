import React from 'react'
export default function Editor({ value, onChange, rows=8 }){
  return <textarea className="input h-auto" rows={rows} value={value||''} onChange={e=>onChange(e.target.value)} />
}
