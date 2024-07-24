import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'h4'>;

export function TypographyH4({ children, className, ...props }: Props) {
  return (
    <h4
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h4>
  );
}
