import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import ArticleBody from '../components/Article'

import '../styling/base.sass'
import './post.css'

export default class Post extends React.Component {
	render() {
		const { frontmatter, html, fields } = this.props.data.markdownRemark
		const { lang } = frontmatter
		const languageClass = lang === 'ar' ? 't-rtl' : null

		return (
			<>
				<SEO {...frontmatter} />
				<Navbar invert />
				<Layout>
					<ArticleBody
						fields={fields}
						frontmatter={frontmatter}
						html={html}
						languageClass={languageClass}
					/>
				</Layout>
			</>
		)
	}
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				description
				lang
				author
				imageCaption
				imageAlt
				tags
				image {
					childImageSharp {
						fluid(maxWidth: 786) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
			fields {
				readingTime {
					words
					minutes
				}
			}
		}
	}
`
