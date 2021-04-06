import React, { Component } from "react"

import styled from "styled-components"
import { Nav } from "react-bootstrap"

const ToggleMenu = styled.div`
	display: none;
	@media (max-width: ${props => props.collapseWidth}) {
		display: inline;
	}
`
const MenuSpan = styled.span`
	width: 27px;
	height: ${props => (props.show ? "0" : "2.25px")};
	background: #000;
	display: block;
	position: relative;
	z-index: 3;

	&:before {
		width: 27px;
		height: 2.25px;
		background: #000;
		content: "";
		left: 0;
		bottom: ${props => (props.show ? "0" : "6px")};
		position: absolute;
		transform: ${props => (props.show ? "rotate(45deg)" : "rotate(0)")};
		transition: ${props =>
			props.show
				? "bottom 0.1s, transform 0.1s 0.3s ease-in"
				: "transform 0.1s, bottom 0.1s 0.3s ease-in"};
	}
	&:after {
		width: 27px;
		height: 2.25px;
		background: #000;
		content: "";
		left: 0;
		bottom: ${props => (props.show ? "0" : "-6px")};
		position: absolute;
		transform: ${props => (props.show ? "rotate(-45deg)" : "rotate(0)")};
		transition: ${props =>
			props.show
				? "bottom 0.1s, transform 0.1s 0.3s ease-in"
				: "transform 0.1s, bottom 0.1s 0.3s ease-in"};
	}
`

const ContentMenu = styled.div`
	padding: 1rem;

	@media not all and (max-width: ${props => props.collapseWidth}) {
		.navbar-nav {
			flex-direction: row;
		}
		.nav-link {
			padding-right: 0.5rem;
			padding-left: 0.5rem;
		}
	}
	@media (max-width: ${props => props.collapseWidth}) {
		background: #fff;
		position: fixed;
		right: 100%;
		top: 0;
		height: 100vh;
		width: 100vw;

		transition: transform 0.3s ease-in-out;
		transform: translateX(${props => (props.show ? "100%" : 0)});
		z-index: 2;
	}
`

const LockScreen = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
	display: none;
	@media (max-width: ${props => props.collapseWidth}) {
		display: ${props => (props.show ? "block" : "none")};
	}
`

class NavbarMenuHeader extends Component {
	constructor(props) {
		// super( props ), é necessário pra utilizar o props do component, do qual ele é extendido
		super(props)

		// atribui valor inicial
		this.state = {
			show: false,
		}
	}

	handlerToggleMenu = () => {
		this.setState({ show: !this.state.show })
		if (this.state.show) {
			// FECHA MENU
			document.body.style.overflow = "auto"
		} else {
			// ABRE MENU
			document.body.style.overflow = "hidden"
		}
	}

	render() {
		// caso não venha nada do props o valor inicial de collapse é 768px
		const { collapseWidth = "768px" } = this.props

		return (
			<>
				{/* fragment  = <> */}
				<ToggleMenu
					onClick={this.handlerToggleMenu}
					collapseWidth={collapseWidth}
				>
					<MenuSpan show={this.state.show}></MenuSpan>
					<div className="sr-only">Menu</div>
				</ToggleMenu>
				<ContentMenu
					collapseWidth={collapseWidth}
					show={this.state.show}
				>
					<Nav className="ml-auto">{this.props.children}</Nav>
				</ContentMenu>
				<LockScreen
					onClick={this.handlerToggleMenu}
					collapseWidth={collapseWidth}
					show={this.state.show}
				/>
			</>
		)
	}
}

export default NavbarMenuHeader
