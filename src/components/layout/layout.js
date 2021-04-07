import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Footer from "./footer"

const Layout = ({ children }) => {
	return (
		<Fragment>
			<main>{children}</main>
			<Footer></Footer>
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
