const features = [
  { title: "Quick pickups", text: "Nearby captains and drivers help you get moving without waiting around." },
  { title: "Transparent fares", text: "Choose your ride type and see sensible fare estimates before confirming." },
  { title: "Live tracking", text: "Follow every ride from pickup to drop with simple status updates." },
  { title: "Built for drivers", text: "A focused driver dashboard keeps active rides and earnings easy to scan." },
];

export function Features() {
  return (
    <div className="home-block">
      <div className="section-heading">
        <span>Why choose us</span>
        <h2>Fast, simple and dependable</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
