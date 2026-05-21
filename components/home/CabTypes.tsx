import { cabTypes } from "@/constants/cabTypes";

export function CabTypes() {
  return (
    <div className="home-block">
      <div className="section-heading">
        <span>Our services</span>
        <h2>One app, many ways to move</h2>
      </div>
      { <div className="service-grid">
        {cabTypes.map((cab) => (
          <div className="service-card" key={cab.id}>
            <div className="service-icon">{cab.icon}</div>
            <h3>{cab.name}</h3>
            <p>{cab.seats} seat ride starting from Rs. {cab.baseFare}</p>
          </div>
        ))}
      </div> }
    </div>
  );
}
