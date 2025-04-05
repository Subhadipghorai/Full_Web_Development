import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v1 as uuidv1 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let password = localStorage.getItem('password')

    if (password) {
      setPasswordArray(JSON.parse(password))
    }

  }, [])


  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"

    }
    else {
      ref.current.src = "icons/eyecross.png"
      passwordRef.current.type = "text"

    }
  }

  const savePassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
      
      setPasswordArray([...passwordArray, {...form, id: uuidv1()}])
      localStorage.setItem('password', JSON.stringify([...passwordArray, {...form, id: uuidv1()}]))
      // console.log([...passwordArray, form])
      setform({ site: "", username: "", password: "" })
      toast(' Password saved successfully! ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
      });
    }
    else{
      toast('Error Password not saved! ', )
    }

  }
  
  const hendleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text)
  }
  const editPassword=(id)=>{
    console.log("Edit Password with id",id)
    setform(passwordArray.filter(item=>item.id===id)[0])

    setPasswordArray(passwordArray.filter(item=>item.id!=id))

 
  }

  const deletePassword=(id)=>{
    let c= confirm("Do you want to delete this password?")

    if(c){
      console.log("Deleting password with id",id)
    setPasswordArray(passwordArray.filter(item=>item.id!=id))
   
    localStorage.setItem('password', JSON.stringify(passwordArray.filter(item=>item.id!=id)))
    }
    toast('Password Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    
   
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className=" p-2 md:p-0 md: myContainer min-h-[87.3vh] ">
        <h1 className='text-black text-4xl font-bold text-center'>

          <span className='text-green-500'> &lt;</span>
          Nexus
          <span className='text-green-500'>Pass/&gt;</span>
        </h1>

        <p className='text-green-700 text-2xl font-bold text-center'>Your Own Password Manager</p>

        <div className=" flex flex-col p-4 gap-4 items-center">
          <input value={form.site} onChange={hendleChange} placeholder='Enter Website url' className=' bg-white rounded-full border border-green-400 w-full text-black px-4 py-1' type="text" name='site' id='site' />

          <div className="flex flex-col md:flex-row w-full gap-7">
            <input value={form.username} onChange={hendleChange} placeholder="Enter Username" className=' bg-white rounded-full border border-green-400 w-full text-black px-4 py-1' type="text" name='username' id='username' />

            <div className=" relative ">

              <input ref={passwordRef} value={form.password} onChange={hendleChange} placeholder='Enter Password' className=' bg-white rounded-full border border-green-400 w-full text-black px-4 py-1' type="password" name='password' id='password' />
              <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-2 ' width={35} src="icons/eye.png" alt="eye" />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className='text-black flex justify-center items-center bg-green-400 hover:bg-green-700 rounded-full px-4 py-2 w-fit gap-4 border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover" >
            </lord-icon>
            Save Password</button>
        </div>

        <div className="password">
          <h2 className='font-bold text-2xl py-4 text-black '>Your Password</h2>

          {passwordArray.length === 0 && <div className='text-black'>No password to show</div>}
          {passwordArray.length != 0 &&
            <table className="table-auto text-black w-full overflow-hidden rounded-md mb-10 ">
              <thead className='bg-green-700 text-white'>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                  <th className='py-2'>actions</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className=' py-2 border border-white text-center w-32'>
                      <div className='flex justify-center items-center'>
                        <a href={item.site} target='_blank'> {item.site}</a>
                        <div className="lordiconcopy size-7 cursor-pointer " onClick={() => { copyText(item.site) }} >
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className='py-2 border border-white text-center w-32'>
                      <div className='flex justify-center items-center'>
                        <span>{item.username}</span>

                        <div className="lordiconcopy size-7 cursor-pointer " onClick={() => { copyText(item.username) }} >
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>

                    </td>
                    <td className='py-2 border border-white text-center w-32'>
                      <div className='flex justify-center items-center'>
                        <span>{item.password}</span>
                        <div className="lordiconcopy size-7 cursor-pointer " onClick={() => { copyText(item.password) }} >
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className='py-2 border border-white text-center w-32'>
                      <div className='flex justify-center items-center gap-4'>
                        <div className="lordiconcopy size-7 cursor-pointer " onClick={() => { editPassword(item.id) }} >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </div>
                        <div className="lordiconcopy size-7 cursor-pointer " onClick={() => { deletePassword(item.id) }} >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          }
        </div>
      </div>
    </>
  )
}

export default Manager
