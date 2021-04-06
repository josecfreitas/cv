import React from "react"
import logoSvg from "../../../assets/svg/logo.svg"
import SvgFixed from "../../svg-fixed"

const LogoSvgHeader = ({ siteTitle }) => (
	<SvgFixed
		id={logoSvg.id}
		desc={`Logo:  ${siteTitle}`}
		width="50px"
		height="50px"
		mdWidth="100px"
		mdHeight="100px"
	/>
)

export default LogoSvgHeader
