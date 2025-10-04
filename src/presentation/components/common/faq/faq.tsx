'use client'

import { useState } from 'react'
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react'
import styles from './faq.module.scss'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria.'

const faqData = [
    {
        question: "Como funciona essa estratégia de alavancagem patrimonial?",
        answer: "Ela combina planejamento financeiro com aquisição inteligente de ativos. Em vez de comprar um imóvel à vista ou assumir um financiamento de 30 anos, você estrutura um plano onde parte do valor é investido, e outra parte é utilizada para acessar imóveis que geram renda e crescem com o tempo."
    },
    {
        question: "Preciso ter muito dinheiro para começar?",
        answer: "Não. Você pode começar com valores acessíveis, desde que tenha disciplina e visão de longo prazo. A estratégia é adaptada ao seu perfil financeiro, começando com o que é possível para você hoje."
    },
    {
        question: "E se o imóvel não for alugado imediatamente?",
        answer: "Sempre trabalhamos com margens de segurança e alternativas de gestão de fluxo. Além disso, selecionamos imóveis com alta liquidez e perfil atrativo para locação. Mas como todo ativo real, há variações, por isso o plano inclui reservas e contingência."
    },
    {
        question: "Quais são os riscos?",
        answer: "Não existem estratégias sem risco, mas aqui buscamos reduzir a exposição ao máximo. Utilizamos ativos reais (como imóveis) e planejamento de longo prazo, evitando juros bancários, endividamento acelerado ou volatilidade do mercado financeiro."
    },
    {
        question: "Existem custos além das parcelas?",
        answer: "Sim, como qualquer operação patrimonial estruturada, há taxas administrativas, seguros e eventuais custos de manutenção do imóvel. Tudo isso é mapeado com antecedência e incluído no planejamento."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Perguntas Frequentes
                    </h2>
                    <p className={styles.subtitle}>
                        Tire suas dúvidas sobre estratégias patrimoniais com alavancagem segura e planejamento inteligente.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className={styles.questionText}>{item.question}</span>
                                <div className={styles.chevronIcon}>
                                    <IconChevronDown size={24} stroke={2} />
                                </div>
                            </button>

                            <div className={styles.faqAnswer}>
                                <div className={styles.answerContent}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            Ainda tem dúvidas?
                        </h3>
                        <p className={styles.ctaSubtitle}>
                            Nossa equipe está pronta para te ajudar
                        </p>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        FALAR COM ESPECIALISTA
                    </a>
                </div>
            </div>
        </section>
    );
}
