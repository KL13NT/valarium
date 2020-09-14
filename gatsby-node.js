const path = require('path')

exports.createPages = async ({
	actions: { createPage },
	graphql,
	reporter
}) => {
	const blogPostTemplate = path.resolve('src/templates/post.js')
	const tagPageTemplate = path.resolve('src/templates/tags.js')

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 2000
			) {
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
	`)

	if (result.errors) {
		console.log(result.errors)
		reporter.panicOnBuild('Error while running GraphQL query.')
		return
	}

	const posts = result.data.allMarkdownRemark.edges

	createPage({
		path: '/blog',
		component: require.resolve('./src/templates/blog.js'),
		context: result.data.allMarkdownRemark
	})

	posts.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: blogPostTemplate,
			context: {} // additional data can be passed via context
		})
	})

	//TODO: add tags and authors
	// const tags = new Set([])

	// posts.forEach(({ node }) => {
	// 	if (node.frontmatter.tags)
	// 		node.frontmatter.tags.forEach(tag => tags.add(tag))
	// })

	// tags.forEach(tag => {
	// 	createPage({
	// 		path: `/tags/${tag}/`,
	// 		component: tagPageTemplate,
	// 		context: {
	// 			tag: tag
	// 		}
	// 	})
	// })
}
