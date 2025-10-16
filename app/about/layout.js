import Link from 'next/link';
import React from 'react';

export default function AboutLayout({ children }) {
  return (
    <div className="px-10 py-8">
      <div className="">
        <nav className="flex gap-3 mb-4">
          <Link href="/about/intro">My Intro</Link> 
         <Link href="/about/experiance">My Experience</Link> 
        </nav>

        <hr className="border-t-2 border-gray-400 mb-4" />

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

