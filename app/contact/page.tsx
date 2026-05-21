export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>You can find us here</h1>
          <p>Find help for your ride, driver account, payment, or safety queries.</p>
        </div>
      </section>

      <section className="container contact-grid">
        <form className="contact-form">
          <h2>Find help for your queries here:</h2>
          <label>
            Name *
            <input placeholder="Enter your name" />
          </label>
          <label>
            Email Address *
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Mobile Number *
            <input placeholder="Enter your mobile number" />
          </label>
          <label>
            You are a *
            <select defaultValue="">
              <option value="" disabled>
                Select account type
              </option>
              <option>Customer</option>
              <option>Driver</option>
              <option>Business partner</option>
            </select>
          </label>
          <label>
            Select Query *
            <select defaultValue="">
              <option value="" disabled>
                Select query
              </option>
              <option>Ride booking</option>
              <option>Payment issue</option>
              <option>Driver onboarding</option>
              <option>Safety support</option>
            </select>
          </label>
          <label>
            Comment *
            <textarea placeholder="Write your message" rows={5} />
          </label>
          <button type="submit">Submit</button>
        </form>

        <aside className="contact-addresses">
          <div>
            <h3>Registered Office Address:</h3>
            <p>RealTimeCabs Mobility Pvt Ltd, 3rd Floor, City Arcade, HSR Layout, Bangalore - 560102.</p>
          </div>
          <div>
            <h3>City Office:</h3>
            <p>RealTimeCabs Support Center, MG Road, Bengaluru, Karnataka - 560001.</p>
          </div>
          <div>
            <h3>Corporate Office:</h3>
            <p>RealTimeCabs Tower, Outer Ring Road, Bellandur, Bengaluru, Karnataka - 560103.</p>
          </div>
          <div className="contact-apps">
            <a href="/signin?mode=login&role=user">Customer app</a>
            <a href="/signin?mode=login&role=driver">Captain app</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
