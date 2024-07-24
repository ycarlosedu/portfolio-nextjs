import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'h3'>;

export function TypographyH3({ children, className, ...props }: Props) {
  return (
    <h3
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
}
