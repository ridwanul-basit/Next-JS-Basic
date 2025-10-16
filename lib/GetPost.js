

export default async function GetPost(id) {
    const experiance = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!experiance.ok){
        throw new Error("An error fetchiung data")
    }
  return experiance.json()
}
