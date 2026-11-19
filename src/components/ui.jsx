import { ArrowRight, Dumbbell } from 'lucide-react'

export const container = 'container mx-auto px-6'
export const spacing = 'py-16 lg:py-24'
export const motion = 'transition duration-300 motion-reduce:transition-none'
export const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300'
export const muted = 'text-slate-300'
export const accent = 'text-blue-400'
export const heroPhoto = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85'
export const email = 'oi@atlasfitness.com.br'

export function contactLink(subject) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
}

export function Brand({ onClick }) {
  return (
    <a href="#inicio" onClick={onClick} className={`inline-flex items-center gap-3 text-sm uppercase tracking-widest hover:text-blue-300 ${motion} ${focus}`}>
      <span className="grid size-10 -skew-x-6 place-items-center rounded-sm bg-blue-600 text-white">
        <Dumbbell aria-hidden="true" className="size-5 skew-x-6 -rotate-45" />
      </span>
      <span><strong>Atlas</strong> <span className="text-blue-200">Fitness</span></span>
    </a>
  )
}

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-widest ${light ? 'text-blue-100' : 'text-blue-300'}`}>
      <span className="w-6 border-t border-current" aria-hidden="true" />
      {children}
    </p>
  )
}

export function Heading({ label, children, light = false }) {
  return (
    <div>
      <Eyebrow light={light}>{label}</Eyebrow>
      <h2 className="mt-4 text-balance text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">{children}</h2>
    </div>
  )
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-500',
  outline: 'border border-slate-500 text-white hover:border-blue-300 hover:bg-blue-500/20',
  white: 'bg-white text-slate-950 hover:bg-blue-100',
}

export function Action({ href, children, variant = 'primary', icon: Icon = ArrowRight, className = '', display = 'inline-flex', onClick }) {
  return (
    <a href={href} onClick={onClick} className={`group ${display} items-center justify-center gap-3 rounded-sm px-5 py-3 text-sm font-bold ${variants[variant]} ${motion} ${focus} ${className}`}>
      {children}
      <Icon className={`size-4 shrink-0 motion-safe:group-hover:translate-x-0.5 ${motion}`} aria-hidden="true" />
    </a>
  )
}
