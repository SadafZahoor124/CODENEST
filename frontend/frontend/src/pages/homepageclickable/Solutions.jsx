import React from 'react'
import { useNavigate } from "react-router-dom";

function Solutions() {
                const navigate = useNavigate();
    
    const solutions = [
        {tittle: "Two Sum" , long: "JavaScript"} ,
        { tittle: "Binary Search" , long : "Python" }
    ];
  return (
    <div style={{padding:"20px"}}>
      <h1>Explore Solutions</h1>
      {solutions.map((s, index) => (
        <div key={index} style={{border:"1px solid #ccc", margin:"10px" , padding:"10px"}}>
            <h3>{s.tittle} </h3>
            <p>Language: {s.long} </p>
            <button>View Solution</button>
        </div>
      )) }
    </div>
  )
}

export default Solutions
