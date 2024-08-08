/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/test',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
