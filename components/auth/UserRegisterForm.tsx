export function UserRegisterForm() {
  return (
    <div className="card stack">
      <h1>User Registration</h1>
      <input className="input" placeholder="Full name" />
      <input className="input" type="email" placeholder="Email address" />
      <input className="input" placeholder="Phone number" />
      <input className="input" type="password" placeholder="Password" />
      <button className="button">Register User</button>
    </div>
  );
}
