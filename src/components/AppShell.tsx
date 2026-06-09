import type { ReactNode } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { SnowBackground } from "./SnowBackground";

/**
 * Casca da aplicação: fundo de neve + barra superior fixa (marca + navegação)
 * + área de conteúdo + rodapé. Usado pelo layout raiz.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SnowBackground />

      <header className="sticky top-0 z-30 border-b-2 border-night-700 bg-night-950/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Header />
          <Navigation />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">
        {children}
      </main>

      <footer className="border-t-2 border-night-700 bg-night-950/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-snow-dim">
          <p className="text-sm">
            Glubers Board · A primeira colônia dos Glubers no inverno eterno
          </p>
          <p className="mt-1 text-xs text-snow-dim/70">
            Projeto fan-made, sem afiliação oficial com Mojang/Microsoft. Feito
            para a tribo. ❄
          </p>
        </div>
      </footer>
    </div>
  );
}
