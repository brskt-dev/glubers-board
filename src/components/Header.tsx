import Link from "next/link";
import { SnowflakeIcon } from "./icons";

/**
 * Marca do produto: logo em bloco de gelo + título em fonte pixel.
 */
export function Header() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Glubers Board — início"
    >
      <span className="pixel-edge flex h-11 w-11 items-center justify-center bg-frost-500/20 text-frost-300 animate-ice-glow">
        <SnowflakeIcon className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-pixel text-sm text-snow text-glow transition-colors group-hover:text-frost-200 sm:text-base">
          Glubers
        </span>
        <span className="mt-1 font-pixel text-[0.55rem] tracking-[0.3em] text-frost-300 sm:text-[0.65rem]">
          BOARD
        </span>
      </span>
    </Link>
  );
}
