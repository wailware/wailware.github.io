// Diagramas SVG técnicos hechos a medida para cada proyecto

export const RAGPipelineDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="glow1">
        <feGaussianBlur stdDeviation="2" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Query input */}
    <g>
      <rect x="15" y="85" width="60" height="30" rx="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="45" y="104" textAnchor="middle" fill="#e6ecf5" fontSize="9" fontFamily="monospace">Query</text>
    </g>

    {/* Arrow 1 */}
    <line x1="78" y1="100" x2="98" y2="100" stroke="url(#ragGrad)" strokeWidth="1.5" markerEnd="url(#arr1)" />

    {/* Intent + HyDE */}
    <g>
      <rect x="100" y="55" width="80" height="28" rx="6" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth="1" />
      <text x="140" y="73" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="monospace">Intent</text>

      <rect x="100" y="118" width="80" height="28" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1" />
      <text x="140" y="136" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace">HyDE</text>
    </g>

    <line x1="183" y1="69" x2="208" y2="90" stroke="url(#ragGrad)" strokeWidth="1.5" />
    <line x1="183" y1="132" x2="208" y2="110" stroke="url(#ragGrad)" strokeWidth="1.5" />

    {/* Retrieval (BM25 + Vector) */}
    <g>
      <rect x="210" y="60" width="90" height="80" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1" filter="url(#glow1)" />
      <text x="255" y="80" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace" fontWeight="600">Retrieval</text>
      <text x="255" y="100" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">BM25</text>
      <text x="255" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">+ Vector</text>
      <text x="255" y="130" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">→ RRF</text>
    </g>

    <line x1="303" y1="100" x2="323" y2="100" stroke="url(#ragGrad)" strokeWidth="1.5" markerEnd="url(#arr1)" />

    {/* LLM */}
    <g>
      <circle cx="355" cy="100" r="28" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="1.5" filter="url(#glow1)" />
      <text x="355" y="98" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="monospace" fontWeight="600">LLM</text>
      <text x="355" y="110" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">+ citas</text>
    </g>

    {/* Vector DB indicator */}
    <g opacity="0.5">
      <rect x="215" y="155" width="80" height="20" rx="4" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3,2" />
      <text x="255" y="168" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">ChromaDB</text>
    </g>

    {/* Dots animation */}
    <circle cx="45" cy="40" r="1.5" fill="#06b6d4" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="35" r="1.5" fill="#8b5cf6" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="355" cy="40" r="1.5" fill="#ec4899" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
    </circle>

    <defs>
      <marker id="arr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#8b5cf6" />
      </marker>
    </defs>
  </svg>
)

export const LangGraphDiagram = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="lgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="glow2">
        <feGaussianBlur stdDeviation="2.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Connection lines (background) */}
    <g stroke="rgba(99,102,241,0.4)" strokeWidth="1.2" fill="none">
      <path d="M 80 110 Q 130 60 180 70" />
      <path d="M 80 110 Q 130 110 180 110" />
      <path d="M 80 110 Q 130 160 180 150" />
      <path d="M 220 70 Q 270 90 320 110" />
      <path d="M 220 110 Q 270 110 320 110" />
      <path d="M 220 150 Q 270 130 320 110" />
    </g>

    {/* Node: Start */}
    <g>
      <circle cx="60" cy="110" r="22" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth="1.5" filter="url(#glow2)" />
      <text x="60" y="114" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="monospace" fontWeight="600">START</text>
    </g>

    {/* Middle nodes (6 nodos) */}
    <g>
      <rect x="170" y="55" width="60" height="28" rx="6" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1" />
      <text x="200" y="73" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">intent</text>
    </g>
    <g>
      <rect x="170" y="96" width="60" height="28" rx="6" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1" />
      <text x="200" y="114" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">retrieve</text>
    </g>
    <g>
      <rect x="170" y="137" width="60" height="28" rx="6" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1" />
      <text x="200" y="155" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">analyze</text>
    </g>

    {/* End */}
    <g>
      <circle cx="340" cy="110" r="22" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1.5" filter="url(#glow2)" />
      <text x="340" y="114" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace" fontWeight="600">END</text>
    </g>

    {/* Labels */}
    <text x="200" y="30" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">LangGraph · 6 nodos</text>
    <text x="200" y="200" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">temporal · estadística · response</text>

    {/* Pulse animation on edges */}
    <circle r="2" fill="#06b6d4">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 80 110 Q 130 110 180 110" />
    </circle>
    <circle r="2" fill="#8b5cf6">
      <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 220 110 Q 270 110 320 110" />
    </circle>
  </svg>
)

