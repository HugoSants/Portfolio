import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import content from '../data/siteContent.json'
import styles from './Contact.module.css'

const iconMap = {
  mail: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
}

export default function Contact() {
  const { contact } = content

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>{contact.title}</h2>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {contact.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  {Icon && <Icon size={24} />}
                </div>
                <div>
                  <p className={styles.label}>{item.label}</p>
                  <p className={styles.value}>{item.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
