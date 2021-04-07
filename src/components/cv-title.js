import React from "react"
import styled from "styled-components"

const CustomH1 = styled.h1`
	font-size: 96px;
  margin-bottom: 0.5em;
  
  	@media(max-width: 768px) {
	  	font-size: 48px;
	}
`

const CvTitle = ({ children }) => <CustomH1>{children}</CustomH1>

export default CvTitle
