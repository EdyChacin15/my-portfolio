import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Edymar Chacín.</h1>
        <h2 className={styles.subtitle}>Software Engineer & Web Developer.</h2>
        
        <p className={styles.description}>
          I am a Software Engineering student in my 11th trimester at URBE. 
          While I have experience working with <span className={styles.highlight}>Python, Java, and TypeScript</span>, 
          my core specialty lies in the JavaScript ecosystem, specifically <span className={styles.highlight}>React.js and Node.js</span>. 
          I focus on writing clean code, designing relational databases like PostgreSQL and MySQL, 
          and building scalable applications. Currently, I am developing a project management platform for my degree thesis.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;