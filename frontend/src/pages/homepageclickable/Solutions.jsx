import React from 'react'
import { useNavigate } from "react-router-dom";

function Solutions() {
                const navigate = useNavigate();
    
    const solutions = [
        {id:"1", tittle: "Two Sum" , language: "JavaScript"} ,
        {id:"2",  tittle: "Binary Search" , lnaguage : "Python" }
    ];
  return (
    <div style={{padding:"100px"}}>
      <h1 style={{maxWidth:"90%"}}>Solutions</h1>
      {solutions.map((item) => (
        <div key={item.id} style={{border:"1px solid #ccc", margin:"10px" , padding:"10px"}}>
            <h3>{item.tittle} </h3>
            <p>item.language </p>
            <button onClick={() => navigate(`/solutions/${item.id}`)}>View Solution</button>
        </div>
      )) }
    </div>
  )
}

export default Solutions
