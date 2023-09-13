/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   // disable: process.env.NODE_ENV === 'development',
//   register: true,
//   scope: '/app',
//   sw: 'service-worker.js',
//   //...
// })

// module.exports = withPWA({
//   // next.js config
//   reactStrictMode: true,
// })

const withPWA = require('next-pwa');

const config = {
  // your next config...
  reactStrictMode: true,
}

module.exports = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  scope: '/app',
  sw: 'service-worker.js',
  // disable: process.env.NODE_ENV === 'development',
})(config);