export const TransformerDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="trGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>

    {/* Layers stacked (Transformer architecture visual) */}
    <g>
      <rect x="140" y="20" width="120" height="22" rx="5" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="1" />
      <text x="200" y="35" textAnchor="middle" fill="#f9a8d4" fontSize="8" fontFamily="monospace">Output Embedding</text>
    </g>
    <g>
      <rect x="140" y="48" width="120" height="22" rx="5" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" strokeWidth="1" />
      <text x="200" y="63" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">Feed Forward</text>
    </g>
    <g>
      <rect x="140" y="76" width="120" height="22" rx="5" fill="rgba(139,92,246,0.18)" stroke="#a78bfa" strokeWidth="1" />
      <text x="200" y="91" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">Add &amp; Norm</text>
    </g>
    <g>
      <rect x="140" y="104" width="120" height="34" rx="5" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="1.2" />
      <text x="200" y="120" textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="monospace" fontWeight="600">Multi-Head</text>
      <text x="200" y="132" textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="monospace" fontWeight="600">Attention</text>
    </g>
    <g>
      <rect x="140" y="144" width="120" height="22" rx="5" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1" />
      <text x="200" y="159" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">Input Embedding</text>
    </g>

    {/* Attention heads visualization (left) */}
    <g opacity="0.7">
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <line x1={30} y1={50 + i * 22} x2={120} y2={50 + i * 22 + (i % 2 ? -8 : 8)} stroke="#06b6d4" strokeWidth="0.6" opacity={0.4 + i * 0.1} />
          <circle cx={30} cy={50 + i * 22} r="2.5" fill="#06b6d4" />
          <circle cx={120} cy={50 + i * 22 + (i % 2 ? -8 : 8)} r="2.5" fill="#06b6d4" />
        </g>
      ))}
    </g>

    {/* Right side - more attention connections */}
    <g opacity="0.7">
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <line x1={280} y1={50 + i * 22 + (i % 2 ? -8 : 8)} x2={370} y2={50 + i * 22} stroke="#ec4899" strokeWidth="0.6" opacity={0.4 + i * 0.1} />
          <circle cx={280} cy={50 + i * 22 + (i % 2 ? -8 : 8)} r="2.5" fill="#ec4899" />
          <circle cx={370} cy={50 + i * 22} r="2.5" fill="#ec4899" />
        </g>
      ))}
    </g>

    {/* Title */}
    <text x="200" y="190" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Transformer Block · LLaMA arch</text>
  </svg>
)

export const VisionDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="vitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>

    {/* Image with patch grid */}
    <g>
      <rect x="30" y="50" width="100" height="100" rx="4" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.2" />
      {[0,1,2,3].map(r =>
        [0,1,2,3].map(c => (
          <rect
            key={`${r}-${c}`}
            x={30 + c * 25}
            y={50 + r * 25}
            width="25"
            height="25"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.4"
            opacity="0.5"
          >
            <animate attributeName="fill" values="rgba(245,158,11,0);rgba(245,158,11,0.3);rgba(245,158,11,0)" dur="3s" begin={`${(r+c)*0.15}s`} repeatCount="indefinite" />
          </rect>
        ))
      )}
    </g>

    {/* Arrow */}
    <line x1="140" y1="100" x2="170" y2="100" stroke="url(#vitGrad)" strokeWidth="1.5" markerEnd="url(#arrV)" />
    <defs>
      <marker id="arrV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
      </marker>
    </defs>

    {/* Patch embeddings */}
    <g>
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="180" y={50 + i * 16} width="40" height="10" rx="2"
          fill={`rgba(245,158,11,${0.3 + i*0.08})`} stroke="#f59e0b" strokeWidth="0.5" />
      ))}
      <text x="200" y="170" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">patches</text>
    </g>

    {/* Arrow 2 */}
    <line x1="230" y1="100" x2="260" y2="100" stroke="url(#vitGrad)" strokeWidth="1.5" markerEnd="url(#arrV)" />

    {/* Transformer Encoder */}
    <g>
      <rect x="265" y="55" width="100" height="90" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.2" />
      <text x="315" y="80" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace" fontWeight="600">Transformer</text>
      <text x="315" y="94" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace" fontWeight="600">Encoder</text>
      <text x="315" y="118" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">+ class token</text>
      <text x="315" y="132" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">→ MLP head</text>
    </g>

    {/* Label */}
    <text x="80" y="40" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Image · 16×16 patches</text>
  </svg>
)

