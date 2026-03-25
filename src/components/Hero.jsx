import content from '../data/siteContent.json'
import styles from './Hero.module.css'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { hero } = content

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <span className={styles.badge}>{hero.badge}</span>
          <h1 className={styles.name}>
            <span className={styles.highlight}>{hero.nameHighlight}</span>
            {' '}{hero.nameRest}
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <a href={hero.ctaLink} className={styles.ctaButton}>
            {hero.ctaButton}
          </a>
        </div>
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img
              src={`${BASE}${hero.profileImage.replace(/^\//, '')}`}
              alt={`${hero.nameHighlight} ${hero.nameRest}`}
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
    </section>
  )
}
