export default function AboutPage() {
    return (
        <div className="w-full">

            {/* BACKGROUND IMAGE SECTION */}
            <section
                className="w-full bg-cover bg-center bg-no-repeat py-10"
                style={{
                    backgroundImage: "url('/images/aboutbg.png')",
                }}
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-8">

                    {/* HERO SECTION */}
                    <section className="py-5">
                        <h1 className="text-4xl font-black leading-tight md:text-6xl">
                            Smarter Rides.
                            <br />
                            Faster Deliveries.
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                            RealTimeCabs is a smart realtime
                            cab and parcel booking platform
                            designed to provide fast,
                            affordable, and reliable
                            transportation services for
                            everyone across the city.
                        </p>
                    </section>

                    {/* COMPANY INFO */}
                    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        <div className="flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 shadow-lg backdrop-blur-md">
                            <h2 className="text-2xl font-bold">
                                Our Mission
                            </h2>

                            <p className="leading-7 text-gray-700">
                                Our mission is to simplify
                                everyday travel and delivery
                                services using realtime
                                technology and smart mobility
                                solutions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 shadow-lg backdrop-blur-md">
                            <h2 className="text-2xl font-bold">
                                Our Vision
                            </h2>

                            <p className="leading-7 text-gray-700">
                                We aim to become one of India’s
                                most trusted mobility and parcel
                                delivery platforms.
                            </p>
                        </div>

                    </section>

                    {/* WHY CHOOSE US */}
                    <section className="flex flex-col items-center gap-6 rounded-2xl border border-white/20 bg-transparent p-10 text-center backdrop-blur-none">

                        <h2 className="text-3xl font-bold">
                            Why Choose RealTimeCabs?
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            <div className="rounded-xl bg-white/70 p-5 shadow">
                                <h3 className="mb-3 text-xl font-semibold">
                                    ⚡ Instant Booking
                                </h3>

                                <p className="leading-7 text-gray-700">
                                    Book rides and parcel delivery
                                    within minutes using realtime
                                    driver matching.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/70 p-5 shadow">
                                <h3 className="mb-3 text-xl font-semibold">
                                    🛡 Safe & Reliable
                                </h3>

                                <p className="leading-7 text-gray-700">
                                    Verified drivers and live ride
                                    tracking ensure safe journeys
                                    and secure deliveries.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/70 p-5 shadow">
                                <h3 className="mb-3 text-xl font-semibold">
                                    💰 Affordable Pricing
                                </h3>

                                <p className="leading-7 text-gray-700">
                                    Transparent pricing with budget
                                    friendly ride and parcel options.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/70 p-5 shadow">
                                <h3 className="mb-3 text-xl font-semibold">
                                    📦 Smart Parcel Delivery
                                </h3>

                                <p className="leading-7 text-gray-700">
                                    Deliver documents, groceries,
                                    food, and packages quickly across
                                    the city.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* FINAL CTA */}
                   <section className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/ p-10 text-center backdrop-blur-sm">

                        <h2 className="text-3xl font-extrabold md:text-5xl">
                            Think Travel.
                            <br />
                            Think RealTimeCabs.
                        </h2>

                        <p className="max-w-3xl leading-8 text-gray-700">
                            Join thousands of riders and parcel
                            users who trust RealTimeCabs for
                            everyday transportation and delivery
                            needs.
                        </p>

                        <div className="mt-2 flex flex-wrap justify-center gap-4">

                            <a
                                href="/signin"
                                className="rounded-xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-[#FFC72C] hover:text-black"
                            >
                                Book a Ride
                            </a>

                            <a
                                href="/parcel"
                                className="rounded-xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-[#FFC72C] hover:text-black"
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