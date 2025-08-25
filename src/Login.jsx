import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleSUbmit(e) {
    e.preventDefault();

    console.log(Login);
  }
  return (
    <div>
      <form className="Login-Container">
        <div className="Login-Container-Wrapper">
          <input
            type="email"
            placeholder="E-mail"
            value={Login.email}
            onChange={(e) => setLogin({ ...Login, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={Login.password}
            onChange={(e) => setLogin({ ...Login, password: e.target.value })}
          />

          <button className="Login-Btn" onClick={(e) => handleSUbmit(e)}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
