import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface TextProps {
    size?: 'lg' | 'xl' | '2xl';
    children: string;
    asChild?: boolean;
    className?: string;
  }

export function Heading({size = 'lg', children, asChild, className}: TextProps){
    const Comp = asChild? Slot : 'span';
    return(
        <Comp className={clsx('text-gray-100 font-sans font-bold',
        {
            'text-lg': size == 'lg',
            'text-xl': size == 'xl',
            'text-2xl': size == '2xl',
        }, className
        )}>{children}</Comp>
    )
}