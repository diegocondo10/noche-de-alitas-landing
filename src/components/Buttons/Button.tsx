'use client';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import { FC, MouseEvent } from 'react';

interface ButtonProps extends PrimeButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'help' | 'success' | 'gray';
  outlined?: boolean;
  block?: boolean;
  sm?: boolean;
  lg?: boolean;
  text?: boolean;
  rounded?: boolean;
  access?: string;
}

const Button: FC<ButtonProps> = ({
  sm = false,
  lg = false,
  block = false,
  outlined = true,
  href,
  text = false,
  rounded = false,
  access,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  children,
  ...rest
}) => {
  const router = useRouter();

  const _onClick = (evt: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(evt);
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <PrimeButton
      className={classNames(
        {
          [`p-button-${variant}`]: !!variant,
          'w-full': block,
        },
        className
      )}
      text={text}
      outlined={outlined}
      rounded={rounded}
      //@ts-ignore
      size={classNames({
        small: sm,
        large: lg,
      })}
      onClick={_onClick}
      type={type}
      {...rest}
    >
      {children}
    </PrimeButton>
  );
};

export default Button;
