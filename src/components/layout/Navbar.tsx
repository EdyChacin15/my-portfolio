import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          EDYMAR<span>.</span>
        </a>

        <button 
          className={styles.hamburgerBtn} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.linkList} ${isOpen ? styles.isOpen : ''}`}>
          <li><a href="#projects" className={styles.link} onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" className={styles.link} onClick={closeMenu}>Skills</a></li>
          <li><a href="#about" className={styles.link} onClick={closeMenu}>About</a></li>
          <li><a href="#certificates" className={styles.link} onClick={closeMenu}>Certificates</a></li>
          <li><a href="#contact" className={styles.link} onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;