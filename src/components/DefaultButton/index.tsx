import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon?: React.ReactNode;           // Ícone do botão (ReactNode)
  color?: 'green' | 'red';          // Variação de cor
} & React.ComponentProps<'button'>; // Herda todas as props nativas de <button>

export function DefaultButton({
  icon,
  color = 'green',
  ...rest
}: DefaultButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      {...rest}
    >
      {icon}
    </button>
  );
}