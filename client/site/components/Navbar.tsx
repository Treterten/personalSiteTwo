import React from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <>
    <img src="./assets/logo.png" className={styles.logo}/>
    <div className={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <div className={styles.selector}></div>
      </div>
      <div>
        <Link to="/aboutme">About Me</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  </>
)
export default Navbar;