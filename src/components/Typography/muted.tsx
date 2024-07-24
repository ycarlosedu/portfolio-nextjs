import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'p'>;

export function TypographyMuted({ children, className, ...props }: Props) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}
