const path = require('path')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: 'Valarium',
		description:
			"An Egyptian tech community with a focus on the people.",
		author: 'Nabil Tharwat',
		siteUrl: 'https://valarium.netlify.app',
		creator: '@Nabil_Tharwat16',
		image: '/static/OG.png',
		logo: '/src/assets/logo.png',
		name: 'Valarium',
		menuLinks: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Contact',
				link: '/contact'
			},
			{
				name: 'Blog',
				link: '/blog'
			}
		]
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Valarium Non-Profit Community',
				short_name: 'Valarium',
				start_url: '/',
				background_color: '#f7f0eb',
				theme_color: '#a2466c',
				display: 'standalone',
				icon: `${__dirname}/src/assets/logo.png`
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/blog`
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-reading-time',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 500
						}
					}
				]
			}
		}
	]
}
