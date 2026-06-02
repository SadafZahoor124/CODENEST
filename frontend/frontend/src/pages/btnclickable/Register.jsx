import { useState } from "react"
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Register(){
      const navigate = useNavigate();

const [fname,setFName] = useState("")
const [lname,setLName] = useState("")
const [email,setEmail] = useState("")
const [phoneno, setPhoneNumber] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")

const handleSubmit = (e)=>{
e.preventDefault()

if(password !== confirmPassword){
alert("Passwords do not match")
return
}

console.log(fname,secname,email,password)
}

return(

<div className="container">

<h2 style={{paddingTop:'10px', paddingLeft:"80px"}}>Create CodeNest Account</h2>

<form onSubmit={handleSubmit} className="demo-form" style={{margin:'', width:'500px', height:'520px'}}>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <div>
        <label className="f-style">First Name*</label>
        <input
        type="text"
        placeholder="First Name"
        value={fname}
        onChange={(e)=>setFName(e.target.value)}
        required
        />
    </div>
    <div>
        <label className="f-style">Last Name*</label>
        <input
        type="text"
        placeholder="Last Name"
        value={lname}
        onChange={(e)=>setLName(e.target.value)}
        required
        />
    </div>
    </div> 
<div>
<label className="f-style">Email*</label>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>
</div>

<div>
     <label>Phone number</label>
     <input
     type="phoneno"
     placeholder="PhoneNumber"
     value={phoneno}
     onChange={(e)=>setPhoneNumber(e.target.value)}
     required
     />
</div>
<div style={{display:'flex', justifyContent:'space-between'}}>
<div>
     <label>Password</label>
     <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     required
     />
</div>
<div>
     <label>Confirm Password</label>
     <input
     type="password"
     placeholder="Confirm Password"
     value={confirmPassword}
     onChange={(e)=>setConfirmPassword(e.target.value)}
     required
     />
</div>
</div>
     <p className='policy'>By clicking below you confirm that you have read and agree to Codenest's <a href='#'>Privacy Policy</a></p>
<button type="submit" className="btn1">Register</button>

</form>
 <p className="hh">If already have an account? <a className="#" style={{cursor:'pointer'}}  onClick={() => navigate("/login")}>Login</a></p>

</div>

)

}

export default Register