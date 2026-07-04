import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(fname, lname, email, phoneno, password);
  };

  return (
    <div className="container">

      <h2 className="create-code">
        Create CodeNest Account
      </h2>

      <form onSubmit={handleSubmit} className="demo-form">

        {/* First & Last Name */}
        <div className="name-row">

          <div className="input-group">
            <label>First Name *</label>
            <input
              className="register-input"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Last Name *</label>
            <input
              className="register-input"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLName(e.target.value)}
              required
            />
          </div>

        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email *</label>
          <input
            className="register-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="input-group">
          <label>Phone Number *</label>
          <input
            className="register-input"
            type="tel"
            placeholder="03XXXXXXXXX"
            value={phoneno}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="name-row">

          <div className="input-group">
            <label>Password *</label>
            <input
              className="register-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password *</label>
            <input
              className="register-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

        </div>

        <p className="policy">
          By clicking below you confirm that you have read and agree to
          CodeNest's{" "}
          <a href="#" className="policy-link">
            Privacy Policy
          </a>
        </p>

        <button type="submit" className="btn1">
          Register
        </button>

      </form>

      <p className="hh">
        Already have an account?{" "}
        <span
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>

    </div>
  );
}

export default Register;