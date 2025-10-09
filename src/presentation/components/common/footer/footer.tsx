import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';
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
            <div className={S.logo}>
              <img src={IMAGE.LOGO.src} alt="Prosperitté" />
            </div>
            <p className={S.description}>
              Investimento imobiliário feito sob medida para os brasileiros no exterior.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Contatos</h3>
            <div className={S.contactInfo}>
              <p>Suporte Administrativo: +55 19 98248-3244</p>
              <p>Diretor Comercial: +55 19 98248-3244</p>
              <p>Gerente Comercial: +55 19 98243-5337</p>
              <p>Email: tomsic@prosperitteconsult.com.br</p>
            </div>
          </div>

          {/* Coluna 3 - Escritório */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Nosso escritório</h3>
            <div className={S.officeInfo}>
              <p>
                R. Antônio Maniero, 25 - São Dimas<br />
                Piracicaba - SP, 13416-045
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className={S.divider}></div>

        {/* Texto institucional */}
        <div className={S.institutionalText}>
          <p>Aviso Legal:</p>
          <p>
            A Prosperitté Consult, CNPJ nº 49.290.287/0001-20, não é uma instituição financeira. Atuamos como correspondente autorizado junto a Administradoras de Consórcio, conforme a Resolução nº 3.954/2011 do Banco Central do Brasil. ⭐ Não ofertamos crédito direto nem garantimos contemplação imediata. A contratação está sujeita à análise e política de crédito da instituição parceira. ⭐ Antes da adesão, todas as condições serão apresentadas de forma clara, incluindo prazos, taxas e riscos.
          </p>
        </div>

        {/* Rodapé final */}
        <div className={S.finalFooter}>
          <p>
            Copyright © {currentYear}. A Prosperitté Consult está inscrita no CNPJ sob o nº 49.290.287/0001-20 e exime-se de responsabilidade por danos sofridos por seus clientes, por força de falha de serviços disponibilizados por terceiros. Ainda que destaque que toda comunicação através de nossos canais oficiais é feita de forma transparente e segura. A Prosperitté Consult é uma empresa especializada em consultoria de investimentos imobiliários.
          </p>
        </div>

        {/* Link de termos */}
        <div className={S.termsLink}>
          <Link href="/termos-de-uso" className={S.link}>
            Termos de Uso
          </Link>
          <span className={S.separator}> | </span>
          <Link href="/politicas-de-privacidade" className={S.link}>
            Políticas de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}