import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.text}>
          I am a Software Engineering student in my 11th trimester at URBE, based in Maracaibo, Venezuela. I have a strong passion for web development and creating applications that solve real-world problems.
        </p>
        <p className={styles.text}>
          When I am not coding or participating in programming marathons, you can usually find me <span className={styles.highlight}>roller skating</span>, playing the <span className={styles.highlight}>flute</span>, or trying to improve my skills on the guitar. I believe that maintaining a balance between logic and creativity makes me a better developer.
        </p>
      </div>
    </section>
  );
};

export default About;