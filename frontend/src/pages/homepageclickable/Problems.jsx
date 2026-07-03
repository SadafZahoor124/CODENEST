import React from 'react'
import { useNavigate } from "react-router-dom";

function Problems() {
            const navigate = useNavigate();
    
    const problems= [
        {tittle:"Two Sum", difficulty:"Easy"},
        {tittle:"Binary Search", difficulty:"Medium"},
        {tittle:"Merge Intervals", difficulty:"Hard"}
    ];
  return (
    <div style={{padding:"20px"}}>
      <h1>All Problems</h1>
      <input type='text' placeholder='Search problem...' />
      {problems.map((p, index) => (
        <div key={index} style={{border:"1px solid #ccc",margin:"10px", padding:"10px"}}>
            <h3>{p.tittle}</h3>
            <p>Difficulty: {p.difficulty}</p>
            <button onClick={() => navigate('/solve/${p.tittle}')}>Solve</button>
        </div>
      ))}
    </div>
  )
}

export default Problems
