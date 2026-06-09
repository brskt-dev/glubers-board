import type { Metadata } from "next";
import { missions } from "@/data/missions";
import { MissionCard } from "@/components/MissionCard";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Missões",
  description:
    "Missões ativas e concluídas da colônia dos Glubers — construção, exploração, coleta, combate e comunidade.",
};

const activeMissions = missions.filter((m) => m.status === "ativa");
const completedMissions = missions.filter((m) => m.status === "concluida");

export default function MissionsPage() {
  return (
    <div>
      <PageHeading
        eyebrow="Diário de bordo"
        title="Missões"
        description="Tudo o que a colônia está erguendo, explorando e defendendo no inverno eterno. Cada missão guarda seus participantes e um histórico curto do que já aconteceu."
      />

      <section className="mb-12">
        <h2 className="mb-4 font-pixel text-sm uppercase tracking-pixel text-frost-300">
          Ativas · {activeMissions.length}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {activeMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-pixel text-sm uppercase tracking-pixel text-snow-muted">
          Concluídas · {completedMissions.length}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {completedMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>
    </div>
  );
}
