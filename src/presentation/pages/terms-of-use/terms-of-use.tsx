import { Meta, Footer } from "src/presentation/components"

import S from './terms-of-use.module.scss'

const TermsOfUse = () => {
    return (
        <div>
            <Meta
                title="Termos de Uso | Agnaldo Tomsic"
                description="Termos e Condições de Uso da Tomsic Consultoria. Regras para utilização do site e conteúdos."
                keywords="Termos de Uso, LGPD, Tomsic Consultoria, regras do site, Agnaldo Tomsic"
            />
            <div className={S.privacyPolicyContainer}>
                <div className={S.privacyPolicyContent}>
                    <h1 className={S.privacyTitle}>TERMOS DE USO</h1>

                    <h2>1. ACEITAÇÃO DOS TERMOS</h2>
                    <p>
                        Ao acessar este site e utilizar nossos conteúdos, produtos ou serviços, você concorda com estes Termos de Uso.
                    </p>

                    <h2>2. NATUREZA DO CONTEÚDO</h2>
                    <p>
                        Os materiais disponibilizados (incluindo eBooks, artigos, consultorias e informações gratuitas) têm caráter informativo e educativo, não constituindo promessa de resultado garantido nem substituem consultoria financeira, jurídica ou profissional personalizada.
                    </p>

                    <h2>3. DIREITOS AUTORAIS</h2>
                    <p>
                        Todo o conteúdo do site, incluindo textos, imagens, vídeos, materiais digitais e marcas, é protegido por direitos autorais e não pode ser copiado, distribuído ou utilizado sem autorização expressa.
                    </p>

                    <h2>4. RESPONSABILIDADES DO USUÁRIO</h2>
                    <p>O usuário compromete-se a:</p>
                    <ul>
                        <li>Fornecer informações corretas e atualizadas ao preencher formulários</li>
                        <li>Utilizar o site apenas para fins legais</li>
                        <li>Não tentar acessar áreas restritas ou comprometer a segurança do site</li>
                    </ul>

                    <h2>5. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                    <p>
                        A Tomsic Consultoria não se responsabiliza por decisões tomadas pelo usuário com base em informações do site sem orientação profissional individualizada.
                        <br /><br />
                        Resultados financeiros ou patrimoniais mencionados em materiais são exemplos hipotéticos ou projeções, não garantias de retorno.
                    </p>

                    <h2>6. COMPRAS E SERVIÇOS</h2>
                    <p>
                        Em casos de aquisição de produtos ou serviços pagos, poderão ser aplicados termos adicionais, como políticas de pagamento e reembolso, informados no ato da compra.
                    </p>

                    <h2>7. ALTERAÇÕES</h2>
                    <p>
                        Os Termos de Uso podem ser modificados a qualquer momento, sem aviso prévio. A versão atualizada estará sempre disponível neste site.
                    </p>

                    <p className={S.privacyFinal}>
                        Tomsic Consultoria — Todos os direitos reservados
                    </p>
                    <p className={S.privacyVersao}>
                        Versão 1.0 — Atualizada em 27 de maio de 2025
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsOfUse
