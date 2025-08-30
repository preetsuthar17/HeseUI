/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/preetsuthar17/HeseUI',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/preetsuthar17',
        permanent: false,
      },
      {
        source: '/hextaui',
        destination: 'https://www.hextaui.com',
        permanent: false,
      },
      {
        source: '/sponsor',
        destination: 'https://github.com/sponsors/preetsuthar17',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
