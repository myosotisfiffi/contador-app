import React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {} & React.ComponentProps<'input'>;

export function DefaultInput({ type = 'text', ...rest }: DefaultInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={rest.id || 'default-input'} className={styles.label}>
        {rest.placeholder || 'Campo'}
      </label>
      <input
        id={rest.id || 'default-input'}
        type={type}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}