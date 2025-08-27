'use client';
import React,{useState} from 'react';
import { parseCSV } from '../../lib/csvClient';
export default function InsightsPage(){
  const [metrics, setMetrics] = useState<any>(null);
  function handleFile(e:any){
    const f = e.target.files?.[0]; if(!f) return;
    const r = new FileReader();
    r.onload = ()=> {
      const text = r.result as string;
      const rows = parseCSV(text);
      // compute simple metrics
      const out = rows.map(row=>{
        const impressions = Number(row.impressions||0), clicks=Number(row.clicks||0), spend=Number(row.spend||0), conv=Number(row.conversions||0);
        const ctr = impressions? clicks/impressions : 0;
        const cvr = clicks? conv/clicks : 0;
        const avgCpc = clicks? spend/clicks : 0;
        const cpa = conv? spend/conv : 0;
        return { impressions, clicks, spend, conv, ctr, cvr, avgCpc, cpa };
      });
      setMetrics(out);
    };
    r.readAsText(f);
  }
  return (
    <div>
      <h3>Insights CSV Uploader</h3>
      <input type='file' accept='.csv' onChange={handleFile} />
      <pre>{JSON.stringify(metrics,null,2)}</pre>
    </div>
  );
}
