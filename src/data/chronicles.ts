import type { Chronicle } from "@/types";

/**
 * Crônicas — a lore da colônia dos Glubers, capítulo a capítulo.
 */
export const chronicles: Chronicle[] = [
  {
    id: "c1",
    chapter: 1,
    title: "O Inverno Eterno",
    excerpt:
      "Não houve aviso. O sol simplesmente esqueceu de voltar, e a neve nunca mais parou.",
    date: "Dia 1 — Amanhecer Cinzento",
    body: [
      "Quando o último verão se apagou, ninguém acreditou que seria para sempre. As folhas caíram, o vento esfriou, e então o branco tomou conta de tudo. Rios viraram pontes de gelo. Montanhas sumiram atrás da névoa.",
      "Os Glubers eram apenas um punhado de sobreviventes dispersos, cada um lutando contra o frio à sua maneira. Foi a fome e o medo do escuro que os empurraram para perto uns dos outros.",
      "Naquela primeira noite reunidos, decidiram que não bastava sobreviver: era preciso construir algo que durasse mais que o inverno. E assim, sob a nevasca, nasceu a ideia de uma colônia.",
    ],
  },
  {
    id: "c2",
    chapter: 2,
    title: "A Clareira Congelada",
    excerpt:
      "Entre pinheiros cobertos de gelo, encontraram o único pedaço de chão que valia a pena defender.",
    date: "Dia 6 — Primeira Fogueira",
    body: [
      "Frostbite foi quem encontrou a clareira. Um círculo de terra firme no meio da floresta nevada, protegido por pinheiros antigos que seguravam a pior parte do vento.",
      "Acenderam ali a primeira fogueira-mãe e juraram mantê-la viva por sete noites. Se a chama resistisse, a colônia resistiria também.",
      "Na sétima manhã, a fogueira ainda crepitava. Foi o suficiente. A clareira ganhou um nome, os Glubers ganharam um lar, e o inverno — pela primeira vez — ganhou um adversário.",
    ],
  },
];
