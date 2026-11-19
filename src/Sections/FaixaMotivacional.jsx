import { Action, Heading, accent, container, heroPhoto, spacing } from '../components/ui'

export default function FaixaMotivacional() {
  return (
    <section className={`relative isolate bg-slate-900 ${spacing}`}>
      <img src={heroPhoto} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#081323] via-[#081323]/85 to-[#081323]/45" />
      <div className={`${container} grid lg:grid-cols-5`}>
        <div className="lg:col-span-4">
          <Heading label="Mente forte. Corpo forte.">Seu único adversário<br className="hidden lg:block" /> é quem você era <span className={accent}>ontem.</span></Heading>
          <Action href="#planos" className="mt-8">Faça parte da Atlas</Action>
        </div>
      </div>
    </section>
  )
}
