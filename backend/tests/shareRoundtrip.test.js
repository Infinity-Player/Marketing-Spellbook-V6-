function encode(obj){
  return btoa(encodeURIComponent(JSON.stringify(obj)));
}
function decode(s){ return JSON.parse(decodeURIComponent(atob(s))); }
test('share encode/decode roundtrip', ()=>{
  const obj = { foo: 'bar', n: 3 };
  const enc = encode(obj);
  const dec = decode(enc);
  expect(dec.foo).toBe('bar');
  expect(dec.n).toBe(3);
});
