'use client';
import React, { useState } from 'react';
const tabs = ['Brief','Assets','Brand Brain','Personas','A/B Tests','Scheduler','Insights','Report','Library','Creative','Profile'];
export default function Tabs(){
  const [active,setActive] = useState('Brief');
  return (
    <nav className='flex gap-2'>
      {tabs.map(t=>(
        <button key={t} onClick={()=>setActive(t)} className={'px-3 py-1 rounded '+(active===t?'btn':'')}>
          {t}
        </button>
      ))}
    </nav>
  );
}
