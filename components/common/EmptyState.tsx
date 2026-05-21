export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]">
      <h2>{title}</h2>
      <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">{description}</p>
    </div>
  );
}
