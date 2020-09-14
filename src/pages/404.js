import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

import Four0Four from '../assets/undraw_page_not_found_su7k.svg'

import styles from './404.module.sass'

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<Navbar />
		<div className={styles.notfound}>
			<img src={Four0Four} alt='404 not found' />
			<p>This page doesn't exist. Try another one? </p>
			<a href='/' className='c-action'>
				Go back?
			</a>
		</div>
	</Layout>
)

export default NotFoundPage
