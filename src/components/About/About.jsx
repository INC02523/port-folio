import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"  className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui dolorum maxime eveniet dolores saepe consequuntur voluptas dolore iusto fugit.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui dolorum maxime eveniet dolores saepe consequuntur voluptas dolore iusto fugit.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui dolorum maxime eveniet dolores saepe consequuntur voluptas dolore iusto fugit.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About