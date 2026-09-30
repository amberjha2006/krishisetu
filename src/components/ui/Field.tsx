import { ReactNode } from 'react';

interface FieldProps {
  label?: string;
  className?: string;
  children: ReactNode;
  error?: string;
  helperText?: string;
}

export function Field({
  label,
  className = '',
  children,
  error,
  helperText
}: FieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="space-y-1">
        {children}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        {!error && helperText && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )}
      </div>
    </div>
  );
}

Field.displayName = 'Field';