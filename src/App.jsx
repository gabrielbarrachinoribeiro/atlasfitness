import Header from './components/Header/Header'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Hero from './Sections/Hero'
import Sobre from './Sections/Sobre'
import Modalidades from './Sections/Modalidades'
import FaixaMotivacional from './Sections/FaixaMotivacional'
import Planos from './Sections/Planos'
import Depoimentos from './Sections/Depoimentos'

export default function App() {
  return (
    <div className="relative bg-[#0b172b] font-sans text-slate-100">
      <Header />
      <Hero />
      <Sobre />
      <Modalidades />
      <FaixaMotivacional />
      <Planos />
      <Depoimentos />
      <CTA />
      <Footer />
    </div>
  )
}
