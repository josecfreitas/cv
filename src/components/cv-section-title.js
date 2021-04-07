import React from "react"
import styled from "styled-components"

const CustomH2 = styled.h2`
	&:not(:first-child) {
		margin-top: 1em;
	}
	margin-bottom: 0.5em;
`

const CvSectionTitle = ({ children }) => <CustomH2>{children}</CustomH2>

export default CvSectionTitle
