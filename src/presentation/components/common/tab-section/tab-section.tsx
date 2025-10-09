import { useState, useRef, useEffect } from 'react';

import { IMAGE } from 'src/presentation/assets';

import S from './tab-section.module.scss';

interface TabContent {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TabSectionProps {
  className?: string;
}

const tabsData: TabContent[] = [
  {
    id: 'cambio',
    title: 'Beneficie-se do câmbio favorável agora',
    description: 'Viver fora do Brasil e ganhar em moeda forte é uma vantagem, mas investir esse capital com estratégia é o que realmente gera patrimônio. Com o câmbio atual, seu dinheiro vale muito mais no Brasil. E através da alavancagem patrimonial via consórcio, você amplia ainda mais seu acesso a imóveis de alto padrão com parcelas reduzidas e sem burocracia bancária. Essa é a hora de transformar sua renda em um legado duradouro.',
    image: IMAGE.CAMBIO.src
  },
  {
    id: 'consultoria',
    title: 'Consultoria estratégica para investir com confiança',
    description: 'Com uma abordagem personalizada e baseada em planejamento patrimonial, nossa consultoria te orienta desde o primeiro passo até a realização do seu investimento. Você contará com especialistas que entendem as particularidades de quem vive fora do país, incluindo câmbio, documentação, estrutura jurídica e oportunidades de alavancagem via consórcio. Tudo de forma transparente, segura e alinhada aos seus objetivos de longo prazo.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=350&fit=crop&auto=format'
  },
  {
    id: 'investimento',
    title: 'Segurança, valorização e alavancagem no Brasil',
    description: 'O mercado imobiliário brasileiro continua sendo uma das formas mais sólidas e seguras de construção patrimonial. Para quem vive fora do país, o cenário é ainda mais vantajoso: o câmbio favorável e a possibilidade de alavancar seu poder de compra com consórcios permitem acessar imóveis valorizados, sem recorrer a financiamentos caros. Garanta retorno estável com segurança jurídica, flexibilidade de pagamento e acompanhamento estratégico em cada etapa.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=350&fit=crop&auto=format'
  },
  {
    id: 'valorizacao',
    title: 'Valorize seu capital em uma economia em crescimento',
    description: 'O setor imobiliário brasileiro segue em expansão e quem investe com visão estratégica, colhe valorização no longo prazo. Com nosso acompanhamento, você identifica os melhores momentos e oportunidades para transformar seu investimento em fonte de renda e valorização constante. Seu dinheiro trabalha por você, mesmo morando fora.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&h=350&fit=crop&auto=format'
  }
];

export default function TabSection({ className }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState('cambio');
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const updateIndicator = () => {
    if (tabNavRef.current) {
      const activeButton = tabNavRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLButtonElement;
      if (activeButton) {
        const navRect = tabNavRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        setIndicatorStyle({
          left: buttonRect.left - navRect.left,
          width: buttonRect.width
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className={`${S.tabSection} ${className || ''}`}>
      <div className={S.container}>
        {/* Navigation Tabs */}
        <nav className={S.tabNav} ref={tabNavRef}>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              className={`${S.tabButton} ${activeTab === tab.id ? S.active : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.id === 'cambio' && 'Câmbio'}
              {tab.id === 'consultoria' && 'Consultoria'}
              {tab.id === 'investimento' && 'Investimento'}
              {tab.id === 'valorizacao' && 'Valorização'}
            </button>
          ))}
          <div
            className={S.indicator}
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
          />
        </nav>

        {/* Content Area */}
        <div className={S.content}>
          <div className={S.textContent}>
            <h2 className={S.title}>{activeContent.title}</h2>
            <p className={S.description}>{activeContent.description}</p>
          </div>

          <div className={S.imageContent}>
            <div className={S.imageCard}>
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className={S.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}