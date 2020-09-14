import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'

import '../styling/main.sass'

const style = {
	textAlign: 'center'
}

const Valid = () => (
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

const Invalid = () => (
	<>
		<Header semi>
			<h1>Contact</h1>
			<p>We'd love to hear your thoughts.</p>
		</Header>
		<Layout centered style={style}>
			<h1>Check your input</h1>
			<p>It seems something is missing in what you submitted!</p>
			<a href='/contact' className='c-action'>
				Try again
			</a>
		</Layout>
	</>
)

export default () => {
	if (typeof window !== 'undefined') {
		const urlParams = new URLSearchParams(window.location.search)

		const name = urlParams.get('name')
		const method = urlParams.get('contact method')
		const message = urlParams.get('message')

		if (!name || !method || !message) return <Invalid />
		return <Valid />
	}

	return (
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
}
