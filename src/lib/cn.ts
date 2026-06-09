/**
 * Junta classes condicionalmente sem dependências externas.
 * Mantém o bundle enxuto (sem clsx/tailwind-merge para o MVP).
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
