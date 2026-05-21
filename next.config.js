/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) return [];

    const backendOrigin = apiUrl.replace(/\/api\/?$/, "").replace(/\/$/, "");

    return [
      {
        source: "/backend-api/:path*",
        destination: `${backendOrigin}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/login/user",
        destination: "/signin?mode=login&role=user",
        permanent: true,
      },
      {
        source: "/login/driver",
        destination: "/signin?mode=login&role=driver",
        permanent: true,
      },
      {
        source: "/register/user",
        destination: "/signin?mode=signup&role=user",
        permanent: true,
      },
      {
        source: "/register/driver",
        destination: "/signin?mode=signup&role=driver",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
