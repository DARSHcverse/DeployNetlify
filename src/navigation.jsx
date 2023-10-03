import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <><nav className="navbar_background">
      <div className="left">
        <ul className="nav-list">
          <li><Link to='/'>DevLink Marketplace</Link></li>
        </ul>
      </div>
      <div className="right">
        <ul className="nav-list">
          <li><Link to='dev'>Find Dev</Link></li>
          <li><Link to='job'>Find Jobs</Link></li>
          <li><Link to='login'>Login</Link></li>
          <li><Link to='signup'>Create Account</Link></li>
        </ul>
      </div>
    </nav><div><br /></div></>
    
  );
}
export default NavBar