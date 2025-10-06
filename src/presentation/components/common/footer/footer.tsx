import S from './footer.module.scss';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${S.footerSection} ${className || ''}`}>
      <div className={S.container}>
        {/* Seção principal com 3 colunas */}
        <div className={S.mainContent}>
          {/* Coluna 1 - Logo e descrição */}
          <div className={S.column}>
            <p className={S.description}>
              Investimento imobiliário feito sob medida para os brasileiros no exterior.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Contato</h3>
            <div className={S.contactInfo}>
              <p>Telefone: +55 4004 2588</p>
              <p>WhatsApp: +55 (61) 99422 5359</p>
              <p>Email: contato@referenciacapital.com.br</p>
            </div>
          </div>

          {/* Coluna 3 - Escritório */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Nosso escritório</h3>
            <div className={S.officeInfo}>
              <p>
                QS 01, Rua 210, Torre B, Taguatinga Shopping,<br />
                Lote 40, 13° Andar, Sala 1305/1308 - Águas<br />
                Claras - DF
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className={S.divider}></div>

        {/* Texto institucional */}
        <div className={S.institutionalText}>
          <p>
            A Referência Capital não é uma instituição financeira e não realiza operações de crédito diretamente. Nós somos uma plataforma que atua como correspondente bancário para facilitar o processo de contratação de empréstimos. Como correspondente bancário, seguimos as diretrizes estabelecidas pelo Banco Central do Brasil, conforme a Resolução nº 3.954/2011. Nosso objetivo é conectar você às melhores opções de crédito disponíveis no mercado, sempre com transparência e segurança.
          </p>
        </div>

        {/* Rodapé final */}
        <div className={S.finalFooter}>
          <p>
            Copyright © {currentYear}. A Referência Capital está inscrita no CNPJ sob o nº 44.118.658/0001-76 e exime-se de responsabilidade por danos sofridos por seus clientes, por força de falha de serviços disponibilizados por terceiros. Ainda que destaque que toda comunicação através de nossos canais oficiais é feita de forma transparente e segura. QS 01, Rua 210, Torre B, Taguatinga Shopping, Lote 40, 13° Andar, Sala 1305/1308 - Águas Claras - DF. A Referência Capital é parte da Referência Holding.
          </p>
        </div>

        {/* Link de termos */}
        <div className={S.termsLink}>
          <a href="#" className={S.link}>
            Termos de Uso
          </a>
          <span className={S.separator}> | </span>
          <a href="#" className={S.link}>
            Políticas de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}