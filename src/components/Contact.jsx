import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">06 / Contacto</span>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-subtitle">
            ¿Una oportunidad, una colaboración, o simplemente charlar de ML? Mi bandeja está abierta.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact-main">
            <h3>Construyamos algo juntos.</h3>
            <p>
              Estoy disponible para nuevas oportunidades profesionales, especialmente
              en roles de <strong>ML Engineer, Data Scientist o roles especializados en NLP/RAG</strong>.
            </p>
            <a href="mailto:achalhiwail@gmail.com" className="btn btn-primary contact-cta">
              Enviar email <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:achalhiwail@gmail.com" className="contact-link">
              <Mail size={18} />
              <div>
                <span>Email</span>
                <strong>achalhiwail@gmail.com</strong>
              </div>
            </a>
            <a href="https://linkedin.com/in/wail-achalhi-09a627200" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={18} />
              <div>
                <span>LinkedIn</span>
                <strong>wail-achalhi</strong>
              </div>
            </a>
            <a href="https://github.com/wailware" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={18} />
              <div>
                <span>GitHub</span>
                <strong>wailware</strong>
              </div>
            </a>
            <div className="contact-link contact-link-static">
              <MapPin size={18} />
              <div>
                <span>Ubicación</span>
                <strong>Valencia, España</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
