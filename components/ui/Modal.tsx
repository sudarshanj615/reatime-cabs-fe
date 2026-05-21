export function Modal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]" role="dialog" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
