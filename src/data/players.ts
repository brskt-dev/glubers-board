import type { Player } from "@/types";

/**
 * Players mockados da colônia. Sem ranking — apenas a tribo dos Glubers.
 * avatarColor usa classes utilitárias do Tailwind (ver tailwind.config.ts).
 */
export const players: Player[] = [
  {
    id: "p1",
    nick: "Frostbite",
    title: "Fundador da Colônia",
    role: "O primeiro a acender uma fogueira na clareira congelada.",
    avatarInitials: "FB",
    avatarColor: "bg-frost-400",
    recentContributions: [
      "Demarcou o terreno da Praça Central",
      "Acendeu a fogueira-mãe da colônia",
      "Mapeou a entrada da caverna de gelo",
    ],
  },
  {
    id: "p2",
    nick: "PinguimDeGelo",
    title: "Mestre Construtor",
    role: "Acredita que toda parede merece uma janela para a neve.",
    avatarInitials: "PG",
    avatarColor: "bg-ice-400",
    recentContributions: [
      "Levantou as fundações do Armazém Comunitário",
      "Desenhou o telhado da Torre de Vigia",
      "Doou 3 pilhas de pedra polida",
    ],
  },
  {
    id: "p3",
    nick: "NeveEterna",
    title: "Guardiã da Floresta",
    role: "Conhece cada trilha sob a nevasca.",
    avatarInitials: "NE",
    avatarColor: "bg-frost-300",
    recentContributions: [
      "Replantou 24 mudas de pinheiro",
      "Marcou rota segura até o lago congelado",
      "Encontrou uma aldeia abandonada ao norte",
    ],
  },
  {
    id: "p4",
    nick: "BlocoGelado",
    title: "Minerador-Chefe",
    role: "Desce fundo demais e sempre volta com histórias.",
    avatarInitials: "BG",
    avatarColor: "bg-frost-200",
    recentContributions: [
      "Abriu o primeiro túnel da Mina Comunitária",
      "Trouxe 2 pilhas de ferro para a forja",
      "Iluminou os corredores com tochas",
    ],
  },
  {
    id: "p5",
    nick: "AuroraBoreal",
    title: "Cronista da Colônia",
    role: "Registra cada gelo derretido e cada nova manhã.",
    avatarInitials: "AB",
    avatarColor: "bg-ice-300",
    recentContributions: [
      "Escreveu o Capítulo 2 das Crônicas",
      "Organizou o mural de registros",
      "Catalogou os nomes das primeiras construções",
    ],
  },
  {
    id: "p6",
    nick: "UrsoPolar",
    title: "Defensor da Vila",
    role: "Patrulha as muralhas quando a noite cai forte.",
    avatarInitials: "UP",
    avatarColor: "bg-frost-400",
    recentContributions: [
      "Repeliu uma horda noturna na entrada leste",
      "Construiu o primeiro posto de guarda",
      "Treinou cães da colônia para o patrulhamento",
    ],
  },
  {
    id: "p7",
    nick: "FlocoSolto",
    title: "Fazendeira",
    role: "Faz milagres crescerem no solo congelado.",
    avatarInitials: "FS",
    avatarColor: "bg-frost-200",
    recentContributions: [
      "Plantou a primeira lavoura de trigo da Fazenda de Comida",
      "Domesticou um pequeno rebanho",
      "Distribuiu pão fresco na Praça",
    ],
  },
  {
    id: "p8",
    nick: "GeloNegro",
    title: "Explorador das Profundezas",
    role: "Some por dias e reaparece com mapas estranhos.",
    avatarInitials: "GN",
    avatarColor: "bg-ice-300",
    recentContributions: [
      "Localizou uma caverna de cristais ao sul",
      "Desenhou o mapa das geleiras vizinhas",
      "Recuperou suprimentos de um acampamento perdido",
    ],
  },
];
