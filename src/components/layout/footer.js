import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
	return (
		<footer>
			<Container>
				<div className="d-flex justify-content-between">
					<span>©{new Date().getFullYear()}, 3R Eventos</span>
					<span>
						Desenvolvido por{" "}
						<a href="https://agencia3r.com.br" target="agencia3r">
							3r Agência
						</a>
					</span>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
