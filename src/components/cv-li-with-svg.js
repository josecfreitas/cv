import React from "react"
import styled from "styled-components"

const CustomLi = styled.li`
	display: flex;
	align-items: center;
	gap: 1ch;

	margin-bottom: 1rem;
`

const CustomDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Text = styled.span`
	display: block;
`

const StartEnd = styled.span`
	color: #706f6f;
	font-size: 14px;
`

const CvLiWithSvg = ({ svg, children, subtitle, startEnd }) => (
	<CustomLi>
		{svg ? <div>{svg}</div> : <></>}
		<CustomDiv>
			<div>
				<Text>{children}</Text>
				<small>{subtitle}</small>
			</div>
			<StartEnd>{startEnd}</StartEnd>
		</CustomDiv>
	</CustomLi>
)

export default CvLiWithSvg
