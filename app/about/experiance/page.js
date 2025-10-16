import GetAllPosts from '@/lib/GetAllPosts'
import Link from 'next/link'
import React from 'react'

export default async function Experiance() {

    const experiances= await GetAllPosts();

  return (
    <div>
    <ul>
       { experiances.map((exp) =>(
             
             <li key={exp.id}><Link href={`experiance/${exp.id}`}> {exp.title}</Link></li>

       )) }
      
    </ul>
    </div>
  )
}
