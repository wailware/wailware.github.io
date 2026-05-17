import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import './Certifications.css'

const certs = [
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/LSM2ABEYWB4X',
    skills: ['Deep Learning', 'Neural Networks', 'Python'],
  },
  {
    title: 'Improving Deep Neural Networks',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/PMHY3WE963W8',
    skills: ['Hyperparameter Tuning', 'Regularization', 'TensorFlow'],
  },
  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/4B68VR2QQJ9Z',
    skills: ['Strategy', 'Transfer Learning', 'Multi-task'],
  },
  {
    title: 'Build RAG Applications: Get Started',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/1Y8XVCD5JJKX',
    skills: ['RAG', 'LLMs', 'Embeddings', 'LangChain'],
  },
  {
    title: 'LangChain for LLM Application Development',
    issuer: 'DeepLearning.AI',
    url: 'https://learn.deeplearning.ai/accomplishments/987bd684-58dc-4708-973c-c8a11b7251dc',
    skills: ['LangChain', 'LLMs', 'Agents', 'Prompt Engineering'],
  },
  {
    title: 'AI Agents in LangGraph',
    issuer: 'DeepLearning.AI',
    url: 'https://learn.deeplearning.ai/accomplishments/591df8a9-bd83-4b81-bc3b-5e8ece90444b',
    skills: ['LangGraph', 'Agents', 'Orchestration', 'RAG'],
  },
  {
    title: 'PyTorch: Fundamentals',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/09NNEUJ5Y4ZD',
    skills: ['PyTorch', 'Neural Networks', 'Training Pipeline'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 / Certificaciones</span>
          <h2 className="section-title">Formación complementaria</h2>
          <p className="section-subtitle">
            Cursos verificados completados en DeepLearning.AI y Coursera.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="cert-top">
                <div className="cert-icon"><Award size={18} /></div>
                <ExternalLink size={14} className="cert-link-icon" />
              </div>
              <h4>{c.title}</h4>
              <p className="cert-issuer">{c.issuer}</p>
              <div className="cert-skills">
                {c.skills.map(s => <span key={s} className="cert-skill">{s}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
