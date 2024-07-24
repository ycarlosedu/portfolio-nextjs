import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'p'>;

export function TypographyP({ children, className, ...props }: Props) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  );
}
