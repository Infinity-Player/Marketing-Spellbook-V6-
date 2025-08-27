const { parseCSV } = require('../csvParser');
test('parseCSV computes rows', ()=>{
  const sample = 'impressions,clicks,spend,conversions\n1000,50,25.00,5';
  const out = parseCSV(sample);
  expect(out.length).toBe(1);
  expect(out[0].impressions).toBe('1000');
  expect(out[0].clicks).toBe('50');
});
