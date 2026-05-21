import Link from "next/link";

export function DriverLoginForm() {
  return (
    <div className="card stack">
      <h1>Driver Login</h1>
      <input className="input" type="email" placeholder="Driver email" />
      <input className="input" type="password" placeholder="Password" />
      <button className="button">Login as Driver</button>
      <p className="muted">
        New driver? <Link href="/signin?mode=signup&role=driver">Create driver account</Link>
      </p>
    </div>
  );
}
