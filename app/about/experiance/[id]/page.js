import Button from '@/app/components/Button';
import React from 'react'

export default function ExperianceDetails({params}) {

    const {id} = params;
  return (
    <div>
      this is {id}
      <Button></Button>
    </div>
  )
}
