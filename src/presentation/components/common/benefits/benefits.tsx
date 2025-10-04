import styles from './benefits.module.scss';

const benefits = [
    {
        number: '01',
        text: 'Participação direta de um profissionalizador de empresas com mais de 20 anos de experiência em empresas de grande, médio e pequeno porte, desde nacionais a grandes multinacionais de renome, em mais de 5 países diferentes;'
    },
    {
        number: '02',
        text: 'Acompanhamento da execução com time de especialistas;'
    },
    {
        number: '03',
        text: 'Implementação de metas e indicadores utilizados e validados por médias e grandes empresas;'
    },
    {
        number: '04',
        text: 'Diagnóstico completo para atualizar todas as áreas da sua empresa com o que há de melhor no mercado.'
    }
];

export default function Benefits() {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>
                    NO NEXUM CLUBE, VOCÊ TERÁ ACESSO...
                </h2>

                <div className={styles.cardsGrid}>
                    {benefits.map((benefit, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.numberBadge}>
                                {benefit.number}
                            </div>
                            <p className={styles.cardText}>
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <button className={styles.ctaButton}>
                    SAIBA MAIS
                </button>
            </div>
        </section>
    );
}
