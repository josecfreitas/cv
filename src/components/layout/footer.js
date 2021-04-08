import React from "react"
import { Container } from "react-bootstrap"

import styled from "styled-components"

const CustomFooter = styled.footer`
	padding: 2rem 0;
	margin-top: 2rem;
	background-color: #e9e9e9;
`

const Footer = () => {
	return (
		<CustomFooter>
			<Container>
				<div className="d-flex justify-content-between flex-wrap">
					<span>
						Updated on{" "}
						{new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
						.
					</span>
					<span>Developed by José Carlos de Freitas</span>
				</div>
			</Container>
		</CustomFooter>
	)
}

export default Footer
