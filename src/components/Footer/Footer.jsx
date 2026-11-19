import { ArrowUpRight } from 'lucide-react'
import { modalities } from '../../Sections/Modalidades'
import { Brand, container, email, focus, motion, muted } from '../ui'

const explore = [['Sobre a Atlas', '#sobre'], ['Modalidades', '#modalidades'], ['Planos', '#planos'], ['Agende uma aula', '#aula']]
const linkClass = `text-sm text-slate-300 hover:text-blue-300 ${motion} ${focus}`
const labelClass = 'mb-4 text-xs font-semibold uppercase tracking-widest text-blue-300'

export default function Footer() {
  return (
    <footer id="contato" tabIndex={-1} className="bg-[#081323] py-10 lg:pt-16">
      <div className={container}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand />
            <p className={`mt-4 text-sm leading-relaxed ${muted}`}>Mais que treino. Um movimento<br className="hidden lg:block" /> para transformar sua história.</p>
          </div>
          <nav aria-label="Explore">
            <h2 className={labelClass}>Explore</h2>
            <ul className="grid gap-2">{explore.map(([name, href]) => <li key={href}><a className={linkClass} href={href}>{name}</a></li>)}</ul>
          </nav>
          <nav aria-label="Modalidades no rodapé">
            <h2 className={labelClass}>Modalidades</h2>
            <ul className="grid gap-2">{modalities.map(([id, name]) => <li key={id}><a className={linkClass} href={`#${id}`}>{name}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className={labelClass}>Vamos conversar</h2>
            <address className={`grid gap-2 text-sm not-italic ${muted}`}>
              <a className={linkClass} href="tel:+551130304040">(11) 3030-4040</a>
              <a className={`break-all ${linkClass}`} href={`mailto:${email}`}>{email}</a>
              <p>Rua dos Atletas, 120 · São Paulo, SP</p>
              <p>Seg–Sex, 6h–23h · Sáb, 8h–16h</p>
            </address>
          </div>
        </div>
        <div className={`mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs ${muted}`}>
          <p>© {new Date().getFullYear()} Atlas Fitness. Todos os direitos reservados.</p>
          <a href="#inicio" className={`inline-flex items-center gap-2 hover:text-blue-300 ${motion} ${focus}`}>Voltar ao início <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
