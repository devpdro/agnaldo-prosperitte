import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MdCheckCircle, MdEmail, MdHome } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import S from '../styles/obrigado.module.scss';

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

export default function Obrigado() {
  const router = useRouter();

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

  const handleBackToHome = () => {
    router.push('/');
  };

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
              <span>+55 19 98248-3244</span>
            </div>
            <div className={S.contactItem}>
              <MdEmail size={18} color="#f59e0b" />
              <span>tomsic@prosperitteconsult.com.br</span>
            </div>
          </div>

          <button onClick={handleBackToHome} className={S.backButton}>
            <MdHome size={20} />
            Voltar ao início
          </button>
        </div>
      </div>
    </>
  );
}