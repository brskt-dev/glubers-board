import Link from "next/link";
import { PixelPanel } from "@/components/PixelPanel";
import { SnowflakeIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <PixelPanel variant="ice" glow className="max-w-md p-8 text-center">
        <SnowflakeIcon className="mx-auto h-10 w-10 text-frost-300 animate-float" />
        <h1 className="mt-4 font-pixel text-2xl text-snow text-glow">404</h1>
        <p className="mt-3 font-pixel text-[0.7rem] leading-relaxed text-frost-200">
          Perdido na nevasca
        </p>
        <p className="mt-3 text-snow-muted">
          Esse trecho da colônia ainda não foi descoberto. Volte para o calor da
          fogueira.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex border-2 border-frost-400/60 bg-frost-500/20 px-4 py-2 font-pixel text-[0.6rem] uppercase tracking-pixel text-frost-100 transition hover:bg-frost-500/30 hover:shadow-frost-glow"
        >
          Voltar ao início
        </Link>
      </PixelPanel>
    </div>
  );
}
