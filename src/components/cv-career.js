import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

const CvCareer = () => (
	<>
		<CvSectionTitle>Career</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithSvg subtitle="Database Group - GBD" startEnd="2014~2018">
				Java Full Stack Developer
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="Bicrement Software House" startEnd="2016~2019">
				Co-founder / Software Enginner
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="3r Agência" startEnd="2020~2020">
				Co-founder / Software Enginner
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="QAT Global" startEnd="2020~*">
				Advanced Programmer Analyst
			</CvLiWithSvg>
		</ul>
	</>
)

export default CvCareer
