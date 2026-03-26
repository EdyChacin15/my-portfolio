import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const activeSection = useActiveSection(['projects', 'skills', 'about', 'certificates', 'contact']);

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
          <li>
            <a 
              href="#projects" 
              className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`} 
              onClick={closeMenu}
            > Projects </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`${styles.link} ${activeSection === 'skills' ? styles.active : ''}`} 
              onClick={closeMenu}
            > Skills </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`} 
              onClick={closeMenu}
            > About </a>
          </li>
          <li>
            <a 
              href="#certificates" 
              className={`${styles.link} ${activeSection === 'certificates' ? styles.active : ''}`} 
              onClick={closeMenu}
            > Certificates </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`} 
              onClick={closeMenu}
            > Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;