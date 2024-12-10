import React, { useState } from "react";
import "./Register.css";
import signin from "../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // to store value in local storage
  const handleInput = (e) => {
    const name = e.target.name;
    const nameValue = e.target.value;
    setInput({ ...input, [name]: nameValue });
  };
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = JSON.parse(localStorage.getItem("user") || "[]"); // JSON into object
    let arr = [];
    arr = [...getData];
    arr.push(input);
    localStorage.setItem("user", JSON.stringify(arr)); //object into JSON
    alert("Logged in successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="container-box">
        <div className="login-container">
          <div className="sign-img">
            <img src={signin} alt="" />
          </div>
          <div>
            <h1>Ready to start</h1>
            <p>Please enter your details</p>
            <form className="login" onSubmit={handleSubmit}>
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
              />
              <label htmlFor="">Email address</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleInput}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleInput}
              />
              <button type="submit">Sign up</button>
              <div className="google">
                <button>Sign in with Google</button>
              </div>
            </form>
            <p>
              Already have an acccount <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
