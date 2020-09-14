import React from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'

import '../styling/main.sass'
import SEO from '../components/SEO'
const styles = require('./contact.module.sass')

export default () => (
	<>
		<SEO title='Contact' description="We'd love to hear your thoughts" />
		<Header semi>
			<h1>Contact</h1>
			<p>We'd love to hear your thoughts.</p>
		</Header>
		<Layout>
			<div className={styles.contact}>
				<form
					name='contact'
					action='/submission'
					data-netlify='true'
					method='POST'
				>
					<label>Full Name</label>
					<input
						className='c-input'
						type='text'
						name='name'
						placeholder='John Doe'
						required
						minLength={5}
					/>
					<label>Contact (Email or Phone)</label>
					<input
						className='c-input'
						type='text'
						name='contact method'
						placeholder='example@example.co'
						required
						minLength={5}
					/>
					<label>Message</label>
					<textarea
						className='c-input'
						name='message'
						placeholder='Hello, Valarium!'
						required
						minLength={10}
					></textarea>
					<button className='c-action--primary' type='submit'>
						Send
					</button>
				</form>
				<div>
					<h1>How can we help?</h1>
					<p>
						Our moderators will read and (if needed) reply as fast as possible.
					</p>
					<p>Use this form if you:</p>
					<ul>
						<li>Wish to talk to the founders directly.</li>
						<li>Want to give feedback on how we do things.</li>
						<li>Have an idea to improve our community.</li>
						<li>Have otherwise relevant questions in mind.</li>
					</ul>
					<p>
						You may also use this form if you have any legal inquiries about our
						privacy policy or community guidelines.
					</p>
					<p className={styles.disclaimer}>
						Messages are automatically filtered for spam. If your message lands
						in our spam folder it may take us a while to reach out.
					</p>
				</div>
			</div>
		</Layout>
	</>
)
