import { StaticImageData } from 'next/image'
import { IconArrowRight, IconCheck, IconChevronDown, IconBolt, IconClock, IconBrandWhatsapp } from '@tabler/icons-react'

import S from './header.module.scss'
import { IMAGE } from 'src/presentation/assets'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria.'

const Header = () => (
  <header
    id='faca-uma-simulacao'
    className={S.container}
    style={{
      backgroundImage: `url(${IMAGE.CASA.src})`,
    }}
  >
    <div className={S.overlay}></div>

    <div className={S.content}>
      <div className={S.leftSection}>
        <div className={S.badge}>
          <IconCheck size={16} stroke={2} />
          <span>Método Comprovado</span>
        </div>
        <h1 className={S.title}>
          Construa seu <span className={S.highlight}>patrimônio</span> com <span className={S.highlight}>estratégia</span>, previsibilidade e sem juros bancários
        </h1>

        <div className={S.textContent}>
          <p className={S.paragraph}>
            Descubra um modelo de aquisição imobiliária usado por investidores e empresários para gerar renda passiva e crescer com segurança.
          </p>
          <p className={S.paragraph}>
            Comece hoje mesmo, mesmo com pouco capital inicial.
          </p>
        </div>

        <div className={S.features}>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Sem juros bancários</span>
          </div>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Renda passiva mensal</span>
          </div>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Patrimônio em crescimento</span>
          </div>
        </div>

        <div className={S.ctaContainer}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={S.ctaButton}>
            <span className={S.ctaMain}>Quero uma consultoria personalizada</span>
          </a>
          <div className={S.ctaSubtitle}>
            <div className={S.ctaFeature}>
              <IconBolt size={16} stroke={2} />
              <span>Consultoria 100% gratuita</span>
            </div>
            <div className={S.ctaFeature}>
              <IconClock size={16} stroke={2} />
              <span>30 minutos</span>
            </div>
            <div className={S.ctaFeature}>
              <IconBrandWhatsapp size={16} stroke={2} />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      <div className={S.rightSection}>
        <div className={S.imageContainer}>
          <img src={IMAGE.AGNALDO.src} alt="Agnaldo - Especialista em Consórcios" />
          <div className={S.imageBadge}>
            <span className={S.badgeTitle}>Agnaldo Tomsic</span>
            <span className={S.badgeSubtitle}>Especialista em Alavancagem Patrimonial</span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
