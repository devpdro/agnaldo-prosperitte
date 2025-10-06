import { ReactNode, CSSProperties } from 'react';

import S from './button.module.scss'

export type ButtonProps = {
  typeStyle: 'btn1' | 'btn2';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  width?: string | { base?: string; sm?: string; md?: string; lg?: string; xs?: string };
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  id?: string;
};

const Button = ({ typeStyle, label, width, onClick, icon, size = 'md', id }: ButtonProps) => {
  const buttonClasses = {
    btn1: S.btn1,
    btn2: S.btn2,
    btn3: S.btn3,
  };

  const sizeClasses = {
    sm: S['btn--sm'],
    md: S['btn--md'],
    lg: S['btn--lg'],
  };

  const getResponsiveWidthVars = (width: string | { base?: string; sm?: string; md?: string; lg?: string; xs?: string } | undefined): CSSProperties => {
    if (!width) return {};
    if (typeof width === 'string') return { ['--btn-width' as any]: width };
    return {
      ['--btn-width' as any]: width.base || width.lg || 'auto',
      ['--btn-width-xs' as any]: width.xs,
      ['--btn-width-sm' as any]: width.sm,
      ['--btn-width-md' as any]: width.md,
      ['--btn-width-lg' as any]: width.lg,
    };
  };

  const combinedClass = `${S.btn} ${buttonClasses[typeStyle]} ${sizeClasses[size]}`;

  return (
    <button id={id} className={combinedClass} style={getResponsiveWidthVars(width)} onClick={onClick}>
      {icon && <span className={S.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;

// Exemplo de uso responsivo:
// <Button width={{ base: '100%', md: '350px', lg: '410px' }} typeStyle="btn1" label="Agendar agora" />
