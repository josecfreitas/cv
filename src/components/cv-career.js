import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvCareer = () => (
	<>
		<CvSectionTitle>Career</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				title="Java Full Stack Developer"
				subtitle="Database Group - GBD"
				startEnd="2014~2018"
			/>
			<CvCustomLi
				title="Co-founder / Software Enginner"
				subtitle="Bicrement Software House"
				startEnd="2016~2019"
			/>
			<CvCustomLi
				title="Co-founder / Software Enginner"
				subtitle="3r Agência"
				startEnd="2020~2020"
			/>
			<CvCustomLi
				title="Advanced Programmer Analyst"
				subtitle="QAT Global"
				startEnd="2020~*"
			/>
		</ul>
	</>
)

export default CvCareer
