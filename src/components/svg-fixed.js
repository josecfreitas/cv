import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
	width: ${props => props.width};
	height: ${props => props.height};
	@media (min-width: 768px) {
		width: ${props => props.mdWidth || props.width};
		height: ${props => props.mdHeight || props.height};
	}
`

const SvgFixed = ({
	id,
	desc,
	width = "50px",
	height = "50px",
	mdWidth,
	mdHeight,
}) => (
	<Svg width={width} height={height} mdWidth={mdWidth} mdHeight={mdHeight}>
		<desc>{desc}</desc>
		<use xlinkHref={`#${id}`} />
	</Svg>
)

export default SvgFixed
