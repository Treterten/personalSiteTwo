import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  // Refactor to have onClick handlers for each of the Links, which use an associated style
  const [selectorStyle, setSelectorStyle] = useState(styles.selectorHome);
  // Function that takes in a position- sets the state to use the approriate class based on the
  // position (will need an object that stores the link name and appropriate class)
  /*
    Default: 5px left margin
  */
  return (
    <>
      <img src="./assets/logo.png" alt="my personal logo" className={styles.logo} />
      <div className={styles.navbar}>
        <div className={`${styles.selector} ${selectorStyle}`} />
        <div>
          <Link to="/" onClick={() => setSelectorStyle(styles.selectorHome)}>Home</Link>
          {/* Change the div class to fit the one on the state */}
        </div>
        <div>
          {/* Add the event handlers on each to go to the onClick handlers in the function */}
          <Link to="/aboutme" onClick={() => setSelectorStyle(styles.selectorAboutMe)}>About Me</Link>
        </div>
        <div>
          <Link to="/blog" onClick={() => setSelectorStyle(styles.selectorBlog)}>Blog</Link>
        </div>
        <div>
          <Link to="/projects" onClick={() => setSelectorStyle(styles.selectorProjects)}>Projects</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
