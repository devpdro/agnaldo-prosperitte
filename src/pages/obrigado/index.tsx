import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MdCheckCircle, MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import S from '../../styles/obrigado.module.scss';

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

export default function Obrigado() {
  const router = useRouter();
  const [whatsAppStarted, setWhatsAppStarted] = useState(false);
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20gostaria%20de%20entender%20melhor%20como%20funciona%20essa%20estrat%C3%A9gia%20de%20investimento%20imobili%C3%A1rio.';

  useEffect(() => {
    // Facebook Pixel Conversion Event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
      window.fbq('track', 'CompleteRegistration');
    }

    // Google Analytics Conversion Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'GTM-P6NQKRBV',
        'event_category': 'Lead',
        'event_label': 'Contact Form Submission'
      });
    }

    // Google Tag Manager DataLayer Event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'conversion',
        'event_category': 'Lead',
        'event_action': 'Contact Form Submission',
        'event_label': 'Thank You Page'
      });
    }
  }, []);

  // Abrir WhatsApp automaticamente quando a página for acessada com ?whatsapp=true (em 1s)
  useEffect(() => {
    if (!router.isReady) return;
    const { whatsapp } = router.query;

    if (whatsapp === 'true') {
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined' && !whatsAppStarted) {
          window.open(whatsappUrl, '_blank');
          setWhatsAppStarted(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [router.isReady, router.query, whatsAppStarted]);

  // Fallback: após 5s, se o usuário não clicou, abrir WhatsApp automaticamente
  useEffect(() => {
    if (!router.isReady) return;
    const { whatsapp } = router.query;

    // Se já vamos abrir por causa do parâmetro, não iniciar fallback
    if (whatsapp === 'true') return;

    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !whatsAppStarted) {
        window.open(whatsappUrl, '_blank');
        setWhatsAppStarted(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [router.isReady, router.query, whatsAppStarted]);

  const handleWhatsAppClick = () => {
    if (!whatsAppStarted) setWhatsAppStarted(true);
    window.open(whatsappUrl, '_blank');
  };

  // Função handleBackToHome removida por não ser mais utilizada

  return (
    <>
      <Head>
        <title>Obrigado - Prosperitté Consult</title>
        <meta name="description" content="Obrigado pelo seu interesse! Em breve entraremos em contato." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className={S.container}>
        <div className={S.content}>
          <div className={S.successIcon}>
            <MdCheckCircle size={80} color="#10B981" />
          </div>

          <h1 className={S.title}>Obrigado pelo seu interesse!</h1>

          <p className={S.subtitle}>
            Recebemos suas informações com sucesso. Nossa equipe de especialistas em investimentos no Brasil entrará em contato em breve.
          </p>

          <div className={S.infoBox}>
            <h3>O que acontece agora?</h3>
            <ul>
              <li><MdCheckCircle size={20} color="#10B981" /> Analisaremos seu perfil de investimento</li>
              <li><MdCheckCircle size={20} color="#10B981" /> Prepararemos uma proposta personalizada</li>
              <li><MdCheckCircle size={20} color="#10B981" /> Entraremos em contato em até 24 horas</li>
              <li><MdCheckCircle size={20} color="#10B981" /> Agendaremos uma consultoria gratuita</li>
            </ul>
          </div>

          <div className={S.contactInfo}>
            <p >Dúvidas urgentes?</p>
            <div className={S.contactItem}>
              <FaWhatsapp size={18} color="#25D366" />
              <span>+55 19 98243-5337</span>
            </div>
            <div className={S.contactItem}>
              <MdEmail size={18} color="#f59e0b" />
              <span>tomsic@prosperitteconsult.com.br</span>
            </div>
          </div>

          <button 
            onClick={handleWhatsAppClick}
            className={S.whatsappButton}
          >
            <FaWhatsapp size={20} />
            FALAR COM ESPECIALISTA AGORA NO WHATSAPP
          </button>

          <p style={{ marginTop: '12px', color: '#6b7280', fontSize: '14px', textAlign: 'center' }}>
            Mensagem que será enviada: "Olá, gostaria de entender melhor como funciona essa estratégia de investimento imobiliário."
          </p>
        </div>
      </div>
    </>
  );
}