import React from "react"
import styled from "styled-components"

const CustomH2 = styled.h2`
	margin: 1em 0 0.5em;
`

const CvSectionTitle = ({ children }) => <CustomH2>{children}</CustomH2>

export default CvSectionTitle
