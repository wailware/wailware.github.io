import { motion } from 'framer-motion'
import {
  Github, ExternalLink, Lock, Star,
  Brain, Network, Layers, Eye, Database,
  ShieldAlert, MapPin, MessageSquare, AudioLines
} from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'DocuAsist — TFG',
    private: true,
    featured: true,
    description: 'Sistema RAG full-stack para consulta conversacional de contratos laborales en español, con detección automática de infracciones contra el Estatuto de los Trabajadores. Pipeline LangGraph de 6 nodos sobre LLM y embeddings locales (Ollama).',
    tags: ['LangGraph', 'RAG', 'HyDE', 'BM25', 'RRF', 'Ollama', 'FastAPI', 'React', 'Docker'],
    icon: Network,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
  },
  {
    title: 'Advanced-RAG',
    repo: 'Advanced-RAG',
    description: 'RAG sobre PDFs con expansión de consulta (HyDE) y diagnóstico visual con UMAP para depurar recuperación. Indexación en ChromaDB y orquestación con LangChain.',
    tags: ['RAG', 'HyDE', 'ChromaDB', 'LangChain', 'UMAP', 'OpenAI API'],
    icon: Database,
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  },
  {
    title: 'Building LLaMA from Scratch',
    repo: 'Building-LLama4-from-Scratch',
    description: 'Exploración "from scratch" de un Transformer tipo LLaMA: tokenización, multi-head attention y feed-forward con notebooks explicativos orientados a comprender los mecanismos internos.',
    tags: ['Transformers', 'Attention', 'PyTorch', 'NLP'],
    icon: Brain,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    title: 'Vision Transformer (ViT)',
    repo: 'Vision-Transfomer',
    description: 'Notebook educativo de Vision Transformer para clasificación de imágenes, con evaluación mediante matriz de confusión y flujo experimental reproducible.',
    tags: ['ViT', 'Computer Vision', 'PyTorch', 'Jupyter'],
    icon: Eye,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  },
  {
    title: 'RAG-System',
    repo: 'RAG-System',
    description: 'RAG mínimo viable: ingesta de .txt, chunking y embeddings (text-embedding-3-small); búsqueda en Chroma y QA con LLM ligero, foco en fundamentos y buenas prácticas.',
    tags: ['RAG', 'Embeddings', 'Vector DB', 'Chroma'],
    icon: Layers,
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
  },
  {
    title: 'E-Commerce Fraud Detection',
    repo: 'E-Commerce-Fraud-Detection',
    description: 'Clasificación de fraude en transacciones de e-commerce con manejo de desbalanceo (BCEWithLogitsLoss + pos_weight) y evaluación ROC/PR, priorizando metodología y reproducibilidad.',
    tags: ['PyTorch', 'MLP', 'AUROC', 'AUPRC', 'Imbalanced'],
    icon: ShieldAlert,
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
  },
  {
    title: 'NYC Taxi Duration Prediction',
    repo: 'New-York-Taxi-Duration-Trip-Prediction',
    description: 'Solución Kaggle para predecir duración de viajes con features temporales y geoespaciales. MLP en espacio log1p y RMSLE como métrica en un pipeline limpio de entrenamiento y submission.',
    tags: ['Kaggle', 'Feature Engineering', 'PyTorch', 'Regression'],
    icon: MapPin,
    gradient: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
  },
  {
    title: 'Análisis de Sentimientos',
    repo: 'Analisis-de-Sentimientos-de-Valoraciones-de-Productos',
    description: 'Pipeline NLP para clasificar sentimiento en textos (valoraciones y tweets) con notebook reproducible y exportación de resultados para análisis posterior.',
    tags: ['NLP', 'Sentiment Analysis', 'Supervised', 'Python'],
    icon: MessageSquare,
    gradient: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
  },
  {
    title: 'pyaudio-basics',
    repo: 'pyaudio-basics',
    description: 'Grabación desde micrófono, procesamiento básico de señal y guardado en .wav, con visualización de forma de onda para inspección rápida.',
    tags: ['Audio', 'NumPy', 'Signal Processing'],
    icon: AudioLines,
    gradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">03 / Proyectos</span>
          <h2 className="section-title">Cosas que he construido</h2>
          <p className="section-subtitle">
            Una selección de proyectos académicos y personales en NLP, RAG, visión y ML clásico.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const IconComponent = p.icon
            return (
              <motion.article
                key={p.title}
                className={`project-card ${p.featured ? 'project-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div
                  className="project-cover"
                  style={{ background: p.gradient }}
                  aria-hidden="true"
                >
                  <div className="project-cover-pattern"></div>
                  <IconComponent className="project-cover-icon" size={56} strokeWidth={1.4} />
                  {p.featured && (
                    <span className="project-featured-tag">
                      <Star size={11} fill="currentColor" /> Destacado
                    </span>
                  )}
                </div>

                <div className="project-body">
                  <div className="project-top">
                    <div className="project-icon">
                      {p.private ? <Lock size={16} /> : <Github size={16} />}
                    </div>
                    {p.repo && (
                      <a
                        href={`https://github.com/wailware/${p.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver en GitHub"
                        className="project-link"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <h3 className="project-title">
                    {p.title}
                    {p.private && <span className="project-private-badge">privado</span>}
                  </h3>

                  <p className="project-desc">{p.description}</p>

                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
