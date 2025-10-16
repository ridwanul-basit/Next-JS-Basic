

export default async function GetPostComment(id) {
     const experiance = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if (!experiance.ok){
        throw new Error("An error fetchiung data")
    }
  return experiance.json()
  
}
