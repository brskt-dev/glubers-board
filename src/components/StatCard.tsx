import Link from "next/link";
import type { ReactNode } from "react";
import { PixelPanel } from "./PixelPanel";

interface StatCardProps {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
  /** Se informado, o card vira um link para a seção correspondente. */
  href?: string;
}

/** Card de resumo do dashboard (número grande + rótulo + dica). */
export function StatCard({ label, value, hint, icon, href }: StatCardProps) {
  const content = (
    <PixelPanel variant="stone" interactive={Boolean(href)} className="h-full p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-pixel text-[0.55rem] uppercase tracking-pixel text-snow-muted">
          {label}
        </p>
        {icon && (
          <span aria-hidden className="text-2xl leading-none">
            {icon}
          </span>
        )}
      </div>
      <p className="mt-4 font-pixel text-2xl text-frost-200 text-glow sm:text-3xl">
        {value}
      </p>
      {hint && <p className="mt-3 text-sm text-snow-dim">{hint}</p>}
    </PixelPanel>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-frost-400"
      >
        {content}
      </Link>
    );
  }

  return content;
}
