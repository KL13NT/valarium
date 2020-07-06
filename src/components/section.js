import React from 'react'

import classes from './section.module.sass'

export default function Section({ children }) {
	return <section className={classes.section}>{children}</section>
}
