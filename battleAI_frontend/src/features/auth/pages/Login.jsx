import React from "react";
import "../styles/form.css";

const Login = ({ switchToRegister }) => {
  return (
    <div className="side front auth-form">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p onClick={switchToRegister}>
        Don't have an account? Register
      </p>
    </div>
  );
};

export default Login;