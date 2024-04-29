
import React from 'react';
import './Navbar.css';
import logo from '../../Images/picofme.png';
import { signOut } from 'firebase/auth';
import { database } from '../../FirebaseConfig';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database)
      .then(() => {
        history('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <button className="signout-btn" onClick={handleClick}>SignOut</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
