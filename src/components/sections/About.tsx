import SectionHeader from '../ui/SectionHeader';
import styles from './About.module.css';
import profilePic from '../../assets/edy.png'; 

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="About Me" />

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.hexagon}>
              <img src={profilePic} alt="Edymar Chacín" className={styles.image} />
            </div>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              I am a Software Engineering student in my 11th trimester at URBE. 
              I focus on building software applications that are practical and solve everyday problems.
            </p>
            <p className={styles.paragraph}>
              My main area of work is <span className={styles.highlight}>web development</span>. Currently, I am building a project management platform for my degree thesis, connecting a PostgreSQL RDBMS with a React.js interface.
            </p>
            <p className={styles.paragraph}>
              I also participate in university programming marathons to keep my logic skills sharp.
              Beyond coding, I am actively improving my English, as I consider constant learning essential to adapt to new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;