import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Languages } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 / Sobre mí</span>
          <h2 className="section-title">Quién soy</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Soy estudiante de 4º del <strong>Grado en Ciencia de Datos</strong> en la
              Universidad Europea de Valencia, y trabajo como <strong>ML Engineer</strong> en
              Solver Intelligent Analytics desde febrero de 2026.
            </p>
            <p>
              Mi especialización está en <strong>NLP, sistemas RAG y visión por computador</strong>,
              pero también trabajo con pipelines de ML clásicos en producción: gradient boosting,
              series temporales, MLOps con MLflow y entornos reproducibles.
            </p>
            <p>
              Me apasiona construir sistemas que funcionen de verdad, no demos.
              Cada proyecto que publico está pensado para ser reproducible,
              defendible y útil.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-item">
              <MapPin size={18} />
              <div>
                <span className="info-label">Ubicación</span>
                <span className="info-value">Valencia, España</span>
              </div>
            </div>
            <div className="info-item">
              <GraduationCap size={18} />
              <div>
                <span className="info-label">Formación</span>
                <span className="info-value">Grado en Ciencia de Datos</span>
              </div>
            </div>
            <div className="info-item">
              <Languages size={18} />
              <div>
                <span className="info-label">Idiomas</span>
                <span className="info-value">ES · AR · TZM · EN (C1) · FR (B1)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
