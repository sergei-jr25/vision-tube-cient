/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUUBLIC_REACT_APP_URL,
		PUBLIC_URL: process.env.NEXT_PUUBLIC_REACT_APP_PUBLIC
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/public/:path*',
				destination: `${process.env.NEXT_PUUBLIC_REACT_APP_PUBLIC}/:path*`
			},
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUUBLIC_REACT_APP_URL}/:path*`
			}
		]
	}
}

module.exports = nextConfig
