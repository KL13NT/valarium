/* eslint-disable react/display-name */
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

import { PostList } from '../components/PostList'

import '../styling/main.sass'
import '../styling/components.sass'
import '../styling/styles.sass'
import '../styling/modules.sass'

export default ({ pageContext: { edges } }) => {
	return (
		<>
			<SEO description="Valarium's Community-backed blog" title='Blog' />
			<Header semi>
				<h1>Community Blog</h1>
				<p>Members of the community wrote these.</p>
			</Header>
			<Layout centered>
				<PostList edges={edges} />
			</Layout>
		</>
	)
}
