import React from 'react'

import styles from './Header.module.sass'
import Navbar from './Navbar'

export default ({ children, semi }) => (
	<header className={semi ? styles.semi : styles.full}>
		<Navbar />
		{/* <div classNameName='o-header-video'>
						<video src={Video} loop autoPlay muted />
						<div></div>
					</div> */}
		<div className={styles.content}>{children}</div>
	</header>
)
