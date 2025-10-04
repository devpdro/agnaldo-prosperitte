import { Faq, Footer, Header, Meta, Testimonials } from "src/presentation/components"
import { ICON, IMAGE } from 'src/presentation/assets'

import S from './home.module.scss'

const Home = () => {
  const IMAGES = IMAGE.HEADER

  return (
    <div>
      <Meta
        title="Agnaldo Tomsic - Consultor em Alavancagem Patrimonial"
        description="Estratégias inteligentes para construção de patrimônio através de consórcios e investimentos imobiliários. Consultoria personalizada em alavancagem patrimonial com Agnaldo Tomsic."
        keywords="consórcio, alavancagem patrimonial, Agnaldo Tomsic, consórcio imobiliário, investimento imobiliário, planejamento financeiro, patrimônio, renda passiva, consultoria financeira, estratégias de investimento" />
      <Header />
      <Testimonials />
      <Faq />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria."
        target="_blank"
        rel="noopener noreferrer"
        className={S['whatsapp-button']}
      >
        <ICON.IconBrandWhatsapp className={S.icon} />
      </a>
    </div>
  )
}

export default Home
