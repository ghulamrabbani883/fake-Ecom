import React, { useState } from "react";
import "./style.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";
import { getUserAuth } from './../features/users/userSlice';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const userAuth = useSelector(getUserAuth)
  console.log(userAuth);

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser({userName, password}))
    setPassword('')
    setUserName('')
  }


  return (
    <div className="login">
      <div className="loginBox">
        <div className="loginHeader">
          <AiOutlineLogin size={28} />
          <h2>Login</h2>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="loginInputsWrapper">
            <div className="loginInput">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Username"
              />
            </div>
            <div className="loginInput">
              <label htmlFor="password">Username</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
            <div className="loginInput">
              <input type="submit" value={"Login"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
