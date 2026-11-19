import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Heading, accent, container, focus, motion, muted, spacing } from '../components/ui'

export const modalities = [
  ['musculacao', 'Musculação', 'Força construída com técnica e propósito.', 'photo-1534438327276-14e5300c3a48'],
  ['funcional', 'Funcional', 'Movimento inteligente para a vida real.', 'photo-1518611012118-696072aa579a'],
  ['cross-training', 'Cross Training', 'Supere limites. Um treino de cada vez.', 'photo-1517836357463-d25dfeac3438'],
  ['spinning', 'Spinning', 'Energia coletiva, ritmo e superação.', 'photo-1540497077202-7c8a3999166f'],
]

export default function Modalidades() {
  return (
    <section id="modalidades" tabIndex={-1} className={spacing}>
      <div className={container}>
        <div className="grid items-end gap-4 md:grid-cols-4">
          <div className="md:col-span-3"><Heading label="Movimento para todos">Encontre seu<br /><span className={accent}>próximo desafio.</span></Heading></div>
          <p className={`text-sm leading-relaxed ${muted}`}>Um universo de possibilidades para você encontrar o seu jeito de evoluir.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map(([id, name, description, photo]) => (
            <a
              key={id}
              id={id}
              href="#planos"
              aria-label={`Ver planos para ${name}`}
              className={`group relative isolate flex aspect-[4/5] cursor-pointer scroll-mt-6 items-end overflow-hidden bg-slate-800 p-5 transition duration-300 ease-out hover:shadow-lg hover:shadow-blue-950/70 motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none ${focus}`}
            >
              <img src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=700&q=80`} alt="" loading="lazy" className={`absolute inset-0 -z-20 size-full object-cover motion-safe:group-hover:scale-105 ${motion}`} />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950 via-slate-950/25 to-slate-950/10" />
              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 bg-blue-500/20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${motion}`} />
              <span
                aria-hidden="true"
                className={`absolute right-4 top-4 rounded-full border border-white/70 bg-slate-950/30 p-2.5 text-white group-hover:border-blue-500 group-hover:bg-blue-600 group-focus-visible:border-blue-500 group-focus-visible:bg-blue-600 ${motion}`}
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
              <div><h3 className="text-xl font-bold sm:text-2xl">{name}</h3><p className="mt-2 text-sm text-slate-200">{description}</p></div>
            </a>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-white/15 pb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Encontre o seu ritmo. A gente vai junto.</p>
          <a href="#planos" className={`inline-flex items-center gap-3 py-2 text-sm font-semibold hover:text-blue-300 ${motion} ${focus}`}>Ver todos os planos <ArrowRight className="size-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
