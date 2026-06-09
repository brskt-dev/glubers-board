interface ProgressBarProps {
  /** Valor de 0 a 100. */
  value: number;
  label?: string;
}

/** Barra de progresso pixelada com brilho de gelo. */
export function ProgressBar({ value, label = "Progresso" }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <div>
      <div className="mb-1 flex items-center justify-between font-pixel text-[0.55rem] uppercase tracking-pixel text-snow-dim">
        <span>{label}</span>
        <span className="text-frost-200">{clamped}%</span>
      </div>
      <div className="h-3 w-full border-2 border-night-600 bg-night-900 p-[2px]">
        <div
          className="h-full bg-gradient-to-r from-frost-500 via-ice-300 to-frost-500 bg-[length:200%_100%] animate-shimmer transition-[width] duration-500"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
