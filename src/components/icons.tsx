import type { SVGProps } from "react";

/**
 * Ícones desenhados em "pixel art" via <rect> com shapeRendering="crispEdges".
 * Sem assets externos — tudo vetorial e leve.
 */

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="7" y="0" width="2" height="16" />
      <rect x="0" y="7" width="16" height="2" />
      <rect x="2" y="2" width="2" height="2" />
      <rect x="12" y="2" width="2" height="2" />
      <rect x="2" y="12" width="2" height="2" />
      <rect x="12" y="12" width="2" height="2" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="10" y="10" width="2" height="2" />
    </svg>
  );
}

export function PickaxeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="3" height="2" />
      <rect x="11" y="2" width="3" height="2" />
      <rect x="0" y="4" width="3" height="2" />
      <rect x="13" y="4" width="3" height="2" />
      <rect x="6" y="4" width="4" height="2" />
      <rect x="7" y="6" width="2" height="9" />
    </svg>
  );
}

export function TorchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="6" y="2" width="4" height="2" />
      <rect x="5" y="4" width="6" height="4" />
      <rect x="6" y="8" width="4" height="2" />
      <rect x="7" y="10" width="2" height="5" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="1" y="3" width="14" height="2" />
      <rect x="1" y="7" width="14" height="2" />
      <rect x="1" y="11" width="14" height="2" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="3" height="3" />
      <rect x="5" y="5" width="2" height="2" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="11" y="11" width="3" height="3" />
      <rect x="11" y="2" width="3" height="3" />
      <rect x="9" y="5" width="2" height="2" />
      <rect x="5" y="9" width="2" height="2" />
      <rect x="2" y="11" width="3" height="3" />
    </svg>
  );
}
