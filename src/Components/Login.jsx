import React, { useState } from "react";
import "./Login.css";
import login from "../assets/loginimg.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const nameValue = e.target.value;
    const name = e.target.name;
    if ("email" === name) {
      setEmail(nameValue);
    }
    if ("password" === name) {
      setPassword(nameValue);
    }
  };

  const handleSubmit = (e) => {
    if (email == "" || password == "") {
      alert("Please Enter proper detils");
    } else {
      e.preventDefault();
      let getDetail = JSON.parse(localStorage.getItem("user"));
      getDetail.map((currValue) => {
        let storeEmail = currValue.email;
        let storePassword = currValue.password;
        if (storeEmail == email && storePassword == password) {
          alert("Login Successfull");
          navigate("/");
        } else {
          return setError("Invalid Email or Password");
        }
      });
    }
  };
  return (
    <>
      <p>{error}</p>
      <div className="container-box">
        <div className="login-container">
          <div className="login-img">
            <img src={login} alt="" />
          </div>
          <div>
            <h1>Welcom back</h1>
            <p>Please enter your details</p>
            <form className="login" onSubmit={handleSubmit}>
              <label htmlFor="">Email address</label>
              <input type="email" name="email" onChange={handleInput} />
              <label htmlFor="">Password</label>
              <input type="text" name="password" onChange={handleInput} />
              <button>Login</button>
              <div className="google">
                <button>Sign in with Google</button>
              </div>
            </form>
            <p>
              Don't have an account <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
