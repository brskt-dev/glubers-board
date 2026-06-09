import type { BadgeTone } from "@/components/Badge";
import type {
  MissionDifficulty,
  MissionStatus,
  MissionType,
  ObjectiveStatus,
} from "@/types";

/** Rótulos e estilos de exibição para os metadados de missões/objetivos. */

export const missionTypeLabel: Record<MissionType, string> = {
  construcao: "Construção",
  exploracao: "Exploração",
  coleta: "Coleta",
  combate: "Combate",
  comunidade: "Comunidade",
};

export const missionTypeIcon: Record<MissionType, string> = {
  construcao: "🧱",
  exploracao: "🧭",
  coleta: "⛏️",
  combate: "⚔️",
  comunidade: "🤝",
};

export const difficultyLabel: Record<MissionDifficulty, string> = {
  simples: "Simples",
  media: "Média",
  complexa: "Complexa",
};

export const difficultyTone: Record<MissionDifficulty, BadgeTone> = {
  simples: "green",
  media: "amber",
  complexa: "rose",
};

export const missionStatusLabel: Record<MissionStatus, string> = {
  ativa: "Ativa",
  concluida: "Concluída",
};

export const objectiveStatusLabel: Record<ObjectiveStatus, string> = {
  planejado: "Planejado",
  em_andamento: "Em andamento",
  concluido: "Concluído",
};

export const objectiveStatusTone: Record<ObjectiveStatus, BadgeTone> = {
  planejado: "stone",
  em_andamento: "amber",
  concluido: "green",
};
