import Link from 'next/link'
import React from 'react'

export default function Experiance() {

    const experiances= [
        {
            id : 1,
            title : "Work Experiance",
            description : "Wrking Since September "

        },
         {
            id : 2,
            title : "Educational Experiance",
            description : "Wrking Since September "

        }
    ];

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
