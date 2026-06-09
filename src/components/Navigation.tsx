"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/nav";
import { CloseIcon, MenuIcon } from "./icons";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    cn(
      "block px-3 py-2 font-pixel text-[0.6rem] tracking-pixel uppercase transition-colors sm:text-[0.65rem]",
      "border-2 border-transparent",
      active
        ? "text-frost-200 text-glow border-b-frost-400/70"
        : "text-snow-muted hover:text-snow hover:border-b-night-600",
    );

  return (
    <nav className="relative" aria-label="Navegação principal">
      {/* Links — desktop */}
      <ul className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClass(isActive(item.href))}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Botão — mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pixel-edge flex h-10 w-10 items-center justify-center bg-night-800 text-frost-200 transition-colors hover:text-frost-100 md:hidden"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        {open ? (
          <CloseIcon className="h-4 w-4" />
        ) : (
          <MenuIcon className="h-4 w-4" />
        )}
      </button>

      {/* Menu — mobile (dropdown ancorado ao botão) */}
      {open && (
        <ul className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-56 border-2 border-night-600 bg-night-900/95 p-2 shadow-pixel backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={linkClass(isActive(item.href))}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
