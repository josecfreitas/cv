import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
	return (
		<footer>
			<Container>
				<div className="d-flex justify-content-between">
					<span>©{new Date().getFullYear()}, José Carlos</span>
					<span>
						Desenvolvido por José Carlos de Freitas
					</span>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
