interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
