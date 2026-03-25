import content from '../data/siteContent.json'
import styles from './About.module.css'

export default function About() {
  const { about } = content

  return (
    <section id="sobre-mim" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>{about.title}</h2>
        <div className={styles.divider} />
        <p className={styles.text}>
          {about.text}{' '}
          <span className={styles.highlight}>{about.highlight}</span>{' '}
          {about.textAfter}
        </p>
      </div>
    </section>
  )
}
