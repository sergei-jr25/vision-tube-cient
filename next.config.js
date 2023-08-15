/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false.valueOf,
	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.APP_URL}/uploads/:path*`
			},
			{
				source: '/api/:path*',
				destination: `${process.env.APP_URL}/api/:path*`
			}
		]
	}
}

module.exports = nextConfig
