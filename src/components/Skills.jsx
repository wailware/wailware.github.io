import { motion } from 'framer-motion'
import { Code2, Brain, Sparkles, Eye, Server, Wrench } from 'lucide-react'
import './Skills.css'

const groups = [
  {
    icon: <Code2 size={20} />,
    title: 'Lenguajes',
    items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: <Brain size={20} />,
    title: 'ML / Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CNN', 'RNN', 'LSTM', 'Transformers'],
  },
  {
    icon: <Sparkles size={20} />,
    title: 'NLP & LLM Apps',
    items: ['RAG', 'LangChain', 'LangGraph', 'HyDE', 'BM25', 'Embeddings', 'Vector DBs', 'Agents AI'],
  },
  {
    icon: <Eye size={20} />,
    title: 'Computer Vision',
    items: ['YOLO', 'Vision Transformers', 'Clasificación', 'OpenCV'],
  },
  {
    icon: <Server size={20} />,
    title: 'Backend & MLOps',
    items: ['FastAPI', 'Flask', 'MLflow', 'Optuna', 'DVC', 'Docker'],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Herramientas',
    items: ['Git', 'Bitbucket', 'Linux', 'Bash', 'AWS S3', 'Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 / Skills</span>
          <h2 className="section-title">Mi caja de herramientas</h2>
          <p className="section-subtitle">
            Tecnologías que uso a diario, agrupadas por área.
          </p>
        </motion.div>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="skill-header">
                <div className="skill-icon">{g.icon}</div>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-tags">
                {g.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
