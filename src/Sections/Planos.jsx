import { Check } from 'lucide-react'
import { Action, Heading, accent, contactLink, container, muted, spacing } from '../components/ui'

const plans = [
  { name: 'Start', price: '89', description: 'O começo de uma grande mudança.', benefits: ['Acesso à musculação', 'Avaliação física inicial', 'App Atlas de treinos'] },
  { name: 'Performance', price: '129', description: 'Para quem quer ir além todos os dias.', benefits: ['Todas as modalidades', 'Avaliação física mensal', 'Acompanhamento profissional', 'App Atlas de treinos'], featured: true },
  { name: 'Elite', price: '179', description: 'Experiência completa, no seu ritmo.', benefits: ['Tudo do Performance', 'Acesso em qualquer unidade', 'Convidado 1x por semana', 'Toalha e armário exclusivos'] },
]

export default function Planos() {
  return (
    <section id="planos" tabIndex={-1} className={`bg-[#0d1c32] ${spacing}`}>
      <div className={container}>
        <div className="grid items-end gap-4 md:grid-cols-4">
          <div className="md:col-span-3"><Heading label="Planos Atlas">Escolha como<br /><span className={accent}>quer evoluir.</span></Heading></div>
          <p className={`text-sm leading-relaxed ${muted}`}>Sem atalhos. Sem limites. Só você, seu plano e a próxima conquista.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map(({ name, price, description, benefits, featured }) => (
            <article key={name} className={`flex flex-col border p-5 pt-8 lg:p-7 lg:pt-8 ${featured ? 'border-blue-500 bg-[#10284b]' : 'border-white/15 bg-[#0d213c]'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Atlas / {name}</p>
                {featured && <span className="bg-blue-600 px-2 py-1 text-xs font-bold text-white">Mais escolhido</span>}
              </div>
              <h3 className="mt-3 text-2xl font-bold">{name}</h3>
              <p className={`mt-1 text-sm ${muted}`}>{description}</p>
              <p className="mt-7 flex flex-wrap items-baseline gap-1 border-b border-white/15 pb-5">
                <span className="text-xs">R$</span>
                <strong className="text-4xl tracking-tight lg:text-5xl">{price}<span className="text-lg font-semibold tracking-normal">,90</span></strong>
                <span className={`text-xs ${muted}`}>/ mês</span>
              </p>
              <Action href={contactLink(`Interesse no plano ${name}`)} variant={featured ? 'primary' : 'outline'} className="mt-5 w-full">Escolher plano<span className="sr-only"> {name}</span></Action>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-300">O que está incluído</p>
              <ul className="mt-3 grid gap-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={`mt-4 text-xs ${muted}`}>* Valores ilustrativos. Consulte as condições na unidade.</p>
      </div>
    </section>
  )
}
