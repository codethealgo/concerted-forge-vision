interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="container relative">
        <div className="w-12 h-1 bg-accent mb-6" />
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-foreground/60 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
