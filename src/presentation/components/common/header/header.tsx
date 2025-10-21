import { Button } from 'src/presentation/components'
import { scrollToSection } from 'src/utils/scrollToSection'

import S from './header.module.scss'

const Header = () => (
  <header className={S.hero}>
    <div className={S.container}>
      <div className={S.content}>
        <div className={S.text}>
          <h1 className={S.title}>
            Use o poder da sua <span className={S.highlight}>moeda forte</span> para construir{' '}
            <span className={S.highlight}>patrimônio no Brasil</span>
          </h1>
          <p className={S.subtitle}>
            Brasileiros no exterior estão ampliando sua renda e construindo patrimônio com imóveis de alto valor e planejamento estratégico
          </p>
          <Button
            typeStyle="btn1"
            label="Agende sua Consultoria Gratuita"
            size="md"
            width="380px"
            onClick={() => scrollToSection('contact')}
          />
        </div>
      </div>
    </div>
  </header>
)

export default Header
