import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "./ui/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../slice/searchSlice";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "testing@gmail.com" && password === "testing") {
      dispatch(setLoggedIn(true));
      navigate("/");
    } else {
      alert("Try using Email: testing@gmail.com & password: testing");
    }
  };

  return (
    <div className="login-section">
      <MetaData title="Login" />

      <div className="notify">
        <img src="/src/assets/Group 3.png" alt="moptro" />
      </div>
      <form action="" className="login-form" onSubmit={submitForm}>
        <div className="input-section">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
        <Link to="/">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
