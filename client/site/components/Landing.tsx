import React from 'react';
import styles from '../styles/landing.module.css';
const Landing = () => (
  <div className={styles.centerDiv}>
    <img src='./assets/It me.jpg' className={styles.selfie}/>
    <div className={styles.textDiv}>
      <h1 className={styles.heading}>Hi, I'm Tre!<br /> I'm a software engineer.</h1>
      <p>I think that one of the most important aspects of tackling challenges is to find a way or make one. I've developed a stick-to-itiveness from a young age when it came to software engineering, as I wanted to make video game mods when I was 11. In high school, I led a programming club that participated in hackathons and created applications for clients. For our apps, I was a project manager and we utilized php and MySql to create full stack apps. When I moved on from high school, I was involved as a full-stack engineer for applications that used technologies including TypeScript, React, Amazon Web Services, MongoDB, and a wide variety of others. When I'm not programming, I'm usually taking hikes outside or going for a run with some friends, or maybe even practicing guitar! I also enjoy learning about political theory and philosophy, or just relaxing with a good video game.</p>
      <button className={styles.projectsButton}>Check out my projects!</button>
    </div>
  </div>
)

export default Landing;
