import React from 'react'
import { Helmet } from 'react-helmet'

const hostname = 'https://valarium.netlify.app'

const defaultTitle = 'Blog'
const defaultDescription = 'Education is a right'
const defaultOGImagePath = '/OG.png'
const defaultPath = '/'

function SEO({
	title = defaultTitle,
	description = defaultDescription,
	path = defaultPath,
	image
}) {
	const ogImageUrl = image
		? `${hostname}${image.childImageSharp.fluid.src}`
		: `${hostname}${defaultOGImagePath}`
	const url = `${hostname}${path}`
	const finalTitle = 'Valarium - ' + title
	const fullDescription = `${description}`

	return (
		<Helmet>
			<title>{finalTitle}</title>
			<meta
				name='google-site-verification'
				content='Jwd5WF70ZzZgB0muYxnSlHsVh3allc411SZx25cGYTo'
			/>
			<meta content={finalTitle} property='og:title' />
			<meta content='website' property='og:type' />
			<meta content={fullDescription} name='description' />
			<meta content={fullDescription} property='og:description' />
			<meta content={url} property='og:url' />
			<meta content='Valarium' property='og:site_name' />
			<meta content={ogImageUrl} property='og:image' />
			<meta content={'image/jpeg'} property='og:image:type' />
			<meta content={ogImageUrl} property='og:image:url' />
			<meta content={ogImageUrl} property='og:image:secure_url' />
			<meta content='summary_large_image' name='twitter:card'></meta>
			<meta content={finalTitle} property='twitter:title' />
			<meta content={fullDescription} property='twitter:description' />
			<meta content='@Nabil_Tharwat' property='twitter:creator' />
			<meta content={ogImageUrl} property='twitter:image' />
			<html lang='en-GB' />

			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta
				name='msapplication-TileImage'
				content='../assets/icons/ms-icon-144x144.png'
			/>
			<meta name='theme-color' content='#ffffff' />
			<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			<link href='./styles.sass' rel='stylesheet' type='text/css' />
			<link
				href='https://fonts.googleapis.com/css?family=Oswald:200,400&amp;display=swap'
				rel='stylesheet'
			/>
		</Helmet>
	)
}

export default SEO
