export function parseCSV(text:string){
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split(',').map(h=>h.trim());
  return lines.slice(1).map(line=>{
    const cols = line.split(',').map(c=>c.trim());
    const obj:any = {};
    headers.forEach((h,i)=> obj[h]=cols[i]||'');
    return obj;
  });
}
