import { FC, isValidElement, ReactNode, ButtonHTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './button.module.css';
import ILoading from 'components/Icons/ILoading';

type ButtonVariants = 'primary' | 'text';

type ButtonColor = 'blue' | 'default';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariants;
  loading?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  onClick,
  color,
  className,
  disabled,
  variant = 'primary',
  loading,
  ...props
}) => {
  const classes = classnames(
    styles.common,
    styles[variant],
    disabled && styles.disabled,
    color && styles[color],
    className,
  );

  return (
    <button
      {...props}
      onClick={loading ? undefined : onClick}
      className={classes}>
      {loading ? (
        <ILoading />
      ) : (
        <>
          {isValidElement(startIcon) && (
            <div className={styles['start-wrap']}>{startIcon}</div>
          )}
          {children}
          {isValidElement(endIcon) && (
            <div className={styles['end-wrap']}>{endIcon}</div>
          )}
        </>
      )}
    </button>
  );
};
