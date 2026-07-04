import { useState } from "react"
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Login(){
      const navigate = useNavigate();

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = (e) =>{
e.preventDefault()

console.log("Email:",email)
console.log("Password:",password)
}

return(
      // <div style={{display:'flex',justifyContent:'space-between'}}>
            <div className="form-container">
                  <h2 style={{paddingBottom:"10px"}}>Login to CodeNest</h2>
                  <form className="login-form" onSubmit={handleSubmit}>
                        <input className="login-input"
                           type="email"
                           placeholder="Enter Email"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           required
                        />
                        <input className="login-input"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                        <button className="login-btn" type="submit">Login</button>
                  </form>
                  <p style={{paddingTop:"15px"}}>Don't have an account?{" "} <span className="login-link"  onClick={() => navigate("/register")}>Register</span></p>
            </div>
      // </div>
)

}

export default Login