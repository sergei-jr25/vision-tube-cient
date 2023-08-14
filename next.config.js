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
				destination: 'http://dpg-cjd0cr7db61s73ak8ol0-a/uploads/:path*'
			},
			{
				source: '/api/:path*',
				destination: 'http://dpg-cjd0cr7db61s73ak8ol0-a/api/:path*'
			}
		]
	}
}

module.exports = nextConfig
