import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import LogoSvgHeader from "./logo-svg-header"
import NavbarMenuHeader from "./navbar-menu-header"
import NavLinkHeader from "./nav-link-header/nav-link-header"

const Header = ({ siteTitle }) => (
	<header>
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand className="mr-auto">
					<h1 className="mb-0">
						<Link to="/" className="d-block">
							{/*<LogoImageHeader siteTitle={siteTitle}/>*/}
							<LogoSvgHeader siteTitle={siteTitle} />
							<span className={"sr-only"}>{siteTitle}</span>
						</Link>
					</h1>
				</Navbar.Brand>

				<NavbarMenuHeader collapseWidth="700px">
					<NavLinkHeader to="/">Início</NavLinkHeader>
					<NavLinkHeader to="/page-2/">Page 2</NavLinkHeader>
				</NavbarMenuHeader>
			</Container>
		</Navbar>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
