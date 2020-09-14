const path = require('path')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: 'Valarium',
		description:
			"Egypt's first online-only youth talent community. We help people of all ages get into tech with ease. Join us on our the journey!",
		author: 'Nabil Tharwat',
		siteUrl: 'https://valarium.netlify.app',
		creator: '@Nabil_Tharwat16',
		image: '/src/images/OG.png',
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
