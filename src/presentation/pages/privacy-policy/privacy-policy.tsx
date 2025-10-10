import { Meta } from "src/presentation/components"

import S from './privacy-policy.module.scss'

const PrivacyPolicy = () => {
    return (
        <div>
            <Meta
                title="Política de Privacidade | Agnaldo Tomsic"
                description="Saiba como Agnaldo Tomsic protege seus dados pessoais e respeita sua privacidade."
                keywords="Política de Privacidade, LGPD, privacidade, dados pessoais, Agnaldo Tomsic, consultoria financeira"
            />
            <div className={S.privacyPolicyContainer}>
                <div className={S.privacyPolicyContent}>
                    <h1 className={S.privacyTitle}>POLÍTICA DE PRIVACIDADE</h1>

                    <h2>1. COLETA DE INFORMAÇÕES</h2>
                    <p>
                        Ao acessar nosso site, podemos coletar dados pessoais fornecidos voluntariamente pelo usuário, como nome, e-mail, telefone e outras informações necessárias para contato, envio de materiais e agendamento de consultorias.
                        <br /><br />
                        Também utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação e personalizar anúncios.
                    </p>

                    <h2>2. USO DAS INFORMAÇÕES</h2>
                    <p>Os dados coletados são utilizados para:</p>
                    <ul>
                        <li>Entrar em contato com o usuário</li>
                        <li>Enviar informações sobre produtos, serviços, materiais educativos e campanhas</li>
                        <li>Melhorar a navegação e a personalização do site</li>
                        <li>Cumprir exigências legais e regulatórias</li>
                    </ul>

                    <h2>3. COMPARTILHAMENTO DE INFORMAÇÕES</h2>
                    <p>Não compartilhamos informações pessoais com terceiros, exceto:</p>
                    <ul>
                        <li>Plataformas de pagamento (quando aplicável, para aquisição de produtos/serviços)</li>
                        <li>Fornecedores de tecnologia e marketing digital (ex.: Google, Meta, ferramentas de automação de e-mail/CRM)</li>
                        <li>Quando exigido por lei</li>
                    </ul>

                    <h2>4. DIREITOS DO USUÁRIO</h2>
                    <p>De acordo com a LGPD, você pode solicitar a qualquer momento:</p>
                    <ul>
                        <li>Confirmação da existência de tratamento de seus dados</li>
                        <li>Acesso, correção ou exclusão de informações pessoais</li>
                        <li>Revogação de consentimento para uso de dados</li>
                    </ul>
                    <p>Solicitações podem ser feitas pelo e-mail: contato@patrimoniosemfronteiras-br.com</p>

                    <h2>5. SEGURANÇA DOS DADOS</h2>
                    <p>Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda ou alteração indevida.</p>

                    <h2>6. ALTERAÇÕES DESTA POLÍTICA</h2>
                    <p>Esta Política de Privacidade pode ser atualizada a qualquer momento, sendo recomendada a revisão periódica.</p>

                    <p className={S.privacyFinal}>
                        Agnaldo Tomsic — Todos os direitos reservados
                    </p>
                    <p className={S.privacyVersao}>
                        Versão 1.0 — Atualizada em 27 de maio de 2025
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
