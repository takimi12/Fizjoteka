/** @type {import('next').NextConfig} */
const nextConfig = {  env: {
  API_URL: "http://localhost:3000",
  MONGODB_URL: process.env.MONGODB_URL,
  // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: "http://localhost:3000",
},
};

export default nextConfig;