export const VectorDBDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="vdbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>

    {/* Documents */}
    <g>
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={25 + i*4} y={50 + i*4} width="50" height="65" rx="3" fill="rgba(20,184,166,0.08)" stroke="#14b8a6" strokeWidth="1" />
        </g>
      ))}
      <line x1="35" y1="65" x2="65" y2="65" stroke="#14b8a6" strokeWidth="0.5" />
      <line x1="35" y1="73" x2="60" y2="73" stroke="#14b8a6" strokeWidth="0.5" />
      <line x1="35" y1="81" x2="65" y2="81" stroke="#14b8a6" strokeWidth="0.5" />
      <text x="50" y="135" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">docs</text>
    </g>

    {/* Chunks */}
    <g>
      <text x="120" y="50" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">chunks</text>
      {[0,1,2,3].map(i => (
        <rect key={i} x="100" y={60 + i*18} width="40" height="12" rx="2"
          fill="rgba(20,184,166,0.15)" stroke="#14b8a6" strokeWidth="0.6" />
      ))}
    </g>

    {/* Arrow */}
    <line x1="148" y1="100" x2="175" y2="100" stroke="url(#vdbGrad)" strokeWidth="1.5" markerEnd="url(#arrVD)" />
    <defs>
      <marker id="arrVD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9" />
      </marker>
    </defs>

    {/* Embedding model */}
    <g>
      <rect x="180" y="80" width="60" height="40" rx="6" fill="rgba(14,165,233,0.12)" stroke="#0ea5e9" strokeWidth="1.2" />
      <text x="210" y="97" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="monospace">embedding</text>
      <text x="210" y="110" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="monospace">model</text>
    </g>

    {/* Arrow 2 */}
    <line x1="244" y1="100" x2="271" y2="100" stroke="url(#vdbGrad)" strokeWidth="1.5" markerEnd="url(#arrVD)" />

    {/* Vector space visualization */}
    <g>
      <circle cx="320" cy="100" r="50" fill="none" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.5" />
      <circle cx="320" cy="100" r="35" fill="none" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.4" />
      <circle cx="320" cy="100" r="20" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3" />

      {/* Vectors as dots */}
      {[
        [305, 85], [330, 80], [340, 105], [320, 120], [300, 110],
        [315, 95], [328, 95], [318, 105], [310, 100], [325, 110]
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#0ea5e9">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i*0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      <text x="320" y="170" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">vector space</text>
    </g>
  </svg>
)

export const FraudDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="fraGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>

    {/* Transactions stream */}
    <g>
      <text x="60" y="35" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">transactions</text>
      {[0,1,2,3,4,5,6].map(i => {
        const isFraud = i === 3
        return (
          <g key={i}>
            <rect x="20" y={50 + i*18} width="80" height="14" rx="2"
              fill={isFraud ? "rgba(239,68,68,0.3)" : "rgba(99,102,241,0.1)"}
              stroke={isFraud ? "#ef4444" : "#475569"} strokeWidth="0.8" />
            <text x="30" y={61 + i*18} fill={isFraud ? "#fca5a5" : "#94a3b8"} fontSize="6" fontFamily="monospace">
              {isFraud ? "⚠ €4,892" : `€${Math.floor(20 + i*15)}.${i*2}${i}`}
            </text>
          </g>
        )
      })}
    </g>

    {/* Arrow */}
    <line x1="110" y1="115" x2="140" y2="115" stroke="url(#fraGrad)" strokeWidth="1.5" markerEnd="url(#arrF)" />
    <defs>
      <marker id="arrF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#f97316" />
      </marker>
    </defs>

    {/* MLP layers */}
    <g>
      <text x="200" y="45" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">MLP</text>
      {/* Input layer */}
      {[0,1,2,3,4].map(i => (
        <circle key={`in-${i}`} cx="155" cy={60 + i*20} r="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="0.8" />
      ))}
      {/* Hidden layer */}
      {[0,1,2,3].map(i => (
        <circle key={`h-${i}`} cx="200" cy={70 + i*20} r="4" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="0.8" />
      ))}
      {/* Output */}
      <circle cx="245" cy="115" r="6" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1.2" />

      {/* Connections */}
      {[0,1,2,3,4].map(i =>
        [0,1,2,3].map(j => (
          <line key={`l1-${i}-${j}`} x1="159" y1={60 + i*20} x2="196" y2={70 + j*20}
            stroke="#475569" strokeWidth="0.3" opacity="0.5" />
        ))
      )}
      {[0,1,2,3].map(i => (
        <line key={`l2-${i}`} x1="204" y1={70 + i*20} x2="241" y2="115"
          stroke="#475569" strokeWidth="0.3" opacity="0.5" />
      ))}
    </g>

    {/* Output decision */}
    <g>
      <rect x="280" y="95" width="80" height="40" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.2" />
      <text x="320" y="113" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace" fontWeight="600">FRAUD</text>
      <text x="320" y="125" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">p = 0.94</text>
    </g>

    <text x="320" y="65" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">ROC · PR</text>
  </svg>
)

