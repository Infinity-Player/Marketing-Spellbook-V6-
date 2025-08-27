'use client';
import React, { useEffect, useState } from 'react';
export default function Header(){
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setTheme(localStorage.getItem('ms_theme') || 'classic');
    }
  },[]);
  useEffect(()=>{
    if (!theme) return;
    const cls = 'theme-' + theme;
    document.documentElement.classList.remove('theme-classic','theme-light','theme-dark');
    document.documentElement.classList.add(cls);
    localStorage.setItem('ms_theme', theme);
  },[theme]);
  function cycle(){
    setTheme(t => t==='classic' ? 'light' : t==='light' ? 'dark' : 'classic');
  }
  return (
    <header className='p-4 flex items-center justify-between'>
      <h1 className='text-xl font-bold'>Marketing Spellbook Ultimate v6</h1>
      <div className='flex gap-2'>
        <button className='btn' onClick={cycle} aria-label='Toggle theme'>Toggle Theme</button>
      </div>
    </header>
  );
}
