import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {currentYear} Edymar Chacín. Built with React & CSS Modules.
      </p>
    </footer>
  );
};

export default Footer;