import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

import SvgEducation1 from "../assets/svg/education1.svg"
import SvgEducation2 from "../assets/svg/education2.svg"
import SvgEducation3 from "../assets/svg/education3.svg"

const EducationItem = ({ svg, degree, school, startEnd }) => (
	<CvCustomLi
		svg={svg}
		title={degree}
		subtitle={school}
		startEnd={startEnd}
	/>
)

const CvEducation = () => (
	<>
		<CvSectionTitle>Education</CvSectionTitle>
		<ul className="list-unstyled">
			<EducationItem
				svg={<SvgEducation1 />}
				degree="180+ Technology Courses"
				school="Alura"
				startEnd="2017~*"
			/>
			<EducationItem
				svg={<SvgEducation3 />}
				degree="Master's in Computer Science"
				school="UNESP - IBILCE"
				startEnd="2017~2020"
			/>
			<EducationItem
				svg={<SvgEducation2 />}
				degree="Bachelor's in Computer Science"
				school="UNESP - IBILCE"
				startEnd="2013~2016"
			/>
			<EducationItem
				svg={<SvgEducation1 />}
				degree="Computer Technician"
				school="ETEC Philadelpho Gouvea Netto"
				startEnd="2011~2012"
			/>
		</ul>
	</>
)

export default CvEducation
