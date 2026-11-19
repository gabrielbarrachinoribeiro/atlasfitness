import { Check, Dumbbell, Zap } from 'lucide-react'
import { Heading, accent, container, muted, spacing } from '../components/ui'

const features = [
  [Dumbbell, 'Equipamentos modernos', 'Tecnologia e qualidade para sua evolução.'],
  [Check, 'Acompanhamento profissional', 'Especialistas ao seu lado em cada etapa.'],
  [Zap, 'Ambiente completo', 'O espaço ideal para superar seus limites.'],
]

export default function Sobre() {
  return (
    <section id="sobre" tabIndex={-1} className={`bg-[#0d1c32] ${spacing}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-24`}>
        <div className="relative pb-12 pr-12 sm:pb-16 sm:pr-20">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85" alt="Área de treino da academia" loading="lazy" className="aspect-square w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 z-10 translate-x-4 translate-y-4 border border-blue-400/50" aria-hidden="true" />
          </div>
          <img src="https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&w=640&q=80" alt="Treino de força na academia" loading="lazy" className="absolute bottom-0 right-0 z-20 aspect-square w-2/5 border-8 border-[#0d1c32] object-cover" />
          <div className="absolute bottom-4 left-5 z-20 grid size-28 place-items-center rounded-full bg-blue-600 text-center text-xs font-bold uppercase leading-none text-white sm:size-32">
            <p className="-rotate-9">
              Desde
              <strong className="my-1 block text-xl sm:text-2xl">2014</strong>
              Em movimento
            </p>
          </div>
        </div>
        <div>
          <Heading label="Sobre a Atlas">Um novo padrão de <span className={accent}>treinamento.</span></Heading>
          <p className="mt-6 text-sm leading-relaxed sm:text-base">Acreditamos que cada pessoa tem uma força única esperando para ser descoberta. Por isso criamos um espaço onde estrutura de ponta, conhecimento e energia se encontram para transformar a sua jornada.</p>
          <p className={`mt-4 text-sm leading-relaxed sm:text-base ${muted}`}>Aqui, cada detalhe é pensado para você treinar melhor: equipamentos de qualidade, profissionais especializados e uma comunidade que celebra cada conquista.</p>
          <ul className="mt-7 divide-y divide-white/15 border-y border-white/15">
            {features.map(([Icon, title, description]) => (
              <li key={title} className="flex items-center gap-4 py-3">
                <span className="bg-blue-500/15 p-2.5 text-blue-300"><Icon className="size-5" aria-hidden="true" /></span>
                <div><h3 className="text-sm font-bold">{title}</h3><p className={`mt-1 text-xs ${muted}`}>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
