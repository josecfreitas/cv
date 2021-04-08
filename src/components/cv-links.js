import React from "react"
import CvCustomLi from "./cv-custom-li"

import SvgEmail from "../assets/svg/email.svg"
import SvgGithub from "../assets/svg/github.svg"
import SvgLinkedin from "../assets/svg/linkedin.svg"
import SvgWhatsapp from "../assets/svg/whatsapp.svg"
import SvgAlura from "../assets/svg/alura.svg"
import SvgSite from "../assets/svg/site.svg"

const CvLink = ({ svg, link, linkText }) => (
	<CvCustomLi
		svg={svg}
		title={
			<a href={link} target="_blank" rel="noreferrer">
				{linkText}
			</a>
		}
	/>
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
			linkText="github.com/jcfreitas2000"
		/>
		<CvLink
			svg={<SvgLinkedin />}
			link="https://www.linkedin.com/in/jose-carlos"
			linkText="linkedin.com/in/jose-carlos"
		/>
		<CvLink
			svg={<SvgWhatsapp />}
			link="https://api.whatsapp.com/send?phone=17981008663&text=Hello,%20I%20found%20you%20at%20josecarlos.tec.br"
			linkText="+55 (17) 98100-8663"
		/>
		<CvLink
			svg={<SvgAlura />}
			link="https://cursos.alura.com.br/user/josecfreitas"
			linkText="alura.com.br/user/josecfreitas"
		/>
		<CvLink
			svg={<SvgSite />}
			link="https://josecarlos.tec.br"
			linkText="josecarlos.tec.br"
		/>
	</ul>
)

export default CvLinks
