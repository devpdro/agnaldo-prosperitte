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
            <div className={S.placeholderContent}>
              <div className={S.playButton}>▶</div>
              <p className={S.placeholderText}>Vídeo será inserido aqui</p>
            </div>
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
                Investir em imóveis no Brasil representa uma oportunidade de crescimento de 
                capital e geração de renda passiva, especialmente com o câmbio favorável 
                para quem vive no exterior. Nossa expertise e sólidas parcerias bancárias 
                facilitam seu acesso a esse mercado promissor, assegurando um processo 
                simplificado e rentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}