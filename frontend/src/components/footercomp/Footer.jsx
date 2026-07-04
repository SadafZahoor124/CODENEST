import React from 'react'
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
      const navigate = useNavigate();

  return (
   <footer className='footer'>
     <div className='footer-container'>
        <div className='footer-col'>
            <h4>Codenest</h4>
            <p style={{width:"200px"}}>Practice coding problems,
                 learn optimized solutions,
                 and prepare for technical interviews.
            </p>
        </div>
        <div className='footer-col'>
            <h4>Problems</h4>
            <p>All problems</p>
            <p>Easy</p>
            <p>Medium</p>
            <p>Hard</p>
            <p>Categories</p>
        </div>
        <div className='footer-col'>
            <h4>Solutions</h4>
            <p>All solutions</p>
            <p>Top solutions</p>
            <p>Resent Solutions</p>
            <p>Best approaches</p>
        </div>
        <div className='footer-col'>
            <h4>Resources</h4>
            <p>Coding Guides</p>
            <p>Interview tips</p>
            <p>FAQs</p>
            <p>Help Center</p>
            <p>Privacy Policy</p>
        </div>
        <div className='footer-col'>
            <h4>Get Started</h4>
            <p onClick={() => navigate("/login")}>Login</p>
            <p onClick={() => navigate("/register")}>Register</p>
            <p onClick={() => navigate("/about")}>About Us</p>
            <p onClick={() => navigate("/contact")}>Contact Us</p>
            <p>Support</p>
        </div>
        
     </div>
     <div className='log'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaYPfM2Zg98E69tvXXLepuEt6yX8SIydCPQ&s" />
         <div className='social-icons'>
             <i className="fa-brands fa-facebook"></i>
             <i className="fa-brands fa-linkedin"></i>
             <i className="fa-brands fa-x-twitter"></i>
             <i className="fa-brands fa-instagram"></i>
     </div>
     </div>
         <div style={{textAlign:'center'}}>
             <p class="foot">&copy; 2026 CodeNest. All Rights Reserved.</p>
         </div>
   </footer>
  )
}

export default Footer
