import React from "react"
import styled from "styled-components"

const CustomLi = styled.li`
	display: flex;
	align-items: center;
	gap: 1ch;

	margin-bottom: 1rem;
`

const CvLiWithSvg = ({ svg, children }) => (
	<CustomLi>
		<div>{svg}</div>
		{children}
	</CustomLi>
)

export default CvLiWithSvg
