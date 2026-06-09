import type { CSSProperties } from "react";

/**
 * Fundo ambiente: neve caindo + leve brilho de aurora.
 *
 * As partículas são geradas de forma DETERMINÍSTICA (a partir do índice),
 * sem Math.random, para que servidor e cliente rendam exatamente igual e
 * não haja "hydration mismatch". As animações respeitam prefers-reduced-motion
 * (ver globals.css).
 */
const FLAKE_COUNT = 42;

const flakes = Array.from({ length: FLAKE_COUNT }, (_, i) => ({
  id: i,
  left: (i * 67) % 100, // vw
  size: 2 + ((i * 13) % 4), // 2..5 px
  duration: 7 + ((i * 7) % 9), // 7..15 s
  delay: (i * 7) % 13, // 0..12 s
  drift: ((i % 5) - 2) * 14, // -28..28 px
  opacity: 0.35 + ((i * 17) % 55) / 100, // 0.35..0.89
}));

export function SnowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Brilho de aurora lento ao fundo */}
      <div className="absolute -top-1/3 left-1/2 h-[60vh] w-[85vw] -translate-x-1/2 rounded-full bg-frost-500/10 blur-3xl animate-aurora" />
      <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-ice-500/5 blur-3xl" />

      {/* Neve caindo */}
      {flakes.map((f) => (
        <span
          key={f.id}
          className="absolute top-0 block rounded-full bg-snow animate-snowfall"
          style={
            {
              left: `${f.left}vw`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              opacity: f.opacity,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              "--drift": `${f.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
