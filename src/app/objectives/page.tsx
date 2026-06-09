import type { Metadata } from "next";
import { objectives } from "@/data/objectives";
import { ObjectiveCard } from "@/components/ObjectiveCard";
import { PageHeading } from "@/components/PageHeading";
import { PixelPanel } from "@/components/PixelPanel";
import { ProgressBar } from "@/components/ProgressBar";

export const metadata: Metadata = {
  title: "Objetivos da Colônia",
  description:
    "As grandes metas comunitárias dos Glubers: praça central, armazém, fazenda, mina e torre de vigia.",
};

const completed = objectives.filter((o) => o.status === "concluido").length;
const overall = Math.round(
  objectives.reduce((sum, o) => sum + o.progress, 0) / objectives.length,
);

export default function ObjectivesPage() {
  return (
    <div>
      <PageHeading
        eyebrow="Metas comunitárias"
        title="Objetivos da Colônia"
        description="Os grandes marcos que todos os Glubers constroem juntos. Quando o último for concluído, a vila terá vencido o primeiro inverno."
      />

      <PixelPanel variant="ice" glow className="mb-10 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-pixel text-[0.6rem] uppercase tracking-pixel text-frost-300">
              Progresso geral
            </p>
            <p className="mt-2 text-snow-muted">
              {completed} de {objectives.length} objetivos concluídos
            </p>
          </div>
          <div className="w-full sm:max-w-xs">
            <ProgressBar value={overall} label="Colônia" />
          </div>
        </div>
      </PixelPanel>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective) => (
          <ObjectiveCard key={objective.id} objective={objective} />
        ))}
      </div>
    </div>
  );
}
