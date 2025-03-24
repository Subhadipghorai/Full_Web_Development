"use client";
import Image from "next/image";

export default function Home() {

  const handleClick = async() => {
    let data ={
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com"
    }
    let a= await fetch("/api/Add", {method:"POST",  headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( data ),
  })
    let res= await a.json()
    console.log(res)

    
  }
  
  return (
    <div>
      <h1 className="text-lg font-bold">Next.js Api route demo</h1>
      <button onClick={handleClick}> Click me</button>
    </div>

  );
}
