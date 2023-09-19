import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

// * types
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ onClick, className, children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'button flex gap-x-2 hover:bg-zinc-900 rounded-md disabled:cursor-not-allowed p-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
