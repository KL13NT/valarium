import React from 'react'

import { Post } from './Post'

export const PostList = ({ edges }) => (
	<ul className='c-posts'>
		{edges.map(({ node: { frontmatter, fields } }) => (
			<Post {...frontmatter} {...fields} />
		))}
	</ul>
)
