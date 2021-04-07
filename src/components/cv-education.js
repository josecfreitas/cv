import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"
import styled from "styled-components"

import SvgEducation1 from "../assets/svg/education1.svg"
import SvgEducation2 from "../assets/svg/education2.svg"
import SvgEducation3 from "../assets/svg/education3.svg"

const CustomDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Degree = styled.span`
	display: block;
`

const StartEnd = styled.span`
	color: #706f6f;
	font-size: 14px;
`

const EducationItem = ({ svg, degree, school, startEnd }) => (
	<CvLiWithSvg svg={svg}>
		<CustomDiv>
			<div>
				<Degree>{degree}</Degree>
				<small>{school}</small>
			</div>
			<StartEnd>{startEnd}</StartEnd>
		</CustomDiv>
	</CvLiWithSvg>
)

const CvEducation = () => (
	<>
		<CvSectionTitle>Education</CvSectionTitle>
		<ul className="list-unstyled">
			<EducationItem
				svg={<SvgEducation1 />}
				degree="Computer Technician"
				school="ETEC Philadelpho Gouvea Netto"
				startEnd="2011~2012"
			/>
			<EducationItem
				svg={<SvgEducation2 />}
				degree="Bachelor's in Computer Science"
				school="UNESP - IBILCE"
				startEnd="2013~2016"
			/>
			<EducationItem
				svg={<SvgEducation3 />}
				degree="Master's in Computer Science"
				school="UNESP - IBILCE"
				startEnd="2017~2020"
			/>
		</ul>
	</>
)

export default CvEducation
