import React from "react"
import styled from "styled-components"

const ContainerLi = styled.li`
	margin-bottom: 1rem;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 1ch;
`

const HeaderContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.span`
	display: block;
`

const StartEnd = styled.span`
	color: #706f6f;
	font-size: 14px;
`

const CvCustomLi = ({ svg, children, title, subtitle, startEnd }) => (
	<ContainerLi>
		<Header>
			{svg ? <div>{svg}</div> : <></>}
			<HeaderContent>
				<div>
					<Title>{title}</Title>
					<small>{subtitle}</small>
				</div>
				<StartEnd>{startEnd}</StartEnd>
			</HeaderContent>
		</Header>
		{children ? <p>{children}</p> : <></>}
	</ContainerLi>
)

export default CvCustomLi
