import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import { Action, container, focus, motion } from '../ui'

const links = [
  ['Início', '#inicio'], ['Sobre', '#sobre'], ['Modalidades', '#modalidades'],
  ['Planos', '#planos'], ['Contato', '#contato'],
]

function HeaderLogo({ onClick }) {
  return (
    <a href="#inicio" onClick={onClick} className={`shrink-0 hover:opacity-80 ${motion} ${focus}`}>
      <img src={logo} alt="Atlas Fitness" width={2172} height={724} className="h-12 w-auto sm:h-14" />
    </a>
  )
}

export default function Header() {
  const dialog = useRef(null)
  const trigger = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 0)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeOnDesktop = () => {
      if (desktop.matches && dialog.current.open) dialog.current.close()
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function closeMenu(event) {
    const destination = document.querySelector(event.currentTarget.hash)
    dialog.current.close()
    if (destination) destination.focus({ preventScroll: true })
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-30 ${motion} ${scrolled ? 'bg-[#081323]/90 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'}`}>
      <div className={`${container} flex items-center justify-between gap-6 py-5`}>
        <HeaderLogo />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={`text-sm text-slate-200 hover:text-blue-300 ${motion} ${focus}`}>{label}</a>
          ))}
        </nav>
        <Action href="#planos" icon={ArrowUpRight} display="hidden lg:inline-flex">Comece agora</Action>
        <button ref={trigger} type="button" aria-label="Abrir menu" aria-haspopup="dialog" aria-controls="menu-mobile" onClick={() => dialog.current.showModal()} className={`cursor-pointer rounded-sm border border-white/30 p-3 hover:border-blue-400 hover:bg-blue-600 ${motion} ${focus} lg:hidden`}>
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </div>
      <dialog ref={dialog} id="menu-mobile" aria-label="Menu principal" onClose={() => {
        if (dialog.current.contains(document.activeElement) || document.activeElement === document.body) trigger.current.focus()
      }} className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-[#081323] text-white backdrop:bg-[#081323]">
        <div className={`${container} py-5`}>
          <div className="flex items-center justify-between gap-4">
            <HeaderLogo onClick={closeMenu} />
            <button type="button" autoFocus aria-label="Fechar menu" onClick={() => dialog.current.close()} className={`cursor-pointer rounded-sm border border-white/30 p-3 hover:border-blue-400 hover:bg-blue-600 ${motion} ${focus}`}>
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <nav aria-label="Navegação móvel" className="mt-12 grid gap-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className={`border-b border-white/15 py-4 text-2xl font-bold hover:text-blue-300 ${motion} ${focus}`}>{label}</a>
            ))}
          </nav>
          <Action href="#planos" icon={ArrowUpRight} onClick={closeMenu} className="mt-8">Comece agora</Action>
        </div>
      </dialog>
    </header>
  )
}
