import React, { useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileOpen(!isProfileOpen);
  }
  //check user login
   useEffect(() => {
    axios.get("http://localhost:3002/profile", {
      withCredentials: true
    })
    .then(res => {
      if (res.data.status) {
        setIsLoggedIn(true);
        setUser(res.data.user);
      }
    })
    .catch(() => {
      setIsLoggedIn(false);
    });
  }, []);
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }} >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }} >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }} >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }} >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }} >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          
        </ul>
        <hr />
       <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {user?.username?.charAt(0).toUpperCase() || "G"}
          </div>
          <p className="username">
            {isLoggedIn ? user?.username : "Guest"}
          </p>
        </div>
        {isProfileOpen && (
          <div className="profile-menu" >
            <ul >
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/profile" style={{textDecoration:"none"}} >Profile</Link>
                  </li>
                  <li>
                    <Link to="/logout" style={{textDecoration:"none"}}>Logout</Link>
              
            
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/signup" style={{textDecoration:"none"}}>Signup</Link>
                  </li>
                  <li>
                    <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
                  </li>
                  
                </>
              )
            }
            </ul>
          </div>
        )}
      </div>
    </div >
  );
};

export default Menu;
