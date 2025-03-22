
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(d)
      }, d*1000)
    })
  }
  const onSubmit =async (data) => {
    // await delay(2) //Simulating network delay
    let r =await fetch("http://localhost:3000/",{
      method: "POST",  body: JSON.stringify( data ),})
      
    let res = await r.text()
    console.log(data,res)


    // if(data.username !== "subham"){
    //   setError("myfrom", {message:"Your from is not a valid username"})
    // }
    // if(data.username=== "rohan"){
    //   setError("blocked",{message:"user is blocked"})
    //   }
  }


  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          
          <input {...register("username", { required: true, minLength: {value:3,message:"Min length should be 3"}, maxLength: {value:8, message:"Max length is 8"}, })} placeholder='Username' type="text" />

          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input {...register("password",{required:true, minLength:{value:7, message:"password length must be minimum 7"}})} placeholder='password' type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myfrom && <div className='red'>{errors.myfrom.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
