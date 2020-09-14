import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

import { PostList } from '../components/PostList'

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark

	const tagHeader = `Posts tagged with "${tag}"`
	const description = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`

	return (
		<>
			<SEO description={description} path={`/tags/${tag}`} title={tagHeader} />
			<Header semi>
				<h1>{tag}</h1>
				<p>{description}</p>
			</Header>
			<Layout centered>
				<PostList edges={edges} />
			</Layout>
		</>
	)
}

export default Tags

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					frontmatter {
						path
						date
						title
						author
						description
						imageCaption
						imageAlt
						featured
						lang
						tags
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									src
								}
							}
						}
					}
					fields {
						readingTime {
							minutes
							words
						}
					}
				}
			}
		}
	}
`
