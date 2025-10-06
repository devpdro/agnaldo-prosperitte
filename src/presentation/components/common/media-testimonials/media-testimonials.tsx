import { IMAGE } from 'src/presentation/assets';

import S from './media-testimonials.module.scss';

interface MediaTestimonialItem {
  id: number;
  logo: string;
  logoAlt: string;
  badge: string;
  description: string;
}

interface MediaTestimonialsProps {
  className?: string;
}

const mediaTestimonialsData: MediaTestimonialItem[] = [
  {
    id: 1,
    logo: IMAGE.G1.src,
    logoAlt: 'G1',
    badge: 'Matérias',
    description: 'Referência Capital, fintech de crédito imobiliário, planeja originar R$ 1 bilhão em créditos em 2024, ajudando brasileiros no exterior a investir em imóveis no Brasil através de um sistema online que usa extratos bancários para comprovação de renda.'
  },
  {
    id: 2,
    logo: IMAGE.METROPOLES.src,
    logoAlt: 'Metrópoles',
    badge: 'Matérias',
    description: 'Fintechs estão transformando o acesso ao mercado imobiliário no Brasil, oferecendo crédito através de uma plataforma digital com alavancagem patrimonial, possibilitando investimentos em imóveis com parcelas acessíveis.'
  },
  {
    id: 3,
    logo: IMAGE.UOL.src,
    logoAlt: 'UOL',
    badge: 'Matérias',
    description: 'Fintech Referência Capital visa originar R$ 1 bilhão em crédito imobiliário para brasileiros no exterior em 2024, facilitando investimentos em imóveis no Brasil através de consórcios que utilizam extratos bancários internacionais para comprovação de renda.'
  }
];

export default function MediaTestimonials({ className }: MediaTestimonialsProps) {
  return (
    <section className={`${S.mediaTestimonialsSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Reconhecidos pelos maiores veículos do Brasil
          </h2>
        </div>

        <div className={S.testimonialsGrid}>
          {mediaTestimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={S.testimonialCard}>
              <div className={S.logoContainer}>
                <img
                  src={testimonial.logo}
                  alt={testimonial.logoAlt}
                  className={S.logo}
                />
              </div>
              
              <div className={S.badge}>
                {testimonial.badge}
              </div>
              
              <p className={S.description}>
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}