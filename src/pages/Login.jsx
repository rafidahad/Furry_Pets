import React from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login Page</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required/>
            <FaUser className="icon"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Enter password" required/>
            <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox" />Remember me?</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="registration-link">
            <p>Don't have an account?</p>
            <a href="#">Register here</a>
            </div>
      </form>
    </div>
  );
}

export default Login;
