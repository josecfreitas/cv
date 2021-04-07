import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import CvLinks from "../components/cv-links"
import CvEducation from "../components/cv-education"
import CvAchievements from "../components/cv-achievements"
import CvTitle from "../components/cv-title"

const IndexPage = () => (
	<Layout>
		<Container>
			<SEO description={"José Carlos' Curriculum Vitae"} />
			<CvTitle>José Carlos de Freitas</CvTitle>
			<Row>
				<Col md={5}>
					<CvLinks />
					<CvEducation />
					<CvAchievements />
				</Col>
				<Col md={7}>

				</Col>
			</Row>

		</Container>
	</Layout>
)

export default IndexPage
