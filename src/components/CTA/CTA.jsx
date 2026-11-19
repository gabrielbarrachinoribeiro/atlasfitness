import { Action, Heading, contactLink, container, spacing } from '../ui'

export default function CTA() {
  return (
    <section id="aula" tabIndex={-1} className={`relative isolate overflow-hidden bg-blue-700 text-white ${spacing}`}>
      <div className={`${container} relative grid lg:grid-cols-3`}>
        <span aria-hidden="true" className="pointer-events-none absolute -top-32 right-6 -z-10 select-none text-[14rem] leading-none font-black text-white/10 lg:text-[24rem]">A</span>
        <div className="lg:col-span-2">
          <Heading light label="A sua próxima conquista começa agora">A sua melhor versão<br className="hidden sm:block" /> começa <span className="text-blue-200">aqui.</span></Heading>
          <p className="mt-5 text-sm leading-relaxed text-blue-50 sm:text-base">Dê o primeiro passo. Agende uma aula experimental e descubra tudo o que a Atlas pode oferecer.</p>
          <Action href={contactLink('Agendamento de aula experimental')} variant="white" className="mt-6">Agendar aula gratuita</Action>
        </div>
      </div>
    </section>
  )
}
