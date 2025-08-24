/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necessário para exportação estática

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ⚠️ Só adicione isso se você estiver publicando em um subdiretório como https://usuario.github.io/repositorio
  basePath: '/site',
  assetPrefix: '/site/',
}

export default nextConfig
