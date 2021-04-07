import React from "react"
import styled from "styled-components"

const CustomH1 = styled.h1`
	font-size: 96px;
`

const CvTitle = ({ children }) => <CustomH1>{children}</CustomH1>

export default CvTitle
