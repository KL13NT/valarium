import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ArticleHeader = ({ image, languageClass, title, author, date, path,imageCaption, tags }) =>
	<>
		<div className='o-article-header'>
			<h1> { title } </h1>
			<div>
				<p>By { author }</p>
				<hr/>
			</div>
			<Img fluid={ image.childImageSharp.fluid }/>
			<span className='c-image-caption'>{ imageCaption }</span>
		</div>
	</>

const ArticleBody = ({ frontmatter, languageClass, html, fields }) =>
	<article className='o-article-body'>
		<ArticleHeader { ...frontmatter } { ...fields } languageClass={ languageClass }/>
		<section className={ languageClass } dangerouslySetInnerHTML={ { __html: html } }/>
		{
		}
	</article>


ArticleHeader.propTypes = {
	image: PropTypes.object.isRequired,
	languageClass: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

ArticleBody.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	languageClass: PropTypes.string.isRequired
}

export default ArticleBody