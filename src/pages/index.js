/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'

import Ending from '../assets/undraw_donut_love_kau1.svg'

import Section1 from '../assets/undraw_conversation_h12g.svg'
import Section2 from '../assets/undraw_Group_chat_unwm.svg'
import Section3 from '../assets/undraw_certification_aif8.svg'
import Section4 from '../assets/undraw_work_chat_erdt.svg'
import Section5 from '../assets/undraw_gdpr_3xfb.svg'

import '../styling/main.sass'
import '../styling/styles.sass'
import '../styling/about.sass'

const About = () => {
	if (typeof window !== 'undefined') {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', user => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/'
					})
				}
			})
		}
	}
	return (
		<>
			<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			<SEO title='Home' />
			<Layout>
				<Header>
					<h1>
						Explore
						<br />
						Learn
						<br />
						Grow
					</h1>
					<p>
						An Egyptian non-profit online-only tech community with a focus on
						the people.
					</p>
					<a className='c-action' href='https://discord.gg/xrGAnTg'>
						Join for free
					</a>
				</Header>
				<div className='m-sections'>
					<section className='c-section'>
						<div className='c-section-description'>
							<h1>Enjoy safe, fun chats!</h1>
							<p>
								Our chats are governed by moderators and bots to make it as safe
								and respectable as possible. By joining you agree to the same
								rules.
							</p>
						</div>
						<div className='c-section-img'>
							<img src={Section1} alt='section image' />
						</div>
					</section>
					<section className='c-section u-flip-flex-row'>
						<div className='c-section-description'>
							<h1>Enhance your skills</h1>
							<p>
								Our coding challenges are available in a multitude of
								programming languages and cover various concepts, ranging in
								difficulty.
							</p>
						</div>
						<div className='c-section-img'>
							<img src={Section3} alt='section image' />
						</div>
					</section>
					<section className='c-section'>
						<div className='c-section-description'>
							<h1>Create & participate</h1>
							<p>
								Our community is member-driven. Meaning that they’re the ones
								that create, and the ones that participate, resulting in the
								benefit of all members involved.
							</p>
						</div>
						<div className='c-section-img'>
							<img src={Section2} alt='section image' />
						</div>
					</section>
					<section className='c-section u-flip-flex-row'>
						<div className='c-section-description'>
							<h1>Work together</h1>
							<p>
								From pair-programming all the way to mentorship and big
								projects, you can find your perfect match for a perfect project!
							</p>
						</div>
						<div className='c-section-img'>
							<img src={Section4} alt='section image' />
						</div>
					</section>
					<section className='c-section'>
						<div className='c-section-description'>
							<h1>Transparent & free</h1>
							<p>
								Your privacy and well-being matter to us. We'll never ask you
								anything you don't wish to tell, and all your questions are
								answered.
							</p>
						</div>
						<div className='c-section-img'>
							<img src={Section5} alt='section image' />
						</div>
					</section>
				</div>
				<footer>
					<img src={Ending} alt='Join for free' />
					<h1>We're waiting for you</h1>
					<a className='c-action' href='https://discord.gg/xrGAnTg'>
						Join now, it's free!
					</a>
					<div className='c-madeby'>
						<p>Made with ❤️ by Nabil Tharwat</p>
					</div>
				</footer>
			</Layout>
		</>
	)
}

export default About
