import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-pulse"></span>
          Disponible para nuevas oportunidades
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hola, soy <span className="hero-name">Wail Achalhi</span>
          <br />
          construyo sistemas que <span className="hero-accent">aprenden</span>.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          ML Engineer especializado en <strong>NLP, RAG y Computer Vision</strong>.
          Diseño pipelines de machine learning de extremo a extremo,
          desde la ingesta de datos hasta el despliegue en producción.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            Ver proyectos <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactar <Mail size={16} />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="https://github.com/wailware" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/wail-achalhi-09a627200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:achalhiwail@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <ArrowDown size={20} />
      </div>
    </section>
  )
}
