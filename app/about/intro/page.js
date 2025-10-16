import Image from 'next/image'
import React from 'react'
import myImage from "@/public/94.jpg"

export default function Intro() {
  return (
    <div>
      Hi Bro i am here. Good to see you
        
        <div>
           <Image src={myImage} alt='My Image'>
      
           </Image>
        </div>
    </div>


  )
}

