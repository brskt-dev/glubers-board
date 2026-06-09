import type { Chronicle } from "@/types";
import { PixelPanel } from "./PixelPanel";

interface ChronicleCardProps {
  chronicle: Chronicle;
  /** Exibe os parágrafos completos do capítulo (página de Crônicas). */
  full?: boolean;
}

export function ChronicleCard({ chronicle, full = false }: ChronicleCardProps) {
  return (
    <PixelPanel
      variant="wood"
      interactive={!full}
      className="flex h-full flex-col p-6"
    >
      <div className="flex items-center gap-3">
        <span className="pixel-edge flex h-12 w-12 shrink-0 items-center justify-center bg-bark-950 font-pixel text-frost-200">
          {chronicle.chapter}
        </span>
        <div>
          <p className="font-pixel text-[0.55rem] uppercase tracking-[0.25em] text-frost-300">
            Capítulo {chronicle.chapter}
          </p>
          <h3 className="mt-1 font-pixel text-sm leading-relaxed text-snow sm:text-[0.95rem]">
            {chronicle.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 italic text-snow-muted">&ldquo;{chronicle.excerpt}&rdquo;</p>

      {full && (
        <div className="mt-4 space-y-3 border-t-2 border-bark-700 pt-4 text-snow-muted">
          {chronicle.body.map((paragraph, i) => (
            <p key={`${chronicle.id}-p${i}`}>{paragraph}</p>
          ))}
        </div>
      )}

      <p className="mt-auto pt-4 font-pixel text-[0.5rem] uppercase tracking-pixel text-snow-dim">
        {chronicle.date}
      </p>
    </PixelPanel>
  );
}
