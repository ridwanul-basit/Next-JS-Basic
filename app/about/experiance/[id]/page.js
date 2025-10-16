import Button from '@/app/components/Button';
import Comments from '@/app/components/Comments';
import GetPost from '@/lib/GetPost';
import GetPostComment from '@/lib/GetPostComment';
import React, { Suspense } from 'react'

export async function generateMetadata({params}){

  const {id} = params;
  const experiance = await GetPost(id); 

    return {
    title: experiance.tile, 
     description: experiance.body ,
    }
  }

export default async function ExperianceDetails({params}) {

  
  const {id} = params;
  const experiancePromise =  GetPost(id);
  const commentsPromise =  GetPostComment(id);

  // const [experiance,comments] =await  Promise.all([experiancePromise,commentsPromise])
   const experiance = await experiancePromise;

  return (
    <div>
      Experiance No  {id}
      <h1 className='text-blue-400 mt-3'> {experiance.title} </h1>
      <p className='mt-5'>{experiance.body}</p>
      <hr/>
      <Suspense fallback="<h1> Loading Comments...</h1>">
        <Comments promise={commentsPromise}></Comments>
      </Suspense>
      <Button></Button>
    </div>
  )
}