import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import './Experience.css'

const projects = [
  {
    title: 'Predicción de precio eléctrico',
    sector: 'Sector energía renovable',
    bullets: [
      'Refactor del pipeline de entrenamiento e integración de MLflow para tracking de experimentos sobre el servidor interno.',
      'Añadido de configuración por CLI y soporte de nueva estructura de datos, mejorando reproducibilidad y trazabilidad.',
    ],
  },
  {
    title: 'Análisis de impacto promocional',
    sector: 'Sector retail',
    bullets: [
      'Optimización del pipeline para procesar datos transaccionales de gran volumen en memoria limitada (lectura por bloques).',
      'Implementación de selección automática de variables y validación cruzada sobre la regresión multifactor existente.',
    ],
  },
]

const stack = ['Python', 'pandas', 'scikit-learn', 'MLflow', 'Optuna', 'Git/Bitbucket', 'DVC', 'AWS S3', 'Linux']

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 / Experiencia</span>
          <h2 className="section-title">Donde he trabajado</h2>
          <p className="section-subtitle">
            Desarrollo pipelines de machine learning en producción para proyectos de cliente reales.
          </p>
        </motion.div>

        <motion.div
          className="exp-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="exp-header">
            <div className="exp-company">
              <div className="exp-icon">
                <Briefcase size={20} />
              </div>
              <div>
                <h3>ML Engineer</h3>
                <p>Solver Intelligent Analytics · Valencia</p>
              </div>
            </div>
            <div className="exp-date">
              <Calendar size={14} />
              Feb 2026 — Actualidad
            </div>
          </div>

          <div className="exp-projects">
            {projects.map((p, i) => (
              <div key={i} className="exp-project">
                <div className="exp-project-header">
                  <h4>{p.title}</h4>
                  <span className="exp-sector">{p.sector}</span>
                </div>
                <ul>
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="exp-stack">
            <span className="exp-stack-label">Stack</span>
            <div className="exp-stack-tags">
              {stack.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
