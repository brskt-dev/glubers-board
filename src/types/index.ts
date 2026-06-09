/**
 * Tipos compartilhados do Glubers Board.
 * Toda a fonte de dados é estática/mockada (ver src/data) — sem API, banco ou auth.
 */

export type MissionType =
  | "construcao"
  | "exploracao"
  | "coleta"
  | "combate"
  | "comunidade";

export type MissionDifficulty = "simples" | "media" | "complexa";

export type MissionStatus = "ativa" | "concluida";

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: MissionType;
  difficulty: MissionDifficulty;
  status: MissionStatus;
  /** Nicks dos players envolvidos. */
  participants: string[];
  /** Histórico curto: linha do tempo enxuta da missão. */
  history: string[];
}

export type ObjectiveStatus = "planejado" | "em_andamento" | "concluido";

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: ObjectiveStatus;
  /** Progresso de 0 a 100. */
  progress: number;
  /** Emoji/ícone textual simples para reforçar o tema. */
  icon: string;
}

export interface Chronicle {
  id: string;
  chapter: number;
  title: string;
  /** Frase curta de abertura, usada como destaque do card. */
  excerpt: string;
  /** Parágrafos do capítulo. */
  body: string[];
  /** Data narrativa (in-game / ficcional). */
  date: string;
}

export interface Player {
  id: string;
  nick: string;
  /** Título honorífico / cargo na colônia. */
  title: string;
  /** Função narrativa opcional na história da colônia. */
  role?: string;
  /** Inicial(is) usada(s) no avatar pixelado. */
  avatarInitials: string;
  /** Cor de destaque do avatar (classe utilitária de fundo do Tailwind). */
  avatarColor: string;
  /** Contribuições recentes do player. */
  recentContributions: string[];
}
