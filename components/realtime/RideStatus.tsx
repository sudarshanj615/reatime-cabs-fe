export function RideStatus({ status }: { status: string }) {
  return (
    <div className="card stack">
      <h2>Ride Status</h2>
      <strong>{status}</strong>
      <p className="muted">Realtime ride updates will appear automatically after sockets are connected.</p>
    </div>
  );
}
