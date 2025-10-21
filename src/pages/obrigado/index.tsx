import { useEffect, useRef } from 'react';
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasOpenedRef = useRef<boolean>(false);
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

  // Removido redirecionamento especial quando ?whatsapp=true

  // Auto-redirecionamento após 5s (sempre): se não houver interação, encaminha para WhatsApp
  useEffect(() => {
    if (!router.isReady) return;

    const timer = setTimeout(() => {
      if (!hasOpenedRef.current) {
        hasOpenedRef.current = true;
        window.location.href = whatsappUrl;
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Obrigado - Prosperitté Consult</title>
        <meta name="description" content="Seu cadastro foi recebido com sucesso! Agora falta o passo mais importante: Agendar sua consultoria gratuita." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className={S.container}>
        <div className={S.content}>
          <div className={S.successIcon}>
            <MdCheckCircle size={80} color="#10B981" />
          </div>

          <h1 className={S.title}>Obrigado pelo seu interesse!</h1>

          <p className={S.subtitle}>
            Seu cadastro foi recebido com sucesso! Agora falta o passo mais importante: Agendar sua consultoria gratuita.
          </p>

          <button 
            ref={buttonRef}
            onClick={() => {
              hasOpenedRef.current = true;
              window.location.href = whatsappUrl;
            }}
            className={S.whatsappButton}
          >
            <FaWhatsapp size={20} />
            Agende sua Consultoria Gratuita
          </button>

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
        </div>
      </div>
    </>
  );
}