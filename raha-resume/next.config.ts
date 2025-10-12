// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   i18n: {
//     locales: ['fa', 'en'],
//     defaultLocale: 'fa',
//     localeDetection: true,
//   },

//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
    localeDetection: true,
  },
}

module.exports = nextConfig

