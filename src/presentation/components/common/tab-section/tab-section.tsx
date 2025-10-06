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
    description: 'Maximize seu poder de compra com o câmbio vantajoso. Investir no Brasil enquanto está no exterior nunca foi tão acessível. Aproveite a força da sua moeda para fazer investimentos inteligentes sem comprometer suas economias.',
    image: IMAGE.CAMBIO.src
  },
  {
    id: 'sem-experiencia',
    title: 'Perfeito para iniciantes',
    description: 'Não tem experiência em investimentos? Sem problema. Nossa equipe oferece consultoria completa desde o primeiro passo, com educação financeira, planejamento personalizado e acompanhamento contínuo.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=350&fit=crop&auto=format'
  },
  {
    id: 'investimento',
    title: 'Um dos investimentos mais seguros',
    description: 'Desfrute da segurança que o mercado imobiliário brasileiro oferece. Com o câmbio atual favorável, seu dinheiro rende mais, permitindo que você invista em propriedades de valor crescente sem comprometer suas reservas financeiras. Garanta um retorno estável e seguro para o futuro.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=350&fit=crop&auto=format'
  },
  {
    id: 'valorizacao',
    title: 'Valorização duradoura',
    description: 'Invista em um futuro seguro e lucrativo. Com o mercado imobiliário brasileiro, seu capital não só está protegido, mas também possui grandes chances de valorização contínua e significativa ao longo dos anos.',
    image: IMAGE.VALORIZACAO.src
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
              {tab.id === 'sem-experiencia' && 'Sem experiência'}
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