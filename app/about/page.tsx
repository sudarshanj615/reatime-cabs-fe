export default function AboutPage() {
    return (
        <div className="page-shell">

            {/* BACKGROUND IMAGE SECTION */}
            <section
                className="about-wrapper"
                style={{
                    backgroundImage: "url('/images/aboutbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    padding: "40px 0",
                }}
            >
                <div className="container stack">

                    {/* HERO SECTION */}
                    <section
                        style={{
                            padding: "20px 0 10px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "52px",
                                fontWeight: "900",
                                margin: 0,
                                lineHeight: "1.1",
                            }}
                        >
                            Smarter Rides.
                            <br />
                            Faster Deliveries.
                        </h1>

                        <p
                            className="muted"
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.8",
                                maxWidth: "760px",
                                marginTop: "18px",
                            }}
                        >
                            RealTimeCabs is a smart realtime
                            cab and parcel booking platform
                            designed to provide fast,
                            affordable, and reliable
                            transportation services for
                            everyone across the city.
                        </p>
                    </section>

                    {/* COMPANY INFO */}
                    <section className="grid grid-2">
                        <div className="card stack">
                            <h2>Our Mission</h2>

                            <p className="muted">
                                Our mission is to simplify
                                everyday travel and delivery
                                services using realtime
                                technology and smart mobility
                                solutions.
                            </p>
                        </div>

                        <div className="card stack">
                            <h2>Our Vision</h2>

                            <p className="muted">
                                We aim to become one of India’s
                                most trusted mobility and parcel
                                delivery platforms.
                            </p>
                        </div>
                    </section>

                    {/* WHY CHOOSE US */}
                    <section className="card stack">
                        <h2>Why Choose RealTimeCabs?</h2>

                        <div className="grid grid-2">
                            <div className="feature-card">
                                <h3>⚡ Instant Booking</h3>

                                <p>
                                    Book rides and parcel delivery
                                    within minutes using realtime
                                    driver matching.
                                </p>
                            </div>

                            <div className="feature-card">
                                <h3>🛡 Safe & Reliable</h3>

                                <p>
                                    Verified drivers and live ride
                                    tracking ensure safe journeys
                                    and secure deliveries.
                                </p>
                            </div>

                            <div className="feature-card">
                                <h3>💰 Affordable Pricing</h3>

                                <p>
                                    Transparent pricing with budget
                                    friendly ride and parcel options.
                                </p>
                            </div>

                            <div className="feature-card">
                                <h3>📦 Smart Parcel Delivery</h3>

                                <p>
                                    Deliver documents, groceries,
                                    food, and packages quickly across
                                    the city.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <section
                        className="card stack"
                        style={{
                            textAlign: "center",
                            padding: "42px",
                            background: "rgba(255, 255, 255, 0.45)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "38px",
                            }}
                        >
                            Think Travel.
                            <br />
                            Think RealTimeCabs.
                        </h2>

                        <p
                            className="muted"
                            style={{
                                maxWidth: "700px",
                                margin: "0 auto",
                                lineHeight: "1.8",
                            }}
                        >
                            Join thousands of riders and parcel
                            users who trust RealTimeCabs for
                            everyday transportation and delivery
                            needs.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "16px",
                                flexWrap: "wrap",
                                marginTop: "10px",
                            }}
                        >
                            <a
                                href="/signin"
                                className="button"
                            >
                                Book a Ride
                            </a>

                            <a
                                href="/parcel"
                                className="button secondary"
                            >
                                Send Parcel
                            </a>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    );
}