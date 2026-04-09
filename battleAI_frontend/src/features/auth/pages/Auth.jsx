// App.jsx
import React, { useState } from "react";
import Login from './Login'
import '../styles/auth.css'
import Register from "./Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className={`card ${isLogin ? "" : "rotate"}`}>
        <Login switchToRegister={() => setIsLogin(false)} />
        <Register switchToLogin={() => setIsLogin(true)} />
      </div>
    </div>
  );
}