export const SentimentDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="sentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>

    {/* Text inputs */}
    <g>
      <rect x="20" y="50" width="110" height="22" rx="4" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeWidth="0.8" />
      <text x="30" y="65" fill="#86efac" fontSize="7.5" fontFamily="monospace">"Excelente producto"</text>

      <rect x="20" y="80" width="110" height="22" rx="4" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="0.8" />
      <text x="30" y="95" fill="#fca5a5" fontSize="7.5" fontFamily="monospace">"Pésimo, no funciona"</text>

      <rect x="20" y="110" width="110" height="22" rx="4" fill="rgba(148,163,184,0.08)" stroke="#94a3b8" strokeWidth="0.8" />
      <text x="30" y="125" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace">"Llegó a tiempo"</text>

      <rect x="20" y="140" width="110" height="22" rx="4" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeWidth="0.8" />
      <text x="30" y="155" fill="#86efac" fontSize="7.5" fontFamily="monospace">"Lo recomiendo"</text>
    </g>

    {/* Arrow */}
    <line x1="140" y1="106" x2="170" y2="106" stroke="url(#sentGrad)" strokeWidth="1.5" markerEnd="url(#arrS)" />
    <defs>
      <marker id="arrS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#14b8a6" />
      </marker>
    </defs>

    {/* Model box */}
    <g>
      <rect x="180" y="80" width="80" height="55" rx="8" fill="rgba(20,184,166,0.1)" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="220" y="100" textAnchor="middle" fill="#5eead4" fontSize="9" fontFamily="monospace" fontWeight="600">NLP</text>
      <text x="220" y="115" textAnchor="middle" fill="#5eead4" fontSize="9" fontFamily="monospace" fontWeight="600">Classifier</text>
      <text x="220" y="128" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">supervised</text>
    </g>

    {/* Arrow */}
    <line x1="265" y1="106" x2="290" y2="106" stroke="url(#sentGrad)" strokeWidth="1.5" markerEnd="url(#arrS)" />

    {/* Sentiment outputs */}
    <g>
      <circle cx="320" cy="65" r="13" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="1.2" />
      <text x="320" y="69" textAnchor="middle" fontSize="11">+</text>

      <circle cx="320" cy="106" r="13" fill="rgba(148,163,184,0.15)" stroke="#94a3b8" strokeWidth="1.2" />
      <text x="320" y="110" textAnchor="middle" fill="#cbd5e1" fontSize="11">=</text>

      <circle cx="320" cy="147" r="13" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.2" />
      <text x="320" y="151" textAnchor="middle" fontSize="11">−</text>
    </g>

    <text x="358" y="69" fill="#86efac" fontSize="8" fontFamily="monospace">positivo</text>
    <text x="358" y="110" fill="#cbd5e1" fontSize="8" fontFamily="monospace">neutro</text>
    <text x="358" y="151" fill="#fca5a5" fontSize="8" fontFamily="monospace">negativo</text>
  </svg>
)

