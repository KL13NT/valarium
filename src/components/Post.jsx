import React from 'react'

import { Link } from 'gatsby'

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

	const rtl = lang === 'ar' ? 't-rtl t-align-right' : ''
	const localeDate = new Date(date).toLocaleDateString('en-GB', options)
	const time = Math.ceil(Number(readingTime.minutes))

	return (
		<li className='c-post' data-featured={featured}>
			<div>
				<Link to={path}>
					<h1 className={rtl}>{title}</h1>
				</Link>
				<p className={rtl}>{description}</p>
				<div>
					<span>{author}</span>
					<span>
						{localeDate} — {time} min read
					</span>
				</div>
			</div>
			<img src={image.childImageSharp.fluid.src} alt={imageAlt} />
		</li>
	)
}
