import type { Objective } from "@/types";
import { objectiveStatusLabel, objectiveStatusTone } from "@/lib/missionMeta";
import { Badge } from "./Badge";
import { PixelPanel } from "./PixelPanel";
import { ProgressBar } from "./ProgressBar";

export function ObjectiveCard({ objective }: { objective: Objective }) {
  return (
    <PixelPanel variant="stone" interactive className="flex h-full flex-col p-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="pixel-edge flex h-12 w-12 shrink-0 items-center justify-center bg-night-900 text-2xl"
        >
          {objective.icon}
        </span>
        <div className="min-w-0">
          <h3 className="font-pixel text-sm leading-relaxed text-snow">
            {objective.title}
          </h3>
          <Badge tone={objectiveStatusTone[objective.status]} className="mt-2">
            {objectiveStatusLabel[objective.status]}
          </Badge>
        </div>
      </div>

      <p className="mt-3 text-snow-muted">{objective.description}</p>

      <div className="mt-auto pt-5">
        <ProgressBar value={objective.progress} />
      </div>
    </PixelPanel>
  );
}
