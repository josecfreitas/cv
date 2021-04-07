import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

import SvgEducation1 from "../assets/svg/education1.svg"
import SvgEducation2 from "../assets/svg/education2.svg"
import SvgEducation3 from "../assets/svg/education3.svg"

const EducationItem = ({ svg, degree, school, startEnd }) => (
	<CvLiWithSvg svg={svg} subtitle={school} startEnd={startEnd}>
		{degree}
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
