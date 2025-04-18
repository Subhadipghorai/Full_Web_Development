import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey another todo",
      desc: "I am a good todo 2"
    },
    {
      title: "Hey I am an administrator todo",
      desc: "I am a good todo 3"
    },
    {
      title: "Hey I am an grocery todo",
      desc: "I am a good todo 4"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border-1">

  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showbtn ? <button>show btn is false</button> : <button>show btn is true</button>}

      {/* {showbtn && <button>show btn is true</button>} */}

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />

        return <div key={todo.title} className="m-4 border-1 border-purple-400" >

          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>

      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn { }
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
