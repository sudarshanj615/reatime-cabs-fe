export function Modal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card stack" role="dialog" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
