'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import BriefPage from '../components/BriefPage';

export default function Page(){
  const [mounted, setMounted] = useState(false);
  useEffect(()=> setMounted(true), []);
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='p-4'>
        <Tabs />
        <div className='mt-4'>
          <BriefPage />
        </div>
      </div>
    </div>
  );
}