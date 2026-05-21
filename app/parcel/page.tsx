import { FaMapMarkerAlt } from "react-icons/fa";

const parcelTypes = ["Documents", "Food", "Grocery", "Electronics", "Small Package (up to 5 kg)", "Large Package (up to 20 kg)"];
const vehicleTypes = [
  { name: "Bike", detail: "Fastest for small parcels up to 5 kg" },
  { name: "Scooty", detail: "Best for light packages and quick city drops" },
  { name: "Auto", detail: "Useful for medium parcels and safer handling" },
  { name: "Mini Cab", detail: "For fragile parcels or multiple small boxes" },
];

export default function ParcelPage() {
  return (
    <div className="parcel-page">
      <section className="parcel-hero">
        <div className="container parcel-hero-grid">
          <div>
            <span className="hero-pill">Parcel delivery</span>
            <h1>Send parcels across the city with RealTimeCabs.</h1>
            <p>Choose parcel type, pickup and drop locations, then select the right vehicle for quick delivery.</p>
          </div>
          <div className="parcel-summary-card">
            <strong>Live parcel booking</strong>
            <span>Bike, Scooty, Auto and Mini options</span>
          </div>
        </div>

        {/* <div className="parcel-summary-card">
  <div className="parcel-summary-title">
    <i className="bxf bx-location" style={{ color: "#e81414" }} />
    <strong>Live parcel booking</strong>
  </div>

  <span>Bike, Scooty, Auto and Mini options</span>
</div> */}
      </section>

      <section className="container parcel-booking">
        <form className="parcel-form">
          <h2>Book a parcel delivery</h2>
          <label>
            Parcel Type
            <select defaultValue="">
              <option value="" disabled>
                Select parcel type
              </option>
              {parcelTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <div className="grid grid-2">
            <label>
              Pickup Location
              <span style={{ position: "relative", display: "block" }}>
                <FaMapMarkerAlt
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#e81414",
                    pointerEvents: "none",
                  }}
                />
                <input
                  placeholder="Enter pickup address"
                  style={{ paddingLeft: 42 }}
                />
              </span>
            </label>
            <label>
              Drop Location
              <span style={{ position: "relative", display: "block" }}>
                <FaMapMarkerAlt
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#e81414",
                    pointerEvents: "none",
                  }}
                />
                <input
                  placeholder="Enter drop address"
                  style={{ paddingLeft: 42 }}
                />
              </span>
            </label>
          </div>
          <label>
            Receiver Phone
            <input placeholder="Enter receiver mobile number" />
          </label>
          <label>
            Parcel Notes
            <textarea rows={4} placeholder="Add instructions like fragile, call before delivery, etc." />
          </label>
          <button type="submit">Continue Parcel Booking</button>
        </form>

        <aside className="vehicle-select">
          <h2>Select vehicle</h2>
          <div className="vehicle-grid">
            {vehicleTypes.map((vehicle) => (
              <button type="button" key={vehicle.name}>
                <strong>{vehicle.name}</strong>
                <span>{vehicle.detail}</span>
              </button>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
