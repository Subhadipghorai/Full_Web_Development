

import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={270} style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Card
