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
};

// Schema de validação
const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  interesse: yup.string().required('Selecione uma opção'),
  termos: yup.boolean().required('Você deve aceitar os termos de uso').oneOf([true], 'Você deve aceitar os termos de uso')
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
    dialCode: '+55'
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [whatsappValue, setWhatsappValue] = useState('');

  const countries: Country[] = [
    { code: 'br', name: 'Brasil', dialCode: '+55' },
    { code: 'us', name: 'Estados Unidos', dialCode: '+1' }
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara baseada no país selecionado
    if (selectedCountry.code === 'br') {
      // Formato brasileiro: (11) 99999-9999
      if (numbers.length <= 2) return `(${numbers}`;
      if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    } else {
      // Formato americano: (123) 456-7890
      if (numbers.length <= 3) return `(${numbers}`;
      if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
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
        
        // Redirect to thank you page
        if (result.redirect) {
          setTimeout(() => {
            window.location.href = result.redirect;
          }, 1500);
        }
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
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
                  <div className={S.flag}>
                    {FLAG_SVGS[selectedCountry.code]}
                  </div>
                  <span className={S.countryCode}>{selectedCountry.dialCode}</span>
                  <svg className={S.dropdownArrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                          <div className={S.flag}>
                            {FLAG_SVGS[country.code]}
                          </div>
                          <span className={S.countryName}>{country.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  placeholder={selectedCountry.code === 'br' ? '(11) 99999-9999' : '(123) 456-7890'}
                  className={S.phoneInput}
                  value={whatsappValue}
                  onChange={handleWhatsAppChange}
                />
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
                <input
                  type="checkbox"
                  id="termos"
                  className={S.checkbox}
                  {...register('termos')}
                />
                <label htmlFor="termos" className={S.checkboxLabel}>
                  Concordo com os{' '}
                  <a href="/termos" className={S.link}>
                    Termos de Uso
                  </a>{' '}
                  e{' '}
                  <a href="/privacidade" className={S.link}>
                    Política de Privacidade
                  </a>
                </label>
              </div>
              {errors.termos && (
                <span className={S.errorMessage}>{errors.termos.message}</span>
              )}
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