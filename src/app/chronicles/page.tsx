import type { Metadata } from "next";
import { chronicles } from "@/data/chronicles";
import { ChronicleCard } from "@/components/ChronicleCard";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Crônicas",
  description:
    "A lore da colônia dos Glubers, capítulo a capítulo — do inverno eterno à clareira congelada.",
};

const orderedChronicles = [...chronicles].sort((a, b) => a.chapter - b.chapter);

export default function ChroniclesPage() {
  return (
    <div>
      <PageHeading
        eyebrow="Lore da colônia"
        title="Crônicas"
        description="A história dos Glubers, registrada capítulo a capítulo pela cronista da colônia. Leia como tudo começou sob a neve que nunca para."
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {orderedChronicles.map((chronicle) => (
          <ChronicleCard key={chronicle.id} chronicle={chronicle} full />
        ))}
      </div>
    </div>
  );
}
