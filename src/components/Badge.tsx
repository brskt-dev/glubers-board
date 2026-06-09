import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone =
  | "frost"
  | "ice"
  | "snow"
  | "wood"
  | "green"
  | "amber"
  | "rose"
  | "stone";

const toneStyles: Record<BadgeTone, string> = {
  frost: "bg-frost-500/15 text-frost-200 border-frost-400/40",
  ice: "bg-ice-500/15 text-ice-300 border-ice-400/40",
  snow: "bg-snow/10 text-snow border-snow/30",
  wood: "bg-bark-700/50 text-amber-200/90 border-bark-600",
  green: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  amber: "bg-amber-500/15 text-amber-300 border-amber-400/40",
  rose: "bg-rose-500/15 text-rose-300 border-rose-400/40",
  stone: "bg-night-700/60 text-snow-muted border-night-600",
};

/** Pílula pixelada para tipos, dificuldades e status. */
export function Badge({
  children,
  tone = "stone",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-2 py-1 font-pixel text-[0.5rem] uppercase tracking-pixel sm:text-[0.55rem]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
