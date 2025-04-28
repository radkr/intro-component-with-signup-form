/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/intro-component-with-signup-form/"
      : "",
};

export default nextConfig;
