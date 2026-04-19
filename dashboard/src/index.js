import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />

        <Route path="/profile" element= {<Profile /> }/>
        <Route path="*" element={<h1>Page Not Found</h1>} />




      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
