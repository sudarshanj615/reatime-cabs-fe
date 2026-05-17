"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const socialOptions = [
  {
    name: "Google",
    icon: <FcGoogle size={22} />,
  },

  {
    name: "Facebook",
    icon: <FaFacebookF size={20} color="#1877F2" />,
  },

  {
    name: "Apple",
    icon: <FaApple size={22} />,
  },
];

export default function SignInPage() {
  return (
    <div className="signin-page">
      <section className="signin-panel">

        <div className="signin-copy">
          <span className="signin-eyebrow">
            RealTimeCabs account access
          </span>

          <h1>
            Sign in to book, track, or drive with RealTimeCabs.
          </h1>

          <p>
            Choose your account type, continue with email,
            or use a social account to access your ride dashboard.
          </p>

          <div className="signin-benefits">
            <span>Live ride tracking</span>
            <span>Saved trips</span>
            <span>Driver dashboard</span>
          </div>
        </div>

        <div className="signin-card">

          <h2>Sign in to your account</h2>

          <p className="muted">
            Access your profile, ride history,
            and realtime trip updates.
          </p>

          <div
            className="account-switch"
            aria-label="Choose account type"
          >
            <Link href="/login/user">User</Link>
            <Link href="/login/driver">Driver</Link>
          </div>

          <form className="signin-form">

            <label>
              Email address
              <input
                className="input"
                type="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                className="input"
                type="password"
                placeholder="Enter password"
              />
            </label>

            <button className="button" type="submit">
              Sign In
            </button>

          </form>

          <div className="signin-divider">
            <span>or continue with</span>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="social-login-grid">

  {/* GOOGLE */}
  <button
    type="button"
    onClick={() => {
      window.location.href =
        "http://192.168.1.6:8081/oauth2/authorization/google";
    }}
  >
    <FcGoogle size={22} />
    Google
  </button>

  {/* FACEBOOK */}
  <button
    type="button"
    onClick={() => {
      window.location.href =
        "http://192.168.1.6:8081/oauth2/authorization/facebook";
    }}
  >
    <FaFacebookF size={20} color="#1877F2" />
    Facebook
  </button>

  {/* APPLE */}
  <button
    type="button"
    onClick={() => {
      window.location.href =
        "http://192.168.1.6:8081/oauth2/authorization/apple";
    }}
  >
    <FaApple size={22} />
    Apple
  </button>

</div>

          <p className="signin-register">
            New here?{" "}
            <Link href="/register/user">
              Create user account
            </Link>{" "}
            or{" "}
            <Link href="/register/driver">
              join as driver
            </Link>.
          </p>

        </div>
      </section>
    </div>
  );
}