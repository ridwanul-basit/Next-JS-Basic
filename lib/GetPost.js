import GetAllPosts from "./GetAllPosts"


export default async function GetPost(id) {
    const experiance = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!experiance.ok){
        throw new Error("An error fetchiung data")
    }
  return experiance.json()
}


export async function generateStaticParams() {
    const experiances = await GetAllPosts();

    return experiances.map(experiance=> ({

         id : experiance.id.toString()
    }
       
    ))
}
