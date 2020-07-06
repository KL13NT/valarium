import React from 'react'

import logo from '../images/logo_small.png'
import classes from './nav.module.sass'

import { useStaticQuery, graphql } from 'gatsby'

export default function Nav() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					menuLinks {
						name
						link
					}
				}
			}
		}
	`)

	const { menuLinks } = data.site.siteMetadata

	return (
		<nav className={classes.desktop}>
			<input id='nav' type='checkbox' />
			<label htmlFor='nav'>
				<span></span>
				<span></span>
				<span></span>
			</label>
			<img alt='logo' src={logo} />
			<div>
				{menuLinks.map(({ link, name }) => (
					<a key={link} href={link}>
						{name}
					</a>
				))}
			</div>
		</nav>
	)
}
