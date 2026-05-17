# Wailware Portfolio

Portfolio personal de Wail Achalhi — ML Engineer.

🌐 **Live**: [wailware.github.io](https://wailware.github.io)

## Stack

- **React 18** + **Vite** — frontend ágil con HMR
- **Framer Motion** — animaciones declarativas
- **Lucide Icons** — iconografía consistente
- **CSS moderno** — sin frameworks, todo a medida con design tokens

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (genera /dist)
npm run build

# Previsualizar el build
npm run preview
```

## Despliegue

El despliegue es **automático** vía GitHub Actions. Cada push a `main` dispara el workflow `.github/workflows/deploy.yml` que:

1. Construye la app con Vite
2. Sube el artefacto `dist/` a GitHub Pages

### Configuración inicial (una sola vez)

1. Ve al repo en GitHub → **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. Haz push a `main` y espera ~1 minuto

## Estructura

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Nav.jsx          → Navegación fija con scroll detection
│   ├── Background.jsx   → Grid animado + orbs flotantes
│   ├── Hero.jsx         → Sección principal
│   ├── About.jsx        → Sobre mí
│   ├── Experience.jsx   → Solver
│   ├── Projects.jsx     → Proyectos (TFG destacado + GitHub)
│   ├── Skills.jsx       → Skills agrupados por categoría
│   ├── Certifications.jsx → Certificados verificables
│   ├── Contact.jsx      → CTA + canales de contacto
│   └── Footer.jsx
└── styles/
    └── global.css       → Tokens de diseño + base
```

## Personalización rápida

- **Colores y tipografía**: `src/styles/global.css` → `:root`
- **Proyectos**: `src/components/Projects.jsx` → array `projects`
- **Skills**: `src/components/Skills.jsx` → array `groups`
- **Certificaciones**: `src/components/Certifications.jsx` → array `certs`
- **Experiencia**: `src/components/Experience.jsx`

---

Construido con cariño desde Valencia 🌊
