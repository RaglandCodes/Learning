import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="Nav">
      
      <Link to = "/">
           <h1>Home</h1> </Link>
      <ul>
      
      <Link to = "/about"><li className="nav-links">About</li> </Link>
      <Link to = "/shop"><li className="nav-links">Shop</li></Link>
      </ul>
    </div>
  );
}

export default Nav;
