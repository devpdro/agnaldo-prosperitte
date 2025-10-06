import { Button } from 'src/presentation/components';

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
    name: 'Marcos Fontes',
    location: 'Texas, USA',
    title: 'Recomendo',
    content: 'Comecei pagando $295,00 em 2021. Hoje já estou no meu terceiro imóvel junto com a Referência Capital. O 1º apartamento que adquiri está alugado em Fortaleza e ele já se paga e ainda me sobra um lucro.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format'
  },
  {
    id: 2,
    name: 'Roobaldo Silveira',
    location: 'Toronto, Canadá',
    title: 'Parabéns!',
    content: 'Eu sempre fui totalmente desacreditado dessa coisa de investir olhando pro futuro. Por pressão da minha mulher eu decidi investir no meu imóvel e hoje temos um patrimônio que, em 7 anos, vai estar quitado para nossa aposentadoria.',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face&auto=format'
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    location: 'Lisboa, Portugal',
    title: 'Realizei meu sonho!',
    content: 'Todo mês arrumava um imprevisto para não guardar dinheiro, mas sabia que a gente tem um boleto pra pagar tudo muda! Em 2 anos, peguei um crédito de 500 mil reais comprei uma casa pros meus pais no Brasil! Poder ajudar minha família não tem preço',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format'
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section className={`${S.testimonialsSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Conheça quem já <span className={S.highlight}>investiu</span> conosco
          </h2>
          <p className={S.subtitle}>
            Veja relatos reais de investidores que transformaram seus sonhos em realidade com nossa 
            ajuda. Conheça suas histórias e inspire-se para dar o próximo passo.
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
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;