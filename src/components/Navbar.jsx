import React from 'react'
import { Link } from 'gatsby'

import styles from './Navbar.module.sass'

const Navbar = ({ invert }) => {
	return (
		<nav className={invert ? styles.invert : styles.navbar}>
			<Link to='/'>Home</Link>
			<Link to='/blog'>Blog</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	)
}

export default Navbar
