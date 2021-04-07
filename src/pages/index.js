import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import CvLinks from "../components/cv-links"
import CvEducation from "../components/cv-education"

const IndexPage = () => (
	<Layout>
		<Container>
			<SEO description={"José Carlos' Curriculum Vitae"} />
			<h1>José Carlos de Freitas</h1>
			<Row>
				<Col md={4}>
					<CvLinks />
					<CvEducation />
				</Col>
				<Col md={8}>

				</Col>
			</Row>

		</Container>
	</Layout>
)

export default IndexPage
