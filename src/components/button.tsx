import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    children: string;
    asChild?: boolean;
    className?: string;
  }

export function Button({children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild? Slot : 'button';
    return(
        <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold my-4 text-gray-100 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2',
            className
        )} {...props}>{children}</Comp>
    )
}