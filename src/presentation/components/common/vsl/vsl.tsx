'use client';

import { Button } from 'src/presentation/components';
import { scrollToSection } from 'src/utils/scrollToSection'

import S from './vsl.module.scss';

interface VSLProps {
  className?: string;
}

export default function VSL({ className }: VSLProps) {
  return (
    <section className={`${S.vslSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.content}>
          {/* Vídeo em cima */}
          <div className={S.videoPlaceholder}>
            <iframe
              src="https://player.vimeo.com/video/1129560033?badge=0&autopause=0&title=0&byline=0&portrait=0&player_id=0&app_id=58479"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="VSL Final"
              allowFullScreen
            />
          </div>

          <Button
            typeStyle="btn1"
            label="Agende sua Consultoria Gratuita"
            size="md"
            width="380px"
            onClick={() => scrollToSection('contact')}
          />

          {/* Texto embaixo dividido em duas colunas */}
          <div className={S.textContent}>
            <div className={S.leftColumn}>
              <h2 className={S.title}>
                Transforme seu <span className={S.highlight}>futuro</span> com imóveis no Brasil
              </h2>
            </div>

            <div className={S.rightColumn}>
              <p className={S.description}>
                Construir patrimônio no Brasil é uma forma inteligente de preservar valor e criar oportunidades futuras mesmo morando fora. Com planejamento estratégico e consórcios regulados, você pode alavancar seu capital de forma estruturada, acessando imóveis de alto padrão com parcelas reduzidas e sem depender de bancos tradicionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}