import React, { useState } from 'react';
import "../styles/form.css";

const Register = ({ switchToLogin }) => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState(null)
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
  return (
    <div className="side back auth-form">
      <h2>Register</h2>
      <form>
        <input onChange={(e)=>{
            setusername(e.target.value)
        }} type="text" value={username} placeholder="username" required />
        <input onChange={(e)=>{
            setmobile(e.target.value)
        }} type='tel' value={mobile} placeholder='mobile' required />
        <input onChange={(e)=>{
            setemail(e.target.value)
        }} type="email" value={email} placeholder="Email" required />
        <input onChange={(e)=>{
            setpassword(e.target.value)
        }} type="password" value={password} placeholder="Password" required />
        
        <input onChange={(e)=>{
            setconfirm(e.target.value)
        }} type="password" value={confirm} className={password===confirm?"match":"no-match"} placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p onClick={switchToLogin}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;