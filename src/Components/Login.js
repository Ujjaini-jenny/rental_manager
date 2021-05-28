import React from "react";
import "../UI/Card.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_background">
      <div className="Login">
        <h2 className="Login_Title">Sign In</h2>

        <div className="Login_group">
          <input type="text" className="Login_group_input" required="true" />
          <label className="Login_group_label">Email or phone number</label>
        </div>
        <div className="Login_group">
          <input
            type="password"
            className="Login_group_input"
            required="true"
          />
          <label className="Login_group_label">Password</label>
        </div>
        <div>
          <button type="button" className="Login_sign_in">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
