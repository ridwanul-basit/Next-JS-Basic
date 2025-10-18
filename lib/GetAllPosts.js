
export default async function GetAllPosts() {

    const results = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
            {
            // cache: "force-cache",    by default
            // cache: "no-store",   if want updated

            next : {
                revalidate : 10,    // if want updated in 10 sec
            }
            
        }
    )
  
    return results.json();
}
