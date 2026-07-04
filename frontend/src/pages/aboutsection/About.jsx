import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-header">
        <h1>About CodeNest</h1>
        <p>
          Learn, Practice, and Improve your programming skills with
          interactive coding problems and detailed solutions.
        </p>
      </div>

      <div className="about-section">

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            CodeNest aims to help students become confident programmers
            by providing coding challenges, optimized solutions, and
            submission tracking in one platform.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>

          <ul>
            <li>✔ Coding Problems</li>
            <li>✔ Step-by-Step Solutions</li>
            <li>✔ Code Editor</li>
            <li>✔ Submission History</li>
            <li>✔ Interview Preparation</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>

          <p>
            We believe coding should be simple, practical, and accessible
            for everyone. CodeNest helps learners prepare for coding
            interviews and improve problem-solving skills.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;