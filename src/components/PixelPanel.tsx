import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PixelPanelVariant = "stone" | "wood" | "ice";

interface PixelPanelProps {
  children: ReactNode;
  className?: string;
  /** Aparência do material da placa/bloco. */
  variant?: PixelPanelVariant;
  /** Eleva e adiciona brilho de gelo no hover (ideal para cards clicáveis). */
  interactive?: boolean;
  /** Mantém um brilho de gelo permanente. */
  glow?: boolean;
}

const variantStyles: Record<PixelPanelVariant, string> = {
  stone: "bg-night-800/80 border-night-600",
  wood: "bg-bark-800/80 border-bark-600",
  ice: "bg-frost-500/10 border-frost-400/50",
};

/**
 * Container base com cara de placa/bloco pixelado.
 * Combina uma sombra "pixel" externa com um bevel interno (carved block look).
 */
export function PixelPanel({
  children,
  className,
  variant = "stone",
  interactive = false,
  glow = false,
}: PixelPanelProps) {
  return (
    <div
      className={cn(
        "relative border-2 shadow-pixel backdrop-blur-sm",
        variantStyles[variant],
        interactive &&
          "transition duration-200 hover:-translate-y-1 hover:border-frost-400/70 hover:shadow-frost-glow",
        glow && "shadow-frost-glow",
        className,
      )}
    >
      {/* Bevel interno para o efeito de bloco esculpido */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 shadow-bevel"
      />
      {children}
    </div>
  );
}
