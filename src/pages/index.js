import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../globals.sass'
import '../utilities.sass'

import welcome from '../images/undraw_welcoming_xvuq.svg'
import Section from '../components/section'

const IndexPage = () => {
	if (window.netlifyIdentity) {
		window.netlifyIdentity.on('init', function (user) {
			if (!user) {
				window.netlifyIdentity.on('login', function () {
					document.location.href = '/admin/'
				})
			}
		})
	}

	return (
		<Layout>
			<SEO title='Home' />
			<header>
				<Section>
					<div className='c-section-description'>
						<h1>
							Welcome to<span className='c-name'>Valarium</span>
						</h1>
						<p>
							Egypt&apos;s first online-only youth talent community. We help
							people of all ages get into tech with ease. Join us on our
							journey!
						</p>
						<a className='c-action' href='https://discord.gg/xrGAnTg'>
							join us
						</a>
					</div>
					<div className='c-section-img'>
						<img alt='Welcome' src={welcome} />
					</div>
				</Section>
			</header>
		</Layout>
	)
}

export default IndexPage
