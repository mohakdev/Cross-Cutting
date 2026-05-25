import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.com https://*.bootstrap.clerk.com https://*.clerkstatic.com https://cdn.jsdelivr.net https://unpkg.com",
              "style-src 'self' 'unsafe-inline' https://*.clerk.com https://*.clerkstatic.com",
              "connect-src 'self' https://*.clerk.com https://*.bootstrap.clerk.com https://*.clerkstatic.com https://*.supabase.co wss://*.supabase.co",
              "img-src 'self' data: https:",
              "font-src 'self' data: https://*.clerkstatic.com https://fonts.googleapis.com https://fonts.gstatic.com",
              "media-src 'self'",
              "frame-src 'self' https://*.clerk.com",
            ].join("; "),
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
