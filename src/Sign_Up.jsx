import React, { useState } from "react";
import "./Sign_Up.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Sign_Up = () => {
  const [inputLogin, setInputLogin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  function handleSUbmit(e) {
    e.preventDefault();

    console.log(inputLogin);
  }
  return (
    <div>
      {/* {inputLogin.firstName} - {inputLogin.lastName} */}
      <form className="Form-Container">
        <div className="Form-Container-Wrapper">
          <input
            className="Input-Container"
            type="text"
            placeholder="First Name"
            value={inputLogin.firstName}
            onChange={(e) =>
              setInputLogin({ ...inputLogin, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Last Name"
            value={inputLogin.lastName}
            onChange={(e) =>
              setInputLogin({ ...inputLogin, lastName: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="E-mail"
            value={inputLogin.email}
            onChange={(e) =>
              setInputLogin({ ...inputLogin, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Username"
            value={inputLogin.username}
            onChange={(e) =>
              setInputLogin({ ...inputLogin, username: e.target.value })
            }
          />

          <div className="Password">
            <input
              type="password"
              placeholder="Password"
              value={inputLogin.password}
              onChange={(e) =>
                setInputLogin({ ...inputLogin, password: e.target.value })
              }
            />

            {showPassword ? (
              <FaRegEye
                className="icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaRegEyeSlash
                className="icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="Password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={inputLogin.confirmPassword}
              onChange={(e) =>
                setInputLogin({
                  ...inputLogin,
                  confirmPassword: e.target.value,
                })
              }
            />
            {showCPassword ? (
              <FaRegEye
                className="icon"
                onClick={() => setShowCPassword(!showCPassword)}
              />
            ) : (
              <FaRegEyeSlash
                className="icon"
                onClick={() => setShowPassword(!showCPassword)}
              />
            )}
          </div>

          <button className="Btn" onClick={(e) => handleSUbmit(e)}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sign_Up;
