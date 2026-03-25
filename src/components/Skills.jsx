import { Server, Layout, GitBranch, Cloud } from 'lucide-react'
import content from '../data/siteContent.json'
import styles from './Skills.module.css'

const iconMap = {
  server: Server,
  layout: Layout,
  gitBranch: GitBranch,
  cloud: Cloud,
}

export default function Skills() {
  const { skills } = content

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>{skills.title}</h2>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {skills.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {Icon && <Icon size={28} />}
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
