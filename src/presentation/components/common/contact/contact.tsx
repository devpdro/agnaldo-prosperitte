'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'src/presentation/components';
import S from './contact.module.scss';

// Bandeiras SVG
const FLAG_SVGS: Record<string, JSX.Element> = {
  br: (
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#009B3A" />
      <polygon points="15,3 27,10 15,17 3,10" fill="#FEDF00" />
      <circle cx="15" cy="10" r="5" fill="#002776" />
      <path d="M12 10a3 3 0 0 1 6 0" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  us: (
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#B22234" />
      <rect y="2" width="30" height="2" fill="#fff" />
      <rect y="6" width="30" height="2" fill="#fff" />
      <rect y="10" width="30" height="2" fill="#fff" />
      <rect y="14" width="30" height="2" fill="#fff" />
      <rect y="18" width="30" height="2" fill="#fff" />
      <rect width="12" height="10" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="2" cy="2" r="0.5" />
        <circle cx="4" cy="2" r="0.5" />
        <circle cx="6" cy="2" r="0.5" />
        <circle cx="8" cy="2" r="0.5" />
        <circle cx="10" cy="2" r="0.5" />
        <circle cx="3" cy="4" r="0.5" />
        <circle cx="5" cy="4" r="0.5" />
        <circle cx="7" cy="4" r="0.5" />
        <circle cx="9" cy="4" r="0.5" />
        <circle cx="2" cy="6" r="0.5" />
        <circle cx="4" cy="6" r="0.5" />
        <circle cx="6" cy="6" r="0.5" />
        <circle cx="8" cy="6" r="0.5" />
        <circle cx="10" cy="6" r="0.5" />
        <circle cx="3" cy="8" r="0.5" />
        <circle cx="5" cy="8" r="0.5" />
        <circle cx="7" cy="8" r="0.5" />
        <circle cx="9" cy="8" r="0.5" />
      </g>
    </svg>
  ),
  gb: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#00247D" />
      <path d="M0 0 L30 20 M30 0 L0 20" stroke="#FFF" strokeWidth="4" />
      <path d="M0 0 L30 20 M30 0 L0 20" stroke="#CF142B" strokeWidth="2" />
      <rect x="12" width="6" height="20" fill="#FFF" />
      <rect x="13" width="4" height="20" fill="#CF142B" />
      <rect y="7" width="30" height="6" fill="#FFF" />
      <rect y="8" width="30" height="4" fill="#CF142B" />
    </svg>
  ),
  jp: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#FFF" stroke="#E5E7EB" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </svg>
  ),
  au: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#00247D" />
      <rect width="12" height="10" fill="#00247D" />
      <path d="M0 0 L12 10 M12 0 L0 10" stroke="#FFF" strokeWidth="3" />
      <path d="M0 0 L12 10 M12 0 L0 10" stroke="#CF142B" strokeWidth="1.5" />
    </svg>
  ),
  pt: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#006600" />
      <rect x="12" width="18" height="20" fill="#FF0000" />
      <circle cx="12" cy="10" r="4" fill="#FFCC00" />
    </svg>
  ),
  es: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" rx="2" fill="#AA151B" />
      <rect y="6" width="30" height="8" fill="#F1BF00" />
    </svg>
  ),
  fr: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#FFF" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </svg>
  ),
  de: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="7" fill="#000" />
      <rect y="7" width="30" height="7" fill="#DD0000" />
      <rect y="14" width="30" height="6" fill="#FFCE00" />
    </svg>
  ),
  it: (
    <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#FFF" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </svg>
  ),
};

// Schema de validação
const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  interesse: yup.string().required('Selecione uma opção'),
  termos: yup
    .boolean()
    .required('Você deve aceitar os termos de uso')
    .oneOf([true], 'Você deve aceitar os termos de uso'),
});

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  interesse: string;
  termos: boolean;
}

