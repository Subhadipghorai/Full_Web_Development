
// import { useEffect,useState } from "react";
import Navbar from "@/components/Navbar"
import fs from "fs/promises"
export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("i am Client")
  let a  = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString)})
  return (
    <div>
      <Navbar/>
       I am an div component
      {/* {count} */}
    {/* <button onClick={()=>{
      setCount(count+1)
    }}>Click Me</button> */}

    </div>
  );
}
