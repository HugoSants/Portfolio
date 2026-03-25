import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {year} <span className={styles.highlight}>Hugo</span> Rocha dos Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
