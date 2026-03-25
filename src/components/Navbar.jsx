import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre-mim' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoHighlight}>H</span>ugo
        <span className={styles.logoDot}>.</span>
      </a>

      <button
        className={styles.menuToggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className={styles.navLink}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
