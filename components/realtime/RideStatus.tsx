export function RideStatus({ status }: { status: string }) {
  return (
    <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]">
      <h2>Ride Status</h2>
      <strong>{status}</strong>
      <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">Realtime ride updates will appear automatically after sockets are connected.</p>
    </div>
  );
}
