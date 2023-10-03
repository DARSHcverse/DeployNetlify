import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <><nav className="navbar_background">
      <div className="left">
        <ul className="nav-list">
          <li><a href="">DevLink Marketplace</a></li>
        </ul>
      </div>
      <div className="right">
        <ul className="nav-list">
          <li><a href="">Find Dev</a></li>
          <li><a href="">Find Jobs</a></li>
          <li><Link to='/'>Login</Link></li>
          <li><Link to='signup'>Create Account</Link></li>
        </ul>
      </div>
    </nav><div><br /></div></>
    
  );
}
export default NavBar