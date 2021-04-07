import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import CvLinks from "../components/cv-links"
import CvEducation from "../components/cv-education"
import CvAchievements from "../components/cv-achievements"
import CvHeader from "../components/cv-header"
import CvBio from "../components/cv-bio"
import CvCareer from "../components/cv-career"
import CvSkills from "../components/cv-skills"
import CvLanguages from "../components/cv-languages"
import CvOtherSkills from "../components/cv-other-skills"

const IndexPage = () => (
	<Layout>
		<Container>
			<SEO description={"José Carlos' Curriculum Vitae"} />
			<CvHeader>José Carlos de Freitas</CvHeader>
			<Row>
				<Col lg={5}>
					<CvLinks />
					<CvEducation />
					<CvAchievements />
					<CvLanguages />
				</Col>
				<Col lg={7}>
					<CvBio />
					<CvCareer />
					<CvSkills />
					<CvOtherSkills />
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
