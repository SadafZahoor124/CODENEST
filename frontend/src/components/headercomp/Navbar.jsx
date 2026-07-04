import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="header-navbar">

        {/* Logo */}
        {/* <div className="logo" onClick={() => navigate("/")}> */}
          <img className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaYPfM2Zg98E69tvXXLepuEt6yX8SIydCPQ&s"
            alt="CodeNest Logo"
          />
        {/* </div> */}

        {/* Hamburger Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "list active" : "list"}>

          {/* Home */}
          <li className="nav-item">
            <span onClick={() => navigate("/")}>Home</span>

            <div className="dropdown-menu">

              <div className="dropdown-column">
                <h4>Hero Section</h4>
                <p>Welcome to CodeNest</p>
                <p>Practice Coding</p>
                <p>Improve Programming Skills</p>
              </div>

              <div className="dropdown-column">
                <h4>Features</h4>
                <p>Solve Problems</p>
                <p>View Solutions</p>
                <p>Track Submissions</p>
              </div>

              <div className="dropdown-column">
                <h4>Companies</h4>
                <p>Google</p>
                <p>Amazon</p>
                <p>Microsoft</p>
                <p>Adobe</p>
              </div>

            </div>
          </li>

          {/* Problems */}
          <li className="nav-item">
            <span onClick={() => navigate("/problems")}>Problems</span>

            <div className="dropdown-menu">

              <div className="dropdown-column">
                <h4>Practice Problems</h4>
                <p>All Problems</p>
                <p>Easy</p>
                <p>Medium</p>
                <p>Hard</p>
              </div>

              <div className="dropdown-column">
                <h4>Categories</h4>
                <p>Arrays</p>
                <p>Strings</p>
                <p>Graphs</p>
                <p>Stack & Queue</p>
                <p>Dynamic Programming</p>
              </div>

              <div className="dropdown-column">
                <h4>Algorithms</h4>
                <p>Searching</p>
                <p>Sorting</p>
                <p>Recursion</p>
              </div>

            </div>
          </li>

          {/* Solutions */}
          <li className="nav-item">
            <span onClick={() => navigate("/solutions")}>Solutions</span>

            <div className="dropdown-menu">

              <div className="dropdown-column">
                <h4>What You Can Learn</h4>
                <p>Improve Coding Skills</p>
                <p>Understand Solutions</p>
                <p>Different Approaches</p>
                <p>Optimize Code</p>
              </div>

              <div className="dropdown-column">
                <h4>Solution Types</h4>
                <p>All Solutions</p>
                <p>Top Solutions</p>
                <p>Recent Solutions</p>
              </div>

              <div className="dropdown-column">
                <h4>Languages</h4>
                <p>Java</p>
                <p>Python</p>
                <p>C++</p>
                <p>JavaScript</p>
              </div>

            </div>
          </li>

          {/* Submission */}
          <li
            className="nav-item"
            onClick={() => navigate("/submission")}
          >
            Submissions
          </li>

        </ul>

        {/* Buttons */}
        <div className="buttons">

          <button
            className="log-n"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="reg"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;