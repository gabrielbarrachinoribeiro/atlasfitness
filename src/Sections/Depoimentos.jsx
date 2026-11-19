import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { Heading, accent, container, focus, motion, muted, spacing } from '../components/ui'

const reviews = [
  ['Rafael Mendes', 'Aluno há 1 ano', 'Estrutura incrível e profissionais que realmente acompanham sua evolução. Hoje treino com mais propósito e me sinto melhor do que nunca.', 'photo-1500648767791-00dcc994a43e'],
  ['Camila Ribeiro', 'Aluna há 8 meses', 'O ambiente é inspirador e as aulas são sempre diferentes. A Atlas virou meu momento favorito do dia.', 'photo-1534528741775-53994a69daeb'],
  ['Mariana Costa', 'Aluna há 2 anos', 'A Atlas mudou completamente a minha relação com o treino. Encontrei uma equipe que acredita em mim até nos dias em que eu mesma duvido.', 'photo-1531123897727-8f129e1688ce'],
]

export default function Depoimentos() {
  const [index, setIndex] = useState(0)
  const orderedReviews = [...reviews.slice(index), ...reviews.slice(0, index)]
  const buttonClass = `cursor-pointer border border-white/25 p-3 hover:border-blue-400 hover:bg-blue-600 ${motion} ${focus}`

  function move(step) {
    setIndex((current) => (current + step + reviews.length) % reviews.length)
  }

  return (
    <section aria-label="Depoimentos" className={spacing}>
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Heading label="Histórias reais, força de verdade">Evolução que<br /><span className={accent}>inspira.</span></Heading>
          <div className="flex gap-2">
            <button type="button" className={buttonClass} aria-label="Depoimento anterior" onClick={() => move(-1)}><ArrowLeft className="size-4" aria-hidden="true" /></button>
            <button type="button" className={buttonClass} aria-label="Próximo depoimento" onClick={() => move(1)}><ArrowRight className="size-4" aria-hidden="true" /></button>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {orderedReviews.map(([name, memberSince, quote, photo], position) => (
            <figure key={name} className={`flex-col border border-white/15 bg-[#0d1e36] p-5 ${['flex', 'hidden sm:flex', 'hidden lg:flex'][position]}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-blue-300">
                <Quote className="size-6" aria-hidden="true" />
                <span role="img" aria-label="5 de 5 estrelas" className="flex gap-1">
                  {Array.from({ length: 5 }, (_, star) => <Star key={star} className="size-3.5 fill-current" aria-hidden="true" />)}
                </span>
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed">“{quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-4">
                <img src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&h=100&q=80`} alt="" loading="lazy" className="size-10 rounded-full object-cover" />
                <div><p className="text-sm font-semibold">{name}</p><p className={`text-xs ${muted}`}>{memberSince}</p></div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-blue-300" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Primeiro depoimento exibido</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="w-12 border-t border-blue-400/60" aria-hidden="true" />
          <span><span className="sr-only">de </span>{String(reviews.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
