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
				destination: 'http://localhost:5000/uploads/:path*'
			},
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*'
			}
		]
	}
}

module.exports = nextConfig
