interface PageHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Cabeçalho padrão das páginas internas. */
export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="font-pixel text-[0.6rem] uppercase tracking-[0.3em] text-frost-300">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 font-pixel text-xl leading-relaxed text-snow text-glow sm:text-2xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-2xl text-snow-muted">{description}</p>
      )}
      <div className="frost-divider mt-5" />
    </header>
  );
}
