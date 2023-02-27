import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h1><Link to="/">BookStore CMS</Link></h1>
      <ul id="nav-mobile" className="right">
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/catagories">CATEGORIES</Link></li>
      </ul>

    </div>
  );
}

export default NavBar;
