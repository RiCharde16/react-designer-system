import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
    asChild?: boolean;
  }

export function Button({children, asChild}: ButtonProps){
    const Comp = asChild? Slot : 'button';
    return(
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold my-4 text-gray-100 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2',
        )}>{children}</Comp>
    )
}