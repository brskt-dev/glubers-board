import type { Mission } from "@/types";
import {
  difficultyLabel,
  difficultyTone,
  missionStatusLabel,
  missionTypeIcon,
  missionTypeLabel,
} from "@/lib/missionMeta";
import { Badge } from "./Badge";
import { PixelPanel } from "./PixelPanel";

export function MissionCard({ mission }: { mission: Mission }) {
  const concluded = mission.status === "concluida";

  return (
    <PixelPanel
      variant="stone"
      interactive
      className={concluded ? "flex h-full flex-col p-5 opacity-90" : "flex h-full flex-col p-5"}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="frost">
          <span aria-hidden>{missionTypeIcon[mission.type]}</span>
          {missionTypeLabel[mission.type]}
        </Badge>
        <Badge tone={difficultyTone[mission.difficulty]}>
          {difficultyLabel[mission.difficulty]}
        </Badge>
        <Badge tone={concluded ? "green" : "ice"} className="ml-auto">
          {missionStatusLabel[mission.status]}
        </Badge>
      </div>

      <h3 className="mt-4 font-pixel text-sm leading-relaxed text-snow sm:text-[0.95rem]">
        {mission.title}
      </h3>
      <p className="mt-2 text-snow-muted">{mission.description}</p>

      <div className="mt-4">
        <p className="font-pixel text-[0.55rem] uppercase tracking-pixel text-snow-dim">
          Participantes
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {mission.participants.map((nick) => (
            <span
              key={nick}
              className="border border-night-600 bg-night-900/60 px-2 py-1 text-sm text-frost-200"
            >
              {nick}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t-2 border-night-700 pt-4">
        <p className="font-pixel text-[0.55rem] uppercase tracking-pixel text-snow-dim">
          Histórico
        </p>
        <ul className="mt-2 space-y-1">
          {mission.history.map((entry, i) => (
            <li
              key={`${mission.id}-h${i}`}
              className="flex gap-2 text-sm text-snow-muted"
            >
              <span aria-hidden className="text-frost-400">
                ›
              </span>
              <span>{entry}</span>
            </li>
          ))}
        </ul>
      </div>
    </PixelPanel>
  );
}
