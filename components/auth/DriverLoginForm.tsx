"use client";

type Props = {
  onLogin: () => void;
};

export function DriverLoginForm({
  onLogin,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Driver Login
        </h1>

        {/* Email Input */}
        <div className="mb-4">

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
          />

        </div>

        {/* Password Input */}
        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
          />

        </div>

        {/* Login Button */}
        <button
          onClick={onLogin}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>

      </div>

    </div>
  );
}