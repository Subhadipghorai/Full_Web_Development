
export default function page({params}){
    // throw new Error("error hai ") 
    let language = ["python", "javascript", "html", "css", "java", "c++", "c", "c#"]
    if(language.includes(params.slug)){
        
        return <div>My Post: {params.slug}</div>
    }
    else{

        return <div> Post is not found</div>
      }
}