interface Country {
  code: string;
  name: string;
  dialCode: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: 'br',
    name: 'Brasil',
    dialCode: '+55',
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [whatsappValue, setWhatsappValue] = useState('');

  const countries: Country[] = [
    { code: 'br', name: 'Brasil', dialCode: '+55' },
    { code: 'us', name: 'Estados Unidos', dialCode: '+1' },
    { code: 'gb', name: 'Reino Unido', dialCode: '+44' },
    { code: 'pt', name: 'Portugal', dialCode: '+351' },
    { code: 'es', name: 'Espanha', dialCode: '+34' },
    { code: 'fr', name: 'França', dialCode: '+33' },
    { code: 'de', name: 'Alemanha', dialCode: '+49' },
    { code: 'it', name: 'Itália', dialCode: '+39' },
    { code: 'jp', name: 'Japão', dialCode: '+81' },
    { code: 'au', name: 'Austrália', dialCode: '+61' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const getPlaceholder = (code: string) => {
    switch (code) {
      case 'br':
        return '(11) 99999-9999';
      case 'us':
        return '(123) 456-7890';
      case 'gb':
        return '07123 456789';
      case 'pt':
        return '912 345 678';
      case 'es':
        return '612 34 56 78';
      case 'fr':
        return '06 12 34 56 78';
      case 'de':
        return '01512 3456789';
      case 'it':
        return '333 123 4567';
      case 'jp':
        return '090-1234-5678';
      case 'au':
        return '0412 345 678';
      default:
        return '(123) 456-7890';
    }
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');

    switch (selectedCountry.code) {
      case 'br': {
        if (numbers.length <= 2) return `(${numbers}`;
        if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
      case 'us': {
        if (numbers.length <= 3) return `(${numbers}`;
        if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
      case 'gb': {
        // 07123 456789
        if (numbers.length <= 5) return `${numbers}`;
        return `${numbers.slice(0, 5)} ${numbers.slice(5, 11)}`;
      }
      case 'pt': {
        // 912 345 678
        if (numbers.length <= 3) return `${numbers}`;
        if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
      }
      case 'es': {
        // 612 34 56 78
        if (numbers.length <= 3) return `${numbers}`;
        if (numbers.length <= 5) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        if (numbers.length <= 7) return `${numbers.slice(0, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5, 7)} ${numbers.slice(7, 9)}`;
      }
      case 'fr': {
        // 06 12 34 56 78
        const chunks = numbers.match(/.{1,2}/g) || [];
        return chunks.join(' ').slice(0, 14);
      }
      case 'de': {
        // 01512 3456789 (approx)
        if (numbers.length <= 5) return `${numbers}`;
        return `${numbers.slice(0, 5)} ${numbers.slice(5, 12)}`;
      }
      case 'it': {
        // 333 123 4567
        if (numbers.length <= 3) return `${numbers}`;
        if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 10)}`;
      }
      case 'jp': {
        // 090-1234-5678
        if (numbers.length <= 3) return `${numbers}`;
        if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}`;
        return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
      }
      case 'au': {
        // 0412 345 678
        if (numbers.length <= 4) return `${numbers}`;
        if (numbers.length <= 7) return `${numbers.slice(0, 4)} ${numbers.slice(4)}`;
        return `${numbers.slice(0, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 10)}`;
      }
      default:
        return numbers;
    }
  };

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
    // Limpa o campo WhatsApp quando muda o país
    setWhatsappValue('');
    setValue('whatsapp', '');
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsappValue(formatted);

    // Remove a formatação para o valor do formulário
    const cleanValue = e.target.value.replace(/\D/g, '');
    setValue('whatsapp', cleanValue);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso!');
        reset();
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);

      // Sempre redirecionar para a página de obrigado, com sinalização para abrir WhatsApp
      setTimeout(() => {
        window.location.href = '/obrigado?whatsapp=true';
      }, 1500);
    }
  };

  return (
    <section id="contact" className={S.contactSection}>
      <div className={S.container}>
        <div className={S.header}>
          <h2 className={S.title}>
            Preencha seus dados e fale com um{' '}
            <span className={S.highlight}>especialista em investimentos no Brasil.</span>
          </h2>
        </div>

        <div className={S.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
            <div className={S.formGroup}>
              <label className={S.label}>
                NOME COMPLETO <span className={S.required}>*</span>
              </label>
              <input
                type="text"
                className={`${S.input} ${errors.nome ? S.inputError : ''}`}
                placeholder="Digite seu nome completo"
                {...register('nome')}
              />
              {errors.nome && (
                <span className={S.errorMessage}>{errors.nome.message}</span>
              )}
            </div>

            <div className={S.formGroup}>
              <label className={S.label}>
                E-MAIL <span className={S.required}>*</span>
              </label>
              <input
                type="email"
                className={`${S.input} ${errors.email ? S.inputError : ''}`}
                placeholder="Digite seu melhor e-mail"
                {...register('email')}
              />
              {errors.email && (
                <span className={S.errorMessage}>{errors.email.message}</span>
              )}
            </div>

            <div className={S.formGroup}>
              <label className={S.label}>
                WHATSAPP <span className={S.required}>*</span>
              </label>
              <div className={S.phoneInputGroup}>
                <div
                  className={S.countrySelector}
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                >
                  <div className={S.flag}>{FLAG_SVGS[selectedCountry.code]}</div>
                  <span className={S.countryCode}>{selectedCountry.dialCode}</span>
                  <svg
                    className={S.dropdownArrow}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {isCountryDropdownOpen && (
                    <div className={S.countryDropdown}>
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          className={S.countryOption}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCountryChange(country);
                          }}
                        >
                          <div className={S.flag}>{FLAG_SVGS[country.code]}</div>
                          <span className={S.countryName}>{country.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  placeholder={getPlaceholder(selectedCountry.code)}
                  className={S.phoneInput}
                  value={whatsappValue}
                  onChange={handleWhatsAppChange}
                />
                <input type="hidden" {...register('whatsapp')} value={whatsappValue.replace(/\D/g, '')} />
              </div>
              {errors.whatsapp && (
                <span className={S.errorMessage}>{errors.whatsapp.message}</span>
              )}
            </div>

            <div className={S.formGroup}>
              <label className={S.label}>
                INTERESSE <span className={S.required}>*</span>
              </label>
              <select
                className={`${S.select} ${errors.interesse ? S.inputError : ''}`}
                {...register('interesse')}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="investimentos">Investimentos</option>
                <option value="consultoria">Consultoria Financeira</option>
                <option value="planejamento">Planejamento Patrimonial</option>
                <option value="outros">Outros</option>
              </select>
              {errors.interesse && (
                <span className={S.errorMessage}>{errors.interesse.message}</span>
              )}
            </div>

            <div className={S.termsGroup}>
              <div className={S.termsLabel}>
                <strong>TERMOS DE USO *</strong>
              </div>
              <div className={S.checkboxContainer}>
                <input type="checkbox" id="termos" className={S.checkbox} {...register('termos')} />
                <label htmlFor="termos" className={S.checkboxLabel}>
                  Concordo com os <a href="/termos" className={S.link}>Termos de Uso</a> e{' '}
                  <a href="/privacidade" className={S.link}>Política de Privacidade</a>
                </label>
              </div>
              {errors.termos && <span className={S.errorMessage}>{errors.termos.message}</span>}
            </div>

            <Button
              typeStyle="btn1"
              label={isSubmitting ? 'ENVIANDO...' : 'FALAR COM UM ESPECIALISTA AGORA'}
              size="md"
              width="100%"
              onClick={handleSubmit(onSubmit)}
            />

            {submitMessage && (
              <div className={`${S.submitMessage} ${submitMessage.includes('sucesso') ? S.success : S.error}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;