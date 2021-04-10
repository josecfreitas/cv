import React from "react"
import { Container } from "react-bootstrap"

import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const CustomFooter = styled.footer`
	padding: 2rem 0;
	margin-top: 2rem;
	background-color: #e9e9e9;
`

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			currentBuildDate {
				currentDate
			}
		}
	`)

	return (
		<CustomFooter>
			<Container>
				<div className="d-flex justify-content-between flex-wrap">
					<span>Updated on {data.currentBuildDate.currentDate}.</span>
					<span>Developed by José Carlos de Freitas</span>
				</div>
			</Container>
		</CustomFooter>
	)
}

export default Footer
