import React from "react"
import styled from "styled-components"

const ContainerLi = styled.li`
	margin-bottom: 1rem;

	p:last-child {
		margin-bottom: 0;
	}
`

const SvgContainer = styled.div`
	margin-right: 1ch;

	svg {
		width: 1.5rem;
	}
`

const Header = styled.div`
	display: flex;
	align-items: center;
`

const HeaderContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.span`
	display: block;
	font-weight: 500;
	word-break: break-word;
`

const Subtitle = styled.small`
	color: #706f6f;
	word-break: break-word;
`

const StartEnd = styled.span`
	color: #706f6f;
	font-size: 14px;
	margin-left: 1ch;
`

const Text = styled.div`
	margin-top: 0.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #e9e9e9;
	font-size: 0.9rem;
`

const CvCustomLi = ({ svg, children, title, subtitle, startEnd }) => (
	<ContainerLi>
		<Header>
			{svg ? <SvgContainer>{svg}</SvgContainer> : <></>}
			<HeaderContent>
				<div>
					{title ? <Title>{title}</Title> : <></>}
					{subtitle ? <Subtitle>{subtitle}</Subtitle> : <></>}
				</div>
				{startEnd ? <StartEnd>{startEnd}</StartEnd> : <></>}
			</HeaderContent>
		</Header>
		{children ? <Text>{children}</Text> : <></>}
	</ContainerLi>
)

export default CvCustomLi
