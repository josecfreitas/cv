import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
	width: ${props => props.width};
	max-width: 100%;
	height: auto;
`

const SvgFluid = ({ id, desc, width = "100%" }) => (
	<Svg width={width} viewBox="0 0 1 1">
		<desc>{desc}</desc>
		<use xlinkHref={`#${id}`} />
	</Svg>
)

export default SvgFluid
