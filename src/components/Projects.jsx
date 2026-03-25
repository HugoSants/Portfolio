import { ExternalLink } from 'lucide-react'
import content from '../data/siteContent.json'
import styles from './Projects.module.css'

const BASE = import.meta.env.BASE_URL

export default function Projects() {
  const { projects } = content

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>{projects.title}</h2>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {projects.items.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={`${BASE}${project.image.replace(/^\//, '')}`}
                  alt={project.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardText}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Ver detalhes <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
