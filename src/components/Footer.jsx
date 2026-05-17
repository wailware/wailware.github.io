import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-logo-mark">W</span>
            <span>wailware</span>
          </div>
          <p>Construido con React, Vite y ☕ desde Valencia.</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/wailware" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/wail-achalhi-09a627200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:achalhiwail@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Wail Achalhi · All rights reserved.</span>
      </div>
    </footer>
  )
}
