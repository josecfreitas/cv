import { Link } from "gatsby"
import React from "react"
import style from "./nav-link-header.module.scss"

const NavLinkHeader = ({ children, to }) => (
	<div className="nav-link">
		<Link to={to} activeClassName={style.active}>
			{children}
		</Link>
	</div>
)

export default NavLinkHeader
