import { Button } from 'src/presentation/components';
import { scrollToSection } from 'src/utils/scrollToSection';

import {
  MdTrendingUp,
  MdHome,
  MdAttachMoney,
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
    icon: <MdTrendingUp size={48} />,
    title: 'Alavancagem Financeira',
    description: 'Multiplique seu potencial de investimento utilizando estratégias inteligentes que permitem fazer mais com menos. Alcance grandes objetivos com pequenos aportes iniciais.'
  },
  {
    id: 2,
    icon: <MdHome size={48} />,
    title: 'Alavancagem Patrimonial',
    description: 'Construa patrimônio com segurança, mesmo longe do Brasil. Invista em imóveis valorizados sem precisar pagar o valor total do bem.'
  },
  {
    id: 3,
    icon: <MdAttachMoney size={48} />,
    title: 'Renda Passiva',
    description: 'Garanta geração de renda através de investimentos imobiliários planejados. Receba mensalmente e construa um futuro mais tranquilo.'
  },
  {
    id: 4,
    icon: <MdPayment size={48} />,
    title: 'Parcelas a partir de R$ 1.397,36',
    description: 'Comece agora com parcelas acessíveis. Essa condição é ideal para quem quer investir com responsabilidade, sem comprometer o orçamento.'
  }
];

export default function Benefits({ className }: BenefitsProps) {
  return (
    <section className={`${S.benefitsSection} ${className || ''}`}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Investir no Brasil ficou mais <span className={S.highlight}>fácil, seguro e personalizado</span>
          </h2>
          <p className={S.subtitle}>
            Aproveite o câmbio favorável e transforme seu poder de compra em patrimônio. Conte com nossa consultoria estratégica para começar agora, mesmo morando fora.
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
          onClick={() => scrollToSection('contact')}
        />
        </div>
      </div>
    </section>
  );
}