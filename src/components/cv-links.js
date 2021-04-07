import React from "react"
import styled from "styled-components"

import SvgEmail from "../assets/svg/email.svg"
import SvgGithub from "../assets/svg/github.svg"
import SvgLinkedin from "../assets/svg/linkedin.svg"
import SvgWhatsapp from "../assets/svg/whatsapp.svg"
import SvgAlura from "../assets/svg/alura.svg"

const CvLinkLi = styled.li`
	padding: 0;
	display: flex;
	gap: 1ch;
	margin-bottom: 0.5rem;
`

const CvLink = ({ svg, link, linkText }) => (
	<CvLinkLi>
		<div>{svg}</div>
		<a href={link}>{linkText}</a>
	</CvLinkLi>
)

const CvLinks = () => (
	<ul className="list-unstyled">
		<CvLink
			svg={<SvgEmail />}
			link="mailto:josecfreitas@outlook.com.br"
			linkText="josecfreitas@outlook.com.br"
		/>
		<CvLink
			svg={<SvgGithub />}
			link="https://github.com/jcfreitas2000"
			linkText="https://github.com/jcfreitas2000"
		/>
		<CvLink
			svg={<SvgLinkedin />}
			link="https://www.linkedin.com/in/jose-carlos/"
			linkText="https://www.linkedin.com/in/jose-carlos/"
		/>
		<CvLink
			svg={<SvgWhatsapp />}
			link="https://api.whatsapp.com/send?phone=17981008663&text=Hello,%20I%20found%20you%20at%20josecarlos.tec.br"
			linkText="+55 (17) 98100-8663"
		/>
		<CvLink
			svg={<SvgAlura />}
			link="https://cursos.alura.com.br/user/josecfreitas"
			linkText="https://cursos.alura.com.br/user/josecfreitas"
		/>
	</ul>
)

export default CvLinks
