import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

const Layout = ({ children }) => {
	const location = useLocation()

	return (
		<div>
			<Header currentPath={location.pathname} />
			<main>{children}</main>
			{/* Здесь может быть Footer, если он у вас есть */}
		</div>
	)
}

export default Layout
