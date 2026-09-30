import { forwardRef } from 'react';

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = 'default',
      size = 'default',
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'span' : 'select';

    const baseClasses = 'flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variantClasses = {
      default: '',
      outline: 'border-input hover:bg-accent',
    };

    const sizeClasses = {
      default: '',
      sm: 'h-9 px-2 text-xs',
      lg: 'h-11 px-4 text-lg',
    };

    return (
      <Comp
        ref={ref}
        className={[
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

export { Select };