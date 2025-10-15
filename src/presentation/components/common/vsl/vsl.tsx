'use client';

import React from 'react';
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
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wONXZdAesb0?rel=0&modestbranding=1"
              title="VSL - Agnaldo Tomsic"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

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