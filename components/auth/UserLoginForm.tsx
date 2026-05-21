import Link from "next/link";

export function UserLoginForm() {
  return (
    <div className="card stack">
      <h1>User Login</h1>
      <input className="input" type="email" placeholder="Email address" />
      <input className="input" type="password" placeholder="Password" />
      <button className="button">Login as User</button>
      <p className="muted">
        New rider? <Link href="/signin?mode=signup&role=user">Create user account</Link>
      </p>
    </div>
  );
}
