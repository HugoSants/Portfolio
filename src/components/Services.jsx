import { Code, Monitor, Bot } from 'lucide-react'
import content from '../data/siteContent.json'
import styles from './Services.module.css'

const iconMap = {
  code: Code,
  monitor: Monitor,
  bot: Bot,
}

export default function Services() {
  const { services } = content

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>{services.title}</h2>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {services.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {Icon && <Icon size={32} />}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
