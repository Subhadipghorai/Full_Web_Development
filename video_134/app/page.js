
import Image from "next/image";

export default function Home() {
  // console.log("the id is ",process.env.ID)
  // console.log("the Secret is ",process.env.SECRET)
  return (
   <div>
    hey this is home the id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET}and name is {process.env.NAME}
   </div>
  );
}
