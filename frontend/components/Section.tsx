'use client';
import React from 'react';
export default function Section({children, title}:{children:React.ReactNode, title?:string}){
  return (
    <section className='section'>
      {title && <h2 className='font-semibold mb-2'>{title}</h2>}
      {children}
    </section>
  );
}
