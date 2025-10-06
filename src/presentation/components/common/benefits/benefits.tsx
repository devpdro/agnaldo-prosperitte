import { Button } from 'src/presentation/components';

import { 
  MdClose, 
  MdTrendingUp, 
  MdSecurity, 
  MdPayment 
} from 'react-icons/md';

import S from './benefits.module.scss';

interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  className?: string;
}

const benefitsData: BenefitItem[] = [
  {
    id: 1,
    icon: <MdClose size={48} />,
    title: 'Sem entrada',
    description: 'Comece seu investimento imobiliário sem precisar dar uma grande entrada. Nosso plano permite que você aproveite as oportunidades de investimento predeterminadas, facilitando o acesso à propriedade sem barreiras financeiras iniciais.'
  },
  {
    id: 2,
    icon: <MdTrendingUp size={48} />,
    title: 'Menores taxas de juros',
    description: 'Aproveite taxas de juros baixas e transforme o câmbio favorável em grandes economias. Invista sua compra mais inteligente.'
  },
  {
    id: 3,
    icon: <MdSecurity size={48} />,
    title: 'Sem burocracia',
    description: 'Descomplicamos o processo de compra no exterior, eliminando trâmites excessivos para que você invista com facilidade e rapidez.'
  },
  {
    id: 4,
    icon: <MdPayment size={48} />,
    title: 'Parcelas a partir de R$ 2.000,00',
    description: 'Inicie seu investimento com parcelas mensais a partir de apenas R$ 2.000. Oferecemos flexibilidade para que você invista na medida sem comprometer seu orçamento.'
  }
];

export default function Benefits({ className }: BenefitsProps) {
  return (
    <section className={`${S.benefitsSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Inicie sua jornada com nossas <span className={S.highlight}>soluções personalizadas</span> de investimento.
          </h2>
          <p className={S.subtitle}>
            Conectamos seu investimento imobiliário ao início da sua jornada de capitalização, para garantir rendimentos seguros para uma vida confortável no Brasil.
          </p>
        </div>

        <div className={S.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className={S.benefitItem}>
              <div className={S.iconContainer}>
                {benefit.icon}
              </div>
              <div className={S.content}>
                <h3 className={S.benefitTitle}>{benefit.title}</h3>
                <p className={S.benefitDescription}>{benefit.description}</p>
              </div>
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
}