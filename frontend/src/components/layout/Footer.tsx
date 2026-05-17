import { Gauge } from 'lucide-react'

export function Footer() {
  return (
    <footer>
      <div>
        <strong>Zentrus Tecnologia</strong>
        <span>Sites, sistemas e suporte para empresas.</span>
      </div>
      <span className="footer-badge">
        <Gauge aria-hidden="true" size={17} />
        Projetos objetivos e bem organizados
      </span>
    </footer>
  )
}
