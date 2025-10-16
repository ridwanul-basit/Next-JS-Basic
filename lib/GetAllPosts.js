

export default async function GetAllPosts() {

    const results = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  
    return results.json();
}
