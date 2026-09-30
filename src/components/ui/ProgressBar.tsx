
interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showValue?: boolean;
}

export function ProgressBar({
  value,
  className = '',
  showValue = true
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <>
      <div className={`${className} w-full bg-secondary/50 rounded-full h-2.5 overflow-hidden`}>
        <div
          className="h-full w-0 bg-primary transition-width duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      {showValue && (
        <div className="mt-1 text-xs text-muted-foreground">
          {clampedValue}%
        </div>
      )}
    </>
  );
}

ProgressBar.displayName = 'ProgressBar';