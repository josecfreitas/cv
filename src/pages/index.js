import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import SvgFluid from "../components/svg-fluid"
import logoSvg from "../assets/svg/logo.svg"

const IndexPage = () => (
	<Layout>
		<Container>
			<SEO title="Organizadora de eventos" />
			<h1>Escreva a landing page aqui</h1>
			<SvgFluid id={logoSvg.id} desc={"Logo da 3R"} width="200px" />
		</Container>
	</Layout>
)

export default IndexPage
