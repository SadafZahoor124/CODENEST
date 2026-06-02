import React from 'react'
import "./Footer.css";

function Footer() {
  return (
   <footer className='footer'>
     <div className='footer-container'>
        <div className='footer-col'>
            <h4>Codenest</h4>
            <p>practice coding problems and improve your programming skills.</p>
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
            <p>Community</p>
            <p>Best approaches</p>
        </div>
        <div className='footer-col'>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Guides</p>
            <p>Interview prop</p>
            <p>FAQs</p>
        </div>
        <div className='footer-col'>
            <h4>Get Started</h4>
            <p>Login</p>
            <p>Register</p>
            <p>Contact</p>
            <p>Support</p>
        </div>
        
     </div>
     <div className='logo' style={{display: 'flex', justifyContent:'space-between',gap: '10px',marginLeft: '100px', marginTop:'100px'}}>
         <img src="https://media.licdn.com/dms/image/v2/D4E0BAQE1cQ7ctIwkug/company-logo_200_200/B4EZu3Q2B7I4AI-/0/1768306205192/codenest_ltd_logo?e=2147483647&v=beta&t=-yJX1gfwNyhmEKglMrG8T66yvYT2N0bGO4dCqrutnd4" />
         <div style={{display: 'flex',justifyContent: 'end',gap: '15px',marginRight: '100px'}}>
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
