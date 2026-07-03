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

<div style={{display:'flex',justifyContent:'space-between'}}>
<div className="form-container">

<h2>Login to CodeNest</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">Login</button>

</form>

<p>Don't have an account? <a className="#" style={{cursor:'pointer'}}  onClick={() => navigate("/register")}>Register</a></p>

</div>

</div>
)

}

export default Login