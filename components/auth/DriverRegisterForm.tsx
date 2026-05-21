export function DriverRegisterForm() {
  return (
    <div className="card stack">
      <h1>Driver Registration</h1>
      <input className="input" placeholder="Driver name" />
      <input className="input" type="email" placeholder="Email address" />
      <input className="input" placeholder="Phone number" />
      <input className="input" placeholder="Vehicle number" />
      <select className="input" defaultValue="">
        <option value="" disabled>
          Vehicle type
        </option>
        <option>Mini</option>
        <option>Auto</option>
        <option>Bike</option>
        <option>Scooty</option>
        <option>SUV</option>
      </select>
      <input className="input" type="password" placeholder="Password" />
      <button className="button">Register Driver</button>
    </div>
  );
}
