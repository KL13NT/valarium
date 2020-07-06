module.exports = {
	siteMetadata: {
		title: 'Valarium',
		description:
			"Egypt's first online-only youth talent community. We help people of all ages get into tech with ease. Join us on our the journey!",
		author: 'Nabil Tharwat',
		siteUrl: 'https://valarium.netlify.app',
		creator: '@Nabil_Tharwat16',
		image: '/images/OG.png',
		logo: '/images/logo.png',
		name: 'Valarium',
		menuLinks: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'About',
				link: '/about'
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
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/src/blog`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Valarium Online Community',
				short_name: 'Valarium',
				start_url: '/',
				background_color: '#FFE600',
				icon: 'src/images/logo.png', // This path is relative to the root of the site.
				display: 'standalone',
				crossOrigin: 'use-credentials',
				orientation: 'portrait',
				theme_color: '#2F3BA2'
			}
		}
	]
}
