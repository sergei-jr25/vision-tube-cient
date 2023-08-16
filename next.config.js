/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUUBLIC_REACT_APP_URL
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/public/:path*',
				destination: `${process.env.NEXT_PUUBLIC_REACT_APP_URL}/public/:path*`
			},
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUUBLIC_REACT_APP_URL}/api/:path*`
			}
		]
	}
}

module.exports = nextConfig
