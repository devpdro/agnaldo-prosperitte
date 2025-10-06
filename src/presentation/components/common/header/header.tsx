import { Button } from 'src/presentation/components'

import S from './header.module.scss'

const Header = () => (
  <header className={S.hero}>
    <div className={S.container}>
      <div className={S.content}>
        <div className={S.text}>
          <h1 className={S.title}>
            Invista de forma <span className={S.highlight}>Inteligente</span> em imóveis e{' '}
            <span className={S.highlight}>aumente sua renda</span> com aluguéis
          </h1>
          <p className={S.subtitle}>
            A diversificação patrimonial do setor imobiliário
            cria futuro financeiro com o que sempre foi a
            base da riqueza no Brasil.
          </p>
          <Button
            typeStyle="btn1"
            label="Solicitar proposta"
            size="md"
            width="240px"
          />
        </div>
      </div>
    </div>
  </header>
)

export default Header
