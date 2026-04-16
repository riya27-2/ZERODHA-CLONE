import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(user === "false");
  }, []);

    const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(true); 
    navigate("/");
  };
  return (
    
      <nav className="navbar navbar-expand-lg bg-light border-bottom bg-body-tertiary" style={{backgroundColor:"#FFF"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-2 mb-lg-0">
                 {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}

              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
