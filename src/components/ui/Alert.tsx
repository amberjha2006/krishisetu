import { ReactNode } from 'react';

interface AlertProps {
  variant?: 'default' | 'destructive' | 'success';
  className?: string;
  children: ReactNode;
}

export function Alert({
  variant = 'default',
  className = '',
  children
}: AlertProps) {
  const baseClasses = 'flex items-center space-x-4 rounded-md border p-4 text-sm [&_svg]:size-4';

  const variantClasses = {
    default: 'border-primary/50 bg-primary/50 text-primary-foreground',
    destructive: 'border-destructive/50 bg-destructive/50 text-destructive-foreground',
    success: 'border-success/50 bg-success/50 text-success-foreground',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

Alert.displayName = 'Alert';