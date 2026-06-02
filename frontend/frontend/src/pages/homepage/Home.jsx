import React from 'react'
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
        const navigate = useNavigate();

  return (
    <div>
      <section className='hero'>
        <h1>Welcome to codenest</h1>
        <p>Practice coding problems , improve programming skills and prepare for technical interviews.</p>
        <div className='hero-btns'>
            <button onClick={() => navigate("problems")}>Start Solving</button>
            <button className='outline' onClick={() => navigate("solutions")}>Explore Solutions</button>
        </div>
      </section>
      <section className='features'>
        <h2>Why use codenest</h2>
        <div className='feature-grid'>
            <div className='feature-card'>
                <h3>Practice Problems</h3>
                <p>Solve coding challenges from easy to hard level.</p>
            </div>
            <div className='feature-card'>
                <h3>Learn Solutions</h3>
                <p>Explore different approaches to solve problems.</p>
            </div>
            <div className='feature-card'>
                <h3>Track Submissions</h3>
                <p>Monitor your coding progress and submissions.</p>
            </div>
            <div className='feature-card'>
                <h3>Improve Skills</h3>
                <p>Strengthen algorithms and problem solving skills.</p>
            </div>
        </div>
      </section>
      <section className='categories'>
        <h2>Problem Categories</h2>
        <div className='category-list'>
            <span>Arrays</span>
            <span>Strings</span>
            <span>Linked List</span>
            <span>Trees</span>
            <span>Graphs</span>
            <span>Dynamic Programming</span>
            <span>Recursion</span>
            <span>Sorting</span>
        </div>
      </section>

    </div>
  )
}

export default Home
