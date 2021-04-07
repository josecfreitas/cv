import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

const CvOtherSkills = () => (
	<>
		<CvSectionTitle>Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithSvg subtitle="Excel, Word and PowerPoint">
				Microsoft Office
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="Adobe XD, Photoshop and Illustrator">
				Adobe
			</CvLiWithSvg>
		</ul>
	</>
)

export default CvOtherSkills
