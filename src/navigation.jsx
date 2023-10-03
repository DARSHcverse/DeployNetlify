import React,{ useState }  from "react";
import { Link } from "react-router-dom";
import Login from "./login";

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <><nav className="navbar_background">
      <div className="left">
        <ul className="nav-list">
          <li><Link to='home'>DevLink Marketplace</Link></li>
        </ul>
      </div>
      <div className="right">
        <ul className="nav-list">
          <li><Link to='dev'>Find Dev</Link></li>
          <li><Link to='job'>Find Jobs</Link></li>
          {isLoggedIn ? (
            <li><Link to='/' onClick={handleLoginClick}>Sign Out</Link></li>
          ) : (
            <li><Link to='/' onClick={handleLoginClick}>Login</Link></li>
          )}
          <li><Link to='signup'>Create Account</Link></li>
        </ul>
      </div>
    </nav><div><br /></div></>
    
  );
}
export default NavBar