export const RegressionDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="regGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>

    {/* Axes */}
    <g stroke="#475569" strokeWidth="1" fill="none">
      <line x1="50" y1="170" x2="370" y2="170" />
      <line x1="50" y1="170" x2="50" y2="30" />
    </g>

    {/* Axis labels */}
    <text x="210" y="190" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">distance · hour · features</text>
    <text x="20" y="100" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace" transform="rotate(-90 20 100)">duration</text>

    {/* Scatter points */}
    {[
      [80,150],[100,140],[120,135],[140,125],[160,115],[180,105],[200,98],
      [220,90],[240,85],[260,75],[280,68],[300,60],[320,55],[340,48],
      [90,145],[110,130],[130,128],[150,118],[170,108],[190,100],[210,92],
      [230,82],[250,78],[270,70],[290,63],[310,58],[330,50]
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2.5" fill="#facc15" opacity="0.7" />
    ))}

    {/* Regression curve */}
    <path d="M 60 158 Q 200 105 360 42" stroke="url(#regGrad)" strokeWidth="2" fill="none">
      <animate attributeName="stroke-dasharray" values="0 600;600 0" dur="3s" begin="0s" fill="freeze" />
    </path>

    {/* Prediction point */}
    <g>
      <line x1="280" y1="160" x2="280" y2="68" stroke="#06b6d4" strokeWidth="0.6" strokeDasharray="2,2" opacity="0.6" />
      <line x1="50" y1="68" x2="280" y2="68" stroke="#06b6d4" strokeWidth="0.6" strokeDasharray="2,2" opacity="0.6" />
      <circle cx="280" cy="68" r="5" fill="#06b6d4" stroke="#0a0f1c" strokeWidth="2" />
    </g>

    <text x="290" y="60" fill="#67e8f9" fontSize="7" fontFamily="monospace">prediction</text>
    <text x="350" y="25" fill="#94a3b8" fontSize="8" fontFamily="monospace">RMSLE</text>
  </svg>
)

export const AudioDiagram = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="diagram-svg">
    <defs>
      <linearGradient id="audGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>

    {/* Mic icon */}
    <g>
      <rect x="40" y="80" width="20" height="35" rx="10" fill="none" stroke="#a855f7" strokeWidth="1.5" />
      <line x1="50" y1="120" x2="50" y2="135" stroke="#a855f7" strokeWidth="1.5" />
      <line x1="40" y1="135" x2="60" y2="135" stroke="#a855f7" strokeWidth="1.5" />
      <path d="M 32 100 A 18 18 0 0 0 68 100" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
      <text x="50" y="155" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">mic</text>
    </g>

    {/* Waveform */}
    <g>
      {Array.from({length: 50}).map((_, i) => {
        const x = 90 + i * 5
        const amp = 30 * Math.sin(i * 0.4) * Math.exp(-Math.pow((i - 25) / 15, 2))
        return (
          <line
            key={i}
            x1={x} y1={100 - Math.abs(amp)}
            x2={x} y2={100 + Math.abs(amp)}
            stroke="url(#audGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.5 + Math.abs(amp)/40}
          >
            <animate
              attributeName="opacity"
              values={`${0.5 + Math.abs(amp)/40};1;${0.5 + Math.abs(amp)/40}`}
              dur="2s"
              begin={`${i*0.04}s`}
              repeatCount="indefinite"
            />
          </line>
        )
      })}
    </g>

    {/* Center line */}
    <line x1="85" y1="100" x2="345" y2="100" stroke="#475569" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.4" />

    {/* WAV output */}
    <g>
      <rect x="350" y="85" width="40" height="30" rx="4" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1" />
      <text x="370" y="104" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">.wav</text>
    </g>

    <text x="217" y="175" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">audio · signal · sampling</text>
  </svg>
)
