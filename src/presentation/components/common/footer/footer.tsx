import Link from 'next/link'
import S from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={S.footer}>
      {/* Main Footer Content */}
      <div className={S.mainContent}>
        <div className={S.grid}>
          {/* Left Column - Logo and Slogan */}
          <div className={S.leftColumn}>
            <div className={S.logoSection}>
              <h2>
                Referência Capital
              </h2>
              <p>
                Investimento imobiliário feito sob medida para os brasileiros no exterior.
              </p>
            </div>
          </div>

          {/* Right Column - Contact and Office */}
          <div className={S.rightColumn}>
            {/* Contact Section */}
            <div className={S.contactSection}>
              <h3>Contato</h3>
              <div className={S.contactInfo}>
                <p>
                  Telefone: +55 (11) 3042-2004
                </p>
                <p>
                  WhatsApp: +55 (11) 99942-2006
                </p>
                <p>
                  Email: contato@referenciacapital.com.br
                </p>
              </div>
            </div>

            {/* Office Section */}
            <div className={S.officeSection}>
              <h3>Nosso escritório</h3>
              <div className={S.officeInfo}>
                <p>Rua Dr. Melo Alves, 350 - Jardim Paulista</p>
                <p>São Paulo - SP, CEP: 01417-010 - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={S.divider}></div>

      {/* Bottom Footer - Legal Text */}
      <div className={S.bottomFooter}>
        <div className={S.bottomContent}>
          {/* Disclaimer */}
          <div className={S.disclaimer}>
            <p>
              A Referência Capital não é uma instituição financeira e não realiza operações de crédito diretamente. 
              Atua como correspondente bancário nos termos da Resolução 3.954, do Banco Central do Brasil, na 
              intermediação e prospecção de propostas de operações de crédito e de arrendamento mercantil, 
              bem como na realização de recebimentos, pagamentos e outras atividades decorrentes de contratos 
              de operações de crédito ou de arrendamento mercantil de responsabilidade dos bancos parceiros. 
              A intermediação de operações de câmbio é de responsabilidade de instituições devidamente autorizadas 
              pelo Banco Central do Brasil.
            </p>
          </div>

          {/* Copyright and Links */}
          <div className={S.copyrightSection}>
            <div className={S.copyrightText}>
              <p>
                Copyright © 2024 Referência Capital - CNPJ: 12.345.678/0001-90
              </p>
              <p>
                Rua Dr. Melo Alves, 350 - Jardim Paulista, São Paulo - SP
              </p>
            </div>
            <div className={S.legalLinks}>
              <Link href="/terms-of-use">
                Termos de Uso
              </Link>
              <span className={S.separator}>|</span>
              <Link href="/privacy-policy">
                Políticas de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer