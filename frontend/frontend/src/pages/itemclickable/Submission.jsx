// import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom";
import "./Submission.css"

function Submission(){
    const navigate = useNavigate();

const Submission = [
{
problem:"Two Sum",
status:"Accepted",
language:"Java",
runtime:"0.45s",
date:"12 Mar 2026"
},

{
problem:"Reverse String",
status:"Accepted",
language:"Python",
runtime:"0.32s",
date:"11 Mar 2026"
},

{
problem:"Binary Search",
status:"Wrong Answer",
language:"C++",
runtime:"0.50s",
date:"10 Mar 2026"
},

{
problem:"Palindrome Check",
status:"Accepted",
language:"JavaScript",
runtime:"0.29s",
date:"9 Mar 2026"
}

]

return(

<div className="submissions-container">
    <h2>My Submissions</h2>
    <p className="description">View all your submitted coding solutions and track your performance.</p>
    <table className="submissions-table">
        <thead>
            <tr>
                <th>Problem Name</th>
                <th>Status</th>
                <th>Language</th>
                <th>Runtime</th>
                <th>Submitted At</th>
                <th>Action</th>
            </tr>
        </thead>
    <tbody>
        {Submission.map((item,index)=>(
        <tr key={index}>
        <td>{item.problem}</td>
        <td className={
        item.status === "Accepted"? "accepted": "wrong"}>
        {item.status}
        </td>
        <td>{item.language}</td>
        <td>{item.runtime}</td>
        <td>{item.date}</td>
        <td>
            <button className="view-btn"   onClick={() => navigate("/submission-details")}>View Code</button>
        </td>
    </tr>
))}
 
</tbody>

</table>

</div>

)
}

export default Submission