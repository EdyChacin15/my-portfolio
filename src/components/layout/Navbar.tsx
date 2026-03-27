import { useRef } from 'react';
import { Menu, X } from 'lucide-react';

import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useClickOutside } from '../../hooks/useClickOutside';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const SECTION_IDS = NAV_LINKS.map(link => link.id);

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const activeSection = useActiveSection(SECTION_IDS);
  const menuRef = useRef<HTMLElement>(null);

  useClickOutside(menuRef, closeMenu);

  return (
    <header className={styles.header} ref={menuRef}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          EDYMAR<span>.</span>
        </a>

        <button 
          className={styles.hamburgerBtn} 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.linkList} ${isOpen ? styles.isOpen : ''}`}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a 
                href={`#${id}`} 
                className={`${styles.link} ${activeSection === id ? styles.active : ''}`} 
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;