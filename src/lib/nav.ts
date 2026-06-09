export interface NavItem {
  href: string;
  label: string;
}

/** Itens de navegação principais do Glubers Board. */
export const navItems: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/missions", label: "Missões" },
  { href: "/objectives", label: "Objetivos" },
  { href: "/chronicles", label: "Crônicas" },
  { href: "/players", label: "Players" },
];
