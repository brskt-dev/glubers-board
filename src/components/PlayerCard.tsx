import type { Player } from "@/types";
import { cn } from "@/lib/cn";
import { PixelPanel } from "./PixelPanel";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <PixelPanel variant="stone" interactive className="flex h-full flex-col p-5">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className={cn(
            "pixel-edge flex h-14 w-14 shrink-0 items-center justify-center font-pixel text-sm text-night-950",
            player.avatarColor,
          )}
        >
          {player.avatarInitials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-pixel text-sm text-snow">{player.nick}</h3>
          <p className="mt-1 text-sm text-frost-200">{player.title}</p>
        </div>
      </div>

      {player.role && (
        <p className="mt-4 italic text-snow-muted">&ldquo;{player.role}&rdquo;</p>
      )}

      <div className="mt-auto border-t-2 border-night-700 pt-4">
        <p className="font-pixel text-[0.55rem] uppercase tracking-pixel text-snow-dim">
          Contribuições recentes
        </p>
        <ul className="mt-2 space-y-1">
          {player.recentContributions.map((contribution, i) => (
            <li
              key={`${player.id}-c${i}`}
              className="flex gap-2 text-sm text-snow-muted"
            >
              <span aria-hidden className="text-frost-400">
                ›
              </span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </PixelPanel>
  );
}
