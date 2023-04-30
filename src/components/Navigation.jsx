import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/add">Add Note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;