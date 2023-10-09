import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Adda</h1>
            <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, enim! Delectus sint consectetur dolor perferendis dolorem voluptates assumenda repudiandae nihil!</p>
            <a href="mainto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero