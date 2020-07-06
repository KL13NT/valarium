import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// import classes from './layout.sass'
import '../tokens.sass'

import Nav from './nav'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={() => (
			<>
				<Nav />
				<div>{children}</div>
			</>
		)}
	/>
)

export default Layout
