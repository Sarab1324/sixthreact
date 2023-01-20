import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    const users = { user, email, password };
    console.log(users);

    navigate("/signin");
  };

  return (
    <div>
      <form onSubmit={SignUp}>
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          type="text"
          className="form-control my-3"
          placeholder="@username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          className="form-control my-3"
          placeholder="username@.com"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          className="form-control my-3"
          placeholder="*****"
        />
        <button className="btn btn-primary w-25">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
