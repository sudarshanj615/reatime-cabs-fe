export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="card stack">
      <h2>{title}</h2>
      <p className="muted">{description}</p>
    </div>
  );
}
