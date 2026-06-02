import React from 'react'
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

function Navbar() {
      const navigate = useNavigate();

  return (
    <header className='navbar'>
        <div className='header-navbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaYPfM2Zg98E69tvXXLepuEt6yX8SIydCPQ&s"  />
            <div className='list'>
                <a className='#'>Home<span>
                    <div style={{width:"550px", display:"grid", gridTemplateColumns:"repeat(2, 1fr)",gap:"60px",backgroundColor:"white",color:"black",border:"1px solid black", padding:"60px",lineHeight:"30px"}}>
                        <div>
                           <b>Hero Section</b>
                           <li>Welcome to codenest</li>
                           <li>Practice coding and improve your skills</li>
                           <li>Start solving problem buttons</li>
                        </div>
                        <div>
                            <b>Feature Section</b>
                            <li>Solve coding problems</li>
                            <li>View solutions</li>
                            <li>Track your Submissions</li>
                            <li>Improve problem solving skills</li>
                        </div>
                        <div>
                            <b>Companies Sections</b>
                            <li>Companies that ask coding questions</li>
                            <li>Example: Google, Amazon, Microsoft, Adobe</li>
                        </div>
                    </div>
                    
                     </span>
                </a>
                <a className='#'>Problems<span>
                    <div style={{width:"550px", display:"grid", gridTemplateColumns:"repeat(2, 1fr)",gap:"60px",backgroundColor:"white",color:"black",border:"1px solid black", padding:"60px",lineHeight:"30px"}}>
                        <div>
                            <b>Practice Problems</b>
                            <li>All problems</li>
                            <li>Easy problems</li>
                            <li>Medium problems</li>
                            <li>Hard problems</li>
                        </div>
                        <div>
                            <b>Categories</b>
                            <li>Arrays</li>
                            <li>Strings</li>
                            <li>Stack & Queue</li>
                            <li>Graphs</li>
                            <li>Dynamic programming</li>
                        </div>
                        <div>
                            <b>Algorthms</b>
                            <li>Searching</li>
                            <li>Sorting</li>
                            <li>Recursion</li>
                        </div>
                    </div>
                     
                </span></a>
                <a className='#'>Solutions<span>
                    <div style={{width:"500px", display:"grid", gridTemplateColumns:"repeat(2, 1fr)",gap:"60px",backgroundColor:"white",color:"black",border:"1px solid black", padding:"60px",lineHeight:"30px"}}>
                        <div>
                            <b>What You Can Learn</b>
                            <li>Improve your coding skils</li>
                            <li>Understand problem solutions</li>
                            <li>Learn different approaches</li>
                            <li>Optimize your code</li>
                        </div>
                        <div>
                            <b>Solutions Types</b>
                            <li>All solutions</li>
                            <li>Community solutions</li>
                            <li>Top solutions</li>
                            <li>Recent solutions</li>
                        </div>
                        <div>
                            <b>Programming Languages</b>
                            <li>Java solutions</li>
                            <li>Python solutions</li>
                            <li>C++ solutions</li>
                            <li>JavaScript solutions</li>
                        </div>
                    </div>
                 </span>
                </a>
                <a className='#' onClick={() => navigate("/submission")}>Submissions</a>
            </div>
            <div>
                <button className='log-n' onClick={() => navigate("/login")}>Login</button>
                <button className='reg' onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar
