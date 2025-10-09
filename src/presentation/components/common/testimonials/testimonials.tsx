import { Button } from 'src/presentation/components'
import { scrollToSection } from 'src/utils/scrollToSection'

import S from './testimonials.module.scss';

interface TestimonialData {
  id: number;
  name: string;
  location: string;
  title: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  className?: string;
}

const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: "Luciana Reis",
    location: "Zurique, Suíça",
    title: "Mudou minha vida financeira",
    content: "Quando descobri que poderia construir patrimônio no Brasil morando fora, minha visão sobre dinheiro mudou. Comecei com uma carta de R$ 300 mil e hoje já fui contemplada. Com o aluguel do imóvel no Brasil, pago a própria parcela. É uma renda que me dá tranquilidade aqui na Europa.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "João Almeida",
    location: "Sydney, Austrália",
    title: "Investimento estratégico e seguro",
    content: "Não entendia nada de consórcio, mas com a consultoria da Prosperitté, aprendi como usar alavancagem patrimonial de forma inteligente. Invisto menos por mês do que gastava com delivery, e estou construindo patrimônio real para a minha família. Vale cada centavo.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Fernanda Costa",
    location: "Boston, EUA",
    title: "Planejamento para aposentadoria",
    content: "Sempre sonhei em voltar ao Brasil com segurança. Com a estratégia da Prosperitté, fiz um plano de 7 anos. Agora tenho duas cartas de crédito e um imóvel já alugado. Quando eu voltar, terei um lar e uma renda extra. É minha aposentadoria em construção.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section className={`${S.testimonialsSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Veja quem já deu o primeiro passo rumo ao <span className={S.highlight}>patrimônio</span>
          </h2>
          <p className={S.subtitle}>
            Relatos reais de brasileiros no exterior que transformaram sonhos em imóveis, renda e segurança no Brasil com estratégia e apoio especializado.
          </p>
        </div>

        <div className={S.testimonialsGrid}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={S.testimonialCard}>
              <div className={S.cardHeader}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className={S.avatar}
                />
                <div className={S.userInfo}>
                  <h3 className={S.name}>{testimonial.name}</h3>
                  <p className={S.location}>{testimonial.location}</p>
                </div>
              </div>
              
              <h4 className={S.testimonialTitle}>{testimonial.title}</h4>
              <p className={S.testimonialText}>{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className={S.ctaContainer}>
          <Button
          typeStyle="btn1"
          label="Saiba Mais"
          size="md"
          width="200px"
          onClick={() => scrollToSection('contact')}
        />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;