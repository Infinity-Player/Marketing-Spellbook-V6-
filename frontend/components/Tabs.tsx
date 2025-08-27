'use client';
import React, { useState } from 'react';
import Button from './ui/Button';

const tabs = ['Brief','Assets','Brand Brain','Personas','A/B Tests','Scheduler','Insights','Report','Library','Creative','Profile'];

export default function Tabs(){
  const [active,setActive] = useState('Brief');
  return (
    <nav className='flex gap-2'>
      {tabs.map(t=>(
        <Button key={t} onClick={()=>setActive(t)} variant={active===t ? 'primary' : 'ghost'}>
          {t}
        </Button>
      ))}
    </nav>
  );
}
