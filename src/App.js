import React from "react";
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./Stylesheets/nav.css";

const App = () => {
  return (
    <>
      <div className="container w-50">
        <nav className="my-5">
          <NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "")}
            to="/signup"
          >
            Sign up
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "")}
            to="/signin"
          >
            Sign in
          </NavLink>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:name" element={<Timeline />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />}>
            <Route path="/signin/profile" element={<Profile />} />
            <Route path="/signin/user" element={<User />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
