import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'

import '../styling/main.sass'

const style = {
	textAlign: 'center'
}

export default () => (
	<>
		<Header semi>
			<h1>Contact</h1>
			<p>We'd love to hear your thoughts.</p>
		</Header>
		<Layout centered style={style}>
			<h1>Message delivered</h1>
			<p>We'll get back to you as soon as we read it. Hang tight!</p>
			<a href='/' className='c-action'>
				Go back to the home page
			</a>
		</Layout>
	</>
)
