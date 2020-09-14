import React from 'react'

import { Link } from 'gatsby'

const messages = {
	en: {
		time: 'minute read'
	},
	ar: {
		time: 'دقائق من القراءة'
	}
}

export const Post = ({
	lang,
	title,
	path,
	date,
	image,
	imageAlt,
	author,
	featured,
	description,
	readingTime
}) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const languageClass = lang === 'ar' ? 'u-rightToLeft' : null
	const locale = lang === 'ar' ? 'ar-EG' : 'en-US'
	const localeDate = new Date(date).toLocaleDateString(locale, options)

	const localeTimeMinutes = Math.ceil(
		Number(readingTime.minutes)
	).toLocaleString(locale, options)
	const localeTimeString = messages[lang].time

	return (
		<Link
			to={path}
			className={`c-post ${languageClass}`}
			data-featured={featured}
		>
			<div>
				<Link to={path}>
					<h1>{title}</h1>
				</Link>
				<p>{description}</p>
				<div>
					<span>{author}</span>
					<span>
						{localeDate} — {localeTimeMinutes} {localeTimeString}
					</span>
				</div>
			</div>
			<img src={image.childImageSharp.fluid.src} alt={imageAlt} />
		</Link>
	)
}
