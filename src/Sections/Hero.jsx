import { ArrowDown, Play } from 'lucide-react'
import { Action, Eyebrow, accent, container, focus, heroPhoto, motion, muted } from '../components/ui'

const stats = [['2.500', '+', 'Alunos'], ['30', '+', 'Profissionais'], ['15', '', 'Modalidades']]

export default function Hero() {
  return (
    <main id="inicio" tabIndex={-1} className="relative isolate flex min-h-svh flex-col justify-end bg-[#081323]">
      <img src={heroPhoto} alt="" fetchPriority="high" className="absolute inset-0 -z-30 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-[#081323] via-[#081323]/85 to-[#081323]/25" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#081323] via-transparent to-[#081323]/40" />
      <div className={`${container} pb-8 pt-36 sm:pt-44 lg:pt-52`}>
        <div className="grid lg:grid-cols-2">
          <div>
            <Eyebrow>Treine para o extraordinário</Eyebrow>
            <h1 className="mt-6 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-7xl">
              Supere seus limites. <span className={`block ${accent}`}>Descubra sua força.</span>
            </h1>
            <p className={`mt-6 text-pretty leading-relaxed ${muted}`}>Mais que uma academia. Um espaço para evoluir, superar desafios e conquistar sua melhor versão.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Action href="#planos">Começar agora</Action>
              <a href="#sobre" className={`inline-flex items-center gap-3 py-2 text-sm font-bold hover:text-blue-300 ${motion} ${focus}`}>
                <span className="rounded-full border border-current p-2"><Play className="size-3 fill-current" aria-hidden="true" /></span>
                Conhecer a academia
              </a>
            </div>
          </div>
        </div>
        <a href="#sobre" className={`mt-12 inline-flex items-center gap-3 py-2 text-xs font-bold uppercase tracking-widest text-blue-200 hover:text-white ${motion} ${focus}`}>
          Descubra a Atlas <ArrowDown className="size-4" aria-hidden="true" />
        </a>
        <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-6">
          <dl className="grid w-full grid-cols-3 divide-x divide-white/20 sm:w-auto">
            {stats.map(([value, suffix, label]) => (
              <div key={label} className="flex flex-col-reverse px-2 first:pl-0 sm:px-8">
                <dt className="text-xs font-semibold uppercase tracking-wide text-blue-200">{label}</dt>
                <dd className="text-xl font-black tracking-tight sm:text-3xl">{value}<span className={accent}>{suffix}</span></dd>
              </div>
            ))}
          </dl>
          <p className="hidden text-right text-xs font-semibold uppercase tracking-widest text-blue-200 md:block">Forte é quem<br />não para.</p>
        </div>
      </div>
    </main>
  )
}
