import React from 'react'

const Layout = ({ centered, children, ...props }) => (
	<div className={centered ? 'o-layout--centered' : null} {...props}>
		<link
			href='https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700;900&display=swap'
			rel='stylesheet'
		/>
		{children}
	</div>
)

export default Layout
