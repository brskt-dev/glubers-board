import type { Mission } from "@/types";

/**
 * Missões mockadas da colônia dos Glubers.
 */
export const missions: Mission[] = [
  {
    id: "m1",
    title: "Erguer a Praça Central",
    description:
      "Limpar a neve do centro da clareira e montar o coração da colônia: fogueira, bancos de pedra e o totem dos Glubers.",
    type: "construcao",
    difficulty: "media",
    status: "ativa",
    participants: ["Frostbite", "PinguimDeGelo", "AuroraBoreal"],
    history: [
      "Terreno demarcado por Frostbite",
      "Fogueira-mãe acesa no centro",
      "Faltam os bancos de pedra polida",
    ],
  },
  {
    id: "m2",
    title: "Mapear o Lago Congelado",
    description:
      "Atravessar a floresta nevada e desenhar uma rota segura até o grande lago de gelo a oeste.",
    type: "exploracao",
    difficulty: "simples",
    status: "ativa",
    participants: ["NeveEterna", "GeloNegro"],
    history: [
      "Trilha inicial marcada com tochas",
      "Avistado um banco de peixes sob o gelo",
    ],
  },
  {
    id: "m3",
    title: "Abrir a Mina Comunitária",
    description:
      "Escavar o primeiro grande poço da colônia, iluminar os corredores e organizar baús de recursos compartilhados.",
    type: "coleta",
    difficulty: "complexa",
    status: "ativa",
    participants: ["BlocoGelado", "PinguimDeGelo", "UrsoPolar"],
    history: [
      "Túnel principal aberto por BlocoGelado",
      "Corredores iluminados com tochas",
      "Primeiras pilhas de ferro recolhidas",
    ],
  },
  {
    id: "m4",
    title: "Defender a Muralha Leste",
    description:
      "Reforçar a paliçada e montar postos de guarda para conter as hordas que surgem na nevasca noturna.",
    type: "combate",
    difficulty: "media",
    status: "ativa",
    participants: ["UrsoPolar", "Frostbite"],
    history: [
      "Primeiro posto de guarda construído",
      "Horda noturna repelida na entrada leste",
    ],
  },
  {
    id: "m5",
    title: "Plantar a Fazenda de Comida",
    description:
      "Preparar o solo congelado, montar estufas improvisadas e garantir trigo e legumes para todo o inverno.",
    type: "comunidade",
    difficulty: "media",
    status: "ativa",
    participants: ["FlocoSolto", "NeveEterna"],
    history: [
      "Primeira lavoura de trigo plantada",
      "Rebanho pequeno domesticado",
    ],
  },
  {
    id: "m6",
    title: "Construir o Armazém Comunitário",
    description:
      "Erguer o grande depósito de madeira escura onde todos guardam e compartilham suprimentos.",
    type: "construcao",
    difficulty: "complexa",
    status: "concluida",
    participants: ["PinguimDeGelo", "BlocoGelado", "FlocoSolto"],
    history: [
      "Fundações lançadas sobre a colina",
      "Telhado de madeira escura finalizado",
      "Baús comunitários organizados e entregues",
    ],
  },
  {
    id: "m7",
    title: "Acender a Fogueira-Mãe",
    description:
      "O primeiro grande marco: manter uma fogueira viva por sete noites seguidas para fundar oficialmente a colônia.",
    type: "comunidade",
    difficulty: "simples",
    status: "concluida",
    participants: ["Frostbite", "AuroraBoreal"],
    history: [
      "Fogueira acesa por Frostbite",
      "Sete noites resistidas sob nevasca",
      "Colônia oficialmente fundada",
    ],
  },
  {
    id: "m8",
    title: "Resgatar o Acampamento Perdido",
    description:
      "Seguir as coordenadas de um antigo acampamento ao sul e recuperar os suprimentos deixados para trás.",
    type: "exploracao",
    difficulty: "complexa",
    status: "concluida",
    participants: ["GeloNegro", "UrsoPolar"],
    history: [
      "Acampamento localizado entre as geleiras",
      "Suprimentos e mapas recuperados",
      "Rota de retorno aberta para a colônia",
    ],
  },
];
