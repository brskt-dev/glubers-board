import Link from "next/link";
import { missions } from "@/data/missions";
import { objectives } from "@/data/objectives";
import { chronicles } from "@/data/chronicles";
import { players } from "@/data/players";
import { MissionCard } from "@/components/MissionCard";
import { ObjectiveCard } from "@/components/ObjectiveCard";
import { ChronicleCard } from "@/components/ChronicleCard";
import { StatCard } from "@/components/StatCard";
import { PixelPanel } from "@/components/PixelPanel";
import { SnowflakeIcon } from "@/components/icons";

const activeMissions = missions.filter((m) => m.status === "ativa");
const completedObjectives = objectives.filter((o) => o.status === "concluido");
const inProgressObjectives = objectives.filter(
  (o) => o.status === "em_andamento",
);
const latestChronicle = chronicles.reduce((a, b) =>
  b.chapter > a.chapter ? b : a,
);

// Feed de "últimos registros": o avanço mais recente de cada missão ativa.
const recentLogs = activeMissions.slice(0, 5).map((m) => ({
  id: m.id,
  mission: m.title,
  entry: m.history[m.history.length - 1],
}));

const btnPrimary =
  "inline-flex items-center gap-2 border-2 border-frost-400/60 bg-frost-500/20 px-4 py-2 font-pixel text-[0.6rem] uppercase tracking-pixel text-frost-100 transition hover:bg-frost-500/30 hover:shadow-frost-glow";
const btnGhost =
  "inline-flex items-center gap-2 border-2 border-night-600 bg-night-800 px-4 py-2 font-pixel text-[0.6rem] uppercase tracking-pixel text-snow-muted transition hover:border-frost-400/50 hover:text-snow";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <PixelPanel variant="ice" glow className="overflow-hidden p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-frost-300">
            <span className="animate-float">
              <SnowflakeIcon className="h-7 w-7" />
            </span>
            <span className="font-pixel text-[0.6rem] uppercase tracking-[0.3em]">
              Colônia dos Glubers
            </span>
          </div>

          <h1 className="font-pixel text-2xl leading-[1.5] text-snow text-glow sm:text-3xl lg:text-4xl">
            Glubers Board
          </h1>
          <p className="-mt-2 font-pixel text-[0.7rem] leading-relaxed text-frost-200 sm:text-sm">
            A primeira colônia dos Glubers no inverno eterno
          </p>

          <p className="max-w-2xl text-snow-muted">
            Bem-vindo ao mural da colônia. Aqui acompanhamos cada bloco assentado
            na nevasca: as missões em andamento, os grandes objetivos comunitários,
            as crônicas da nossa fundação e os Glubers que mantêm a fogueira acesa.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/missions" className={btnPrimary}>
              Ver missões
            </Link>
            <Link href="/chronicles" className={btnGhost}>
              Ler as crônicas
            </Link>
          </div>
        </div>
      </PixelPanel>

      {/* Resumo da colônia */}
      <section>
        <h2 className="mb-4 font-pixel text-sm uppercase tracking-pixel text-frost-300">
          Resumo da colônia
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            label="Missões ativas"
            value={activeMissions.length}
            hint="Em andamento agora"
            icon="🧭"
            href="/missions"
          />
          <StatCard
            label="Objetivos concluídos"
            value={`${completedObjectives.length}/${objectives.length}`}
            hint="Metas da colônia"
            icon="🏗️"
            href="/objectives"
          />
          <StatCard
            label="Últimos registros"
            value={recentLogs.length}
            hint="Novidades recentes"
            icon="📜"
          />
          <StatCard
            label="Capítulo atual"
            value={`Cap. ${latestChronicle.chapter}`}
            hint={latestChronicle.title}
            icon="❄️"
            href="/chronicles"
          />
        </div>
      </section>

      {/* Missões ativas + barra lateral */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-pixel text-sm uppercase tracking-pixel text-frost-300">
              Missões ativas
            </h2>
            <Link
              href="/missions"
              className="font-pixel text-[0.6rem] uppercase tracking-pixel text-snow-muted transition-colors hover:text-frost-200"
            >
              Ver todas ›
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {activeMissions.slice(0, 2).map((mission) => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="mb-4 font-pixel text-sm uppercase tracking-pixel text-frost-300">
              Capítulo atual
            </h2>
            <ChronicleCard chronicle={latestChronicle} />
          </div>

          <div>
            <h2 className="mb-4 font-pixel text-sm uppercase tracking-pixel text-frost-300">
              Últimos registros
            </h2>
            <PixelPanel variant="stone" className="p-5">
              <ul className="space-y-3">
                {recentLogs.map((log) => (
                  <li key={log.id} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-frost-400">
                      ❄
                    </span>
                    <div>
                      <p className="text-snow-muted">{log.entry}</p>
                      <p className="mt-0.5 font-pixel text-[0.5rem] uppercase tracking-pixel text-snow-dim">
                        {log.mission}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </PixelPanel>
          </div>
        </aside>
      </section>

      {/* Objetivos em andamento */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-pixel text-sm uppercase tracking-pixel text-frost-300">
            Objetivos em andamento
          </h2>
          <Link
            href="/objectives"
            className="font-pixel text-[0.6rem] uppercase tracking-pixel text-snow-muted transition-colors hover:text-frost-200"
          >
            Ver todos ›
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inProgressObjectives.slice(0, 3).map((objective) => (
            <ObjectiveCard key={objective.id} objective={objective} />
          ))}
        </div>
      </section>

      {/* Atalho para players */}
      <section>
        <PixelPanel variant="wood" className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-pixel text-sm text-snow">A tribo dos Glubers</h2>
            <p className="mt-2 text-snow-muted">
              {players.length} colonos mantêm a vila viva sob a neve.
            </p>
          </div>
          <Link href="/players" className={btnPrimary}>
            Conhecer os players
          </Link>
        </PixelPanel>
      </section>
    </div>
  );
}
