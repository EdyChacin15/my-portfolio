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
              Hello! I'm Edymar, a Software Engineering student in my 11th trimester at URBE. 
              My passion lies in solving logic problems and building efficient software solutions. 
              I find joy in the process of turning complex ideas into practical, user-friendly applications.
            </p>
            <p className={styles.paragraph}>
              My current focus is on <span className={styles.highlight}>full-stack web development</span> using React.js and Node.js. 
              Currently, I am developing a project management platform for my degree thesis.
            </p>
            <p className={styles.paragraph}>
              I believe in continuous learning and enjoy testing my logic in competitive programming marathons.
              When I'm not coding, I'm usually improving my English skills or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;