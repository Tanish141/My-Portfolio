type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
}
