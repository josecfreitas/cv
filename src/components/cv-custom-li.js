import React from "react"
import styled from "styled-components"

const ContainerLi = styled.li`
	margin-bottom: 1rem;
	
	p:last-child {
		margin-bottom: 0;
	}
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
	font-size: 1.05rem;
`

const Subtitle = styled.small`
	color: #706f6f;
`

const StartEnd = styled.span`
	color: #706f6f;
	font-size: 14px;
`

const Text = styled.div`
	margin-top: 0.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #e9e9e9;
	font-size: .9rem;
`

const CvCustomLi = ({ svg, children, title, subtitle, startEnd }) => (
	<ContainerLi>
		<Header>
			{svg ? <div>{svg}</div> : <></>}
			<HeaderContent>
				<div>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</div>
				<StartEnd>{startEnd}</StartEnd>
			</HeaderContent>
		</Header>
		{children ? <Text>{children}</Text> : <></>}
	</ContainerLi>
)

export default CvCustomLi
