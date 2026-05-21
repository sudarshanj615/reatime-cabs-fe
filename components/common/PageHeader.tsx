export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="grid gap-[18px]">
      <h1>{title}</h1>
      {description ? <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">{description}</p> : null}
    </header>
  );
}
