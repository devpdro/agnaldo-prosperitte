import styles from './testimonials.module.scss';

const testimonialsData = [
    {
        id: 1,
        name: 'Marcos Fontes',
        location: 'Texas, USA',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format',
        title: 'Recomendo',
        testimonial: 'Comecei pagando 50% em um 2021. Hoje já como um dos meus bancos favorit que ajudou com a Referência Capital. O 1º Fortaleza e até os pagos ainda não vejo um bom.'
    },
    {
        id: 2,
        name: 'Roberta Silveira',
        location: 'Minas, Canada',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format',
        title: 'Parabéns!',
        testimonial: 'Excelente! Eu finalmente não responsabilidade desde então de investir chamado por Silvia. Por isso mesmo de renda, melhor ou deixar para investir. Eu recomendo muito, parabéns pela, em 7 anos, vou saber quanto para meus investimentos.'
    },
    {
        id: 3,
        name: 'Márcia Fontes',
        location: 'Texas, USA',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format',
        title: 'Realizei meu sonho!',
        testimonial: 'Obrigado pela orientação! Consegui obter lucros! "Então não precisava ver investimento junto aos grandes diferente, mas agora eu tenho uma casa própria. Eu falo muito! Por 2 anos, paguei um crédito no total até mais comprei uma casa para minha casa aos no Brasil! Posso ajudar outros família. Não tem preço.'
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Conheça quem já <strong>investiu</strong> conosco
                    </h2>
                    <p className={styles.subtitle}>
                        Veja relatos reais de investidores que transformaram seus sonhos em realidade com nossa 
                        ajuda. Conheça suas histórias e inspire-se para dar o próximo passo.
                    </p>
                </div>

                <div className={styles.testimonialsGrid}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <img 
                                    src={testimonial.photo} 
                                    alt={testimonial.name}
                                    className={styles.profilePhoto}
                                />
                                <div className={styles.profileInfo}>
                                    <h4 className={styles.profileName}>
                                        {testimonial.name}
                                    </h4>
                                    <p className={styles.profileLocation}>
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                            
                            <h3 className={styles.testimonialTitle}>
                                {testimonial.title}
                            </h3>
                            
                            <p className={styles.testimonialText}>
                                {testimonial.testimonial}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <button className={styles.ctaButton}>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    );
}