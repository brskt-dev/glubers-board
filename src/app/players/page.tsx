import type { Metadata } from "next";
import { players } from "@/data/players";
import { PlayerCard } from "@/components/PlayerCard";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Players",
  description:
    "Os Glubers que mantêm a colônia viva no inverno eterno — sem ranking, só a tribo.",
};

export default function PlayersPage() {
  return (
    <div>
      <PageHeading
        eyebrow="A tribo"
        title="Players"
        description="Os colonos que mantêm a fogueira acesa. Sem ranking, sem disputa — cada Gluber tem seu papel na história da vila."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
