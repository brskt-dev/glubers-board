import type { Objective } from "@/types";

/**
 * Objetivos globais da colônia — metas compartilhadas por todos os Glubers.
 */
export const objectives: Objective[] = [
  {
    id: "o1",
    title: "Construir a Praça Central",
    description:
      "O coração da colônia: ponto de encontro com fogueira, totem e bancos de pedra.",
    status: "em_andamento",
    progress: 60,
    icon: "🔥",
  },
  {
    id: "o2",
    title: "Montar o Armazém Comunitário",
    description:
      "Depósito compartilhado de madeira escura para guardar e distribuir suprimentos.",
    status: "concluido",
    progress: 100,
    icon: "📦",
  },
  {
    id: "o3",
    title: "Criar a Fazenda de Comida",
    description:
      "Garantir trigo, legumes e criação para alimentar a vila durante o inverno eterno.",
    status: "em_andamento",
    progress: 35,
    icon: "🌾",
  },
  {
    id: "o4",
    title: "Abrir a Mina Comunitária",
    description:
      "Escavar e iluminar o grande poço de recursos compartilhados sob a colônia.",
    status: "em_andamento",
    progress: 45,
    icon: "⛏️",
  },
  {
    id: "o5",
    title: "Fundar a Torre de Vigia",
    description:
      "Erguer a torre mais alta da vila para vigiar a floresta e a nevasca noturna.",
    status: "planejado",
    progress: 10,
    icon: "🗼",
  },
];
