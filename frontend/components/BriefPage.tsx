'use client';
import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Input, Textarea } from './ui/Input';
import Button from './ui/Button';
import GlassmorphismCard from './ui/GlassmorphismCard';

type Brief = {
  campaign?:string; product?:string; audience?:string; problem?:string; value?:string;
  offer?:string; tagline?:string; context?:string; objectives?:string; primaryCTA?:string; secondaryCTA?:string; schedulerMode?:string;
};

const ECO = {
  campaign: 'EcoSip Launch', product: 'EcoSip Reusable Cup', audience: 'Eco-conscious commuters',
  problem: 'Single-use cups create waste', value: 'Sustainable, stylish, leak-proof', offer: '20% off first month',
  tagline: 'Sip sustainably', context: 'Urban morning commuters', objectives: 'Acquire 5k users',
  primaryCTA: 'Buy now', secondaryCTA: 'Learn more', schedulerMode: 'calendar'
};

export default function BriefPage(){
  const [brief, setBrief] = useState<Brief>({});
  const [mounted, setMounted] = useState(false);
  useEffect(()=> setMounted(true), []);
  useEffect(()=> {
    if (!mounted) return;
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('ms_brief');
      if (raw) setBrief(JSON.parse(raw));
    }
  }, [mounted]);

  function prefillEco(){
    setBrief(ECO);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ms_brief', JSON.stringify(ECO));
    }
    alert('Prefilled EcoSip');
  }
  function downloadJSON(){
    const data = JSON.stringify(brief, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='brief.json'; a.click();
  }
  function importJSON(e:any){
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = ()=> {
      try {
        const obj = JSON.parse(reader.result as string);
        setBrief(obj);
        if (typeof window !== 'undefined') {
          localStorage.setItem('ms_brief', JSON.stringify(obj));
        }
        alert('Imported brief');
      } catch(err){ alert('invalid json'); }
    };
    reader.readAsText(f);
  }
  return (
    <GlassmorphismCard>
      <Section title='Brief'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium mb-2'>Campaign</label>
            <Input value={brief.campaign||''} onChange={e=>setBrief({...brief, campaign:e.target.value})} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Product</label>
            <Input value={brief.product||''} onChange={e=>setBrief({...brief, product:e.target.value})} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Audience</label>
            <Input value={brief.audience||''} onChange={e=>setBrief({...brief, audience:e.target.value})} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Problem</label>
            <Textarea value={brief.problem||''} onChange={e=>setBrief({...brief, problem:e.target.value})} rows={3} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Value</label>
            <Textarea value={brief.value||''} onChange={e=>setBrief({...brief, value:e.target.value})} rows={3} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Offer</label>
            <Input value={brief.offer||''} onChange={e=>setBrief({...brief, offer:e.target.value})} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Tagline</label>
            <Input value={brief.tagline||''} onChange={e=>setBrief({...brief, tagline:e.target.value})} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Context</label>
            <Textarea value={brief.context||''} onChange={e=>setBrief({...brief, context:e.target.value})} rows={3} />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Objectives</label>
            <Textarea value={brief.objectives||''} onChange={e=>setBrief({...brief, objectives:e.target.value})} rows={3} />
          </div>
          <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium mb-2'>Primary CTA</label>
              <Input value={brief.primaryCTA||''} onChange={e=>setBrief({...brief, primaryCTA:e.target.value})} />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Secondary CTA</label>
              <Input value={brief.secondaryCTA||''} onChange={e=>setBrief({...brief, secondaryCTA:e.target.value})} />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 mt-6'>
          <Button onClick={prefillEco}>Prefill EcoSip</Button>
          <Button onClick={downloadJSON}>Download JSON</Button>
          <label>
            <Button variant="ghost">Import JSON</Button>
            <input type='file' accept='application/json' onChange={importJSON} style={{display:'none'}} />
          </label>
          <Button onClick={()=>{
            // generate assets placeholder
            const asset = { id: Date.now(), headlines: ['Eco headline'], primaryText: 'Eco primary text' };
            if (typeof window !== 'undefined') {
              const arr = JSON.parse(localStorage.getItem('ms_assets')||'[]');
              arr.unshift(asset);
              localStorage.setItem('ms_assets', JSON.stringify(arr));
            }
            alert('Generated assets (placeholder)');
          }} variant="primary">Generate Assets</Button>
        </div>
      </Section>
      <Section title='Live Preview'>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">{JSON.stringify(brief,null,2)}</pre>
      </Section>
    </GlassmorphismCard>
  );
}
